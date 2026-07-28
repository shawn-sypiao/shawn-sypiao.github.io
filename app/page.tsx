export default function Home() {
  return (
    <div className="site">
      <header className="header">
        <a className="site-name" href="#top">
          Your Name
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#cv">CV</a>
          <a href="#news">News</a>
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

        <section className="section" id="cv">
          <h2>CV</h2>
          <div className="cv-grid">
            <div>
              <h3>Experience</h3>
              <article className="cv-item">
                <time>2024 — Present</time>
                <div>
                  <strong>Researcher / Position Title</strong>
                  <p>University or Institution</p>
                </div>
              </article>
              <article className="cv-item">
                <time>2020 — 2024</time>
                <div>
                  <strong>Ph.D. in Your Field</strong>
                  <p>University Name</p>
                </div>
              </article>
            </div>
            <div>
              <h3>Awards</h3>
              <article className="cv-item">
                <time>2025</time>
                <div>
                  <strong>Award or Fellowship Name</strong>
                  <p>Awarding organization</p>
                </div>
              </article>
              <article className="cv-item">
                <time>2023</time>
                <div>
                  <strong>Scholarship or Honor</strong>
                  <p>Awarding organization</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section news" id="news">
          <h2>News</h2>
          <div className="news-list">
            <p>
              <time>Jul 2026</time>
              <span>Add a recent update, talk, project, or announcement here.</span>
            </p>
            <p>
              <time>May 2026</time>
              <span>Add another short update here.</span>
            </p>
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
