"use client";

import React, { useEffect, useState } from "react";
import { useShamsApp } from "@/lib/useShamsApp";

export default function ShamsConnect() {
  const [menuOpen, setMenuOpen] = useState(false);
  const v = useShamsApp();
  const {
    nav, show, goHome, goDirectory, goOffers, goOpportunities,
    goMessages, goEvents, goDashboard, goAdmin, postFromHome,
    hasUnread, unreadCount, s_q, onTopSearch, onSearch, clearFilters,
    recommended, homeReqs, homeOffers, homeEvents, newMembers,
    dir, dirEmpty, sectorChips, dirCount,
    pco, pcoOffers, noPcoOffers, reviews,
    quoteOpen, quoteSent, s_quoteText, openQuote, closeQuote, onQuoteText, sendQuote,
    offerChips, offerList,
    reqList, formOpen, formBtnLabel, toggleForm,
    s_newReqTitle, s_newReqCat, s_newReqBudget, s_newReqDetails,
    onReqTitle, onReqCat, onReqBudget, onReqDetails, postReq,
    threadList, cur, curMsgs, noMsgs, s_draft, onDraft, onDraftKey, sendMsg,
    eventList, leads, viewers, modList, pendingLabel,
  } = v;

  const go = (fn: () => void) => () => {
    fn();
    setMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
<div className="app-shell">

<button
  type="button"
  className={`app-backdrop${menuOpen ? " open" : ""}`}
  aria-label="Close menu"
  onClick={() => setMenuOpen(false)}
/>

<aside className={`app-sidebar${menuOpen ? " open" : ""}`} aria-label="Main navigation">
<div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "0 8px" }}>
<div style={{ width: "40px", height: "40px", borderRadius: "11px", background: "#F2B44B", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
<svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B3341" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
</div>
<div>
<div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: "800", fontSize: "17px", color: "#FFFFFF" }}>Shams Connect</div>
<div style={{ fontSize: "12px", color: "#9FB6BF" }}>Business community</div>
</div>
</div>
<nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
<div className="nav-label">Network</div>
<button className={nav.home} onClick={go(goHome)}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" /></svg>Home</button>
<button className={nav.directory} onClick={go(goDirectory)}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1" /></svg>Company directory</button>
<button className={nav.offers} onClick={go(goOffers)}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z" /><circle cx="7.5" cy="7.5" r="1.5" /></svg>Member offers</button>
<button className={nav.opportunities} onClick={go(goOpportunities)}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" /></svg>Opportunities</button>
<button className={nav.messages} onClick={go(goMessages)}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" /></svg>Messages{hasUnread ? (
<>
<span className="badge">{unreadCount}</span>
</>
) : null}</button>
<button className={nav.events} onClick={go(goEvents)}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>Events</button>
<div className="nav-label">My company</div>
<button className={nav.dashboard} onClick={go(goDashboard)}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V11M10 20V5M16 20v-6M2 20h20" /></svg>Dashboard</button>
<div className="nav-label">Shams staff</div>
<button className={nav.admin} onClick={go(goAdmin)}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z" /><path d="m9 12 2 2 4-4" /></svg>Admin console</button>
</nav>
<div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "12px", padding: "12px", borderRadius: "12px", background: "#0F3F4F" }}>
<div className="av av1" style={{ width: "40px", height: "40px", background: "#F2B44B", color: "#0B3341" }}>ND</div>
<div style={{ minWidth: "0" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#FFFFFF" }}>Nakhla Digital</div>
<div style={{ fontSize: "12px", color: "#9FB6BF" }}>Signed in as company admin</div>
</div>
</div>
</aside>

<main className="app-main">
<header className="app-header">
<button
  type="button"
  className="icon-btn app-menu-btn"
  aria-label={menuOpen ? "Close navigation" : "Open navigation"}
  aria-expanded={menuOpen}
  onClick={() => setMenuOpen((o) => !o)}
>
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    {menuOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
  </svg>
</button>
<div style={{ position: "relative", flex: "1 1 180px", maxWidth: "520px", minWidth: "0" }}>
<svg aria-hidden="true" style={{ position: "absolute", left: "14px", top: "12px", color: "#5B6670" }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
<input className="input" style={{ paddingLeft: "42px" }} type="search" aria-label="Search companies and services" placeholder="Search companies, services, activities…" value={s_q} onChange={onTopSearch} />
</div>
<div className="app-header-actions" style={{ display: "flex", alignItems: "center", gap: "10px", marginLeft: "auto" }}>
<span className="tag tag-amber">Prototype · sample data</span>
<button className="btn btn-ghost" lang="ar" aria-label="Switch to Arabic">عربي</button>
<button className="icon-btn" aria-label="Notifications, 3 new"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8" /><path d="M10 20a2 2 0 0 0 4 0" /></svg><span className="dot"></span></button>
</div>
</header>

<div className="app-content">

{/* HOME */}
{show.home ? (
<>

<section style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
<div className="page-head">
<div>
<p className="eyebrow">Wednesday, 21 October</p>
<h1>Good morning, Nakhla Digital</h1>
<p className="muted" style={{ marginTop: "6px", fontSize: "15px" }}>Here is what is new across the Shams business community.</p>
</div>
<div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
<button className="btn btn-ghost" onClick={goOffers}>Browse offers</button>
<button className="btn btn-primary" onClick={postFromHome}><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>Post a request</button>
</div>
</div>
<div className="stats">
<div className="card stat"><div className="stat-num">3,412</div><div className="muted small">Member companies on the platform</div></div>
<div className="card stat"><div className="stat-num">286</div><div className="muted small">Live member offers</div></div>
<div className="card stat"><div className="stat-num">94</div><div className="muted small">Open opportunities</div></div>
<div className="card stat"><div className="stat-num">4</div><div className="muted small">Events in the next 30 days</div></div>
</div>
<div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
<div style={{ flex: "2 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }}>
<div className="card pad">
<div className="sec-head"><h2 className="h2">Recommended for you</h2><button className="link-btn" onClick={goDirectory}>See all companies</button></div>
<p className="muted small" style={{ marginTop: "2px" }}>Companies that often work with web and app studios</p>
<div className="mini-grid">
{recommended.map((co, $index) => (
<React.Fragment key={$index}>

<div className="mini-co">
<div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
<div className={co.avCls} style={{ width: "44px", height: "44px" }}>{co.initials}</div>
<div style={{ minWidth: "0" }}><button className="name-btn" onClick={co.open}>{co.name}</button><div className="muted small">{co.activity}</div></div>
</div>
<button className={co.connectCls} onClick={co.connect}>{co.connectLabel}</button>
</div>

</React.Fragment>
))}
</div>
</div>
<div className="card pad">
<div className="sec-head"><h2 className="h2">Latest opportunities</h2><button className="link-btn" onClick={goOpportunities}>View all</button></div>
<div style={{ marginTop: "8px" }}>
{homeReqs.map((r, $index) => (
<React.Fragment key={$index}>

<div className="list-row">
<div className={r.avCls} style={{ width: "40px", height: "40px", fontSize: "13px" }}>{r.coInitials}</div>
<div style={{ flex: "1", minWidth: "0" }}>
<div style={{ fontWeight: "600", fontSize: "15px" }}>{r.title}</div>
<div className="muted small" style={{ marginTop: "2px" }}>{r.coName} · {r.budget} · {r.deadline}</div>
</div>
<span className="tag tag-teal">{r.category}</span>
</div>

</React.Fragment>
))}
</div>
</div>
</div>
<div style={{ flex: "1 1 300px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }}>
<div className="card pad">
<div className="sec-head"><h2 className="h2">Featured offers</h2><button className="link-btn" onClick={goOffers}>All offers</button></div>
<div style={{ marginTop: "8px" }}>
{homeOffers.map((of, $index) => (
<React.Fragment key={$index}>

<div className="list-row" style={{ alignItems: "flex-start" }}>
<div className={of.avCls} style={{ width: "36px", height: "36px", fontSize: "12px" }}>{of.coInitials}</div>
<div style={{ minWidth: "0" }}>
<div style={{ fontWeight: "600", fontSize: "14px", lineHeight: "1.4" }}>{of.title}</div>
<div className="muted small" style={{ marginTop: "2px" }}>{of.coName}</div>
</div>
</div>

</React.Fragment>
))}
</div>
</div>
<div className="card pad">
<div className="sec-head"><h2 className="h2">Upcoming events</h2><button className="link-btn" onClick={goEvents}>Calendar</button></div>
<div style={{ marginTop: "8px" }}>
{homeEvents.map((e, $index) => (
<React.Fragment key={$index}>

<div className="list-row">
<div className="date-block" style={{ width: "52px" }}><span className="date-m">{e.month}</span><span className="date-d" style={{ fontSize: "20px" }}>{e.day}</span></div>
<div style={{ minWidth: "0" }}>
<div style={{ fontWeight: "600", fontSize: "14px", lineHeight: "1.4" }}>{e.title}</div>
<div className="muted small" style={{ marginTop: "2px" }}>{e.time} · {e.place}</div>
</div>
</div>

</React.Fragment>
))}
</div>
</div>
<div className="card pad">
<h2 className="h2">New members this week</h2>
<div style={{ marginTop: "8px" }}>
{newMembers.map((co, $index) => (
<React.Fragment key={$index}>

<div className="list-row">
<div className={co.avCls} style={{ width: "40px", height: "40px", fontSize: "13px" }}>{co.initials}</div>
<div style={{ flex: "1", minWidth: "0" }}><button className="name-btn" onClick={co.open}>{co.name}</button><div className="muted small">{co.activity}</div></div>
<button className="btn btn-ghost" onClick={co.message}>Say hello</button>
</div>

</React.Fragment>
))}
</div>
</div>
</div>
</div>
</section>

</>
) : null}

{/* DIRECTORY */}
{show.directory ? (
<>

<section style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
<div className="page-head">
<div>
<p className="eyebrow">Explore</p>
<h1>Company directory</h1>
<p className="muted" style={{ marginTop: "6px", fontSize: "15px" }}>Every Shams-licensed company that has opted in, searchable by sector, activity and service.</p>
</div>
</div>
<div className="card pad" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
<div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "flex-end" }}>
<div className="field" style={{ flex: "3 1 300px" }}>
<label className="field-label" htmlFor="dir-search">Search</label>
<input id="dir-search" className="input" type="search" placeholder="Company name, service or activity" value={s_q} onChange={onSearch} />
</div>
<div className="field">
<label className="field-label" htmlFor="dir-size">Company size</label>
<select id="dir-size" className="input"><option>Any size</option><option>1–10 employees</option><option>11–50 employees</option><option>51–200 employees</option></select>
</div>
<div className="field">
<label className="field-label" htmlFor="dir-open">Open to</label>
<select id="dir-open" className="input"><option>Anything</option><option>Collaborations</option><option>Subcontracting</option><option>Partnerships</option></select>
</div>
</div>
<div role="group" aria-label="Filter by sector" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
{sectorChips.map((ch, $index) => (
<React.Fragment key={$index}>

<button className={ch.cls} aria-pressed={ch.pressed} onClick={ch.pick}>{ch.label}</button>

</React.Fragment>
))}
</div>
</div>
<p className="muted small">{dirCount}</p>
<div className="co-grid">
{dir.map((co, $index) => (
<React.Fragment key={$index}>

<article className="card co-card">
<div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
<div className={co.avCls} style={{ width: "52px", height: "52px", fontSize: "17px" }}>{co.initials}</div>
<div style={{ minWidth: "0" }}>
<h3 style={{ fontSize: "16px", display: "flex", alignItems: "center", gap: "6px" }}><button className="name-btn" onClick={co.open}>{co.name}</button><svg role="img" aria-label="Shams licensed" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5163" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z" /><path d="m9 12 2 2 4-4" /></svg></h3>
<div className="muted small" style={{ marginTop: "2px" }}>{co.activity} · {co.size} employees</div>
</div>
</div>
<p className="clamp2" style={{ fontSize: "14px", lineHeight: "1.5" }}>{co.desc}</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
{co.topServices.map((sv, $index) => (
<React.Fragment key={$index}>
<span className="tag">{sv}</span>
</React.Fragment>
))}
</div>
<div className="muted small" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px" }}>
<span className="meta"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>Sharjah Media City</span>
<span className="stars"><svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" /></svg><span style={{ color: "#5B6670" }}>{co.rating} ({co.reviews} reviews)</span></span>
</div>
<div style={{ display: "flex", gap: "8px", marginTop: "auto" }}>
<button className="btn btn-primary" style={{ flex: "1" }} onClick={co.open}>View profile</button>
<button className={co.connectCls} style={{ flex: "1" }} onClick={co.connect}>{co.connectLabel}</button>
</div>
</article>

</React.Fragment>
))}
</div>
{dirEmpty ? (
<>

<div className="card pad" style={{ textAlign: "center" }}>
<p className="muted">No companies match your search.</p>
<button className="link-btn" onClick={clearFilters}>Clear search and filters</button>
</div>

</>
) : null}
</section>

</>
) : null}

{/* PROFILE */}
{show.profile ? (
<>

<section style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
<div><button className="link-btn" onClick={goDirectory}>← Back to directory</button></div>
<div className="card" style={{ overflow: "hidden" }}>
<div style={{ height: "120px", background: "#0E5163", position: "relative", overflow: "hidden" }}>
<svg aria-hidden="true" style={{ position: "absolute", right: "-40px", top: "-80px" }} width="300" height="300" viewBox="0 0 300 300" fill="none" stroke="#2C6E80" strokeWidth="2"><circle cx="150" cy="150" r="50" /><circle cx="150" cy="150" r="90" /><circle cx="150" cy="150" r="130" /></svg>
</div>
<div style={{ padding: "0 28px 24px", display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-end", justifyContent: "space-between" }}>
<div style={{ display: "flex", gap: "18px", alignItems: "flex-end", flexWrap: "wrap" }}>
<div className={pco.avCls} style={{ width: "96px", height: "96px", fontSize: "30px", borderRadius: "20px", border: "4px solid #FFFFFF", marginTop: "-48px" }}>{pco.initials}</div>
<div style={{ paddingTop: "12px" }}>
<h1 style={{ fontSize: "26px", fontWeight: "800" }}>{pco.name}</h1>
<div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px", alignItems: "center" }}>
<span className="tag tag-teal"><svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5 9-10" /></svg>Shams licensed</span>
<span className="tag">{pco.sector}</span>
<span className="muted small">{pco.activity} · Founded {pco.founded} · {pco.size} employees</span>
</div>
</div>
</div>
<div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
<button className={pco.connectCls} onClick={pco.connect}>{pco.connectLabel}</button>
<button className="btn btn-ghost" onClick={pco.message}><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" /></svg>Message</button>
<button className="btn btn-primary" onClick={openQuote}>Request a quote</button>
</div>
</div>
</div>
{quoteOpen ? (
<>

<div className="card pad" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
<h2 className="h2">Request a quote from {pco.name}</h2>
<div className="field">
<label className="field-label" htmlFor="q-text">What do you need?</label>
<textarea id="q-text" className="input" rows={4} placeholder="Describe the scope, timeline and budget range" value={s_quoteText} onChange={onQuoteText}></textarea>
</div>
<div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
<button className="btn btn-primary" onClick={sendQuote}>Send request</button>
<button className="btn btn-ghost" onClick={closeQuote}>Cancel</button>
</div>
</div>

</>
) : null}
{quoteSent ? (
<>

<div className="card pad notice">
<svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5 9-10" /></svg>
<p>Your request was sent to {pco.name}. It lands in their leads inbox, and their reply will appear in your Messages.</p>
</div>

</>
) : null}
<div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
<div style={{ flex: "2 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }}>
<div className="card pad">
<h2 className="h2">About</h2>
<p style={{ lineHeight: "1.6", marginTop: "10px" }}>{pco.desc} {pco.about}</p>
</div>
<div className="card pad">
<h2 className="h2">Services</h2>
<div className="svc-grid">
{pco.services.map((sv, $index) => (
<React.Fragment key={$index}>
<div className="svc"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5 9-10" /></svg>{sv}</div>
</React.Fragment>
))}
</div>
</div>
<div className="card pad">
<div className="sec-head"><h2 className="h2">Portfolio</h2><span className="muted small">Images, videos and case studies</span></div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "12px", marginTop: "14px" }}>
<div className="portfolio">[Portfolio item 1]</div>
<div className="portfolio">[Portfolio item 2]</div>
<div className="portfolio">[Portfolio item 3]</div>
</div>
</div>
<div className="card pad">
<div className="sec-head"><h2 className="h2">Reviews from members</h2><span className="stars"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" /></svg><span style={{ color: "#13212C", fontWeight: "600" }}>{pco.rating}</span><span className="muted">· {pco.reviews} reviews</span></span></div>
<div style={{ marginTop: "8px" }}>
{reviews.map((rv, $index) => (
<React.Fragment key={$index}>

<div className="list-row" style={{ alignItems: "flex-start" }}>
<div className={rv.avCls} style={{ width: "36px", height: "36px", fontSize: "12px" }}>{rv.initials}</div>
<div><div style={{ fontWeight: "600", fontSize: "14px" }}>{rv.name}</div><p className="muted" style={{ fontSize: "14px", lineHeight: "1.5", marginTop: "4px" }}>{rv.text}</p></div>
</div>

</React.Fragment>
))}
</div>
</div>
</div>
<div style={{ flex: "1 1 300px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }}>
<div className="card pad">
<h2 className="h2">Contact</h2>
<div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "12px", fontSize: "14px" }}>
<div className="meta"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>[Company website]</div>
<div className="meta"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>[Contact email]</div>
<div className="meta"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>Sharjah Media City, Sharjah</div>
</div>
<p className="muted small" style={{ marginTop: "12px" }}>Phone and email are shown to connected members only.</p>
</div>
<div className="card pad">
<h2 className="h2">Open to</h2>
<div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
{pco.openTo.map((ot, $index) => (
<React.Fragment key={$index}>
<span className="tag tag-teal">{ot}</span>
</React.Fragment>
))}
</div>
</div>
<div className="card pad">
<h2 className="h2">Offers from this company</h2>
<div style={{ marginTop: "8px" }}>
{pcoOffers.map((of, $index) => (
<React.Fragment key={$index}>

<div className="list-row" style={{ flexDirection: "column", alignItems: "stretch", gap: "10px" }}>
<div style={{ fontWeight: "600", fontSize: "14px", lineHeight: "1.4" }}>{of.title}</div>
{of.notClaimed ? (
<>
<button className="btn btn-primary" onClick={of.claim}>Claim offer</button>
</>
) : null}
{of.claimed ? (
<>
<div className="code-box"><span className="muted small">Your code</span><strong className="mono">{of.code}</strong></div>
</>
) : null}
</div>

</React.Fragment>
))}
{noPcoOffers ? (
<>
<p className="muted small" style={{ paddingTop: "6px" }}>No active offers right now.</p>
</>
) : null}
</div>
</div>
<div className="card pad">
<h2 className="h2">Licence details</h2>
<div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "12px", fontSize: "14px" }}>
<div style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}><span className="muted">Status</span><span className="tag tag-green">Active</span></div>
<div style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}><span className="muted">Licensed activity</span><span>{pco.activity}</span></div>
<div style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}><span className="muted">Licence type</span><span>[Licence type]</span></div>
</div>
</div>
</div>
</div>
</section>

</>
) : null}

{/* OFFERS */}
{show.offers ? (
<>

<section style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
<div className="page-head">
<div>
<p className="eyebrow">Save</p>
<h1>Member offers</h1>
<p className="muted" style={{ marginTop: "6px", fontSize: "15px" }}>Exclusive deals from Shams companies, for Shams companies.</p>
</div>
<button className="btn btn-primary" onClick={goDashboard}><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>Add your offer</button>
</div>
<div role="group" aria-label="Filter offers by category" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
{offerChips.map((ch, $index) => (
<React.Fragment key={$index}>

<button className={ch.cls} aria-pressed={ch.pressed} onClick={ch.pick}>{ch.label}</button>

</React.Fragment>
))}
</div>
<div className="co-grid">
{offerList.map((of, $index) => (
<React.Fragment key={$index}>

<article className="card co-card">
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}><span className="tag tag-amber">{of.category}</span><span className="muted small">Until {of.expires}</span></div>
<h3 style={{ fontSize: "18px", lineHeight: "1.35" }}>{of.title}</h3>
<p className="muted" style={{ fontSize: "14px", lineHeight: "1.5" }}>{of.desc}</p>
<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
<div className={of.avCls} style={{ width: "32px", height: "32px", fontSize: "11px", borderRadius: "9px" }}>{of.coInitials}</div>
<button className="name-btn" style={{ fontSize: "14px" }} onClick={of.openCo}>{of.coName}</button>
</div>
<div className="muted small meta"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6" /></svg>{of.claimsLabel}</div>
<div style={{ marginTop: "auto" }}>
{of.notClaimed ? (
<>
<button className="btn btn-primary" style={{ width: "100%" }} onClick={of.claim}>Claim offer</button>
</>
) : null}
{of.claimed ? (
<>
<div className="code-box"><span className="muted small">Your code</span><strong className="mono">{of.code}</strong></div>
</>
) : null}
</div>
</article>

</React.Fragment>
))}
</div>
</section>

</>
) : null}

{/* OPPORTUNITIES */}
{show.opportunities ? (
<>

<section style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
<div className="page-head">
<div>
<p className="eyebrow">Do business</p>
<h1>Opportunities</h1>
<p className="muted" style={{ marginTop: "6px", fontSize: "15px" }}>Requests posted by member companies. Send a proposal, or post what your company needs.</p>
</div>
<button className="btn btn-primary" onClick={toggleForm}>{formBtnLabel}</button>
</div>
{formOpen ? (
<>

<div className="card pad" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
<h2 className="h2">Post a request</h2>
<div className="field">
<label className="field-label" htmlFor="req-title">What are you looking for?</label>
<input id="req-title" className="input" placeholder="e.g. Photographer for a two-day product shoot" value={s_newReqTitle} onChange={onReqTitle} />
</div>
<div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
<div className="field">
<label className="field-label" htmlFor="req-cat">Category</label>
<select id="req-cat" className="input" value={s_newReqCat} onChange={onReqCat}><option>Film & Video</option><option>Digital & Tech</option><option>Marketing & PR</option><option>Audio & Podcast</option><option>Publishing & Print</option><option>Events</option><option>Consulting</option><option>Translation</option></select>
</div>
<div className="field">
<label className="field-label" htmlFor="req-budget">Budget range</label>
<input id="req-budget" className="input" placeholder="e.g. AED 5,000–8,000" value={s_newReqBudget} onChange={onReqBudget} />
</div>
<div className="field">
<label className="field-label" htmlFor="req-date">Proposals due by</label>
<input id="req-date" className="input" type="date" />
</div>
</div>
<div className="field">
<label className="field-label" htmlFor="req-details">Details</label>
<textarea id="req-details" className="input" rows={3} placeholder="Scope, deliverables, timeline" value={s_newReqDetails} onChange={onReqDetails}></textarea>
</div>
<div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px" }}>
<button className="btn btn-primary" onClick={postReq}>Publish request</button>
<span className="muted small">Visible to all member companies. Proposals arrive in your Messages.</span>
</div>
</div>

</>
) : null}
<div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
{reqList.map((r, $index) => (
<React.Fragment key={$index}>

<article className="card pad">
<div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "space-between", alignItems: "center" }}>
<div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}><span className="tag tag-teal">{r.category}</span>{r.mine ? (
<>
<span className="tag tag-amber">Posted by you</span>
</>
) : null}</div>
<h3 style={{ fontSize: "17px", lineHeight: "1.35" }}>{r.title}</h3>
<p className="muted" style={{ fontSize: "14px", lineHeight: "1.5" }}>{r.details}</p>
<div className="muted small" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
<span className="meta"><span className={r.avCls} style={{ width: "24px", height: "24px", fontSize: "9px", borderRadius: "7px" }}>{r.coInitials}</span>{r.coName}</span>
<span>{r.budget}</span><span>{r.deadline}</span><span>{r.proposalsLabel}</span>
</div>
</div>
<div>
{r.canPropose ? (
<>
<button className="btn btn-primary" onClick={r.propose}>Send a proposal</button>
</>
) : null}
{r.sent ? (
<>
<button className="btn btn-done" aria-pressed={true} onClick={r.propose}>Proposal sent</button>
</>
) : null}
{r.mine ? (
<>
<button className="btn btn-ghost">View responses</button>
</>
) : null}
</div>
</div>
</article>

</React.Fragment>
))}
</div>
</section>

</>
) : null}

{/* MESSAGES */}
{show.messages ? (
<>

<section style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
<div className="page-head">
<div>
<p className="eyebrow">Connect</p>
<h1>Messages</h1>
<p className="muted" style={{ marginTop: "6px", fontSize: "15px" }}>Direct conversations with other member companies.</p>
</div>
</div>
<div className="card msg-layout">
<div className="msg-threads">
<div style={{ padding: "16px" }}><input className="input" type="search" aria-label="Search conversations" placeholder="Search conversations" /></div>
{threadList.map((t, $index) => (
<React.Fragment key={$index}>

<button className={t.cls} onClick={t.pick}>
<div className={t.avCls} style={{ width: "40px", height: "40px", fontSize: "13px" }}>{t.coInitials}</div>
<div style={{ minWidth: "0", flex: "1" }}>
<div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}><strong style={{ fontSize: "14px" }}>{t.coName}</strong><span className="muted small">{t.time}</span></div>
<div className="muted small ellipsis" style={{ marginTop: "2px" }}>{t.snippet}</div>
</div>
{t.unread ? (
<>
<span className="unread-dot" role="img" aria-label="Unread"></span>
</>
) : null}
</button>

</React.Fragment>
))}
</div>
<div className="msg-pane">
<div style={{ padding: "14px 20px", borderBottom: "1px solid #E3E7EB", display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
<div className={cur.avCls} style={{ width: "40px", height: "40px", fontSize: "13px" }}>{cur.initials}</div>
<div style={{ flex: "1", minWidth: "0" }}><strong>{cur.name}</strong><div className="muted small">{cur.activity}</div></div>
<button className="btn btn-ghost" onClick={cur.open}>View profile</button>
</div>
<div style={{ flex: "1", minHeight: "380px", maxHeight: "440px", overflowY: "auto", padding: "20px", display: "flex", flexDirection: "column", gap: "10px", background: "#FAFBFC" }}>
{noMsgs ? (
<>
<p className="muted small" style={{ textAlign: "center", margin: "auto" }}>No messages yet. Say hello to {cur.name}.</p>
</>
) : null}
{curMsgs.map((m, $index) => (
<React.Fragment key={$index}>

<div className={m.rowCls}><div className={m.cls}><span>{m.text}</span><span className="msg-time">{m.time}</span></div></div>

</React.Fragment>
))}
</div>
<div style={{ padding: "14px 16px", borderTop: "1px solid #E3E7EB", display: "flex", gap: "10px", alignItems: "center" }}>
<button className="icon-btn" aria-label="Attach a file"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m21 11-8.5 8.5a5 5 0 0 1-7-7L14 4a3.5 3.5 0 0 1 5 5l-8.5 8.5a2 2 0 0 1-3-3L15 7" /></svg></button>
<input className="input" aria-label="Write a message" placeholder="Write a message" value={s_draft} onChange={onDraft} onKeyDown={onDraftKey} />
<button className="btn btn-primary" onClick={sendMsg}><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 3 3 10.5l7 2.5 2.5 7z" /><path d="m10 13 4-4" /></svg>Send</button>
</div>
</div>
</div>
</section>

</>
) : null}

{/* EVENTS */}
{show.events ? (
<>

<section style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
<div className="page-head">
<div>
<p className="eyebrow">Meet</p>
<h1>Events and programmes</h1>
<p className="muted" style={{ marginTop: "6px", fontSize: "15px" }}>Shams events, workshops and sessions hosted by member companies.</p>
</div>
<button className="btn btn-ghost">Host an event</button>
</div>
<div className="co-grid">
{eventList.map((e, $index) => (
<React.Fragment key={$index}>

<article className="card co-card">
<div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
<div className="date-block"><span className="date-m">{e.month}</span><span className="date-d">{e.day}</span></div>
<div style={{ display: "flex", flexDirection: "column", gap: "8px", minWidth: "0" }}><span className="tag tag-teal" style={{ alignSelf: "flex-start" }}>{e.type}</span><h3 style={{ fontSize: "17px", lineHeight: "1.35" }}>{e.title}</h3></div>
</div>
<div className="muted small" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
<span className="meta"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>{e.dow}, {e.time}</span>
<span className="meta"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>{e.place}</span>
<span className="meta"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6" /></svg>{e.goingLabel}</span>
</div>
<button className={e.rsvpCls} style={{ marginTop: "auto" }} aria-pressed={e.pressed} onClick={e.rsvp}>{e.rsvpLabel}</button>
</article>

</React.Fragment>
))}
</div>
</section>

</>
) : null}

{/* DASHBOARD */}
{show.dashboard ? (
<>

<section style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
<div className="page-head">
<div>
<p className="eyebrow">My company</p>
<h1>Nakhla Digital</h1>
<p className="muted" style={{ marginTop: "6px", fontSize: "15px" }}>Web and app development · 11–50 employees</p>
</div>
<div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
<button className="btn btn-ghost">View public profile</button>
<button className="btn btn-primary">Edit profile</button>
</div>
</div>
<div className="stats">
<div className="card stat"><div className="muted small">Profile views, last 30 days</div><div className="stat-num">1,284</div><div className="small ok">+18% vs previous 30 days</div></div>
<div className="card stat"><div className="muted small">Connections</div><div className="stat-num">64</div><div className="small ok">+12 this month</div></div>
<div className="card stat"><div className="muted small">Quote requests</div><div className="stat-num">7</div><div className="small todo">2 awaiting your reply</div></div>
<div className="card stat"><div className="muted small">Offer claims</div><div className="stat-num">19</div><div className="small muted">Free website UX review</div></div>
</div>
<div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
<div style={{ flex: "2 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }}>
<div className="card pad">
<div className="sec-head"><h2 className="h2">Leads inbox</h2><span className="muted small">Quote requests and proposals</span></div>
<div style={{ marginTop: "8px" }}>
{leads.map((l, $index) => (
<React.Fragment key={$index}>

<div className="list-row" style={{ flexWrap: "wrap" }}>
<div className={l.avCls} style={{ width: "40px", height: "40px", fontSize: "13px" }}>{l.initials}</div>
<div style={{ flex: "1 1 220px", minWidth: "0" }}>
<div style={{ fontWeight: "600", fontSize: "15px" }}>{l.title}</div>
<div className="muted small" style={{ marginTop: "2px" }}>{l.name} · {l.when}</div>
</div>
<span className={l.statusCls}>{l.status}</span>
<button className="btn btn-ghost" onClick={l.reply}>Reply</button>
</div>

</React.Fragment>
))}
</div>
</div>
<div className="card pad">
<div className="sec-head"><h2 className="h2">My offers</h2><span className="tag tag-green">1 live</span></div>
<div className="list-row" style={{ flexWrap: "wrap", marginTop: "8px" }}>
<div style={{ flex: "1 1 260px", minWidth: "0" }}>
<div style={{ fontWeight: "600", fontSize: "15px" }}>Free website UX review</div>
<div className="muted small" style={{ marginTop: "2px" }}>19 claims · 230 views · until 31 Dec 2026</div>
</div>
<button className="btn btn-ghost">Edit</button>
<button className="btn btn-ghost">Pause</button>
</div>
<button className="btn btn-dashed" style={{ marginTop: "12px" }}><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>Add an offer</button>
</div>
</div>
<div style={{ flex: "1 1 300px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }}>
<div className="card pad">
<div className="sec-head"><h2 className="h2">Profile completeness</h2><strong style={{ fontFamily: "'Manrope', sans-serif", fontSize: "18px" }}>80%</strong></div>
<div className="bar-track" style={{ marginTop: "14px" }} role="img" aria-label="Profile 80 percent complete"><div className="bar-fill" style={{ width: "80%" }}></div></div>
<div style={{ marginTop: "10px" }}>
<div className="check-row"><svg className="ok" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5 9-10" /></svg>Logo, cover and about</div>
<div className="check-row"><svg className="ok" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5 9-10" /></svg>Services listed</div>
<div className="check-row"><svg className="ok" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5 9-10" /></svg>Portfolio items</div>
<div className="check-row"><svg className="ok" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5 9-10" /></svg>Team contacts</div>
<div className="check-row" style={{ justifyContent: "space-between" }}><span className="meta"><svg className="todo" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="8" /></svg>Certifications</span><button className="link-btn">Add</button></div>
</div>
</div>
<div className="card pad">
<h2 className="h2">Who viewed your profile</h2>
<div style={{ marginTop: "8px" }}>
{viewers.map((co, $index) => (
<React.Fragment key={$index}>

<div className="list-row">
<div className={co.avCls} style={{ width: "36px", height: "36px", fontSize: "12px" }}>{co.initials}</div>
<div style={{ flex: "1", minWidth: "0" }}><button className="name-btn" style={{ fontSize: "14px" }} onClick={co.open}>{co.name}</button><div className="muted small">{co.activity}</div></div>
<button className={co.connectCls} onClick={co.connect}>{co.connectLabel}</button>
</div>

</React.Fragment>
))}
</div>
</div>
</div>
</div>
</section>

</>
) : null}

{/* ADMIN */}
{show.admin ? (
<>

<section style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
<div className="page-head">
<div>
<p className="eyebrow">Shams staff only</p>
<h1>Admin console</h1>
<p className="muted" style={{ marginTop: "6px", fontSize: "15px" }}>Verify companies, moderate content and track community health.</p>
</div>
<div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
<button className="btn btn-ghost">Export report</button>
<button className="btn btn-primary">Feature a company</button>
</div>
</div>
<div className="stats">
<div className="card stat"><div className="muted small">Companies onboarded</div><div className="stat-num">3,412</div><div className="small ok">+146 this month</div></div>
<div className="card stat"><div className="muted small">Active this month</div><div className="stat-num">1,108</div><div className="small muted">32% of onboarded</div></div>
<div className="card stat"><div className="muted small">Live offers</div><div className="stat-num">286</div><div className="small muted">41 claimed this week</div></div>
<div className="card stat"><div className="muted small">Open requests</div><div className="stat-num">94</div><div className="small muted">Avg. 4 proposals each</div></div>
</div>
<div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
<div style={{ flex: "2 1 520px", minWidth: "0" }} className="card pad">
<div className="sec-head"><h2 className="h2">Moderation queue</h2><span className="tag tag-amber">{pendingLabel}</span></div>
<div style={{ marginTop: "8px" }}>
{modList.map((m, $index) => (
<React.Fragment key={$index}>

<div className="list-row" style={{ flexWrap: "wrap" }}>
<div style={{ flex: "1 1 260px", minWidth: "0" }}>
<span className="tag">{m.type}</span>
<div style={{ fontWeight: "600", fontSize: "15px", marginTop: "6px" }}>{m.title}</div>
<div className="muted small" style={{ marginTop: "2px" }}>{m.coName} · {m.when}</div>
</div>
{m.pending ? (
<>
<div style={{ display: "flex", gap: "8px" }}><button className="btn btn-primary" onClick={m.approve}>Approve</button><button className="btn btn-ghost" onClick={m.reject}>Reject</button></div>
</>
) : null}
{m.decided ? (
<>
<span className={m.decisionCls}>{m.decision}</span>
</>
) : null}
</div>

</React.Fragment>
))}
</div>
</div>
<div style={{ flex: "1 1 300px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }}>
<div className="card pad">
<h2 className="h2">Members by sector</h2>
<div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "14px", fontSize: "13px" }}>
<div><div style={{ display: "flex", justifyContent: "space-between" }}><span>Film & Video</span><span className="muted">24%</span></div><div className="bar-track" style={{ marginTop: "6px" }}><div className="bar-fill" style={{ width: "24%" }}></div></div></div>
<div><div style={{ display: "flex", justifyContent: "space-between" }}><span>Digital & Tech</span><span className="muted">19%</span></div><div className="bar-track" style={{ marginTop: "6px" }}><div className="bar-fill" style={{ width: "19%" }}></div></div></div>
<div><div style={{ display: "flex", justifyContent: "space-between" }}><span>Marketing & PR</span><span className="muted">16%</span></div><div className="bar-track" style={{ marginTop: "6px" }}><div className="bar-fill" style={{ width: "16%" }}></div></div></div>
<div><div style={{ display: "flex", justifyContent: "space-between" }}><span>Audio & Podcast</span><span className="muted">11%</span></div><div className="bar-track" style={{ marginTop: "6px" }}><div className="bar-fill" style={{ width: "11%" }}></div></div></div>
<div><div style={{ display: "flex", justifyContent: "space-between" }}><span>Publishing & Print</span><span className="muted">9%</span></div><div className="bar-track" style={{ marginTop: "6px" }}><div className="bar-fill" style={{ width: "9%" }}></div></div></div>
<div><div style={{ display: "flex", justifyContent: "space-between" }}><span>Other sectors</span><span className="muted">21%</span></div><div className="bar-track" style={{ marginTop: "6px" }}><div className="bar-fill" style={{ width: "21%", background: "#8FB3BE" }}></div></div></div>
</div>
</div>
<div className="card pad" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
<h2 className="h2">Send an announcement</h2>
<div className="field">
<label className="field-label" htmlFor="ann-aud">Audience</label>
<select id="ann-aud" className="input"><option>All member companies</option><option>Film & Video sector</option><option>Companies with live offers</option><option>Licences expiring in 60 days</option></select>
</div>
<div className="field">
<label className="field-label" htmlFor="ann-text">Message</label>
<textarea id="ann-text" className="input" rows={3} placeholder="Write the announcement"></textarea>
</div>
<button className="btn btn-primary">Send to members</button>
</div>
</div>
</div>
</section>

</>
) : null}

</div>
</main>
</div>
  );
}
