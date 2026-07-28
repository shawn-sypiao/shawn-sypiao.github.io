const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <div className="site">
      <header className="header">
        <a className="name" href="#top">
          Your Name
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#">Scholar</a>
          <a href="mailto:hello@example.com">Email</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="role">Researcher &amp; Engineer</p>
            <h1>
              I work on reliable machine learning and intelligent systems.
            </h1>
            <p className="intro">
              My research explores uncertainty, forecasting, and how learning
              systems can make better decisions in the real world.
            </p>
            <div className="hero-links">
              <a href="mailto:hello@example.com">
                Email <Arrow />
              </a>
              <a href="#">Download CV</a>
            </div>
          </div>

          <div className="portrait" aria-label="Portrait photo placeholder">
            <span>Photo</span>
            <small>4:5</small>
          </div>
        </section>

        <section className="work" id="work">
          <h2>Selected work</h2>
          <div className="work-list">
            <a href="#">
              <span className="year">2026</span>
              <strong>Risk-aware learning for critical decisions</strong>
              <Arrow />
            </a>
            <a href="#">
              <span className="year">2025</span>
              <strong>Forecasting uncertainty in dynamic systems</strong>
              <Arrow />
            </a>
            <a href="#">
              <span className="year">2024</span>
              <strong>Tools for reproducible machine learning</strong>
              <Arrow />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Your Name</span>
        <div>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="mailto:hello@example.com">Email</a>
        </div>
      </footer>
    </div>
  );
}
