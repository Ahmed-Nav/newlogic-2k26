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
    title: "Hack-a-thon",
    category: "Off-Stage",
    description: "The ultimate coding sprint. Build, deploy, and conquer.",
    color: "green",
    formLink: "https://forms.gle/2aodGcTPXiThJ9n69",
  },
  {
    id: "debugging",
    title: "Debugging",
    category: "Off-Stage",
    description: "Find the bugs before they find you.",
    color: "green",
    formLink: "https://forms.gle/aCYWvi95PcUX3svn6",
  },
  {
    id: "codeathon",
    title: "Code-a-thon",
    category: "Off-Stage",
    description: "Competitive programming at its finest.",
    color: "green",
    formLink: "https://forms.gle/vz8SV87a3oKnArVW7",
  },
  {
    id: "web-design",
    title: "Web Designing",
    category: "Off-Stage",
    description: "Craft stunning digital experiences.",
    color: "green",
    formLink: "https://forms.gle/e4kkpS5GMYJ9bpNk6",
  },

  // --- On Stage Events ---
  {
    id: "professional-walk",
    title: "Professional Walk",
    category: "On-Stage",
    description: "Showcase professional elegance and style.",
    color: "pink",
    formLink: "https://forms.gle/7cMcgtwrna5AhXNB9",
  },
  {
    id: "shipwreck",
    title: "Shipwreck",
    category: "On-Stage",
    description: "Survive the sinking ship with your wit.",
    color: "pink",
    formLink: "https://forms.gle/euHWqw3h3ZLw4MPt5",
  },
  {
    id: "quiz",
    title: "Tech Quiz",
    category: "Off-Stage",
    description: "Test your technical knowledge against the best.",
    color: "pink",
    formLink: "https://forms.gle/LrUzWgzjB5UEWHiC8",
  },
  {
    id: "paper-presentation",
    title: "Paper Presentation",
    category: "Off-Stage",
    description: "Showcase your innovative research and technical ideas.",
    color: "pink",
    formLink: "https://forms.gle/RtLFmxtiSErr7QG68",
  },

  // --- Online Events ---
  {
    id: "esports",
    title: "E-Sports",
    category: "Online",
    description: "Dominate the virtual arena.",
    color: "blue",
    formLink: "https://forms.gle/Fmd8RjnQ8CWKy13Q8",
  },
  {
    id: "ai-video",
    title: "AI Video Making",
    category: "Online",
    description: "Create cinematic magic using AI tools.",
    color: "blue",
    formLink: "https://forms.gle/n2LNCnJ7s8wY13NA6",
  },
];
