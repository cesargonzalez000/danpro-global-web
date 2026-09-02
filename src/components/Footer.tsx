import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          <div className={styles.column}>
            <div className="flex flex-row items-center justify-start flex-nowrap w-full shrink-0" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', flexWrap: 'nowrap', width: '100%', flexShrink: 0, marginBottom: '1rem', marginTop: '-14px' }}>
              <img src="/logo.png" alt="Danpro Logo" style={{ height: '50px', width: 'auto', objectFit: 'contain', marginRight: '0.5rem', flexShrink: 0 }} />
              <span className="font-bold text-white text-xl whitespace-nowrap shrink-0" style={{ fontWeight: 'bold', color: 'white', fontSize: '1.25rem', whiteSpace: 'nowrap', flexShrink: 0 }}>Danpro</span>
              <span className="font-bold text-[#E5B800] text-xl whitespace-nowrap shrink-0 ml-1" style={{ fontWeight: 'bold', color: '#E5B800', fontSize: '1.25rem', whiteSpace: 'nowrap', flexShrink: 0, marginLeft: '0.25rem' }}>Global LLC</span>
            </div>
            <p className={styles.subtitle}>Logistics Excellence</p>
            <p className={styles.description}>
              We optimize your supply chain to scale in the U.S. market.
            </p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.title}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li>
                <a href="https://maps.google.com/?q=1603+Capitol+Avenue+Suite+413,+Cheyenne,+WY+82001,+USA" target="_blank" rel="noopener noreferrer">
                  <MapPin size={18} style={{ flexShrink: 0 }} /> <span>1603 Capitol Ave Ste 413, Cheyenne, WY 82001</span>
                </a>
              </li>
              <li>
                <a href="tel:+13073177901">
                  <Phone size={18} style={{ flexShrink: 0 }} /> <span>+1 307-317-7901</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@danprogloballlc.com">
                  <Mail size={18} style={{ flexShrink: 0 }} /> <span>info@danprogloballlc.com</span>
                </a>
              </li>
              <li>
                <span className={styles.hoursSpan}>
                  <Clock size={18} style={{ flexShrink: 0 }} /> <span>Monday to Friday, 9:00 AM - 5:00 PM (EST)</span>
                </span>
              </li>
            </ul>
          </div>
          
          <div className={`${styles.column} ${styles.navColumn}`}>
            <h4 className={styles.title}>Quick Links</h4>
            <ul className={styles.quickLinks}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#nosotros">About Us</Link></li>
              <li><Link href="/#servicios">Services</Link></li>
              <li><Link href="/#como-trabajamos">How We Work</Link></li>
              <li><Link href="/#contacto">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.title}>Follow Us</h4>
            <div className={styles.social}>
              <a href="#" aria-label="Instagram"><Instagram size={24} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={24} /></a>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <div className={styles.bottom}>
          <p>© 2026 Danpro Global LLC. All rights reserved.</p>
          <div className={styles.legal}>
            <Link href="/privacy-policy">Política de privacidad</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
