import React from "react";
import { useBookmarks } from "../context/BookmarkContext";
import mockGigs from "../data/mockGigs";
import GigList from "../components/GigList";

const BookmarksPage = () => {
  const { bookmarks } = useBookmarks();
  const gigs = mockGigs.filter((g) => bookmarks.includes(g.id));

  const exportBookmarks = () => {
    const data = gigs.map((g) => ({
      id: g.id,
      title: g.title,
      category: g.category,
      budget: g.budget,
      experience: g.experience,
      createdAt: g.createdAt,
    }));
    const blob = new Blob(
      [
        JSON.stringify(
          { exportedAt: new Date().toISOString(), items: data },
          null,
          2
        ),
      ],
      { type: "application/json" }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `syncsas-bookmarks-${new Date()
      .toISOString()
      .slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div
        className="card"
        style={{
          marginBottom: 12,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2>Saved Bookmarks</h2>
          <p className="small">
            Gigs you bookmarked — handy for follow ups and proposals.
          </p>
        </div>
        <div>
          <button
            className="btn ghost"
            onClick={exportBookmarks}
            disabled={gigs.length === 0}
          >
            Export
          </button>
        </div>
      </div>

      {gigs.length === 0 ? (
        <div className="card">
          <p>
            No saved gigs yet. Browse{" "}
            <a href="/">Explore</a> and click Save on gigs you like.
          </p>
        </div>
      ) : (
        <div style={{ display: "grid", gap: 12 }}>
          <GigList gigs={gigs} />
        </div>
      )}
    </div>
  );
};

export default BookmarksPage;