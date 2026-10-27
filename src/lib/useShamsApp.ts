"use client";

import {
  useCallback,
  useMemo,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";
import { companies, events, me, mods, offers, reqs } from "./data";
import type { AppState, Company, Offer, Request, Screen } from "./types";

const initialState: AppState = {
  screen: "home",
  q: "",
  sector: "All",
  companyId: "c1",
  connected: {},
  quoteOpen: false,
  quoteSent: false,
  quoteText: "",
  offerCat: "All",
  claimed: {},
  proposed: {},
  formOpen: false,
  newReqTitle: "",
  newReqCat: "Film & Video",
  newReqBudget: "",
  newReqDetails: "",
  postedReqs: [],
  thread: "t1",
  draft: "",
  threads: [
    {
      id: "t1",
      companyId: "c1",
      unread: false,
      messages: [
        {
          from: "them",
          text: "Hi! We saw your profile. Are you open to subcontracting web work for a client project?",
          time: "09:12",
        },
        {
          from: "me",
          text: "Hello, yes we are. Could you share the scope and timeline?",
          time: "09:20",
        },
        {
          from: "them",
          text: "Sure. It is a 5-page microsite for a documentary launch, needed by mid-November.",
          time: "09:31",
        },
      ],
    },
    {
      id: "t2",
      companyId: "c6",
      unread: true,
      messages: [
        {
          from: "them",
          text: "Thanks for claiming our hosting offer. Would you like a quick call to plan the migration?",
          time: "08:05",
        },
      ],
    },
    {
      id: "t3",
      companyId: "c4",
      unread: false,
      messages: [
        {
          from: "me",
          text: "Can you subtitle three short videos into Arabic this week?",
          time: "Mon",
        },
        {
          from: "them",
          text: "Yes, send them over and we will confirm the turnaround today.",
          time: "Mon",
        },
      ],
    },
  ],
  rsvp: {},
  mod: {},
};

type ById = Record<string, Company | typeof me>;

function plural(n: number, one: string, many: string) {
  return `${n} ${n === 1 ? one : many}`;
}

export function useShamsApp() {
  const [s, setState] = useState<AppState>(initialState);

  const patch = useCallback((extra: Partial<AppState>) => {
    setState((prev) => ({ ...prev, ...extra }));
  }, []);

  const byId = useMemo(() => {
    const map: ById = { me };
    companies.forEach((c) => {
      map[c.id] = c;
    });
    return map;
  }, []);

  const reset = { quoteOpen: false, quoteSent: false };

  const go = useCallback(
    (screen: Screen, extra?: Partial<AppState>) => () => {
      patch({ screen, ...reset, ...extra });
    },
    [patch],
  );

  const openCo = useCallback(
    (id: string) => () => {
      patch({ screen: "profile", companyId: id, ...reset });
    },
    [patch],
  );

  const startThread = useCallback(
    (cid: string) => () => {
      setState((prev) => {
        let threads = prev.threads;
        let th = threads.find((t) => t.companyId === cid);
        if (!th) {
          th = { id: `t-${cid}`, companyId: cid, unread: false, messages: [] };
          threads = [th, ...threads];
        }
        return {
          ...prev,
          ...reset,
          threads,
          thread: th.id,
          screen: "messages" as Screen,
        };
      });
    },
    [],
  );

  const decorate = useCallback(
    (c: Company | typeof me) => {
      const company = c as Company;
      const on = !!s.connected[c.id];
      return {
        ...company,
        avCls: `av ${c.av}`,
        open: openCo(c.id),
        message: startThread(c.id),
        connect: () => {
          setState((prev) => ({
            ...prev,
            connected: { ...prev.connected, [c.id]: !prev.connected[c.id] },
          }));
        },
        connectLabel: on ? "Connected" : "Connect",
        connectCls: on ? "btn btn-done" : "btn btn-ghost",
        topServices: "services" in company ? company.services.slice(0, 3) : [],
        services: "services" in company ? company.services : [],
        openTo: "openTo" in company ? company.openTo : [],
        sector: "sector" in company ? company.sector : "",
        founded: "founded" in company ? company.founded : "",
        size: "size" in company ? company.size : "",
        desc: "desc" in company ? company.desc : "",
        about: "about" in company ? company.about : "",
        rating: "rating" in company ? company.rating : "",
        reviews: "reviews" in company ? company.reviews : 0,
      };
    },
    [openCo, s.connected, startThread],
  );

  const decOffer = useCallback(
    (o: Offer) => {
      const co = byId[o.companyId] as Company;
      const claimed = !!s.claimed[o.id];
      return {
        ...o,
        coName: co.name,
        coInitials: co.initials,
        avCls: `av ${co.av}`,
        claimed,
        notClaimed: !claimed,
        claim: () => {
          setState((prev) => ({
            ...prev,
            claimed: { ...prev.claimed, [o.id]: true },
          }));
        },
        claimsLabel: plural(
          o.claims + (claimed ? 1 : 0),
          "member has claimed this",
          "members have claimed this",
        ),
        openCo: openCo(o.companyId),
      };
    },
    [byId, openCo, s.claimed],
  );

  const active = s.screen === "profile" ? "directory" : s.screen;
  const keys: Screen[] = [
    "home",
    "directory",
    "offers",
    "opportunities",
    "messages",
    "events",
    "dashboard",
    "admin",
  ];
  const nav: Record<string, string> = {};
  const show: Record<string, boolean> = {};
  keys.forEach((k) => {
    nav[k] = k === active ? "nav active" : "nav";
  });
  [...keys, "profile" as Screen].forEach((k) => {
    show[k] = s.screen === k;
  });

  const sectors = [
    "All",
    "Film & Video",
    "Digital & Tech",
    "Marketing & PR",
    "Audio & Podcast",
    "Publishing & Print",
    "Events",
    "Consulting",
    "Translation",
  ];
  const q = (s.q || "").toLowerCase().trim();
  const dir = companies
    .filter((c) => {
      if (s.sector !== "All" && c.sector !== s.sector) return false;
      if (!q) return true;
      return (
        `${c.name} ${c.activity} ${c.sector} ${c.services.join(" ")}`
          .toLowerCase()
          .indexOf(q) >= 0
      );
    })
    .map(decorate);

  const sectorChips = sectors.map((x) => ({
    label: x,
    cls: x === s.sector ? "chip on" : "chip",
    pressed: x === s.sector,
    pick: () => patch({ sector: x }),
  }));

  const pco = decorate((byId[s.companyId] as Company) || companies[0]);
  const pcoOffers = offers.filter((o) => o.companyId === pco.id).map(decOffer);
  const reviewTexts = [
    "Delivered on time and kept us updated at every stage. We will work with them again.",
    "Clear pricing and a responsive team. Good to find this partner inside the free zone.",
  ];
  const reviews = companies
    .filter((c) => c.id !== pco.id)
    .slice(0, 2)
    .map((c, i) => ({
      name: c.name,
      initials: c.initials,
      avCls: `av ${c.av}`,
      text: reviewTexts[i],
    }));

  const offerCats = [
    "All",
    "Media services",
    "Software & IT",
    "Business services",
    "Marketing",
    "Print",
    "Events",
  ];
  const offerChips = offerCats.map((x) => ({
    label: x,
    cls: x === s.offerCat ? "chip on" : "chip",
    pressed: x === s.offerCat,
    pick: () => patch({ offerCat: x }),
  }));
  const offerList = offers
    .filter((o) => s.offerCat === "All" || o.category === s.offerCat)
    .map(decOffer);

  const reqList = [...s.postedReqs, ...reqs].map((r: Request) => {
    const co = byId[r.companyId] as Company | typeof me;
    const sent = !!s.proposed[r.id];
    const mine = r.companyId === "me";
    return {
      ...r,
      coName: co.name,
      coInitials: co.initials,
      avCls: `av ${co.av}`,
      mine,
      sent: sent && !mine,
      canPropose: !sent && !mine,
      propose: () => {
        setState((prev) => ({
          ...prev,
          proposed: { ...prev.proposed, [r.id]: !prev.proposed[r.id] },
        }));
      },
      proposalsLabel: plural(
        r.proposals + (sent ? 1 : 0),
        "proposal",
        "proposals",
      ),
    };
  });

  const threadList = s.threads.map((t) => {
    const co = byId[t.companyId] as Company;
    const last = t.messages.length ? t.messages[t.messages.length - 1] : null;
    return {
      id: t.id,
      coName: co.name,
      coInitials: co.initials,
      avCls: `av ${co.av}`,
      snippet: last
        ? `${last.from === "me" ? "You: " : ""}${last.text}`
        : "New conversation",
      time: last ? last.time : "",
      unread: !!t.unread && t.id !== s.thread,
      cls: t.id === s.thread ? "thread active" : "thread",
      pick: () => {
        setState((prev) => ({
          ...prev,
          thread: t.id,
          threads: prev.threads.map((x) =>
            x.id === t.id ? { ...x, unread: false } : x,
          ),
        }));
      },
    };
  });

  const curThread = s.threads.find((t) => t.id === s.thread) || s.threads[0];
  const curCo = byId[curThread.companyId] as Company;
  const cur = {
    name: curCo.name,
    initials: curCo.initials,
    activity: curCo.activity,
    avCls: `av ${curCo.av}`,
    open: openCo(curCo.id),
  };
  const curMsgs = curThread.messages.map((m) => ({
    text: m.text,
    time: m.time,
    rowCls: m.from === "me" ? "msg-row me" : "msg-row",
    cls: m.from === "me" ? "msg msg-me" : "msg msg-them",
  }));

  const sendMsg = () => {
    const txt = (s.draft || "").trim();
    if (!txt) return;
    const now = new Date();
    const time = `${`0${now.getHours()}`.slice(-2)}:${`0${now.getMinutes()}`.slice(-2)}`;
    setState((prev) => ({
      ...prev,
      draft: "",
      threads: prev.threads.map((x) =>
        x.id === curThread.id
          ? {
              ...x,
              messages: [...x.messages, { from: "me" as const, text: txt, time }],
            }
          : x,
      ),
    }));
  };

  const unreadCount = s.threads.filter(
    (t) => t.unread && t.id !== s.thread,
  ).length;

  const eventList = events.map((e) => {
    const going = !!s.rsvp[e.id];
    return {
      ...e,
      goingLabel: `${e.count + (going ? 1 : 0)} members going`,
      rsvpLabel: going ? "You are going" : "RSVP",
      rsvpCls: going ? "btn btn-done" : "btn btn-primary",
      pressed: going,
      rsvp: () => {
        setState((prev) => ({
          ...prev,
          rsvp: { ...prev.rsvp, [e.id]: !prev.rsvp[e.id] },
        }));
      },
    };
  });

  const leadData = [
    {
      cid: "c5",
      title: "Website for an exhibition client",
      when: "2 days ago",
      status: "New",
      statusCls: "tag tag-amber",
    },
    {
      cid: "c9",
      title: "Landing page for a podcast series",
      when: "5 days ago",
      status: "Replied",
      statusCls: "tag tag-teal",
    },
    {
      cid: "c7",
      title: "Booking system for advisory clients",
      when: "1 week ago",
      status: "Won",
      statusCls: "tag tag-green",
    },
  ];
  const leads = leadData.map((l) => {
    const co = byId[l.cid] as Company;
    return {
      title: l.title,
      when: l.when,
      status: l.status,
      statusCls: l.statusCls,
      name: co.name,
      initials: co.initials,
      avCls: `av ${co.av}`,
      reply: startThread(l.cid),
    };
  });
  const viewers = ["c1", "c3", "c10"].map((id) =>
    decorate(byId[id] as Company),
  );

  const modList = mods.map((m) => {
    const dec = s.mod[m.id];
    const co = byId[m.companyId] as Company;
    const decide = (v: string) => () => {
      setState((prev) => ({ ...prev, mod: { ...prev.mod, [m.id]: v } }));
    };
    return {
      ...m,
      coName: co.name,
      pending: !dec,
      decided: !!dec,
      decision: dec || "",
      decisionCls: dec === "Approved" ? "tag tag-green" : "tag tag-red",
      approve: decide("Approved"),
      reject: decide("Rejected"),
    };
  });
  const pendingCount = modList.filter((m) => m.pending).length;

  return {
    nav,
    show,
    goHome: go("home"),
    goDirectory: go("directory"),
    goOffers: go("offers"),
    goOpportunities: go("opportunities"),
    goMessages: go("messages"),
    goEvents: go("events"),
    goDashboard: go("dashboard"),
    goAdmin: go("admin"),
    postFromHome: go("opportunities", { formOpen: true }),
    hasUnread: unreadCount > 0,
    unreadCount,
    s_q: s.q,
    onTopSearch: (e: ChangeEvent<HTMLInputElement>) =>
      patch({ q: e.target.value, screen: "directory", ...reset }),
    onSearch: (e: ChangeEvent<HTMLInputElement>) =>
      patch({ q: e.target.value }),
    clearFilters: () => patch({ q: "", sector: "All" }),
    recommended: ["c1", "c10", "c4"].map((id) => decorate(byId[id] as Company)),
    homeReqs: reqList.slice(0, 3),
    homeOffers: offers.slice(0, 3).map(decOffer),
    homeEvents: eventList.slice(0, 2),
    newMembers: companies.filter((c) => c.isNew).map(decorate),
    dir,
    dirEmpty: dir.length === 0,
    sectorChips,
    dirCount: `Showing ${dir.length} of ${companies.length} sample companies`,
    pco,
    pcoOffers,
    noPcoOffers: pcoOffers.length === 0,
    reviews,
    quoteOpen: s.quoteOpen,
    quoteSent: s.quoteSent,
    s_quoteText: s.quoteText,
    openQuote: () => patch({ quoteOpen: true, quoteSent: false }),
    closeQuote: () => patch({ quoteOpen: false }),
    onQuoteText: (e: ChangeEvent<HTMLTextAreaElement>) =>
      patch({ quoteText: e.target.value }),
    sendQuote: () =>
      patch({ quoteOpen: false, quoteSent: true, quoteText: "" }),
    offerChips,
    offerList,
    reqList,
    formOpen: s.formOpen,
    formBtnLabel: s.formOpen ? "Close form" : "Post a request",
    toggleForm: () =>
      setState((prev) => ({ ...prev, formOpen: !prev.formOpen })),
    s_newReqTitle: s.newReqTitle,
    s_newReqCat: s.newReqCat,
    s_newReqBudget: s.newReqBudget,
    s_newReqDetails: s.newReqDetails,
    onReqTitle: (e: ChangeEvent<HTMLInputElement>) =>
      patch({ newReqTitle: e.target.value }),
    onReqCat: (e: ChangeEvent<HTMLSelectElement>) =>
      patch({ newReqCat: e.target.value }),
    onReqBudget: (e: ChangeEvent<HTMLInputElement>) =>
      patch({ newReqBudget: e.target.value }),
    onReqDetails: (e: ChangeEvent<HTMLTextAreaElement>) =>
      patch({ newReqDetails: e.target.value }),
    postReq: () => {
      const title = (s.newReqTitle || "").trim();
      if (!title) return;
      const r: Request = {
        id: `p${Date.now()}`,
        companyId: "me",
        title,
        category: s.newReqCat,
        budget: (s.newReqBudget || "").trim() || "Budget on request",
        deadline: "Just posted",
        proposals: 0,
        details: (s.newReqDetails || "").trim() || "No details added yet.",
      };
      setState((prev) => ({
        ...prev,
        postedReqs: [r, ...prev.postedReqs],
        newReqTitle: "",
        newReqBudget: "",
        newReqDetails: "",
        formOpen: false,
      }));
    },
    threadList,
    cur,
    curMsgs,
    noMsgs: curMsgs.length === 0,
    s_draft: s.draft,
    onDraft: (e: ChangeEvent<HTMLInputElement>) =>
      patch({ draft: e.target.value }),
    onDraftKey: (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        sendMsg();
      }
    },
    sendMsg,
    eventList,
    leads,
    viewers,
    modList,
    pendingLabel: plural(pendingCount, "item pending", "items pending"),
  };
}
