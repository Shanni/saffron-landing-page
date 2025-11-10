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
            <img src="/assets/saffron-logo-removebg-preview.png" alt="Saffron" className="logo-icon" />
            <h1 className="logo">SAFFRON</h1>
          </div>
          <h2 className="tagline">Trade Smarter. Sleep Better.</h2>
          <p className="subtitle">
            Automated trading strategies across multiple exchanges. 
            Professional-grade execution, retail-friendly simplicity.
          </p>
          <a 
            href="https://forms.gle/iBvVrfZSS6T4q7zQ6" 
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
          <div className="section-header">
            <img src="/assets/saffron-logo.png" alt="" className="section-logo" />
            <h2 className="section-title">What We Do</h2>
          </div>
          
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
              <h3 className="feature-title">Self-Custodied Control</h3>
              <p className="feature-description">
                Keep funds in your wallet at all times. Approve every move and stay
                in command with granular permissions.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">😌</div>
              <h3 className="feature-title">Disciplined Execution</h3>
              <p className="feature-description">
                Strip emotion from trading. Strategies run with rule-based precision
                so you never chase or hesitate.
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

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="how-it-works-container">
          <div className="how-header">
            <img src="/assets/saffron-logo-removebg-preview.png" alt="Saffron emblem" className="how-logo" />
            <h2 className="how-title">Tell Saffron Your Strategy</h2>
            <p className="how-subtitle">
              Speak your playbook in plain language. Saffron converts it into disciplined, automated execution.
            </p>
          </div>

          <div className="strategy-examples">
            <div className="strategy-card">
              <div className="strategy-icon">💰</div>
              <h3 className="strategy-title">Simple DCA Strategy</h3>
              <pre className="strategy-code">{`"Buy $100 of APT-PERP daily,
stop loss at -10%,
take profit at +25%"`}</pre>
            </div>

            <div className="strategy-card">
              <div className="strategy-icon">📈</div>
              <h3 className="strategy-title">Automated Grid Strategy</h3>
              <pre className="strategy-code">{`"Grid ARB-PERP between $0.95 and $1.15,
10 levels, $250 per order,
rebalance every 4 hours"`}</pre>
            </div>
          </div>

          <div className="how-logo-divider">
            <span className="divider-line" />
            <img src="/assets/saffron-logo.png" alt="Saffron mark" className="divider-logo" />
            <span className="divider-line" />
          </div>

          <div className="results-section">
            <h3 className="results-title">Backtested Strategy Edge</h3>
            <div className="results-grid">
              <div className="result-item">
                <span className="result-label">Manual DCA</span>
                <span className="result-value">+18.2%</span>
              </div>
              <div className="result-item">
                <span className="result-label">Saffron DCA</span>
                <span className="result-value highlight">+23.7%</span>
              </div>
              <div className="result-item advantage">
                <span className="result-label">Your Advantage</span>
                <span className="result-value">+5.5%</span>
                <span className="result-note">just from better execution</span>
              </div>
            </div>
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
            © 2025 Saffron. Trade smarter, not harder.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
