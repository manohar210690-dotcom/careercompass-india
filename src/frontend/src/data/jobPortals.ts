import type { CategoryId } from "./categories";

export interface JobPortalLinks {
  linkedin: string;
  naukri: string;
  indeed: string;
  internshala: string;
}

export const jobPortals: Record<CategoryId, JobPortalLinks> = {
  development: {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=software+developer+fresher&location=India",
    naukri:
      "https://www.naukri.com/software-developer-jobs-in-india?experience=0",
    indeed: "https://in.indeed.com/jobs?q=software+developer+fresher&l=India",
    internshala: "https://internshala.com/jobs/web-development-jobs",
  },
  data: {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=data+analyst+fresher&location=India",
    naukri: "https://www.naukri.com/data-analyst-jobs-in-india?experience=0",
    indeed: "https://in.indeed.com/jobs?q=data+analyst+fresher&l=India",
    internshala: "https://internshala.com/jobs/data-analytics-jobs",
  },
  aiml: {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=machine+learning+engineer+fresher&location=India",
    naukri:
      "https://www.naukri.com/machine-learning-jobs-in-india?experience=0",
    indeed: "https://in.indeed.com/jobs?q=machine+learning+fresher&l=India",
    internshala: "https://internshala.com/jobs/artificial-intelligence-jobs",
  },
  infrastructure: {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=cloud+engineer+fresher&location=India",
    naukri: "https://www.naukri.com/cloud-engineer-jobs-in-india?experience=0",
    indeed:
      "https://in.indeed.com/jobs?q=cloud+devops+engineer+fresher&l=India",
    internshala: "https://internshala.com/jobs/cloud-computing-jobs",
  },
  support: {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=IT+support+engineer+fresher&location=India",
    naukri: "https://www.naukri.com/it-support-jobs-in-india?experience=0",
    indeed: "https://in.indeed.com/jobs?q=IT+support+fresher&l=India",
    internshala: "https://internshala.com/jobs/technical-support-jobs",
  },
  "sap-erp": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=SAP+consultant+fresher&location=India",
    naukri: "https://www.naukri.com/sap-jobs-in-india?experience=0",
    indeed: "https://in.indeed.com/jobs?q=SAP+consultant+fresher&l=India",
    internshala: "https://internshala.com/jobs/sap-erp-jobs",
  },
  "tools-platforms": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=jira+administrator+fresher&location=India",
    naukri: "https://www.naukri.com/jira-jobs-in-india?experience=0",
    indeed: "https://in.indeed.com/jobs?q=automation+tools+fresher&l=India",
    internshala: "https://internshala.com/jobs/automation-testing-jobs",
  },
  "non-coding-it": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=business+analyst+fresher&location=India",
    naukri:
      "https://www.naukri.com/business-analyst-jobs-in-india?experience=0",
    indeed: "https://in.indeed.com/jobs?q=business+analyst+fresher&l=India",
    internshala: "https://internshala.com/jobs/business-development-jobs",
  },
  "design-creative": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=UI+UX+designer+fresher&location=India",
    naukri: "https://www.naukri.com/ui-ux-designer-jobs-in-india?experience=0",
    indeed: "https://in.indeed.com/jobs?q=graphic+designer+fresher&l=India",
    internshala: "https://internshala.com/jobs/graphic-design-jobs",
  },
  "marketing-growth": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=digital+marketing+fresher&location=India",
    naukri:
      "https://www.naukri.com/digital-marketing-jobs-in-india?experience=0",
    indeed: "https://in.indeed.com/jobs?q=digital+marketing+fresher&l=India",
    internshala: "https://internshala.com/jobs/digital-marketing-jobs",
  },
};

export const portalInfo = [
  {
    key: "linkedin" as const,
    name: "LinkedIn Jobs",
    color: "bg-blue-600",
    icon: "💼",
  },
  {
    key: "naukri" as const,
    name: "Naukri.com",
    color: "bg-orange-500",
    icon: "🔍",
  },
  {
    key: "indeed" as const,
    name: "Indeed India",
    color: "bg-indigo-600",
    icon: "🌐",
  },
  {
    key: "internshala" as const,
    name: "Internshala",
    color: "bg-green-600",
    icon: "🎓",
  },
];
