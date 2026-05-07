import React, { createContext, useContext, useEffect, useState } from "react";

const ReviewContext = createContext();

const SAMPLE = [
  { id: "r1", gigId: "g1", author: "Aisha", rating: 5, text: "Fast, reliable and excellent communication.", createdAt: "2026-03-01" },
  { id: "r2", gigId: "g1", author: "Rahul", rating: 4, text: "Great delivery, minor followups needed.", createdAt: "2026-03-05" },
  { id: "r3", gigId: "g2", author: "Nina", rating: 5, text: "Well structured API, good tests.", createdAt: "2026-02-12" }
];

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState(() => {
    try {
      const raw = localStorage.getItem("ss_reviews");
      return raw ? JSON.parse(raw) : SAMPLE;
    } catch { return SAMPLE; }
  });

  useEffect(()=> {
    try { localStorage.setItem("ss_reviews", JSON.stringify(reviews)); } catch {}
  }, [reviews]);

  const getByGig = (gigId) => reviews.filter(r => r.gigId === gigId).sort((a,b)=> new Date(b.createdAt)-new Date(a.createdAt));
  const addReview = ({ gigId, author="Anonymous", rating, text }) => {
    const r = { id:`r_${Date.now()}`, gigId, author, rating: Number(rating), text, createdAt: new Date().toISOString().slice(0,10) };
    setReviews(s => [r, ...s]);
    return r;
  };
  const recent = () => reviews.slice(0,10);

  return <ReviewContext.Provider value={{ reviews, getByGig, addReview, recent }}>{children}</ReviewContext.Provider>;
};

export default ReviewProvider;
export const useReviews = () => useContext(ReviewContext);