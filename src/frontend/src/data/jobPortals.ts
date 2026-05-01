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

// Role-specific job portal links — explicit per-role URLs for precision
export const roleJobPortals: Record<string, JobPortalLinks> = {
  // ── DEVELOPMENT ──────────────────────────────────────────────────────────
  "frontend-developer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Frontend+Developer&location=India",
    naukri: "https://www.naukri.com/frontend-developer-jobs",
    indeed: "https://in.indeed.com/jobs?q=frontend+developer&l=India",
    internshala:
      "https://internshala.com/internships/web-development-internship/",
  },
  "backend-developer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Backend+Developer&location=India",
    naukri: "https://www.naukri.com/backend-developer-jobs",
    indeed: "https://in.indeed.com/jobs?q=backend+developer&l=India",
    internshala:
      "https://internshala.com/internships/backend-development-internship/",
  },
  "full-stack-developer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Full+Stack+Developer&location=India",
    naukri: "https://www.naukri.com/full-stack-developer-jobs",
    indeed: "https://in.indeed.com/jobs?q=full+stack+developer&l=India",
    internshala:
      "https://internshala.com/internships/full-stack-development-internship/",
  },
  "mobile-developer-android": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Android+Developer&location=India",
    naukri: "https://www.naukri.com/android-developer-jobs",
    indeed: "https://in.indeed.com/jobs?q=android+developer&l=India",
    internshala:
      "https://internshala.com/internships/android-app-development-internship/",
  },
  "mobile-developer-ios": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=iOS+Developer&location=India",
    naukri: "https://www.naukri.com/ios-developer-jobs",
    indeed: "https://in.indeed.com/jobs?q=ios+developer&l=India",
    internshala:
      "https://internshala.com/internships/ios-app-development-internship/",
  },
  "react-native-developer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=React+Native+Developer&location=India",
    naukri: "https://www.naukri.com/react-native-developer-jobs",
    indeed: "https://in.indeed.com/jobs?q=react+native+developer&l=India",
    internshala: "https://internshala.com/internships/react-native-internship/",
  },
  "flutter-developer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Flutter+Developer&location=India",
    naukri: "https://www.naukri.com/flutter-developer-jobs",
    indeed: "https://in.indeed.com/jobs?q=flutter+developer&l=India",
    internshala:
      "https://internshala.com/internships/flutter-development-internship/",
  },
  "devops-engineer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=DevOps+Engineer&location=India",
    naukri: "https://www.naukri.com/devops-engineer-jobs",
    indeed: "https://in.indeed.com/jobs?q=devops+engineer&l=India",
    internshala: "https://internshala.com/internships/devops-internship/",
  },
  "software-engineer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Software+Engineer&location=India",
    naukri: "https://www.naukri.com/software-engineer-jobs",
    indeed: "https://in.indeed.com/jobs?q=software+engineer&l=India",
    internshala:
      "https://internshala.com/internships/software-development-internship/",
  },
  "java-developer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Java+Developer&location=India",
    naukri: "https://www.naukri.com/java-developer-jobs",
    indeed: "https://in.indeed.com/jobs?q=java+developer&l=India",
    internshala: "https://internshala.com/internships/java-internship/",
  },
  "python-developer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Python+Developer&location=India",
    naukri: "https://www.naukri.com/python-developer-jobs",
    indeed: "https://in.indeed.com/jobs?q=python+developer&l=India",
    internshala: "https://internshala.com/internships/python-internship/",
  },
  "dotnet-developer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=.NET+Developer&location=India",
    naukri: "https://www.naukri.com/dot-net-developer-jobs",
    indeed: "https://in.indeed.com/jobs?q=.net+developer&l=India",
    internshala: "https://internshala.com/internships/dot-net-internship/",
  },
  "node-developer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Node.js+Developer&location=India",
    naukri: "https://www.naukri.com/nodejs-developer-jobs",
    indeed: "https://in.indeed.com/jobs?q=node.js+developer&l=India",
    internshala: "https://internshala.com/internships/nodejs-internship/",
  },

  // ── DATA ─────────────────────────────────────────────────────────────────
  "data-analyst": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Data+Analyst&location=India",
    naukri: "https://www.naukri.com/data-analyst-jobs",
    indeed: "https://in.indeed.com/jobs?q=data+analyst&l=India",
    internshala:
      "https://internshala.com/internships/data-analytics-internship/",
  },
  "data-engineer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Data+Engineer&location=India",
    naukri: "https://www.naukri.com/data-engineer-jobs",
    indeed: "https://in.indeed.com/jobs?q=data+engineer&l=India",
    internshala:
      "https://internshala.com/internships/data-engineering-internship/",
  },
  "data-scientist": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Data+Scientist&location=India",
    naukri: "https://www.naukri.com/data-scientist-jobs",
    indeed: "https://in.indeed.com/jobs?q=data+scientist&l=India",
    internshala: "https://internshala.com/internships/data-science-internship/",
  },
  "database-administrator": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Database+Administrator&location=India",
    naukri: "https://www.naukri.com/database-administrator-jobs",
    indeed: "https://in.indeed.com/jobs?q=database+administrator&l=India",
    internshala:
      "https://internshala.com/internships/database-management-internship/",
  },
  "bi-developer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=BI+Developer&location=India",
    naukri: "https://www.naukri.com/bi-developer-jobs",
    indeed:
      "https://in.indeed.com/jobs?q=bi+developer+business+intelligence&l=India",
    internshala:
      "https://internshala.com/internships/business-intelligence-internship/",
  },
  "etl-developer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=ETL+Developer&location=India",
    naukri: "https://www.naukri.com/etl-developer-jobs",
    indeed: "https://in.indeed.com/jobs?q=etl+developer&l=India",
    internshala:
      "https://internshala.com/internships/data-engineering-internship/",
  },
  "data-architect": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Data+Architect&location=India",
    naukri: "https://www.naukri.com/data-architect-jobs",
    indeed: "https://in.indeed.com/jobs?q=data+architect&l=India",
    internshala: "https://internshala.com/internships/data-science-internship/",
  },
  "data-warehouse-engineer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Data+Warehouse+Engineer&location=India",
    naukri: "https://www.naukri.com/data-warehouse-engineer-jobs",
    indeed: "https://in.indeed.com/jobs?q=data+warehouse+engineer&l=India",
    internshala:
      "https://internshala.com/internships/data-engineering-internship/",
  },
  "sql-developer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=SQL+Developer&location=India",
    naukri: "https://www.naukri.com/sql-developer-jobs",
    indeed: "https://in.indeed.com/jobs?q=sql+developer&l=India",
    internshala:
      "https://internshala.com/internships/database-management-internship/",
  },
  "power-bi-developer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Power+BI+Developer&location=India",
    naukri: "https://www.naukri.com/power-bi-developer-jobs",
    indeed: "https://in.indeed.com/jobs?q=power+bi+developer&l=India",
    internshala:
      "https://internshala.com/internships/business-intelligence-internship/",
  },
  "tableau-developer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Tableau+Developer&location=India",
    naukri: "https://www.naukri.com/tableau-developer-jobs",
    indeed: "https://in.indeed.com/jobs?q=tableau+developer&l=India",
    internshala:
      "https://internshala.com/internships/data-analytics-internship/",
  },
  "data-quality-engineer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Data+Quality+Engineer&location=India",
    naukri: "https://www.naukri.com/data-quality-engineer-jobs",
    indeed: "https://in.indeed.com/jobs?q=data+quality+engineer&l=India",
    internshala:
      "https://internshala.com/internships/data-analytics-internship/",
  },

  // ── AI/ML ─────────────────────────────────────────────────────────────────
  "machine-learning-engineer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Machine+Learning+Engineer&location=India",
    naukri: "https://www.naukri.com/machine-learning-jobs",
    indeed: "https://in.indeed.com/jobs?q=machine+learning+engineer&l=India",
    internshala:
      "https://internshala.com/internships/machine-learning-internship/",
  },
  "ai-engineer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=AI+Engineer&location=India",
    naukri: "https://www.naukri.com/artificial-intelligence-jobs",
    indeed: "https://in.indeed.com/jobs?q=ai+engineer&l=India",
    internshala:
      "https://internshala.com/internships/artificial-intelligence-internship/",
  },
  "nlp-engineer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=NLP+Engineer&location=India",
    naukri: "https://www.naukri.com/nlp-engineer-jobs",
    indeed:
      "https://in.indeed.com/jobs?q=nlp+engineer+natural+language+processing&l=India",
    internshala:
      "https://internshala.com/internships/machine-learning-internship/",
  },
  "computer-vision-engineer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Computer+Vision+Engineer&location=India",
    naukri: "https://www.naukri.com/computer-vision-engineer-jobs",
    indeed: "https://in.indeed.com/jobs?q=computer+vision+engineer&l=India",
    internshala:
      "https://internshala.com/internships/artificial-intelligence-internship/",
  },
  "data-science-lead": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Data+Science+Lead&location=India",
    naukri: "https://www.naukri.com/data-science-lead-jobs",
    indeed: "https://in.indeed.com/jobs?q=data+science+lead&l=India",
    internshala: "https://internshala.com/internships/data-science-internship/",
  },
  "ml-ops-engineer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=MLOps+Engineer&location=India",
    naukri: "https://www.naukri.com/mlops-engineer-jobs",
    indeed: "https://in.indeed.com/jobs?q=mlops+engineer&l=India",
    internshala:
      "https://internshala.com/internships/machine-learning-internship/",
  },
  "deep-learning-engineer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Deep+Learning+Engineer&location=India",
    naukri: "https://www.naukri.com/deep-learning-engineer-jobs",
    indeed: "https://in.indeed.com/jobs?q=deep+learning+engineer&l=India",
    internshala:
      "https://internshala.com/internships/machine-learning-internship/",
  },
  "ai-researcher": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=AI+Researcher&location=India",
    naukri: "https://www.naukri.com/ai-researcher-jobs",
    indeed: "https://in.indeed.com/jobs?q=ai+researcher&l=India",
    internshala:
      "https://internshala.com/internships/artificial-intelligence-internship/",
  },

  // ── INFRASTRUCTURE ────────────────────────────────────────────────────────
  "cloud-architect": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Cloud+Architect&location=India",
    naukri: "https://www.naukri.com/cloud-architect-jobs",
    indeed: "https://in.indeed.com/jobs?q=cloud+architect&l=India",
    internshala:
      "https://internshala.com/internships/cloud-computing-internship/",
  },
  "aws-engineer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=AWS+Engineer&location=India",
    naukri: "https://www.naukri.com/aws-engineer-jobs",
    indeed: "https://in.indeed.com/jobs?q=aws+engineer&l=India",
    internshala:
      "https://internshala.com/internships/cloud-computing-internship/",
  },
  "azure-engineer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Azure+Engineer&location=India",
    naukri: "https://www.naukri.com/azure-engineer-jobs",
    indeed: "https://in.indeed.com/jobs?q=azure+engineer&l=India",
    internshala:
      "https://internshala.com/internships/cloud-computing-internship/",
  },
  "gcp-engineer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=GCP+Engineer&location=India",
    naukri: "https://www.naukri.com/gcp-engineer-jobs",
    indeed: "https://in.indeed.com/jobs?q=gcp+engineer+google+cloud&l=India",
    internshala:
      "https://internshala.com/internships/cloud-computing-internship/",
  },
  "linux-admin": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Linux+Administrator&location=India",
    naukri: "https://www.naukri.com/linux-administrator-jobs",
    indeed: "https://in.indeed.com/jobs?q=linux+administrator&l=India",
    internshala: "https://internshala.com/internships/linux-internship/",
  },
  "network-engineer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Network+Engineer&location=India",
    naukri: "https://www.naukri.com/network-engineer-jobs",
    indeed: "https://in.indeed.com/jobs?q=network+engineer&l=India",
    internshala:
      "https://internshala.com/internships/network-engineering-internship/",
  },
  "site-reliability-engineer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Site+Reliability+Engineer&location=India",
    naukri: "https://www.naukri.com/site-reliability-engineer-jobs",
    indeed:
      "https://in.indeed.com/jobs?q=site+reliability+engineer+sre&l=India",
    internshala: "https://internshala.com/internships/devops-internship/",
  },
  "devops-architect": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=DevOps+Architect&location=India",
    naukri: "https://www.naukri.com/devops-architect-jobs",
    indeed: "https://in.indeed.com/jobs?q=devops+architect&l=India",
    internshala: "https://internshala.com/internships/devops-internship/",
  },
  "kubernetes-engineer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Kubernetes+Engineer&location=India",
    naukri: "https://www.naukri.com/kubernetes-engineer-jobs",
    indeed: "https://in.indeed.com/jobs?q=kubernetes+engineer&l=India",
    internshala: "https://internshala.com/internships/devops-internship/",
  },

  // ── SUPPORT ───────────────────────────────────────────────────────────────
  "it-support-engineer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=IT+Support+Engineer&location=India",
    naukri: "https://www.naukri.com/it-support-engineer-jobs",
    indeed: "https://in.indeed.com/jobs?q=it+support+engineer&l=India",
    internshala:
      "https://internshala.com/internships/technical-support-internship/",
  },
  "system-administrator": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=System+Administrator&location=India",
    naukri: "https://www.naukri.com/system-administrator-jobs",
    indeed: "https://in.indeed.com/jobs?q=system+administrator&l=India",
    internshala:
      "https://internshala.com/internships/technical-support-internship/",
  },
  "help-desk-analyst": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Help+Desk+Analyst&location=India",
    naukri: "https://www.naukri.com/help-desk-analyst-jobs",
    indeed: "https://in.indeed.com/jobs?q=help+desk+analyst&l=India",
    internshala:
      "https://internshala.com/internships/technical-support-internship/",
  },
  "it-operations-analyst": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=IT+Operations+Analyst&location=India",
    naukri: "https://www.naukri.com/it-operations-analyst-jobs",
    indeed: "https://in.indeed.com/jobs?q=it+operations+analyst&l=India",
    internshala:
      "https://internshala.com/internships/technical-support-internship/",
  },
  "network-support-engineer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Network+Support+Engineer&location=India",
    naukri: "https://www.naukri.com/network-support-engineer-jobs",
    indeed: "https://in.indeed.com/jobs?q=network+support+engineer&l=India",
    internshala:
      "https://internshala.com/internships/network-engineering-internship/",
  },
  "server-administrator": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Server+Administrator&location=India",
    naukri: "https://www.naukri.com/server-administrator-jobs",
    indeed: "https://in.indeed.com/jobs?q=server+administrator&l=India",
    internshala:
      "https://internshala.com/internships/technical-support-internship/",
  },
  "desktop-support": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Desktop+Support+Engineer&location=India",
    naukri: "https://www.naukri.com/desktop-support-jobs",
    indeed: "https://in.indeed.com/jobs?q=desktop+support+engineer&l=India",
    internshala:
      "https://internshala.com/internships/technical-support-internship/",
  },
  "it-coordinator": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=IT+Coordinator&location=India",
    naukri: "https://www.naukri.com/it-coordinator-jobs",
    indeed: "https://in.indeed.com/jobs?q=it+coordinator&l=India",
    internshala:
      "https://internshala.com/internships/technical-support-internship/",
  },
  "field-service-engineer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Field+Service+Engineer&location=India",
    naukri: "https://www.naukri.com/field-service-engineer-jobs",
    indeed: "https://in.indeed.com/jobs?q=field+service+engineer&l=India",
    internshala:
      "https://internshala.com/internships/technical-support-internship/",
  },
  "it-asset-manager": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=IT+Asset+Manager&location=India",
    naukri: "https://www.naukri.com/it-asset-manager-jobs",
    indeed: "https://in.indeed.com/jobs?q=it+asset+manager&l=India",
    internshala:
      "https://internshala.com/internships/technical-support-internship/",
  },

  // ── SAP/ERP ───────────────────────────────────────────────────────────────
  "sap-consultant": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=SAP+Consultant&location=India",
    naukri: "https://www.naukri.com/sap-consultant-jobs",
    indeed: "https://in.indeed.com/jobs?q=sap+consultant&l=India",
    internshala: "https://internshala.com/internships/sap-internship/",
  },
  "sap-abap-developer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=SAP+ABAP+Developer&location=India",
    naukri: "https://www.naukri.com/sap-abap-developer-jobs",
    indeed: "https://in.indeed.com/jobs?q=sap+abap+developer&l=India",
    internshala: "https://internshala.com/internships/sap-internship/",
  },
  "sap-basis-admin": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=SAP+Basis+Administrator&location=India",
    naukri: "https://www.naukri.com/sap-basis-administrator-jobs",
    indeed: "https://in.indeed.com/jobs?q=sap+basis+administrator&l=India",
    internshala: "https://internshala.com/internships/sap-internship/",
  },
  "sap-fico-consultant": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=SAP+FICO+Consultant&location=India",
    naukri: "https://www.naukri.com/sap-fico-consultant-jobs",
    indeed: "https://in.indeed.com/jobs?q=sap+fico+consultant&l=India",
    internshala: "https://internshala.com/internships/sap-internship/",
  },
  "sap-mm-consultant": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=SAP+MM+Consultant&location=India",
    naukri: "https://www.naukri.com/sap-mm-consultant-jobs",
    indeed:
      "https://in.indeed.com/jobs?q=sap+mm+consultant+materials+management&l=India",
    internshala: "https://internshala.com/internships/sap-internship/",
  },
  "sap-sd-consultant": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=SAP+SD+Consultant&location=India",
    naukri: "https://www.naukri.com/sap-sd-consultant-jobs",
    indeed:
      "https://in.indeed.com/jobs?q=sap+sd+consultant+sales+distribution&l=India",
    internshala: "https://internshala.com/internships/sap-internship/",
  },
  "sap-hana-consultant": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=SAP+HANA+Consultant&location=India",
    naukri: "https://www.naukri.com/sap-hana-consultant-jobs",
    indeed: "https://in.indeed.com/jobs?q=sap+hana+consultant&l=India",
    internshala: "https://internshala.com/internships/sap-internship/",
  },
  "sap-s4hana-consultant": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=SAP+S4HANA+Consultant&location=India",
    naukri: "https://www.naukri.com/sap-s4hana-consultant-jobs",
    indeed: "https://in.indeed.com/jobs?q=sap+s4hana+consultant&l=India",
    internshala: "https://internshala.com/internships/sap-internship/",
  },

  // ── TOOLS/PLATFORMS ───────────────────────────────────────────────────────
  "salesforce-developer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Salesforce+Developer&location=India",
    naukri: "https://www.naukri.com/salesforce-developer-jobs",
    indeed: "https://in.indeed.com/jobs?q=salesforce+developer&l=India",
    internshala: "https://internshala.com/internships/salesforce-internship/",
  },
  "servicenow-developer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=ServiceNow+Developer&location=India",
    naukri: "https://www.naukri.com/servicenow-developer-jobs",
    indeed: "https://in.indeed.com/jobs?q=servicenow+developer&l=India",
    internshala: "https://internshala.com/internships/it-support-internship/",
  },
  "jira-admin": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Jira+Administrator&location=India",
    naukri: "https://www.naukri.com/jira-administrator-jobs",
    indeed: "https://in.indeed.com/jobs?q=jira+administrator&l=India",
    internshala:
      "https://internshala.com/internships/project-management-internship/",
  },
  "confluence-admin": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Confluence+Administrator&location=India",
    naukri: "https://www.naukri.com/confluence-administrator-jobs",
    indeed: "https://in.indeed.com/jobs?q=confluence+administrator&l=India",
    internshala:
      "https://internshala.com/internships/project-management-internship/",
  },
  "power-platform-developer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Power+Platform+Developer&location=India",
    naukri: "https://www.naukri.com/power-platform-developer-jobs",
    indeed:
      "https://in.indeed.com/jobs?q=power+platform+developer+microsoft&l=India",
    internshala:
      "https://internshala.com/internships/software-development-internship/",
  },
  "sharepoint-developer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=SharePoint+Developer&location=India",
    naukri: "https://www.naukri.com/sharepoint-developer-jobs",
    indeed: "https://in.indeed.com/jobs?q=sharepoint+developer&l=India",
    internshala:
      "https://internshala.com/internships/software-development-internship/",
  },
  "ms-dynamics-developer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Microsoft+Dynamics+Developer&location=India",
    naukri: "https://www.naukri.com/ms-dynamics-developer-jobs",
    indeed: "https://in.indeed.com/jobs?q=microsoft+dynamics+developer&l=India",
    internshala:
      "https://internshala.com/internships/software-development-internship/",
  },
  "workday-consultant": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Workday+Consultant&location=India",
    naukri: "https://www.naukri.com/workday-consultant-jobs",
    indeed: "https://in.indeed.com/jobs?q=workday+consultant&l=India",
    internshala:
      "https://internshala.com/internships/hr-management-internship/",
  },
  "mulesoft-developer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=MuleSoft+Developer&location=India",
    naukri: "https://www.naukri.com/mulesoft-developer-jobs",
    indeed: "https://in.indeed.com/jobs?q=mulesoft+developer&l=India",
    internshala:
      "https://internshala.com/internships/software-development-internship/",
  },

  // ── NON-CODING IT ─────────────────────────────────────────────────────────
  "product-manager": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Product+Manager&location=India",
    naukri: "https://www.naukri.com/product-manager-jobs",
    indeed: "https://in.indeed.com/jobs?q=product+manager&l=India",
    internshala:
      "https://internshala.com/internships/product-management-internship/",
  },
  "business-analyst": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Business+Analyst&location=India",
    naukri: "https://www.naukri.com/business-analyst-jobs",
    indeed: "https://in.indeed.com/jobs?q=business+analyst&l=India",
    internshala:
      "https://internshala.com/internships/business-analysis-internship/",
  },
  "project-manager": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Project+Manager&location=India",
    naukri: "https://www.naukri.com/project-manager-jobs",
    indeed: "https://in.indeed.com/jobs?q=project+manager&l=India",
    internshala:
      "https://internshala.com/internships/project-management-internship/",
  },
  "scrum-master": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Scrum+Master&location=India",
    naukri: "https://www.naukri.com/scrum-master-jobs",
    indeed: "https://in.indeed.com/jobs?q=scrum+master&l=India",
    internshala: "https://internshala.com/internships/scrum-master-internship/",
  },
  "technical-writer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Technical+Writer&location=India",
    naukri: "https://www.naukri.com/technical-writer-jobs",
    indeed: "https://in.indeed.com/jobs?q=technical+writer&l=India",
    internshala:
      "https://internshala.com/internships/technical-writing-internship/",
  },
  "it-recruiter": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=IT+Recruiter&location=India",
    naukri: "https://www.naukri.com/it-recruiter-jobs",
    indeed: "https://in.indeed.com/jobs?q=it+recruiter&l=India",
    internshala:
      "https://internshala.com/internships/hr-management-internship/",
  },
  "pre-sales-consultant": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Pre+Sales+Consultant&location=India",
    naukri: "https://www.naukri.com/pre-sales-consultant-jobs",
    indeed: "https://in.indeed.com/jobs?q=pre+sales+consultant&l=India",
    internshala: "https://internshala.com/internships/sales-internship/",
  },
  "solutions-architect": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Solutions+Architect&location=India",
    naukri: "https://www.naukri.com/solutions-architect-jobs",
    indeed: "https://in.indeed.com/jobs?q=solutions+architect&l=India",
    internshala:
      "https://internshala.com/internships/software-development-internship/",
  },
  "it-consultant": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=IT+Consultant&location=India",
    naukri: "https://www.naukri.com/it-consultant-jobs",
    indeed: "https://in.indeed.com/jobs?q=it+consultant&l=India",
    internshala: "https://internshala.com/internships/it-support-internship/",
  },
  "change-management-consultant": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Change+Management+Consultant&location=India",
    naukri: "https://www.naukri.com/change-management-consultant-jobs",
    indeed: "https://in.indeed.com/jobs?q=change+management+consultant&l=India",
    internshala:
      "https://internshala.com/internships/management-consulting-internship/",
  },
  "program-manager": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Program+Manager&location=India",
    naukri: "https://www.naukri.com/program-manager-jobs",
    indeed: "https://in.indeed.com/jobs?q=program+manager&l=India",
    internshala:
      "https://internshala.com/internships/project-management-internship/",
  },
  "agile-coach": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Agile+Coach&location=India",
    naukri: "https://www.naukri.com/agile-coach-jobs",
    indeed: "https://in.indeed.com/jobs?q=agile+coach&l=India",
    internshala:
      "https://internshala.com/internships/project-management-internship/",
  },
  "release-manager": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Release+Manager&location=India",
    naukri: "https://www.naukri.com/release-manager-jobs",
    indeed: "https://in.indeed.com/jobs?q=release+manager&l=India",
    internshala: "https://internshala.com/internships/devops-internship/",
  },
  "it-vendor-manager": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=IT+Vendor+Manager&location=India",
    naukri: "https://www.naukri.com/it-vendor-manager-jobs",
    indeed: "https://in.indeed.com/jobs?q=it+vendor+manager&l=India",
    internshala:
      "https://internshala.com/internships/management-consulting-internship/",
  },
  "it-procurement-specialist": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=IT+Procurement+Specialist&location=India",
    naukri: "https://www.naukri.com/it-procurement-specialist-jobs",
    indeed: "https://in.indeed.com/jobs?q=it+procurement+specialist&l=India",
    internshala:
      "https://internshala.com/internships/management-consulting-internship/",
  },

  // ── DESIGN & CREATIVE ─────────────────────────────────────────────────────
  "ui-ux-designer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=UI+UX+Designer&location=India",
    naukri: "https://www.naukri.com/ui-ux-designer-jobs",
    indeed: "https://in.indeed.com/jobs?q=ui+ux+designer&l=India",
    internshala: "https://internshala.com/internships/ui-ux-design-internship/",
  },
  "graphic-designer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Graphic+Designer&location=India",
    naukri: "https://www.naukri.com/graphic-designer-jobs",
    indeed: "https://in.indeed.com/jobs?q=graphic+designer&l=India",
    internshala:
      "https://internshala.com/internships/graphic-design-internship/",
  },
  "product-designer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Product+Designer&location=India",
    naukri: "https://www.naukri.com/product-designer-jobs",
    indeed: "https://in.indeed.com/jobs?q=product+designer&l=India",
    internshala: "https://internshala.com/internships/ui-ux-design-internship/",
  },
  "motion-designer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Motion+Designer&location=India",
    naukri: "https://www.naukri.com/motion-designer-jobs",
    indeed:
      "https://in.indeed.com/jobs?q=motion+designer+motion+graphics&l=India",
    internshala:
      "https://internshala.com/internships/graphic-design-internship/",
  },
  "video-editor": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Video+Editor&location=India",
    naukri: "https://www.naukri.com/video-editor-jobs",
    indeed: "https://in.indeed.com/jobs?q=video+editor&l=India",
    internshala:
      "https://internshala.com/internships/video-editing-internship/",
  },
  "ux-researcher": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=UX+Researcher&location=India",
    naukri: "https://www.naukri.com/ux-researcher-jobs",
    indeed: "https://in.indeed.com/jobs?q=ux+researcher&l=India",
    internshala: "https://internshala.com/internships/ui-ux-design-internship/",
  },
  "brand-designer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Brand+Designer&location=India",
    naukri: "https://www.naukri.com/brand-designer-jobs",
    indeed: "https://in.indeed.com/jobs?q=brand+designer&l=India",
    internshala:
      "https://internshala.com/internships/graphic-design-internship/",
  },
  "visual-designer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Visual+Designer&location=India",
    naukri: "https://www.naukri.com/visual-designer-jobs",
    indeed: "https://in.indeed.com/jobs?q=visual+designer&l=India",
    internshala:
      "https://internshala.com/internships/graphic-design-internship/",
  },
  "web-designer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Web+Designer&location=India",
    naukri: "https://www.naukri.com/web-designer-jobs",
    indeed: "https://in.indeed.com/jobs?q=web+designer&l=India",
    internshala: "https://internshala.com/internships/web-design-internship/",
  },
  "interaction-designer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Interaction+Designer&location=India",
    naukri: "https://www.naukri.com/interaction-designer-jobs",
    indeed: "https://in.indeed.com/jobs?q=interaction+designer&l=India",
    internshala: "https://internshala.com/internships/ui-ux-design-internship/",
  },
  "content-designer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Content+Designer&location=India",
    naukri: "https://www.naukri.com/content-designer-jobs",
    indeed: "https://in.indeed.com/jobs?q=content+designer&l=India",
    internshala:
      "https://internshala.com/internships/content-writing-internship/",
  },
  "design-system-lead": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Design+System+Lead&location=India",
    naukri: "https://www.naukri.com/design-system-lead-jobs",
    indeed: "https://in.indeed.com/jobs?q=design+system+lead&l=India",
    internshala: "https://internshala.com/internships/ui-ux-design-internship/",
  },

  // ── MARKETING & GROWTH ────────────────────────────────────────────────────
  "digital-marketing-manager": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Digital+Marketing+Manager&location=India",
    naukri: "https://www.naukri.com/digital-marketing-manager-jobs",
    indeed: "https://in.indeed.com/jobs?q=digital+marketing+manager&l=India",
    internshala:
      "https://internshala.com/internships/digital-marketing-internship/",
  },
  "seo-specialist": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=SEO+Specialist&location=India",
    naukri: "https://www.naukri.com/seo-specialist-jobs",
    indeed: "https://in.indeed.com/jobs?q=seo+specialist&l=India",
    internshala: "https://internshala.com/internships/seo-internship/",
  },
  "social-media-manager": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Social+Media+Manager&location=India",
    naukri: "https://www.naukri.com/social-media-manager-jobs",
    indeed: "https://in.indeed.com/jobs?q=social+media+manager&l=India",
    internshala:
      "https://internshala.com/internships/social-media-marketing-internship/",
  },
  "content-writer": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Content+Writer&location=India",
    naukri: "https://www.naukri.com/content-writer-jobs",
    indeed: "https://in.indeed.com/jobs?q=content+writer&l=India",
    internshala:
      "https://internshala.com/internships/content-writing-internship/",
  },
  "growth-hacker": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Growth+Hacker&location=India",
    naukri: "https://www.naukri.com/growth-hacker-jobs",
    indeed:
      "https://in.indeed.com/jobs?q=growth+hacker+growth+marketing&l=India",
    internshala:
      "https://internshala.com/internships/digital-marketing-internship/",
  },
  "performance-marketing-manager": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Performance+Marketing+Manager&location=India",
    naukri: "https://www.naukri.com/performance-marketing-manager-jobs",
    indeed:
      "https://in.indeed.com/jobs?q=performance+marketing+manager&l=India",
    internshala:
      "https://internshala.com/internships/digital-marketing-internship/",
  },
  "email-marketing-specialist": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Email+Marketing+Specialist&location=India",
    naukri: "https://www.naukri.com/email-marketing-specialist-jobs",
    indeed: "https://in.indeed.com/jobs?q=email+marketing+specialist&l=India",
    internshala:
      "https://internshala.com/internships/digital-marketing-internship/",
  },
  "brand-marketing-manager": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Brand+Marketing+Manager&location=India",
    naukri: "https://www.naukri.com/brand-marketing-manager-jobs",
    indeed: "https://in.indeed.com/jobs?q=brand+marketing+manager&l=India",
    internshala:
      "https://internshala.com/internships/digital-marketing-internship/",
  },
  "product-marketing-manager": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Product+Marketing+Manager&location=India",
    naukri: "https://www.naukri.com/product-marketing-manager-jobs",
    indeed: "https://in.indeed.com/jobs?q=product+marketing+manager&l=India",
    internshala:
      "https://internshala.com/internships/digital-marketing-internship/",
  },

  // ── NICHE ROLES ───────────────────────────────────────────────────────────
  "fraud-analyst": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Fraud+Analyst&location=India",
    naukri: "https://www.naukri.com/fraud-analyst-jobs",
    indeed: "https://in.indeed.com/jobs?q=fraud+analyst&l=India",
    internshala:
      "https://internshala.com/internships/banking-finance-internship/",
  },
  "risk-analytics-specialist": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Risk+Analytics+Specialist&location=India",
    naukri: "https://www.naukri.com/risk-analyst-jobs",
    indeed: "https://in.indeed.com/jobs?q=risk+analytics+specialist&l=India",
    internshala:
      "https://internshala.com/internships/banking-finance-internship/",
  },
  "technology-consultant": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Technology+Consultant&location=India",
    naukri: "https://www.naukri.com/technology-consultant-jobs",
    indeed: "https://in.indeed.com/jobs?q=technology+consultant&l=India",
    internshala:
      "https://internshala.com/internships/management-consulting-internship/",
  },
  "finance-analyst": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Finance+Analyst&location=India",
    naukri: "https://www.naukri.com/finance-analyst-jobs",
    indeed: "https://in.indeed.com/jobs?q=finance+analyst&l=India",
    internshala:
      "https://internshala.com/internships/banking-finance-internship/",
  },
  "compliance-analyst": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Compliance+Analyst&location=India",
    naukri: "https://www.naukri.com/compliance-analyst-jobs",
    indeed: "https://in.indeed.com/jobs?q=compliance+analyst&l=India",
    internshala:
      "https://internshala.com/internships/banking-finance-internship/",
  },
  "business-process-analyst": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=Business+Process+Analyst&location=India",
    naukri: "https://www.naukri.com/business-process-analyst-jobs",
    indeed: "https://in.indeed.com/jobs?q=business+process+analyst&l=India",
    internshala:
      "https://internshala.com/internships/business-analysis-internship/",
  },
  "it-audit-specialist": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=IT+Audit+Specialist&location=India",
    naukri: "https://www.naukri.com/it-audit-specialist-jobs",
    indeed: "https://in.indeed.com/jobs?q=it+audit+specialist&l=India",
    internshala:
      "https://internshala.com/internships/banking-finance-internship/",
  },
  "it-portfolio-manager": {
    linkedin:
      "https://www.linkedin.com/jobs/search/?keywords=IT+Portfolio+Manager&location=India",
    naukri: "https://www.naukri.com/it-portfolio-manager-jobs",
    indeed: "https://in.indeed.com/jobs?q=it+portfolio+manager&l=India",
    internshala:
      "https://internshala.com/internships/project-management-internship/",
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
