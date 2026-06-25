import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Danpro <span style={{ color: 'var(--secondary-color)', marginLeft: '6px' }}>Global LLC</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/">Inicio</Link>
          <Link href="#nosotros">Nosotros</Link>
          <Link href="#servicios">Servicios</Link>
          <Link href="#contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}
