"use client";

import { useState } from "react";

type TemplateId = "plain" | "split" | "index";

const choices: Array<{
  id: TemplateId;
  number: string;
  name: string;
  note: string;
}> = [
  { id: "plain", number: "01", name: "Plain", note: "纯文字单栏" },
  { id: "split", number: "02", name: "Split", note: "简洁左右分栏" },
  { id: "index", number: "03", name: "Index", note: "学术索引风格" },
];

const Arrow = () => <span aria-hidden="true">↗</span>;

function TemplateBar({
  active,
  setActive,
}: {
  active: TemplateId;
  setActive: (template: TemplateId) => void;
}) {
  return (
    <aside className="template-bar" aria-label="极简主页模板选择">
      <p>选择模板</p>
      <div>
        {choices.map((choice) => (
          <button
            className={active === choice.id ? "active" : ""}
            key={choice.id}
            onClick={() => setActive(choice.id)}
            type="button"
            aria-pressed={active === choice.id}
          >
            <span>{choice.number}</span>
            <strong>{choice.name}</strong>
            <small>{choice.note}</small>
          </button>
        ))}
      </div>
      <p className="bar-note">最终页面不会保留此栏</p>
    </aside>
  );
}

function PlainTemplate() {
  return (
    <div className="plain-page">
      <header>
        <a className="plain-name" href="#plain-top">
          Your Name
        </a>
        <nav aria-label="Plain 模板导航">
          <a href="#plain-about">About</a>
          <a href="#plain-work">Work</a>
          <a href="#plain-contact">Contact</a>
        </nav>
      </header>

      <main id="plain-top">
        <section className="plain-hero">
          <p className="plain-role">Researcher &amp; Engineer</p>
          <h1>
            I work on reliable machine learning and intelligent systems.
          </h1>
          <p className="plain-intro">
            My research focuses on uncertainty, decision-making, and building
            machine learning systems that work beyond controlled settings.
          </p>
          <div className="plain-links">
            <a href="mailto:hello@example.com">
              Email <Arrow />
            </a>
            <a href="#plain-work">Selected work ↓</a>
          </div>
        </section>

        <section className="plain-section plain-about" id="plain-about">
          <h2>About</h2>
          <div>
            <p>
              I&apos;m interested in the gap between a model that performs well
              in an experiment and a system that can be trusted in practice.
            </p>
            <p>
              I enjoy working across disciplines, writing clearly, and turning
              research questions into useful tools.
            </p>
          </div>
        </section>

        <section className="plain-section" id="plain-work">
          <h2>Selected work</h2>
          <div className="plain-work-list">
            <a href="#">
              <span>2026</span>
              <strong>Risk-aware learning for critical decisions</strong>
              <small>Research paper</small>
              <Arrow />
            </a>
            <a href="#">
              <span>2025</span>
              <strong>Forecasting uncertainty in dynamic systems</strong>
              <small>Applied research</small>
              <Arrow />
            </a>
            <a href="#">
              <span>2024</span>
              <strong>Tools for reproducible machine learning</strong>
              <small>Open source</small>
              <Arrow />
            </a>
          </div>
        </section>

        <section className="plain-section plain-contact" id="plain-contact">
          <h2>Contact</h2>
          <div>
            <p>For research, collaboration, or a thoughtful conversation:</p>
            <a href="mailto:hello@example.com">hello@example.com <Arrow /></a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Your Name</span>
        <div>
          <a href="#">Google Scholar</a>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

function SplitTemplate() {
  return (
    <div className="split-page">
      <aside className="split-profile">
        <div>
          <a className="split-name" href="#split-top">
            Your Name
          </a>
          <p>Researcher working on reliable AI, uncertainty, and intelligent systems.</p>
        </div>
        <nav aria-label="Split 模板导航">
          <a href="#split-about">About</a>
          <a href="#split-work">Work</a>
          <a href="#split-writing">Writing</a>
        </nav>
        <div className="split-social">
          <a href="mailto:hello@example.com">Email <Arrow /></a>
          <a href="#">Scholar</a>
          <a href="#">GitHub</a>
        </div>
      </aside>

      <main id="split-top">
        <section className="split-lead">
          <p>Currently</p>
          <h1>
            Exploring how learning systems can make better decisions when the
            world is uncertain.
          </h1>
          <small>Based in Hong Kong · Open to collaboration</small>
        </section>

        <section className="split-section" id="split-about">
          <h2>About</h2>
          <div>
            <p>
              My work sits between machine learning research and real-world
              systems. I care about methods that are rigorous, understandable,
              and useful outside the lab.
            </p>
          </div>
        </section>

        <section className="split-section" id="split-work">
          <h2>Selected work</h2>
          <div className="split-list">
            <a href="#">
              <span>01</span>
              <div>
                <strong>Reliable decisions under uncertainty</strong>
                <small>Trustworthy machine learning · 2026</small>
              </div>
              <Arrow />
            </a>
            <a href="#">
              <span>02</span>
              <div>
                <strong>Probabilistic forecasting at scale</strong>
                <small>Forecasting systems · 2025</small>
              </div>
              <Arrow />
            </a>
            <a href="#">
              <span>03</span>
              <div>
                <strong>Learning systems for infrastructure</strong>
                <small>Applied AI · 2024</small>
              </div>
              <Arrow />
            </a>
          </div>
        </section>

        <section className="split-section" id="split-writing">
          <h2>Recent writing</h2>
          <div className="split-writing">
            <a href="#">
              <span>Jul 2026</span>
              <strong>What does it mean for a model to know its limits?</strong>
            </a>
            <a href="#">
              <span>May 2026</span>
              <strong>Notes on research that survives deployment</strong>
            </a>
          </div>
        </section>

        <footer>
          <span>© 2026</span>
          <span>Last updated July 2026</span>
        </footer>
      </main>
    </div>
  );
}

function IndexTemplate() {
  return (
    <div className="index-page">
      <header id="index-top">
        <div>
          <a href="#index-top">Your Name</a>
          <span>Ph.D. · Researcher · Engineer</span>
        </div>
        <nav aria-label="Index 模板导航">
          <a href="#index-bio">Bio</a>
          <a href="#index-publications">Publications</a>
          <a href="#index-projects">Projects</a>
          <a href="mailto:hello@example.com">Email</a>
        </nav>
      </header>

      <main>
        <section className="index-intro" id="index-bio">
          <p className="index-label">Bio</p>
          <div>
            <h1>
              I study trustworthy machine learning and decision systems under
              uncertainty.
            </h1>
            <p>
              My goal is to build methods that remain reliable when data,
              environments, and human needs change.
            </p>
            <p className="index-links">
              <a href="#">CV</a>
              <a href="#">Google Scholar</a>
              <a href="#">GitHub</a>
            </p>
          </div>
        </section>

        <section className="index-section" id="index-publications">
          <p className="index-label">Selected publications</p>
          <div className="index-rows">
            <article>
              <span>2026</span>
              <div>
                <h2>Risk Control for Learning Systems Under Shift</h2>
                <p>Your Name, Coauthor Name · Journal / Conference</p>
              </div>
              <a href="#">Paper</a>
            </article>
            <article>
              <span>2025</span>
              <div>
                <h2>Calibrated Forecasting for Dynamic Environments</h2>
                <p>Your Name, Coauthor Name · Journal / Conference</p>
              </div>
              <a href="#">Paper</a>
            </article>
            <article>
              <span>2024</span>
              <div>
                <h2>Uncertainty-Aware Decisions in Complex Systems</h2>
                <p>Your Name, Coauthor Name · Journal / Conference</p>
              </div>
              <a href="#">Paper</a>
            </article>
          </div>
        </section>

        <section className="index-section" id="index-projects">
          <p className="index-label">Projects</p>
          <div className="index-rows">
            <article>
              <span>01</span>
              <div>
                <h2>Reliable ML Toolkit</h2>
                <p>Open-source tools for evaluation and reproducible research.</p>
              </div>
              <a href="#">View</a>
            </article>
            <article>
              <span>02</span>
              <div>
                <h2>Probabilistic Forecasting</h2>
                <p>Learning uncertainty in real-world forecasting systems.</p>
              </div>
              <a href="#">View</a>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <span>Your Name · hello@example.com</span>
        <span>Hong Kong · 2026</span>
      </footer>
    </div>
  );
}

export default function Home() {
  const [active, setActive] = useState<TemplateId>("plain");

  return (
    <>
      <TemplateBar active={active} setActive={setActive} />
      <div className={`template-preview preview-${active}`}>
        {active === "plain" && <PlainTemplate />}
        {active === "split" && <SplitTemplate />}
        {active === "index" && <IndexTemplate />}
      </div>
    </>
  );
}
