import React from "react";
import "./styles.css";
import logo from "./assets/SystemsIQ Master Logo.png";

export default function App() {
  return (
    <div className="page">
      {/* NAV */}
      <header className="nav">
        <div className="nav-left">
          <img src={logo} alt="SystemsIQ logo" className="nav-logo" />
          <span className="nav-brand">SystemsIQ</span>
        </div>
        <nav className="nav-links">
          <a href="#pillars">Pillars</a>
          <a href="#solutions">Solutions</a>
          <a href="#process">How It Works</a>
          <a href="#about">About</a>
          <a href="#contact" className="nav-cta">Start</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Automate · Connect · Think</h1>
          <p>
            SystemsIQ designs automation, integrations, and AI-powered workflows
            that remove busywork, connect your tools, and give you decision-ready insight.
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
            Built for owners who are done doing everything manually.
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section id="pillars" className="section">
        <h2>Three Pillars of SystemsIQ</h2>
        <div className="grid">
          <div className="card">
            <h3>Automate</h3>
            <p>
              Replace repetitive tasks with reliable workflows: offer generation,
              reporting, notifications, document creation, and more.
            </p>
          </div>
          <div className="card">
            <h3>Connect</h3>
            <p>
              Make your tools talk to each other: CRM, email, spreadsheets,
              inventory, accounting, and calendars in one connected system.
            </p>
          </div>
          <div className="card">
            <h3>Think</h3>
            <p>
              Turn your data into decisions with smart prompts, AI assistants,
              and dashboards that surface what matters next.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="section section-alt">
        <h2>What We Can Build For You</h2>
        <div className="grid">
          <div className="card">
            <h3>Offer Automation Engine</h3>
            <p>
              Generate and send polished offers from your inventory sheets in minutes,
              not hours – with tracking and templates baked in.
            </p>
          </div>
          <div className="card">
            <h3>Voicemail-to-Sale Flows</h3>
            <p>
              Turn missed calls into instant SMS replies, FAQs, and booking links,
              so leads never slip away.
            </p>
          </div>
          <div className="card">
            <h3>Ops Dashboards</h3>
            <p>
              Real-time KPIs from spreadsheets, CRMs, and tools – in one clean view
              your team will actually use.
            </p>
          </div>
          <div className="card">
            <h3>Custom Integrations</h3>
            <p>
              If your process lives in a spreadsheet or scattered apps,
              we design the bridge and automate it.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section">
        <h2>How It Works</h2>
        <div className="timeline">
          <div className="step">
            <span className="step-label">1</span>
            <h3>Map</h3>
            <p>Quick audit of your tools, bottlenecks, and goals.</p>
          </div>
          <div className="step">
            <span className="step-label">2</span>
            <h3>Design</h3>
            <p>Blueprint + fixed project scope so you know exactly what you get.</p>
          </div>
          <div className="step">
            <span className="step-label">3</span>
            <h3>Build & Support</h3>
            <p>Implementation, testing, training, and light ongoing support.</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section section-alt">
        <h2>About SystemsIQ</h2>
        <p className="about-text">
          SystemsIQ is a one-on-one automation and systems partner led by Mike Lantz.
          We specialize in turning messy, real-world workflows into simple,
          documented systems that save time and make you look organized and in control.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Start a Project</h2>
        <p>Tell us what’s breaking, what’s manual, or what you wish “just happened.”</p>
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
            <option>Automation & workflow builds</option>
            <option>Systems integration (tools talking together)</option>
            <option>AI assistant / agent setup</option>
            <option>Dashboards & reporting</option>
            <option>Not sure – map it for me</option>
          </select>
          <textarea
            rows="4"
            placeholder="Briefly describe your current process or problem."
          />
          <button type="submit" className="btn btn-primary">
            Submit Inquiry
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} SystemsIQ. All rights reserved.</p>
      </footer>
    </div>
  );
}
