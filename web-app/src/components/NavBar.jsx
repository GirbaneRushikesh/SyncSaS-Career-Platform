import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";

const NavBar = () => {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("darkMode") === "true";
    } catch {
      return false;
    }
  });

  const [profile, setProfile] = useState({ name: "You", avatar: null });

  useEffect(() => {
    try {
      const raw = localStorage.getItem("ss_user_profile_v1");
      const av = localStorage.getItem("ss_user_avatar_v1");
      if (raw) setProfile((p) => ({ ...p, name: JSON.parse(raw).name || p.name }));
      if (av) setProfile((p) => ({ ...p, avatar: av }));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("darkMode", String(dark));
      if (dark) document.documentElement.setAttribute("data-theme", "dark");
      else document.documentElement.removeAttribute("data-theme");
    } catch {}
  }, [dark]);

  const toggleDark = () => setDark((d) => !d);

  const initials = (name = "") =>
    name
      .split(" ")
      .map((s) => s[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  return (
    <header className="header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 18px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <HeaderLogo />
        <nav className="navlinks" aria-label="Main navigation" style={{ display: "flex", gap: 12 }}>
          <NavLink to="/">Explore</NavLink>
          <NavLink to="/client">Client</NavLink>
          <NavLink to="/messages">Messages</NavLink>
          <NavLink to="/reviews">Reviews</NavLink>
          <NavLink to="/bookmarks">Bookmarks</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </nav>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button
          onClick={toggleDark}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          className="btn ghost"
          style={{ display: "flex", alignItems: "center", gap: 8 }}
        >
          {dark ? "🌙 Dark" : "☀️ Light"}
        </button>

        <NavLink to="/profile" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "inherit" }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: profile.avatar ? "transparent" : "linear-gradient(180deg,var(--ss-primary),var(--ss-accent))", color: "white", fontWeight: 700 }}>
            {profile.avatar ? <img src={profile.avatar} alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <span style={{ fontSize: 14 }}>{initials(profile.name)}</span>}
          </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontSize: 14 }}>{profile.name}</span>
          </div>
        </NavLink>
      </div>
    </header>
  );
};

export default NavBar;