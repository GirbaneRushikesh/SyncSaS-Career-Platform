import React, { useState } from "react";

const ReviewForm = ({ onSubmit, defaultAuthor = "You" }) => {
  const [author, setAuthor] = useState(defaultAuthor);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [sending, setSending] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 500));
    setSending(false);
    if (onSubmit) onSubmit({ author, rating, text });
    setText("");
  };

  return (
    <form onSubmit={submit} style={{ display: "grid", gap: 8 }}>
      <input value={author} onChange={(e)=>setAuthor(e.target.value)} placeholder="Your name" />
      <select value={rating} onChange={(e)=>setRating(e.target.value)}>
        <option value={5}>5 - Excellent</option>
        <option value={4}>4 - Very good</option>
        <option value={3}>3 - Good</option>
        <option value={2}>2 - Fair</option>
        <option value={1}>1 - Poor</option>
      </select>
      <textarea value={text} onChange={(e)=>setText(e.target.value)} rows={4} placeholder="Write your review" required />
      <div>
        <button type="submit" disabled={sending}>{sending ? "Posting..." : "Post Review"}</button>
      </div>
    </form>
  );
};

export default ReviewForm;