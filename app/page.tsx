export default function Home() {
  return (
    <div className="site">
      <header className="header">
        <a className="site-name" href="#top">
          Your Name
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#">CV</a>
          <a href="mailto:hello@example.com">Email</a>
        </nav>
      </header>

      <main id="top">
        <section className="profile" id="about">
          <div className="portrait-frame">
            <div className="portrait" aria-label="Portrait photo placeholder">
              <span>Portrait</span>
              <small>Replace with your photo</small>
            </div>
          </div>

          <div className="profile-copy">
            <h1>Your Name</h1>
            <p className="position">Researcher &amp; Engineer</p>
            <p className="affiliation">Department / University or Institution</p>
            <p className="bio">
              I work on reliable machine learning and intelligent systems. My
              research focuses on uncertainty, forecasting, and decision-making
              in real-world environments.
            </p>
            <p className="interests">
              <strong>Research interests:</strong> Trustworthy ML · Uncertainty
              Quantification · Decision Systems
            </p>
            <div className="profile-links">
              <a href="mailto:hello@example.com">Email</a>
              <a href="#">Google Scholar</a>
              <a href="#">GitHub</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Your Name</span>
        <span>Last updated July 2026</span>
      </footer>
    </div>
  );
}
