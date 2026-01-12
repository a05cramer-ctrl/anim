import { useState, useEffect } from 'react'
import mascotImage from './7cff9e98-5c81-41f7-b84c-c9be0b386996.png'
import './App.css'

function App() {
  const [subheadlineIndex, setSubheadlineIndex] = useState(0)
  const [copied, setCopied] = useState(false)
  const contractAddress = "AhyxAXSV2gYMCGQLUbpE38S3fomUoo5qNu6tCsKCpump"
  const subheadlines = [
    "Too cute to dump.",
    "Kawaii liquidity.",
    "Blushes when you buy."
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setSubheadlineIndex((prev) => (prev + 1) % subheadlines.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="app">
      {/* Floating Hearts */}
      <div className="floating-hearts">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="heart" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}>💕</div>
        ))}
      </div>

      {/* Sparkles */}
      <div className="sparkles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="sparkle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}>✨</div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="mascot-container">
            <img 
              src={mascotImage} 
              alt="AnimWhale Mascot" 
              className="mascot bounce"
            />
          </div>
          <h1 className="hero-title">
            AnimWhale <span className="emoji">🐋</span><span className="sparkle-emoji">✨</span>
          </h1>
          <p className="subheadline fade-in-out">
            {subheadlines[subheadlineIndex]}
          </p>
          <div className="cta-buttons">
            <button className="cta-button primary wiggle">
              Buy $ANIM
            </button>
            <button className="cta-button secondary glow">
              Enter Anime Mode
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">About AnimWhale</h2>
          <div className="about-content">
            <p className="about-text">
              AnimWhale is an anime whale with armor, feelings, and liquidity.
            </p>
            <div className="about-list">
              <div className="about-item">
                <span className="icon">🤔</span>
                <span>Is it serious? <strong>No.</strong></span>
              </div>
              <div className="about-item">
                <span className="icon">💕</span>
                <span>Is it cute? <strong>Yes.</strong></span>
              </div>
              <div className="about-item">
                <span className="icon">✨</span>
                <span>Will it make sense? <strong>Probably not.</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="tokenomics">
        <div className="container">
          <h2 className="section-title">AnimWhalenomics <span className="emoji">💕</span></h2>
          <div className="tokenomics-grid">
            <div className="tokenomics-card hover-lift">
              <div className="card-icon">📊</div>
              <h3>Total Supply</h3>
              <p className="card-value">1,000,000,000</p>
              <p className="card-label">$ANIM</p>
            </div>
            <div className="tokenomics-card hover-lift">
              <div className="card-icon">💸</div>
              <h3>Tax</h3>
              <p className="card-value">0%</p>
              <p className="card-label">Zero fees!</p>
            </div>
            <div className="tokenomics-card hover-lift">
              <div className="card-icon">🔒</div>
              <h3>Liquidity</h3>
              <p className="card-value">Locked</p>
              <p className="card-label">She's loyal 💕</p>
            </div>
            <div className="tokenomics-card hover-lift">
              <div className="card-icon">👋</div>
              <h3>Ownership</h3>
              <p className="card-value">Renounced</p>
              <p className="card-label">Baka dev</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="roadmap">
        <div className="container">
          <h2 className="section-title">Anime Arc</h2>
          <div className="roadmap-list">
            <div className="roadmap-item hover-glow">
              <div className="episode-number">Episode 1</div>
              <div className="episode-title">Awakening</div>
            </div>
            <div className="roadmap-item hover-glow">
              <div className="episode-number">Episode 2</div>
              <div className="episode-title">Blushing Phase</div>
            </div>
            <div className="roadmap-item hover-glow">
              <div className="episode-number">Episode 3</div>
              <div className="episode-title">Whale Transformation</div>
            </div>
            <div className="roadmap-item hover-glow">
              <div className="episode-number">Episode 4</div>
              <div className="episode-title">Main Character Arc</div>
            </div>
            <div className="roadmap-item hover-glow">
              <div className="episode-number">Episode 5</div>
              <div className="episode-title">Season 2 (maybe)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-watermark">
          <img src={mascotImage} alt="AnimWhale" className="watermark-img" />
        </div>
        <div className="footer-content">
          <div className="contract-address-container">
            <span className="contract-label">ca:</span>
            <span 
              className="contract-address"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(contractAddress)
                  setCopied(true)
                  setTimeout(() => setCopied(false), 2000)
                } catch (err) {
                  console.error('Failed to copy:', err)
                }
              }}
              title={copied ? "Copied!" : "Click to copy"}
            >
              {contractAddress}
            </span>
            {copied && <span className="copy-indicator">✓ Copied!</span>}
          </div>
          <div className="social-icons">
            <a href="https://x.com/AnimWhale" target="_blank" rel="noopener noreferrer" className="social-icon hover-bounce">𝕏</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
