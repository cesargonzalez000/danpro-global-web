import Link from 'next/link';
import { Home, Info, Briefcase, Layers, Mail } from 'lucide-react';
import styles from './MobileNav.module.css';

export default function MobileNav() {
  return (
    <nav className={styles.mobileNav}>
      <Link href="/" className={styles.link}>
        <Home size={24} />
        <span>Inicio</span>
      </Link>
      <Link href="#nosotros" className={styles.link}>
        <Info size={24} />
        <span>Nosotros</span>
      </Link>
      <Link href="#servicios" className={styles.link}>
        <Briefcase size={24} />
        <span>Servicios</span>
      </Link>
      <Link href="#como-trabajamos" className={styles.link}>
        <Layers size={24} />
        <span>Proceso</span>
      </Link>
      <Link href="#contacto" className={styles.link}>
        <Mail size={24} />
        <span>Contacto</span>
      </Link>
    </nav>
  );
}
