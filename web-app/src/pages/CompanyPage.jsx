import React from "react";
import { Link } from "react-router-dom";

const CompanyPage = () => {
  return (
    <div style={{ maxWidth: 960, margin: "24px auto", display: "grid", gap: 16 }}>
      <div className="card" style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <img src="/syncsas-favicon.svg" alt="SyncSaS" style={{ width: 96, height: 96, borderRadius: 12 }} />
        <div>
          <h1 style={{ margin: 0 }}>SyncSaS Technologies Pvt. Ltd.</h1>
          <p className="small" style={{ marginTop: 6 }}>
            A product-driven engineering team focused on building developer-first SaaS tools and scalable web platforms.
            We specialize in frontend UX, robust APIs and developer workflows.
          </p>
          <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
            <a className="btn ghost" href="https://syncsas.com" target="_blank" rel="noreferrer">Visit syncsas.com</a>
            <Link to="/" className="btn">Explore platform</Link>
          </div>
        </div>
      </div>

      <div className="row">
        <div style={{ flex: 2 }}>
          <div className="card">
            <h3>What we do</h3>
            <ul className="small">
              <li>Design and build user-first web applications</li>
              <li>Mentor interns in full-stack best practices</li>
              <li>Ship production-ready features with observability and tests</li>
            </ul>
          </div>

          <div className="card" style={{ marginTop: 12 }}>
            <h3>Why SyncSaS</h3>
            <p className="small">
              We focus on clarity, scalable architecture, and developer experience — inspired by modern platforms and design systems.
              Our internship program emphasizes ownership: you ship real features and learn end-to-end workflows.
            </p>
          </div>
        </div>

        <aside style={{ width: 320 }}>
          <div className="card">
            <h4>Contact</h4>
            <div className="small">Email: careers@syncsas.example</div>
            <div className="small" style={{ marginTop: 8 }}>Location: Remote-first / Mumbai</div>
          </div>

          <div className="card" style={{ marginTop: 12 }}>
            <h4>References</h4>
            <div className="small">
              Inspiration: Stripe (developer UX), Figma (design systems), GitHub (collaboration).
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CompanyPage;