export default function Home() {
  return (
    <div className="site">
      <header className="header">
        <a className="site-name" href="#top">
          Your Name
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#news">News</a>
          <a href="#publications">Publications</a>
          <a href="#">CV</a>
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

        <section className="section" id="news">
          <h2>News</h2>
          <div className="news-list">
            <p>
              <time>Jul 2026</time>
              <span>A new paper on reliable decision systems is available.</span>
            </p>
            <p>
              <time>May 2026</time>
              <span>Presented our recent work at Conference Name.</span>
            </p>
            <p>
              <time>Jan 2026</time>
              <span>Started a new project on uncertainty-aware forecasting.</span>
            </p>
          </div>
        </section>

        <section className="section" id="publications">
          <div className="section-title">
            <h2>Selected publications</h2>
            <a href="#">View all</a>
          </div>
          <div className="publication-list">
            <article>
              <span className="year">2026</span>
              <div>
                <h3>Risk-Aware Learning for Critical Decisions</h3>
                <p>Your Name, Coauthor Name</p>
                <p className="venue">Journal or Conference Name, 2026</p>
                <div className="paper-links">
                  <a href="#">Paper</a>
                  <a href="#">Code</a>
                </div>
              </div>
            </article>
            <article>
              <span className="year">2025</span>
              <div>
                <h3>Forecasting Uncertainty in Dynamic Systems</h3>
                <p>Your Name, Coauthor Name</p>
                <p className="venue">Journal or Conference Name, 2025</p>
                <div className="paper-links">
                  <a href="#">Paper</a>
                  <a href="#">Code</a>
                </div>
              </div>
            </article>
            <article>
              <span className="year">2024</span>
              <div>
                <h3>Reproducible Evaluation for Machine Learning</h3>
                <p>Your Name, Coauthor Name</p>
                <p className="venue">Journal or Conference Name, 2024</p>
                <div className="paper-links">
                  <a href="#">Paper</a>
                  <a href="#">Code</a>
                </div>
              </div>
            </article>
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
