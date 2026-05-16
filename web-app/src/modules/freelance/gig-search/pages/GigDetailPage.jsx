import React from "react";
import { useParams, Link } from "react-router-dom";
import { useGigs } from "../context/GigContext";
import { useBookmarks } from "../context/BookmarkContext";
import { useReviews } from "../context/ReviewContext";
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";

const GigDetailPage = () => {
  const { id } = useParams();
  const { getById } = useGigs ? useGigs() : { getById: () => null };
  const gig = getById(id);

  const { bookmarks, toggle } = useBookmarks();
  const { getByGig } = useReviews();

  if (!gig) {
    return (
      <div className="card">
        <h3>Gig not found</h3>
        <p className="small">The gig may have been removed or the id is invalid.</p>
        <Link to="/">Back to Explore</Link>
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h2 style={{ margin: 0 }}>{gig.title}</h2>
            <div className="small">{gig.category} • {gig.experience} • ₹{gig.budget}</div>
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <button className="btn ghost" onClick={() => toggle(gig.id)}>
              {bookmarks.includes(gig.id) ? "Saved" : "Save"}
            </button>
            <Link to={`/gig/${gig.id}/propose`} className="btn">Send proposal</Link>
          </div>
        </div>

        <p style={{ marginTop: 12, color: "var(--muted)" }}>{gig.description}</p>
      </div>

      <div className="card">
        <h4>Reviews</h4>
        <ReviewList reviews={getByGig(gig.id)} />
        <div style={{ marginTop: 12 }}>
          <ReviewForm gigId={gig.id} />
        </div>
      </div>
    </div>
  );
};

export default GigDetailPage;