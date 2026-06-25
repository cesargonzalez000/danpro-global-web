import Link from 'next/link';
import styles from './Footer.module.css';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.logo}>Danpro Global LLC</h3>
          <p className={styles.subtitle}>Excelencia en Logística</p>
          <p className={styles.description}>
            Optimizamos su cadena de suministro para escalar en el mercado estadounidense.
          </p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.title}>Contáctanos</h4>
          <ul className={styles.contactList}>
            <li>
              <a href="https://maps.google.com/?q=1603+Capitol+Avenue+Suite+413,+Cheyenne,+WY+82001,+USA" target="_blank" rel="noopener noreferrer">
                <MapPin size={18} style={{ flexShrink: 0 }} /> <span>1603 Capitol Ave Ste 413, Cheyenne, WY 82001</span>
              </a>
            </li>
            <li>
              <a href="tel:+13073363689">
                <Phone size={18} style={{ flexShrink: 0 }} /> <span>+1 307-336-3689</span>
              </a>
            </li>
            <li>
              <a href="mailto:info@danprogloballlc.com">
                <Mail size={18} style={{ flexShrink: 0 }} /> <span>info@danprogloballlc.com</span>
              </a>
            </li>
            <li>
              <span className={styles.hoursSpan}>
                <Clock size={18} style={{ flexShrink: 0 }} /> <span>Lunes a Viernes, 9:00 AM - 5:00 PM (EST)</span>
              </span>
            </li>
          </ul>
        </div>
        
        <div className={styles.column}>
          <h4 className={styles.title}>Navegación Rápida</h4>
          <ul className={styles.quickLinks}>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/#nosotros">Nosotros</Link></li>
            <li><Link href="/#servicios">Servicios</Link></li>
            <li><Link href="/#contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.title}>Síguenos</h4>
          <div className={styles.social}>
            <a href="#" aria-label="Instagram"><Instagram size={24} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={24} /></a>
          </div>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>© 2026 Danpro Global LLC. Todos los derechos reservados.</p>
        <div className={styles.legal}>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
