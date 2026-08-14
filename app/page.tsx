const awards = [
  ["2025", "Best Student Paper Award Finalist, IEEE CASE"],
  ["2025", "Hong Kong Postgraduate Fellowship (HKPFS), Hong Kong RGC"],
  ["2025", "HKUST RedBird Recruitment PhD Award"],
  ["2024", "Best Paper Award Finalist, National Student Forum on Industrial Engineering"],
  ["2023", "Outstanding Undergraduate Thesis, SCUT"],
  ["2023", "First-class Scholarship, Science and Technology Innovation Competition Fund, SCUT"],
  ["2022", "National Scholarship, Ministry of Education of China"],
  ["2022", "Meritorious Prize, Mathematical Contest in Modeling"],
  ["2022", "First Prize, Asia-Pacific Mathematical Contest in Modeling (APMCM)"],
  ["2021", "First-class Academic Scholarship, SCUT"],
];

// Two modes: set `src` to a photo (e.g. "/portrait.jpg") to show a portrait;
// leave it null to keep the intro text-only without any placeholder.
const portrait = {
  src: null as string | null,
  alt: "Portrait of Shiyuan Piao",
};

export default function Home() {
  return (
    <div className="site">
      <header className="header">
        <a className="site-name" href="#top">
          Shiyuan Piao
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#news" hidden>
            News
          </a>
          <a href="#education">Education</a>
          <a href="#awards">Awards</a>
          <a href="#life">Life</a>
        </nav>
      </header>

      <main id="top">
        <section
          className={portrait.src ? "intro intro-with-portrait" : "intro"}
        >
          <div className="intro-copy">
            <h1>Shiyuan Piao</h1>
            <p className="role">
              Ph.D. Candidate · Industrial Engineering and Decision Analytics ·
              HKUST
            </p>
            <p className="summary">
              My current research interests include{" "}
              <strong>spatio-temporal learning, uncertainty quantification, and AI agents</strong>,
              with applications in operations management, energy systems,
              batteries, and weather forecasting.
            </p>
            <div className="intro-links" aria-label="Contact and profile links">
              <a href="mailto:shiyuan.piao@connect.ust.hk">Email</a>
              <a
                href="https://scholar.google.com/citations?user=loqTpOwAAAAJ&hl=zh-CN"
                target="_blank"
                rel="noreferrer"
                hidden
              >
                Google Scholar
              </a>
              <a
                href="https://www.linkedin.com/in/shiyuan-piao-3978ba216/"
                target="_blank"
                rel="noreferrer"
                hidden
              >
                LinkedIn
              </a>
            </div>
          </div>
          {portrait.src ? (
            <div className="portrait">
              <img
                className="portrait-photo"
                src={portrait.src}
                alt={portrait.alt}
              />
            </div>
          ) : null}
        </section>

        <section className="section" id="about">
          <h2>
            <span className="section-mark" aria-hidden="true">
              ○
            </span>
            About
          </h2>
          <div className="about-copy">
            <p>
              I am a Ph.D. candidate at The Hong Kong University of Science and
              Technology, supervised by Prof.{" "}
              <a
                href="https://ieda.ust.hk/dfaculty/tsung/"
                target="_blank"
                rel="noreferrer"
              >
                Fugee Tsung
              </a>
              .
            </p>
            <p>
              Before joining HKUST, I received an M.Phil. in Data Science and
              Analytics from HKUST(GZ), and completed undergraduate studies in
              Management Science and Computer Science at South China University
              of Technology. My current research interests include
              spatio-temporal learning, uncertainty quantification, and AI
              agents, with applications in operations management, energy
              systems, batteries, and weather forecasting. Some of my recent
              work is in collaboration with{" "}
              <a
                href="https://www.goldwind.com/en/"
                target="_blank"
                rel="noreferrer"
              >
                Goldwind
              </a>
              .
            </p>
            <p>
              I am also interested in quantum computing, causal inference, and
              AI for Finance (AI4Fin). If you are interested in any of these
              topics, I would be glad to connect and exchange ideas—{" "}
              <a href="mailto:shiyuan.piao@connect.ust.hk">
                feel free to reach out anytime
              </a>
              .
            </p>
          </div>
        </section>

        <section className="section" id="news" hidden>
          <h2>
            <span className="section-mark" aria-hidden="true">
              ▣
            </span>
            News
          </h2>
          <ul className="news-card">
            <li>
              <strong>[Jun. 2026]</strong>
              <span>Passed my Ph.D. Qualifying Examination (QE).</span>
            </li>
            <li>
              <strong>[May 2026]</strong>
              <span>
                Two papers on wind-power forecasting and battery state
                estimation were accepted by ACM SIGKDD 2026.
              </span>
            </li>
            <li>
              <strong>[Sep. 2025]</strong>
              <span>Started the Ph.D. program at HKUST.</span>
            </li>
          </ul>
        </section>

        <section className="section" id="education">
          <h2>
            <span className="section-mark" aria-hidden="true">
              ◇
            </span>
            Education
          </h2>
          <div className="timeline">
            <article>
              <time>Sep. 2025 — Present</time>
              <div>
                <h3>
                  Ph.D. Candidate in Industrial Engineering and Decision
                  Analytics
                </h3>
                <p>The Hong Kong University of Science and Technology</p>
                <small>
                  Advisor: Prof.{" "}
                  <a
                    href="https://ieda.ust.hk/dfaculty/tsung/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fugee Tsung
                  </a>
                </small>
              </div>
            </article>
            <article className="education-bundle education-mphil">
              <div className="education-row">
                <time>Sep. 2023 — Aug. 2025</time>
                <div>
                  <h3>M.Phil. in Data Science and Analytics</h3>
                  <p>
                    The Hong Kong University of Science and Technology
                    (Guangzhou)
                  </p>
                  <small>
                    Advisors: Prof.{" "}
                    <a
                      href="https://ieda.ust.hk/dfaculty/tsung/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Fugee Tsung
                    </a>{" "}
                    and Prof.{" "}
                    <a
                      href="https://facultyprofiles.hkust-gz.edu.cn/faculty-personal-page/LIANG-Yuxuan/yuxuanliang"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Yuxuan Liang
                    </a>
                  </small>
                </div>
              </div>
              <div className="education-row education-visit-row">
                <time>Jun. — Aug. 2025</time>
                <div className="visit-copy">
                  <span className="visit-title">Visiting Student</span>
                  <span className="visit-meta">
                    Hanyang University · Host: Prof.{" "}
                    <a
                      href="http://psm.hanyang.ac.kr/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Suk Joo BAE
                    </a>
                  </span>
                </div>
              </div>
            </article>
            <article className="education-bundle">
              <div className="education-row">
                <time>Sep. 2019 — Jun. 2023</time>
                <div>
                  <h3>B.Mgmt. in Management Science</h3>
                </div>
              </div>
              <div className="education-row">
                <time>Sep. 2020 — Jun. 2023</time>
                <div>
                  <h3>B.C.S. in Computer Science and Technology</h3>
                </div>
              </div>
              <div className="education-institution">
                <span aria-hidden="true" />
                <div>
                  <p>South China University of Technology</p>
                  <small>
                    Advisors: Prof.{" "}
                    <a
                      href="https://faculty.scut.edu.cn/gsgl/nbz/main.htm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Baozhuang Niu
                    </a>
                    , Prof.{" "}
                    <a
                      href="https://cnsba.scut.edu.cn/2020/0311/c24831a365965/page.htm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Shanshi Liu
                    </a>
                    , and Prof.{" "}
                    <a
                      href="https://faculty.scut.edu.cn/gsgl/skw/main.htm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Kaiwen Shen
                    </a>
                  </small>
                </div>
              </div>
              <div className="education-row education-visit-row">
                <time>Jul. — Aug. 2021</time>
                <div className="visit-copy">
                  <span className="visit-title">Visiting Student</span>
                  <span className="visit-meta">
                    McGill University · Machine Learning Group
                  </span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="awards">
          <h2>
            <span className="section-mark" aria-hidden="true">
              ☆
            </span>
            Honors &amp; Awards
          </h2>
          <ul className="award-list">
            {awards.map(([year, award]) => (
              <li key={`${year}-${award}`}>
                <strong>{year}</strong>
                <span>{award}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section" id="life">
          <h2>
            <span className="section-mark" aria-hidden="true">
              ☼
            </span>
            Beyond Research
          </h2>
          <div className="life-note">
            <p>
              Outside research, I enjoy cycling, badminton, and hiking.
              Recently, I have also been training for trail running and
              marathons.
            </p>
            <div className="hobbies" aria-label="Personal interests">
              <span>Cycling</span>
              <span>Badminton</span>
              <span>Hiking</span>
              <span>Trail running</span>
              <span>Marathon training</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Shiyuan Piao</span>
        <div>
          <a href="mailto:shiyuan.piao@connect.ust.hk">Email</a>
          <a
            href="https://scholar.google.com/citations?user=loqTpOwAAAAJ&hl=zh-CN"
            target="_blank"
            rel="noreferrer"
          >
            Scholar
          </a>
          <a
            href="https://www.linkedin.com/in/shiyuan-piao-3978ba216/"
            target="_blank"
            rel="noreferrer"
            hidden
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/shawn-sypiao"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
