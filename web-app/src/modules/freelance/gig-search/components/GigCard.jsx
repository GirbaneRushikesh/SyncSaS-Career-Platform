import React from "react";
import { Link } from "react-router-dom";
import { useBookmarks } from "../context/BookmarkContext";

const GigCard = ({ gig }) => {
  const { bookmarks, toggleBookmark } = useBookmarks();

  return (
    <div style={{ border: "1px solid var(--border)", padding: "16px", marginBottom: "12px", borderRadius: 8, background: "var(--card)" }}>
      <h3 style={{ margin: 0 }}>{gig.title}</h3>
      <p style={{ margin: "8px 0" }}>{gig.description}</p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", color: "var(--muted)" }}>
        <span><strong>Category:</strong> {gig.category}</span>
        <span><strong>Budget:</strong> ₹{gig.budget}</span>
        <span><strong>Experience:</strong> {gig.experience}</span>
      </div>

      <div style={{ marginTop: 10, display: "flex", gap: 8, alignItems: "center" }}>
        <Link to={`/gig/${gig.id}`}><button>View</button></Link>
        <Link to={`/freelancer/${gig.freelancerId}`}><button>Profile</button></Link>
        <button onClick={() => toggleBookmark(gig.id)}>
          {bookmarks.includes(gig.id) ? "Remove" : "Save"}
        </button>
        <div style={{ marginLeft: "auto", color: "var(--muted)" }}>
          <strong>{gig.rating ?? "—"}</strong> ({gig.reviewsCount ?? 0})
        </div>
      </div>
    </div>
  );
};

export default GigCard;
