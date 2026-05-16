import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import mockGigs from "../data/mockGigs";

const ProposalSubmissionPage = () => {
  const { id } = useParams();
  const gig = mockGigs.find((g) => g.id === id);
  const [cover, setCover] = useState("");
  const [budget, setBudget] = useState(gig ? gig.budget : "");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  if (!gig) return <div style={{ padding: 40 }}>Gig not found.</div>;

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    // simulate API
    await new Promise((r) => setTimeout(r, 700));
    setSending(false);
    setSent(true);
  };

  return (
    <div style={{ padding: 40, maxWidth: 700, margin: "auto" }}>
      <h2>Send Proposal — {gig.title}</h2>
      {sent ? (
        <div>
          <p>Proposal sent. Client will review soon.</p>
          <Link to={`/gig/${id}`}>Back to gig</Link>
        </div>
      ) : (
        <form onSubmit={submit}>
          <div style={{ marginBottom: 12 }}>
            <label>Cover letter</label>
            <textarea rows={6} style={{ width: "100%" }} value={cover} onChange={(e) => setCover(e.target.value)} required />
          </div>
          <div style={{ marginBottom: 12 }}>
            <label>Proposed budget (₹)</label>
            <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} required />
          </div>
          <button type="submit" disabled={sending}>{sending ? "Sending..." : "Send Proposal"}</button>
          <div style={{ marginTop: 12 }}>
            <Link to={`/gig/${id}`}>Cancel</Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default ProposalSubmissionPage;