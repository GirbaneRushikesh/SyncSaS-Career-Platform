import React from "react";
import GigCard from "./GigCard";

const GigList = ({ gigs }) => {
  if (!gigs || gigs.length === 0) {
    return <p>No gigs found.</p>;
  }

  return (
    <div>
      {gigs.map((gig) => (
        <GigCard key={gig.id} gig={gig} />
      ))}
    </div>
  );
};

export default GigList;
