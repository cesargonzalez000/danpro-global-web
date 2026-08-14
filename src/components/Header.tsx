import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Danpro Logo" style={{ height: '50px', width: 'auto', objectFit: 'contain', marginRight: '0.5rem' }} />
          <span style={{ fontWeight: 'bold', color: 'white', fontSize: '1.5rem' }}>Danpro</span>
          <span style={{ fontWeight: 'bold', color: '#E5B800', fontSize: '1.5rem', marginLeft: '0.5rem' }}>Global LLC</span>
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
