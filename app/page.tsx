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
          <a href="#experience">Experience</a>
          <a href="#awards">Awards</a>
          <a href="#life">Life</a>
          <a href="#">CV</a>
        </nav>
      </header>

      <main id="top">
        <section className="intro">
          <div className="intro-copy">
            <h1>Your Name</h1>
            <p className="role">Researcher &amp; Engineer · Institution</p>
            <p className="summary">
              I work on <strong>reliable machine learning</strong> and
              intelligent systems, with a focus on uncertainty, forecasting,
              and real-world decision-making.
            </p>
          </div>
          <div className="portrait" aria-label="Portrait photo placeholder">
            <span>Portrait</span>
            <small>Replace with your photo</small>
          </div>
        </section>

        <section className="section" id="about">
          <h2>
            <span className="section-mark" aria-hidden="true">○</span>
            About Me
          </h2>
          <div className="about-copy">
            <p>
              I am currently a researcher at University or Institution. My work
              explores how learning systems can remain reliable when data,
              environments, and human needs change.
            </p>
            <p>
              I enjoy careful experiments, clear writing, and collaborations
              that connect methodological research with useful systems.
            </p>
          </div>
        </section>

        <section className="section" id="news">
          <h2>
            <span className="section-mark" aria-hidden="true">▣</span>
            News
          </h2>
          <ul className="news-card">
            <li>
              <strong>[Jul. 2026]</strong>
              <span>Add a recent project, talk, or announcement here.</span>
            </li>
            <li>
              <strong>[May 2026]</strong>
              <span>Add another short update here.</span>
            </li>
          </ul>
        </section>

        <section className="section" id="experience">
          <h2>
            <span className="section-mark" aria-hidden="true">◇</span>
            Experience
          </h2>
          <div className="timeline">
            <article>
              <time>2024 — Present</time>
              <div>
                <h3>Researcher / Position Title</h3>
                <p>University or Institution</p>
                <small>A short description of your role or research focus.</small>
              </div>
            </article>
            <article>
              <time>2020 — 2024</time>
              <div>
                <h3>Ph.D. in Your Field</h3>
                <p>University Name</p>
                <small>A short description of your degree or experience.</small>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="awards">
          <h2>
            <span className="section-mark" aria-hidden="true">☆</span>
            Awards
          </h2>
          <ul className="award-list">
            <li>
              <strong>[2026]</strong>
              <span>Award or Fellowship Name.</span>
            </li>
            <li>
              <strong>[2025]</strong>
              <span>Best Paper, Outstanding Project, or Academic Honor.</span>
            </li>
            <li>
              <strong>[2024]</strong>
              <span>Scholarship or Graduate Research Award.</span>
            </li>
          </ul>
        </section>

        <section className="section" id="life">
          <h2>
            <span className="section-mark" aria-hidden="true">☼</span>
            Beyond Research
          </h2>
          <div className="life-note">
            <p>
              Outside research, I enjoy quiet walks, photography, good coffee,
              and discovering new places.
            </p>
            <div className="hobbies" aria-label="Personal interests">
              <span>Photography</span>
              <span>Coffee</span>
              <span>Hiking</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Your Name</span>
        <div>
          <a href="mailto:hello@example.com">Email</a>
          <a href="#">Scholar</a>
          <a href="#">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
