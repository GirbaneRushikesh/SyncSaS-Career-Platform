import React from "react";

const ReviewList = ({ reviews }) => {
  if (!reviews || reviews.length === 0) return <p>No reviews yet.</p>;
  return (
    <div style={{ display: "grid", gap: 12 }}>
      {reviews.map((r) => (
        <div key={r.id} style={{ border: "1px solid #eee", padding: 12, borderRadius: 6 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <strong>{r.author}</strong>
            <small style={{ color: "#666" }}>{r.createdAt}</small>
          </div>
          <div style={{ marginTop: 6 }}>
            <span style={{ fontWeight: 600 }}>{r.rating} / 5</span>
            <p style={{ marginTop: 8 }}>{r.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;