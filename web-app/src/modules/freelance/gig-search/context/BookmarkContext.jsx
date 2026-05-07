import React, { createContext, useContext, useEffect, useState } from "react";

const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const raw = localStorage.getItem("bookmarks");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } catch {}
  }, [bookmarks]);

  const toggleBookmark = (gigId) => {
    setBookmarks((prev) =>
      prev.includes(gigId) ? prev.filter((id) => id !== gigId) : [...prev, gigId]
    );
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => useContext(BookmarkContext);