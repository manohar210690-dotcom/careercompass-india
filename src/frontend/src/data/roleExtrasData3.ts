// roleExtrasData3.ts — Free Courses, Mock Tests, Interview Prep for Product, UX, Scrum, SAP, and Business roles
import type { FreeCourse, InterviewPrep, MockTest } from "./roleExtras";

interface RoleExtras {
  freeCourses?: FreeCourse[];
  mockTests?: MockTest[];
  interviewPrep?: InterviewPrep[];
}

export const roleExtrasData3: Record<string, RoleExtras> = {
  "business-analyst": {
    freeCourses: [
      {
        name: "Business Analysis Fundamentals – Udemy Free",
        url: "https://www.youtube.com/watch?v=w7i5-KFfhyk",
        provider: "freeCodeCamp / Udemy",
        platform: "YouTube",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Business Analyst in Hindi – Complete Course",
        url: "https://www.youtube.com/results?search_query=business+analyst+course+hindi",
        provider: "Simplilearn Hindi",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "BA Interview Prep Telugu",
        url: "https://www.youtube.com/results?search_query=business+analyst+interview+telugu",
        provider: "Telugu Interview Prep",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "Google Project Management Certificate",
        url: "https://www.coursera.org/professional-certificates/google-project-management",
        provider: "Google / Coursera",
        platform: "Coursera",
        language: "English",
        level: "Beginner",
      },
      {
        name: "SQL for Business Analysts",
        url: "https://mode.com/sql-tutorial/",
        provider: "Mode Analytics",
        platform: "YouTube",
        language: "English",
        level: "Beginner",
      },
      {
        name: "BABOK & CBAP Free Resources",
        url: "https://www.iiba.org/learning-development/free-resources/",
        provider: "IIBA",
        platform: "edX",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "Agile Business Analysis Hindi",
        url: "https://www.youtube.com/results?search_query=agile+business+analysis+hindi",
        provider: "Agile Coach India",
        platform: "YouTube",
        language: "Hindi",
        level: "Intermediate",
      },
    ],
    mockTests: [
      {
        level: "basic",
        passingScore: 60,
        questions: [
          {
            id: "ba-b-1",
            question: "What is the primary role of a Business Analyst?",
            topic: "BA Fundamentals",
            explanation:
              "A BA bridges the gap between business stakeholders and technical teams by gathering, analyzing, and documenting requirements to enable effective solutions.",
            options: [
              { text: "To write code for software systems", isCorrect: false },
              {
                text: "To bridge the gap between business needs and technical solutions",
                isCorrect: true,
              },
              { text: "To manage the project budget", isCorrect: false },
              { text: "To test and QA software", isCorrect: false },
            ],
          },
          {
            id: "ba-b-2",
            question: "What is a use case in business analysis?",
            topic: "Requirements",
            explanation:
              "A use case describes how a user (actor) interacts with a system to achieve a specific goal. It captures functional requirements from the user's perspective.",
            options: [
              {
                text: "A business case for project approval",
                isCorrect: false,
              },
              {
                text: "A description of how an actor interacts with a system to achieve a goal",
                isCorrect: true,
              },
              { text: "A test case for QA", isCorrect: false },
              { text: "A diagram of database tables", isCorrect: false },
            ],
          },
          {
            id: "ba-b-3",
            question: "What does SWOT analysis stand for?",
            topic: "Analysis Techniques",
            explanation:
              "SWOT stands for Strengths, Weaknesses, Opportunities, and Threats — a framework for evaluating a business or project from internal (S/W) and external (O/T) perspectives.",
            options: [
              { text: "System, Work, Operation, Test", isCorrect: false },
              {
                text: "Strengths, Weaknesses, Opportunities, Threats",
                isCorrect: true,
              },
              { text: "Software, Workflow, Objects, Tasks", isCorrect: false },
              { text: "Scope, Work, Output, Timeline", isCorrect: false },
            ],
          },
          {
            id: "ba-b-4",
            question:
              "What is the difference between functional and non-functional requirements?",
            topic: "Requirements",
            explanation:
              "Functional requirements describe what the system should DO (features, behaviors). Non-functional requirements describe HOW the system should perform (speed, security, scalability).",
            options: [
              {
                text: "Functional are for developers; non-functional for testers",
                isCorrect: false,
              },
              {
                text: "Functional = what system does; non-functional = how well it does it",
                isCorrect: true,
              },
              {
                text: "Non-functional requirements are optional",
                isCorrect: false,
              },
              {
                text: "They describe the same thing with different names",
                isCorrect: false,
              },
            ],
          },
          {
            id: "ba-b-5",
            question: "What is a stakeholder in a project?",
            topic: "Stakeholder Management",
            explanation:
              "A stakeholder is anyone who has an interest in or is affected by a project — including sponsors, end users, customers, development teams, regulators, and vendors.",
            options: [
              {
                text: "Only the project sponsor and manager",
                isCorrect: false,
              },
              {
                text: "Anyone with interest in or affected by the project outcome",
                isCorrect: true,
              },
              { text: "Shareholders of the company", isCorrect: false },
              { text: "External clients only", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "ba-i-1",
            question: "What is a user story in Agile?",
            topic: "Agile",
            explanation:
              'A user story describes a feature from the end-user\'s perspective: "As a [user], I want [goal] so that [reason]." It focuses on the "why" and captures a small increment of user value.',
            options: [
              { text: "A detailed technical specification", isCorrect: false },
              {
                text: '"As a [user], I want [goal] so that [reason]" — user-centered feature description',
                isCorrect: true,
              },
              { text: "A daily standup report", isCorrect: false },
              { text: "A test scenario document", isCorrect: false },
            ],
          },
          {
            id: "ba-i-2",
            question: "What is a process flow diagram?",
            topic: "Modeling",
            explanation:
              "A process flow diagram (flowchart/BPMN) visually maps the steps, decision points, actors, and flow of a business process — helping identify inefficiencies and communicate to stakeholders.",
            options: [
              { text: "An org chart of the company", isCorrect: false },
              {
                text: "A visual map of process steps, decisions, and actors",
                isCorrect: true,
              },
              { text: "A Gantt chart for project timelines", isCorrect: false },
              { text: "A network diagram of servers", isCorrect: false },
            ],
          },
          {
            id: "ba-i-3",
            question: "What is the MoSCoW prioritization technique?",
            topic: "Requirements Prioritization",
            explanation:
              "MoSCoW: Must have (essential), Should have (important but not critical), Could have (nice to have), Won't have (out of scope this time). Used to prioritize requirements with stakeholders.",
            options: [
              {
                text: "A city-based requirement gathering approach",
                isCorrect: false,
              },
              {
                text: "Must/Should/Could/Won't — a framework for prioritizing requirements",
                isCorrect: true,
              },
              { text: "A metrics scoring system", isCorrect: false },
              { text: "A stakeholder engagement model", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "advanced",
        passingScore: 70,
        questions: [
          {
            id: "ba-a-1",
            question:
              "How do you handle conflicting requirements from different stakeholders?",
            topic: "Stakeholder Management",
            explanation:
              "Conflicting requirements need structured resolution: document each stakeholder's perspective, facilitate a workshop, trace requirements to business objectives, use MoSCoW or weighted scoring, escalate to sponsor when needed.",
            options: [
              {
                text: "Always take the most senior stakeholder's view",
                isCorrect: false,
              },
              {
                text: "Facilitate discussion, trace to objectives, use prioritization frameworks, escalate if needed",
                isCorrect: true,
              },
              {
                text: "Implement all conflicting requirements and let users decide",
                isCorrect: false,
              },
              {
                text: "Document conflicts and leave them for the developer to resolve",
                isCorrect: false,
              },
            ],
          },
          {
            id: "ba-a-2",
            question:
              "What is requirements traceability and why is it important?",
            topic: "Requirements Management",
            explanation:
              "Requirements traceability links each requirement to its source (business objective), design artifacts, implementation, and test cases. It ensures complete coverage and enables impact analysis when requirements change.",
            options: [
              { text: "Tracking who wrote each requirement", isCorrect: false },
              {
                text: "Linking requirements to sources, design, code, and tests for complete coverage",
                isCorrect: true,
              },
              {
                text: "A version control system for requirements",
                isCorrect: false,
              },
              { text: "Tracing bugs back to requirements", isCorrect: false },
            ],
          },
          {
            id: "ba-a-3",
            question: "What is a gap analysis in business analysis?",
            topic: "Analysis Techniques",
            explanation:
              "A gap analysis compares the current state (AS-IS) to the desired future state (TO-BE), identifying the gaps. It defines what changes — process, technology, people — are needed to bridge them.",
            options: [
              { text: "Analyzing gaps in test coverage", isCorrect: false },
              {
                text: "Comparing current state (AS-IS) to desired state (TO-BE) to identify needed changes",
                isCorrect: true,
              },
              { text: "Finding missing data in a database", isCorrect: false },
              {
                text: "Identifying skill gaps in a development team",
                isCorrect: false,
              },
            ],
          },
        ],
      },
    ],
    interviewPrep: [
      {
        level: "basic",
        questions: [
          {
            id: "ba-ip-b-1",
            question: "How do you elicit requirements from stakeholders?",
            talkingPoints: [
              "Interviews: one-on-one structured or semi-structured conversations",
              "Workshops: group sessions for consensus and discovery",
              "Observation: shadowing users in their actual work environment",
              "Document analysis: review existing systems, reports, processes",
              "Prototyping: show mockups to elicit feedback",
            ],
            keywords: [
              "elicitation techniques",
              "workshops",
              "interviews",
              "observation",
              "JAD sessions",
            ],
          },
          {
            id: "ba-ip-b-2",
            question: "What makes a good requirement?",
            talkingPoints: [
              "SMART: Specific, Measurable, Achievable, Relevant, Time-bound",
              "Unambiguous: only one possible interpretation",
              "Testable: QA can write a pass/fail test for it",
              "Traceable: linked to a business objective",
              "Complete: no missing information",
            ],
            keywords: [
              "SMART",
              "INVEST",
              "acceptance criteria",
              "testable",
              "unambiguous",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "ba-ip-i-1",
            question: "How do you manage scope creep in a project?",
            talkingPoints: [
              "Establish a clear baseline scope in a formal scope statement",
              "Implement a formal change control process — no informal additions",
              "Evaluate impact (cost, time, risk) of every change request",
              "Communicate tradeoffs to stakeholders: adding scope means extending timeline or cutting existing scope",
              "Use backlog prioritization in Agile to defer non-critical additions",
            ],
            keywords: [
              "scope creep",
              "change control",
              "change request",
              "baseline",
              "backlog prioritization",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "ba-ip-a-1",
            question:
              "Describe how you would approach a digital transformation project as a BA.",
            talkingPoints: [
              "Conduct AS-IS process mapping and maturity assessment",
              "Engage all stakeholder groups — not just IT, also operations and leadership",
              "Define TO-BE target operating model and prioritize initiatives",
              "Manage change: training, communication, change champions",
              "Define success metrics and measure post-implementation",
            ],
            keywords: [
              "AS-IS/TO-BE",
              "change management",
              "operating model",
              "stakeholder alignment",
              "ROI measurement",
            ],
          },
        ],
      },
    ],
  },

  "scrum-master": {
    freeCourses: [
      {
        name: "Scrum Full Course – Free",
        url: "https://www.youtube.com/watch?v=gy1c4_YixCo",
        provider: "freeCodeCamp / Scrum Alliance",
        platform: "YouTube",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Agile & Scrum in Hindi",
        url: "https://www.youtube.com/results?search_query=agile+scrum+tutorial+hindi",
        provider: "Simplilearn Hindi",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "Agile Scrum Telugu Tutorial",
        url: "https://www.youtube.com/results?search_query=scrum+master+telugu",
        provider: "Telugu Interview Prep",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "Professional Scrum Master PSM I Prep",
        url: "https://www.scrum.org/open-assessments",
        provider: "Scrum.org",
        platform: "edX",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "Google Project Management (Agile Module)",
        url: "https://www.coursera.org/professional-certificates/google-project-management",
        provider: "Google / Coursera",
        platform: "Coursera",
        language: "English",
        level: "Beginner",
      },
    ],
    mockTests: [
      {
        level: "basic",
        passingScore: 60,
        questions: [
          {
            id: "sm-b-1",
            question: "What are the three roles in the Scrum framework?",
            topic: "Scrum Basics",
            explanation:
              "Scrum has three accountabilities: Product Owner (defines what to build), Scrum Master (facilitates the process), and Developers (builds the product).",
            options: [
              { text: "Manager, Developer, Tester", isCorrect: false },
              {
                text: "Product Owner, Scrum Master, Developers",
                isCorrect: true,
              },
              { text: "Sponsor, Analyst, Programmer", isCorrect: false },
              { text: "BA, PM, QA", isCorrect: false },
            ],
          },
          {
            id: "sm-b-2",
            question: "What is a Sprint in Scrum?",
            topic: "Scrum Events",
            explanation:
              "A Sprint is a fixed-length time box (1-4 weeks, typically 2 weeks) during which the Development Team works to deliver a potentially shippable product increment.",
            options: [
              { text: "A speed coding competition", isCorrect: false },
              {
                text: "A fixed time box (1-4 weeks) for delivering a product increment",
                isCorrect: true,
              },
              { text: "A meeting to review project status", isCorrect: false },
              { text: "A deployment to production", isCorrect: false },
            ],
          },
          {
            id: "sm-b-3",
            question: "What is the purpose of a Daily Scrum?",
            topic: "Scrum Events",
            explanation:
              "The Daily Scrum is a 15-minute daily synchronization for the Developers to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as needed.",
            options: [
              { text: "A status report to management", isCorrect: false },
              {
                text: "A 15-min daily sync for Developers to inspect progress and adapt the plan",
                isCorrect: true,
              },
              { text: "A team problem-solving meeting", isCorrect: false },
              {
                text: "A stakeholder demo of completed work",
                isCorrect: false,
              },
            ],
          },
          {
            id: "sm-b-4",
            question: "What is a Product Backlog?",
            topic: "Scrum Artifacts",
            explanation:
              "The Product Backlog is an ordered list of everything that might be needed in the product — user stories, bugs, technical debt. The Product Owner owns and manages it.",
            options: [
              { text: "A list of completed features", isCorrect: false },
              {
                text: "An ordered list of potential product improvements owned by the Product Owner",
                isCorrect: true,
              },
              { text: "The current sprint's task list", isCorrect: false },
              { text: "A backlog of unresolved defects", isCorrect: false },
            ],
          },
          {
            id: "sm-b-5",
            question: "What is the role of the Scrum Master?",
            topic: "Scrum Roles",
            explanation:
              "The Scrum Master serves the team by coaching Scrum, removing impediments, facilitating Scrum events, and protecting the team from external interruptions — a servant-leader, not a manager.",
            options: [
              { text: "Assigning tasks to team members", isCorrect: false },
              {
                text: "Serving as a servant-leader: coaching Scrum, removing impediments, facilitating events",
                isCorrect: true,
              },
              { text: "Approving features before release", isCorrect: false },
              {
                text: "Managing the project budget and timeline",
                isCorrect: false,
              },
            ],
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "sm-i-1",
            question: "What is the difference between Scrum and Kanban?",
            topic: "Agile Frameworks",
            explanation:
              "Scrum uses fixed-length sprints with defined roles, events, and artifacts. Kanban is a flow-based system with no prescribed iterations — work flows continuously, limited by WIP limits.",
            options: [
              {
                text: "Scrum is for software; Kanban is for manufacturing",
                isCorrect: false,
              },
              {
                text: "Scrum has fixed sprints and roles; Kanban is continuous flow with WIP limits",
                isCorrect: true,
              },
              { text: "Kanban is a subset of Scrum", isCorrect: false },
              { text: "They are identical methodologies", isCorrect: false },
            ],
          },
          {
            id: "sm-i-2",
            question: "What is velocity in Scrum?",
            topic: "Scrum Metrics",
            explanation:
              "Velocity is the amount of work (measured in story points) a team completes in a Sprint. It is used for forecasting, not as a performance target — comparing velocity across teams is an anti-pattern.",
            options: [
              { text: "How fast developers type code", isCorrect: false },
              {
                text: "Story points completed per sprint, used for forecasting",
                isCorrect: true,
              },
              { text: "The speed of the CI/CD pipeline", isCorrect: false },
              { text: "The number of bugs fixed per sprint", isCorrect: false },
            ],
          },
          {
            id: "sm-i-3",
            question: "What is a Sprint Retrospective for?",
            topic: "Scrum Events",
            explanation:
              "The Sprint Retrospective is a team meeting at the end of each Sprint to inspect how they worked together (process, tools, relationships) and identify concrete improvements for the next Sprint.",
            options: [
              {
                text: "Reviewing the product with stakeholders",
                isCorrect: false,
              },
              {
                text: "Team self-inspection of process and identification of improvements for next sprint",
                isCorrect: true,
              },
              { text: "Planning the next sprint's backlog", isCorrect: false },
              {
                text: "Demonstrating completed features to the customer",
                isCorrect: false,
              },
            ],
          },
        ],
      },
      {
        level: "advanced",
        passingScore: 70,
        questions: [
          {
            id: "sm-a-1",
            question:
              "What is the Scrum Master's role when a team is dysfunctional?",
            topic: "Coaching",
            explanation:
              "The Scrum Master uses coaching tools: establish safety, surface root causes (5-whys), bring in team agreements/working agreements, facilitate conflict resolution, address systemic issues with management if needed.",
            options: [
              {
                text: "Replace underperforming team members",
                isCorrect: false,
              },
              {
                text: "Create safety, coach through root cause analysis, facilitate agreements, address systemic issues",
                isCorrect: true,
              },
              { text: "Report issues to HR immediately", isCorrect: false },
              {
                text: "Ignore it — teams self-organize automatically",
                isCorrect: false,
              },
            ],
          },
          {
            id: "sm-a-2",
            question: "How do you scale Scrum to multiple teams?",
            topic: "Scaling",
            explanation:
              "Frameworks for scaling: LeSS (Large-Scale Scrum), SAFe (Scaled Agile Framework), Scrum@Scale, Nexus. All address team coordination, shared backlog management, and integration of work across teams.",
            options: [
              {
                text: "Run each team completely independently",
                isCorrect: false,
              },
              {
                text: "Use scaling frameworks (LeSS, SAFe, Nexus) for coordination across teams",
                isCorrect: true,
              },
              {
                text: "Assign one Scrum Master to all teams simultaneously",
                isCorrect: false,
              },
              {
                text: "Replace Scrum with a single waterfall process",
                isCorrect: false,
              },
            ],
          },
        ],
      },
    ],
    interviewPrep: [
      {
        level: "basic",
        questions: [
          {
            id: "sm-ip-b-1",
            question:
              "What is the difference between a Scrum Master and a Project Manager?",
            talkingPoints: [
              "PM: traditionally owns plan, timeline, budget, directs work",
              "SM: servant-leader, coaches process, removes impediments, does not assign tasks",
              "SM has no authority over team — influence through facilitation and coaching",
              "Team is self-organizing in Scrum; PM model is hierarchical",
              "In practice, hybrid roles exist, but Scrum purists distinguish clearly",
            ],
            keywords: [
              "servant leader",
              "self-organizing team",
              "facilitation",
              "coaching",
              "impediment removal",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "sm-ip-i-1",
            question:
              "How do you handle a situation where the team is not completing sprint goals?",
            talkingPoints: [
              "Investigate: is it a planning problem (capacity), technical debt, or external impediments?",
              "Facilitate a retrospective focused specifically on this pattern",
              "Review Definition of Done — is it too loose or too strict?",
              "Check if Product Owner is available enough for clarifications",
              "Coach team on realistic commitment and slicing stories smaller",
            ],
            keywords: [
              "sprint planning",
              "Definition of Done",
              "impediments",
              "retrospective",
              "story splitting",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "sm-ip-a-1",
            question: "How do you introduce Scrum to a resistant organization?",
            talkingPoints: [
              "Start with a pilot team — demonstrate value before scaling",
              "Executive sponsorship is critical — address WIIFM for leadership",
              "Show early wins through data: faster delivery, quality improvements",
              "Address middle management concerns — their role changes in Agile",
              "Use Kotter's 8-step change model or ADKAR framework",
            ],
            keywords: [
              "organizational change",
              "change management",
              "pilot team",
              "Agile transformation",
              "Kotter",
              "ADKAR",
            ],
          },
        ],
      },
    ],
  },

  "uiux-designer": {
    freeCourses: [
      {
        name: "Google UX Design Professional Certificate",
        url: "https://www.coursera.org/professional-certificates/google-ux-design",
        provider: "Google / Coursera",
        platform: "Coursera",
        language: "English",
        level: "Beginner",
      },
      {
        name: "UI/UX Design in Hindi – Complete Course",
        url: "https://www.youtube.com/results?search_query=ui+ux+design+hindi",
        provider: "DesignWithArash Hindi",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "Figma Tutorial Telugu",
        url: "https://www.youtube.com/results?search_query=figma+tutorial+telugu",
        provider: "Telugu TechWorld",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "Figma UI Design Tutorial",
        url: "https://www.youtube.com/watch?v=FTFaQWZBqQ8",
        provider: "freeCodeCamp",
        platform: "YouTube",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Human-Computer Interaction – NPTEL",
        url: "https://nptel.ac.in/courses/106105082",
        provider: "IIT Bombay / NPTEL",
        platform: "NPTEL",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "Interaction Design Foundation (Free Content)",
        url: "https://www.interaction-design.org/literature",
        provider: "Interaction Design Foundation",
        platform: "edX",
        language: "English",
        level: "Beginner",
      },
    ],
    mockTests: [
      {
        level: "basic",
        passingScore: 60,
        questions: [
          {
            id: "ux-b-1",
            question: "What is the difference between UX and UI design?",
            topic: "Design Fundamentals",
            explanation:
              "UX (User Experience) design focuses on the overall experience, usability, and research. UI (User Interface) design focuses on the visual elements — colors, typography, layouts, and interactive components.",
            options: [
              { text: "UX is for web; UI is for mobile", isCorrect: false },
              {
                text: "UX focuses on overall experience/usability; UI focuses on visual design elements",
                isCorrect: true,
              },
              {
                text: "They are different names for the same discipline",
                isCorrect: false,
              },
              {
                text: "UI designers code; UX designers do not",
                isCorrect: false,
              },
            ],
          },
          {
            id: "ux-b-2",
            question: "What is a wireframe?",
            topic: "Design Process",
            explanation:
              "A wireframe is a low-fidelity, schematic representation of a UI that shows layout, structure, and content placement without visual design — used early in the design process.",
            options: [
              {
                text: "A final design ready for development",
                isCorrect: false,
              },
              {
                text: "A low-fidelity layout sketch showing structure without visual design",
                isCorrect: true,
              },
              { text: "A user interview transcript", isCorrect: false },
              {
                text: "A technical specification for developers",
                isCorrect: false,
              },
            ],
          },
          {
            id: "ux-b-3",
            question: "What is a user persona?",
            topic: "UX Research",
            explanation:
              "A user persona is a research-based fictional representation of a key user segment, capturing goals, behaviors, pain points, and demographics to guide design decisions.",
            options: [
              { text: "A real user's profile account", isCorrect: false },
              {
                text: "A fictional but research-based representation of a key user type",
                isCorrect: true,
              },
              { text: "A character in a product video", isCorrect: false },
              { text: "A user's login credentials", isCorrect: false },
            ],
          },
          {
            id: "ux-b-4",
            question:
              "What are the principles of good typography in UI design?",
            topic: "Visual Design",
            explanation:
              "Good typography: clear hierarchy (H1/H2/body), sufficient contrast, readable line length (50-75 chars), appropriate line height (1.4-1.6), and consistent type scale.",
            options: [
              {
                text: "Using as many fonts as possible for variety",
                isCorrect: false,
              },
              {
                text: "Clear hierarchy, sufficient contrast, readable line length, consistent scale",
                isCorrect: true,
              },
              {
                text: "All text should be the same size for consistency",
                isCorrect: false,
              },
              {
                text: "Decorative fonts should dominate the page",
                isCorrect: false,
              },
            ],
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "ux-i-1",
            question: "What is usability testing?",
            topic: "UX Research",
            explanation:
              "Usability testing observes real users attempting to complete tasks with a product to identify usability issues, confusion points, and improvement opportunities.",
            options: [
              {
                text: "Checking if the code compiles correctly",
                isCorrect: false,
              },
              {
                text: "Observing real users completing tasks to identify usability issues",
                isCorrect: true,
              },
              {
                text: "Testing if the product works on different browsers",
                isCorrect: false,
              },
              { text: "A survey sent to users after launch", isCorrect: false },
            ],
          },
          {
            id: "ux-i-2",
            question:
              "What is the difference between high-fidelity and low-fidelity prototypes?",
            topic: "Prototyping",
            explanation:
              "Low-fidelity: quick, cheap sketches or wireframes for early concept validation. High-fidelity: pixel-perfect, interactive prototypes close to the final product for detailed usability testing.",
            options: [
              {
                text: "High-fidelity is better for early ideation",
                isCorrect: false,
              },
              {
                text: "Low-fi: quick sketches for early concepts; High-fi: interactive near-final prototypes",
                isCorrect: true,
              },
              { text: "Low-fidelity is always preferred", isCorrect: false },
              {
                text: "High-fidelity requires coding skills",
                isCorrect: false,
              },
            ],
          },
          {
            id: "ux-i-3",
            question: "What is Fitts's Law in UX design?",
            topic: "UX Principles",
            explanation:
              "Fitts's Law states that the time to click a target depends on the distance to and size of the target. Bigger, closer targets are faster to click — therefore important UI elements should be large and close to the user's context.",
            options: [
              {
                text: "A principle stating users scroll less than they click",
                isCorrect: false,
              },
              {
                text: "Time to click = distance to target / target size — larger closer targets are easier",
                isCorrect: true,
              },
              {
                text: "A law about cognitive load and information density",
                isCorrect: false,
              },
              { text: "A rule for selecting font sizes", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "advanced",
        passingScore: 70,
        questions: [
          {
            id: "ux-a-1",
            question: "What is a design system and why is it valuable?",
            topic: "Design Systems",
            explanation:
              "A design system is a collection of reusable components, design tokens (colors, spacing, typography), and guidelines that ensure consistency and speed across a product. It serves as the single source of truth for design and engineering.",
            options: [
              {
                text: "A collection of inspiration screenshots",
                isCorrect: false,
              },
              {
                text: "Reusable components + design tokens + guidelines for consistent product design",
                isCorrect: true,
              },
              { text: "A project management tool", isCorrect: false },
              {
                text: "An analytics dashboard for design metrics",
                isCorrect: false,
              },
            ],
          },
          {
            id: "ux-a-2",
            question: "How do you measure UX quality?",
            topic: "UX Metrics",
            explanation:
              "UX quality metrics: task completion rate, time on task, error rate, SUS (System Usability Scale) score, NPS, and qualitative usability testing insights. Business metrics: conversion rate, retention.",
            options: [
              {
                text: "By counting the number of design screens",
                isCorrect: false,
              },
              {
                text: "Task completion, time on task, SUS score, error rate, and business metrics like conversion",
                isCorrect: true,
              },
              {
                text: "By measuring how many colors are used",
                isCorrect: false,
              },
              { text: "By tracking page views only", isCorrect: false },
            ],
          },
        ],
      },
    ],
    interviewPrep: [
      {
        level: "basic",
        questions: [
          {
            id: "ux-ip-b-1",
            question: "Walk me through your UX design process.",
            talkingPoints: [
              "Discover: user research, stakeholder interviews, competitive analysis",
              "Define: synthesize insights, create personas, define problem statement (HMW)",
              "Ideate: brainstorming, sketching, crazy-eights",
              "Prototype: wireframes to high-fidelity prototypes in Figma",
              "Test: usability testing, iterate based on findings",
            ],
            keywords: [
              "design thinking",
              "user research",
              "prototype",
              "iterate",
              "HMW statement",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "ux-ip-i-1",
            question:
              "How do you communicate design decisions to developers and stakeholders?",
            talkingPoints: [
              "Annotate prototypes in Figma with interaction notes and specifications",
              "Design handoff with developer-friendly documentation (spacing, states, variants)",
              "Link design decisions to user research and data",
              "Facilitate design review sessions — not just review presentations",
              "Accept developer constraints early and collaborate on solutions",
            ],
            keywords: [
              "design handoff",
              "Figma Dev Mode",
              "annotations",
              "design rationale",
              "collaboration",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "ux-ip-a-1",
            question:
              "How would you redesign a complex enterprise application that users find confusing?",
            talkingPoints: [
              "Conduct contextual inquiry — observe users in their actual work context",
              "Map the current user journey — identify all pain points and workarounds",
              "Prioritize top-impact issues with stakeholders",
              "Incremental redesign vs. full redesign based on business constraints",
              "Measure success: task completion rate, support ticket reduction, SUS improvement",
            ],
            keywords: [
              "contextual inquiry",
              "user journey mapping",
              "information architecture",
              "progressive disclosure",
              "SUS",
            ],
          },
        ],
      },
    ],
  },

  "product-manager": {
    freeCourses: [
      {
        name: "Product Management Fundamentals – PM School",
        url: "https://www.youtube.com/c/PMSchool",
        provider: "PM School",
        platform: "YouTube",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Product Management in Hindi",
        url: "https://www.youtube.com/results?search_query=product+management+course+hindi",
        provider: "Pragmatic Institute India",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "Product Manager Telugu Interview Prep",
        url: "https://www.youtube.com/results?search_query=product+manager+interview+telugu",
        provider: "Telugu Interview Prep",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "Digital Product Management (Coursera)",
        url: "https://www.coursera.org/specializations/uva-darden-digital-product-management",
        provider: "University of Virginia / Coursera",
        platform: "Coursera",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "Product Analytics with Mixpanel (Free)",
        url: "https://mixpanel.com/blog/product-analytics/",
        provider: "Mixpanel",
        platform: "YouTube",
        language: "English",
        level: "Intermediate",
      },
    ],
    mockTests: [
      {
        level: "basic",
        passingScore: 60,
        questions: [
          {
            id: "pm-b-1",
            question: "What is a product roadmap?",
            topic: "Product Management",
            explanation:
              "A product roadmap is a high-level visual summary showing the direction and prioritized initiatives of a product over time, communicating the strategy and vision to stakeholders.",
            options: [
              { text: "A detailed sprint plan", isCorrect: false },
              {
                text: "A visual strategy document showing product direction and priorities over time",
                isCorrect: true,
              },
              { text: "A list of all bugs to fix", isCorrect: false },
              { text: "A project management Gantt chart", isCorrect: false },
            ],
          },
          {
            id: "pm-b-2",
            question: "What is the North Star Metric?",
            topic: "Product Metrics",
            explanation:
              "The North Star Metric is the single metric that best captures the core value a product delivers to customers. It aligns the team on what matters most and guides strategic decisions.",
            options: [
              { text: "The total revenue of the company", isCorrect: false },
              {
                text: "The single metric that best captures the core customer value delivered",
                isCorrect: true,
              },
              {
                text: "The number of employees in the product team",
                isCorrect: false,
              },
              { text: "The app store rating", isCorrect: false },
            ],
          },
          {
            id: "pm-b-3",
            question: "What is MVP in product development?",
            topic: "Product Development",
            explanation:
              "MVP (Minimum Viable Product) is the simplest version of a product that allows the team to collect validated learning about customers with the least effort — test assumptions before building more.",
            options: [
              { text: "Most Valuable Player", isCorrect: false },
              {
                text: "Minimum Viable Product — simplest version to validate assumptions",
                isCorrect: true,
              },
              { text: "Maximum Value Production", isCorrect: false },
              { text: "Market Viability Plan", isCorrect: false },
            ],
          },
          {
            id: "pm-b-4",
            question: "What is the difference between output and outcome?",
            topic: "Product Strategy",
            explanation:
              "Output is what you ship (features, pages). Outcome is the behavior change or business result that shipping it causes. Good PMs focus on outcomes, not outputs.",
            options: [
              {
                text: "They mean the same thing in product management",
                isCorrect: false,
              },
              {
                text: "Output = what you ship; Outcome = the behavior/business change it causes",
                isCorrect: true,
              },
              {
                text: "Outcome is what the developers produce",
                isCorrect: false,
              },
              { text: "Output is more important to measure", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "pm-i-1",
            question:
              "How do you prioritize features when everything seems urgent?",
            topic: "Prioritization",
            explanation:
              "Prioritization frameworks: RICE (Reach × Impact × Confidence / Effort), ICE score, MoSCoW, Jobs-to-be-Done value ranking. Always trace back to business goals and user needs.",
            options: [
              {
                text: "Always build the CEO's requests first",
                isCorrect: false,
              },
              {
                text: "Use frameworks like RICE or ICE, traced to user needs and business goals",
                isCorrect: true,
              },
              {
                text: "Prioritize by development effort (easiest first)",
                isCorrect: false,
              },
              {
                text: "Random selection to be fair to all teams",
                isCorrect: false,
              },
            ],
          },
          {
            id: "pm-i-2",
            question: "What is a product-market fit?",
            topic: "Product Strategy",
            explanation:
              'Product-market fit is when a product satisfies a strong market demand — evidenced by users actively using, paying for, and recommending it. Marc Andreessen: "When the market pulls product out of you."',
            options: [
              { text: "When a product works on all devices", isCorrect: false },
              {
                text: "When a product satisfies strong market demand — users use, pay, and refer",
                isCorrect: true,
              },
              {
                text: "When all planned features are shipped",
                isCorrect: false,
              },
              {
                text: "When the marketing strategy is defined",
                isCorrect: false,
              },
            ],
          },
          {
            id: "pm-i-3",
            question: "What is the purpose of a sprint review?",
            topic: "Agile PM",
            explanation:
              "The Sprint Review is an inspection of the Sprint's work done and adaptation of the Product Backlog based on stakeholder feedback — collaborative session, not a status report.",
            options: [
              {
                text: "Reviewing the team's individual performance",
                isCorrect: false,
              },
              {
                text: "Stakeholder feedback session on completed work to adapt the product backlog",
                isCorrect: true,
              },
              { text: "Planning the next sprint", isCorrect: false },
              {
                text: "A retrospective on the team's processes",
                isCorrect: false,
              },
            ],
          },
        ],
      },
      {
        level: "advanced",
        passingScore: 70,
        questions: [
          {
            id: "pm-a-1",
            question:
              "How would you define and measure success for a new feature?",
            topic: "Product Metrics",
            explanation:
              "Pre-launch: define success metrics aligned to business goal, build measurement into the feature. Post-launch: track leading indicators (adoption) and lagging indicators (retention, revenue). Run A/B test if possible.",
            options: [
              {
                text: "Count how many users clicked the feature",
                isCorrect: false,
              },
              {
                text: "Pre-define metrics aligned to goals; track adoption + business impact; A/B test where possible",
                isCorrect: true,
              },
              {
                text: "Success = feature was shipped on time",
                isCorrect: false,
              },
              { text: "Ask the CEO if they are happy", isCorrect: false },
            ],
          },
          {
            id: "pm-a-2",
            question: "What is JTBD (Jobs to be Done) theory?",
            topic: "Product Strategy",
            explanation:
              'JTBD theory (Clayton Christensen) states that people "hire" products to do a job they need done. Understanding the job — not the demographic — leads to better product decisions and reveals true competitors.',
            options: [
              {
                text: "A job description framework for product teams",
                isCorrect: false,
              },
              {
                text: "Users hire products to accomplish jobs; understanding the job drives better product decisions",
                isCorrect: true,
              },
              { text: "A task tracking methodology", isCorrect: false },
              {
                text: "A framework for job posting prioritization",
                isCorrect: false,
              },
            ],
          },
        ],
      },
    ],
    interviewPrep: [
      {
        level: "basic",
        questions: [
          {
            id: "pm-ip-b-1",
            question: "How do you define the role of a Product Manager?",
            talkingPoints: [
              'The PM defines the "what" and "why"; engineering defines the "how"',
              "PM = CEO of the product, but without direct authority",
              "Key responsibilities: strategy, discovery, prioritization, stakeholder alignment",
              "Bridge between user needs, business goals, and technical feasibility",
              "Not a project manager — focused on product outcomes, not task tracking",
            ],
            keywords: [
              "product strategy",
              "discovery",
              "prioritization",
              "roadmap",
              "stakeholders",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "pm-ip-i-1",
            question: "How do you say no to a feature request from a VP?",
            talkingPoints: [
              'Never just say "no" — say "not now" with rationale',
              "Show the opportunity cost: what would we deprioritize to build this?",
              'Align to strategy: "This is a great idea — how does it relate to our Q3 goal?"',
              "Use data: what does user research or analytics tell us about this need?",
              "Offer alternatives or a future roadmap placement",
            ],
            keywords: [
              "prioritization",
              "opportunity cost",
              "stakeholder management",
              "roadmap tradeoffs",
              "alignment",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "pm-ip-a-1",
            question:
              "Design a product strategy for growing a B2B SaaS from 0 to 1000 customers.",
            talkingPoints: [
              "Identify a focused initial ICP (Ideal Customer Profile) — narrow segment",
              "Deep discovery with 20–30 target customers before building",
              "Build MVP for the sharpest, most acute pain point",
              "Land-and-expand: build for depth with initial customers, then expand to adjacent use cases",
              "Define a repeatable sales motion before scaling GTM",
            ],
            keywords: [
              "ICP",
              "discovery",
              "MVP",
              "land-and-expand",
              "GTM",
              "PLG vs SLG",
            ],
          },
        ],
      },
    ],
  },

  "digital-marketing-executive": {
    freeCourses: [
      {
        name: "Google Digital Marketing & E-commerce Certificate",
        url: "https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce",
        provider: "Google / Coursera",
        platform: "Coursera",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Digital Marketing in Hindi – Complete Course",
        url: "https://www.youtube.com/results?search_query=digital+marketing+course+hindi",
        provider: "WsCube Tech",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "Digital Marketing Telugu Tutorial",
        url: "https://www.youtube.com/results?search_query=digital+marketing+telugu",
        provider: "Telugu TechWorld",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "HubSpot Inbound Marketing Certification (Free)",
        url: "https://academy.hubspot.com/courses/inbound-marketing",
        provider: "HubSpot Academy",
        platform: "YouTube",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Google Analytics 4 – Free Course",
        url: "https://skillshop.withgoogle.com/collection/11065",
        provider: "Google Skillshop",
        platform: "Swayam",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Facebook Ads in Hindi",
        url: "https://www.youtube.com/results?search_query=facebook+ads+tutorial+hindi",
        provider: "Digital Azadi",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
    ],
    mockTests: [
      {
        level: "basic",
        passingScore: 60,
        questions: [
          {
            id: "dm-b-1",
            question: "What does SEO stand for?",
            topic: "Digital Marketing",
            explanation:
              "SEO stands for Search Engine Optimization — the practice of optimizing web content to rank higher in search engine results pages (SERPs) for relevant queries.",
            options: [
              { text: "Social Engagement Optimization", isCorrect: false },
              { text: "Search Engine Optimization", isCorrect: true },
              { text: "Site Engagement Operations", isCorrect: false },
              { text: "Search Experience Outreach", isCorrect: false },
            ],
          },
          {
            id: "dm-b-2",
            question: "What is CTR in digital marketing?",
            topic: "Metrics",
            explanation:
              "CTR (Click-Through Rate) is the percentage of people who see an ad or link and click it: (Clicks ÷ Impressions) × 100. A key metric for email, ads, and organic search.",
            options: [
              { text: "Customer Total Revenue", isCorrect: false },
              {
                text: "Click-Through Rate: clicks divided by impressions",
                isCorrect: true,
              },
              { text: "Content Traffic Report", isCorrect: false },
              { text: "Channel Total Reach", isCorrect: false },
            ],
          },
          {
            id: "dm-b-3",
            question:
              "What is the difference between organic and paid search results?",
            topic: "Search Marketing",
            explanation:
              'Organic results appear based on relevance and SEO. Paid results (labeled "Sponsored" or "Ad") appear based on bids and quality scores — advertisers pay per click through Google Ads.',
            options: [
              { text: "Organic is more expensive", isCorrect: false },
              {
                text: "Organic results from SEO; paid from bidding in platforms like Google Ads",
                isCorrect: true,
              },
              {
                text: "They appear in the same section of the page",
                isCorrect: false,
              },
              { text: "Organic is only from social media", isCorrect: false },
            ],
          },
          {
            id: "dm-b-4",
            question: "What is a conversion rate?",
            topic: "Metrics",
            explanation:
              "Conversion rate is the percentage of visitors who complete a desired action (purchase, signup, download): (Conversions ÷ Total Visitors) × 100. The primary metric for marketing effectiveness.",
            options: [
              {
                text: "The rate at which currencies are exchanged",
                isCorrect: false,
              },
              {
                text: "Percentage of visitors who complete a desired action",
                isCorrect: true,
              },
              { text: "The speed at which a website loads", isCorrect: false },
              {
                text: "Number of followers converted to customers",
                isCorrect: false,
              },
            ],
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "dm-i-1",
            question: "What is retargeting in digital advertising?",
            topic: "Paid Media",
            explanation:
              "Retargeting shows ads to people who have previously visited your website or engaged with your brand — using cookies or pixel tracking to re-engage warm audiences.",
            options: [
              { text: "Targeting competitors' audiences", isCorrect: false },
              {
                text: "Showing ads to people who previously visited your site or engaged with your brand",
                isCorrect: true,
              },
              {
                text: "Changing ad targets midway through a campaign",
                isCorrect: false,
              },
              {
                text: "A technique for email marketing only",
                isCorrect: false,
              },
            ],
          },
          {
            id: "dm-i-2",
            question: "What is Customer Acquisition Cost (CAC)?",
            topic: "Marketing Metrics",
            explanation:
              "CAC is the total cost spent on marketing and sales divided by the number of new customers acquired. Healthy business: LTV/CAC ratio > 3. High CAC with low LTV = unsustainable.",
            options: [
              {
                text: "The cost to retain an existing customer",
                isCorrect: false,
              },
              {
                text: "Total marketing/sales cost divided by number of new customers acquired",
                isCorrect: true,
              },
              { text: "The average order value", isCorrect: false },
              {
                text: "Cost to create content for one customer segment",
                isCorrect: false,
              },
            ],
          },
          {
            id: "dm-i-3",
            question: "What is A/B testing in marketing?",
            topic: "Experimentation",
            explanation:
              "A/B testing runs two variants (A and B) of a campaign element (subject line, headline, image) simultaneously to a split audience, then measures which drives higher performance.",
            options: [
              {
                text: "Testing between two different platforms",
                isCorrect: false,
              },
              {
                text: "Comparing two variants to see which performs better with a split audience",
                isCorrect: true,
              },
              {
                text: "Testing an ad before and after launch",
                isCorrect: false,
              },
              { text: "Running ads in alphabetical order", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "advanced",
        passingScore: 70,
        questions: [
          {
            id: "dm-a-1",
            question: "What is a multi-touch attribution model?",
            topic: "Attribution",
            explanation:
              "Multi-touch attribution assigns credit for a conversion to multiple touchpoints across the customer journey, rather than only the last or first click. Models: linear, time decay, position-based, data-driven.",
            options: [
              {
                text: "Tracking users across multiple mobile devices",
                isCorrect: false,
              },
              {
                text: "Assigning conversion credit to multiple marketing touchpoints in the customer journey",
                isCorrect: true,
              },
              {
                text: "Running ads on multiple channels simultaneously",
                isCorrect: false,
              },
              {
                text: "A method for reducing attribution errors",
                isCorrect: false,
              },
            ],
          },
          {
            id: "dm-a-2",
            question:
              "How do you build a full-funnel digital marketing strategy?",
            topic: "Strategy",
            explanation:
              "Full funnel: Awareness (content, social, display), Consideration (SEO, email, webinars), Decision (retargeting, case studies, demos), Retention (email nurture, loyalty programs). Measure and optimize each stage.",
            options: [
              { text: "Focus only on conversion campaigns", isCorrect: false },
              {
                text: "Address each funnel stage: awareness, consideration, decision, and retention",
                isCorrect: true,
              },
              { text: "Maximize social media followers", isCorrect: false },
              {
                text: "Run one campaign type across all stages",
                isCorrect: false,
              },
            ],
          },
        ],
      },
    ],
    interviewPrep: [
      {
        level: "basic",
        questions: [
          {
            id: "dm-ip-b-1",
            question:
              "What is the difference between inbound and outbound marketing?",
            talkingPoints: [
              "Inbound: attract customers through valuable content (SEO, blogs, social) — pull strategy",
              "Outbound: push marketing — ads, cold calls, email blasts, TV/print",
              "Inbound tends to attract higher-intent leads at lower cost over time",
              "Most modern marketing strategies combine both",
            ],
            keywords: [
              "inbound",
              "outbound",
              "content marketing",
              "SEO",
              "pull vs push",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "dm-ip-i-1",
            question:
              "How do you measure the ROI of a digital marketing campaign?",
            talkingPoints: [
              "Define campaign goal upfront: leads, sales, awareness, app installs",
              "Track all costs: ad spend, creative, tools, agency fees, staff time",
              "Revenue attributed to campaign (use UTM params, attribution model)",
              "ROI = (Revenue - Cost) / Cost × 100",
              "Consider LTV, not just first purchase, for proper ROI calculation",
            ],
            keywords: [
              "UTM parameters",
              "attribution",
              "ROAS",
              "LTV",
              "conversion tracking",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "dm-ip-a-1",
            question:
              "How would you build a growth marketing strategy for a new app launch in India?",
            talkingPoints: [
              "Research phase: target personas, competitor analysis, channel audit",
              "App Store Optimization (ASO) from day one for organic discovery",
              "Vernacular content strategy (Hindi, Telugu) for tier-2/3 cities",
              "Influencer micro-campaigns on Instagram and YouTube",
              "Referral program: viral loop to reduce CAC; focus on WhatsApp sharing",
            ],
            keywords: [
              "ASO",
              "CAC",
              "vernacular marketing",
              "referral loop",
              "growth hacking",
              "viral coefficient",
            ],
          },
        ],
      },
    ],
  },

  "sap-consultant": {
    freeCourses: [
      {
        name: "SAP ABAP Programming – Free Tutorial",
        url: "https://www.youtube.com/results?search_query=sap+abap+tutorial+beginner",
        provider: "SAP Tutorials India",
        platform: "YouTube",
        language: "English",
        level: "Beginner",
      },
      {
        name: "SAP Basics in Hindi",
        url: "https://www.youtube.com/results?search_query=sap+tutorial+hindi",
        provider: "SAP Hindi Tutorials",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "SAP FICO Telugu Tutorial",
        url: "https://www.youtube.com/results?search_query=sap+fico+tutorial+telugu",
        provider: "SAP Telugu Training",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "SAP Learning Hub – Free Trials",
        url: "https://learning.sap.com/",
        provider: "SAP",
        platform: "edX",
        language: "English",
        level: "Beginner",
      },
      {
        name: "SAP S/4 HANA Overview – Free Course",
        url: "https://open.sap.com/",
        provider: "openSAP",
        platform: "edX",
        language: "English",
        level: "Beginner",
      },
      {
        name: "GUVI SAP Course in Tamil/Telugu",
        url: "https://www.guvi.in/courses/sap",
        provider: "GUVI",
        platform: "GUVI",
        language: "English & Telugu",
        level: "Beginner",
      },
    ],
    mockTests: [
      {
        level: "basic",
        passingScore: 60,
        questions: [
          {
            id: "sap-b-1",
            question: "What does SAP stand for?",
            topic: "SAP Basics",
            explanation:
              "SAP stands for Systems, Applications, and Products in Data Processing — a German multinational company that makes enterprise resource planning (ERP) software.",
            options: [
              { text: "Software Application Products", isCorrect: false },
              {
                text: "Systems, Applications, and Products in Data Processing",
                isCorrect: true,
              },
              { text: "Service Application Platform", isCorrect: false },
              { text: "Systematic Accounting Platform", isCorrect: false },
            ],
          },
          {
            id: "sap-b-2",
            question: "What is SAP ERP used for?",
            topic: "SAP Overview",
            explanation:
              "SAP ERP integrates all core business processes — finance, HR, procurement, sales, logistics, and manufacturing — into a single system with a centralized database.",
            options: [
              { text: "Only for human resources management", isCorrect: false },
              {
                text: "Integrating all core business processes in one system",
                isCorrect: true,
              },
              { text: "Web development and e-commerce", isCorrect: false },
              { text: "Network and server management", isCorrect: false },
            ],
          },
          {
            id: "sap-b-3",
            question: "What is a SAP module?",
            topic: "SAP Structure",
            explanation:
              "SAP modules are functional areas: FI (Financial Accounting), CO (Controlling), SD (Sales & Distribution), MM (Materials Management), HR, PP (Production Planning), etc. Each handles a business domain.",
            options: [
              { text: "A physical server rack unit", isCorrect: false },
              {
                text: "A functional area covering a specific business domain (FI, MM, SD, HR, etc.)",
                isCorrect: true,
              },
              { text: "A programming language component", isCorrect: false },
              { text: "A license type", isCorrect: false },
            ],
          },
          {
            id: "sap-b-4",
            question: "What is ABAP in SAP?",
            topic: "SAP Technical",
            explanation:
              "ABAP (Advanced Business Application Programming) is SAP's proprietary programming language used to customize SAP applications, write reports, and develop new functionality.",
            options: [
              { text: "A database management tool", isCorrect: false },
              {
                text: "SAP's programming language for custom development",
                isCorrect: true,
              },
              { text: "A type of SAP user role", isCorrect: false },
              { text: "An automated backup tool", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "sap-i-1",
            question: "What is SAP S/4 HANA?",
            topic: "SAP Technology",
            explanation:
              "SAP S/4 HANA is the next-generation ERP suite built on the SAP HANA in-memory database. It offers real-time analytics, simplified data models, and a Fiori user interface.",
            options: [
              { text: "An older version of SAP ERP", isCorrect: false },
              {
                text: "Next-gen ERP on in-memory HANA database with real-time analytics and Fiori UI",
                isCorrect: true,
              },
              { text: "SAP's cloud-only offering", isCorrect: false },
              { text: "A data warehouse product", isCorrect: false },
            ],
          },
          {
            id: "sap-i-2",
            question:
              "What is the role of a functional consultant vs. technical consultant in SAP?",
            topic: "SAP Consulting",
            explanation:
              "Functional consultants understand business processes and configure SAP to meet requirements (no coding needed for standard config). Technical consultants handle ABAP development, interfaces, and system integration.",
            options: [
              {
                text: "They do the same work with different titles",
                isCorrect: false,
              },
              {
                text: "Functional: business process + configuration; Technical: ABAP coding + integration",
                isCorrect: true,
              },
              {
                text: "Technical consultants manage projects; functional consultants write code",
                isCorrect: false,
              },
              {
                text: "Functional consultants manage servers",
                isCorrect: false,
              },
            ],
          },
          {
            id: "sap-i-3",
            question: "What is SAP Fiori?",
            topic: "SAP UI",
            explanation:
              "SAP Fiori is SAP's modern UX design system providing role-based, responsive web apps for SAP systems. It replaced the older SAP GUI with a clean, consumer-grade interface accessible on any device.",
            options: [
              { text: "A module for financial reporting", isCorrect: false },
              {
                text: "SAP's modern UX design system for role-based responsive web apps",
                isCorrect: true,
              },
              { text: "A database optimization tool", isCorrect: false },
              { text: "A type of SAP license", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "advanced",
        passingScore: 70,
        questions: [
          {
            id: "sap-a-1",
            question: "What is the SAP implementation methodology?",
            topic: "SAP Implementation",
            explanation:
              "SAP uses ACTIVATE methodology (successor to ASAP): Discover, Prepare, Explore (fit-gap), Realize (configuration, development, testing), Deploy, Run. Designed for SAP S/4 HANA and agile delivery.",
            options: [
              { text: "AGILE and SCRUM only", isCorrect: false },
              {
                text: "SAP ACTIVATE: Discover > Prepare > Explore > Realize > Deploy > Run",
                isCorrect: true,
              },
              { text: "Waterfall is mandated by SAP", isCorrect: false },
              { text: "There is no standard methodology", isCorrect: false },
            ],
          },
          {
            id: "sap-a-2",
            question: "What is a BAdI in SAP?",
            topic: "SAP Development",
            explanation:
              "BAdI (Business Add-In) is a SAP enhancement technique that provides stable, upgrade-safe extension points in SAP standard code. It allows custom code to be called from within SAP standard programs without modification.",
            options: [
              { text: "A database backup tool", isCorrect: false },
              {
                text: "An enhancement point letting custom code extend SAP standard without modification",
                isCorrect: true,
              },
              { text: "A batch data input program", isCorrect: false },
              { text: "An authorization object", isCorrect: false },
            ],
          },
        ],
      },
    ],
    interviewPrep: [
      {
        level: "basic",
        questions: [
          {
            id: "sap-ip-b-1",
            question: "Walk me through the order-to-cash process in SAP.",
            talkingPoints: [
              "Sales Order created in SD after customer inquiry/quotation",
              "Delivery and goods issue (reduces inventory) in MM/WM",
              "Billing document created, triggers FI posting",
              "Customer invoice sent; payment received → clears open item in AR",
              "Integration: SD-MM (goods) and SD-FI (accounting) tightly linked in SAP",
            ],
            keywords: [
              "order-to-cash",
              "SD module",
              "billing document",
              "goods issue",
              "accounts receivable",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "sap-ip-i-1",
            question:
              "How do you approach a fit-gap analysis in an SAP implementation?",
            talkingPoints: [
              "Understand the standard SAP process first — demo it to business users",
              "Document each business requirement against standard functionality",
              "Classify: Fit (standard), Gap (needs config or development), or Out of scope",
              "For gaps: evaluate configuration vs. ABAP development vs. third-party",
              "Document gap decisions with business sign-off before development",
            ],
            keywords: [
              "fit-gap",
              "configuration",
              "customization",
              "ABAP development",
              "business sign-off",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "sap-ip-a-1",
            question:
              "How would you manage an SAP S/4 HANA migration from ECC?",
            talkingPoints: [
              "Assess: system conversion (brownfield) vs. new implementation (greenfield) vs. selective data transfer",
              "Data quality: data cleansing must happen before migration",
              "Testing: unit, integration, UAT, performance testing",
              "Change management: training, business process re-engineering",
              "Cutover planning: mock cutovers, parallel run, go-live support",
            ],
            keywords: [
              "brownfield",
              "greenfield",
              "data migration",
              "cutover",
              "UAT",
              "change management",
            ],
          },
        ],
      },
    ],
  },
};
