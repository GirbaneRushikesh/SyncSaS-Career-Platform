import React from "react";
// keep header logo linking to syncsas.com (external)
  
const HeaderLogo = ({ small = false }) => {
  return (
    <a href="https://syncsas.com" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
      <div className="brand" aria-hidden>
        <img
          src="/syncsas-favicon.svg"
          alt="SyncSaS logo"
          style={{
            width: small ? 36 : 44,
            height: small ? 36 : 44,
            borderRadius: 8,
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(11,95,255,0.12)"
          }}
        />
        <div className="title" style={{ marginLeft: 8 }}>
          <div style={{ fontWeight: 800, fontSize: small ? 14 : 18, color: "var(--ss-dark)" }}>SyncSaS</div>
          <div style={{ fontSize: 11, color: "var(--muted)", fontWeight: 600 }}>Technologies Pvt. Ltd.</div>
        </div>
      </div>
    </a>
  );
};

export default HeaderLogo;