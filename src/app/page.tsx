import styles from './page.module.css';
import { ShoppingCart, TrendingUp, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Distribución Estratégica para Marketplaces</h1>
          <p className={styles.subtitle}>
            Optimizamos su cadena de suministro para escalar en el mercado estadounidense.
          </p>
          <a href="#contacto" className={styles.ctaButton}>Conectar Ahora</a>
        </div>
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className={`${styles.section} ${styles.bgWhite}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Nosotros</h2>
          <p className={styles.paragraph}>
            Danpro Global LLC es una entidad comercial estructurada para optimizar la cadena de suministro entre distribuidores de primer nivel y el mercado digital (Amazon, Walmart, eBay, Target+, etc.). Como empresa legalmente constituida en Estados Unidos, garantizamos operaciones transparentes, sólidas y eficientes.
          </p>
          <p className={styles.paragraph}>
            Enfoque en relaciones a largo plazo basadas en la confianza y el cumplimiento de acuerdos comerciales (MAP).
          </p>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className={`${styles.section} ${styles.bgGray}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Nuestros Servicios</h2>
          
          <div className={styles.servicesCarousel}>
            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <ShoppingCart size={40} />
              </div>
              <h3 className={styles.serviceTitle}>Compras Mayoristas B2B</h3>
              <p className={styles.serviceDesc}>
                Adquisiciones estratégicas de alto volumen en distribuidores top de EE. UU. para modelos multicanal.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <TrendingUp size={40} />
              </div>
              <h3 className={styles.serviceTitle}>Posicionamiento E-commerce</h3>
              <p className={styles.serviceDesc}>
                Gestión integral para escalar en Amazon, Walmart Marketplace, eBay, Target+, optimizando inventario y logística.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <ShieldCheck size={40} />
              </div>
              <h3 className={styles.serviceTitle}>Protección de Marca</h3>
              <p className={styles.serviceDesc}>
                Respeto estricto a las políticas de precios (MAP) para cuidar la integridad y reputación de sus productos en línea.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className={`${styles.section} ${styles.bgWhite}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Contáctenos</h2>
          <p className={styles.paragraph}>
            Estamos listos para optimizar su cadena de suministro. Envíenos su consulta y nuestro equipo de expertos se comunicará a la brevedad.
          </p>
          
          <form className={styles.contactForm}>
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
            <button type="submit" className={styles.submitButton}>Enviar Mensaje</button>
          </form>
        </div>
      </section>
    </div>
  );
}
