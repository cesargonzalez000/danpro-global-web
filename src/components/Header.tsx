import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img src="/logo.png" alt="Danpro Logo" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.25rem', marginLeft: '0.5rem' }}>DanPro Global LLC</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/">Inicio</Link>
          <Link href="#nosotros">Nosotros</Link>
          <Link href="#servicios">Servicios</Link>
          <Link href="#como-trabajamos">Cómo trabajamos</Link>
          <Link href="#contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}
