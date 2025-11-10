import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-video-bg">
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="https://cdn.pixabay.com/video/2022/11/07/137708-768721608_large.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="logo-container">
            <img src="/assets/logo.png" alt="Saffron" className="logo-icon" />
            <h1 className="logo">SAFFRON</h1>
          </div>
          <h2 className="tagline">Trade Smarter. Sleep Better.</h2>
          <p className="subtitle">
            Automated trading strategies across multiple exchanges. 
            Professional-grade execution, retail-friendly simplicity.
          </p>
          <a 
            href="https://forms.gle/your-waitlist-form" 
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Waitlist
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <h2 className="section-title">What We Do</h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3 className="feature-title">Automated Trading</h3>
              <p className="feature-description">
                Set your strategy once and let our AI execute trades 24/7. 
                DCA, grid trading, and momentum strategies that run while you sleep.
              </p>
            </div>


            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">Non-Custodial</h3>
              <p className="feature-description">
                Your funds stay in your wallet. We can't access your keys or move 
                funds without your approval. You maintain full control.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3 className="feature-title">Smart Aggregation</h3>
              <p className="feature-description">
                Connect to multiple exchanges and DEXs. We route your trades 
                for optimal execution and minimal slippage.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3 className="feature-title">Human-Friendly Language</h3>
              <p className="feature-description">
                No coding required. Just describe your strategy naturally. 
                "Buy $100 daily" - that's it. Setup in under 2 minutes.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">😌</div>
              <h3 className="feature-title">Emotionless Trading</h3>
              <p className="feature-description">
                Remove FOMO and fear from your trading. Stick to your strategy 
                with disciplined, automated execution.
              </p>
            </div>
          </div>

          {/* Mobile App Highlight */}
          <div className="mobile-app">
            <h3 className="mobile-app-title">📱 Mobile-First Experience</h3>
            <p className="mobile-app-description">
              Monitor your strategies, track performance, and manage positions from anywhere. 
              Stay informed without being glued to charts. Trading that fits your lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="social-links">
            <a 
              href="https://x.com/saffron_trading" 
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>𝕏</span> Follow us @saffron_trading
            </a>
          </div>
          <p className="footer-text">
            © 2024 Saffron. Trade smarter, not harder.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
