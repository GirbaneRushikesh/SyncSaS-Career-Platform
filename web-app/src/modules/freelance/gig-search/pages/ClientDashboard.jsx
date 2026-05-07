import React from "react";
import { Link } from "react-router-dom";
import GigList from "../components/GigList";
import { useGigs } from "../context/GigContext";

const ClientDashboard = () => {
  const { gigs } = useGigs ? useGigs() : { gigs: [] };

  // derive current user name from persisted profile (falls back to "You")
  let userName = "You";
  try {
    const raw = localStorage.getItem("ss_user_profile_v1");
    if (raw) userName = JSON.parse(raw).name || userName;
  } catch {}

  // filter gigs authored by current user (compare name)
  const myGigs = (gigs || []).filter((g) => {
    // some gigs may store author as string; be tolerant
    return String(g.author || "").trim() === String(userName).trim();
  });

  return (
    <div style={{ maxWidth: 980, margin: "24px auto", display: "grid", gap: 12 }}>
      <div className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h2 style={{ margin: 0 }}>Client dashboard</h2>
          <div className="small" style={{ marginTop: 6 }}>Manage your posted gigs and view activity.</div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Link to="/create" className="btn">Post new gig</Link>
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>Your posted gigs</h3>
        {myGigs.length === 0 ? (
          <div style={{ display: "grid", gap: 8 }}>
            <p className="small">You haven't posted any gigs yet. Click "Post new gig" to create one.</p>
            <Link to="/create" className="btn">Create your first gig</Link>
          </div>
        ) : (
          <div style={{ display: "grid", gap: 12 }}>
            <div className="small" style={{ marginBottom: 8 }}>{myGigs.length} gig(s) posted by {userName}</div>
            <GigList gigs={myGigs} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientDashboard;