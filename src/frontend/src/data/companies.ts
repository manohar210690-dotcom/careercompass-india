export interface Company {
  id: string;
  name: string;
  description: string;
  rolesHiring: string[];
  careerUrl: string;
  initials: string;
  colorClass: string;
}

export const companies: Company[] = [
  {
    id: "tcs",
    name: "TCS",
    description:
      "India's largest IT services company, hiring freshers across all IT domains in massive numbers every year.",
    rolesHiring: [
      "Development",
      "Data",
      "Infrastructure",
      "SAP/ERP",
      "Support",
      "Non-Coding IT",
    ],
    careerUrl: "https://www.tcs.com/careers",
    initials: "TCS",
    colorClass: "bg-blue-600",
  },
  {
    id: "infosys",
    name: "Infosys",
    description:
      "Global IT services leader with strong campus hiring programs for engineering graduates across India.",
    rolesHiring: [
      "Development",
      "Data",
      "AI/ML",
      "Infrastructure",
      "SAP/ERP",
      "Non-Coding IT",
    ],
    careerUrl: "https://www.infosys.com/careers",
    initials: "INF",
    colorClass: "bg-indigo-600",
  },
  {
    id: "wipro",
    name: "Wipro",
    description:
      "Major IT and consulting firm with WILP and talent transformation programs for fresher engineers.",
    rolesHiring: [
      "Development",
      "Data",
      "Infrastructure",
      "SAP/ERP",
      "Tools & Platforms",
      "Support",
    ],
    careerUrl: "https://careers.wipro.com",
    initials: "WIP",
    colorClass: "bg-violet-600",
  },
  {
    id: "hcl",
    name: "HCL Technologies",
    description:
      "Technology company known for infrastructure services, product engineering, and IT outsourcing at scale.",
    rolesHiring: [
      "Development",
      "Infrastructure",
      "Support",
      "SAP/ERP",
      "Tools & Platforms",
    ],
    careerUrl: "https://www.hcltech.com/careers",
    initials: "HCL",
    colorClass: "bg-green-700",
  },
  {
    id: "tech-mahindra",
    name: "Tech Mahindra",
    description:
      "IT services and consulting company with strong telecom, manufacturing, and digital transformation practices.",
    rolesHiring: [
      "Development",
      "Data",
      "Infrastructure",
      "Support",
      "Non-Coding IT",
    ],
    careerUrl: "https://careers.techmahindra.com",
    initials: "TM",
    colorClass: "bg-red-700",
  },
  {
    id: "cognizant",
    name: "Cognizant",
    description:
      "IT services company focused on digital transformation, hiring freshers for data, development, and BPO roles.",
    rolesHiring: ["Development", "Data", "Support", "SAP/ERP", "Non-Coding IT"],
    careerUrl: "https://careers.cognizant.com",
    initials: "COG",
    colorClass: "bg-sky-700",
  },
  {
    id: "google-india",
    name: "Google India",
    description:
      "Google's India operations hire for engineering, AI/ML, cloud, and developer relations roles in Bengaluru and Hyderabad.",
    rolesHiring: [
      "Development",
      "AI/ML",
      "Data",
      "Infrastructure",
      "Design & Creative",
    ],
    careerUrl: "https://careers.google.com",
    initials: "GGL",
    colorClass: "bg-amber-500",
  },
  {
    id: "amazon-india",
    name: "Amazon India",
    description:
      "Amazon hires across engineering, data science, AI/ML, and operations for AWS and Amazon.in across Indian cities.",
    rolesHiring: [
      "Development",
      "Data",
      "AI/ML",
      "Infrastructure",
      "Marketing & Growth",
    ],
    careerUrl: "https://www.amazon.jobs/en/locations/india",
    initials: "AMZ",
    colorClass: "bg-orange-500",
  },
  {
    id: "microsoft-india",
    name: "Microsoft India",
    description:
      "Microsoft India hires for engineering, cloud (Azure), AI, and developer tools across Hyderabad and Bengaluru offices.",
    rolesHiring: [
      "Development",
      "AI/ML",
      "Infrastructure",
      "Tools & Platforms",
      "Design & Creative",
    ],
    careerUrl: "https://careers.microsoft.com",
    initials: "MSF",
    colorClass: "bg-cyan-600",
  },
  {
    id: "ibm-india",
    name: "IBM India",
    description:
      "IBM India is a major employer for cloud, AI, data, and IT services across Bengaluru, Hyderabad, and Pune.",
    rolesHiring: ["Development", "Data", "AI/ML", "Infrastructure", "SAP/ERP"],
    careerUrl: "https://www.ibm.com/in-en/employment",
    initials: "IBM",
    colorClass: "bg-blue-800",
  },
  {
    id: "sap-india",
    name: "SAP India",
    description:
      "SAP India's R&D and sales offices hire for development, consulting, and product management across Bengaluru and Pune.",
    rolesHiring: ["SAP/ERP", "Development", "Data", "Non-Coding IT"],
    careerUrl: "https://jobs.sap.com",
    initials: "SAP",
    colorClass: "bg-teal-600",
  },
  {
    id: "servicenow-india",
    name: "ServiceNow India",
    description:
      "ServiceNow's India engineering center in Hyderabad hires for platform development, support, and consulting roles.",
    rolesHiring: ["SAP/ERP", "Development", "Support", "Non-Coding IT"],
    careerUrl: "https://careers.servicenow.com",
    initials: "SNW",
    colorClass: "bg-green-600",
  },
  {
    id: "salesforce-india",
    name: "Salesforce India",
    description:
      "Salesforce Hyderabad and Bengaluru hubs hire for CRM development, product management, and marketing roles.",
    rolesHiring: [
      "SAP/ERP",
      "Development",
      "Marketing & Growth",
      "Non-Coding IT",
    ],
    careerUrl: "https://salesforce.com/company/careers",
    initials: "SFR",
    colorClass: "bg-sky-500",
  },
  {
    id: "oracle-india",
    name: "Oracle India",
    description:
      "Oracle India hires for ERP consulting, database engineering, and cloud services across multiple India locations.",
    rolesHiring: ["SAP/ERP", "Development", "Data", "Infrastructure"],
    careerUrl: "https://oracle.com/corporate/careers",
    initials: "ORC",
    colorClass: "bg-red-600",
  },
  {
    id: "accenture",
    name: "Accenture India",
    description:
      "Global consulting and IT services firm with large fresher hiring for digital, cloud, AI, and design practices.",
    rolesHiring: [
      "Development",
      "Data",
      "Design & Creative",
      "Non-Coding IT",
      "SAP/ERP",
    ],
    careerUrl: "https://www.accenture.com/in-en/careers",
    initials: "ACC",
    colorClass: "bg-purple-700",
  },
  {
    id: "capgemini",
    name: "Capgemini India",
    description:
      "French IT services giant with large India operations, hiring freshers in technology, consulting, and digital roles.",
    rolesHiring: [
      "Development",
      "Data",
      "Infrastructure",
      "SAP/ERP",
      "Non-Coding IT",
    ],
    careerUrl: "https://www.capgemini.com/in-en/careers",
    initials: "CAP",
    colorClass: "bg-blue-700",
  },
  {
    id: "flipkart",
    name: "Flipkart",
    description:
      "India's homegrown e-commerce giant hiring for product, engineering, data, design, and marketing across Bengaluru.",
    rolesHiring: [
      "Development",
      "Data",
      "AI/ML",
      "Design & Creative",
      "Marketing & Growth",
    ],
    careerUrl: "https://www.flipkartcareers.com",
    initials: "FLK",
    colorClass: "bg-yellow-500",
  },
  {
    id: "swiggy",
    name: "Swiggy",
    description:
      "India's leading food and quick commerce platform with engineering, data, design, and marketing roles in Bengaluru.",
    rolesHiring: [
      "Development",
      "Data",
      "Design & Creative",
      "Marketing & Growth",
      "AI/ML",
    ],
    careerUrl: "https://careers.swiggy.com",
    initials: "SWG",
    colorClass: "bg-orange-600",
  },
  {
    id: "zomato",
    name: "Zomato",
    description:
      "Food tech platform known for bold brand marketing, strong engineering, and data roles at their Gurugram HQ.",
    rolesHiring: [
      "Development",
      "Data",
      "Design & Creative",
      "Marketing & Growth",
    ],
    careerUrl: "https://www.zomato.com/careers",
    initials: "ZOM",
    colorClass: "bg-red-500",
  },
  {
    id: "paytm",
    name: "Paytm",
    description:
      "Fintech leader hiring for payments, financial products, engineering, and data roles across Noida and Bengaluru.",
    rolesHiring: [
      "Development",
      "Data",
      "AI/ML",
      "Marketing & Growth",
      "Non-Coding IT",
    ],
    careerUrl: "https://jobs.paytm.com",
    initials: "PAY",
    colorClass: "bg-blue-500",
  },
  {
    id: "myntra",
    name: "Myntra",
    description:
      "Fashion e-commerce platform hiring for design, technology, and marketing roles with a strong design culture.",
    rolesHiring: [
      "Development",
      "Design & Creative",
      "Data",
      "Marketing & Growth",
    ],
    careerUrl: "https://careers.myntra.com",
    initials: "MYN",
    colorClass: "bg-pink-600",
  },
  {
    id: "razorpay",
    name: "Razorpay",
    description:
      "Fast-growing fintech startup hiring for engineering, product, design, and marketing in their Bengaluru headquarters.",
    rolesHiring: [
      "Development",
      "Design & Creative",
      "Marketing & Growth",
      "Non-Coding IT",
    ],
    careerUrl: "https://razorpay.com/jobs",
    initials: "RZP",
    colorClass: "bg-indigo-500",
  },
  {
    id: "publicis-sapient",
    name: "Publicis Sapient",
    description:
      "Digital transformation consultancy hiring for design, marketing, engineering, and strategy across India offices.",
    rolesHiring: [
      "Design & Creative",
      "Marketing & Growth",
      "Development",
      "Non-Coding IT",
    ],
    careerUrl: "https://www.publicissapient.com/careers",
    initials: "PS",
    colorClass: "bg-emerald-600",
  },
];
