"use client";

import { useState } from "react";

type TemplateId = "signal" | "notes" | "orbit";

const templates: Array<{
  id: TemplateId;
  code: string;
  name: string;
  description: string;
}> = [
  {
    id: "signal",
    code: "01",
    name: "Signal",
    description: "清晰、理性、研究型",
  },
  {
    id: "notes",
    code: "02",
    name: "Field Notes",
    description: "温暖、编辑感、个人化",
  },
  {
    id: "orbit",
    code: "03",
    name: "Orbit",
    description: "深色、技术感、有冲击力",
  },
];

const Arrow = () => <span aria-hidden="true">↗</span>;

function TemplateSwitcher({
  active,
  onChange,
}: {
  active: TemplateId;
  onChange: (id: TemplateId) => void;
}) {
  return (
    <aside className="template-switcher" aria-label="主页模板选择器">
      <div className="switcher-title">
        <span className="switcher-dot" />
        <span>主页模板</span>
      </div>
      <div className="switcher-options">
        {templates.map((template) => (
          <button
            className={active === template.id ? "is-active" : ""}
            key={template.id}
            onClick={() => onChange(template.id)}
            type="button"
            aria-pressed={active === template.id}
          >
            <span className="switcher-code">{template.code}</span>
            <span>
              <strong>{template.name}</strong>
              <small>{template.description}</small>
            </span>
          </button>
        ))}
      </div>
      <span className="switcher-hint">点击切换</span>
    </aside>
  );
}

function SignalTemplate() {
  return (
    <div className="signal-site">
      <header className="signal-nav">
        <a className="signal-mark" href="#signal-top" aria-label="返回首页">
          YN<span>°</span>
        </a>
        <nav aria-label="Signal 模板导航">
          <a href="#signal-work">Work</a>
          <a href="#signal-about">About</a>
          <a href="#signal-notes">Notes</a>
        </nav>
        <a className="signal-contact" href="mailto:hello@example.com">
          Let&apos;s talk <Arrow />
        </a>
      </header>

      <main id="signal-top">
        <section className="signal-hero">
          <div className="signal-intro">
            <p className="eyebrow">
              <span />
              Researcher &amp; builder
            </p>
            <h1>
              Making complex
              <br />
              systems <em>legible.</em>
            </h1>
            <div className="signal-summary">
              <p>
                I study intelligent systems under uncertainty — and build tools
                that make their decisions safer, clearer, and more useful.
              </p>
              <a href="#signal-work">
                Explore selected work <Arrow />
              </a>
            </div>
          </div>

          <div className="signal-radar" aria-label="当前研究方向">
            <div className="radar-top">
              <span>Current directions</span>
              <span>2024 — 26</span>
            </div>
            <div className="radar-orbit">
              <span className="orbit orbit-one" />
              <span className="orbit orbit-two" />
              <span className="orbit-core" />
              <span className="orbit-label label-one">Reliable AI</span>
              <span className="orbit-label label-two">Uncertainty</span>
              <span className="orbit-label label-three">Systems</span>
            </div>
            <div className="radar-bottom">
              <span>03 active threads</span>
              <span>Open to collaboration</span>
            </div>
          </div>
        </section>

        <section className="signal-ticker" aria-label="研究主题">
          <span>RELIABLE MACHINE LEARNING</span>
          <i>✦</i>
          <span>DECISION SYSTEMS</span>
          <i>✦</i>
          <span>HUMAN-CENTERED RESEARCH</span>
          <i>✦</i>
        </section>

        <section className="signal-work" id="signal-work">
          <div className="section-heading">
            <div>
              <span>01 / Selected work</span>
              <h2>Ideas, tested in<br />the real world.</h2>
            </div>
            <p>
              A selection of research and applied projects across trustworthy
              AI, forecasting, and intelligent infrastructure.
            </p>
          </div>
          <div className="signal-projects">
            <article>
              <div className="project-number">01</div>
              <div>
                <p>RESEARCH · 2026</p>
                <h3>Risk-aware learning<br />for critical decisions</h3>
              </div>
              <Arrow />
            </article>
            <article>
              <div className="project-number">02</div>
              <div>
                <p>APPLIED AI · 2025</p>
                <h3>Forecasting uncertainty<br />in dynamic systems</h3>
              </div>
              <Arrow />
            </article>
            <article>
              <div className="project-number">03</div>
              <div>
                <p>OPEN SOURCE · 2025</p>
                <h3>Tools for reproducible<br />machine learning</h3>
              </div>
              <Arrow />
            </article>
          </div>
        </section>

        <footer className="signal-footer" id="signal-about">
          <p>Good questions deserve rigorous answers.</p>
          <a href="mailto:hello@example.com">hello@example.com <Arrow /></a>
        </footer>
      </main>
    </div>
  );
}

function NotesTemplate() {
  return (
    <div className="notes-site">
      <header className="notes-nav">
        <a href="#notes-top" className="notes-name">
          Your Name
          <span>Research notes &amp; selected work</span>
        </a>
        <nav aria-label="Field Notes 模板导航">
          <a href="#notes-work">Index</a>
          <a href="#notes-about">About</a>
          <a href="mailto:hello@example.com">Email <Arrow /></a>
        </nav>
      </header>

      <main id="notes-top">
        <section className="notes-hero">
          <p className="notes-kicker">FIELD NOTE № 27 · UPDATED JULY 2026</p>
          <h1>
            A notebook for ideas
            <br />
            that survive the <span>lab.</span>
          </h1>
          <div className="notes-hero-bottom">
            <p className="notes-lead">
              I&apos;m a researcher working where machine learning meets
              uncertainty, infrastructure, and the stubborn complexity of the
              physical world.
            </p>
            <div className="notes-stamp">
              <span>Currently</span>
              <strong>Thinking in<br />systems</strong>
              <small>○ AVAILABLE FOR GOOD CONVERSATIONS</small>
            </div>
          </div>
          <div className="pencil-note" aria-hidden="true">
            Questions first,
            <br />
            models second.
          </div>
        </section>

        <section className="notes-index" id="notes-work">
          <div className="notes-index-heading">
            <span>Selected entries</span>
            <span>2019 — 2026</span>
          </div>
          <article>
            <span className="entry-id">01</span>
            <div>
              <p>TRUSTWORTHY AI / RESEARCH</p>
              <h2>How much should<br />we trust a prediction?</h2>
            </div>
            <div className="entry-meta">
              <span>Paper</span>
              <span>Ongoing</span>
            </div>
            <Arrow />
          </article>
          <article>
            <span className="entry-id">02</span>
            <div>
              <p>ENERGY / FORECASTING</p>
              <h2>Reading tomorrow<br />from imperfect weather</h2>
            </div>
            <div className="entry-meta">
              <span>Project</span>
              <span>2025</span>
            </div>
            <Arrow />
          </article>
          <article>
            <span className="entry-id">03</span>
            <div>
              <p>TOOLS / OPEN SOURCE</p>
              <h2>A small toolkit for<br />reproducible experiments</h2>
            </div>
            <div className="entry-meta">
              <span>Code</span>
              <span>2024</span>
            </div>
            <Arrow />
          </article>
        </section>

        <section className="notes-about" id="notes-about">
          <p className="notes-section-label">A short field note about me</p>
          <blockquote>
            “The most useful research doesn&apos;t just improve a number.
            It changes how we see the problem.”
          </blockquote>
          <div>
            <p>
              My work combines statistical learning, systems thinking, and
              careful experiments. I enjoy collaborations that cross
              disciplines and produce things people can actually use.
            </p>
            <a href="mailto:hello@example.com">Start a conversation <Arrow /></a>
          </div>
        </section>
      </main>

      <footer className="notes-footer">
        <span>Made with questions, coffee, and version control.</span>
        <span>© 2026 YOUR NAME</span>
      </footer>
    </div>
  );
}

function OrbitTemplate() {
  return (
    <div className="orbit-site">
      <header className="orbit-nav">
        <a className="orbit-logo" href="#orbit-top">
          <span>Y/N</span>
          <small>RESEARCH<br />SYSTEMS</small>
        </a>
        <nav aria-label="Orbit 模板导航">
          <a href="#orbit-work">[ WORK ]</a>
          <a href="#orbit-about">[ PROFILE ]</a>
          <a href="mailto:hello@example.com">[ CONTACT ↗ ]</a>
        </nav>
        <span className="orbit-clock">HKG / 22:48:09</span>
      </header>

      <main id="orbit-top">
        <section className="orbit-hero">
          <div className="orbit-grid-labels" aria-hidden="true">
            <span>36.2048° N</span>
            <span>127.6792° E</span>
            <span>SYS.01</span>
          </div>
          <div className="orbit-title">
            <p>
              <span className="status-light" />
              INDEPENDENT RESEARCHER / ENGINEER
            </p>
            <h1>
              Designing
              <br />
              intelligence
              <br />
              for the <em>real world.</em>
            </h1>
          </div>
          <aside className="orbit-console">
            <div className="console-head">
              <span>STATUS.LOG</span>
              <span>LIVE</span>
            </div>
            <div className="console-graphic" aria-hidden="true">
              <span className="console-ring ring-a" />
              <span className="console-ring ring-b" />
              <span className="console-cross horizontal" />
              <span className="console-cross vertical" />
              <span className="console-point" />
              <span className="console-reading">0.98</span>
            </div>
            <dl>
              <div><dt>FOCUS</dt><dd>RELIABLE AI</dd></div>
              <div><dt>MODE</dt><dd>EXPLORATION</dd></div>
              <div><dt>COLLAB</dt><dd>OPEN <span>●</span></dd></div>
            </dl>
          </aside>
          <div className="orbit-scroll">
            <span>SCROLL TO EXPLORE</span>
            <span>↓</span>
          </div>
        </section>

        <section className="orbit-manifesto" id="orbit-about">
          <p>MISSION / 001</p>
          <h2>
            Machines that know
            <br />
            <span>what they don&apos;t know.</span>
          </h2>
          <div className="manifesto-copy">
            <p>
              I build learning systems that operate under uncertainty. The goal:
              decisions that are not only accurate, but calibrated, transparent,
              and ready for high-stakes environments.
            </p>
            <a href="mailto:hello@example.com">INITIATE CONTACT <Arrow /></a>
          </div>
        </section>

        <section className="orbit-work" id="orbit-work">
          <div className="orbit-section-head">
            <span>SELECTED OPERATIONS</span>
            <span>03 / ACTIVE ARCHIVE</span>
          </div>
          <article>
            <span>OP.01</span>
            <div>
              <p>RISK CONTROL</p>
              <h3>Reliable decisions under distribution shift</h3>
            </div>
            <div className="orbit-tags">
              <span>RESEARCH</span><span>ML</span><span>2026</span>
            </div>
            <Arrow />
          </article>
          <article>
            <span>OP.02</span>
            <div>
              <p>EARTH SYSTEMS</p>
              <h3>Probabilistic forecasting at scale</h3>
            </div>
            <div className="orbit-tags">
              <span>FORECASTING</span><span>AI</span><span>2025</span>
            </div>
            <Arrow />
          </article>
          <article>
            <span>OP.03</span>
            <div>
              <p>INTELLIGENT INFRASTRUCTURE</p>
              <h3>Systems that adapt without losing control</h3>
            </div>
            <div className="orbit-tags">
              <span>SYSTEMS</span><span>UQ</span><span>2024</span>
            </div>
            <Arrow />
          </article>
        </section>
      </main>

      <footer className="orbit-footer">
        <span>© 2026 YOUR NAME</span>
        <span>ALL SYSTEMS NOMINAL</span>
        <span>GITHUB / SCHOLAR / LINKEDIN</span>
      </footer>
    </div>
  );
}

export default function Home() {
  const [template, setTemplate] = useState<TemplateId>("signal");

  return (
    <>
      <TemplateSwitcher active={template} onChange={setTemplate} />
      <div className={`template-stage template-${template}`}>
        {template === "signal" && <SignalTemplate />}
        {template === "notes" && <NotesTemplate />}
        {template === "orbit" && <OrbitTemplate />}
      </div>
    </>
  );
}
