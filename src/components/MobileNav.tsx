import Link from 'next/link';
import { Home, Info, Briefcase, Layers, Mail } from 'lucide-react';
import styles from './MobileNav.module.css';

export default function MobileNav() {
  return (
    <nav className={styles.mobileNav}>
      <Link href="/" className={styles.link}>
        <Home size={24} />
        <span>Home</span>
      </Link>
      <Link href="#nosotros" className={styles.link}>
        <Info size={24} />
        <span>About Us</span>
      </Link>
      <Link href="#servicios" className={styles.link}>
        <Briefcase size={24} />
        <span>Services</span>
      </Link>
      <Link href="#como-trabajamos" className={styles.link}>
        <Layers size={24} />
        <span>Process</span>
      </Link>
      <Link href="#contacto" className={styles.link}>
        <Mail size={24} />
        <span>Contact</span>
      </Link>
    </nav>
  );
}
