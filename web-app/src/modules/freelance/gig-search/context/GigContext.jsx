import React, { createContext, useContext, useEffect, useState } from "react";
import mockGigs from "../data/mockGigs";

const KEY = "ss_gigs_v1";
const GigContext = createContext();

export const GigProvider = ({ children }) => {
  const [gigs, setGigs] = useState(() => {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : mockGigs;
    } catch {
      return mockGigs;
    }
  });

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(gigs)); } catch {}
  }, [gigs]);

  const addGig = (payload) => {
    const g = {
      id: `g_${Date.now()}`,
      title: payload.title,
      description: payload.description || "",
      category: payload.category || "General",
      budget: payload.budget || "0",
      experience: payload.experience || "",
      rating: 0,
      reviewsCount: 0,
      createdAt: new Date().toISOString().slice(0,10),
      author: payload.author || "Anonymous"
    };
    setGigs((s) => [g, ...s]);
    return g;
  };

  const updateGig = (id, patch) => {
    setGigs((s) => s.map(g => g.id === id ? { ...g, ...patch } : g));
  };

  const removeGig = (id) => setGigs((s) => s.filter(g => g.id !== id));
  const getById = (id) => gigs.find(g => g.id === id) || null;

  return (
    <GigContext.Provider value={{ gigs, addGig, updateGig, removeGig, getById }}>
      {children}
    </GigContext.Provider>
  );
};

export const useGigs = () => useContext(GigContext);
export default GigProvider;