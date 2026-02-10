import '../assets/css/landing.css';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="logo-box">
              <span className="material-icons" style={{ color: 'white' }}>water_drop</span>
            </div>
            <span style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)' }}>BBS</span>
          </div>
          <div className="nav-links" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            <a href="#about" style={{ fontWeight: '600', textDecoration: 'none', color: 'inherit' }}>About</a>
            <a href="#impact" style={{ fontWeight: '600', textDecoration: 'none', color: 'inherit' }}>Impact</a>
            <Link href="/login" className="btn-primary">Portal Login</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero-gradient" style={{ padding: '80px 0' }}>
        <div className="nav-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
          <div>
            <span style={{ background: 'rgba(236, 19, 37, 0.1)', color: 'var(--primary)', padding: '5px 15px', borderRadius: '50px', fontSize: '12px', fontWeight: '800' }}>
              EMERGENCY DONATIONS NEEDED
            </span>
            <h1 style={{ fontSize: '64px', fontWeight: '800', lineHeight: '1.1', margin: '20px 0' }}>
              Every Drop <span style={{ color: 'var(--primary)' }}>Counts</span>. Save a Life Today.
            </h1>
            <p style={{ color: '#64748b', fontSize: '18px', marginBottom: '40px' }}>
              Connect with a life-saving network of donors, recipients, and hospitals. Our real-time blood bank system ensures no request goes unanswered.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <button className="btn-primary">Get Started</button>
              <button style={{ padding: '12px 28px', borderRadius: '12px', border: '2px solid #e2e8f0', background: 'white', fontWeight: '700' }}>Learn More</button>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <img 
              src="https://images.unsplash.com/photo-1615461066841-6116ecaaba7f?q=80&w=1000" 
              alt="Donation" 
              style={{ width: '100%', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.2)' }}
            />
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="nav-container" style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '48px', fontWeight: '800' }}>50k+</div>
            <div style={{ opacity: '0.8', fontSize: '12px', letterSpacing: '2px' }}>LIVES SAVED</div>
          </div>
          <div>
            <div style={{ fontSize: '48px', fontWeight: '800' }}>15k+</div>
            <div style={{ opacity: '0.8', fontSize: '12px', letterSpacing: '2px' }}>ACTIVE DONORS</div>
          </div>
          <div>
            <div style={{ fontSize: '48px', fontWeight: '800' }}>120+</div>
            <div style={{ opacity: '0.8', fontSize: '12px', letterSpacing: '2px' }}>PARTNER HOSPITALS</div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" style={{ padding: '100px 0' }}>
        <div className="custom-grid">
          <div className="impact-card">
            <span className="material-icons" style={{ color: 'var(--primary)', fontSize: '40px' }}>bolt</span>
            <h3>Instant Matching</h3>
            <p>Our proprietary algorithm finds the nearest compatible donors and notifies them within seconds.</p>
          </div>
          <div className="impact-card">
            <span className="material-icons" style={{ color: 'var(--primary)', fontSize: '40px' }}>share_location</span>
            <h3>Real-time Tracking</h3>
            <p>Hospitals can track blood delivery in real-time, ensuring surgical teams are prepared for arrival.</p>
          </div>
          <div className="impact-card">
            <span className="material-icons" style={{ color: 'var(--primary)', fontSize: '40px' }}>security</span>
            <h3>Verified Safety</h3>
            <p>Comprehensive screening and verification protocols to ensure the highest standards of safety.</p>
          </div>
        </div>
      </section>

      <footer style={{ background: '#0f172a', color: 'white', padding: '80px 0', textAlign: 'center' }}>
        <p>© 2026 Blood Bank System. Built with Next.js</p>
      </footer>
    </div>
  );
}