'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);
    const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (!formspreeEndpoint) {
      console.error('El endpoint de Formspree no está configurado.');
      setStatus('error');
      return;
    }
    
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.successMessage}>
        <p>¡Gracias por su mensaje! Nos comunicaremos con usted a la brevedad.</p>
        <button onClick={() => setStatus('idle')} className={styles.submitButton}>
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" name="name" placeholder="Su nombre completo" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="company">Empresa</label>
        <input type="text" id="company" name="company" placeholder="Nombre de su empresa" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" id="email" name="email" placeholder="su@correo.com" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Mensaje</label>
        <textarea id="message" name="message" rows={5} placeholder="¿Cómo podemos ayudarle con su logística y distribución?" required></textarea>
      </div>
      <button type="submit" className={styles.submitButton} disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
      </button>
      {status === 'error' && (
        <p className={styles.errorMessage}>Ocurrió un error al enviar el formulario. Por favor intente nuevamente.</p>
      )}
    </form>
  );
}
