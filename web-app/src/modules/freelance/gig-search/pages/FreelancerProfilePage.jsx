import React from "react";
import { useParams, Link } from "react-router-dom";

const FreelancerProfilePage = () => {
  const { id } = useParams();
  return (
    <div style={{ padding: 40 }}>
      <h2>Freelancer Profile — {id}</h2>
      <p>Placeholder profile. Add portfolio, ratings, past work.</p>
      <Link to="/">Back</Link>
    </div>
  );
};

export default FreelancerProfilePage;