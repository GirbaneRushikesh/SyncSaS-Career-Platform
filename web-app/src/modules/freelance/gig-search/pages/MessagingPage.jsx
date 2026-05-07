import React, { useState } from "react";

const SAMPLE_CONVS = [
  { id: "c1", with: "Aisha", last: "Thanks — I will start today", time: "2h" },
  { id: "c2", with: "Rahul", last: "Sent updated spec", time: "1d" }
];

const MESSAGES = {
  c1: [{from:"them",text:"Hello, interested?"},{from:"you",text:"Yes, share details"}],
  c2: [{from:"them",text:"Can you support tests?"},{from:"you",text:"Yes"}]
};

const MessagingPage = () => {
  const [active, setActive] = useState("c1");
  const convs = SAMPLE_CONVS;

  return (
    <div style={{display:"grid",gridTemplateColumns:"280px 1fr",gap:16}}>
      <aside className="card">
        <h4>Conversations</h4>
        <div style={{display:"grid",gap:8,marginTop:8}}>
          {convs.map(c => (
            <div key={c.id} onClick={()=>setActive(c.id)} style={{padding:8,borderRadius:8,cursor:"pointer",background: c.id===active ? "rgba(11,95,255,0.06)" : "transparent"}}>
              <strong>{c.with}</strong>
              <div className="small">{c.last} • <span style={{color:"var(--muted)"}}>{c.time}</span></div>
            </div>
          ))}
        </div>
      </aside>

      <section className="card">
        <h4>Chat with {convs.find(c=>c.id===active)?.with}</h4>
        <div style={{height:360,overflowY:"auto",display:"flex",flexDirection:"column",gap:8,paddingRight:8}}>
          {(MESSAGES[active]||[]).map((m,i)=>(
            <div key={i} style={{alignSelf: m.from==="you" ? "flex-end" : "flex-start",background: m.from==="you" ? "var(--ss-primary)" : "var(--border)", color: m.from==="you" ? "white" : "var(--text)", padding:"8px 12px",borderRadius:12, maxWidth:"70%"}}>
              {m.text}
            </div>
          ))}
        </div>

        <form style={{marginTop:12,display:"flex",gap:8}} onSubmit={(e)=>e.preventDefault()}>
          <input placeholder="Type a message..." style={{flex:1}} />
          <button className="btn">Send</button>
        </form>
      </section>
    </div>
  );
};

export default MessagingPage;