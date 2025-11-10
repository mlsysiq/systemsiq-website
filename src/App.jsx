import React, { useEffect, useRef } from "react";
import "./styles.css";
import logo from "./assets/SystemsIQ Master Logo.png";
import logoAnimation from "./assets/systemsiq-logo-animated.mp4";
import startIcon from "./assets/START.png";

/**
 * Small hook to reveal elements on scroll.
 * Adds .reveal-visible once, then unobserves.
 */
const useReveal = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return ref;
};

export default function App() {
  const pillarsRef = useReveal();
  const solutionsRef = useReveal();
  const processRef = useReveal();
  const aboutRef = useReveal();
  const contactRef = useReveal();
  const snapshotRef = useReveal({ threshold: 0.1 });

  return (
    <div className="page">
      {/* NAV */}
      <header className="nav">
        <div className="nav-inner">
          <div className="nav-left">
            <img src={logo} alt="SystemsIQ logo" className="nav-logo" />
            <span className="nav-brand">SystemsIQ</span>
          </div>
          <nav className="nav-links">
            <a href="#pillars">Pillars</a>
            <a href="#solutions">Solutions</a>
            <a href="#process">How It Works</a>
            <a href="#about">About</a>
            <a href="#contact" className="nav-cta">
              <img src={startIcon} alt="Start" className="nav-cta-img" />
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <h1>Automate · Connect · Think</h1>
            <p>
              SystemsIQ, LLC builds clean, reliable automation, integrations,
              and AI-powered workflows that remove busywork, connect your tools,
              and give you decision-ready insight.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Start a Systems Audit
              </a>
              <a href="#solutions" className="btn btn-outline">
                See What We Can Build
              </a>
            </div>
            <p className="hero-tagline">
              For owners who are done doing everything manually—and want systems
              that quietly run in the background.
            </p>
          </div>

          {/* HERO ANIMATED LOGO (MP4) */}
          <div className="hero-media">
            <video
              className="hero-logo-video"
              src={logoAnimation}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </section>

      {/* SIGNAL BAR */}
      <section className="signal-bar">
        <div className="signal-inner">
          <div className="signal-label">SystemsIQ Signal</div>
          <div className="signal-items">
            <span>Map the real workflow.</span>
            <span>Connect the right tools.</span>
            <span>Automate &amp; add AI where it matters.</span>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section id="pillars" ref={pillarsRef} className="section reveal">
        <div className="section-inner">
          <h2>Three Pillars of SystemsIQ</h2>
          <div className="grid">
            <div className="card">
              <h3>Automate</h3>
              <p>
                Replace repetitive work with reliable workflows: offers,
                reports, onboarding, reminders, document generation, and more.
              </p>
            </div>
            <div className="card">
              <h3>Connect</h3>
              <p>
                Make your stack behave like one system: CRM, email,
                spreadsheets, inventory, accounting, calendars, all talking to
                each other.
              </p>
            </div>
            <div className="card">
              <h3>Think</h3>
              <p>
                Use AI and dashboards to surface “what matters next” instead of
                digging through tabs, files, and email threads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS + SNAPSHOT PANEL */}
      <section
        id="solutions"
        ref={solutionsRef}
        className="section-alt reveal"
      >
        <div className="section-inner">
          <h2>What We Can Build For You</h2>
          <div className="grid solutions-grid">
            <div className="card">
              <h3>Ops Dashboards</h3>
              <p>
                Real-time KPIs from your tools in one clean view—zero manual
                report-building and no more guessing from stale spreadsheets.
              </p>
            </div>
            <div className="card">
              <h3>Custom Integrations &amp; Automations</h3>
              <p>
                End-to-end systems that match how your business actually runs:
                offer automation engines, voicemail-to-sale flows, intake bots,
                approvals, notifications, and more—built around your tools, not
                ours.
              </p>
            </div>

            {/* LIVE SYSTEMS SNAPSHOT PANEL */}
            <div
              ref={snapshotRef}
              className="hero-panel solutions-panel reveal"
            >
              <div className="panel-label">Live Systems Snapshot</div>
              <div className="panel-grid">
                <div className="panel-node panel-node-primary">Owner</div>
                <div className="panel-link">→</div>
                <div className="panel-node">CRM</div>
                <div className="panel-link">→</div>
                <div className="panel-node">Sheets &amp; Inventory</div>
                <div className="panel-link">→</div>
                <div className="panel-node">Email &amp; SMS</div>
                <div className="panel-link">→</div>
                <div className="panel-node">AI Assistant</div>
              </div>
              <p className="panel-caption">
                One connected flow from lead to invoice—no double entry,
                no chasing files, no missed follow-ups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" ref={processRef} className="section reveal">
        <div className="section-inner">
          <h2>How an Engagement Works</h2>
          <div className="timeline">
            <div className="step">
              <span className="step-label">Week 1</span>
              <h3>Map</h3>
              <p>We document your real workflow, tools, and bottlenecks.</p>
            </div>
            <div className="step">
              <span className="step-label">Week 2</span>
              <h3>Design</h3>
              <p>
                A clear blueprint and fixed scope so you know exactly what we’ll
                build.
              </p>
            </div>
            <div className="step">
              <span className="step-label">Weeks 3–4</span>
              <h3>Build &amp; Deploy</h3>
              <p>
                We implement, test with your data, train your team, and refine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        ref={aboutRef}
        className="section-alt reveal"
      >
        <div className="section-inner">
          <h2>About SystemsIQ</h2>
          <p className="about-text">
            SystemsIQ, LLC is led by Mike Lantz, working directly with owners
            and operators to turn chaotic, manual processes into documented
            systems. The focus: real-world constraints, minimal fluff, and
            solutions your team can actually run without a full-time engineer.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" ref={contactRef} className="section reveal">
        <div className="section-inner">
          <h2>Start a Project</h2>
          <p>
            Share what’s breaking, what’s manual, or what you wish “just
            happened.” You’ll get a focused reply within one business day.
          </p>
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
            </div>
            <input type="text" placeholder="Business / Organization" />
            <select defaultValue="">
              <option value="" disabled>
                What are you most interested in?
              </option>
              <option>Automation &amp; workflow builds</option>
              <option>Systems integration (tools talking together)</option>
              <option>AI assistant / agent setup</option>
              <option>Dashboards &amp; reporting</option>
              <option>Not sure – map it for me</option>
            </select>
            <textarea
              rows="4"
              placeholder="Briefly describe your current process or problem."
            />
            <button type="submit" className="btn btn-primary">
              Submit Inquiry
            </button>
            <p className="form-note">
              No spam. No outsourcing. Just a direct response from SystemsIQ.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="section-inner footer-inner">
          <p>© {new Date().getFullYear()} SystemsIQ, LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
