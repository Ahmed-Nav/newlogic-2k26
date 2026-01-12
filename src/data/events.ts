export interface Event {
  id: string;
  title: string;
  category: "Off-Stage" | "On-Stage" | "Online";
  description: string;
  color: "green" | "pink" | "blue";
  formLink: string;
}

export const events: Event[] = [
  // --- Off Stage Events ---
  {
    id: "hackathon",
    title: "Hackathon",
    category: "Off-Stage",
    description: "The ultimate coding sprint. Build, deploy, and conquer.",
    color: "green",
    formLink: "#",
  },
  {
    id: "quiz",
    title: "Tech Quiz",
    category: "Off-Stage",
    description: "Test your technical knowledge against the best.",
    color: "green",
    formLink: "#",
  },
  {
    id: "debugging",
    title: "Debugging",
    category: "Off-Stage",
    description: "Find the bugs before they find you.",
    color: "green",
    formLink: "#",
  },
  {
    id: "codeathon",
    title: "Codeathon",
    category: "Off-Stage",
    description: "Competitive programming at its finest.",
    color: "green",
    formLink: "#",
  },
  {
    id: "web-design",
    title: "Web Designing",
    category: "Off-Stage",
    description: "Craft stunning digital experiences.",
    color: "green",
    formLink: "#",
  },

  // --- On Stage Events ---
  {
    id: "corporate-walk",
    title: "Corporate Walk",
    category: "On-Stage",
    description: "Showcase professional elegance and style.",
    color: "pink",
    formLink: "#",
  },
  {
    id: "shipwreck",
    title: "Shipwreck",
    category: "On-Stage",
    description: "Survive the sinking ship with your wit.",
    color: "pink",
    formLink: "#",
  },
  {
    id: "adzap",
    title: "Adzap",
    category: "On-Stage",
    description: "Sell the unsellable. Marketing mastery.",
    color: "pink",
    formLink: "#",
  },

  // --- Online Events ---
  {
    id: "esports",
    title: "E-Sports",
    category: "Online",
    description: "Dominate the virtual arena.",
    color: "blue",
    formLink: "#",
  },
  {
    id: "ai-video",
    title: "AI Video Making",
    category: "Online",
    description: "Create cinematic magic using AI tools.",
    color: "blue",
    formLink: "#",
  },
];
