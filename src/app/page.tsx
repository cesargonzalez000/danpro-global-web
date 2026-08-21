import Image from 'next/image';
import styles from './page.module.css';
import { ShoppingCart, TrendingUp, ShieldCheck, Search, Truck, PackageCheck, BarChart } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Image 
          src="/images/hero-logistics.jpg"
          alt="Global Logistics and E-commerce"
          fill
          priority
          style={{ objectFit: 'cover', zIndex: 0 }}
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Strategic Distribution for Marketplaces</h1>
          <p className={styles.subtitle}>
            We optimize your supply chain to scale in the U.S. market.
          </p>
          <a href="#contacto" className={styles.ctaButton}>Connect Now</a>
        </div>
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className={`${styles.section} ${styles.bgWhite}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>About Us</h2>
          <p className={styles.paragraph}>
            Danpro Global LLC is a commercial entity structured to optimize the supply chain between top-tier distributors and the digital market (Amazon, Walmart, eBay, Target+, etc.). As a legally constituted company in the United States, we guarantee transparent, solid, and efficient operations.
          </p>
          <p className={styles.paragraph}>
            Focus on long-term relationships based on trust and compliance with commercial agreements (MAP).
          </p>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className={`${styles.section} ${styles.bgGray}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          
          <div className={styles.servicesCarousel}>
            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <ShoppingCart size={40} />
              </div>
              <h3 className={styles.serviceTitle}>B2B Wholesale Purchasing</h3>
              <p className={styles.serviceDesc}>
                Strategic high-volume acquisitions from top U.S. distributors for multi-channel models.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <TrendingUp size={40} />
              </div>
              <h3 className={styles.serviceTitle}>E-commerce Positioning</h3>
              <p className={styles.serviceDesc}>
                Comprehensive management to scale on Amazon, Walmart Marketplace, eBay, Target+, optimizing inventory and logistics.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <ShieldCheck size={40} />
              </div>
              <h3 className={styles.serviceTitle}>Brand Protection</h3>
              <p className={styles.serviceDesc}>
                Strict adherence to pricing policies (MAP) to protect the integrity and reputation of your products online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="como-trabajamos" className={styles.howItWorksSection}>
        <Image 
          src="/images/how-it-works.jpg"
          alt="Global Logistics Process"
          fill
          style={{ objectFit: 'cover', zIndex: 0 }}
        />
        <div className={styles.howItWorksOverlay}></div>
        <div className={styles.container} style={{ position: 'relative', zIndex: 2 }}>
          <h2 className={styles.sectionTitleWhite}>How We Work</h2>
          <p className={styles.paragraphWhite}>
            Our process is designed to provide efficiency and scalability at every step of your supply chain.
          </p>

          <div className={styles.howItWorksGrid}>
            <div className={styles.stepCardPremium}>
              <Search size={40} className={styles.stepIcon} />
              <h3 className={styles.stepTitlePremium}>Strategic Selection</h3>
              <p className={styles.stepDescPremium}>We analyze suppliers and high-demand products to ensure smart purchasing.</p>
            </div>
            <div className={styles.stepCardPremium}>
              <Truck size={40} className={styles.stepIcon} />
              <h3 className={styles.stepTitlePremium}>Global Logistics</h3>
              <p className={styles.stepDescPremium}>We coordinate the secure transport of your merchandise from its origin to our facilities.</p>
            </div>
            <div className={styles.stepCardPremium}>
              <PackageCheck size={40} className={styles.stepIcon} />
              <h3 className={styles.stepTitlePremium}>Consolidation & Management</h3>
              <p className={styles.stepDescPremium}>We inspect and consolidate your orders to guarantee efficient shipping.</p>
            </div>
            <div className={styles.stepCardPremium}>
              <BarChart size={40} className={styles.stepIcon} />
              <h3 className={styles.stepTitlePremium}>Inventory Management & Distribution</h3>
              <p className={styles.stepDescPremium}>We distribute your catalog in high-volume marketplaces, ensuring a constant flow of sales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className={`${styles.section} ${styles.bgGray}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.paragraph}>
            We are ready to optimize your supply chain. Send us your inquiry and our team of experts will contact you shortly.
          </p>
          
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
