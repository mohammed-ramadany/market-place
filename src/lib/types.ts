export type Screen =
  | "home"
  | "directory"
  | "offers"
  | "opportunities"
  | "messages"
  | "events"
  | "dashboard"
  | "admin"
  | "profile";

export type Company = {
  id: string;
  name: string;
  initials: string;
  av: string;
  sector: string;
  activity: string;
  size: string;
  founded: string;
  rating: string;
  reviews: number;
  isNew: boolean;
  desc: string;
  about: string;
  services: string[];
  openTo: string[];
};

export type Offer = {
  id: string;
  companyId: string;
  title: string;
  category: string;
  expires: string;
  code: string;
  claims: number;
  desc: string;
};

export type Request = {
  id: string;
  companyId: string;
  title: string;
  category: string;
  budget: string;
  deadline: string;
  proposals: number;
  details: string;
};

export type EventItem = {
  id: string;
  title: string;
  type: string;
  month: string;
  day: string;
  dow: string;
  time: string;
  place: string;
  count: number;
};

export type ModItem = {
  id: string;
  type: string;
  title: string;
  companyId: string;
  when: string;
};

export type Message = {
  from: "me" | "them";
  text: string;
  time: string;
};

export type Thread = {
  id: string;
  companyId: string;
  unread: boolean;
  messages: Message[];
};

export type AppState = {
  screen: Screen;
  q: string;
  sector: string;
  companyId: string;
  connected: Record<string, boolean>;
  quoteOpen: boolean;
  quoteSent: boolean;
  quoteText: string;
  offerCat: string;
  claimed: Record<string, boolean>;
  proposed: Record<string, boolean>;
  formOpen: boolean;
  newReqTitle: string;
  newReqCat: string;
  newReqBudget: string;
  newReqDetails: string;
  postedReqs: Request[];
  thread: string;
  draft: string;
  threads: Thread[];
  rsvp: Record<string, boolean>;
  mod: Record<string, string>;
};
