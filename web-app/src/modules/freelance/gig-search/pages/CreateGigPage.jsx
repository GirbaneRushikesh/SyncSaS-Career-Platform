import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGigs } from "../context/GigContext";

const CreateGigPage = () => {
  const { addGig } = useGigs();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", description: "", category: "Web Development", budget: "", experience: "" });
  const [saving, setSaving] = useState(false);

  const onChange = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return alert("Please add a title");
    setSaving(true);
    setTimeout(() => {
      const g = addGig({ ...form, author: localStorage.getItem("ss_user_profile_v1") ? JSON.parse(localStorage.getItem("ss_user_profile_v1")).name : "Intern" });
      setSaving(false);
      navigate(`/gig/${g.id}`);
    }, 500);
  };

  return (
    <div style={{ maxWidth: 900, margin: "20px auto" }}>
      <div className="card">
        <h2>Create new gig</h2>
        <p className="small">Add a gig to the platform (saved to localStorage for demo).</p>

        <form onSubmit={onSubmit} style={{ display: "grid", gap: 10, marginTop: 12 }}>
          <input placeholder="Title e.g. Frontend React Developer" value={form.title} onChange={onChange("title")} />
          <select value={form.category} onChange={onChange("category")}>
            <option>Web Development</option>
            <option>Design</option>
            <option>Backend</option>
            <option>DevOps</option>
            <option>Data Science</option>
          </select>
          <textarea placeholder="Short description" rows={4} value={form.description} onChange={onChange("description")} />
          <input placeholder="Suggested budget (₹)" value={form.budget} onChange={onChange("budget")} />
          <input placeholder="Experience (e.g. 2+ years)" value={form.experience} onChange={onChange("experience")} />
          <div style={{ display: "flex", gap: 8 }}>
            <button className="btn" type="submit" disabled={saving}>{saving ? "Creating..." : "Create gig"}</button>
            <button className="btn ghost" type="button" onClick={() => navigate(-1)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateGigPage;