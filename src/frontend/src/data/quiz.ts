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

// ─── 25 Questions ─────────────────────────────────────────────────────────────

export const quizQuestions: QuizQuestion[] = [
  // ════════════════════════════════════════════════════════════════
  // SECTION 1 — WHAT YOU ENJOY (Q1–Q6)
  // ════════════════════════════════════════════════════════════════
  {
    id: "q1",
    section: "interests",
    sectionLabel: "What You Enjoy",
    question:
      "Which of these activities sounds most energising to you on a typical workday?",
    description:
      "Pick the one that genuinely excites you, not what you think you should enjoy.",
    options: [
      {
        id: "q1a",
        text: "Building or coding systems — writing logic, APIs, or features",
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
        text: "Designing visual experiences — UIs, layouts, brand identities",
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
        text: "Analysing data — finding patterns, drawing insights from numbers",
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
        text: "Helping users solve problems — support, training, or success roles",
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
        text: "Planning and organising projects — timelines, milestones, coordination",
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
    sectionLabel: "What You Enjoy",
    question: "You have a free afternoon at work. You'd spend it…",
    options: [
      {
        id: "q2a",
        text: "Experimenting with a new tool, framework, or technology",
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
        text: "Sketching a better interface or redesigning an existing product",
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
        text: "Finding patterns in a messy dataset or writing queries",
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
        text: "Writing documentation that finally explains something clearly",
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
        text: "Chatting with users to understand their frustrations and needs",
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
    sectionLabel: "What You Enjoy",
    question: "What kind of problems excite you most at a deep level?",
    options: [
      {
        id: "q3a",
        text: "Algorithmic puzzles and logical system design",
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
        text: "Visual and design challenges — making something feel right",
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
        text: "People and process problems — why teams fail or succeed",
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
        text: "Infrastructure and reliability — keeping systems running at scale",
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
        text: "Business and analytical challenges — strategy meets data",
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
    sectionLabel: "What You Enjoy",
    question: "Which of these most resembles what you'd enjoy doing every day?",
    options: [
      {
        id: "q4a",
        text: "Writing code, reviewing PRs, and shipping features to users",
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
        text: "Running training sessions, workshops, or coaching individuals",
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
        text: "Monitoring systems, ensuring uptime, and responding to incidents",
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
        text: "Creating marketing content, campaigns, and growth experiments",
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
        text: "Auditing processes, improving compliance, and managing risk",
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
    sectionLabel: "What You Enjoy",
    question:
      "Which subject area naturally pulls your attention outside of work too?",
    options: [
      {
        id: "q5a",
        text: "AI, machine learning, and smart systems",
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
        text: "Cloud, DevOps, automation, and infrastructure",
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
        text: "Design, creativity, user experience, and aesthetics",
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
        text: "Finance, risk, business intelligence, and market analysis",
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
        text: "Enterprise systems, integrations, and business workflows (SAP, ERP)",
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
    sectionLabel: "What You Enjoy",
    question: "What gives you the most satisfaction at work?",
    options: [
      {
        id: "q6a",
        text: "Seeing real users enjoy something you personally built",
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
        text: "Finding the root cause of a difficult bug or system failure",
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
        text: "Successfully launching a campaign that drives measurable results",
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
        text: "Closing a support ticket that genuinely helped someone",
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
        text: "Delivering a project on time, on budget, with happy stakeholders",
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
  // SECTION 2 — WHAT DRAINS YOU (Q7–Q12)
  // ════════════════════════════════════════════════════════════════
  {
    id: "q7",
    section: "drains",
    sectionLabel: "What Drains You",
    question: "Which of these work scenarios would drain your energy fastest?",
    description:
      "Knowing what drains you is just as important as knowing what energises you.",
    options: [
      {
        id: "q7a",
        text: "Doing repetitive data entry or copy-paste work all day",
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
        text: "Presenting to large unfamiliar audiences every single day",
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
        text: "Working completely alone with zero team interaction for weeks",
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
        text: "Constantly switching between unrelated tasks with no flow state",
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
        text: "Fixing other people's undocumented, messy code all day",
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
    sectionLabel: "What Drains You",
    question: "Which work scenario would make you least productive?",
    options: [
      {
        id: "q8a",
        text: "Open-ended brief with no clear requirements or success criteria",
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
        text: "Very strict rules with zero room for creative experimentation",
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
        text: "Always working exclusively on other people's problems, never your own",
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
        text: "Sitting through long meetings all day with no deep work time",
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
        text: "Never seeing the direct impact of your work on real end users",
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
    sectionLabel: "What Drains You",
    question:
      "Which of these would frustrate you most over an extended period?",
    options: [
      {
        id: "q9a",
        text: "Building something that has zero aesthetic quality or care",
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
        text: "Having my focused work constantly interrupted by urgent requests",
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
        text: "No growth path, no learning, doing the same routine forever",
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
        text: "Working on something that doesn't help or impact real people",
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
        text: "Being micromanaged on every minor decision I make",
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
    sectionLabel: "What Drains You",
    question: "In a long project, which phase would you least enjoy?",
    options: [
      {
        id: "q10a",
        text: "Gathering and documenting requirements from stakeholders",
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
        text: "Writing exhaustive test cases and testing every edge case",
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
        text: "Documenting everything thoroughly after the work is done",
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
        text: "Coordinating between multiple teams and chasing dependencies",
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
        text: "Post-launch monitoring, bug fixes, and maintenance work",
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
    sectionLabel: "What Drains You",
    question: "Which work environment would wear you down over time?",
    options: [
      {
        id: "q11a",
        text: "Loud open office with constant chatter and interruptions",
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
        text: "Isolated cubicle with no collaboration or human connection",
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
        text: "Fast-moving startup where everything changes every week",
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
        text: "Slow-moving corporate with heavy approval processes",
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
        text: "Purely execution-focused role with no strategy or creative input",
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
    sectionLabel: "What Drains You",
    question:
      "Which type of critical feedback would be most disheartening for you?",
    options: [
      {
        id: "q12a",
        text: '"Your code quality is poor, hard to read and maintain"',
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
        text: '"Users find your design confusing and visually unappealing"',
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
        text: '"Your data analysis had errors that drove the wrong business decision"',
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
        text: '"Your client communication and presentation skills need major work"',
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
        text: '"Your project timelines keep slipping, deliverables are late"',
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
  // SECTION 3 — HOW YOU THINK (Q13–Q18)
  // ════════════════════════════════════════════════════════════════
  {
    id: "q13",
    section: "thinking",
    sectionLabel: "How You Think",
    question: "At work, you typically get your best ideas…",
    description:
      "This helps us understand your natural thinking and social energy style.",
    options: [
      {
        id: "q13a",
        text: "Brainstorming with the team, talking through problems out loud",
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
        text: "Quietly thinking things through on your own before sharing",
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
        text: "Reflecting deeply and preparing thoroughly before any meeting",
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
        text: "Bouncing ideas off people in real time as they form in my head",
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
        text: "A mix — depends on context, I adapt to what the situation needs",
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
    sectionLabel: "How You Think",
    question: "When starting a new task, you prefer to…",
    options: [
      {
        id: "q14a",
        text: "Follow established best practices and proven patterns",
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
        text: "Question existing approaches and explore entirely new ways",
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
        text: "Read the documentation, specs, and requirements thoroughly first",
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
        text: "Dive in and experiment first, then refine based on what I learn",
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
        text: "Look for analogies from other domains that might apply here",
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
    sectionLabel: "How You Think",
    question: "When making a tough decision, you lean towards…",
    options: [
      {
        id: "q15a",
        text: "The option that's most logical, data-backed, and rational",
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
        text: "The one that feels right for the people involved",
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
        text: "The most efficient solution regardless of people's preferences",
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
        text: "What aligns best with the team's values and long-term culture",
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
        text: "Whatever minimises risk and protects the most stakeholders",
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
    sectionLabel: "How You Think",
    question: "Your ideal personal work style is…",
    options: [
      {
        id: "q16a",
        text: "Detailed upfront plan, clear milestones, minimal surprises",
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
        text: "Start broad, iterate, and adjust the direction as I learn more",
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
        text: "Structured framework upfront, flexible on the tactical details",
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
        text: "Full autonomy to define my own process however works for me",
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
        text: "Collaborative planning with the team, then independent execution",
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
    sectionLabel: "How You Think",
    question: "Which energises you more over a typical month?",
    options: [
      {
        id: "q17a",
        text: "Leading a workshop, hackathon, or training session with 20+ people",
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
        text: "Owning a complex feature or problem end-to-end, fully independently",
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
        text: "Managing multiple work streams and keeping everything on track",
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
        text: "Going extremely deep into one hard problem for weeks until solved",
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
        text: "Being the connector that bridges different teams and functions",
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
    sectionLabel: "How You Think",
    question: "When you think about career growth, you tend to imagine…",
    options: [
      {
        id: "q18a",
        text: "Becoming the deepest technical expert in one specific domain",
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
        text: "Building a product or company from the ground up as a founder",
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
        text: "Improving processes and making organisations run more efficiently",
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
        text: "Creating work that shapes how people think, feel, or interact",
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
        text: "Solving society-level or industry-level problems using technology",
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
  // SECTION 4 — REAL-WORLD SCENARIOS (Q19–Q25)
  // ════════════════════════════════════════════════════════════════
  {
    id: "q19",
    section: "scenarios",
    sectionLabel: "Real-World Scenarios",
    question:
      'The PM says: "The system needs to handle 10x more users by next quarter." Your first instinct is to…',
    description: "Choose the response closest to how you'd naturally react.",
    options: [
      {
        id: "q19a",
        text: "Immediately start analysing the architecture for bottlenecks",
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
        text: "Ask to speak to users first and understand their actual pain points",
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
        text: "Start mapping out the implementation plan with clear milestones",
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
        text: "Start prototyping new design flows to handle the increased scale",
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
        text: 'Question whether "10x users" is really the right metric to optimise',
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
    sectionLabel: "Real-World Scenarios",
    question:
      "A critical production system is down and users are affected. You…",
    options: [
      {
        id: "q20a",
        text: "Dive straight into logs and metrics to find the root cause",
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
        text: "Coordinate communication across teams and manage the incident response",
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
        text: "Document the incident in real time and ensure everything is tracked",
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
        text: "Ping support teams and prioritise which affected users need help first",
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
        text: "Draft a post-mortem framework to prevent this from ever happening again",
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
    sectionLabel: "Real-World Scenarios",
    question:
      "A client is unhappy with the delivered software. Your role in resolving it would be…",
    options: [
      {
        id: "q21a",
        text: "Dig into technical logs to prove or disprove the reported issue",
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
        text: "Empathise with the client, gather detailed feedback, translate to requirements",
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
        text: "Redesign the affected UI/UX to be clearer and more intuitive",
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
        text: "Audit the process to find exactly where expectations misaligned",
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
        text: "Find the fastest patch possible and deploy the fix immediately",
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
    sectionLabel: "Real-World Scenarios",
    question:
      "Your company wants to build an AI-powered recommendation feature. You volunteer to…",
    options: [
      {
        id: "q22a",
        text: "Train the ML model, tune hyperparameters, and evaluate its performance",
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
        text: "Define the product vision and how the recommendations should work",
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
        text: "Design the UX flow for how recommendations surface to users",
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
        text: "Build the data pipelines that feed training data to the model",
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
        text: "Communicate the feature to customers and gather early user feedback",
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
    sectionLabel: "Real-World Scenarios",
    question:
      "Your company is rolling out a new ERP system. Your most natural contribution would be…",
    options: [
      {
        id: "q23a",
        text: "Configure and customise the modules to fit actual business workflows",
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
        text: "Train employees at all levels to use the new system effectively",
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
        text: "Map current business processes and identify gaps vs. the new system",
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
        text: "Test the system thoroughly before go-live to find every edge case",
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
        text: "Manage the overall project timeline and stakeholder communications",
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
    sectionLabel: "Real-World Scenarios",
    question:
      "You have 6 months to go deep and become an expert in something. You pick…",
    options: [
      {
        id: "q24a",
        text: "A specific programming language or modern framework (React, Go, Rust)",
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
        text: "Machine learning, LLMs, or AI systems building from scratch",
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
        text: "Cloud infrastructure, Kubernetes, DevOps, or platform engineering",
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
        text: "UX research, product design, or human-centred design principles",
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
        text: "Data analysis, SQL, Power BI, and business intelligence tools",
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
    sectionLabel: "Real-World Scenarios",
    question: "Five years from now, your ideal day at work looks like…",
    options: [
      {
        id: "q25a",
        text: "Leading architecture decisions on a large, complex technical system",
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
        text: "Deep in data — building models that shape company strategy",
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
        text: "Leading a team, mentoring engineers, and shipping great products",
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
        text: "Creating experiences that users love — design, content, or interaction",
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
        text: "Consulting across clients and industries, solving fresh problems monthly",
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
];
