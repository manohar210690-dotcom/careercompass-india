// ─── Interfaces ──────────────────────────────────────────────────────────────

export interface RiasecScores {
  R: number; // Realistic – hands-on, technical, physical
  I: number; // Investigative – analytical, research-driven
  A: number; // Artistic – creative, expressive
  S: number; // Social – people-oriented, helping
  E: number; // Enterprising – leadership, persuasion
  C: number; // Conventional – organised, structured
}

export interface MbtiAxis {
  dimension: "EI" | "SN" | "TF" | "JP";
  pole: "left" | "right"; // left = E/S/T/J, right = I/N/F/P
  weight: number;
}

export interface QuizOption {
  id: string;
  text: string;
  riasecScores: RiasecScores;
  mbtiAxes: MbtiAxis[];
  roleIds: string[];
}

export interface QuizQuestion {
  id: string;
  section: "interests" | "drains" | "thinking" | "scenarios";
  sectionLabel: string;
  question: string;
  description?: string;
  options: QuizOption[];
}

// ─── Section color constants ──────────────────────────────────────────────────

export const SECTION_COLORS: Record<
  string,
  { bg: string; text: string; border: string; badge: string }
> = {
  interests: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/30",
    badge: "bg-primary/15 text-primary border-primary/30",
  },
  drains: {
    bg: "bg-destructive/10",
    text: "text-destructive",
    border: "border-destructive/30",
    badge: "bg-destructive/15 text-destructive border-destructive/30",
  },
  thinking: {
    bg: "bg-accent/10",
    text: "text-accent-foreground",
    border: "border-accent/30",
    badge: "bg-accent/15 text-accent-foreground border-accent/30",
  },
  scenarios: {
    bg: "bg-secondary",
    text: "text-secondary-foreground",
    border: "border-border",
    badge: "bg-secondary text-secondary-foreground border-border",
  },
};

// ─── 35 Questions (25 original + 10 fresher-focused) ─────────────────────────

export const quizQuestions: QuizQuestion[] = [
  // ════════════════════════════════════════════════════════════════
  // SECTION 1 — YOUR HAPPY PLACE (WORK EDITION) (Q1–Q6)
  // ════════════════════════════════════════════════════════════════
  {
    id: "q1",
    section: "interests",
    sectionLabel: "Your Happy Place (Work Edition)",
    question:
      "Imagine it's Monday morning and somehow you're actually excited. What are you doing?",
    description:
      "Go with your gut — not what looks good on a LinkedIn 'hustle culture' post.",
    options: [
      {
        id: "q1a",
        text: "Writing code so clean it practically writes comments itself",
        riasecScores: { R: 2, I: 2, A: 0, S: 0, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "left", weight: 1 }],
        roleIds: [
          "frontend-developer",
          "backend-developer",
          "fullstack-developer",
          "java-developer",
          "python-developer",
          "react-native-developer",
          "flutter-developer",
          "dotnet-developer",
        ],
      },
      {
        id: "q1b",
        text: "Making pixels dance — designing UIs that feel *chef's kiss*",
        riasecScores: { R: 0, I: 1, A: 2, S: 0, E: 1, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 1 }],
        roleIds: [
          "uiux-designer",
          "frontend-developer",
          "graphic-designer",
          "product-designer",
          "interaction-designer",
          "web-designer",
          "brand-designer",
          "motion-designer",
        ],
      },
      {
        id: "q1c",
        text: "Digging through data until a hidden pattern winks back at you",
        riasecScores: { R: 0, I: 2, A: 0, S: 0, E: 0, C: 2 },
        mbtiAxes: [{ dimension: "TF", pole: "left", weight: 2 }],
        roleIds: [
          "data-analyst",
          "business-analyst",
          "data-scientist",
          "bi-developer",
          "reporting-analyst",
          "data-quality-analyst",
          "marketing-analyst",
          "data-governance-analyst",
        ],
      },
      {
        id: "q1d",
        text: "Being the hero who actually fixes someone's tech nightmare",
        riasecScores: { R: 0, I: 0, A: 0, S: 2, E: 1, C: 0 },
        mbtiAxes: [{ dimension: "TF", pole: "right", weight: 2 }],
        roleIds: [
          "it-support-engineer",
          "helpdesk-analyst",
          "service-desk-analyst",
          "technical-account-manager",
          "application-support-engineer",
          "l1-support-engineer",
          "l2-support-engineer",
        ],
      },
      {
        id: "q1e",
        text: "Building a perfectly colour-coded project plan that sparks joy",
        riasecScores: { R: 0, I: 0, A: 0, S: 0, E: 2, C: 2 },
        mbtiAxes: [{ dimension: "JP", pole: "left", weight: 2 }],
        roleIds: [
          "it-project-manager",
          "scrum-master",
          "product-manager",
          "agile-coach",
          "business-analyst",
          "change-management-analyst",
          "it-vendor-manager",
        ],
      },
    ],
  },

  {
    id: "q2",
    section: "interests",
    sectionLabel: "Your Happy Place (Work Edition)",
    question:
      "Surprise! You have a free afternoon at work. No meetings, no Slack pings. You…",
    options: [
      {
        id: "q2a",
        text: "Immediately open a new tab and start tinkering with that shiny new framework",
        riasecScores: { R: 1, I: 2, A: 0, S: 0, E: 0, C: 0 },
        mbtiAxes: [
          { dimension: "SN", pole: "right", weight: 1 },
          { dimension: "JP", pole: "right", weight: 1 },
        ],
        roleIds: [
          "devops-engineer",
          "cloud-engineer",
          "mlops-engineer",
          "kubernetes-admin",
          "aws-solutions-architect",
          "gcp-engineer",
          "azure-cloud-engineer",
        ],
      },
      {
        id: "q2b",
        text: "Sketch out a redesign of your company's app that's been bothering you",
        riasecScores: { R: 0, I: 1, A: 2, S: 1, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "uiux-designer",
          "product-designer",
          "product-manager",
          "interaction-designer",
          "web-designer",
          "design-systems-manager",
        ],
      },
      {
        id: "q2c",
        text: "Pull up a messy dataset and go full detective mode with SQL queries",
        riasecScores: { R: 0, I: 2, A: 0, S: 0, E: 0, C: 1 },
        mbtiAxes: [{ dimension: "TF", pole: "left", weight: 2 }],
        roleIds: [
          "data-engineer",
          "data-analyst",
          "etl-developer",
          "data-warehouse-engineer",
          "database-administrator",
          "data-migration-specialist",
        ],
      },
      {
        id: "q2d",
        text: "Write documentation so good that future devs will actually read it",
        riasecScores: { R: 0, I: 1, A: 1, S: 1, E: 0, C: 2 },
        mbtiAxes: [{ dimension: "JP", pole: "left", weight: 1 }],
        roleIds: [
          "technical-writer",
          "business-analyst",
          "confluence-administrator",
          "it-compliance-analyst",
          "change-management-analyst",
        ],
      },
      {
        id: "q2e",
        text: "Walk to the nearest user and ask them what's driving them crazy",
        riasecScores: { R: 0, I: 1, A: 0, S: 2, E: 1, C: 0 },
        mbtiAxes: [{ dimension: "EI", pole: "left", weight: 2 }],
        roleIds: [
          "product-manager",
          "ux-researcher",
          "technical-account-manager",
          "it-support-engineer",
          "customer-success-manager",
          "business-analyst",
        ],
      },
    ],
  },

  {
    id: "q3",
    section: "interests",
    sectionLabel: "Your Happy Place (Work Edition)",
    question:
      "Be honest — which type of problem makes your brain light up like a Diwali night?",
    options: [
      {
        id: "q3a",
        text: "A gnarly algorithmic puzzle or system design challenge",
        riasecScores: { R: 1, I: 2, A: 0, S: 0, E: 0, C: 1 },
        mbtiAxes: [{ dimension: "TF", pole: "left", weight: 2 }],
        roleIds: [
          "backend-developer",
          "data-scientist",
          "ml-engineer",
          "solutions-architect-associate",
          "cloud-architect",
          "fullstack-developer",
          "java-developer",
        ],
      },
      {
        id: "q3b",
        text: "Making something look and feel so right that users can't explain why they love it",
        riasecScores: { R: 0, I: 0, A: 2, S: 1, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "uiux-designer",
          "graphic-designer",
          "motion-designer",
          "product-designer",
          "illustrator",
          "brand-designer",
        ],
      },
      {
        id: "q3c",
        text: "Figuring out why a team is secretly dysfunctional and actually fixing it",
        riasecScores: { R: 0, I: 0, A: 0, S: 2, E: 2, C: 0 },
        mbtiAxes: [
          { dimension: "EI", pole: "left", weight: 1 },
          { dimension: "TF", pole: "right", weight: 1 },
        ],
        roleIds: [
          "scrum-master",
          "it-project-manager",
          "agile-coach",
          "change-management-analyst",
          "business-analyst",
          "product-manager",
        ],
      },
      {
        id: "q3d",
        text: "Keeping a million-user system alive when everything is on fire",
        riasecScores: { R: 2, I: 1, A: 0, S: 0, E: 0, C: 1 },
        mbtiAxes: [{ dimension: "JP", pole: "left", weight: 2 }],
        roleIds: [
          "devops-engineer",
          "network-engineer",
          "cloud-engineer",
          "sre",
          "system-administrator",
          "kubernetes-admin",
        ],
      },
      {
        id: "q3e",
        text: "Finding where business strategy meets data — and making it click",
        riasecScores: { R: 0, I: 1, A: 0, S: 0, E: 2, C: 2 },
        mbtiAxes: [{ dimension: "TF", pole: "left", weight: 1 }],
        roleIds: [
          "business-analyst",
          "sap-fico-consultant",
          "oracle-erp-consultant",
          "it-compliance-analyst",
          "solutions-architect-associate",
          "it-risk-analyst",
        ],
      },
    ],
  },

  {
    id: "q4",
    section: "interests",
    sectionLabel: "Your Happy Place (Work Edition)",
    question:
      "If every day at work felt like your ideal job, what would you actually be doing?",
    options: [
      {
        id: "q4a",
        text: "Shipping features, squashing bugs, getting PRs merged before chai break",
        riasecScores: { R: 2, I: 2, A: 0, S: 0, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "EI", pole: "right", weight: 1 }],
        roleIds: [
          "frontend-developer",
          "backend-developer",
          "fullstack-developer",
          "mobile-android-developer",
          "flutter-developer",
          "react-native-developer",
          "python-developer",
        ],
      },
      {
        id: "q4b",
        text: "Running sessions that help people have genuine 'aha!' moments",
        riasecScores: { R: 0, I: 0, A: 1, S: 2, E: 2, C: 0 },
        mbtiAxes: [
          { dimension: "EI", pole: "left", weight: 2 },
          { dimension: "TF", pole: "right", weight: 1 },
        ],
        roleIds: [
          "agile-coach",
          "scrum-master",
          "change-management-analyst",
          "it-project-manager",
          "technical-account-manager",
        ],
      },
      {
        id: "q4c",
        text: "Being the person who knows why the system is slow before anyone else does",
        riasecScores: { R: 2, I: 1, A: 0, S: 0, E: 0, C: 2 },
        mbtiAxes: [{ dimension: "JP", pole: "left", weight: 2 }],
        roleIds: [
          "sre",
          "system-administrator",
          "network-engineer",
          "noc-engineer",
          "production-support-engineer",
          "devops-engineer",
        ],
      },
      {
        id: "q4d",
        text: "Launching campaigns, chasing growth numbers, and seeing ROI climb",
        riasecScores: { R: 0, I: 0, A: 2, S: 1, E: 2, C: 0 },
        mbtiAxes: [{ dimension: "EI", pole: "left", weight: 1 }],
        roleIds: [
          "digital-marketing-executive",
          "content-writer",
          "social-media-manager",
          "seo-executive",
          "performance-marketing-manager",
          "brand-manager",
        ],
      },
      {
        id: "q4e",
        text: "Hunting for process gaps, compliance risks, and quietly preventing disasters",
        riasecScores: { R: 0, I: 1, A: 0, S: 0, E: 1, C: 2 },
        mbtiAxes: [
          { dimension: "JP", pole: "left", weight: 2 },
          { dimension: "TF", pole: "left", weight: 1 },
        ],
        roleIds: [
          "it-audit-specialist",
          "it-compliance-analyst",
          "it-risk-analyst",
          "risk-analytics-specialist",
          "it-procurement-specialist",
          "itil-process-manager",
        ],
      },
    ],
  },

  {
    id: "q5",
    section: "interests",
    sectionLabel: "Your Happy Place (Work Edition)",
    question:
      "You're doom-scrolling at midnight. Which rabbit hole do you actually enjoy falling into?",
    options: [
      {
        id: "q5a",
        text: "AI breakthroughs, LLM papers, and 'how did it learn THAT?!' moments",
        riasecScores: { R: 1, I: 2, A: 0, S: 0, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "ml-engineer",
          "ai-research-scientist",
          "data-scientist",
          "nlp-engineer",
          "computer-vision-engineer",
          "deep-learning-engineer",
          "recommendation-engineer",
        ],
      },
      {
        id: "q5b",
        text: "Kubernetes drama, cloud cost horror stories, and DevOps war tales",
        riasecScores: { R: 2, I: 1, A: 0, S: 0, E: 0, C: 1 },
        mbtiAxes: [{ dimension: "JP", pole: "left", weight: 1 }],
        roleIds: [
          "cloud-engineer",
          "devops-engineer",
          "mlops-engineer",
          "platform-engineer",
          "kubernetes-admin",
          "aws-solutions-architect",
          "gcp-engineer",
          "azure-cloud-engineer",
        ],
      },
      {
        id: "q5c",
        text: "Fonts, color palettes, app redesigns, and Awwwards showcases",
        riasecScores: { R: 0, I: 0, A: 2, S: 1, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "uiux-designer",
          "product-designer",
          "motion-designer",
          "brand-designer",
          "graphic-designer",
          "video-editor",
          "design-systems-manager",
        ],
      },
      {
        id: "q5d",
        text: "Fintech explainers, BI dashboards, and 'how Zerodha scaled' case studies",
        riasecScores: { R: 0, I: 1, A: 0, S: 0, E: 2, C: 2 },
        mbtiAxes: [{ dimension: "TF", pole: "left", weight: 2 }],
        roleIds: [
          "finance-analyst-it",
          "fraud-analyst",
          "risk-analytics-specialist",
          "bi-developer",
          "reporting-analyst",
          "data-governance-analyst",
          "data-quality-analyst",
        ],
      },
      {
        id: "q5e",
        text: "SAP implementation gone wrong, ERP horror stories, and enterprise workflows",
        riasecScores: { R: 1, I: 1, A: 0, S: 0, E: 1, C: 2 },
        mbtiAxes: [{ dimension: "JP", pole: "left", weight: 2 }],
        roleIds: [
          "sap-fico-consultant",
          "sap-sd-consultant",
          "sap-mm-consultant",
          "oracle-erp-consultant",
          "salesforce-developer",
          "servicenow-developer",
          "sap-abap-developer",
        ],
      },
    ],
  },

  {
    id: "q6",
    section: "interests",
    sectionLabel: "Your Happy Place (Work Edition)",
    question:
      "End of the day, which win would make you message your bestie 'DUDE I nailed it today'?",
    options: [
      {
        id: "q6a",
        text: "Your feature just went live and real users are saying they love it",
        riasecScores: { R: 1, I: 1, A: 1, S: 1, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "TF", pole: "right", weight: 1 }],
        roleIds: [
          "frontend-developer",
          "fullstack-developer",
          "mobile-android-developer",
          "uiux-designer",
          "product-manager",
          "flutter-developer",
        ],
      },
      {
        id: "q6b",
        text: "You just found the cursed bug that's been haunting production for two weeks",
        riasecScores: { R: 2, I: 2, A: 0, S: 0, E: 0, C: 1 },
        mbtiAxes: [{ dimension: "TF", pole: "left", weight: 2 }],
        roleIds: [
          "sre",
          "backend-developer",
          "devops-engineer",
          "l2-support-engineer",
          "production-support-engineer",
          "security-engineer",
          "noc-engineer",
        ],
      },
      {
        id: "q6c",
        text: "Your campaign hit 3x the target and the boss is asking 'how did you do that?'",
        riasecScores: { R: 0, I: 0, A: 1, S: 0, E: 2, C: 1 },
        mbtiAxes: [{ dimension: "EI", pole: "left", weight: 1 }],
        roleIds: [
          "digital-marketing-executive",
          "performance-marketing-manager",
          "seo-executive",
          "growth-hacker",
          "content-strategist",
          "paid-ads-manager",
        ],
      },
      {
        id: "q6d",
        text: "You stayed on a support call till the user said 'thank you so much, you're a lifesaver'",
        riasecScores: { R: 0, I: 0, A: 0, S: 2, E: 1, C: 0 },
        mbtiAxes: [{ dimension: "TF", pole: "right", weight: 2 }],
        roleIds: [
          "it-support-engineer",
          "helpdesk-analyst",
          "service-desk-analyst",
          "technical-account-manager",
          "application-support-engineer",
        ],
      },
      {
        id: "q6e",
        text: "Project delivered on time, under budget, zero angry stakeholders — pure nirvana",
        riasecScores: { R: 0, I: 0, A: 0, S: 1, E: 2, C: 2 },
        mbtiAxes: [{ dimension: "JP", pole: "left", weight: 2 }],
        roleIds: [
          "it-project-manager",
          "scrum-master",
          "program-manager",
          "pmo-analyst",
          "it-vendor-manager",
          "agile-coach",
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // SECTION 2 — THE JOY KILLERS (Q7–Q12)
  // ════════════════════════════════════════════════════════════════
  {
    id: "q7",
    section: "drains",
    sectionLabel: "The Joy Killers",
    question:
      "Which of these work scenarios would make you clock out emotionally by 11 AM?",
    description:
      "Knowing what drains you is just as important as knowing your passion — be brutally honest.",
    options: [
      {
        id: "q7a",
        text: "Copy-pasting data into Excel for the 47th time this month",
        riasecScores: { R: 0, I: 2, A: 1, S: 0, E: 1, C: 0 },
        mbtiAxes: [{ dimension: "JP", pole: "right", weight: 2 }],
        roleIds: [
          "data-scientist",
          "ml-engineer",
          "ai-research-scientist",
          "solutions-architect-associate",
          "cloud-architect",
          "product-manager",
          "business-analyst",
        ],
      },
      {
        id: "q7b",
        text: "Presenting to a new crowd every single day like a corporate stand-up comic",
        riasecScores: { R: 2, I: 2, A: 0, S: 0, E: 0, C: 1 },
        mbtiAxes: [{ dimension: "EI", pole: "right", weight: 2 }],
        roleIds: [
          "backend-developer",
          "data-engineer",
          "security-engineer",
          "database-administrator",
          "devops-engineer",
          "sre",
          "cloud-engineer",
        ],
      },
      {
        id: "q7c",
        text: "Working in complete silence for weeks — no teammates, no chai, no chaos",
        riasecScores: { R: 0, I: 0, A: 1, S: 2, E: 2, C: 0 },
        mbtiAxes: [{ dimension: "EI", pole: "left", weight: 2 }],
        roleIds: [
          "scrum-master",
          "agile-coach",
          "it-project-manager",
          "technical-account-manager",
          "product-manager",
          "digital-marketing-executive",
          "social-media-manager",
        ],
      },
      {
        id: "q7d",
        text: "Constant context-switching — never getting into the zone before the next ping",
        riasecScores: { R: 1, I: 2, A: 0, S: 0, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "JP", pole: "left", weight: 2 }],
        roleIds: [
          "data-scientist",
          "ml-engineer",
          "deep-learning-engineer",
          "ai-research-scientist",
          "computer-vision-engineer",
          "backend-developer",
        ],
      },
      {
        id: "q7e",
        text: "Untangling someone else's spaghetti code with zero documentation",
        riasecScores: { R: 0, I: 1, A: 2, S: 0, E: 0, C: 1 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 1 }],
        roleIds: [
          "solutions-architect-associate",
          "cloud-architect",
          "fullstack-developer",
          "java-developer",
          "python-developer",
          "dotnet-developer",
        ],
      },
    ],
  },

  {
    id: "q8",
    section: "drains",
    sectionLabel: "The Joy Killers",
    question:
      "Which work scenario would turn you into that one teammate who's 'working from home but not really'?",
    options: [
      {
        id: "q8a",
        text: "Vague brief, no requirements, and 'just figure it out' as the only direction",
        riasecScores: { R: 1, I: 0, A: 0, S: 1, E: 1, C: 2 },
        mbtiAxes: [{ dimension: "JP", pole: "left", weight: 2 }],
        roleIds: [
          "sap-fico-consultant",
          "sap-sd-consultant",
          "sap-mm-consultant",
          "oracle-erp-consultant",
          "it-compliance-analyst",
          "selenium-automation-engineer",
          "data-quality-analyst",
        ],
      },
      {
        id: "q8b",
        text: "A 40-page rulebook and zero room to try anything remotely creative",
        riasecScores: { R: 0, I: 1, A: 2, S: 0, E: 1, C: 0 },
        mbtiAxes: [{ dimension: "JP", pole: "right", weight: 2 }],
        roleIds: [
          "uiux-designer",
          "motion-designer",
          "graphic-designer",
          "product-designer",
          "brand-designer",
          "content-writer",
          "video-editor",
        ],
      },
      {
        id: "q8c",
        text: "Being stuck on other people's fires all day with no time for your own work",
        riasecScores: { R: 2, I: 2, A: 1, S: 0, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "EI", pole: "right", weight: 1 }],
        roleIds: [
          "data-engineer",
          "backend-developer",
          "ml-engineer",
          "data-scientist",
          "cloud-engineer",
          "security-engineer",
        ],
      },
      {
        id: "q8d",
        text: "Back-to-back meetings with no slot for actual deep work",
        riasecScores: { R: 1, I: 2, A: 1, S: 0, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "EI", pole: "right", weight: 2 }],
        roleIds: [
          "data-scientist",
          "ai-research-scientist",
          "deep-learning-engineer",
          "backend-developer",
          "sre",
          "security-engineer",
          "database-administrator",
        ],
      },
      {
        id: "q8e",
        text: "Your work ships, but you never find out if it helped anyone at all",
        riasecScores: { R: 0, I: 0, A: 1, S: 2, E: 1, C: 0 },
        mbtiAxes: [{ dimension: "TF", pole: "right", weight: 2 }],
        roleIds: [
          "uiux-designer",
          "product-manager",
          "frontend-developer",
          "technical-account-manager",
          "digital-marketing-executive",
          "content-writer",
        ],
      },
    ],
  },

  {
    id: "q9",
    section: "drains",
    sectionLabel: "The Joy Killers",
    question:
      "Which of these would slowly crush your soul over the next 6 months?",
    options: [
      {
        id: "q9a",
        text: "Building something that looks like it escaped from Windows XP era",
        riasecScores: { R: 0, I: 0, A: 2, S: 1, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "uiux-designer",
          "graphic-designer",
          "product-designer",
          "frontend-developer",
          "web-designer",
          "brand-designer",
          "interaction-designer",
        ],
      },
      {
        id: "q9b",
        text: "Every deep-work session hijacked by urgent Slack messages",
        riasecScores: { R: 1, I: 2, A: 0, S: 0, E: 0, C: 1 },
        mbtiAxes: [{ dimension: "JP", pole: "left", weight: 2 }],
        roleIds: [
          "data-scientist",
          "ml-engineer",
          "backend-developer",
          "ai-research-scientist",
          "devops-engineer",
          "security-engineer",
        ],
      },
      {
        id: "q9c",
        text: "Same task, same tool, same process — basically Groundhog Day, but with a laptop",
        riasecScores: { R: 0, I: 2, A: 1, S: 0, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "ml-engineer",
          "ai-research-scientist",
          "cloud-architect",
          "solutions-architect-associate",
          "data-scientist",
          "deep-learning-engineer",
          "computer-vision-engineer",
        ],
      },
      {
        id: "q9d",
        text: "Your work never touches a real human — all backend, no impact story",
        riasecScores: { R: 0, I: 0, A: 0, S: 2, E: 1, C: 0 },
        mbtiAxes: [{ dimension: "TF", pole: "right", weight: 2 }],
        roleIds: [
          "it-support-engineer",
          "helpdesk-analyst",
          "change-management-analyst",
          "technical-account-manager",
          "agile-coach",
          "scrum-master",
        ],
      },
      {
        id: "q9e",
        text: "Manager wants to approve every decision — even your font choice",
        riasecScores: { R: 0, I: 1, A: 1, S: 0, E: 1, C: 0 },
        mbtiAxes: [{ dimension: "JP", pole: "right", weight: 2 }],
        roleIds: [
          "fullstack-developer",
          "product-manager",
          "uiux-designer",
          "data-scientist",
          "ml-engineer",
          "ai-research-scientist",
        ],
      },
    ],
  },

  {
    id: "q10",
    section: "drains",
    sectionLabel: "The Joy Killers",
    question:
      "In a big project, which phase would make you fake a bad network connection to skip?",
    options: [
      {
        id: "q10a",
        text: "Three-hour 'requirement gathering' calls with stakeholders who changed their minds twice",
        riasecScores: { R: 2, I: 1, A: 1, S: 0, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "EI", pole: "right", weight: 1 }],
        roleIds: [
          "backend-developer",
          "frontend-developer",
          "devops-engineer",
          "cloud-engineer",
          "sre",
          "data-engineer",
          "java-developer",
        ],
      },
      {
        id: "q10b",
        text: "Writing 400 test cases for every single edge case imaginable",
        riasecScores: { R: 1, I: 1, A: 2, S: 1, E: 1, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 1 }],
        roleIds: [
          "uiux-designer",
          "product-manager",
          "digital-marketing-executive",
          "data-scientist",
          "ml-engineer",
          "graphic-designer",
        ],
      },
      {
        id: "q10c",
        text: "Writing post-launch documentation that literally no one will read",
        riasecScores: { R: 2, I: 1, A: 1, S: 0, E: 1, C: 0 },
        mbtiAxes: [{ dimension: "JP", pole: "right", weight: 1 }],
        roleIds: [
          "devops-engineer",
          "backend-developer",
          "cloud-engineer",
          "security-engineer",
          "network-engineer",
          "fullstack-developer",
        ],
      },
      {
        id: "q10d",
        text: "Chasing five teams for blockers like a professional herder of cats",
        riasecScores: { R: 2, I: 2, A: 1, S: 0, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "EI", pole: "right", weight: 2 }],
        roleIds: [
          "backend-developer",
          "data-scientist",
          "ml-engineer",
          "devops-engineer",
          "sre",
          "security-engineer",
        ],
      },
      {
        id: "q10e",
        text: "Monitoring dashboards and fixing boring post-launch bugs forever",
        riasecScores: { R: 0, I: 0, A: 2, S: 1, E: 2, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "uiux-designer",
          "product-manager",
          "content-strategist",
          "graphic-designer",
          "brand-designer",
          "digital-marketing-executive",
        ],
      },
    ],
  },

  {
    id: "q11",
    section: "drains",
    sectionLabel: "The Joy Killers",
    question:
      "Which work environment would slowly turn you into someone who 'replies to emails only on Tuesdays'?",
    options: [
      {
        id: "q11a",
        text: "Loud open office where someone's always on a call near your desk",
        riasecScores: { R: 1, I: 2, A: 1, S: 0, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "EI", pole: "right", weight: 2 }],
        roleIds: [
          "data-scientist",
          "backend-developer",
          "ml-engineer",
          "ai-research-scientist",
          "security-engineer",
          "database-administrator",
        ],
      },
      {
        id: "q11b",
        text: "Solo island — no teammates, no banter, just you and your screen for months",
        riasecScores: { R: 0, I: 0, A: 1, S: 2, E: 2, C: 0 },
        mbtiAxes: [{ dimension: "EI", pole: "left", weight: 2 }],
        roleIds: [
          "scrum-master",
          "product-manager",
          "digital-marketing-executive",
          "agile-coach",
          "technical-account-manager",
          "it-project-manager",
        ],
      },
      {
        id: "q11c",
        text: "Startup chaos — OKRs change weekly, priorities shift daily, strategy is a vibe",
        riasecScores: { R: 1, I: 0, A: 0, S: 1, E: 0, C: 2 },
        mbtiAxes: [{ dimension: "JP", pole: "left", weight: 2 }],
        roleIds: [
          "sap-fico-consultant",
          "sap-sd-consultant",
          "database-administrator",
          "itil-process-manager",
          "it-compliance-analyst",
          "it-risk-analyst",
        ],
      },
      {
        id: "q11d",
        text: "Corporate maze — 6 approvals to change a button colour, 3 months to ship",
        riasecScores: { R: 0, I: 1, A: 2, S: 0, E: 1, C: 0 },
        mbtiAxes: [{ dimension: "JP", pole: "right", weight: 2 }],
        roleIds: [
          "product-manager",
          "fullstack-developer",
          "uiux-designer",
          "growth-hacker",
          "digital-marketing-executive",
          "agile-coach",
        ],
      },
      {
        id: "q11e",
        text: "Pure execution mode — just follow the spec, no opinion allowed, no strategy input",
        riasecScores: { R: 0, I: 2, A: 1, S: 0, E: 2, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "solutions-architect-associate",
          "cloud-architect",
          "product-manager",
          "it-consultant",
          "business-analyst",
          "data-scientist",
        ],
      },
    ],
  },

  {
    id: "q12",
    section: "drains",
    sectionLabel: "The Joy Killers",
    question:
      "Which piece of feedback from your manager would hit hardest — like really sting?",
    options: [
      {
        id: "q12a",
        text: '"Your code looks like it was written at 3 AM the night before submission"',
        riasecScores: { R: 2, I: 2, A: 0, S: 0, E: 0, C: 1 },
        mbtiAxes: [{ dimension: "TF", pole: "left", weight: 1 }],
        roleIds: [
          "backend-developer",
          "frontend-developer",
          "fullstack-developer",
          "java-developer",
          "python-developer",
          "dotnet-developer",
        ],
      },
      {
        id: "q12b",
        text: '"Users said the design was confusing — like IKEA instructions, but worse"',
        riasecScores: { R: 0, I: 0, A: 2, S: 1, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "uiux-designer",
          "product-designer",
          "graphic-designer",
          "web-designer",
          "interaction-designer",
          "brand-designer",
        ],
      },
      {
        id: "q12c",
        text: '"Your analysis had a mistake that sent us chasing the wrong goal for a quarter"',
        riasecScores: { R: 0, I: 2, A: 0, S: 0, E: 0, C: 2 },
        mbtiAxes: [{ dimension: "TF", pole: "left", weight: 2 }],
        roleIds: [
          "data-analyst",
          "data-scientist",
          "bi-developer",
          "reporting-analyst",
          "data-quality-analyst",
          "marketing-analyst",
        ],
      },
      {
        id: "q12d",
        text: '"The client asked that you not be on their account anymore. Communication issues."',
        riasecScores: { R: 0, I: 0, A: 0, S: 2, E: 2, C: 0 },
        mbtiAxes: [{ dimension: "EI", pole: "left", weight: 2 }],
        roleIds: [
          "sap-fico-consultant",
          "oracle-erp-consultant",
          "solutions-architect-associate",
          "technical-account-manager",
          "it-consultant",
          "pre-sales-consultant",
        ],
      },
      {
        id: "q12e",
        text: '"The sprint ended, nothing shipped, and nobody seems to know what happened"',
        riasecScores: { R: 0, I: 0, A: 0, S: 0, E: 2, C: 2 },
        mbtiAxes: [{ dimension: "JP", pole: "left", weight: 2 }],
        roleIds: [
          "it-project-manager",
          "scrum-master",
          "program-manager",
          "pmo-analyst",
          "it-vendor-manager",
          "agile-coach",
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // SECTION 3 — INSIDE YOUR BRAIN (Q13–Q18)
  // ════════════════════════════════════════════════════════════════
  {
    id: "q13",
    section: "thinking",
    sectionLabel: "Inside Your Brain",
    question:
      "Where do your best ideas actually come from? (Not the LinkedIn answer — the real one)",
    description:
      "This helps us understand how you think and where your mental superpower kicks in.",
    options: [
      {
        id: "q13a",
        text: "Talking it out loud with the team — I think better when I'm talking",
        riasecScores: { R: 0, I: 0, A: 1, S: 2, E: 2, C: 0 },
        mbtiAxes: [{ dimension: "EI", pole: "left", weight: 2 }],
        roleIds: [
          "scrum-master",
          "agile-coach",
          "it-project-manager",
          "product-manager",
          "digital-marketing-executive",
          "change-management-analyst",
        ],
      },
      {
        id: "q13b",
        text: "Quiet solo thinking — I've usually solved it before I even tell anyone",
        riasecScores: { R: 1, I: 2, A: 0, S: 0, E: 0, C: 1 },
        mbtiAxes: [{ dimension: "EI", pole: "right", weight: 2 }],
        roleIds: [
          "data-scientist",
          "backend-developer",
          "technical-writer",
          "devops-engineer",
          "ml-engineer",
          "security-engineer",
        ],
      },
      {
        id: "q13c",
        text: "Deep prep mode — I come to meetings fully loaded with a POV",
        riasecScores: { R: 0, I: 2, A: 0, S: 0, E: 1, C: 1 },
        mbtiAxes: [
          { dimension: "EI", pole: "right", weight: 1 },
          { dimension: "JP", pole: "left", weight: 1 },
        ],
        roleIds: [
          "solutions-architect-associate",
          "cloud-architect",
          "it-consultant",
          "business-analyst",
          "it-risk-analyst",
        ],
      },
      {
        id: "q13d",
        text: "Half-baked idea + whiteboard + willing victim to talk at = genius emerges",
        riasecScores: { R: 0, I: 0, A: 1, S: 1, E: 2, C: 0 },
        mbtiAxes: [
          { dimension: "EI", pole: "left", weight: 2 },
          { dimension: "JP", pole: "right", weight: 1 },
        ],
        roleIds: [
          "product-manager",
          "pre-sales-consultant",
          "digital-marketing-executive",
          "growth-hacker",
          "it-consultant",
        ],
      },
      {
        id: "q13e",
        text: "Honestly, it depends — I read the room and adapt. I'm a social chameleon.",
        riasecScores: { R: 1, I: 1, A: 1, S: 1, E: 1, C: 1 },
        mbtiAxes: [],
        roleIds: [
          "fullstack-developer",
          "business-analyst",
          "product-designer",
          "technical-account-manager",
          "data-analyst",
        ],
      },
    ],
  },

  {
    id: "q14",
    section: "thinking",
    sectionLabel: "Inside Your Brain",
    question:
      "New task just landed in your inbox. What does your brain do first?",
    options: [
      {
        id: "q14a",
        text: "Check how others solved this before and follow the industry playbook",
        riasecScores: { R: 1, I: 0, A: 0, S: 0, E: 0, C: 2 },
        mbtiAxes: [{ dimension: "SN", pole: "left", weight: 2 }],
        roleIds: [
          "sap-fico-consultant",
          "oracle-erp-consultant",
          "sap-mm-consultant",
          "qa-engineer",
          "system-administrator",
          "sap-basis-admin",
          "itil-process-manager",
        ],
      },
      {
        id: "q14b",
        text: "Question why this is being done at all — then imagine a completely new approach",
        riasecScores: { R: 0, I: 2, A: 1, S: 0, E: 1, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "ai-research-scientist",
          "product-manager",
          "uiux-designer",
          "ai-ethics-researcher",
          "data-scientist",
        ],
      },
      {
        id: "q14c",
        text: "Read every requirement, spec, and doc before touching a single thing",
        riasecScores: { R: 0, I: 1, A: 0, S: 0, E: 0, C: 2 },
        mbtiAxes: [
          { dimension: "SN", pole: "left", weight: 1 },
          { dimension: "JP", pole: "left", weight: 1 },
        ],
        roleIds: [
          "technical-writer",
          "business-analyst",
          "it-compliance-analyst",
          "data-governance-analyst",
          "it-risk-analyst",
        ],
      },
      {
        id: "q14d",
        text: "Dive in headfirst and learn by breaking things (then fix them)",
        riasecScores: { R: 1, I: 1, A: 1, S: 0, E: 1, C: 0 },
        mbtiAxes: [
          { dimension: "SN", pole: "right", weight: 1 },
          { dimension: "JP", pole: "right", weight: 2 },
        ],
        roleIds: [
          "ml-engineer",
          "fullstack-developer",
          "growth-hacker",
          "frontend-developer",
          "react-native-developer",
        ],
      },
      {
        id: "q14e",
        text: "Ask 'has anyone solved something similar in a totally different field?'",
        riasecScores: { R: 0, I: 2, A: 1, S: 0, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "solutions-architect-associate",
          "data-scientist",
          "it-consultant",
          "cloud-architect",
          "ai-ethics-researcher",
        ],
      },
    ],
  },

  {
    id: "q15",
    section: "thinking",
    sectionLabel: "Inside Your Brain",
    question: "Tough call to make. Which voice in your head wins?",
    options: [
      {
        id: "q15a",
        text: "The spreadsheet voice: 'Show me the data. All of it.'",
        riasecScores: { R: 1, I: 2, A: 0, S: 0, E: 0, C: 1 },
        mbtiAxes: [{ dimension: "TF", pole: "left", weight: 2 }],
        roleIds: [
          "data-analyst",
          "sre",
          "qa-engineer",
          "it-risk-analyst",
          "business-analyst",
          "reporting-analyst",
        ],
      },
      {
        id: "q15b",
        text: "The empath voice: 'How is this going to affect the people involved?'",
        riasecScores: { R: 0, I: 0, A: 1, S: 2, E: 1, C: 0 },
        mbtiAxes: [{ dimension: "TF", pole: "right", weight: 2 }],
        roleIds: [
          "agile-coach",
          "scrum-master",
          "change-management-analyst",
          "it-support-engineer",
          "technical-account-manager",
        ],
      },
      {
        id: "q15c",
        text: "The engineer voice: 'What's the most efficient solution, feelings aside?'",
        riasecScores: { R: 2, I: 1, A: 0, S: 0, E: 0, C: 1 },
        mbtiAxes: [{ dimension: "TF", pole: "left", weight: 1 }],
        roleIds: [
          "devops-engineer",
          "cloud-engineer",
          "platform-engineer",
          "kubernetes-admin",
          "sre",
          "aws-solutions-architect",
        ],
      },
      {
        id: "q15d",
        text: "The culture voice: 'Will this still feel right 2 years from now?'",
        riasecScores: { R: 0, I: 0, A: 1, S: 2, E: 1, C: 0 },
        mbtiAxes: [
          { dimension: "TF", pole: "right", weight: 1 },
          { dimension: "SN", pole: "right", weight: 1 },
        ],
        roleIds: [
          "scrum-master",
          "product-manager",
          "agile-coach",
          "it-project-manager",
          "change-management-analyst",
        ],
      },
      {
        id: "q15e",
        text: "The risk voice: 'What's the worst case, and how do we prevent it?'",
        riasecScores: { R: 0, I: 1, A: 0, S: 0, E: 1, C: 2 },
        mbtiAxes: [
          { dimension: "TF", pole: "left", weight: 1 },
          { dimension: "JP", pole: "left", weight: 1 },
        ],
        roleIds: [
          "it-risk-analyst",
          "it-compliance-analyst",
          "it-audit-specialist",
          "risk-analytics-specialist",
          "fraud-analyst",
        ],
      },
    ],
  },

  {
    id: "q16",
    section: "thinking",
    sectionLabel: "Inside Your Brain",
    question:
      "Be honest — which describes how you actually like to work, not how you claim to work?",
    options: [
      {
        id: "q16a",
        text: "Detailed plan first, then execute. Surprises are for birthdays, not sprints.",
        riasecScores: { R: 1, I: 0, A: 0, S: 0, E: 1, C: 2 },
        mbtiAxes: [{ dimension: "JP", pole: "left", weight: 2 }],
        roleIds: [
          "it-project-manager",
          "sap-fico-consultant",
          "oracle-erp-consultant",
          "sap-mm-consultant",
          "it-procurement-specialist",
        ],
      },
      {
        id: "q16b",
        text: "Start somewhere, see what breaks, pivot hard. Plans are just opening bids.",
        riasecScores: { R: 0, I: 1, A: 1, S: 0, E: 1, C: 0 },
        mbtiAxes: [{ dimension: "JP", pole: "right", weight: 2 }],
        roleIds: [
          "product-manager",
          "agile-coach",
          "growth-hacker",
          "digital-marketing-executive",
          "uiux-designer",
        ],
      },
      {
        id: "q16c",
        text: "Framework upfront, freestyle within it. Structure with room to breathe.",
        riasecScores: { R: 1, I: 1, A: 0, S: 1, E: 1, C: 1 },
        mbtiAxes: [{ dimension: "JP", pole: "left", weight: 1 }],
        roleIds: [
          "scrum-master",
          "solutions-architect-associate",
          "it-project-manager",
          "business-analyst",
        ],
      },
      {
        id: "q16d",
        text: "Full autonomy. Tell me the goal and get out of my way.",
        riasecScores: { R: 0, I: 2, A: 1, S: 0, E: 0, C: 0 },
        mbtiAxes: [
          { dimension: "JP", pole: "right", weight: 2 },
          { dimension: "EI", pole: "right", weight: 1 },
        ],
        roleIds: [
          "ai-research-scientist",
          "ml-engineer",
          "data-scientist",
          "technical-writer",
          "security-engineer",
        ],
      },
      {
        id: "q16e",
        text: "Plan together, execute solo. Best of both worlds.",
        riasecScores: { R: 1, I: 1, A: 0, S: 1, E: 1, C: 0 },
        mbtiAxes: [
          { dimension: "EI", pole: "right", weight: 1 },
          { dimension: "JP", pole: "left", weight: 1 },
        ],
        roleIds: [
          "backend-developer",
          "data-engineer",
          "fullstack-developer",
          "ml-engineer",
          "devops-engineer",
        ],
      },
    ],
  },

  {
    id: "q17",
    section: "thinking",
    sectionLabel: "Inside Your Brain",
    question:
      "Over a typical month at work, which one would genuinely charge your batteries?",
    options: [
      {
        id: "q17a",
        text: "Running a workshop where 20 people leave energised and aligned",
        riasecScores: { R: 0, I: 0, A: 1, S: 2, E: 2, C: 0 },
        mbtiAxes: [{ dimension: "EI", pole: "left", weight: 2 }],
        roleIds: [
          "agile-coach",
          "scrum-master",
          "pre-sales-consultant",
          "change-management-analyst",
          "digital-marketing-executive",
        ],
      },
      {
        id: "q17b",
        text: "Taking complete ownership of a hard feature and shipping it solo",
        riasecScores: { R: 1, I: 2, A: 0, S: 0, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "EI", pole: "right", weight: 2 }],
        roleIds: [
          "backend-developer",
          "data-engineer",
          "security-engineer",
          "ml-engineer",
          "devops-engineer",
        ],
      },
      {
        id: "q17c",
        text: "Juggling five tracks and never letting anything slip — it's a sport",
        riasecScores: { R: 0, I: 0, A: 0, S: 1, E: 2, C: 2 },
        mbtiAxes: [
          { dimension: "EI", pole: "left", weight: 1 },
          { dimension: "JP", pole: "left", weight: 2 },
        ],
        roleIds: [
          "program-manager",
          "it-portfolio-manager",
          "pmo-analyst",
          "it-project-manager",
          "it-vendor-manager",
        ],
      },
      {
        id: "q17d",
        text: "Going so deep into a hard problem that you lose track of time (and lunch)",
        riasecScores: { R: 0, I: 2, A: 0, S: 0, E: 0, C: 0 },
        mbtiAxes: [
          { dimension: "EI", pole: "right", weight: 1 },
          { dimension: "SN", pole: "right", weight: 2 },
        ],
        roleIds: [
          "ai-research-scientist",
          "ml-engineer",
          "data-scientist",
          "deep-learning-engineer",
          "computer-vision-engineer",
          "security-engineer",
        ],
      },
      {
        id: "q17e",
        text: "Being the one person who makes design, tech, and business actually talk to each other",
        riasecScores: { R: 0, I: 1, A: 0, S: 2, E: 2, C: 1 },
        mbtiAxes: [{ dimension: "EI", pole: "left", weight: 1 }],
        roleIds: [
          "product-manager",
          "integration-consultant",
          "sap-fico-consultant",
          "business-analyst",
          "it-consultant",
        ],
      },
    ],
  },

  {
    id: "q18",
    section: "thinking",
    sectionLabel: "Inside Your Brain",
    question:
      "Five years from now, which of these career stories would you proudly tell at a reunion?",
    options: [
      {
        id: "q18a",
        text: "I'm the go-to expert in my field — people tag me in questions on Twitter",
        riasecScores: { R: 1, I: 2, A: 0, S: 0, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "left", weight: 1 }],
        roleIds: [
          "solutions-architect-associate",
          "cloud-architect",
          "data-scientist",
          "ai-research-scientist",
          "security-engineer",
          "database-administrator",
        ],
      },
      {
        id: "q18b",
        text: "I co-founded something, raised funding, and live in a state of controlled chaos",
        riasecScores: { R: 0, I: 1, A: 1, S: 0, E: 2, C: 0 },
        mbtiAxes: [
          { dimension: "SN", pole: "right", weight: 2 },
          { dimension: "EI", pole: "left", weight: 1 },
        ],
        roleIds: [
          "product-manager",
          "ai-product-manager",
          "growth-hacker",
          "digital-marketing-executive",
          "it-consultant",
        ],
      },
      {
        id: "q18c",
        text: "I streamlined operations so well the company saved crores annually",
        riasecScores: { R: 0, I: 1, A: 0, S: 0, E: 1, C: 2 },
        mbtiAxes: [{ dimension: "SN", pole: "left", weight: 1 }],
        roleIds: [
          "business-process-analyst",
          "oracle-erp-consultant",
          "pmo-analyst",
          "itil-process-manager",
          "it-compliance-analyst",
          "sap-fico-consultant",
        ],
      },
      {
        id: "q18d",
        text: "I designed products that millions use every day and don't even notice (in a good way)",
        riasecScores: { R: 0, I: 0, A: 2, S: 1, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "uiux-designer",
          "content-strategist",
          "technical-writer",
          "product-designer",
          "brand-designer",
        ],
      },
      {
        id: "q18e",
        text: "I'm working on problems at a scale that affects real people's real lives",
        riasecScores: { R: 0, I: 2, A: 0, S: 1, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "ai-research-scientist",
          "data-scientist",
          "ai-ethics-researcher",
          "ml-engineer",
          "computer-vision-engineer",
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // SECTION 4 — IT'S 3 PM ON A MONDAY... (Q19–Q25)
  // ════════════════════════════════════════════════════════════════
  {
    id: "q19",
    section: "scenarios",
    sectionLabel: "It's 3 PM on a Monday...",
    question:
      'PM drops a bomb in Slack: "We need to handle 10x users by next quarter." Your first instinct?',
    description:
      "Pick the closest to what you'd actually think — not what a 'good team player' would say.",
    options: [
      {
        id: "q19a",
        text: "Open the architecture diagram. The bottlenecks reveal themselves.",
        riasecScores: { R: 2, I: 2, A: 0, S: 0, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "TF", pole: "left", weight: 2 }],
        roleIds: [
          "solutions-architect-associate",
          "backend-developer",
          "sre",
          "cloud-architect",
          "devops-engineer",
          "cloud-engineer",
        ],
      },
      {
        id: "q19b",
        text: "Talk to users first — what does 10x actually mean for them?",
        riasecScores: { R: 0, I: 1, A: 0, S: 2, E: 1, C: 0 },
        mbtiAxes: [
          { dimension: "TF", pole: "right", weight: 1 },
          { dimension: "SN", pole: "right", weight: 1 },
        ],
        roleIds: [
          "product-manager",
          "uiux-designer",
          "technical-account-manager",
          "business-analyst",
          "interaction-designer",
        ],
      },
      {
        id: "q19c",
        text: "Pull up Notion and start mapping the timeline, owners, and milestones",
        riasecScores: { R: 0, I: 0, A: 0, S: 0, E: 2, C: 2 },
        mbtiAxes: [{ dimension: "JP", pole: "left", weight: 2 }],
        roleIds: [
          "it-project-manager",
          "program-manager",
          "scrum-master",
          "pmo-analyst",
          "agile-coach",
        ],
      },
      {
        id: "q19d",
        text: "Sketch out what the UI needs to feel like at massive scale",
        riasecScores: { R: 0, I: 1, A: 2, S: 1, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "uiux-designer",
          "frontend-developer",
          "product-designer",
          "interaction-designer",
          "web-designer",
        ],
      },
      {
        id: "q19e",
        text: "Ask: 'Is 10x users even the right problem we should be solving?'",
        riasecScores: { R: 0, I: 2, A: 0, S: 0, E: 1, C: 0 },
        mbtiAxes: [
          { dimension: "TF", pole: "left", weight: 1 },
          { dimension: "SN", pole: "right", weight: 2 },
        ],
        roleIds: [
          "data-analyst",
          "business-analyst",
          "product-manager",
          "ai-product-manager",
          "it-consultant",
        ],
      },
    ],
  },

  {
    id: "q20",
    section: "scenarios",
    sectionLabel: "It's 3 PM on a Monday...",
    question:
      "ALERT: Critical system is down. Users are screaming. What do you actually do?",
    options: [
      {
        id: "q20a",
        text: "Logs open, metrics up — find the root cause before anyone finishes typing in Slack",
        riasecScores: { R: 2, I: 2, A: 0, S: 0, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "TF", pole: "left", weight: 2 }],
        roleIds: [
          "sre",
          "devops-engineer",
          "backend-developer",
          "network-engineer",
          "production-support-engineer",
          "l2-support-engineer",
        ],
      },
      {
        id: "q20b",
        text: "Get everyone on a call, assign owners, and manage the chaos so others can focus",
        riasecScores: { R: 0, I: 0, A: 0, S: 1, E: 2, C: 2 },
        mbtiAxes: [
          { dimension: "EI", pole: "left", weight: 2 },
          { dimension: "JP", pole: "left", weight: 1 },
        ],
        roleIds: [
          "it-service-manager",
          "it-project-manager",
          "program-manager",
          "scrum-master",
          "itil-process-manager",
        ],
      },
      {
        id: "q20c",
        text: "Start documenting the incident timeline in real time — someone has to",
        riasecScores: { R: 0, I: 1, A: 0, S: 1, E: 0, C: 2 },
        mbtiAxes: [{ dimension: "JP", pole: "left", weight: 1 }],
        roleIds: [
          "technical-writer",
          "it-audit-specialist",
          "it-compliance-analyst",
          "it-risk-analyst",
          "confluence-administrator",
        ],
      },
      {
        id: "q20d",
        text: "Sort affected users by urgency and keep them updated so they don't panic",
        riasecScores: { R: 0, I: 0, A: 0, S: 2, E: 2, C: 0 },
        mbtiAxes: [
          { dimension: "EI", pole: "left", weight: 1 },
          { dimension: "TF", pole: "right", weight: 1 },
        ],
        roleIds: [
          "it-support-engineer",
          "helpdesk-analyst",
          "service-desk-analyst",
          "technical-account-manager",
          "application-support-engineer",
        ],
      },
      {
        id: "q20e",
        text: "Already writing the post-mortem template so this never happens again",
        riasecScores: { R: 0, I: 2, A: 0, S: 0, E: 0, C: 2 },
        mbtiAxes: [{ dimension: "TF", pole: "left", weight: 1 }],
        roleIds: [
          "sre",
          "it-compliance-analyst",
          "qa-engineer",
          "it-risk-analyst",
          "itil-process-manager",
        ],
      },
    ],
  },

  {
    id: "q21",
    section: "scenarios",
    sectionLabel: "It's 3 PM on a Monday...",
    question:
      "Uh oh — client says they're unhappy with the software you delivered. Your move?",
    options: [
      {
        id: "q21a",
        text: "Pull up the logs and start proving exactly what happened (technically)",
        riasecScores: { R: 2, I: 2, A: 0, S: 0, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "TF", pole: "left", weight: 2 }],
        roleIds: [
          "backend-developer",
          "qa-engineer",
          "sre",
          "production-support-engineer",
          "l2-support-engineer",
        ],
      },
      {
        id: "q21b",
        text: "Listen deeply, empathise, and translate their pain into a proper fix",
        riasecScores: { R: 0, I: 1, A: 0, S: 2, E: 2, C: 0 },
        mbtiAxes: [
          { dimension: "TF", pole: "right", weight: 2 },
          { dimension: "EI", pole: "left", weight: 1 },
        ],
        roleIds: [
          "technical-account-manager",
          "business-analyst",
          "product-manager",
          "sap-fico-consultant",
          "it-consultant",
        ],
      },
      {
        id: "q21c",
        text: "Redesign the confusing parts — bad UX is probably the actual issue",
        riasecScores: { R: 0, I: 0, A: 2, S: 1, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "uiux-designer",
          "product-designer",
          "frontend-developer",
          "interaction-designer",
          "web-designer",
        ],
      },
      {
        id: "q21d",
        text: "Do a full process audit — find exactly where the expectation gap happened",
        riasecScores: { R: 0, I: 1, A: 0, S: 0, E: 1, C: 2 },
        mbtiAxes: [{ dimension: "TF", pole: "left", weight: 1 }],
        roleIds: [
          "business-process-analyst",
          "scrum-master",
          "it-project-manager",
          "agile-coach",
          "it-audit-specialist",
        ],
      },
      {
        id: "q21e",
        text: "Ship the fastest possible patch and ask questions while it's deploying",
        riasecScores: { R: 2, I: 1, A: 0, S: 0, E: 0, C: 1 },
        mbtiAxes: [{ dimension: "JP", pole: "right", weight: 1 }],
        roleIds: [
          "backend-developer",
          "devops-engineer",
          "fullstack-developer",
          "production-support-engineer",
          "sre",
        ],
      },
    ],
  },

  {
    id: "q22",
    section: "scenarios",
    sectionLabel: "It's 3 PM on a Monday...",
    question:
      "Big announcement: your company is building an AI recommendation feature. You raise your hand for…",
    options: [
      {
        id: "q22a",
        text: "Training the model, tuning params, obsessing over precision and recall",
        riasecScores: { R: 1, I: 2, A: 0, S: 0, E: 0, C: 1 },
        mbtiAxes: [{ dimension: "TF", pole: "left", weight: 2 }],
        roleIds: [
          "ml-engineer",
          "data-scientist",
          "ai-research-scientist",
          "recommendation-engineer",
          "deep-learning-engineer",
        ],
      },
      {
        id: "q22b",
        text: "Defining what the feature should do and what 'good' actually looks like",
        riasecScores: { R: 0, I: 1, A: 1, S: 1, E: 2, C: 0 },
        mbtiAxes: [
          { dimension: "SN", pole: "right", weight: 1 },
          { dimension: "EI", pole: "left", weight: 1 },
        ],
        roleIds: [
          "product-manager",
          "ai-product-manager",
          "solutions-architect-associate",
          "business-analyst",
          "it-consultant",
        ],
      },
      {
        id: "q22c",
        text: "Designing how users actually see and interact with the recommendations",
        riasecScores: { R: 0, I: 0, A: 2, S: 1, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "uiux-designer",
          "product-designer",
          "interaction-designer",
          "frontend-developer",
        ],
      },
      {
        id: "q22d",
        text: "Building the data pipelines that make the whole thing possible",
        riasecScores: { R: 2, I: 2, A: 0, S: 0, E: 0, C: 1 },
        mbtiAxes: [{ dimension: "EI", pole: "right", weight: 1 }],
        roleIds: [
          "data-engineer",
          "mlops-engineer",
          "backend-developer",
          "etl-developer",
          "data-warehouse-engineer",
        ],
      },
      {
        id: "q22e",
        text: "Writing about it, announcing it, and gathering early user reactions",
        riasecScores: { R: 0, I: 0, A: 1, S: 2, E: 2, C: 0 },
        mbtiAxes: [{ dimension: "EI", pole: "left", weight: 2 }],
        roleIds: [
          "digital-marketing-executive",
          "technical-account-manager",
          "technical-writer",
          "product-manager",
        ],
      },
    ],
  },

  {
    id: "q23",
    section: "scenarios",
    sectionLabel: "It's 3 PM on a Monday...",
    question:
      "Your company is rolling out a new ERP system. Everyone's slightly terrified. You naturally step up to…",
    options: [
      {
        id: "q23a",
        text: "Configure the modules so they actually match how the business works",
        riasecScores: { R: 1, I: 1, A: 0, S: 0, E: 0, C: 2 },
        mbtiAxes: [{ dimension: "SN", pole: "left", weight: 2 }],
        roleIds: [
          "sap-fico-consultant",
          "sap-sd-consultant",
          "sap-mm-consultant",
          "oracle-erp-consultant",
          "salesforce-developer",
          "servicenow-developer",
        ],
      },
      {
        id: "q23b",
        text: "Train everyone — from the director to the intern — until they're confident",
        riasecScores: { R: 0, I: 0, A: 1, S: 2, E: 1, C: 1 },
        mbtiAxes: [{ dimension: "EI", pole: "left", weight: 2 }],
        roleIds: [
          "agile-coach",
          "change-management-analyst",
          "it-project-manager",
          "technical-writer",
          "servicenow-administrator",
        ],
      },
      {
        id: "q23c",
        text: "Map current vs. future workflows and find every single gap",
        riasecScores: { R: 0, I: 1, A: 0, S: 0, E: 1, C: 2 },
        mbtiAxes: [{ dimension: "TF", pole: "left", weight: 1 }],
        roleIds: [
          "business-process-analyst",
          "business-analyst",
          "sap-fico-consultant",
          "it-compliance-analyst",
        ],
      },
      {
        id: "q23d",
        text: "Break it before go-live — hunt every edge case until it's bulletproof",
        riasecScores: { R: 1, I: 1, A: 0, S: 0, E: 0, C: 2 },
        mbtiAxes: [{ dimension: "JP", pole: "left", weight: 2 }],
        roleIds: [
          "qa-engineer",
          "sap-basis-admin",
          "it-audit-specialist",
          "oracle-erp-consultant",
          "selenium-automation-engineer",
        ],
      },
      {
        id: "q23e",
        text: "Keep the whole project on rails and make sure nobody misses a deadline",
        riasecScores: { R: 0, I: 0, A: 0, S: 1, E: 2, C: 2 },
        mbtiAxes: [
          { dimension: "EI", pole: "left", weight: 1 },
          { dimension: "JP", pole: "left", weight: 2 },
        ],
        roleIds: [
          "it-project-manager",
          "program-manager",
          "pmo-analyst",
          "it-vendor-manager",
        ],
      },
    ],
  },

  {
    id: "q24",
    section: "scenarios",
    sectionLabel: "It's 3 PM on a Monday...",
    question:
      "You have 6 months, zero distractions, and a good laptop. What do you become?",
    options: [
      {
        id: "q24a",
        text: "A dangerous developer — one language or framework, mastered completely",
        riasecScores: { R: 1, I: 2, A: 0, S: 0, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "left", weight: 1 }],
        roleIds: [
          "frontend-developer",
          "backend-developer",
          "fullstack-developer",
          "react-native-developer",
          "flutter-developer",
          "java-developer",
          "python-developer",
        ],
      },
      {
        id: "q24b",
        text: "An AI engineer who can actually build and ship real models",
        riasecScores: { R: 0, I: 2, A: 0, S: 0, E: 0, C: 1 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "ml-engineer",
          "ai-research-scientist",
          "data-scientist",
          "nlp-engineer",
          "deep-learning-engineer",
          "computer-vision-engineer",
        ],
      },
      {
        id: "q24c",
        text: "A cloud and DevOps expert who makes infrastructure look effortless",
        riasecScores: { R: 2, I: 1, A: 0, S: 0, E: 0, C: 1 },
        mbtiAxes: [{ dimension: "JP", pole: "left", weight: 1 }],
        roleIds: [
          "cloud-engineer",
          "devops-engineer",
          "sre",
          "kubernetes-admin",
          "aws-solutions-architect",
          "gcp-engineer",
        ],
      },
      {
        id: "q24d",
        text: "A designer who actually understands human psychology, not just Figma",
        riasecScores: { R: 0, I: 1, A: 2, S: 1, E: 0, C: 0 },
        mbtiAxes: [
          { dimension: "SN", pole: "right", weight: 1 },
          { dimension: "TF", pole: "right", weight: 1 },
        ],
        roleIds: [
          "uiux-designer",
          "product-designer",
          "interaction-designer",
          "design-systems-manager",
        ],
      },
      {
        id: "q24e",
        text: "A BI and data analyst who turns raw numbers into decision-making gold",
        riasecScores: { R: 0, I: 2, A: 0, S: 0, E: 0, C: 2 },
        mbtiAxes: [{ dimension: "TF", pole: "left", weight: 2 }],
        roleIds: [
          "data-analyst",
          "bi-developer",
          "reporting-analyst",
          "power-bi-developer",
          "tableau-developer",
          "data-quality-analyst",
        ],
      },
    ],
  },

  {
    id: "q25",
    section: "scenarios",
    sectionLabel: "It's 3 PM on a Monday...",
    question:
      "It's 2031. You bump into your college batch at a reunion. What's your story?",
    options: [
      {
        id: "q25a",
        text: "I architect systems that handle crores of users — and they don't crash",
        riasecScores: { R: 2, I: 2, A: 0, S: 0, E: 1, C: 0 },
        mbtiAxes: [{ dimension: "EI", pole: "right", weight: 1 }],
        roleIds: [
          "solutions-architect-associate",
          "cloud-architect",
          "backend-developer",
          "devops-engineer",
          "sre",
        ],
      },
      {
        id: "q25b",
        text: "I build models that help companies make smarter decisions every day",
        riasecScores: { R: 0, I: 2, A: 0, S: 0, E: 0, C: 2 },
        mbtiAxes: [{ dimension: "TF", pole: "left", weight: 2 }],
        roleIds: [
          "data-scientist",
          "ml-engineer",
          "bi-developer",
          "data-analyst",
          "ai-research-scientist",
        ],
      },
      {
        id: "q25c",
        text: "I lead teams, mentor people, and somehow ship great products on time",
        riasecScores: { R: 0, I: 0, A: 0, S: 2, E: 2, C: 0 },
        mbtiAxes: [{ dimension: "EI", pole: "left", weight: 2 }],
        roleIds: [
          "it-project-manager",
          "scrum-master",
          "product-manager",
          "agile-coach",
          "program-manager",
        ],
      },
      {
        id: "q25d",
        text: "I design experiences millions of people use and quietly love",
        riasecScores: { R: 0, I: 0, A: 2, S: 2, E: 0, C: 0 },
        mbtiAxes: [
          { dimension: "SN", pole: "right", weight: 2 },
          { dimension: "TF", pole: "right", weight: 1 },
        ],
        roleIds: [
          "uiux-designer",
          "product-designer",
          "content-strategist",
          "brand-designer",
          "interaction-designer",
        ],
      },
      {
        id: "q25e",
        text: "I consult across industries — fresh problem every month, never bored once",
        riasecScores: { R: 0, I: 1, A: 0, S: 1, E: 2, C: 1 },
        mbtiAxes: [
          { dimension: "EI", pole: "left", weight: 1 },
          { dimension: "SN", pole: "right", weight: 1 },
        ],
        roleIds: [
          "it-consultant",
          "sap-fico-consultant",
          "pre-sales-consultant",
          "oracle-erp-consultant",
          "it-risk-analyst",
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // FRESHER BONUS — CAMPUS TO CAREER (Q26–Q35)
  // ════════════════════════════════════════════════════════════════

  // --- Section: interests (Q26–Q28) ---
  {
    id: "q26",
    section: "interests",
    sectionLabel: "Your Happy Place (Work Edition)",
    question:
      "It's placement season and you're imagining your ideal first day at work. What does it look like?",
    description:
      "Forget the package for a sec — what kind of day would actually have you smiling on the metro home?",
    options: [
      {
        id: "q26a",
        text: "Getting access to a real codebase and immediately diving into 'how does this thing even work?'",
        riasecScores: { R: 2, I: 2, A: 0, S: 0, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "frontend-developer",
          "backend-developer",
          "fullstack-developer",
          "python-developer",
          "java-developer",
        ],
      },
      {
        id: "q26b",
        text: "Sitting with the design team, staring at Figma files, thinking 'I can make this better'",
        riasecScores: { R: 0, I: 0, A: 2, S: 1, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "uiux-designer",
          "product-designer",
          "graphic-designer",
          "web-designer",
          "interaction-designer",
        ],
      },
      {
        id: "q26c",
        text: "Attending a sprint planning call and immediately colour-coding your new Notion page",
        riasecScores: { R: 0, I: 0, A: 0, S: 1, E: 2, C: 2 },
        mbtiAxes: [{ dimension: "JP", pole: "left", weight: 2 }],
        roleIds: [
          "it-project-manager",
          "scrum-master",
          "business-analyst",
          "product-manager",
          "pmo-analyst",
        ],
      },
      {
        id: "q26d",
        text: "Being handed a messy dataset on Day 1 and told 'see what you find' — honestly thrilling",
        riasecScores: { R: 0, I: 2, A: 0, S: 0, E: 0, C: 2 },
        mbtiAxes: [{ dimension: "TF", pole: "left", weight: 2 }],
        roleIds: [
          "data-analyst",
          "data-scientist",
          "bi-developer",
          "reporting-analyst",
          "marketing-analyst",
        ],
      },
      {
        id: "q26e",
        text: "Shadowing a senior who explains the whole infrastructure and thinking 'I want THAT job'",
        riasecScores: { R: 2, I: 1, A: 0, S: 0, E: 0, C: 1 },
        mbtiAxes: [{ dimension: "SN", pole: "left", weight: 1 }],
        roleIds: [
          "devops-engineer",
          "cloud-engineer",
          "network-engineer",
          "sre",
          "system-administrator",
        ],
      },
    ],
  },

  {
    id: "q27",
    section: "interests",
    sectionLabel: "Your Happy Place (Work Edition)",
    question:
      "Your college hackathon team just formed. You immediately volunteer to be the person who…",
    options: [
      {
        id: "q27a",
        text: "Builds the core feature — backend logic, database, the whole shebang",
        riasecScores: { R: 2, I: 2, A: 0, S: 0, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "EI", pole: "right", weight: 1 }],
        roleIds: [
          "backend-developer",
          "fullstack-developer",
          "software-engineer",
          "python-developer",
          "java-developer",
        ],
      },
      {
        id: "q27b",
        text: "Makes the demo look jaw-dropping — because judges definitely judge the UI first",
        riasecScores: { R: 0, I: 0, A: 2, S: 1, E: 1, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "uiux-designer",
          "frontend-developer",
          "product-designer",
          "web-designer",
          "graphic-designer",
        ],
      },
      {
        id: "q27c",
        text: "Pitches the idea — grabs the mic and sells it like a startup founder at YC",
        riasecScores: { R: 0, I: 0, A: 1, S: 1, E: 2, C: 0 },
        mbtiAxes: [
          { dimension: "EI", pole: "left", weight: 2 },
          { dimension: "TF", pole: "right", weight: 1 },
        ],
        roleIds: [
          "product-manager",
          "it-consultant",
          "pre-sales-consultant",
          "business-analyst",
          "growth-hacker",
        ],
      },
      {
        id: "q27d",
        text: "Keeps everyone on track — Gantt chart ready, midnight chai ordered, zero drama",
        riasecScores: { R: 0, I: 0, A: 0, S: 1, E: 2, C: 2 },
        mbtiAxes: [{ dimension: "JP", pole: "left", weight: 2 }],
        roleIds: [
          "it-project-manager",
          "scrum-master",
          "program-manager",
          "agile-coach",
          "pmo-analyst",
        ],
      },
      {
        id: "q27e",
        text: "Finds an open-source ML model and plugs it in to make the idea actually smart",
        riasecScores: { R: 1, I: 2, A: 0, S: 0, E: 0, C: 1 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "ml-engineer",
          "data-scientist",
          "ai-research-scientist",
          "nlp-engineer",
          "recommendation-engineer",
        ],
      },
    ],
  },

  {
    id: "q28",
    section: "interests",
    sectionLabel: "Your Happy Place (Work Edition)",
    question:
      "Your resume has one slot left. What do you add to make recruiters stop scrolling?",
    options: [
      {
        id: "q28a",
        text: "A personal project: 'Built a full-stack web app from scratch — here's the GitHub link'",
        riasecScores: { R: 2, I: 2, A: 0, S: 0, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "EI", pole: "right", weight: 1 }],
        roleIds: [
          "fullstack-developer",
          "frontend-developer",
          "backend-developer",
          "react-native-developer",
          "python-developer",
        ],
      },
      {
        id: "q28b",
        text: "A Behance/Dribbble portfolio link — 10 projects, all looking like a senior designed them",
        riasecScores: { R: 0, I: 0, A: 2, S: 1, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "uiux-designer",
          "graphic-designer",
          "product-designer",
          "brand-designer",
          "motion-designer",
        ],
      },
      {
        id: "q28c",
        text: "A Kaggle notebook: 'Ranked top 15% in a real-world ML competition'",
        riasecScores: { R: 0, I: 2, A: 0, S: 0, E: 0, C: 2 },
        mbtiAxes: [{ dimension: "TF", pole: "left", weight: 2 }],
        roleIds: [
          "data-scientist",
          "ml-engineer",
          "data-analyst",
          "deep-learning-engineer",
          "computer-vision-engineer",
        ],
      },
      {
        id: "q28d",
        text: "A certification: Google Cloud / AWS / Azure — proof I can work with the real stuff",
        riasecScores: { R: 1, I: 1, A: 0, S: 0, E: 0, C: 2 },
        mbtiAxes: [{ dimension: "SN", pole: "left", weight: 1 }],
        roleIds: [
          "cloud-engineer",
          "devops-engineer",
          "aws-solutions-architect",
          "gcp-engineer",
          "azure-cloud-engineer",
        ],
      },
      {
        id: "q28e",
        text: "Campus club head: 'Led a 40-person team, organised events with 2000 attendees'",
        riasecScores: { R: 0, I: 0, A: 1, S: 2, E: 2, C: 1 },
        mbtiAxes: [
          { dimension: "EI", pole: "left", weight: 2 },
          { dimension: "JP", pole: "left", weight: 1 },
        ],
        roleIds: [
          "product-manager",
          "scrum-master",
          "agile-coach",
          "it-project-manager",
          "change-management-analyst",
        ],
      },
    ],
  },

  // --- Section: drains (Q29–Q31) ---
  {
    id: "q29",
    section: "drains",
    sectionLabel: "The Joy Killers",
    question:
      "Your summer internship manager hands you a task. Which one would have you praying for a power cut?",
    description:
      "Freshers deserve honesty too — which task makes you regret saying yes to the internship?",
    options: [
      {
        id: "q29a",
        text: "Copy 500 rows from one Excel sheet into another because 'the system doesn't support imports'",
        riasecScores: { R: 0, I: 2, A: 1, S: 0, E: 1, C: 0 },
        mbtiAxes: [{ dimension: "JP", pole: "right", weight: 2 }],
        roleIds: [
          "data-scientist",
          "ml-engineer",
          "frontend-developer",
          "backend-developer",
          "software-engineer",
        ],
      },
      {
        id: "q29b",
        text: "Write a 20-page Word document summarising meetings you didn't even attend",
        riasecScores: { R: 2, I: 1, A: 1, S: 0, E: 1, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 1 }],
        roleIds: [
          "devops-engineer",
          "cloud-engineer",
          "data-engineer",
          "backend-developer",
          "security-engineer",
        ],
      },
      {
        id: "q29c",
        text: "Sit in 4 hours of 'stakeholder alignment' calls where nothing gets decided",
        riasecScores: { R: 2, I: 2, A: 1, S: 0, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "EI", pole: "right", weight: 2 }],
        roleIds: [
          "backend-developer",
          "data-scientist",
          "ml-engineer",
          "sre",
          "devops-engineer",
        ],
      },
      {
        id: "q29d",
        text: "Test the same login form 300 times to check if the error message still appears",
        riasecScores: { R: 0, I: 1, A: 2, S: 1, E: 1, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "uiux-designer",
          "product-manager",
          "data-scientist",
          "ml-engineer",
          "graphic-designer",
        ],
      },
      {
        id: "q29e",
        text: "Research competitors all day alone, with no feedback, and no idea if it matters",
        riasecScores: { R: 0, I: 0, A: 1, S: 2, E: 2, C: 0 },
        mbtiAxes: [{ dimension: "EI", pole: "left", weight: 2 }],
        roleIds: [
          "product-manager",
          "scrum-master",
          "digital-marketing-executive",
          "agile-coach",
          "technical-account-manager",
        ],
      },
    ],
  },

  {
    id: "q30",
    section: "drains",
    sectionLabel: "The Joy Killers",
    question:
      "Campus placement interviews are over. Which round made you want to switch to MBA prep instead?",
    options: [
      {
        id: "q30a",
        text: "The one where the interviewer wanted you to write code on paper. In pen. Without running it.",
        riasecScores: { R: 0, I: 1, A: 2, S: 1, E: 1, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 1 }],
        roleIds: [
          "uiux-designer",
          "product-manager",
          "digital-marketing-executive",
          "it-consultant",
          "business-analyst",
        ],
      },
      {
        id: "q30b",
        text: "The HR round: 'Tell me about yourself' for the 11th time in three days",
        riasecScores: { R: 1, I: 2, A: 0, S: 0, E: 0, C: 1 },
        mbtiAxes: [{ dimension: "EI", pole: "right", weight: 2 }],
        roleIds: [
          "backend-developer",
          "data-scientist",
          "ml-engineer",
          "security-engineer",
          "devops-engineer",
        ],
      },
      {
        id: "q30c",
        text: "The group discussion where the loudest person 'won' and you had actual ideas",
        riasecScores: { R: 1, I: 2, A: 0, S: 0, E: 0, C: 2 },
        mbtiAxes: [{ dimension: "EI", pole: "right", weight: 2 }],
        roleIds: [
          "data-engineer",
          "backend-developer",
          "cloud-engineer",
          "sre",
          "database-administrator",
        ],
      },
      {
        id: "q30d",
        text: "The case study where they gave you 10 minutes, no internet, and a 'strategic business problem'",
        riasecScores: { R: 2, I: 0, A: 1, S: 0, E: 0, C: 1 },
        mbtiAxes: [{ dimension: "SN", pole: "left", weight: 1 }],
        roleIds: [
          "devops-engineer",
          "cloud-engineer",
          "network-engineer",
          "system-administrator",
          "sre",
        ],
      },
      {
        id: "q30e",
        text: "The one that ended with 'we'll get back to you' — and never did. Classic.",
        riasecScores: { R: 0, I: 0, A: 0, S: 2, E: 2, C: 0 },
        mbtiAxes: [{ dimension: "TF", pole: "right", weight: 1 }],
        roleIds: [
          "it-project-manager",
          "scrum-master",
          "agile-coach",
          "product-manager",
          "change-management-analyst",
        ],
      },
    ],
  },

  {
    id: "q31",
    section: "drains",
    sectionLabel: "The Joy Killers",
    question:
      "Final year project submission is tomorrow. Which crisis would send you into full panic mode?",
    options: [
      {
        id: "q31a",
        text: "The UI looks terrible and your HOD cares deeply about 'presentation marks'",
        riasecScores: { R: 2, I: 1, A: 0, S: 0, E: 1, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "left", weight: 1 }],
        roleIds: [
          "backend-developer",
          "devops-engineer",
          "cloud-engineer",
          "data-engineer",
          "database-administrator",
        ],
      },
      {
        id: "q31b",
        text: "The ML model accuracy dropped overnight and you have absolutely no idea why",
        riasecScores: { R: 0, I: 0, A: 2, S: 1, E: 1, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "uiux-designer",
          "product-designer",
          "graphic-designer",
          "frontend-developer",
          "web-designer",
        ],
      },
      {
        id: "q31c",
        text: "The backend crashes every time two people try to open it simultaneously",
        riasecScores: { R: 0, I: 2, A: 0, S: 0, E: 0, C: 2 },
        mbtiAxes: [{ dimension: "TF", pole: "left", weight: 2 }],
        roleIds: [
          "data-scientist",
          "ml-engineer",
          "data-analyst",
          "ai-research-scientist",
          "deep-learning-engineer",
        ],
      },
      {
        id: "q31d",
        text: "Your team did nothing for 3 months and it's all landing on you tonight — alone",
        riasecScores: { R: 0, I: 0, A: 0, S: 0, E: 2, C: 2 },
        mbtiAxes: [{ dimension: "JP", pole: "left", weight: 2 }],
        roleIds: [
          "it-project-manager",
          "scrum-master",
          "program-manager",
          "pmo-analyst",
          "agile-coach",
        ],
      },
      {
        id: "q31e",
        text: "The documentation is missing and the examiner is definitely the 'but where's the report?' type",
        riasecScores: { R: 2, I: 1, A: 1, S: 0, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 1 }],
        roleIds: [
          "fullstack-developer",
          "backend-developer",
          "react-native-developer",
          "python-developer",
          "software-engineer",
        ],
      },
    ],
  },

  // --- Section: thinking (Q32–Q33) ---
  {
    id: "q32",
    section: "thinking",
    sectionLabel: "Inside Your Brain",
    question:
      "You're scrolling LinkedIn job posts. Your eyes stop on one. Which role is it?",
    description:
      "Not the highest-paying one — the one that made you feel something. Gut check time.",
    options: [
      {
        id: "q32a",
        text: "'Software Engineer Intern — you'll own a real microservice from Week 1'",
        riasecScores: { R: 2, I: 2, A: 0, S: 0, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "EI", pole: "right", weight: 1 }],
        roleIds: [
          "backend-developer",
          "frontend-developer",
          "fullstack-developer",
          "software-engineer",
          "python-developer",
        ],
      },
      {
        id: "q32b",
        text: "'Junior UX Designer — redesign our flagship app, real user research included'",
        riasecScores: { R: 0, I: 1, A: 2, S: 1, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "uiux-designer",
          "product-designer",
          "ux-researcher",
          "interaction-designer",
          "web-designer",
        ],
      },
      {
        id: "q32c",
        text: "'Data Analyst Trainee — build dashboards the CEO actually uses in board meetings'",
        riasecScores: { R: 0, I: 2, A: 0, S: 0, E: 1, C: 2 },
        mbtiAxes: [{ dimension: "TF", pole: "left", weight: 2 }],
        roleIds: [
          "data-analyst",
          "bi-developer",
          "reporting-analyst",
          "business-analyst",
          "marketing-analyst",
        ],
      },
      {
        id: "q32d",
        text: "'Cloud/DevOps Trainee — manage real AWS infrastructure, on-call rotation after 3 months'",
        riasecScores: { R: 2, I: 1, A: 0, S: 0, E: 0, C: 1 },
        mbtiAxes: [{ dimension: "JP", pole: "left", weight: 1 }],
        roleIds: [
          "cloud-engineer",
          "devops-engineer",
          "aws-solutions-architect",
          "sre",
          "kubernetes-admin",
        ],
      },
      {
        id: "q32e",
        text: "'Digital Marketing Fresher — run paid campaigns, own the Instagram strategy from Day 1'",
        riasecScores: { R: 0, I: 0, A: 1, S: 1, E: 2, C: 1 },
        mbtiAxes: [{ dimension: "EI", pole: "left", weight: 2 }],
        roleIds: [
          "digital-marketing-executive",
          "social-media-manager",
          "seo-executive",
          "content-writer",
          "growth-hacker",
        ],
      },
    ],
  },

  {
    id: "q33",
    section: "thinking",
    sectionLabel: "Inside Your Brain",
    question:
      "Your senior is explaining their day job. Which one makes you think 'I want THAT life'?",
    options: [
      {
        id: "q33a",
        text: "'I write code that runs on millions of phones — and nobody knows my name. That's fine.'",
        riasecScores: { R: 2, I: 2, A: 0, S: 0, E: 0, C: 0 },
        mbtiAxes: [
          { dimension: "EI", pole: "right", weight: 2 },
          { dimension: "TF", pole: "left", weight: 1 },
        ],
        roleIds: [
          "backend-developer",
          "fullstack-developer",
          "mobile-android-developer",
          "flutter-developer",
          "java-developer",
        ],
      },
      {
        id: "q33b",
        text: "'Every week a different client, a different problem — I'm basically a doctor for broken businesses'",
        riasecScores: { R: 0, I: 1, A: 0, S: 1, E: 2, C: 1 },
        mbtiAxes: [
          { dimension: "EI", pole: "left", weight: 1 },
          { dimension: "SN", pole: "right", weight: 1 },
        ],
        roleIds: [
          "it-consultant",
          "business-analyst",
          "sap-fico-consultant",
          "oracle-erp-consultant",
          "solutions-architect-associate",
        ],
      },
      {
        id: "q33c",
        text: "'I trained a model that now predicts something humans were guessing at for years'",
        riasecScores: { R: 0, I: 2, A: 0, S: 0, E: 0, C: 1 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "ml-engineer",
          "data-scientist",
          "ai-research-scientist",
          "nlp-engineer",
          "deep-learning-engineer",
        ],
      },
      {
        id: "q33d",
        text: "'I keep 50 engineers unblocked every day — I'm basically the oil that makes the engine run'",
        riasecScores: { R: 0, I: 0, A: 0, S: 1, E: 2, C: 2 },
        mbtiAxes: [{ dimension: "EI", pole: "left", weight: 1 }],
        roleIds: [
          "scrum-master",
          "it-project-manager",
          "agile-coach",
          "devops-engineer",
          "program-manager",
        ],
      },
      {
        id: "q33e",
        text: "'Users changed their habits because of something I designed — and I have the screenshots to prove it'",
        riasecScores: { R: 0, I: 0, A: 2, S: 2, E: 0, C: 0 },
        mbtiAxes: [
          { dimension: "TF", pole: "right", weight: 2 },
          { dimension: "SN", pole: "right", weight: 1 },
        ],
        roleIds: [
          "uiux-designer",
          "product-designer",
          "interaction-designer",
          "product-manager",
          "brand-designer",
        ],
      },
    ],
  },

  // --- Section: scenarios (Q34–Q35) ---
  {
    id: "q34",
    section: "scenarios",
    sectionLabel: "It's 3 PM on a Monday...",
    question:
      "Third week at your first job. Manager says 'own this completely'. Which task makes you actually show up early the next day?",
    description:
      "Fresher test: which ownership scenario makes your imposter syndrome go quiet for once?",
    options: [
      {
        id: "q34a",
        text: "Refactoring a messy module so the next engineer doesn't want to cry",
        riasecScores: { R: 2, I: 2, A: 0, S: 0, E: 0, C: 1 },
        mbtiAxes: [{ dimension: "EI", pole: "right", weight: 1 }],
        roleIds: [
          "backend-developer",
          "frontend-developer",
          "fullstack-developer",
          "java-developer",
          "python-developer",
        ],
      },
      {
        id: "q34b",
        text: "Redesigning the onboarding screen because the current one loses 40% of new users",
        riasecScores: { R: 0, I: 1, A: 2, S: 1, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "uiux-designer",
          "product-designer",
          "frontend-developer",
          "interaction-designer",
          "product-manager",
        ],
      },
      {
        id: "q34c",
        text: "Building a Looker dashboard that gives the sales team visibility they've never had before",
        riasecScores: { R: 0, I: 2, A: 0, S: 1, E: 0, C: 2 },
        mbtiAxes: [{ dimension: "TF", pole: "left", weight: 2 }],
        roleIds: [
          "data-analyst",
          "bi-developer",
          "reporting-analyst",
          "data-engineer",
          "business-analyst",
        ],
      },
      {
        id: "q34d",
        text: "Setting up CI/CD for a repo that's still being deployed manually (in 2026!)",
        riasecScores: { R: 2, I: 1, A: 0, S: 0, E: 0, C: 2 },
        mbtiAxes: [{ dimension: "JP", pole: "left", weight: 1 }],
        roleIds: [
          "devops-engineer",
          "cloud-engineer",
          "sre",
          "platform-engineer",
          "mlops-engineer",
        ],
      },
      {
        id: "q34e",
        text: "Documenting the whole system so the next new joiner understands it in under a week",
        riasecScores: { R: 0, I: 1, A: 1, S: 1, E: 0, C: 2 },
        mbtiAxes: [{ dimension: "JP", pole: "left", weight: 1 }],
        roleIds: [
          "technical-writer",
          "business-analyst",
          "scrum-master",
          "confluence-administrator",
          "it-compliance-analyst",
        ],
      },
    ],
  },

  {
    id: "q35",
    section: "scenarios",
    sectionLabel: "It's 3 PM on a Monday...",
    question:
      "Campus placements. You're next in line. Which fear is loudest right before you walk in?",
    options: [
      {
        id: "q35a",
        text: "'What if they ask me to code something I've never seen and I go completely blank?'",
        riasecScores: { R: 2, I: 2, A: 0, S: 0, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "TF", pole: "left", weight: 1 }],
        roleIds: [
          "backend-developer",
          "frontend-developer",
          "software-engineer",
          "data-scientist",
          "fullstack-developer",
        ],
      },
      {
        id: "q35b",
        text: "'What if they see my portfolio and say the designs look like a college project?' (they are, but still)",
        riasecScores: { R: 0, I: 0, A: 2, S: 1, E: 0, C: 0 },
        mbtiAxes: [{ dimension: "SN", pole: "right", weight: 2 }],
        roleIds: [
          "uiux-designer",
          "graphic-designer",
          "product-designer",
          "brand-designer",
          "web-designer",
        ],
      },
      {
        id: "q35c",
        text: "'What if my Excel and SQL skills aren't as advanced as the JD actually expects?'",
        riasecScores: { R: 0, I: 1, A: 0, S: 0, E: 1, C: 2 },
        mbtiAxes: [{ dimension: "SN", pole: "left", weight: 1 }],
        roleIds: [
          "data-analyst",
          "business-analyst",
          "reporting-analyst",
          "bi-developer",
          "finance-analyst-it",
        ],
      },
      {
        id: "q35d",
        text: "'What if they ask a leadership scenario and I've genuinely never led anything in my life?'",
        riasecScores: { R: 0, I: 0, A: 1, S: 2, E: 2, C: 0 },
        mbtiAxes: [{ dimension: "EI", pole: "left", weight: 1 }],
        roleIds: [
          "it-project-manager",
          "scrum-master",
          "product-manager",
          "agile-coach",
          "it-consultant",
        ],
      },
      {
        id: "q35e",
        text: "'What if I get the offer and they actually expect me to configure cloud infrastructure on Day 1?'",
        riasecScores: { R: 2, I: 1, A: 0, S: 0, E: 0, C: 1 },
        mbtiAxes: [{ dimension: "JP", pole: "left", weight: 1 }],
        roleIds: [
          "cloud-engineer",
          "devops-engineer",
          "network-engineer",
          "aws-solutions-architect",
          "sre",
        ],
      },
    ],
  },
];
