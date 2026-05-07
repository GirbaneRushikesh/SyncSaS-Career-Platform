import React, { useEffect, useState } from "react";

const STORAGE = "ss_user_profile_v1";
const AVATAR_KEY = "ss_user_avatar_v1";

const defaultProfile = {
  name: "Intern Name",
  title: "Frontend Intern",
  bio: "Passionate about React and UX. Worked on gig search, reviews and site polish.",
  skills: ["React", "CSS", "Vite"],
  location: "Remote"
};

const ProfilePage = () => {
  const [profile, setProfile] = useState(defaultProfile);
  const [saving, setSaving] = useState(false);
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (raw) setProfile(JSON.parse(raw));
      const av = localStorage.getItem(AVATAR_KEY);
      if (av) setAvatar(av);
    } catch {}
  }, []);

  const save = () => {
    setSaving(true);
    setTimeout(() => {
      try { localStorage.setItem(STORAGE, JSON.stringify(profile)); } catch {}
      setSaving(false);
    }, 600);
  };

  const onFile = async (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const dataUrl = reader.result;
        setAvatar(dataUrl);
        localStorage.setItem(AVATAR_KEY, dataUrl);
      } catch {}
    };
    reader.readAsDataURL(f);
  };

  const removeAvatar = () => {
    setAvatar(null);
    localStorage.removeItem(AVATAR_KEY);
  };

  return (
    <div style={{ maxWidth: 880, margin: "24px auto", display: "grid", gap: 16 }}>
      <div className="card" style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <div style={{ width: 84, height: 84, borderRadius: 12, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: avatar ? "transparent" : "linear-gradient(180deg,var(--ss-primary),var(--ss-accent))", color: "white", fontWeight: 800 }}>
          {avatar ? (
            <img src={avatar} alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <div style={{ fontSize: 28 }}>{profile.name.split(" ").map(s => s[0]).slice(0,2).join("")}</div>
          )}
        </div>

        <div style={{ flex: 1 }}>
          <h2 style={{ margin: 0 }}>{profile.name}</h2>
          <div className="small" style={{ marginTop: 6 }}>{profile.title} • {profile.location}</div>
          <p style={{ marginTop: 8, color: "var(--muted)" }}>{profile.bio}</p>
        </div>

        <div style={{ display: "grid", gap: 8 }}>
          <label style={{ display: "inline-block" }}>
            <input type="file" accept="image/*" onChange={onFile} style={{ display: "none" }} id="avupload" />
            <button className="btn ghost" onClick={() => document.getElementById("avupload").click()}>Upload avatar</button>
          </label>
          {avatar ? <button className="btn" onClick={removeAvatar}>Remove</button> : null}
          <button className="btn ghost" onClick={() => { navigator.clipboard?.writeText(window.location.href); }}>Share</button>
        </div>
      </div>

      <div className="card">
        <h3>Edit profile</h3>
        <div style={{ display: "grid", gap: 8 }}>
          <input placeholder="Enter full name" value={profile.name} onChange={(e)=>setProfile(p=>({...p,name:e.target.value}))} />
          <input placeholder="Enter current title (e.g. Frontend Intern)" value={profile.title} onChange={(e)=>setProfile(p=>({...p,title:e.target.value}))} />
          <input placeholder="Location (city / remote)" value={profile.location} onChange={(e)=>setProfile(p=>({...p,location:e.target.value}))} />
          <textarea placeholder="Short bio — what you worked on during internship" rows={4} value={profile.bio} onChange={(e)=>setProfile(p=>({...p,bio:e.target.value}))} />
          <input placeholder="Skills (comma separated) e.g. React, CSS, Vite" value={profile.skills.join(", ")} onChange={(e)=>setProfile(p=>({...p,skills:e.target.value.split(",").map(s=>s.trim()).filter(Boolean)}))} />
          <div style={{ display: "flex", gap: 8 }}>
            <button className="btn" onClick={save} disabled={saving}>{saving ? "Saving..." : "Save profile"}</button>
            <button className="btn ghost" onClick={()=>{ setProfile(defaultProfile); setAvatar(null); localStorage.removeItem(AVATAR_KEY); }}>Reset</button>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>Portfolio / Internship highlights</h3>
        <ul className="small">
          <li>Built Explore Gigs page with filters, pagination and debounced search.</li>
          <li>Implemented Reviews, Bookmarks and Company page with persistent localStorage.</li>
          <li>Polished UI, responsive styles and dark mode.</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;