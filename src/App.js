import React from 'react';
import './App.css';
import Starfield from './Starfield';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-video-bg">
          <Starfield />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-split">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-highlight">Start Alpha</span>
              <span className="badge-divider"></span>
              <a href="https://forms.gle/iBvVrfZSS6T4q7zQ6" className="badge-link" target="_blank" rel="noopener noreferrer">
                Start automating today
                <svg className="badge-chevron" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <h1 className="hero-title">Trade Smarter. Hassle Free.</h1>
            <p className="hero-subtitle">
              Automated trading strategies across multiple exchanges. 
              Professional-grade execution, retail-friendly simplicity. 
            </p>
            <div className="hero-cta">
              <a 
                href="https://forms.gle/iBvVrfZSS6T4q7zQ6" 
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Waitlist
              </a>
              <a href="/articles.html" className="cta-link">
                Learn more <span>→</span>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="phone-mockup">
              <div className="phone-frame">
                <div className="phone-notch"></div>
                <div className="phone-screen saffron-app">
                  <div className="app-header">
                    <h2 className="app-title">Saffron</h2>
                    <p className="app-tagline">Make your money work for you.</p>
                  </div>
                  
                  <div className="app-input-section">
                    <p className="input-label">What would you like to do?</p>
                    <div className="command-input">
                      <span className="input-text">Sell 5 SOL</span>
                      <div className="input-button">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="try-saying">
                    <p className="try-label">Try saying:</p>
                    <div className="suggestion-chips">
                      <span className="chip">Buy 10 APT</span>
                      <span className="chip">Sell 5 SOL</span>
                      <span className="chip">Deposit $250</span>
                    </div>
                  </div>
                  
                  <div className="recent-activity">
                    <h3 className="activity-title">Recent Activity</h3>
                    <div className="empty-state">
                      <div className="empty-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                        </svg>
                      </div>
                      <p className="empty-title">No transactions yet</p>
                      <p className="empty-subtitle">Start by typing a command above</p>
                    </div>
                  </div>
                  
                  <div className="app-nav">
                    <div className="nav-item active">
                      <div className="nav-icon saffron-icon">$</div>
                      <span>Saffron</span>
                    </div>
                    <div className="nav-item">
                      <div className="nav-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3 13h2v8H3v-8zm4-3h2v11H7V10zm4-3h2v14h-2V7zm4 6h2v8h-2v-8zm4-8h2v16h-2V5z"/>
                        </svg>
                      </div>
                      <span>Portfolio</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="features-container">
          <div className="features-header">
            <span className="features-eyebrow">Trade Smarter</span>
            <h2 className="features-title">Everything you need to automate your trading</h2>
            <p className="features-description">
              Professional-grade trading automation that runs 24/7. Set your strategy once and let Saffron handle the execution.
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-header">
                <div className="feature-icon-wrapper">
                  <svg className="feature-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="feature-name">Automated Trading</h3>
              </div>
              <p className="feature-text">
                Set your strategy once and let our AI execute trades 24/7. DCA, grid trading, and momentum strategies that run while you sleep.
              </p>
              <a href="#how-it-works" className="feature-link">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="feature-item">
              <div className="feature-header">
                <div className="feature-icon-wrapper">
                  <svg className="feature-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                </div>
                <h3 className="feature-name">Self-Custodied Control</h3>
              </div>
              <p className="feature-text">
                Keep funds in your wallet at all times. Approve every move and stay in command with granular permissions.
              </p>
              <a href="#how-it-works" className="feature-link">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="feature-item">
              <div className="feature-header">
                <div className="feature-icon-wrapper">
                  <svg className="feature-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="feature-name">Disciplined Execution</h3>
              </div>
              <p className="feature-text">
                Strip emotion from trading. Strategies run with rule-based precision so you never chase or hesitate.
              </p>
              <a href="#how-it-works" className="feature-link">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="strategy-section" id="how-it-works">
        <div className="strategy-container">
          <div className="strategy-header">
            <h2 className="strategy-main-title">Tell Saffron Your Strategy</h2>
            <p className="strategy-main-description">
              Speak your playbook in plain language. Saffron converts it into disciplined, automated execution—then delivers results that beat manual trading.
            </p>
            <div className="strategy-example">
              <pre className="strategy-code">{`"Buy $100 of APT-PERP daily,
stop loss at -10%,
take profit at +25%"`}</pre>
            </div>
          </div>

          <div className="strategy-stats">
            <div className="stat-card stat-card-light">
              <p className="stat-number">+23.7%</p>
              <div className="stat-content">
                <p className="stat-title">Saffron DCA Returns</p>
                <p className="stat-description">Backtested performance with automated execution timing.</p>
              </div>
            </div>
            
            <div className="stat-card stat-card-dark">
              <p className="stat-number">+5.5%</p>
              <div className="stat-content">
                <p className="stat-title">Your Edge vs Manual Trading</p>
                <p className="stat-description">
                  Better execution, no emotional decisions, 24/7 monitoring.
                </p>
              </div>
            </div>
            
            <div className="stat-card stat-card-accent">
              <p className="stat-number">24/7</p>
              <div className="stat-content">
                <p className="stat-title">Always-On Execution</p>
                <p className="stat-description">
                  Your strategies run around the clock. Never miss an opportunity while you sleep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="articles" id="articles">
        <div className="articles-container">
          <div className="articles-header">
            <span className="articles-eyebrow">Learn</span>
            <h2 className="articles-title">Explore More Strategies</h2>
            <p className="articles-subtitle">Deep dives into trading approaches that work</p>
          </div>
          <div className="articles-grid">
            <a href="/dca-strategy.html" className="article-card">
              <div className="article-image">
                <span className="article-icon">📈</span>
              </div>
              <div className="article-content">
                <span className="article-tag">Strategy Guide</span>
                <h3 className="article-title">Dollar Cost Averaging: The Steady Path to Growth</h3>
                <p className="article-excerpt">Learn how DCA removes emotion from trading and builds positions systematically over time.</p>
                <span className="article-link">Read more <span>→</span></span>
              </div>
            </a>
            <a href="/grid-trading.html" className="article-card">
              <div className="article-image">
                <span className="article-icon">🔲</span>
              </div>
              <div className="article-content">
                <span className="article-tag">Advanced</span>
                <h3 className="article-title">Grid Trading: Profit from Sideways Markets</h3>
                <p className="article-excerpt">Capture gains in ranging markets with automated buy and sell orders at preset intervals.</p>
                <span className="article-link">Read more <span>→</span></span>
              </div>
            </a>
            <a href="/risk-management.html" className="article-card">
              <div className="article-image">
                <span className="article-icon">🛡️</span>
              </div>
              <div className="article-content">
                <span className="article-tag">Fundamentals</span>
                <h3 className="article-title">Risk Management: Protecting Your Capital</h3>
                <p className="article-excerpt">Essential techniques for position sizing, stop losses, and portfolio protection.</p>
                <span className="article-link">Read more <span>→</span></span>
              </div>
            </a>
            <a href="/mean-reversion.html" className="article-card">
              <div className="article-image">
                <span className="article-icon">🔁</span>
              </div>
              <div className="article-content">
                <span className="article-tag">Strategy Guide</span>
                <h3 className="article-title">Mean Reversion: Trading the Snapback</h3>
                <p className="article-excerpt">How to trade stretched moves back toward the mean with clear rules and tight risk controls.</p>
                <span className="article-link">Read more <span>→</span></span>
              </div>
            </a>
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
