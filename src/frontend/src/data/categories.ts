export type CategoryId =
  | "development"
  | "data"
  | "aiml"
  | "infrastructure"
  | "support"
  | "sap-erp"
  | "tools-platforms"
  | "non-coding-it"
  | "design-creative"
  | "marketing-growth";

export interface Category {
  id: CategoryId;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
}

export const categories: Category[] = [
  {
    id: "development",
    name: "Development",
    shortName: "Dev",
    description:
      "Build web, mobile, and enterprise software applications using various programming languages and frameworks.",
    icon: "💻",
    colorClass: "bg-violet-100 text-violet-700",
    bgClass: "bg-violet-50",
    borderClass: "border-violet-200",
    textClass: "text-violet-700",
  },
  {
    id: "data",
    name: "Data",
    shortName: "Data",
    description:
      "Manage, process, and analyze data pipelines, warehouses, and quality systems for data-driven businesses.",
    icon: "📊",
    colorClass: "bg-cyan-100 text-cyan-700",
    bgClass: "bg-cyan-50",
    borderClass: "border-cyan-200",
    textClass: "text-cyan-700",
  },
  {
    id: "aiml",
    name: "AI / ML",
    shortName: "AI/ML",
    description:
      "Design and deploy machine learning models, AI systems, and intelligent automation solutions.",
    icon: "🤖",
    colorClass: "bg-emerald-100 text-emerald-700",
    bgClass: "bg-emerald-50",
    borderClass: "border-emerald-200",
    textClass: "text-emerald-700",
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    shortName: "Infra",
    description:
      "Manage cloud platforms, DevOps pipelines, networking, and system reliability at scale.",
    icon: "☁️",
    colorClass: "bg-amber-100 text-amber-700",
    bgClass: "bg-amber-50",
    borderClass: "border-amber-200",
    textClass: "text-amber-700",
  },
  {
    id: "support",
    name: "IT Support",
    shortName: "Support",
    description:
      "Provide technical assistance, troubleshoot issues, and ensure smooth IT operations for users and businesses.",
    icon: "🛠️",
    colorClass: "bg-orange-100 text-orange-700",
    bgClass: "bg-orange-50",
    borderClass: "border-orange-200",
    textClass: "text-orange-700",
  },
  {
    id: "sap-erp",
    name: "SAP / ERP",
    shortName: "SAP/ERP",
    description:
      "Implement, configure, and customize enterprise resource planning systems like SAP, Salesforce, and Oracle.",
    icon: "🏢",
    colorClass: "bg-fuchsia-100 text-fuchsia-700",
    bgClass: "bg-fuchsia-50",
    borderClass: "border-fuchsia-200",
    textClass: "text-fuchsia-700",
  },
  {
    id: "tools-platforms",
    name: "Tools & Platforms",
    shortName: "Tools",
    description:
      "Administer and develop on popular IT platforms like Jira, Confluence, Tableau, and automation tools.",
    icon: "⚙️",
    colorClass: "bg-teal-100 text-teal-700",
    bgClass: "bg-teal-50",
    borderClass: "border-teal-200",
    textClass: "text-teal-700",
  },
  {
    id: "non-coding-it",
    name: "Non-Coding IT",
    shortName: "Non-Code",
    description:
      "Lead projects, analyze business requirements, manage products, and drive IT strategy without heavy coding.",
    icon: "📋",
    colorClass: "bg-lime-100 text-lime-700",
    bgClass: "bg-lime-50",
    borderClass: "border-lime-200",
    textClass: "text-lime-700",
  },
  {
    id: "design-creative",
    name: "Design & Creative",
    shortName: "Design",
    description:
      "Create user interfaces, visual identities, motion graphics, and compelling digital experiences.",
    icon: "🎨",
    colorClass: "bg-pink-100 text-pink-700",
    bgClass: "bg-pink-50",
    borderClass: "border-pink-200",
    textClass: "text-pink-700",
  },
  {
    id: "marketing-growth",
    name: "Marketing & Growth",
    shortName: "Marketing",
    description:
      "Drive business growth through digital marketing, SEO, content, performance campaigns, and brand strategy.",
    icon: "📈",
    colorClass: "bg-yellow-100 text-yellow-700",
    bgClass: "bg-yellow-50",
    borderClass: "border-yellow-200",
    textClass: "text-yellow-700",
  },
];

export const categoryMap: Record<CategoryId, Category> = Object.fromEntries(
  categories.map((c) => [c.id, c]),
) as Record<CategoryId, Category>;
