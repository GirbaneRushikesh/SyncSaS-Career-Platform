import { useState, useMemo } from "react";
import { useGigs } from "../context/GigContext";
import SearchBar from "../components/SearchBar";
import FilterSidebar from "../components/FilterSidebar";
import GigList from "../components/GigList";

const PAGE_SIZE = 6;

const GigSearchPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [experience, setExperience] = useState("");

  const { gigs: allGigs } = useGigs ? useGigs() : { gigs: [] };

  const filtered = useMemo(() => {
    let list = (allGigs || []).slice();
    if (search) {
      const q = search.toLowerCase();
      list = list.filter((g) => (g.title + " " + g.description).toLowerCase().includes(q));
    }
    if (category) list = list.filter((g) => g.category === category);
    if (experience) list = list.filter((g) => g.experience === experience);
    list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return list;
  }, [search, category, experience, allGigs]);

  // show only the first PAGE_SIZE items (no pagination)
  const visible = filtered.slice(0, PAGE_SIZE);

  const resetFilters = () => {
    setSearch("");
    setCategory("");
    setExperience("");
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 24, alignItems: "start" }}>
      <aside>
        <div className="card">
          <h4 style={{ marginTop: 0 }}>Filters</h4>
          <FilterSidebar
            category={category}
            setCategory={(v) => { setCategory(v); }}
          />
          <div style={{ marginTop: 12 }}>
            <label className="small" style={{ marginTop: 12, display: "block" }}>Experience</label>
            <select value={experience} onChange={(e) => { setExperience(e.target.value); }}>
              <option value="">Any</option>
              <option value="1+ years">1+ years</option>
              <option value="2+ years">2+ years</option>
              <option value="3+ years">3+ years</option>
              <option value="4+ years">4+ years</option>
              <option value="6+ years">6+ years</option>
            </select>

            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <button className="btn" onClick={resetFilters}>Reset</button>
              <button className="btn ghost" onClick={() => { /* no-op: filters apply immediately */ }}>Apply</button>
            </div>
          </div>
        </div>
      </aside>

      <main>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div>
            <h2 style={{ margin: 0 }}>Explore gigs</h2>
            <div className="small" style={{ marginTop: 6 }}>{filtered.length} gigs • showing top {visible.length}</div>
          </div>

          <div style={{ width: 420 }}>
            <SearchBar value={search} onChange={(v) => { setSearch(v); }} />
          </div>
        </div>

        <div style={{ display: "grid", gap: 12 }}>
          {visible.length === 0 ? (
            <div className="card">
              <h4>No gigs match your filters</h4>
              <p className="small">Try clearing some filters or broaden your search.</p>
              <div style={{ marginTop: 12 }}>
                <button className="btn" onClick={resetFilters}>Clear all</button>
              </div>
            </div>
          ) : (
            <GigList gigs={visible} />
          )}
        </div>

        {/* pagination removed intentionally to avoid incomplete/buggy pages */}
      </main>
    </div>
  );
};

export default GigSearchPage;
