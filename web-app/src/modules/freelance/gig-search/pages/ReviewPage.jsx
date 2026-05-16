import React from "react";
import { useReviews } from "../context/ReviewContext";
import ReviewList from "../components/ReviewList";

const ReviewPage = () => {
  const { recent } = useReviews();

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div className="card">
        <h2>Reviews & Ratings</h2>
        <p className="small">
          Recent feedback from clients and freelancers across the platform.
        </p>
      </div>

      <div className="row">
        <div style={{ flex: 2 }}>
          <div className="card">
            <h4>Recent reviews</h4>
            <ReviewList reviews={recent()} />
          </div>
        </div>

        <aside style={{ width: 320 }}>
          <div className="card">
            <h4>Top metrics</h4>
            <div className="small">
              Avg rating: <strong>4.5</strong>
            </div>
            <div className="small">
              Total reviews: <strong>{recent()?.length || 0}</strong>
            </div>
            <div style={{ marginTop: 8 }}>
              <button className="btn small">Export</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ReviewPage;