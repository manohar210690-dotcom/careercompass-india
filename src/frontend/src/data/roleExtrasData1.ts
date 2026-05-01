// roleExtrasData1.ts — Free Courses, Mock Tests, Interview Prep for Development & Data roles
import type { FreeCourse, InterviewPrep, MockTest } from "./roleExtras";

interface RoleExtras {
  freeCourses?: FreeCourse[];
  mockTests?: MockTest[];
  interviewPrep?: InterviewPrep[];
}

export const roleExtrasData1: Record<string, RoleExtras> = {
  "frontend-developer": {
    freeCourses: [
      {
        name: "Responsive Web Design",
        url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
        provider: "freeCodeCamp",
        platform: "freeCodeCamp",
        language: "English",
        level: "Beginner",
      },
      {
        name: "JavaScript Algorithms and Data Structures",
        url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
        provider: "freeCodeCamp",
        platform: "freeCodeCamp",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "React – The Complete Guide (Udemy Free Preview)",
        url: "https://www.youtube.com/c/Academind",
        provider: "Academind",
        platform: "YouTube",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "Frontend Development in Hindi",
        url: "https://www.youtube.com/c/CodeWithHarry",
        provider: "Code With Harry",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "HTML CSS JavaScript Telugu Tutorial",
        url: "https://www.youtube.com/c/TeluguTechTuts",
        provider: "Telugu Tech Tuts",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "React JS in Hindi – Complete Course",
        url: "https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt",
        provider: "CodeWithHarry",
        platform: "YouTube",
        language: "Hindi",
        level: "Intermediate",
      },
      {
        name: "Web Development Bootcamp – GUVI",
        url: "https://www.guvi.in/courses/web-development",
        provider: "GUVI",
        platform: "GUVI",
        language: "English & Hindi",
        level: "Beginner",
      },
      {
        name: "Frontend Masters – Introduction to Web Dev",
        url: "https://frontendmasters.com/bootcamp/",
        provider: "Frontend Masters",
        platform: "YouTube",
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
            id: "fd-b-1",
            question: "Which HTML tag is used to link an external CSS file?",
            topic: "HTML",
            explanation:
              'The <link> tag inside <head> with rel="stylesheet" and href pointing to the CSS file is the correct way.',
            options: [
              { text: "<style>", isCorrect: false },
              { text: "<link>", isCorrect: true },
              { text: "<css>", isCorrect: false },
              { text: "<script>", isCorrect: false },
            ],
          },
          {
            id: "fd-b-2",
            question: "What does CSS stand for?",
            topic: "CSS",
            explanation:
              "CSS stands for Cascading Style Sheets — it describes how HTML elements should be displayed.",
            options: [
              { text: "Computer Style Sheets", isCorrect: false },
              { text: "Cascading Style Sheets", isCorrect: true },
              { text: "Creative Style Sheets", isCorrect: false },
              { text: "Colorful Style Sheets", isCorrect: false },
            ],
          },
          {
            id: "fd-b-3",
            question:
              "Which JavaScript method adds an element at the end of an array?",
            topic: "JavaScript",
            explanation:
              "Array.push() adds one or more elements to the end of an array and returns the new length.",
            options: [
              { text: "pop()", isCorrect: false },
              { text: "shift()", isCorrect: false },
              { text: "push()", isCorrect: true },
              { text: "unshift()", isCorrect: false },
            ],
          },
          {
            id: "fd-b-4",
            question: "What is the correct CSS property to change text color?",
            topic: "CSS",
            explanation:
              'The "color" property sets the text color. "background-color" sets the background, not the text.',
            options: [
              { text: "text-color", isCorrect: false },
              { text: "font-color", isCorrect: false },
              { text: "color", isCorrect: true },
              { text: "foreground-color", isCorrect: false },
            ],
          },
          {
            id: "fd-b-5",
            question:
              "Which HTML attribute specifies the destination URL for a hyperlink?",
            topic: "HTML",
            explanation:
              "The href attribute of <a> tag specifies the URL of the page the link goes to.",
            options: [
              { text: "src", isCorrect: false },
              { text: "href", isCorrect: true },
              { text: "link", isCorrect: false },
              { text: "url", isCorrect: false },
            ],
          },
          {
            id: "fd-b-6",
            question: 'What does the CSS "box model" include?',
            topic: "CSS",
            explanation:
              "The CSS box model consists of content, padding, border, and margin — in that order from inside out.",
            options: [
              { text: "Content, padding, border, margin", isCorrect: true },
              { text: "Content, margin, border, padding", isCorrect: false },
              { text: "Border, content, padding, outline", isCorrect: false },
              { text: "Padding, content, outline, shadow", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "fd-i-1",
            question: "What is the virtual DOM in React?",
            topic: "React",
            explanation:
              "The virtual DOM is a lightweight in-memory representation of the real DOM. React uses it to diff changes and batch real DOM updates efficiently.",
            options: [
              { text: "A browser extension for debugging", isCorrect: false },
              {
                text: "An in-memory representation of the real DOM for efficient updates",
                isCorrect: true,
              },
              {
                text: "A copy of the DOM stored in localStorage",
                isCorrect: false,
              },
              { text: "A server-side rendering technique", isCorrect: false },
            ],
          },
          {
            id: "fd-i-2",
            question:
              "Which React hook is used to run side effects after render?",
            topic: "React Hooks",
            explanation:
              "useEffect runs after every render by default. You can control when it runs using the dependency array.",
            options: [
              { text: "useState", isCorrect: false },
              { text: "useContext", isCorrect: false },
              { text: "useEffect", isCorrect: true },
              { text: "useRef", isCorrect: false },
            ],
          },
          {
            id: "fd-i-3",
            question: "What is CSS Flexbox primarily used for?",
            topic: "CSS Layout",
            explanation:
              "Flexbox is a one-dimensional layout method — it arranges items in a row or column with flexible sizing and alignment.",
            options: [
              { text: "Animations and transitions", isCorrect: false },
              {
                text: "One-dimensional layout (row or column)",
                isCorrect: true,
              },
              { text: "Two-dimensional grid layouts", isCorrect: false },
              { text: "Typography and font styling", isCorrect: false },
            ],
          },
          {
            id: "fd-i-4",
            question: 'What does "async/await" do in JavaScript?',
            topic: "JavaScript",
            explanation:
              "async/await is syntactic sugar over Promises, making asynchronous code look and behave like synchronous code for better readability.",
            options: [
              {
                text: "Creates a new thread for background tasks",
                isCorrect: false,
              },
              {
                text: "Makes code run faster by parallelizing tasks",
                isCorrect: false,
              },
              {
                text: "Syntactic sugar for Promises making async code readable",
                isCorrect: true,
              },
              {
                text: "Blocks the main thread until a task completes",
                isCorrect: false,
              },
            ],
          },
          {
            id: "fd-i-5",
            question: "What is the purpose of the key prop in React lists?",
            topic: "React",
            explanation:
              "Keys help React identify which items have changed, added, or removed. They should be stable unique identifiers, not array indices.",
            options: [
              { text: "It styles each list item uniquely", isCorrect: false },
              {
                text: "It helps React reconcile list changes efficiently",
                isCorrect: true,
              },
              { text: "It acts as a CSS class name", isCorrect: false },
              {
                text: "It passes data between sibling components",
                isCorrect: false,
              },
            ],
          },
          {
            id: "fd-i-6",
            question:
              "What is the difference between == and === in JavaScript?",
            topic: "JavaScript",
            explanation:
              "== does type coercion (loose equality) while === checks both value AND type (strict equality). Always prefer ===.",
            options: [
              {
                text: "No difference — they are interchangeable",
                isCorrect: false,
              },
              {
                text: "== checks value only; === checks value AND type",
                isCorrect: true,
              },
              { text: "=== is used only for objects", isCorrect: false },
              {
                text: "== is for numbers; === is for strings",
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
            id: "fd-a-1",
            question: "What is code splitting in React and why is it useful?",
            topic: "React Performance",
            explanation:
              "Code splitting (via React.lazy + Suspense or dynamic import) splits the JS bundle so only the code needed for the current route is loaded, reducing initial load time.",
            options: [
              {
                text: "Splitting components into smaller files for readability",
                isCorrect: false,
              },
              {
                text: "Lazy-loading JS chunks to reduce initial bundle size",
                isCorrect: true,
              },
              {
                text: "Splitting CSS and JS into separate files",
                isCorrect: false,
              },
              { text: "Running React on multiple CPU cores", isCorrect: false },
            ],
          },
          {
            id: "fd-a-2",
            question: "What problem does React Context solve?",
            topic: "React State",
            explanation:
              'Context solves "prop drilling" — passing props through many intermediate components. It provides a way to share values between components without passing props at every level.',
            options: [
              { text: "It manages server-side state", isCorrect: false },
              {
                text: "It eliminates prop drilling for shared state",
                isCorrect: true,
              },
              {
                text: "It replaces useState for all state management",
                isCorrect: false,
              },
              { text: "It handles API calls automatically", isCorrect: false },
            ],
          },
          {
            id: "fd-a-3",
            question: "What is a Web Worker in JavaScript?",
            topic: "Browser APIs",
            explanation:
              "Web Workers run scripts in background threads, separate from the main UI thread. They are used for CPU-intensive tasks that would otherwise freeze the UI.",
            options: [
              {
                text: "A special type of service worker for caching",
                isCorrect: false,
              },
              {
                text: "A background script running in a separate thread",
                isCorrect: true,
              },
              {
                text: "A Node.js cluster for server-side rendering",
                isCorrect: false,
              },
              {
                text: "An animation API for smooth transitions",
                isCorrect: false,
              },
            ],
          },
          {
            id: "fd-a-4",
            question: "What is the purpose of useMemo in React?",
            topic: "React Performance",
            explanation:
              "useMemo memoizes a computed value, recomputing it only when its dependencies change. This avoids expensive recalculations on every render.",
            options: [
              {
                text: "It memoizes a callback function reference",
                isCorrect: false,
              },
              {
                text: "It caches expensive computed values between renders",
                isCorrect: true,
              },
              {
                text: "It stores component state across re-renders",
                isCorrect: false,
              },
              { text: "It persists data in localStorage", isCorrect: false },
            ],
          },
          {
            id: "fd-a-5",
            question: "What does the Content Security Policy (CSP) header do?",
            topic: "Web Security",
            explanation:
              "CSP is a browser security mechanism that mitigates XSS and data injection attacks by specifying which content sources are allowed to load.",
            options: [
              { text: "It compresses HTTP responses", isCorrect: false },
              {
                text: "It restricts allowed content sources to prevent XSS",
                isCorrect: true,
              },
              { text: "It encrypts cookies", isCorrect: false },
              { text: "It handles CORS preflight requests", isCorrect: false },
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
            id: "fd-ip-b-1",
            question:
              "Explain the difference between HTML, CSS, and JavaScript.",
            talkingPoints: [
              "HTML provides structure and content (the skeleton)",
              "CSS handles presentation and visual styling",
              "JavaScript adds interactivity and dynamic behavior",
              "They work together as the three pillars of the web",
            ],
            keywords: [
              "separation of concerns",
              "semantic HTML",
              "DOM manipulation",
              "event handling",
            ],
          },
          {
            id: "fd-ip-b-2",
            question: "What is responsive web design?",
            talkingPoints: [
              "Designing for multiple screen sizes (mobile, tablet, desktop)",
              "Using CSS media queries to adapt layouts",
              "Flexible grid systems and fluid images",
              "Mobile-first approach is the best practice",
            ],
            keywords: [
              "media queries",
              "flexbox",
              "CSS grid",
              "viewport",
              "breakpoints",
            ],
          },
          {
            id: "fd-ip-b-3",
            question:
              "What is the difference between display: block, inline, and inline-block?",
            talkingPoints: [
              "Block elements take full width and start on new line (div, p, h1)",
              "Inline elements flow within text, cannot set width/height (span, a)",
              "Inline-block combines both — flows inline but respects width/height",
            ],
            keywords: [
              "block formatting context",
              "normal flow",
              "CSS display property",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "fd-ip-i-1",
            question: "How does the React component lifecycle work?",
            talkingPoints: [
              "Mounting: component created and inserted into DOM",
              "Updating: re-renders triggered by state or prop changes",
              "Unmounting: component removed from DOM (cleanup)",
              "Functional components use useEffect to handle lifecycle events",
            ],
            keywords: [
              "useEffect",
              "cleanup functions",
              "dependency array",
              "reconciliation",
            ],
          },
          {
            id: "fd-ip-i-2",
            question: "Explain closures in JavaScript with an example.",
            talkingPoints: [
              "A closure is a function that retains access to its outer scope even after the outer function has returned",
              "Common use cases: data encapsulation, factory functions, event handlers",
              "Closures capture variables by reference, not by value",
              'The classic "loop with closure" bug and how to fix it',
            ],
            keywords: [
              "lexical scope",
              "execution context",
              "hoisting",
              "IIFE",
            ],
          },
          {
            id: "fd-ip-i-3",
            question:
              "What are the benefits and tradeoffs of using a CSS framework like Tailwind?",
            talkingPoints: [
              "Benefits: faster development, no naming CSS classes, consistent design tokens",
              "Tradeoffs: verbose HTML, learning curve, purging unused styles needed",
              "Tailwind is utility-first, not component-based like Bootstrap",
              "Works well with design systems",
            ],
            keywords: [
              "utility-first CSS",
              "JIT compiler",
              "purging",
              "design tokens",
              "CSS-in-JS",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "fd-ip-a-1",
            question:
              "How would you optimize the performance of a React application?",
            talkingPoints: [
              "Code splitting with React.lazy and dynamic imports",
              "Memoization: useMemo, useCallback, React.memo to avoid unnecessary re-renders",
              "Virtualize long lists with react-window or react-virtual",
              "Profile with React DevTools Profiler to find bottlenecks",
              "Optimize images and use CDN",
            ],
            keywords: [
              "bundle size",
              "lazy loading",
              "memoization",
              "reconciliation",
              "Lighthouse",
            ],
          },
          {
            id: "fd-ip-a-2",
            question:
              "Describe your approach to accessibility (a11y) in frontend development.",
            talkingPoints: [
              "Semantic HTML elements carry implicit ARIA roles",
              "Keyboard navigation: all interactive elements focusable, logical tab order",
              "Screen reader support: alt text, ARIA labels, live regions",
              "Color contrast ratios (WCAG AA minimum)",
              "Test with axe DevTools and actual screen readers",
            ],
            keywords: [
              "WCAG",
              "ARIA",
              "semantic HTML",
              "focus management",
              "screen reader",
            ],
          },
          {
            id: "fd-ip-a-3",
            question:
              "Explain micro-frontend architecture and when you would use it.",
            talkingPoints: [
              "Breaking a large frontend into independently deployable vertical slices",
              "Each team owns a complete feature including UI, API, and data",
              "Integration strategies: iframes, Web Components, Module Federation",
              "Tradeoffs: increased complexity, shared library versioning challenges",
              "Best for large teams working on a single large application",
            ],
            keywords: [
              "Module Federation",
              "Webpack",
              "Web Components",
              "single-spa",
              "monorepo",
            ],
          },
        ],
      },
    ],
  },

  "backend-developer": {
    freeCourses: [
      {
        name: "CS50 Web Programming with Python and JavaScript",
        url: "https://cs50.harvard.edu/web/",
        provider: "Harvard / edX",
        platform: "edX",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "Node.js in Hindi – Complete Course",
        url: "https://www.youtube.com/playlist?list=PLgGbWId6zgaWZkPFI4Sc9QXDmmOWa1v5F",
        provider: "Code With Harry",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "Backend Development with Django – Telugu",
        url: "https://www.youtube.com/results?search_query=django+tutorial+telugu",
        provider: "Telugu Tech World",
        platform: "YouTube",
        language: "Telugu",
        level: "Intermediate",
      },
      {
        name: "REST APIs in Spring Boot",
        url: "https://www.youtube.com/c/JavaBrains",
        provider: "Java Brains",
        platform: "YouTube",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "Databases and SQL – NPTEL",
        url: "https://nptel.ac.in/courses/106105175",
        provider: "IIT Madras / NPTEL",
        platform: "NPTEL",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Python Backend (Django + FastAPI) in Hindi",
        url: "https://www.youtube.com/c/Telusko",
        provider: "Telusko (Navin Reddy)",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "freeCodeCamp APIs and Microservices",
        url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
        provider: "freeCodeCamp",
        platform: "freeCodeCamp",
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
            id: "be-b-1",
            question: "What does REST stand for in web services?",
            topic: "REST APIs",
            explanation:
              "REST stands for Representational State Transfer — an architectural style for distributed hypermedia systems.",
            options: [
              { text: "Remote Execution and State Transfer", isCorrect: false },
              { text: "Representational State Transfer", isCorrect: true },
              { text: "Remote Service Technology", isCorrect: false },
              { text: "Reactive Event State Transmission", isCorrect: false },
            ],
          },
          {
            id: "be-b-2",
            question:
              "Which HTTP method is used to update an existing resource?",
            topic: "HTTP",
            explanation:
              "PUT replaces the entire resource, PATCH updates part of it. Both are used for updates — PUT is more common for full replacement.",
            options: [
              { text: "GET", isCorrect: false },
              { text: "POST", isCorrect: false },
              { text: "PUT", isCorrect: true },
              { text: "DELETE", isCorrect: false },
            ],
          },
          {
            id: "be-b-3",
            question: "What is the primary purpose of an API?",
            topic: "APIs",
            explanation:
              "An API (Application Programming Interface) defines how software components communicate, allowing different systems to interact with each other.",
            options: [
              { text: "To store data in a database", isCorrect: false },
              {
                text: "To define a contract for software components to communicate",
                isCorrect: true,
              },
              { text: "To render HTML on the server", isCorrect: false },
              { text: "To encrypt user passwords", isCorrect: false },
            ],
          },
          {
            id: "be-b-4",
            question: "What is SQL?",
            topic: "Databases",
            explanation:
              "SQL (Structured Query Language) is used to manage and query relational databases. All major RDBMS systems (MySQL, PostgreSQL, Oracle) support SQL.",
            options: [
              {
                text: "A programming language for building backends",
                isCorrect: false,
              },
              {
                text: "A language for managing and querying relational databases",
                isCorrect: true,
              },
              { text: "A type of NoSQL database", isCorrect: false },
              { text: "A security protocol for APIs", isCorrect: false },
            ],
          },
          {
            id: "be-b-5",
            question: 'What HTTP status code means "Not Found"?',
            topic: "HTTP",
            explanation:
              '404 is the standard status code for "Not Found" — the server cannot find the requested resource.',
            options: [
              { text: "200", isCorrect: false },
              { text: "301", isCorrect: false },
              { text: "404", isCorrect: true },
              { text: "500", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "be-i-1",
            question: "What is the N+1 query problem in ORM frameworks?",
            topic: "Database",
            explanation:
              "N+1 happens when you fetch a list (1 query) and then loop over it making N individual queries for related data. Fix: use eager loading (JOIN) or data loaders.",
            options: [
              {
                text: "Running the same query N+1 times in a loop",
                isCorrect: false,
              },
              {
                text: "1 query for a list + N separate queries for each item's related data",
                isCorrect: true,
              },
              {
                text: "A limit of N+1 concurrent database connections",
                isCorrect: false,
              },
              { text: "Fetching N+1 rows instead of N", isCorrect: false },
            ],
          },
          {
            id: "be-i-2",
            question: "What is JWT and what is it used for?",
            topic: "Authentication",
            explanation:
              "JWT (JSON Web Token) is a compact, signed token for securely transmitting claims. It is commonly used for stateless authentication in REST APIs.",
            options: [
              { text: "A database encryption algorithm", isCorrect: false },
              {
                text: "A signed token for stateless authentication",
                isCorrect: true,
              },
              { text: "A JavaScript testing framework", isCorrect: false },
              { text: "A JSON schema validator", isCorrect: false },
            ],
          },
          {
            id: "be-i-3",
            question: "What is a database index and why is it used?",
            topic: "Database",
            explanation:
              "An index is a data structure that speeds up query lookups by creating a sorted reference to one or more columns. The tradeoff: faster reads but slower writes.",
            options: [
              { text: "A backup copy of the database", isCorrect: false },
              {
                text: "A data structure that speeds up query lookups",
                isCorrect: true,
              },
              { text: "A foreign key constraint", isCorrect: false },
              { text: "A stored procedure", isCorrect: false },
            ],
          },
          {
            id: "be-i-4",
            question:
              "What is middleware in web frameworks (Express, Django, etc.)?",
            topic: "Web Frameworks",
            explanation:
              "Middleware functions run between the HTTP request arriving and the route handler executing. Used for logging, authentication, input validation, CORS, etc.",
            options: [
              { text: "A type of database driver", isCorrect: false },
              {
                text: "A function that processes requests between receiving and handling",
                isCorrect: true,
              },
              {
                text: "The frontend framework connecting to the backend",
                isCorrect: false,
              },
              {
                text: "A server-to-server communication protocol",
                isCorrect: false,
              },
            ],
          },
          {
            id: "be-i-5",
            question:
              "What is the difference between horizontal and vertical scaling?",
            topic: "System Design",
            explanation:
              "Vertical scaling (scale up) means adding more power to a single server. Horizontal scaling (scale out) means adding more servers. Horizontal is more resilient but complex.",
            options: [
              {
                text: "Horizontal = more RAM; Vertical = more servers",
                isCorrect: false,
              },
              {
                text: "Vertical = bigger server; Horizontal = more servers",
                isCorrect: true,
              },
              {
                text: "They are the same thing with different names",
                isCorrect: false,
              },
              {
                text: "Horizontal = database scaling; Vertical = app scaling",
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
            id: "be-a-1",
            question: "What is database sharding?",
            topic: "Database Architecture",
            explanation:
              "Sharding is a horizontal partitioning strategy where a large dataset is split across multiple databases (shards), each holding a subset of the data. Used when a single DB cannot handle the load.",
            options: [
              { text: "Encrypting database columns", isCorrect: false },
              {
                text: "Horizontal partitioning of data across multiple databases",
                isCorrect: true,
              },
              {
                text: "Creating read replicas for reporting",
                isCorrect: false,
              },
              { text: "Compressing database tables", isCorrect: false },
            ],
          },
          {
            id: "be-a-2",
            question: "Explain eventual consistency in distributed systems.",
            topic: "Distributed Systems",
            explanation:
              "Eventual consistency means that if no new updates are made, all replicas will eventually converge to the same value. Unlike strong consistency, reads may return stale data temporarily.",
            options: [
              {
                text: "All nodes always return the same data immediately",
                isCorrect: false,
              },
              {
                text: "Replicas converge over time, reads may return stale data temporarily",
                isCorrect: true,
              },
              {
                text: "Only eventual writes are persisted to disk",
                isCorrect: false,
              },
              {
                text: "Consistency is only enforced at end of day",
                isCorrect: false,
              },
            ],
          },
          {
            id: "be-a-3",
            question: "What is the Circuit Breaker pattern in microservices?",
            topic: "Microservices",
            explanation:
              'The Circuit Breaker prevents cascading failures: it monitors calls to a service, and if failures exceed a threshold, it "opens" the circuit — rejecting further calls until the service recovers.',
            options: [
              {
                text: "A load balancer that routes traffic based on circuit load",
                isCorrect: false,
              },
              {
                text: "A pattern that stops calls to a failing service to prevent cascading failures",
                isCorrect: true,
              },
              {
                text: "A pattern for encrypting inter-service communication",
                isCorrect: false,
              },
              {
                text: "A database connection pooling strategy",
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
            id: "be-ip-b-1",
            question:
              "What is the difference between GET and POST HTTP methods?",
            talkingPoints: [
              "GET retrieves data — parameters are in the URL, idempotent and cacheable",
              "POST sends data to the server — body carries the payload, not idempotent",
              "GET should never change server state; use POST/PUT/DELETE for mutations",
              "GET requests are limited in size; POST can send large payloads",
            ],
            keywords: [
              "idempotent",
              "HTTP methods",
              "CRUD",
              "REST",
              "request body",
            ],
          },
          {
            id: "be-ip-b-2",
            question: "Explain what a RESTful API is.",
            talkingPoints: [
              "REST is an architectural style using HTTP methods to perform CRUD operations",
              "Stateless — each request contains all info needed, no server-side session",
              "Resources are identified by URLs (/users/123)",
              "Returns data in standard formats like JSON",
            ],
            keywords: [
              "stateless",
              "resources",
              "HTTP verbs",
              "JSON",
              "status codes",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "be-ip-i-1",
            question: "How do you handle database transactions?",
            talkingPoints: [
              "ACID properties: Atomicity, Consistency, Isolation, Durability",
              "Use transactions to group multiple operations that must succeed or fail together",
              "Be careful about transaction scope — keep them short to avoid lock contention",
              "Handle rollback on errors; commit only on complete success",
            ],
            keywords: [
              "ACID",
              "BEGIN TRANSACTION",
              "COMMIT",
              "ROLLBACK",
              "deadlock",
            ],
          },
          {
            id: "be-ip-i-2",
            question:
              "Describe how you would design a caching strategy for a backend API.",
            talkingPoints: [
              "Identify read-heavy endpoints that benefit most from caching",
              "Choose cache layer: in-process (memory), distributed (Redis/Memcached)",
              "Define TTL (time-to-live) based on how stale data is acceptable",
              "Cache invalidation strategies: TTL-based, event-driven, write-through",
            ],
            keywords: [
              "Redis",
              "TTL",
              "cache invalidation",
              "cache-aside pattern",
              "read-through",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "be-ip-a-1",
            question: "How would you design a rate limiting system?",
            talkingPoints: [
              "Define what to limit: IP, user, API key — and the limit window (per second, minute)",
              "Algorithms: token bucket (smooth), sliding window log, fixed window counter",
              "Store counters in Redis with atomic INCR and EXPIRE commands",
              "Return 429 Too Many Requests with Retry-After header",
            ],
            keywords: [
              "token bucket",
              "sliding window",
              "Redis",
              "429",
              "distributed rate limiting",
            ],
          },
        ],
      },
    ],
  },

  "data-analyst": {
    freeCourses: [
      {
        name: "Google Data Analytics Certificate",
        url: "https://www.coursera.org/professional-certificates/google-data-analytics",
        provider: "Google / Coursera",
        platform: "Coursera",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Data Analysis with Python – freeCodeCamp",
        url: "https://www.freecodecamp.org/learn/data-analysis-with-python/",
        provider: "freeCodeCamp",
        platform: "freeCodeCamp",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "Data Analytics in Hindi – Complete Course",
        url: "https://www.youtube.com/c/CampusX",
        provider: "CampusX",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "Excel and Data Analysis Telugu Tutorial",
        url: "https://www.youtube.com/results?search_query=data+analysis+excel+telugu",
        provider: "Telugu Tech World",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "SQL for Data Analysis – Mode Analytics",
        url: "https://mode.com/sql-tutorial/",
        provider: "Mode Analytics",
        platform: "YouTube",
        language: "English",
        level: "Beginner",
      },
      {
        name: "NPTEL Data Analytics with Python",
        url: "https://nptel.ac.in/courses/106106212",
        provider: "IIT Roorkee / NPTEL",
        platform: "NPTEL",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "Power BI in Hindi – Complete Tutorial",
        url: "https://www.youtube.com/results?search_query=power+bi+tutorial+hindi",
        provider: "Aman Kharwal",
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
            id: "da-b-1",
            question:
              "Which SQL clause is used to filter rows based on a condition?",
            topic: "SQL",
            explanation:
              "WHERE clause filters individual rows. HAVING filters groups after GROUP BY. They serve different purposes.",
            options: [
              { text: "GROUP BY", isCorrect: false },
              { text: "HAVING", isCorrect: false },
              { text: "WHERE", isCorrect: true },
              { text: "ORDER BY", isCorrect: false },
            ],
          },
          {
            id: "da-b-2",
            question:
              "What type of chart is best for showing a trend over time?",
            topic: "Visualization",
            explanation:
              "Line charts are ideal for showing continuous trends over time because the connected lines emphasize the progression.",
            options: [
              { text: "Pie chart", isCorrect: false },
              { text: "Bar chart", isCorrect: false },
              { text: "Line chart", isCorrect: true },
              { text: "Scatter plot", isCorrect: false },
            ],
          },
          {
            id: "da-b-3",
            question: 'What does "NULL" mean in a database?',
            topic: "Database Concepts",
            explanation:
              "NULL represents a missing or unknown value — it is not zero, empty string, or false. NULL ≠ NULL; use IS NULL to check for it.",
            options: [
              { text: "Zero value in a numeric column", isCorrect: false },
              { text: "An empty string", isCorrect: false },
              { text: "Missing or unknown value", isCorrect: true },
              { text: "A deleted record", isCorrect: false },
            ],
          },
          {
            id: "da-b-4",
            question: "What is the purpose of the GROUP BY clause in SQL?",
            topic: "SQL",
            explanation:
              "GROUP BY groups rows with the same values in specified columns, allowing aggregate functions (COUNT, SUM, AVG) to be applied to each group.",
            options: [
              {
                text: "To sort results in alphabetical order",
                isCorrect: false,
              },
              {
                text: "To group rows for aggregate calculations",
                isCorrect: true,
              },
              { text: "To join two tables together", isCorrect: false },
              { text: "To remove duplicate rows", isCorrect: false },
            ],
          },
          {
            id: "da-b-5",
            question: "In Excel/Sheets, what does VLOOKUP do?",
            topic: "Excel",
            explanation:
              "VLOOKUP searches for a value in the first column of a table and returns a value in the same row from another column — used for combining data from different tables.",
            options: [
              { text: "Calculates vertical averages", isCorrect: false },
              { text: "Sorts a column vertically", isCorrect: false },
              {
                text: "Looks up a value and returns data from another column",
                isCorrect: true,
              },
              { text: "Validates data entry in a column", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "da-i-1",
            question:
              "What is the difference between INNER JOIN and LEFT JOIN?",
            topic: "SQL Joins",
            explanation:
              "INNER JOIN returns only rows with matches in BOTH tables. LEFT JOIN returns ALL rows from the left table, with NULLs for non-matching rows from the right table.",
            options: [
              {
                text: "INNER JOIN is faster; LEFT JOIN is more accurate",
                isCorrect: false,
              },
              {
                text: "INNER JOIN: only matched rows; LEFT JOIN: all left rows + matched right rows",
                isCorrect: true,
              },
              {
                text: "They are the same but differ in syntax",
                isCorrect: false,
              },
              {
                text: "INNER JOIN works on same table; LEFT JOIN on different tables",
                isCorrect: false,
              },
            ],
          },
          {
            id: "da-i-2",
            question: "What is a KPI in business analytics?",
            topic: "Business Analytics",
            explanation:
              "A KPI (Key Performance Indicator) is a measurable value that demonstrates how effectively a company is achieving key business objectives.",
            options: [
              { text: "Knowledge Processing Infrastructure", isCorrect: false },
              {
                text: "A measurable value showing progress toward business objectives",
                isCorrect: true,
              },
              { text: "A database performance metric", isCorrect: false },
              { text: "A Python library for analytics", isCorrect: false },
            ],
          },
          {
            id: "da-i-3",
            question:
              "What does a high standard deviation indicate in a dataset?",
            topic: "Statistics",
            explanation:
              "High standard deviation means data points are spread far from the mean — high variability. Low standard deviation means data is clustered close to the mean.",
            options: [
              {
                text: "Data is clustered close to the average",
                isCorrect: false,
              },
              { text: "Most values are outliers", isCorrect: false },
              {
                text: "Data is spread widely from the average",
                isCorrect: true,
              },
              { text: "The dataset has many missing values", isCorrect: false },
            ],
          },
          {
            id: "da-i-4",
            question: "What is a pivot table used for?",
            topic: "Excel / Data Tools",
            explanation:
              "A pivot table summarizes and aggregates large datasets, allowing you to group, filter, and cross-tabulate data dynamically without writing formulas.",
            options: [
              { text: "Creating charts from raw data", isCorrect: false },
              {
                text: "Summarizing and cross-tabulating large datasets dynamically",
                isCorrect: true,
              },
              {
                text: "Rotating the orientation of a database table",
                isCorrect: false,
              },
              { text: "Connecting Excel to a SQL database", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "advanced",
        passingScore: 70,
        questions: [
          {
            id: "da-a-1",
            question:
              "What is data normalization and when would you NOT normalize?",
            topic: "Data Modeling",
            explanation:
              "Normalization reduces redundancy by organizing data into related tables. You denormalize for analytics/OLAP workloads where reads dominate and JOINs are expensive.",
            options: [
              {
                text: "Scaling all numeric values to 0-1 range",
                isCorrect: false,
              },
              {
                text: "Organizing data to reduce redundancy; skip it for read-heavy analytics",
                isCorrect: true,
              },
              {
                text: "Converting all data types to strings",
                isCorrect: false,
              },
              { text: "Adding indexes to every column", isCorrect: false },
            ],
          },
          {
            id: "da-a-2",
            question: "What is a window function in SQL?",
            topic: "Advanced SQL",
            explanation:
              "Window functions (ROW_NUMBER, RANK, LAG, LEAD, SUM OVER) perform calculations across a set of rows related to the current row without collapsing them into a single result like GROUP BY.",
            options: [
              {
                text: "A function that only runs during business hours",
                isCorrect: false,
              },
              {
                text: "A calculation across related rows without collapsing them like GROUP BY",
                isCorrect: true,
              },
              { text: "A subquery in the WHERE clause", isCorrect: false },
              {
                text: "An Excel function for scrolling through data",
                isCorrect: false,
              },
            ],
          },
          {
            id: "da-a-3",
            question:
              "Explain the difference between a data lake and a data warehouse.",
            topic: "Data Architecture",
            explanation:
              "A data lake stores raw data in any format (structured + unstructured) at low cost. A data warehouse stores structured, processed data optimized for querying and reporting.",
            options: [
              {
                text: "Data lake is for small data; data warehouse for big data",
                isCorrect: false,
              },
              {
                text: "Data lake: raw data any format; data warehouse: structured, query-optimized",
                isCorrect: true,
              },
              {
                text: "They are the same but from different vendors",
                isCorrect: false,
              },
              {
                text: "Data warehouse is temporary; data lake is permanent",
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
            id: "da-ip-b-1",
            question: "Walk me through how you would clean a messy dataset.",
            talkingPoints: [
              "First understand the data: column types, distributions, unique values",
              "Handle missing values: impute, drop, or flag depending on context",
              "Remove or cap outliers based on domain knowledge",
              "Standardize formats: dates, strings, category names",
              "Validate against business rules",
            ],
            keywords: [
              "data cleaning",
              "missing values",
              "outliers",
              "normalization",
              "EDA",
            ],
          },
          {
            id: "da-ip-b-2",
            question: "What is exploratory data analysis (EDA)?",
            talkingPoints: [
              "EDA is the process of analyzing data to summarize its main characteristics",
              "Tools: histograms, box plots, scatter plots, correlation matrices",
              "Identify distributions, outliers, and relationships between variables",
              "Forms hypotheses before applying formal statistical tests",
            ],
            keywords: [
              "histogram",
              "correlation",
              "distribution",
              "outlier detection",
              "summary statistics",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "da-ip-i-1",
            question:
              "How do you approach building a dashboard for stakeholders?",
            talkingPoints: [
              "Start by understanding the audience — what decisions will they make with this?",
              "Identify the 3–5 most important KPIs — avoid metric overload",
              "Design for scanning: use visual hierarchy, consistent colors",
              "Enable drill-down for detail without cluttering the summary view",
              "Test with actual users and iterate",
            ],
            keywords: [
              "KPIs",
              "data storytelling",
              "Power BI",
              "Tableau",
              "executive dashboard",
            ],
          },
          {
            id: "da-ip-i-2",
            question: "Explain a cohort analysis and when you would use it.",
            talkingPoints: [
              "A cohort analysis groups users by a shared characteristic (e.g., signup month) and tracks behavior over time",
              "Classic use: retention analysis — how many users from January are still active in month 3?",
              "Helps identify if product improvements actually retained users or if it was cohort effect",
              "Output: retention table/heatmap",
            ],
            keywords: [
              "cohort",
              "retention",
              "churn",
              "user lifecycle",
              "product analytics",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "da-ip-a-1",
            question:
              "How do you measure the impact of a product change (A/B test)?",
            talkingPoints: [
              "Define the hypothesis and primary metric before the test",
              "Calculate required sample size using statistical power analysis",
              "Randomize users into control and treatment groups",
              "Run for sufficient duration (avoid peeking), then test significance with t-test or chi-square",
              "Consider secondary metrics and guardrail metrics",
            ],
            keywords: [
              "A/B testing",
              "statistical significance",
              "p-value",
              "sample size",
              "Type I/II errors",
            ],
          },
        ],
      },
    ],
  },

  "fullstack-developer": {
    freeCourses: [
      {
        name: "The Odin Project (Full Stack)",
        url: "https://www.theodinproject.com/",
        provider: "The Odin Project",
        platform: "The Odin Project",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Full Stack Web Dev in Hindi",
        url: "https://www.youtube.com/c/CodeWithHarry",
        provider: "Code With Harry",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "Full Stack Telugu Tutorial",
        url: "https://www.youtube.com/results?search_query=full+stack+developer+telugu",
        provider: "Telugu Tech World",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "IBM Full Stack Cloud Developer",
        url: "https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer",
        provider: "IBM / Coursera",
        platform: "Coursera",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "CS50 Web Programming",
        url: "https://cs50.harvard.edu/web/",
        provider: "Harvard / edX",
        platform: "edX",
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
            id: "fs-b-1",
            question: "What does MERN stand for?",
            topic: "Stack",
            explanation:
              "MERN = MongoDB, Express.js, React, Node.js — a popular full stack JavaScript technology combination.",
            options: [
              { text: "MySQL, Express, React, Node", isCorrect: false },
              { text: "MongoDB, Express, React, Node", isCorrect: true },
              { text: "MongoDB, Ember, Redux, Nginx", isCorrect: false },
              { text: "MySQL, Ember, React, Next", isCorrect: false },
            ],
          },
          {
            id: "fs-b-2",
            question: "Which layer handles the database in a full stack app?",
            topic: "Architecture",
            explanation:
              "The backend/server layer communicates with the database. The frontend renders UI; the backend serves as the bridge.",
            options: [
              { text: "Frontend", isCorrect: false },
              { text: "Backend", isCorrect: true },
              { text: "CSS layer", isCorrect: false },
              { text: "Browser", isCorrect: false },
            ],
          },
          {
            id: "fs-b-3",
            question: "What is an ORM?",
            topic: "Database",
            explanation:
              "ORM (Object Relational Mapper) maps database tables to objects in code, allowing developers to query databases using their programming language instead of raw SQL.",
            options: [
              { text: "Open Router Module", isCorrect: false },
              {
                text: "A tool mapping database tables to code objects",
                isCorrect: true,
              },
              { text: "A REST API testing tool", isCorrect: false },
              { text: "An object rendering method", isCorrect: false },
            ],
          },
          {
            id: "fs-b-4",
            question: "What does CRUD stand for?",
            topic: "REST APIs",
            explanation:
              "CRUD = Create, Read, Update, Delete — the four basic operations for persistent data storage.",
            options: [
              { text: "Create, Run, Update, Delete", isCorrect: false },
              { text: "Create, Read, Update, Delete", isCorrect: true },
              { text: "Connect, Retrieve, Upload, Download", isCorrect: false },
              { text: "Compile, Render, Upload, Deploy", isCorrect: false },
            ],
          },
          {
            id: "fs-b-5",
            question: "What is CORS?",
            topic: "Web Security",
            explanation:
              "CORS (Cross-Origin Resource Sharing) is a browser security policy that restricts web pages from making requests to a different domain than the one serving the page.",
            options: [
              { text: "Client-side Object Resource System", isCorrect: false },
              {
                text: "Cross-Origin Resource Sharing — controls allowed origins for HTTP requests",
                isCorrect: true,
              },
              { text: "Compressed Object Response Standard", isCorrect: false },
              { text: "Content Origin Routing Service", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "fs-i-1",
            question: "What is server-side rendering (SSR)?",
            topic: "Rendering",
            explanation:
              "SSR renders HTML on the server and sends it to the client. This improves SEO and initial load time compared to client-side rendering (CSR).",
            options: [
              { text: "CSS rendering on the server", isCorrect: false },
              {
                text: "HTML generated on the server before being sent to the browser",
                isCorrect: true,
              },
              {
                text: "Running JavaScript in a Node.js worker",
                isCorrect: false,
              },
              { text: "Serving static files from a CDN", isCorrect: false },
            ],
          },
          {
            id: "fs-i-2",
            question:
              "What is the purpose of environment variables in a full stack app?",
            topic: "Configuration",
            explanation:
              "Environment variables store configuration values (API keys, DB URLs) outside the codebase so they don't get committed to version control and can vary per environment.",
            options: [
              { text: "To define CSS custom properties", isCorrect: false },
              {
                text: "To store config/secrets outside the codebase",
                isCorrect: true,
              },
              { text: "To set global JavaScript variables", isCorrect: false },
              { text: "To configure Linux system settings", isCorrect: false },
            ],
          },
          {
            id: "fs-i-3",
            question: "What is the purpose of a reverse proxy like Nginx?",
            topic: "Infrastructure",
            explanation:
              "Nginx acts as a reverse proxy, forwarding client requests to backend servers. It also handles SSL termination, load balancing, and static file serving.",
            options: [
              {
                text: "A database proxy to speed up queries",
                isCorrect: false,
              },
              {
                text: "A server that forwards requests to backend services and handles SSL/load balancing",
                isCorrect: true,
              },
              { text: "A Node.js runtime alternative", isCorrect: false },
              { text: "A browser cache management tool", isCorrect: false },
            ],
          },
          {
            id: "fs-i-4",
            question: "What does Docker help solve for full stack developers?",
            topic: "DevOps",
            explanation:
              "Docker containers package the app with all dependencies, ensuring it runs consistently across developer machines, staging, and production environments.",
            options: [
              { text: "Speeds up JavaScript execution", isCorrect: false },
              {
                text: "Ensures consistent environments across development and production",
                isCorrect: true,
              },
              { text: "Manages npm packages", isCorrect: false },
              { text: "Provides a virtual database", isCorrect: false },
            ],
          },
          {
            id: "fs-i-5",
            question: "What is JWT used for in full stack authentication?",
            topic: "Authentication",
            explanation:
              "JWT (JSON Web Token) is a signed token issued after login that the client includes in subsequent requests. The server verifies it without needing to query the database for each request.",
            options: [
              { text: "Encrypting database passwords", isCorrect: false },
              {
                text: "Stateless authentication — signed token carries user identity",
                isCorrect: true,
              },
              { text: "Managing session cookies", isCorrect: false },
              { text: "Hashing API request data", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "advanced",
        passingScore: 70,
        questions: [
          {
            id: "fs-a-1",
            question: "What is a microservices architecture?",
            topic: "Architecture",
            explanation:
              "Microservices decompose a monolithic application into small, independently deployable services that communicate via APIs. Each service owns its domain and can be scaled independently.",
            options: [
              { text: "A very small monolithic application", isCorrect: false },
              {
                text: "Independent services each owning a domain, communicating via APIs",
                isCorrect: true,
              },
              { text: "A serverless architecture pattern", isCorrect: false },
              {
                text: "A React component architecture pattern",
                isCorrect: false,
              },
            ],
          },
          {
            id: "fs-a-2",
            question:
              "What is the purpose of a message queue (e.g., RabbitMQ, Kafka)?",
            topic: "Distributed Systems",
            explanation:
              "Message queues decouple producers and consumers. Producers send messages without waiting for consumers to process them — enabling async processing, buffering, and fault tolerance.",
            options: [
              {
                text: "A persistent data store for user messages",
                isCorrect: false,
              },
              {
                text: "Decouples services enabling async processing and buffering",
                isCorrect: true,
              },
              { text: "An email delivery service", isCorrect: false },
              { text: "A database replication tool", isCorrect: false },
            ],
          },
          {
            id: "fs-a-3",
            question: "What is the CAP theorem?",
            topic: "Distributed Systems",
            explanation:
              "CAP theorem states a distributed system can only guarantee two of three: Consistency, Availability, Partition tolerance. In practice, partition tolerance is mandatory, so you choose between CP or AP.",
            options: [
              { text: "Cache, API, and Performance", isCorrect: false },
              {
                text: "Consistency, Availability, Partition tolerance — only 2 of 3 guaranteed",
                isCorrect: true,
              },
              { text: "Compute, Analytics, Parallelism", isCorrect: false },
              { text: "CORS, Authentication, Persistence", isCorrect: false },
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
            id: "fs-ip-b-1",
            question:
              "What is the difference between frontend and backend development?",
            talkingPoints: [
              "Frontend: user-facing UI using HTML, CSS, JavaScript frameworks",
              "Backend: server logic, database management, APIs",
              "Full stack: both — you can work across the entire stack",
              "Communication happens via APIs (REST, GraphQL)",
            ],
            keywords: [
              "client-server model",
              "REST API",
              "UI/UX",
              "database",
              "routing",
            ],
          },
          {
            id: "fs-ip-b-2",
            question:
              "Why would a company hire a full stack developer over specialists?",
            talkingPoints: [
              "Cost efficiency on smaller teams",
              "Faster iteration — one person can ship a complete feature",
              "Better understanding of end-to-end system",
              "Tradeoff: breadth vs depth",
            ],
            keywords: [
              "generalist",
              "startup",
              "agile",
              "rapid prototyping",
              "ownership",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "fs-ip-i-1",
            question: "How do you handle state management in a full stack app?",
            talkingPoints: [
              "Frontend: useState, Redux/Zustand for local/global UI state",
              "Server state: React Query or SWR for async server data",
              "Backend: stateless REST or GraphQL, database is the source of truth",
              "Session state: JWT tokens or server sessions",
            ],
            keywords: [
              "Redux",
              "React Query",
              "JWT",
              "stateless",
              "local storage",
            ],
          },
          {
            id: "fs-ip-i-2",
            question:
              "Describe how you would handle authentication in a full stack application.",
            talkingPoints: [
              "User submits credentials → server validates and issues JWT",
              "Client stores token (httpOnly cookie preferred, not localStorage)",
              "Protected routes check token validity on backend middleware",
              "Refresh tokens for long-lived sessions; logout clears token",
            ],
            keywords: ["JWT", "httpOnly cookie", "OAuth", "middleware", "RBAC"],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "fs-ip-a-1",
            question: "How would you design a scalable full stack application?",
            talkingPoints: [
              "Separate concerns: CDN for static assets, load balancer, stateless app servers",
              "Database: read replicas for queries, connection pooling",
              "Caching: Redis for sessions and frequent data",
              "Async jobs: message queue for heavy processing",
              "Monitoring: structured logs, APM, error tracking",
            ],
            keywords: [
              "horizontal scaling",
              "Redis",
              "CDN",
              "load balancer",
              "observability",
            ],
          },
        ],
      },
    ],
  },

  "mobile-android-developer": {
    freeCourses: [
      {
        name: "Android Basics with Compose – Google",
        url: "https://developer.android.com/courses/android-basics-compose/course",
        provider: "Google Android",
        platform: "Google Android",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Android Development in Hindi",
        url: "https://www.youtube.com/results?search_query=android+development+course+hindi",
        provider: "Code With Harry",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "Android App Development Telugu",
        url: "https://www.youtube.com/results?search_query=android+development+tutorial+telugu",
        provider: "Telugu Tech World",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "Meta Android Developer Certificate",
        url: "https://www.coursera.org/professional-certificates/meta-android-developer",
        provider: "Meta / Coursera",
        platform: "Coursera",
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
            id: "and-b-1",
            question:
              "What language is primarily used for Android development today?",
            topic: "Android Basics",
            explanation:
              "Kotlin is the preferred language for Android since Google declared it the official Android language in 2019. Java is still supported but Kotlin is modern.",
            options: [
              { text: "Java", isCorrect: false },
              { text: "Kotlin", isCorrect: true },
              { text: "Swift", isCorrect: false },
              { text: "Dart", isCorrect: false },
            ],
          },
          {
            id: "and-b-2",
            question: "What is the entry point of an Android application?",
            topic: "Android Components",
            explanation:
              "The main Activity is the entry point. It is declared in AndroidManifest.xml with the MAIN action and LAUNCHER category intent filter.",
            options: [
              { text: "Fragment", isCorrect: false },
              { text: "Service", isCorrect: false },
              { text: "Activity", isCorrect: true },
              { text: "BroadcastReceiver", isCorrect: false },
            ],
          },
          {
            id: "and-b-3",
            question: "What is the AndroidManifest.xml used for?",
            topic: "Android Basics",
            explanation:
              "AndroidManifest.xml declares the app's components (activities, services), permissions, and configuration. It's required in every Android app.",
            options: [
              { text: "Defining UI layouts", isCorrect: false },
              {
                text: "Declaring app components, permissions and configuration",
                isCorrect: true,
              },
              { text: "Storing app settings", isCorrect: false },
              { text: "Managing dependencies", isCorrect: false },
            ],
          },
          {
            id: "and-b-4",
            question:
              "Which layout manager uses percentage-based positioning in Android?",
            topic: "UI",
            explanation:
              "ConstraintLayout allows positioning elements relative to each other or the parent using constraints — it replaced percentage-based approaches and is the recommended layout.",
            options: [
              { text: "LinearLayout", isCorrect: false },
              { text: "RelativeLayout", isCorrect: false },
              { text: "ConstraintLayout", isCorrect: true },
              { text: "FrameLayout", isCorrect: false },
            ],
          },
          {
            id: "and-b-5",
            question: "What is an Intent in Android?",
            topic: "Android Components",
            explanation:
              "An Intent is a messaging object used to request an action from another app component — e.g., starting an Activity, Service, or sending a BroadcastReceiver message.",
            options: [
              { text: "A UI animation specification", isCorrect: false },
              {
                text: "A messaging object that triggers component actions",
                isCorrect: true,
              },
              { text: "A data persistence class", isCorrect: false },
              { text: "A background task scheduler", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "and-i-1",
            question: "What is MVVM architecture in Android?",
            topic: "Architecture",
            explanation:
              "MVVM (Model-View-ViewModel): Model holds data, View renders UI, ViewModel exposes data streams to View. It decouples UI from business logic, making code testable.",
            options: [
              { text: "Model-View-ViewManager", isCorrect: false },
              {
                text: "Model-View-ViewModel — separates UI from business logic",
                isCorrect: true,
              },
              { text: "A build system for Android", isCorrect: false },
              { text: "A navigation pattern", isCorrect: false },
            ],
          },
          {
            id: "and-i-2",
            question: "What is Room database in Android?",
            topic: "Data Persistence",
            explanation:
              "Room is an SQLite abstraction library from Android Jetpack. It provides compile-time SQL verification, simpler ORM-style access, and LiveData/Flow integration.",
            options: [
              { text: "A cloud storage service", isCorrect: false },
              {
                text: "Jetpack library providing SQLite abstraction with compile-time query checks",
                isCorrect: true,
              },
              { text: "A key-value store for preferences", isCorrect: false },
              { text: "A network caching layer", isCorrect: false },
            ],
          },
          {
            id: "and-i-3",
            question: "What are Kotlin Coroutines used for?",
            topic: "Concurrency",
            explanation:
              "Kotlin Coroutines are a concurrency framework for writing asynchronous code in a sequential style. They replace callbacks and RxJava for async operations like network calls.",
            options: [
              { text: "Making UI animations smoother", isCorrect: false },
              {
                text: "Writing async code sequentially without callbacks",
                isCorrect: true,
              },
              { text: "Defining reusable UI components", isCorrect: false },
              { text: "Managing app navigation", isCorrect: false },
            ],
          },
          {
            id: "and-i-4",
            question: "What is Retrofit used for in Android?",
            topic: "Networking",
            explanation:
              "Retrofit is a type-safe HTTP client for Android. It converts REST API responses into Kotlin/Java objects using converters like Gson or Moshi.",
            options: [
              { text: "Displaying images from URLs", isCorrect: false },
              {
                text: "A type-safe HTTP client for REST API calls",
                isCorrect: true,
              },
              { text: "A database migration tool", isCorrect: false },
              { text: "A UI theming library", isCorrect: false },
            ],
          },
          {
            id: "and-i-5",
            question: "What is the Fragment Back Stack?",
            topic: "Navigation",
            explanation:
              "The back stack tracks fragment transactions. When you addToBackStack(), the user can press Back to reverse the transaction. The Fragment Manager manages this stack.",
            options: [
              { text: "A database table for fragments", isCorrect: false },
              {
                text: "A stack tracking fragment transactions for back navigation",
                isCorrect: true,
              },
              { text: "A memory cache for fragment state", isCorrect: false },
              { text: "A notification queue", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "advanced",
        passingScore: 70,
        questions: [
          {
            id: "and-a-1",
            question:
              "What is Dependency Injection and how does Hilt implement it?",
            topic: "Architecture",
            explanation:
              "DI is a design pattern where dependencies are provided to a class rather than created inside it. Hilt (built on Dagger) generates DI code at compile time using annotations.",
            options: [
              {
                text: "A pattern for injecting CSS into Android layouts",
                isCorrect: false,
              },
              {
                text: "Providing dependencies externally; Hilt generates boilerplate via annotations",
                isCorrect: true,
              },
              { text: "A way to inject mock data in tests", isCorrect: false },
              { text: "A Firebase authentication method", isCorrect: false },
            ],
          },
          {
            id: "and-a-2",
            question: "How do you handle memory leaks in Android?",
            topic: "Performance",
            explanation:
              "Common causes: holding Context references in singletons, non-cancelled coroutines, unregistered listeners. Tools: LeakCanary for detection; use weak references, viewModelScope, lifecycle-aware observers.",
            options: [
              { text: "Increase heap size in manifest", isCorrect: false },
              {
                text: "Use LeakCanary, weak references, and lifecycle-aware components",
                isCorrect: true,
              },
              { text: "Disable garbage collection", isCorrect: false },
              {
                text: "Clear SharedPreferences on every launch",
                isCorrect: false,
              },
            ],
          },
          {
            id: "and-a-3",
            question:
              "What is Jetpack Compose and how does it differ from XML layouts?",
            topic: "UI",
            explanation:
              "Compose is a declarative UI toolkit — you describe what the UI looks like as state changes, not how to update it. Unlike XML layouts, Compose eliminates view hierarchies and uses composable functions.",
            options: [
              { text: "A JSON library for Android", isCorrect: false },
              {
                text: "A declarative UI toolkit replacing XML view hierarchies with composable functions",
                isCorrect: true,
              },
              { text: "A testing framework for Android", isCorrect: false },
              { text: "An animation library", isCorrect: false },
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
            id: "and-ip-b-1",
            question: "What are the four main Android app components?",
            talkingPoints: [
              "Activity: UI screen",
              "Service: background operations without UI",
              "BroadcastReceiver: responds to system-wide broadcasts",
              "ContentProvider: shares data between apps",
              "All declared in AndroidManifest.xml",
            ],
            keywords: [
              "Activity",
              "Service",
              "BroadcastReceiver",
              "ContentProvider",
              "manifest",
            ],
          },
          {
            id: "and-ip-b-2",
            question: "What is the Android Activity lifecycle?",
            talkingPoints: [
              "onCreate → onStart → onResume → (running)",
              "onPause → onStop → onDestroy",
              "onRestart when returning from stopped state",
              "Save state in onSaveInstanceState, restore in onCreate/onRestoreInstanceState",
            ],
            keywords: [
              "lifecycle callbacks",
              "onResume",
              "onPause",
              "background",
              "saved state",
            ],
          },
          {
            id: "and-ip-b-3",
            question:
              "What is the difference between Serializable and Parcelable?",
            talkingPoints: [
              "Both allow passing objects between Activities via Intents",
              "Serializable uses reflection — simple but slow",
              "Parcelable is Android-specific, faster, recommended",
              "Use @Parcelize annotation in Kotlin for easy implementation",
            ],
            keywords: [
              "Parcelable",
              "Serializable",
              "Intent extras",
              "performance",
              "reflection",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "and-ip-i-1",
            question: "How does the ViewModel survive configuration changes?",
            talkingPoints: [
              "ViewModel is scoped to a ViewModelStore owned by the Activity/Fragment",
              "On rotation, Activity is recreated but ViewModelStore is retained",
              "ViewModel.onCleared() called when Activity is permanently destroyed",
              "ViewModel should not hold references to Activity/View to avoid leaks",
            ],
            keywords: [
              "ViewModelStore",
              "configuration change",
              "onCleared",
              "lifecycle",
              "retain",
            ],
          },
          {
            id: "and-ip-i-2",
            question: "What is LiveData and how does it work?",
            talkingPoints: [
              "Observable data holder that is lifecycle-aware",
              "Only notifies active observers (STARTED/RESUMED lifecycle state)",
              "Prevents null pointer exceptions and memory leaks",
              "Use MutableLiveData in ViewModel, expose immutable LiveData to UI",
            ],
            keywords: [
              "observable",
              "lifecycle-aware",
              "observer pattern",
              "MutableLiveData",
              "postValue",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "and-ip-a-1",
            question: "How would you architect a large Android application?",
            talkingPoints: [
              "Clean architecture: UI → Domain → Data layers",
              "Repository pattern abstracts data sources (network, database)",
              "Use cases encapsulate business logic",
              "Dependency injection (Hilt) for testability",
              "Modularize by feature for build performance",
            ],
            keywords: [
              "Clean Architecture",
              "Repository",
              "Use Cases",
              "Hilt",
              "multi-module",
            ],
          },
        ],
      },
    ],
  },

  "mobile-ios-developer": {
    freeCourses: [
      {
        name: "Swift Playgrounds – Apple",
        url: "https://www.apple.com/swift/playgrounds/",
        provider: "Apple",
        platform: "Apple",
        language: "English",
        level: "Beginner",
      },
      {
        name: "iOS Development in Hindi",
        url: "https://www.youtube.com/results?search_query=ios+development+tutorial+hindi",
        provider: "YouTube Hindi",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "100 Days of SwiftUI – Paul Hudson",
        url: "https://www.hackingwithswift.com/100/swiftui",
        provider: "Hacking with Swift",
        platform: "Hacking with Swift",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Meta iOS Developer Certificate",
        url: "https://www.coursera.org/professional-certificates/meta-ios-developer",
        provider: "Meta / Coursera",
        platform: "Coursera",
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
            id: "ios-b-1",
            question: "What language is used for iOS development?",
            topic: "iOS Basics",
            explanation:
              "Swift is Apple's modern programming language for iOS, macOS, watchOS, and tvOS development.",
            options: [
              { text: "Java", isCorrect: false },
              { text: "Kotlin", isCorrect: false },
              { text: "Swift", isCorrect: true },
              { text: "Dart", isCorrect: false },
            ],
          },
          {
            id: "ios-b-2",
            question: "What is the IDE used for iOS development?",
            topic: "iOS Basics",
            explanation:
              "Xcode is Apple's official IDE for developing iOS, macOS, watchOS, and tvOS applications.",
            options: [
              { text: "Android Studio", isCorrect: false },
              { text: "VS Code", isCorrect: false },
              { text: "Xcode", isCorrect: true },
              { text: "IntelliJ IDEA", isCorrect: false },
            ],
          },
          {
            id: "ios-b-3",
            question: "What is UIKit in iOS?",
            topic: "iOS Frameworks",
            explanation:
              "UIKit is the foundational framework for building iOS interfaces — providing views, controllers, and event handling. SwiftUI is the newer declarative alternative.",
            options: [
              { text: "A styling library for Swift", isCorrect: false },
              {
                text: "The foundational framework for building iOS UIs",
                isCorrect: true,
              },
              { text: "A networking library", isCorrect: false },
              { text: "An Apple cloud storage API", isCorrect: false },
            ],
          },
          {
            id: "ios-b-4",
            question: "What is an optional in Swift?",
            topic: "Swift Basics",
            explanation:
              "An optional is a type that can hold either a value or nil. It forces developers to explicitly handle the absence of a value, preventing nil-related crashes.",
            options: [
              { text: "A variable with a default value", isCorrect: false },
              { text: "A type that can hold a value or nil", isCorrect: true },
              { text: "A compiler optimization flag", isCorrect: false },
              { text: "A deprecated Swift feature", isCorrect: false },
            ],
          },
          {
            id: "ios-b-5",
            question: "What is App Store Connect used for?",
            topic: "App Distribution",
            explanation:
              "App Store Connect is Apple's portal for managing, submitting, and monitoring iOS apps on the App Store. You also manage TestFlight beta testing here.",
            options: [
              { text: "Writing Swift code online", isCorrect: false },
              {
                text: "Submitting and managing iOS apps on the App Store",
                isCorrect: true,
              },
              { text: "Running iOS simulator", isCorrect: false },
              { text: "Managing Swift packages", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "ios-i-1",
            question: "What is SwiftUI and how does it differ from UIKit?",
            topic: "UI Frameworks",
            explanation:
              "SwiftUI is declarative — you describe what the UI looks like based on state. UIKit is imperative — you explicitly update views. SwiftUI is newer, has less boilerplate, but UIKit has more control.",
            options: [
              { text: "SwiftUI is only for macOS", isCorrect: false },
              {
                text: "SwiftUI is declarative; UIKit is imperative with explicit view updates",
                isCorrect: true,
              },
              { text: "They are the same framework", isCorrect: false },
              { text: "UIKit is newer than SwiftUI", isCorrect: false },
            ],
          },
          {
            id: "ios-i-2",
            question: "What is Auto Layout in iOS?",
            topic: "UI Layout",
            explanation:
              "Auto Layout is a constraint-based layout system that describes relationships between UI elements. Constraints adapt the layout to different screen sizes and orientations.",
            options: [
              { text: "An animation library for iOS", isCorrect: false },
              {
                text: "A constraint-based layout system for adaptive UIs",
                isCorrect: true,
              },
              { text: "A way to auto-scale images", isCorrect: false },
              {
                text: "An Xcode feature for auto-completing code",
                isCorrect: false,
              },
            ],
          },
          {
            id: "ios-i-3",
            question: "What is Core Data used for?",
            topic: "Data Persistence",
            explanation:
              "Core Data is Apple's object graph and persistence framework. It manages model layer objects, including SQLite persistence, lazy loading, and undo/redo.",
            options: [
              { text: "Making network requests", isCorrect: false },
              {
                text: "An object graph and data persistence framework for Apple platforms",
                isCorrect: true,
              },
              { text: "A Swift testing library", isCorrect: false },
              { text: "A data visualization tool", isCorrect: false },
            ],
          },
          {
            id: "ios-i-4",
            question: "What is the delegate pattern in iOS?",
            topic: "Design Patterns",
            explanation:
              "The delegate pattern allows one object to act on behalf of another. Common in UIKit: UITableViewDelegate, UITextFieldDelegate etc. The object needing work defines a protocol; the delegate implements it.",
            options: [
              { text: "A way to inherit functionality", isCorrect: false },
              {
                text: "One object acting on behalf of another via protocol implementation",
                isCorrect: true,
              },
              { text: "A notification system", isCorrect: false },
              { text: "A dependency injection technique", isCorrect: false },
            ],
          },
          {
            id: "ios-i-5",
            question: "What is ARC (Automatic Reference Counting)?",
            topic: "Memory Management",
            explanation:
              "ARC automatically manages memory by tracking the number of references to an object. When the reference count drops to zero, the object is deallocated. Developers must handle retain cycles.",
            options: [
              { text: "A build optimization tool", isCorrect: false },
              {
                text: "Automatic memory management tracking object reference counts",
                isCorrect: true,
              },
              { text: "An archive format for iOS apps", isCorrect: false },
              { text: "A runtime code compilation tool", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "advanced",
        passingScore: 70,
        questions: [
          {
            id: "ios-a-1",
            question: "What is a retain cycle and how do you prevent it?",
            topic: "Memory Management",
            explanation:
              "A retain cycle occurs when two objects hold strong references to each other, preventing ARC from deallocating either. Fix: use [weak self] or [unowned self] in closures.",
            options: [
              { text: "A performance optimization loop", isCorrect: false },
              {
                text: "Mutual strong references preventing deallocation; fixed with weak/unowned",
                isCorrect: true,
              },
              { text: "A notification delivery mechanism", isCorrect: false },
              { text: "A CoreData relationship type", isCorrect: false },
            ],
          },
          {
            id: "ios-a-2",
            question: "How would you implement background fetch in iOS?",
            topic: "Background Processing",
            explanation:
              "Use BGTaskScheduler (iOS 13+) with BGAppRefreshTask. Register the task identifier in Info.plist, schedule it, and handle the expiration handler. The system decides when to run it.",
            options: [
              { text: "Use a Timer on the main thread", isCorrect: false },
              {
                text: "BGTaskScheduler with BGAppRefreshTask registered in Info.plist",
                isCorrect: true,
              },
              {
                text: "Enable background mode in Xcode only",
                isCorrect: false,
              },
              {
                text: "Create an always-on background service",
                isCorrect: false,
              },
            ],
          },
          {
            id: "ios-a-3",
            question: "What is Combine framework used for?",
            topic: "Reactive Programming",
            explanation:
              "Combine is Apple's reactive programming framework for handling asynchronous events over time. Publishers emit values, operators transform them, subscribers consume them — similar to RxSwift.",
            options: [
              { text: "Merging multiple Swift files", isCorrect: false },
              {
                text: "Reactive programming for asynchronous event streams",
                isCorrect: true,
              },
              { text: "Combining UIKit and SwiftUI", isCorrect: false },
              { text: "A build configuration manager", isCorrect: false },
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
            id: "ios-ip-b-1",
            question: "What is the iOS app lifecycle?",
            talkingPoints: [
              "Not Running → Inactive → Active → Background → Suspended",
              "AppDelegate/SceneDelegate methods: didFinishLaunching, sceneWillBecomeActive etc.",
              "foregroundActive: UI interaction; background: limited processing time",
              "State restoration: save state before suspension, restore on relaunch",
            ],
            keywords: [
              "AppDelegate",
              "SceneDelegate",
              "UIApplicationState",
              "lifecycle methods",
              "background execution",
            ],
          },
          {
            id: "ios-ip-b-2",
            question: "What is the MVC pattern in iOS development?",
            talkingPoints: [
              "Model: data and business logic",
              "View: UI elements from Interface Builder or SwiftUI",
              "Controller: mediates between Model and View (UIViewController)",
              "Criticism: UIViewController becomes 'Massive View Controller'",
            ],
            keywords: [
              "UIViewController",
              "Model",
              "View",
              "separation of concerns",
              "MVVM alternative",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "ios-ip-i-1",
            question: "Explain how URLSession works for networking in iOS.",
            talkingPoints: [
              "URLSession creates tasks (data, download, upload) for HTTP requests",
              "Completion handlers or async/await for handling responses",
              "URLSessionConfiguration: default, ephemeral, background",
              "Always parse responses off the main thread, dispatch UI updates to main queue",
            ],
            keywords: [
              "URLSession",
              "URLRequest",
              "completion handler",
              "async/await",
              "DispatchQueue.main",
            ],
          },
          {
            id: "ios-ip-i-2",
            question: "How do you manage app state in SwiftUI?",
            talkingPoints: [
              "@State for local view state",
              "@StateObject / @ObservedObject for reference types (ObservableObject)",
              "@EnvironmentObject for shared state across the app",
              "@Binding to pass mutable state to child views",
            ],
            keywords: [
              "@State",
              "@ObservableObject",
              "@EnvironmentObject",
              "@Binding",
              "single source of truth",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "ios-ip-a-1",
            question: "How would you architect a large iOS application?",
            talkingPoints: [
              "Clean/VIPER architecture for separation of concerns",
              "Coordinator pattern for navigation decoupled from ViewControllers",
              "Repository pattern for data layer abstraction",
              "Modular architecture: feature modules in separate Swift packages",
              "Dependency injection for testability",
            ],
            keywords: [
              "VIPER",
              "Coordinator",
              "Repository",
              "Swift Package Manager",
              "DI",
            ],
          },
        ],
      },
    ],
  },

  "react-native-developer": {
    freeCourses: [
      {
        name: "React Native – freeCodeCamp Full Course",
        url: "https://www.youtube.com/watch?v=0-S5a0eXPoc",
        provider: "freeCodeCamp",
        platform: "YouTube",
        language: "English",
        level: "Beginner",
      },
      {
        name: "React Native in Hindi",
        url: "https://www.youtube.com/results?search_query=react+native+course+hindi",
        provider: "Code With Harry",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "React Native Telugu Tutorial",
        url: "https://www.youtube.com/results?search_query=react+native+tutorial+telugu",
        provider: "Telugu Tech World",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "Meta React Native Certificate",
        url: "https://www.coursera.org/learn/react-native-course",
        provider: "Meta / Coursera",
        platform: "Coursera",
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
            id: "rn-b-1",
            question: "What is React Native?",
            topic: "Basics",
            explanation:
              "React Native is a framework for building native mobile apps using JavaScript and React. It compiles to native components, not WebView-based hybrid apps.",
            options: [
              {
                text: "A React framework for server-side rendering",
                isCorrect: false,
              },
              {
                text: "A framework for building native mobile apps with JavaScript",
                isCorrect: true,
              },
              { text: "A CSS library for React", isCorrect: false },
              { text: "A Node.js mobile runtime", isCorrect: false },
            ],
          },
          {
            id: "rn-b-2",
            question: "What is the equivalent of <div> in React Native?",
            topic: "Core Components",
            explanation:
              "<View> is the fundamental layout container in React Native, equivalent to <div> in web. It supports flexbox layout and styling.",
            options: [
              { text: "<div>", isCorrect: false },
              { text: "<View>", isCorrect: true },
              { text: "<Container>", isCorrect: false },
              { text: "<Box>", isCorrect: false },
            ],
          },
          {
            id: "rn-b-3",
            question:
              "Which tool is used to run React Native apps without a native IDE?",
            topic: "Development Tools",
            explanation:
              "Expo is a managed workflow that lets you run React Native apps without setting up Android Studio or Xcode for many use cases.",
            options: [
              { text: "Create React App", isCorrect: false },
              { text: "Expo", isCorrect: true },
              { text: "Webpack Dev Server", isCorrect: false },
              { text: "Vite", isCorrect: false },
            ],
          },
          {
            id: "rn-b-4",
            question: "How do you handle navigation in React Native?",
            topic: "Navigation",
            explanation:
              "React Navigation is the standard library for routing and navigation in React Native apps.",
            options: [
              { text: "React Router", isCorrect: false },
              { text: "React Navigation", isCorrect: true },
              { text: "Vue Router", isCorrect: false },
              { text: "Angular Router", isCorrect: false },
            ],
          },
          {
            id: "rn-b-5",
            question:
              "What component is used to display a list in React Native?",
            topic: "Core Components",
            explanation:
              "FlatList is the performant list component in React Native, rendering only visible items (windowing). ScrollView renders all items at once.",
            options: [
              { text: "ListView", isCorrect: false },
              { text: "FlatList", isCorrect: true },
              { text: "RecyclerView", isCorrect: false },
              { text: "UITableView", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "rn-i-1",
            question: "What is the difference between FlatList and ScrollView?",
            topic: "Performance",
            explanation:
              "FlatList virtualizes the list — only renders visible items. ScrollView renders all children at once. FlatList is required for long lists; ScrollView for short, fixed-height content.",
            options: [
              { text: "ScrollView is faster than FlatList", isCorrect: false },
              {
                text: "FlatList virtualizes rendering; ScrollView renders all items at once",
                isCorrect: true,
              },
              { text: "They are interchangeable", isCorrect: false },
              { text: "FlatList is only for images", isCorrect: false },
            ],
          },
          {
            id: "rn-i-2",
            question: "How do you persist data locally in React Native?",
            topic: "Data Storage",
            explanation:
              "AsyncStorage is the standard key-value storage for small data. For structured data, use SQLite via libraries or Realm. MMKV is a fast alternative to AsyncStorage.",
            options: [
              { text: "localStorage (web)", isCorrect: false },
              {
                text: "AsyncStorage or SQLite/MMKV for structured data",
                isCorrect: true,
              },
              { text: "SharedPreferences directly", isCorrect: false },
              { text: "Core Data directly", isCorrect: false },
            ],
          },
          {
            id: "rn-i-3",
            question: "What is the Metro bundler in React Native?",
            topic: "Build Tools",
            explanation:
              "Metro is the JavaScript bundler that ships with React Native. It compiles and bundles your JS code, handles module resolution, and supports hot reloading.",
            options: [
              { text: "A React Native UI component library", isCorrect: false },
              {
                text: "The JavaScript bundler for React Native",
                isCorrect: true,
              },
              { text: "A deployment platform for RN apps", isCorrect: false },
              { text: "A state management library", isCorrect: false },
            ],
          },
          {
            id: "rn-i-4",
            question: "How do you call native platform code from React Native?",
            topic: "Native Modules",
            explanation:
              "Native Modules allow React Native to call native Swift/Kotlin code. You write native code and expose it to JS via a bridge module.",
            options: [
              { text: "Using window.native API", isCorrect: false },
              {
                text: "Native Modules bridge — write native code exposed to JavaScript",
                isCorrect: true,
              },
              {
                text: "WebSocket connection to native layer",
                isCorrect: false,
              },
              {
                text: "RESTful API calls to native services",
                isCorrect: false,
              },
            ],
          },
          {
            id: "rn-i-5",
            question: "What is the purpose of useEffect in React Native?",
            topic: "Hooks",
            explanation:
              "useEffect handles side effects like API calls, subscriptions, or timers after rendering. It works identically to web React — runs after render, cleans up on unmount.",
            options: [
              { text: "Manages native animations", isCorrect: false },
              {
                text: "Runs side effects after rendering — same as web React",
                isCorrect: true,
              },
              { text: "Handles touch events", isCorrect: false },
              { text: "Fetches device permissions", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "advanced",
        passingScore: 70,
        questions: [
          {
            id: "rn-a-1",
            question: "What is the New Architecture in React Native?",
            topic: "Architecture",
            explanation:
              "React Native's New Architecture replaces the Bridge with JSI (JavaScript Interface), allowing direct synchronous calls between JS and native. It also introduces Fabric renderer and TurboModules.",
            options: [
              { text: "A new UI component library", isCorrect: false },
              {
                text: "JSI replacing the Bridge for synchronous JS-native communication",
                isCorrect: true,
              },
              { text: "A new state management approach", isCorrect: false },
              { text: "A CSS-in-JS styling system", isCorrect: false },
            ],
          },
          {
            id: "rn-a-2",
            question: "How do you optimize React Native app performance?",
            topic: "Performance",
            explanation:
              "Key techniques: FlatList virtualization, avoid anonymous inline functions in renders, use Hermes JS engine, InteractionManager for after-animation tasks, Flipper for profiling.",
            options: [
              { text: "Reduce the number of components", isCorrect: false },
              {
                text: "FlatList, Hermes engine, memoization, InteractionManager, profiling with Flipper",
                isCorrect: true,
              },
              { text: "Disable JS debugging", isCorrect: false },
              { text: "Use React Native Web instead", isCorrect: false },
            ],
          },
          {
            id: "rn-a-3",
            question: "What is Code Push and how does it work?",
            topic: "Deployment",
            explanation:
              "CodePush (App Center) allows updating JavaScript bundles over-the-air without App Store review. Only JS/asset changes are pushed; native code changes still require store updates.",
            options: [
              { text: "A source code version control tool", isCorrect: false },
              {
                text: "OTA updates pushing JS bundle changes without App Store resubmission",
                isCorrect: true,
              },
              { text: "A CI/CD tool for native builds", isCorrect: false },
              { text: "A code quality analysis tool", isCorrect: false },
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
            id: "rn-ip-b-1",
            question:
              "What are the pros and cons of React Native over native development?",
            talkingPoints: [
              "Pro: Single codebase for iOS and Android, faster iteration",
              "Pro: Reuse web React skills, large JavaScript ecosystem",
              "Con: Performance gap for compute-heavy or complex animations",
              "Con: Debugging native module issues can be tricky",
            ],
            keywords: [
              "cross-platform",
              "code reuse",
              "performance",
              "bridge",
              "native modules",
            ],
          },
          {
            id: "rn-ip-b-2",
            question: "How does styling work in React Native?",
            talkingPoints: [
              "No CSS — uses StyleSheet.create() with JavaScript objects",
              "Properties are camelCase: backgroundColor, fontSize",
              "Layout uses Flexbox by default (column direction)",
              "No CSS cascade — each component has isolated styles",
            ],
            keywords: [
              "StyleSheet",
              "flexbox",
              "camelCase",
              "inline styles",
              "Platform.select",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "rn-ip-i-1",
            question: "How do you handle deep linking in React Native?",
            talkingPoints: [
              "Configure URL scheme in iOS (Info.plist) and Android (AndroidManifest)",
              "React Navigation handles deep link parsing automatically",
              "Universal links (iOS) / App Links (Android) for https:// deep links",
              "Handle background/quit state navigation to the right screen",
            ],
            keywords: [
              "URL scheme",
              "universal links",
              "React Navigation",
              "Linking API",
              "app links",
            ],
          },
          {
            id: "rn-ip-i-2",
            question: "Describe your approach to testing React Native apps.",
            talkingPoints: [
              "Unit tests: Jest with @testing-library/react-native",
              "Integration tests: React Native Testing Library",
              "E2E tests: Detox for device-level automated testing",
              "Mock native modules in unit tests",
            ],
            keywords: ["Jest", "Detox", "RNTL", "mocking", "E2E"],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "rn-ip-a-1",
            question: "How would you architect a large React Native app?",
            talkingPoints: [
              "Feature-based folder structure, not layer-based",
              "Redux Toolkit or Zustand for global state; React Query for server state",
              "API layer abstracted behind service classes",
              "Custom native modules for platform-specific features",
              "Modularize for build performance with Yarn workspaces or NX",
            ],
            keywords: [
              "feature folders",
              "Redux Toolkit",
              "React Query",
              "native modules",
              "monorepo",
            ],
          },
        ],
      },
    ],
  },

  "flutter-developer": {
    freeCourses: [
      {
        name: "Flutter – Official Learning",
        url: "https://flutter.dev/learn",
        provider: "Google Flutter",
        platform: "Google Flutter",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Flutter Course in Hindi",
        url: "https://www.youtube.com/results?search_query=flutter+course+hindi",
        provider: "Code With Harry",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "Flutter Telugu Tutorial",
        url: "https://www.youtube.com/results?search_query=flutter+tutorial+telugu",
        provider: "Telugu Tech Tuts",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "The Complete Flutter Development Bootcamp – Udemy Free Preview",
        url: "https://www.youtube.com/@flutterdev",
        provider: "Flutter Official",
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
            id: "fl-b-1",
            question: "What language is Flutter built with?",
            topic: "Flutter Basics",
            explanation:
              "Flutter uses Dart as its programming language. Dart was created by Google and compiles to native code.",
            options: [
              { text: "JavaScript", isCorrect: false },
              { text: "Kotlin", isCorrect: false },
              { text: "Dart", isCorrect: true },
              { text: "Swift", isCorrect: false },
            ],
          },
          {
            id: "fl-b-2",
            question: "What is a Widget in Flutter?",
            topic: "Flutter Basics",
            explanation:
              "In Flutter, everything is a Widget — from structural elements (Row, Column) to styling (Padding, Center) to complete screens. Widgets describe the UI based on current state.",
            options: [
              { text: "A third-party library", isCorrect: false },
              {
                text: "Everything is a Widget — the building block of Flutter UIs",
                isCorrect: true,
              },
              { text: "A native iOS/Android component", isCorrect: false },
              { text: "A database model", isCorrect: false },
            ],
          },
          {
            id: "fl-b-3",
            question:
              "What is the difference between StatelessWidget and StatefulWidget?",
            topic: "Widgets",
            explanation:
              "StatelessWidget is immutable — it doesn't change after creation. StatefulWidget can change over time via a State object that calls setState() to trigger rebuild.",
            options: [
              {
                text: "StatefulWidget is for iOS, StatelessWidget for Android",
                isCorrect: false,
              },
              {
                text: "StatelessWidget is immutable; StatefulWidget can change state",
                isCorrect: true,
              },
              { text: "There is no difference", isCorrect: false },
              {
                text: "StatelessWidget is faster in all cases",
                isCorrect: false,
              },
            ],
          },
          {
            id: "fl-b-4",
            question: "What command starts a Flutter app?",
            topic: "CLI",
            explanation:
              "flutter run launches the Flutter app on a connected device or emulator. flutter build creates a release build.",
            options: [
              { text: "flutter start", isCorrect: false },
              { text: "flutter run", isCorrect: true },
              { text: "dart run app", isCorrect: false },
              { text: "flutter launch", isCorrect: false },
            ],
          },
          {
            id: "fl-b-5",
            question: "What is pub.dev in Flutter?",
            topic: "Package Management",
            explanation:
              "pub.dev is the official Dart and Flutter package repository — equivalent to npm for JavaScript. Packages are added in pubspec.yaml.",
            options: [
              { text: "A Flutter performance analyzer", isCorrect: false },
              {
                text: "The official package registry for Dart and Flutter",
                isCorrect: true,
              },
              { text: "A Flutter UI design tool", isCorrect: false },
              { text: "A cloud build service", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "fl-i-1",
            question: "What is BLoC pattern in Flutter?",
            topic: "State Management",
            explanation:
              "BLoC (Business Logic Component) separates business logic from UI using Streams. Events come in, States go out. The flutter_bloc package simplifies implementation.",
            options: [
              { text: "A layout widget for blocks", isCorrect: false },
              {
                text: "A state management pattern using Streams: Events in, States out",
                isCorrect: true,
              },
              { text: "A Bluetooth connectivity API", isCorrect: false },
              { text: "A database management pattern", isCorrect: false },
            ],
          },
          {
            id: "fl-i-2",
            question: "What is Riverpod in Flutter?",
            topic: "State Management",
            explanation:
              "Riverpod is a state management library that improves on Provider with better compile-time safety, no context requirement for reading state, and testability.",
            options: [
              { text: "A River animation library", isCorrect: false },
              {
                text: "A state management library improving on Provider with compile-time safety",
                isCorrect: true,
              },
              { text: "A database ORM for Flutter", isCorrect: false },
              { text: "A navigation package", isCorrect: false },
            ],
          },
          {
            id: "fl-i-3",
            question: "How does Flutter achieve native performance?",
            topic: "Architecture",
            explanation:
              "Flutter compiles Dart to native ARM code and renders using its own Skia/Impeller graphics engine directly to the canvas, bypassing native platform widgets entirely.",
            options: [
              { text: "It uses a WebView for rendering", isCorrect: false },
              {
                text: "Dart compiles to native ARM code; Flutter renders via its own graphics engine",
                isCorrect: true,
              },
              {
                text: "It uses JavaScriptCore for execution",
                isCorrect: false,
              },
              { text: "It wraps native platform widgets", isCorrect: false },
            ],
          },
          {
            id: "fl-i-4",
            question: "What is the pubspec.yaml file in Flutter?",
            topic: "Project Structure",
            explanation:
              "pubspec.yaml is the Flutter project's manifest file — it declares the app name, version, dependencies, assets (images, fonts), and platform configurations.",
            options: [
              { text: "A build script for native code", isCorrect: false },
              {
                text: "Project manifest declaring dependencies, assets and metadata",
                isCorrect: true,
              },
              { text: "A Dart syntax configuration file", isCorrect: false },
              { text: "A CI/CD pipeline configuration", isCorrect: false },
            ],
          },
          {
            id: "fl-i-5",
            question: "What is Flutter's Hot Reload?",
            topic: "Development Workflow",
            explanation:
              "Hot Reload injects updated source code into the running Dart VM. UI changes appear within milliseconds without losing app state, drastically speeding up UI iteration.",
            options: [
              {
                text: "Restarting the entire app from scratch",
                isCorrect: false,
              },
              {
                text: "Injecting code changes into running VM instantly without losing state",
                isCorrect: true,
              },
              { text: "A performance profiling tool", isCorrect: false },
              { text: "Rebuilding native assets", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "advanced",
        passingScore: 70,
        questions: [
          {
            id: "fl-a-1",
            question:
              "What is the Flutter Widget tree, Element tree, and Render tree?",
            topic: "Internals",
            explanation:
              "Widget tree: immutable description of UI. Element tree: mutable instances tracking lifecycle. Render tree: handles layout/painting. Widgets are lightweight configs; Elements are the persistent objects.",
            options: [
              {
                text: "Three different names for the same thing",
                isCorrect: false,
              },
              {
                text: "Widget=config, Element=persistent instance, Render=layout/painting objects",
                isCorrect: true,
              },
              {
                text: "Three different state management layers",
                isCorrect: false,
              },
              {
                text: "Widget for UI, Element for state, Render for animation",
                isCorrect: false,
              },
            ],
          },
          {
            id: "fl-a-2",
            question: "How do you optimize Flutter app performance?",
            topic: "Performance",
            explanation:
              "Key optimizations: use const constructors, avoid rebuilding subtrees (const widgets), RepaintBoundary for isolated repaints, ListView.builder for long lists, profile with Flutter DevTools.",
            options: [
              { text: "Reduce the number of widgets used", isCorrect: false },
              {
                text: "const constructors, ListView.builder, RepaintBoundary, profiling with DevTools",
                isCorrect: true,
              },
              { text: "Disable animations globally", isCorrect: false },
              {
                text: "Use Platform.isAndroid checks everywhere",
                isCorrect: false,
              },
            ],
          },
          {
            id: "fl-a-3",
            question: "What are Flutter Platform Channels?",
            topic: "Platform Integration",
            explanation:
              "Platform Channels enable communication between Dart and native code (Swift/Kotlin). MethodChannel for method calls, EventChannel for streams, BasicMessageChannel for custom messages.",
            options: [
              {
                text: "A way to publish apps to multiple stores",
                isCorrect: false,
              },
              {
                text: "Communication bridge between Dart and native Swift/Kotlin code",
                isCorrect: true,
              },
              {
                text: "A multi-environment build configuration",
                isCorrect: false,
              },
              { text: "A networking API", isCorrect: false },
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
            id: "fl-ip-b-1",
            question:
              "What are the advantages of Flutter for mobile development?",
            talkingPoints: [
              "Single codebase for iOS, Android, Web, Desktop",
              "Own rendering engine — consistent look across platforms",
              "Hot reload for fast development",
              "Growing ecosystem and strong Google backing",
              "Performance comparable to native",
            ],
            keywords: [
              "cross-platform",
              "Dart",
              "hot reload",
              "Skia",
              "widget tree",
            ],
          },
          {
            id: "fl-ip-b-2",
            question: "How does navigation work in Flutter?",
            talkingPoints: [
              "Navigator widget manages a stack of Route objects",
              "Navigator.push() to go to new screen, pop() to go back",
              "Named routes in MaterialApp for cleaner navigation",
              "GoRouter (preferred for complex navigation, deep links)",
            ],
            keywords: [
              "Navigator",
              "Route",
              "named routes",
              "GoRouter",
              "deep linking",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "fl-ip-i-1",
            question:
              "When would you choose BLoC vs Riverpod vs Provider for state management?",
            talkingPoints: [
              "Provider: simple, lightweight for smaller apps",
              "Riverpod: type-safe, no context required, good for medium-large apps",
              "BLoC: enterprise apps, strict separation, excellent testability",
              "GetX: all-in-one but opinionated — common in Indian startup projects",
            ],
            keywords: [
              "BLoC",
              "Riverpod",
              "Provider",
              "GetX",
              "reactive programming",
            ],
          },
          {
            id: "fl-ip-i-2",
            question: "How do you integrate REST APIs in Flutter?",
            talkingPoints: [
              "Use http package or Dio (feature-rich with interceptors)",
              "Parse JSON responses using json_serializable or Freezed for models",
              "Error handling: try/catch with typed exceptions",
              "State management hooks for loading/error/success states",
            ],
            keywords: [
              "Dio",
              "http package",
              "json_serializable",
              "Freezed",
              "FutureBuilder",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "fl-ip-a-1",
            question: "How would you architect a large Flutter application?",
            talkingPoints: [
              "Clean architecture: Presentation → Domain → Data",
              "Feature-first folder structure",
              "Dependency injection with get_it or Riverpod",
              "Abstract data sources behind repositories",
              "Automated testing: unit, widget, integration",
            ],
            keywords: [
              "Clean Architecture",
              "get_it",
              "Riverpod",
              "repository pattern",
              "feature modules",
            ],
          },
        ],
      },
    ],
  },

  "java-developer": {
    freeCourses: [
      {
        name: "Java Programming MOOC – University of Helsinki",
        url: "https://java-programming.mooc.fi/",
        provider: "University of Helsinki",
        platform: "MOOC",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Java in Hindi – Complete Course",
        url: "https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q",
        provider: "Code With Harry",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "Java Telugu Tutorial",
        url: "https://www.youtube.com/results?search_query=java+programming+tutorial+telugu",
        provider: "Telugu Tech Tuts",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "Spring Boot Tutorial – freeCodeCamp",
        url: "https://www.youtube.com/watch?v=9SGDpanrc8U",
        provider: "freeCodeCamp",
        platform: "YouTube",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "NPTEL Programming in Java",
        url: "https://nptel.ac.in/courses/106/105/106105191/",
        provider: "IIT Kharagpur / NPTEL",
        platform: "NPTEL",
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
            id: "java-b-1",
            question: "What is the main principle of OOP in Java?",
            topic: "OOP",
            explanation:
              "The four pillars of OOP are Encapsulation, Inheritance, Polymorphism, and Abstraction. Java implements all four.",
            options: [
              { text: "Functions and loops", isCorrect: false },
              {
                text: "Encapsulation, Inheritance, Polymorphism, Abstraction",
                isCorrect: true,
              },
              { text: "Classes and interfaces only", isCorrect: false },
              { text: "Garbage collection and threading", isCorrect: false },
            ],
          },
          {
            id: "java-b-2",
            question:
              "What is the difference between == and .equals() in Java?",
            topic: "Java Basics",
            explanation:
              "== compares object references (memory addresses). .equals() compares object content. For Strings, always use .equals() for content comparison.",
            options: [
              { text: "No difference", isCorrect: false },
              {
                text: "== compares references; .equals() compares content",
                isCorrect: true,
              },
              {
                text: ".equals() is for primitives; == for objects",
                isCorrect: false,
              },
              { text: "== is faster for all comparisons", isCorrect: false },
            ],
          },
          {
            id: "java-b-3",
            question: "What is a Java interface?",
            topic: "OOP",
            explanation:
              "An interface defines a contract — abstract methods that implementing classes must provide. Interfaces enable multiple inheritance of type in Java.",
            options: [
              { text: "A class with no methods", isCorrect: false },
              {
                text: "A contract defining methods that implementing classes must provide",
                isCorrect: true,
              },
              {
                text: "A main class that runs the application",
                isCorrect: false,
              },
              { text: "A built-in Java utility class", isCorrect: false },
            ],
          },
          {
            id: "java-b-4",
            question: "What does the 'static' keyword mean in Java?",
            topic: "Java Basics",
            explanation:
              "Static members belong to the class, not instances. Static methods can be called without creating an object. Static variables are shared across all instances.",
            options: [
              { text: "The variable never changes", isCorrect: false },
              {
                text: "Belongs to the class rather than any specific instance",
                isCorrect: true,
              },
              { text: "The method runs in a new thread", isCorrect: false },
              { text: "Prevents garbage collection", isCorrect: false },
            ],
          },
          {
            id: "java-b-5",
            question: "What is the purpose of the 'final' keyword in Java?",
            topic: "Java Basics",
            explanation:
              "final variable: cannot be reassigned. final method: cannot be overridden. final class: cannot be subclassed. It enforces immutability and prevents extension.",
            options: [
              { text: "Marks the last line of a method", isCorrect: false },
              {
                text: "Prevents reassignment, overriding, or subclassing depending on context",
                isCorrect: true,
              },
              { text: "Makes the variable thread-safe", isCorrect: false },
              { text: "Allows garbage collection", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "java-i-1",
            question:
              "What is the difference between ArrayList and LinkedList in Java?",
            topic: "Collections",
            explanation:
              "ArrayList uses a dynamic array — O(1) random access, O(n) insert/delete in middle. LinkedList uses doubly-linked nodes — O(n) access, O(1) insert/delete at known position.",
            options: [
              {
                text: "ArrayList is immutable; LinkedList is mutable",
                isCorrect: false,
              },
              {
                text: "ArrayList: O(1) access, O(n) insert/delete; LinkedList: O(n) access, O(1) insert at node",
                isCorrect: true,
              },
              { text: "They are identical in performance", isCorrect: false },
              { text: "LinkedList only works for strings", isCorrect: false },
            ],
          },
          {
            id: "java-i-2",
            question: "What is a checked vs unchecked exception in Java?",
            topic: "Exception Handling",
            explanation:
              "Checked exceptions (IOException, SQLException) must be declared or caught — compiler enforces it. Unchecked exceptions (NullPointerException, RuntimeException) are not required to be caught.",
            options: [
              {
                text: "Checked exceptions happen more often",
                isCorrect: false,
              },
              {
                text: "Checked: must declare/catch (compiler enforced); Unchecked: runtime, no requirement",
                isCorrect: true,
              },
              {
                text: "Unchecked exceptions cause app crash; checked don't",
                isCorrect: false,
              },
              { text: "No difference — both must be caught", isCorrect: false },
            ],
          },
          {
            id: "java-i-3",
            question: "What is Spring Boot and why is it popular?",
            topic: "Spring Framework",
            explanation:
              "Spring Boot auto-configures Spring applications, eliminating boilerplate XML. It embeds a server (Tomcat) and provides production-ready features (metrics, health checks) out of the box.",
            options: [
              { text: "A Java IDE", isCorrect: false },
              {
                text: "Auto-configured Spring with embedded server and production-ready features",
                isCorrect: true,
              },
              { text: "A Java testing framework", isCorrect: false },
              { text: "A build tool replacing Maven", isCorrect: false },
            ],
          },
          {
            id: "java-i-4",
            question: "What is the Java Stream API?",
            topic: "Java 8+",
            explanation:
              "Stream API (Java 8+) enables functional-style operations on collections — filter, map, reduce, collect. Streams are lazy (evaluated only when terminal operation is called).",
            options: [
              { text: "An I/O stream for file reading", isCorrect: false },
              {
                text: "Functional-style operations (filter/map/reduce) on collections",
                isCorrect: true,
              },
              { text: "A multithreading utility", isCorrect: false },
              { text: "A database connection stream", isCorrect: false },
            ],
          },
          {
            id: "java-i-5",
            question: "What is Hibernate in Java?",
            topic: "ORM",
            explanation:
              "Hibernate is a JPA implementation — an ORM framework that maps Java objects to database tables, handles CRUD operations, and generates SQL automatically.",
            options: [
              { text: "A sleep management API", isCorrect: false },
              {
                text: "A JPA ORM framework mapping Java objects to database tables",
                isCorrect: true,
              },
              { text: "A Java concurrency library", isCorrect: false },
              { text: "A caching framework", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "advanced",
        passingScore: 70,
        questions: [
          {
            id: "java-a-1",
            question:
              "What is the Java Memory Model and why does it matter for concurrency?",
            topic: "Concurrency",
            explanation:
              "The JMM defines how threads interact through memory. Without proper synchronization, threads may see stale values. volatile, synchronized, and java.util.concurrent tools ensure visibility and atomicity.",
            options: [
              { text: "How much RAM a JVM process uses", isCorrect: false },
              {
                text: "Rules governing how threads see each other's memory changes",
                isCorrect: true,
              },
              { text: "A garbage collection algorithm", isCorrect: false },
              { text: "The JVM heap/stack layout", isCorrect: false },
            ],
          },
          {
            id: "java-a-2",
            question:
              "What is the difference between HashMap and ConcurrentHashMap?",
            topic: "Collections",
            explanation:
              "HashMap is not thread-safe. ConcurrentHashMap is thread-safe and uses segment locking (Java 7) or node locking (Java 8+) for better concurrency than synchronized HashMap.",
            options: [
              {
                text: "ConcurrentHashMap is slower in all cases",
                isCorrect: false,
              },
              {
                text: "ConcurrentHashMap is thread-safe; HashMap is not",
                isCorrect: true,
              },
              {
                text: "They are identical with different names",
                isCorrect: false,
              },
              { text: "HashMap is for primitive keys only", isCorrect: false },
            ],
          },
          {
            id: "java-a-3",
            question: "Explain SOLID principles in Java.",
            topic: "Design Principles",
            explanation:
              "S=Single Responsibility, O=Open/Closed, L=Liskov Substitution, I=Interface Segregation, D=Dependency Inversion. These principles guide maintainable, extensible object-oriented design.",
            options: [
              {
                text: "Security, Operations, Logging, Integration, Deployment",
                isCorrect: false,
              },
              {
                text: "Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion",
                isCorrect: true,
              },
              {
                text: "Scalability, Object, Loose coupling, Interfaces, Design",
                isCorrect: false,
              },
              {
                text: "A Spring Boot configuration standard",
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
            id: "java-ip-b-1",
            question: "Explain the four pillars of OOP with Java examples.",
            talkingPoints: [
              "Encapsulation: private fields + public getters/setters",
              "Inheritance: extends keyword, code reuse across class hierarchy",
              "Polymorphism: method overriding and overloading",
              "Abstraction: abstract classes and interfaces hiding implementation details",
            ],
            keywords: [
              "encapsulation",
              "inheritance",
              "polymorphism",
              "abstraction",
              "access modifiers",
            ],
          },
          {
            id: "java-ip-b-2",
            question:
              "What is the difference between abstract class and interface?",
            talkingPoints: [
              "Abstract class can have concrete methods, fields, constructors",
              "Interface (Java 8+) can have default/static methods but no state",
              "A class can implement multiple interfaces but extend only one class",
              "Use abstract class for shared state/behavior; interface for contracts",
            ],
            keywords: [
              "abstract class",
              "interface",
              "multiple inheritance",
              "default methods",
              "contract",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "java-ip-i-1",
            question: "How does garbage collection work in Java?",
            talkingPoints: [
              "JVM manages memory automatically — no manual malloc/free",
              "Generational GC: Young Generation (short-lived objects), Old Generation (long-lived)",
              "GC algorithms: G1GC (default Java 9+), ZGC, Shenandoah for low-latency",
              "Monitor GC with -verbose:gc flag and JVM flags",
            ],
            keywords: [
              "GC",
              "Young Generation",
              "Old Generation",
              "G1GC",
              "stop-the-world",
            ],
          },
          {
            id: "java-ip-i-2",
            question: "How do you write thread-safe code in Java?",
            talkingPoints: [
              "synchronized methods/blocks for mutual exclusion",
              "volatile for visibility without locking",
              "java.util.concurrent: ExecutorService, CountDownLatch, AtomicInteger",
              "Prefer immutability — immutable objects are inherently thread-safe",
            ],
            keywords: [
              "synchronized",
              "volatile",
              "ExecutorService",
              "atomic",
              "immutability",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "java-ip-a-1",
            question: "How would you design a Java microservices system?",
            talkingPoints: [
              "Spring Boot for each service, Spring Cloud for infrastructure concerns",
              "Service discovery: Eureka or Consul",
              "API Gateway: Spring Cloud Gateway or Netflix Zuul",
              "Inter-service communication: REST or gRPC; async via Kafka",
              "Distributed tracing: Zipkin/Jaeger for request tracing across services",
            ],
            keywords: [
              "Spring Cloud",
              "Eureka",
              "API Gateway",
              "Kafka",
              "distributed tracing",
            ],
          },
        ],
      },
    ],
  },

  "dotnet-developer": {
    freeCourses: [
      {
        name: "Microsoft .NET Learning Path",
        url: "https://learn.microsoft.com/en-us/training/dotnet/",
        provider: "Microsoft Learn",
        platform: "Microsoft Learn",
        language: "English",
        level: "Beginner",
      },
      {
        name: ".NET / C# in Hindi",
        url: "https://www.youtube.com/results?search_query=c+sharp+dotnet+course+hindi",
        provider: "Code With Harry",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "ASP.NET Core Tutorial – freeCodeCamp",
        url: "https://www.youtube.com/watch?v=AhAxLiGC7Pc",
        provider: "freeCodeCamp",
        platform: "YouTube",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "C# and .NET Telugu Tutorial",
        url: "https://www.youtube.com/results?search_query=c+sharp+tutorial+telugu",
        provider: "Telugu Tech World",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
    ],
    mockTests: [
      {
        level: "basic",
        passingScore: 60,
        questions: [
          {
            id: "dn-b-1",
            question: "What is C#?",
            topic: ".NET Basics",
            explanation:
              "C# is a statically typed, object-oriented language developed by Microsoft, running on the .NET runtime. It's used for web, desktop, and enterprise applications.",
            options: [
              { text: "A JavaScript framework", isCorrect: false },
              {
                text: "A statically typed OOP language by Microsoft running on .NET",
                isCorrect: true,
              },
              { text: "A database query language", isCorrect: false },
              { text: "A Linux-only language", isCorrect: false },
            ],
          },
          {
            id: "dn-b-2",
            question: "What is ASP.NET Core?",
            topic: ".NET Web",
            explanation:
              "ASP.NET Core is a cross-platform, high-performance framework for building web APIs and web applications with C# on the .NET runtime.",
            options: [
              { text: "A Windows-only desktop framework", isCorrect: false },
              {
                text: "A cross-platform web framework for building APIs and web apps in C#",
                isCorrect: true,
              },
              { text: "A database ORM tool", isCorrect: false },
              {
                text: "A frontend JavaScript framework by Microsoft",
                isCorrect: false,
              },
            ],
          },
          {
            id: "dn-b-3",
            question:
              "What is the difference between value types and reference types in C#?",
            topic: "C# Basics",
            explanation:
              "Value types (int, bool, struct) store data directly on the stack. Reference types (class, string, array) store a reference on the stack pointing to data on the heap.",
            options: [
              { text: "No practical difference", isCorrect: false },
              {
                text: "Value types store data on stack; reference types store references to heap data",
                isCorrect: true,
              },
              {
                text: "Value types are immutable; reference types are mutable",
                isCorrect: false,
              },
              {
                text: "Reference types only exist in .NET 5+",
                isCorrect: false,
              },
            ],
          },
          {
            id: "dn-b-4",
            question: "What is LINQ in C#?",
            topic: "C# Features",
            explanation:
              "LINQ (Language Integrated Query) allows querying collections, databases, and XML using C# syntax. It supports both query syntax and method syntax.",
            options: [
              { text: "A link management library", isCorrect: false },
              {
                text: "Language Integrated Query for querying collections and data",
                isCorrect: true,
              },
              { text: "A logging framework", isCorrect: false },
              { text: "A Microsoft Azure service", isCorrect: false },
            ],
          },
          {
            id: "dn-b-5",
            question: "What does 'async/await' do in C#?",
            topic: "Async Programming",
            explanation:
              "async/await enables asynchronous programming without blocking threads. await suspends the method until the awaited task completes, freeing the thread for other work.",
            options: [
              { text: "Creates a new C# thread", isCorrect: false },
              {
                text: "Enables non-blocking asynchronous programming",
                isCorrect: true,
              },
              {
                text: "Pauses code execution for a set time",
                isCorrect: false,
              },
              { text: "Synchronizes multiple threads", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "dn-i-1",
            question: "What is Entity Framework Core?",
            topic: "ORM",
            explanation:
              "EF Core is Microsoft's ORM for .NET. It maps C# classes to database tables and generates SQL queries, supporting LINQ-based data access.",
            options: [
              { text: "A UI component framework", isCorrect: false },
              {
                text: "An ORM mapping C# classes to database tables with LINQ support",
                isCorrect: true,
              },
              { text: "A microservices framework", isCorrect: false },
              { text: "An IoC container", isCorrect: false },
            ],
          },
          {
            id: "dn-i-2",
            question: "What is Dependency Injection in ASP.NET Core?",
            topic: "DI",
            explanation:
              "ASP.NET Core has a built-in DI container. Services are registered in Program.cs (AddScoped/AddTransient/AddSingleton) and injected via constructor injection.",
            options: [
              {
                text: "Injecting malicious code into an app",
                isCorrect: false,
              },
              {
                text: "Built-in IoC container registering services with different lifetimes",
                isCorrect: true,
              },
              { text: "Automatic database seeding", isCorrect: false },
              { text: "A debugging injection tool", isCorrect: false },
            ],
          },
          {
            id: "dn-i-3",
            question: "What is middleware in ASP.NET Core?",
            topic: "Pipeline",
            explanation:
              "Middleware components form a request processing pipeline. Each component can process the request, call next(), and process the response. Examples: Authentication, Routing, Exception handling.",
            options: [
              { text: "A type of C# interface", isCorrect: false },
              {
                text: "Components forming a request pipeline — each can process request/response",
                isCorrect: true,
              },
              { text: "A database transaction wrapper", isCorrect: false },
              { text: "A Windows service wrapper", isCorrect: false },
            ],
          },
          {
            id: "dn-i-4",
            question:
              "What is the difference between .AddScoped, .AddTransient, and .AddSingleton?",
            topic: "DI Lifetimes",
            explanation:
              "Singleton: one instance for entire app lifetime. Scoped: one per HTTP request. Transient: new instance every time requested. Choose based on thread safety and shared state needs.",
            options: [
              {
                text: "They are different words for the same behavior",
                isCorrect: false,
              },
              {
                text: "Singleton=app lifetime; Scoped=per request; Transient=per injection",
                isCorrect: true,
              },
              {
                text: "Scoped=app lifetime; Singleton=per request",
                isCorrect: false,
              },
              { text: "Transient is the default behavior", isCorrect: false },
            ],
          },
          {
            id: "dn-i-5",
            question: "What is Blazor?",
            topic: ".NET Web",
            explanation:
              "Blazor is a .NET framework for building interactive web UIs in C# instead of JavaScript. It runs either in WebAssembly (client-side) or as a server-side Razor Components solution.",
            options: [
              { text: "A C# build tool", isCorrect: false },
              {
                text: "A .NET framework for building web UIs with C# instead of JavaScript",
                isCorrect: true,
              },
              { text: "A Windows Forms upgrade", isCorrect: false },
              { text: "A mobile app framework", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "advanced",
        passingScore: 70,
        questions: [
          {
            id: "dn-a-1",
            question:
              "What is the Mediator pattern and how does MediatR implement it?",
            topic: "Design Patterns",
            explanation:
              "Mediator decouples senders and receivers. MediatR routes commands and queries to their handlers, reducing direct dependencies between components — central to CQRS implementations.",
            options: [
              { text: "A database connection pattern", isCorrect: false },
              {
                text: "Decouples components by routing requests through a central handler",
                isCorrect: true,
              },
              { text: "A UI state management pattern", isCorrect: false },
              { text: "A logging middleware", isCorrect: false },
            ],
          },
          {
            id: "dn-a-2",
            question: "What is CQRS and when would you use it in .NET?",
            topic: "Architecture",
            explanation:
              "CQRS separates read (Query) and write (Command) models. Useful when reads and writes have very different scaling or consistency requirements. MediatR + EF Core is a common .NET CQRS setup.",
            options: [
              { text: "A caching strategy", isCorrect: false },
              {
                text: "Separating read and write models for independent scaling",
                isCorrect: true,
              },
              { text: "A code review system", isCorrect: false },
              { text: "A .NET logging framework", isCorrect: false },
            ],
          },
          {
            id: "dn-a-3",
            question: "How do you secure an ASP.NET Core API?",
            topic: "Security",
            explanation:
              "JWT Bearer authentication, HTTPS enforcement, CORS policies, rate limiting, input validation, SQL injection prevention via parameterized queries/EF Core, and secret management with Azure Key Vault.",
            options: [
              { text: "Only use HTTPS", isCorrect: false },
              {
                text: "JWT auth, CORS, rate limiting, input validation, parameterized queries",
                isCorrect: true,
              },
              { text: "Block all non-Windows clients", isCorrect: false },
              { text: "Add a firewall and you're done", isCorrect: false },
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
            id: "dn-ip-b-1",
            question:
              "What is the difference between .NET Framework and .NET Core/.NET 5+?",
            talkingPoints: [
              ".NET Framework: Windows-only, mature, older enterprise codebases",
              ".NET Core (renamed .NET 5+): cross-platform, open source, faster",
              "Most new development targets .NET 6/7/8+",
              "Microsoft recommends migrating from Framework to .NET 6+ for new features",
            ],
            keywords: [
              ".NET Core",
              ".NET 6",
              "cross-platform",
              "open source",
              "migration",
            ],
          },
          {
            id: "dn-ip-b-2",
            question: "What is the difference between IEnumerable and IList?",
            talkingPoints: [
              "IEnumerable: read-only forward-only iteration, lazy evaluation with LINQ",
              "IList: IEnumerable + indexed access + Add/Remove",
              "IQueryable: IEnumerable for database queries (SQL is generated)",
              "Use the most restrictive interface your code needs",
            ],
            keywords: [
              "IEnumerable",
              "IList",
              "IQueryable",
              "LINQ",
              "lazy evaluation",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "dn-ip-i-1",
            question: "Explain async/await best practices in C#.",
            talkingPoints: [
              "ConfigureAwait(false) in library code to avoid deadlocks",
              "Don't block async code with .Result or .Wait() — causes deadlocks",
              "Use CancellationToken to support cancellation",
              "ValueTask for high-performance scenarios with frequent synchronous completion",
            ],
            keywords: [
              "ConfigureAwait",
              "deadlock",
              "CancellationToken",
              "ValueTask",
              "async all the way",
            ],
          },
          {
            id: "dn-ip-i-2",
            question: "How do you unit test ASP.NET Core APIs?",
            talkingPoints: [
              "xUnit or NUnit as test framework",
              "Mock dependencies with Moq",
              "WebApplicationFactory for integration tests with in-memory server",
              "Test handlers/services in isolation; use InMemory EF for data access tests",
            ],
            keywords: [
              "xUnit",
              "Moq",
              "WebApplicationFactory",
              "InMemory database",
              "integration tests",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "dn-ip-a-1",
            question:
              "How would you architect a high-performance .NET microservice?",
            talkingPoints: [
              "Minimal APIs for low-overhead HTTP handling",
              "Dapper for raw SQL performance-critical queries; EF Core for complex domain",
              "Response caching, distributed cache with Redis",
              "Health checks endpoint, OpenTelemetry for observability",
              "Docker + Kubernetes deployment, ConfigMaps for configuration",
            ],
            keywords: [
              "Minimal APIs",
              "Dapper",
              "Redis",
              "OpenTelemetry",
              "Kubernetes",
            ],
          },
        ],
      },
    ],
  },

  "php-developer": {
    freeCourses: [
      {
        name: "PHP for Beginners – freeCodeCamp",
        url: "https://www.youtube.com/watch?v=OK_JCtrrv-c",
        provider: "freeCodeCamp",
        platform: "YouTube",
        language: "English",
        level: "Beginner",
      },
      {
        name: "PHP and Laravel in Hindi",
        url: "https://www.youtube.com/results?search_query=php+laravel+course+hindi",
        provider: "Code With Harry",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "PHP Telugu Tutorial",
        url: "https://www.youtube.com/results?search_query=php+programming+tutorial+telugu",
        provider: "Telugu Tech Tuts",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "GUVI PHP Course",
        url: "https://www.guvi.in/courses/php-language",
        provider: "GUVI",
        platform: "GUVI",
        language: "English & Hindi",
        level: "Beginner",
      },
    ],
    mockTests: [
      {
        level: "basic",
        passingScore: 60,
        questions: [
          {
            id: "php-b-1",
            question: "How do you declare a variable in PHP?",
            topic: "PHP Basics",
            explanation:
              "Variables in PHP start with a dollar sign ($). Example: $name = 'John'; No type declaration needed (PHP is loosely typed).",
            options: [
              { text: "var name = 'John';", isCorrect: false },
              { text: "$name = 'John';", isCorrect: true },
              { text: "let $name = 'John';", isCorrect: false },
              { text: "name := 'John';", isCorrect: false },
            ],
          },
          {
            id: "php-b-2",
            question: "What is the difference between echo and print in PHP?",
            topic: "PHP Basics",
            explanation:
              "Both output text, but echo can output multiple values and is slightly faster. print returns a value (1) and can be used in expressions. In practice, echo is used almost universally.",
            options: [
              { text: "echo is for HTML; print is for text", isCorrect: false },
              {
                text: "echo outputs multiple values; print outputs one and returns 1",
                isCorrect: true,
              },
              {
                text: "print outputs HTML; echo outputs plain text",
                isCorrect: false,
              },
              { text: "They are identical", isCorrect: false },
            ],
          },
          {
            id: "php-b-3",
            question: "What is Composer in PHP?",
            topic: "PHP Tools",
            explanation:
              "Composer is PHP's dependency manager. It installs packages listed in composer.json from Packagist, creating an autoloader so you can use packages with require.",
            options: [
              { text: "A PHP code editor", isCorrect: false },
              {
                text: "PHP's dependency manager for installing packages",
                isCorrect: true,
              },
              { text: "A music composition API", isCorrect: false },
              { text: "A PHP to HTML compiler", isCorrect: false },
            ],
          },
          {
            id: "php-b-4",
            question: "What does MVC stand for in Laravel?",
            topic: "Laravel",
            explanation:
              "MVC = Model-View-Controller. Model handles data, View handles presentation, Controller handles the HTTP request logic. Laravel is a PHP MVC framework.",
            options: [
              { text: "Method, Variable, Class", isCorrect: false },
              { text: "Model, View, Controller", isCorrect: true },
              { text: "Module, Version, Configuration", isCorrect: false },
              { text: "Multiple View Creation", isCorrect: false },
            ],
          },
          {
            id: "php-b-5",
            question: "What is PDO in PHP?",
            topic: "Database",
            explanation:
              "PDO (PHP Data Objects) is a database abstraction layer providing a consistent interface to access multiple databases (MySQL, PostgreSQL, SQLite). It supports prepared statements to prevent SQL injection.",
            options: [
              { text: "A PHP deployment tool", isCorrect: false },
              {
                text: "Database abstraction layer with prepared statement support",
                isCorrect: true,
              },
              { text: "A PHP debugging utility", isCorrect: false },
              { text: "A PHP documentation generator", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "php-i-1",
            question: "What are Eloquent ORM relationships in Laravel?",
            topic: "Laravel ORM",
            explanation:
              "Eloquent supports hasOne, hasMany, belongsTo, belongsToMany, hasManyThrough. These define how models relate and allow eager loading with `with()` to avoid N+1 queries.",
            options: [
              { text: "CSS selector patterns", isCorrect: false },
              {
                text: "ORM relationship types: hasOne, hasMany, belongsTo, belongsToMany",
                isCorrect: true,
              },
              { text: "Database index types", isCorrect: false },
              { text: "HTTP verb types", isCorrect: false },
            ],
          },
          {
            id: "php-i-2",
            question: "What is a Laravel Middleware?",
            topic: "Laravel",
            explanation:
              "Laravel middleware filters HTTP requests before they reach routes. Uses: authentication (auth middleware), logging, CORS, rate limiting, input trimming.",
            options: [
              { text: "A database query optimizer", isCorrect: false },
              {
                text: "A filter that processes HTTP requests before reaching routes",
                isCorrect: true,
              },
              { text: "A Blade template helper", isCorrect: false },
              { text: "A task scheduler class", isCorrect: false },
            ],
          },
          {
            id: "php-i-3",
            question: "What is the purpose of PHP sessions?",
            topic: "PHP Sessions",
            explanation:
              "PHP sessions store user data on the server between requests. session_start() creates or resumes a session; data is stored in $_SESSION superglobal. Sessions are identified by a session ID cookie.",
            options: [
              { text: "Encrypting database connections", isCorrect: false },
              {
                text: "Storing user data server-side between HTTP requests",
                isCorrect: true,
              },
              { text: "Caching rendered HTML", isCorrect: false },
              { text: "Managing database transactions", isCorrect: false },
            ],
          },
          {
            id: "php-i-4",
            question: "What are traits in PHP?",
            topic: "PHP OOP",
            explanation:
              "Traits allow code reuse in single-inheritance PHP. A trait defines methods that can be used in multiple classes without inheritance, solving the diamond problem.",
            options: [
              { text: "PHP's way of handling exceptions", isCorrect: false },
              {
                text: "Reusable code blocks that can be included in multiple classes",
                isCorrect: true,
              },
              { text: "A type of PHP interface", isCorrect: false },
              { text: "An alternative to PHP functions", isCorrect: false },
            ],
          },
          {
            id: "php-i-5",
            question: "What is XSS and how do you prevent it in PHP?",
            topic: "Security",
            explanation:
              "XSS (Cross-Site Scripting) is when attackers inject malicious scripts. Prevent by using htmlspecialchars() on output, Content Security Policy headers, and input validation.",
            options: [
              {
                text: "Database injection; prevented with PDO",
                isCorrect: false,
              },
              {
                text: "Script injection attacks; prevented with htmlspecialchars() and CSP",
                isCorrect: true,
              },
              {
                text: "File upload attacks; prevented with extension checking",
                isCorrect: false,
              },
              {
                text: "Session hijacking; prevented with HTTPS",
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
            id: "php-a-1",
            question: "How do you optimize PHP application performance?",
            topic: "Performance",
            explanation:
              "Key: OPcache to cache compiled bytecode, eager loading in Eloquent, Redis/Memcached caching, database query optimization with indexes, PHP-FPM process management.",
            options: [
              { text: "Write fewer functions", isCorrect: false },
              {
                text: "OPcache, eager loading, Redis caching, query optimization, PHP-FPM",
                isCorrect: true,
              },
              { text: "Use only procedural PHP", isCorrect: false },
              { text: "Disable logging", isCorrect: false },
            ],
          },
          {
            id: "php-a-2",
            question:
              "What is the difference between Laravel's sync, queue, and async jobs?",
            topic: "Queue System",
            explanation:
              "Sync: runs in the same HTTP request (development only). Queued: dispatched to a queue worker (Redis, database), processed asynchronously. async/await is not PHP-native; use Laravel queues for async work.",
            options: [
              { text: "They are different PHP keywords", isCorrect: false },
              {
                text: "Sync: immediate in-request; Queued: background worker processes async",
                isCorrect: true,
              },
              { text: "Async is the default in PHP 8", isCorrect: false },
              { text: "Queue only works with MySQL", isCorrect: false },
            ],
          },
          {
            id: "php-a-3",
            question: "How do you handle concurrency in a PHP web application?",
            topic: "Concurrency",
            explanation:
              "PHP is typically stateless per request. For concurrency: use optimistic locking in DB (version fields), Redis atomic operations for counters, database transactions for critical sections.",
            options: [
              {
                text: "PHP handles concurrency automatically",
                isCorrect: false,
              },
              {
                text: "Optimistic locking, Redis atomic ops, DB transactions for critical sections",
                isCorrect: true,
              },
              { text: "Use shared memory extensions", isCorrect: false },
              { text: "PHP cannot handle concurrent users", isCorrect: false },
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
            id: "php-ip-b-1",
            question:
              "What is the difference between include and require in PHP?",
            talkingPoints: [
              "include: produces a warning if file not found and continues execution",
              "require: produces a fatal error if file not found, stops execution",
              "include_once/require_once: prevents double inclusion",
              "Use require for files critical to app execution",
            ],
            keywords: [
              "include",
              "require",
              "include_once",
              "require_once",
              "fatal error",
            ],
          },
          {
            id: "php-ip-b-2",
            question: "How does Laravel routing work?",
            talkingPoints: [
              "Routes defined in routes/web.php or routes/api.php",
              "Route::get('/users', [UserController::class, 'index'])",
              "Route groups for middleware, prefix, namespace",
              "Named routes for URL generation: route('users.index')",
            ],
            keywords: [
              "Route facade",
              "controllers",
              "middleware groups",
              "route model binding",
              "named routes",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "php-ip-i-1",
            question: "How do you prevent SQL injection in PHP?",
            talkingPoints: [
              "Use PDO or MySQLi prepared statements with parameterized queries",
              "Never concatenate user input directly into SQL strings",
              "Eloquent ORM automatically uses parameterized queries",
              "Also validate and sanitize input, but parameterization is the primary defense",
            ],
            keywords: [
              "prepared statements",
              "PDO",
              "parameterized queries",
              "input validation",
              "Eloquent",
            ],
          },
          {
            id: "php-ip-i-2",
            question: "What is Laravel's service container?",
            talkingPoints: [
              "IoC (Inversion of Control) container that manages class dependencies",
              "Bindings registered in service providers",
              "Resolves dependencies automatically via type-hints in constructors",
              "Enables dependency injection across the whole application",
            ],
            keywords: [
              "IoC",
              "service provider",
              "binding",
              "dependency injection",
              "auto-resolution",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "php-ip-a-1",
            question: "How would you architect a high-traffic PHP application?",
            talkingPoints: [
              "Stateless PHP-FPM instances behind a load balancer",
              "Redis for sessions, caching, and queue backend",
              "Database read replicas for query scaling",
              "CDN for static assets",
              "Queue workers for async jobs, Laravel Horizon for monitoring",
            ],
            keywords: [
              "PHP-FPM",
              "Redis",
              "load balancer",
              "read replica",
              "Laravel Horizon",
            ],
          },
        ],
      },
    ],
  },

  "wordpress-developer": {
    freeCourses: [
      {
        name: "WordPress Theme Development – freeCodeCamp",
        url: "https://www.youtube.com/watch?v=2Zt8vas_6hc",
        provider: "freeCodeCamp",
        platform: "YouTube",
        language: "English",
        level: "Beginner",
      },
      {
        name: "WordPress in Hindi – Complete Course",
        url: "https://www.youtube.com/results?search_query=wordpress+course+hindi",
        provider: "WsCube Tech Hindi",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "WordPress Telugu Tutorial",
        url: "https://www.youtube.com/results?search_query=wordpress+tutorial+telugu",
        provider: "Telugu Tech World",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "WordPress Development – LearnVern",
        url: "https://www.learnvern.com/course/wordpress-tutorial",
        provider: "LearnVern",
        platform: "LearnVern",
        language: "English & Hindi",
        level: "Beginner",
      },
    ],
    mockTests: [
      {
        level: "basic",
        passingScore: 60,
        questions: [
          {
            id: "wp-b-1",
            question: "What language is WordPress built with?",
            topic: "WordPress Basics",
            explanation:
              "WordPress is built with PHP and uses MySQL as its database. It's the most popular CMS, powering ~43% of websites.",
            options: [
              { text: "Python", isCorrect: false },
              { text: "PHP and MySQL", isCorrect: true },
              { text: "JavaScript and MongoDB", isCorrect: false },
              { text: "Ruby on Rails", isCorrect: false },
            ],
          },
          {
            id: "wp-b-2",
            question: "What is a WordPress theme?",
            topic: "Themes",
            explanation:
              "A WordPress theme controls the visual appearance of a site — layout, colors, typography. Themes consist of PHP templates, CSS, and JavaScript files.",
            options: [
              { text: "A WordPress plugin type", isCorrect: false },
              {
                text: "Files controlling the visual design and layout of the site",
                isCorrect: true,
              },
              { text: "A database configuration", isCorrect: false },
              { text: "A WordPress hosting plan", isCorrect: false },
            ],
          },
          {
            id: "wp-b-3",
            question: "What is the wp-config.php file?",
            topic: "WordPress Setup",
            explanation:
              "wp-config.php contains WordPress configuration: database credentials, security keys, table prefix, debug settings. It should never be publicly accessible.",
            options: [
              { text: "A template file for the header", isCorrect: false },
              {
                text: "The WordPress configuration file with database credentials and settings",
                isCorrect: true,
              },
              { text: "A plugin configuration file", isCorrect: false },
              { text: "A caching configuration file", isCorrect: false },
            ],
          },
          {
            id: "wp-b-4",
            question: "What is a WordPress plugin?",
            topic: "Plugins",
            explanation:
              "A plugin is a package of code that extends WordPress functionality without modifying core files. Plugins are activated from wp-admin and run hooks into the WordPress lifecycle.",
            options: [
              { text: "A premium WordPress hosting add-on", isCorrect: false },
              {
                text: "Code that extends WordPress functionality via hooks",
                isCorrect: true,
              },
              { text: "A theme child template", isCorrect: false },
              { text: "A WordPress page template", isCorrect: false },
            ],
          },
          {
            id: "wp-b-5",
            question: "What are WordPress hooks?",
            topic: "WordPress Development",
            explanation:
              "Hooks allow you to modify WordPress behavior without editing core files. Actions run code at specific points (wp_head, init). Filters modify data (the_title, the_content).",
            options: [
              { text: "Links that connect pages together", isCorrect: false },
              {
                text: "Actions (run code at events) and Filters (modify data)",
                isCorrect: true,
              },
              { text: "PHP classes for database queries", isCorrect: false },
              { text: "Theme template parts", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "wp-i-1",
            question: "What is a WordPress child theme?",
            topic: "Themes",
            explanation:
              "A child theme inherits the parent theme's functionality and styling. Customizations go in the child theme, so they survive parent theme updates.",
            options: [
              { text: "A simplified version of a theme", isCorrect: false },
              {
                text: "A theme inheriting parent styling where customizations survive updates",
                isCorrect: true,
              },
              { text: "A mini-theme for mobile devices", isCorrect: false },
              { text: "A theme for subdomain sites", isCorrect: false },
            ],
          },
          {
            id: "wp-i-2",
            question: "What is WP_Query?",
            topic: "WordPress Development",
            explanation:
              "WP_Query is the class used to query the WordPress database for posts, pages, and custom post types. It accepts an array of arguments to filter, sort, and paginate results.",
            options: [
              { text: "A SQL query builder", isCorrect: false },
              {
                text: "WordPress class for querying posts/pages with arguments",
                isCorrect: true,
              },
              { text: "A WordPress analytics API", isCorrect: false },
              { text: "A REST API endpoint", isCorrect: false },
            ],
          },
          {
            id: "wp-i-3",
            question: "How do you enqueue scripts and styles in WordPress?",
            topic: "WordPress Development",
            explanation:
              "Use wp_enqueue_script() and wp_enqueue_style() hooked to wp_enqueue_scripts. This manages dependencies and prevents duplicate loading.",
            options: [
              {
                text: "Add <script> tags directly to header.php",
                isCorrect: false,
              },
              {
                text: "wp_enqueue_script/style() hooked to wp_enqueue_scripts action",
                isCorrect: true,
              },
              { text: "Use wp_head() in functions.php", isCorrect: false },
              { text: "Include files directly with require", isCorrect: false },
            ],
          },
          {
            id: "wp-i-4",
            question: "What is the WordPress REST API?",
            topic: "WordPress API",
            explanation:
              "The WordPress REST API allows external applications to interact with WordPress content (posts, users, media) via JSON endpoints at /wp-json/wp/v2/",
            options: [
              { text: "A plugin for building REST APIs", isCorrect: false },
              {
                text: "Built-in JSON API at /wp-json/ exposing WordPress content",
                isCorrect: true,
              },
              { text: "A database backup API", isCorrect: false },
              { text: "A WordPress hosting API", isCorrect: false },
            ],
          },
          {
            id: "wp-i-5",
            question: "What is a custom post type in WordPress?",
            topic: "Content Types",
            explanation:
              "Custom post types extend WordPress beyond posts and pages. You register them with register_post_type(), then they appear in the admin sidebar and can be queried like posts.",
            options: [
              { text: "A modified Post with custom CSS", isCorrect: false },
              {
                text: "A new content type registered with register_post_type()",
                isCorrect: true,
              },
              { text: "A WordPress multisite post", isCorrect: false },
              { text: "A third-party blogging format", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "advanced",
        passingScore: 70,
        questions: [
          {
            id: "wp-a-1",
            question: "How do you optimize a WordPress site for performance?",
            topic: "Performance",
            explanation:
              "Object caching (Redis/Memcached), page caching (WP Rocket/W3 Total Cache), CDN, lazy loading images, minimize plugins, optimize database queries, use Autoptimize for CSS/JS.",
            options: [
              { text: "Install more plugins", isCorrect: false },
              {
                text: "Object caching, page caching, CDN, lazy loading, query optimization",
                isCorrect: true,
              },
              { text: "Use only default theme", isCorrect: false },
              { text: "Disable all JavaScript", isCorrect: false },
            ],
          },
          {
            id: "wp-a-2",
            question: "How do you secure a WordPress site?",
            topic: "Security",
            explanation:
              "Limit login attempts, 2FA, keep WP/plugins/themes updated, Wordfence/Sucuri, change default admin username, restrict file editing (DISALLOW_FILE_EDIT), SSL, security headers.",
            options: [
              { text: "Hide the site from search engines", isCorrect: false },
              {
                text: "2FA, updates, Wordfence, DISALLOW_FILE_EDIT, SSL, limit login attempts",
                isCorrect: true,
              },
              { text: "Use only free themes", isCorrect: false },
              { text: "Disable PHP completely", isCorrect: false },
            ],
          },
          {
            id: "wp-a-3",
            question:
              "What is the Gutenberg block editor and how do you create a custom block?",
            topic: "Block Development",
            explanation:
              "Gutenberg is the WordPress block editor using React and JavaScript. Custom blocks are registered with registerBlockType(), define edit (editor UI) and save (rendered HTML) functions using JSX.",
            options: [
              { text: "A WordPress database editor", isCorrect: false },
              {
                text: "A React-based editor; custom blocks use registerBlockType() with edit/save functions",
                isCorrect: true,
              },
              { text: "A plugin for classic editor", isCorrect: false },
              { text: "The WordPress CLI tool", isCorrect: false },
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
            id: "wp-ip-b-1",
            question:
              "What are the main differences between WordPress.com and WordPress.org?",
            talkingPoints: [
              "WordPress.org: self-hosted, full control, install any plugin/theme",
              "WordPress.com: hosted platform, limited customization on free/low tiers",
              "For client development, always use WordPress.org self-hosted",
              "WordPress.org requires a web host and domain",
            ],
            keywords: [
              "self-hosted",
              "managed hosting",
              "full control",
              "plugins",
              "customization",
            ],
          },
          {
            id: "wp-ip-b-2",
            question:
              "How do you create a custom WordPress theme from scratch?",
            talkingPoints: [
              "Minimum: style.css (with theme header comments) + index.php",
              "functions.php for enqueuing scripts, registering menus, adding theme support",
              "Template hierarchy: single.php, page.php, archive.php, front-page.php",
              "Use get_header(), get_footer(), get_sidebar() for includes",
            ],
            keywords: [
              "template hierarchy",
              "functions.php",
              "style.css",
              "get_header",
              "wp_head/wp_footer",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "wp-ip-i-1",
            question: "How do you build a WordPress plugin?",
            talkingPoints: [
              "Create plugin folder in wp-content/plugins/, add main PHP file with plugin header",
              "Use hooks (add_action, add_filter) to extend WordPress behavior",
              "Define activation/deactivation hooks for setup/cleanup",
              "Follow WordPress coding standards, sanitize all inputs, escape all outputs",
            ],
            keywords: [
              "plugin header",
              "add_action",
              "add_filter",
              "sanitize_text_field",
              "esc_html",
            ],
          },
          {
            id: "wp-ip-i-2",
            question:
              "What is Advanced Custom Fields (ACF) and when do you use it?",
            talkingPoints: [
              "ACF adds custom field groups to posts, pages, and custom post types",
              "Use when clients need structured data beyond standard title/content/excerpt",
              "Supports text, image, repeater, flexible content, relationship fields",
              "ACF data is stored in wp_postmeta table",
            ],
            keywords: [
              "ACF",
              "custom fields",
              "flexible content",
              "repeater",
              "wp_postmeta",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "wp-ip-a-1",
            question: "How would you build a headless WordPress architecture?",
            talkingPoints: [
              "WordPress as CMS backend, REST API or WPGraphQL as data layer",
              "Next.js or Gatsby as the frontend consuming WordPress API",
              "Benefits: better performance, React ecosystem for frontend",
              "Challenges: previews, authentication, real-time updates",
            ],
            keywords: [
              "headless CMS",
              "REST API",
              "WPGraphQL",
              "Next.js",
              "Jamstack",
            ],
          },
        ],
      },
    ],
  },

  "python-developer": {
    freeCourses: [
      {
        name: "Python for Everybody – University of Michigan",
        url: "https://www.coursera.org/specializations/python",
        provider: "University of Michigan / Coursera",
        platform: "Coursera",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Python Full Course in Hindi",
        url: "https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME",
        provider: "Code With Harry",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "Python Programming Telugu Tutorial",
        url: "https://www.youtube.com/results?search_query=python+tutorial+telugu",
        provider: "Durga Software Solutions",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "Python Scientific Computing with NumPy",
        url: "https://numpy.org/learn/",
        provider: "NumPy / freeCodeCamp",
        platform: "freeCodeCamp",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "Django Tutorial – Telusko",
        url: "https://www.youtube.com/c/Telusko",
        provider: "Telusko",
        platform: "YouTube",
        language: "English & Hindi",
        level: "Intermediate",
      },
      {
        name: "NPTEL Programming in Python",
        url: "https://nptel.ac.in/courses/106106145",
        provider: "IIT Madras / NPTEL",
        platform: "NPTEL",
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
            id: "py-b-1",
            question:
              "Which of the following is the correct way to define a function in Python?",
            topic: "Python Basics",
            explanation:
              'Python uses the "def" keyword followed by the function name and parentheses. Colons end the declaration and the body is indented.',
            options: [
              { text: "function myFunc():", isCorrect: false },
              { text: "def myFunc():", isCorrect: true },
              { text: "func myFunc():", isCorrect: false },
              { text: "define myFunc():", isCorrect: false },
            ],
          },
          {
            id: "py-b-2",
            question: "What will print(type(5/2)) output in Python 3?",
            topic: "Python Basics",
            explanation:
              "In Python 3, dividing two integers with / always produces a float. Use // for integer (floor) division.",
            options: [
              { text: "<class 'int'>", isCorrect: false },
              { text: "<class 'float'>", isCorrect: true },
              { text: "<class 'str'>", isCorrect: false },
              { text: "<class 'number'>", isCorrect: false },
            ],
          },
          {
            id: "py-b-3",
            question: "Which data structure uses key-value pairs in Python?",
            topic: "Data Structures",
            explanation:
              "Dictionaries (dict) store data as key-value pairs. Lists use indexes, sets are unique unordered values, tuples are immutable sequences.",
            options: [
              { text: "List", isCorrect: false },
              { text: "Tuple", isCorrect: false },
              { text: "Set", isCorrect: false },
              { text: "Dictionary", isCorrect: true },
            ],
          },
          {
            id: "py-b-4",
            question: 'What does the "len()" function do in Python?',
            topic: "Built-ins",
            explanation:
              "len() returns the number of items in an object — works on strings (characters), lists (elements), dicts (keys), etc.",
            options: [
              { text: "Returns the length of the code", isCorrect: false },
              {
                text: "Returns the number of items in an object",
                isCorrect: true,
              },
              { text: "Lengthens a string with padding", isCorrect: false },
              { text: "Checks if an object is long", isCorrect: false },
            ],
          },
          {
            id: "py-b-5",
            question: "What is a Python list comprehension?",
            topic: "Python Features",
            explanation:
              "List comprehensions provide a concise way to create lists: [expression for item in iterable if condition]. They are faster than equivalent for loops.",
            options: [
              { text: "A way to document lists in code", isCorrect: false },
              { text: "A method to sort a list", isCorrect: false },
              {
                text: "A concise syntax to create lists from iterables",
                isCorrect: true,
              },
              {
                text: "A type of list that can hold mixed types",
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
            id: "py-i-1",
            question:
              "What is a Python generator and how does it differ from a list?",
            topic: "Python Features",
            explanation:
              "Generators produce values lazily one at a time (using yield), consuming minimal memory. Lists store all values in memory at once. Use generators for large sequences.",
            options: [
              {
                text: "A generator is a function that returns multiple lists",
                isCorrect: false,
              },
              {
                text: "A generator yields values lazily, using minimal memory vs a full list",
                isCorrect: true,
              },
              {
                text: "Generators are faster versions of list comprehensions",
                isCorrect: false,
              },
              {
                text: "A generator creates a copy of a list",
                isCorrect: false,
              },
            ],
          },
          {
            id: "py-i-2",
            question: "What is a Python decorator?",
            topic: "Python Features",
            explanation:
              "A decorator is a function that wraps another function, modifying its behavior without changing its source code. The @syntax is syntactic sugar for higher-order functions.",
            options: [
              {
                text: "A CSS-like styling syntax for Python classes",
                isCorrect: false,
              },
              {
                text: "A function that wraps another function to extend its behavior",
                isCorrect: true,
              },
              { text: "A type of Python comment", isCorrect: false },
              { text: "A visual theme for Python code", isCorrect: false },
            ],
          },
          {
            id: "py-i-3",
            question: "What is the GIL (Global Interpreter Lock) in Python?",
            topic: "Python Internals",
            explanation:
              "The GIL is a mutex in CPython that allows only one thread to execute Python bytecode at a time. This limits true parallelism for CPU-bound tasks in threads — use multiprocessing instead.",
            options: [
              { text: "A security lock for Python packages", isCorrect: false },
              {
                text: "A mutex that limits CPU-bound threads to one at a time in CPython",
                isCorrect: true,
              },
              { text: "A garbage collection mechanism", isCorrect: false },
              { text: "An import lock for modules", isCorrect: false },
            ],
          },
          {
            id: "py-i-4",
            question: "What does __init__ do in a Python class?",
            topic: "OOP",
            explanation:
              "__init__ is the constructor method, called automatically when a new instance of the class is created. It initializes the object's attributes.",
            options: [
              {
                text: "It imports external libraries for the class",
                isCorrect: false,
              },
              {
                text: "It is the constructor, called when a new instance is created",
                isCorrect: true,
              },
              { text: "It runs when the class is defined", isCorrect: false },
              { text: "It deletes the object when done", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "advanced",
        passingScore: 70,
        questions: [
          {
            id: "py-a-1",
            question: "What is asyncio in Python and when should you use it?",
            topic: "Async Python",
            explanation:
              "asyncio is Python's async/await framework for writing single-threaded concurrent code using coroutines. Ideal for I/O-bound tasks (network calls, file I/O) — not for CPU-bound work.",
            options: [
              {
                text: "A library for running Python on multiple CPU cores",
                isCorrect: false,
              },
              {
                text: "An event loop framework for I/O-bound concurrent code using coroutines",
                isCorrect: true,
              },
              { text: "A synchronous I/O library", isCorrect: false },
              {
                text: "A testing library for async functions",
                isCorrect: false,
              },
            ],
          },
          {
            id: "py-a-2",
            question: "How do Python metaclasses work?",
            topic: "Python Advanced",
            explanation:
              'A metaclass is a "class of a class" — it controls how a class itself is created. type is the default metaclass. Custom metaclasses let you intercept class creation for ORMs, singletons, etc.',
            options: [
              {
                text: "A class that inherits from multiple parents",
                isCorrect: false,
              },
              {
                text: "A class that controls how other classes are created",
                isCorrect: true,
              },
              {
                text: "An abstract base class with no implementation",
                isCorrect: false,
              },
              {
                text: "A class defined inside another class",
                isCorrect: false,
              },
            ],
          },
          {
            id: "py-a-3",
            question:
              "What is the difference between deepcopy and shallow copy?",
            topic: "Python Memory",
            explanation:
              "Shallow copy creates a new object but references the same nested objects. Deep copy creates a fully independent copy of the object and all objects it contains recursively.",
            options: [
              {
                text: "Deepcopy copies only the first level; shallow copies everything",
                isCorrect: false,
              },
              {
                text: "Shallow copy shares nested objects; deepcopy creates fully independent copies",
                isCorrect: true,
              },
              {
                text: "They are identical for immutable objects",
                isCorrect: false,
              },
              { text: "Deepcopy is only for dictionaries", isCorrect: false },
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
            id: "py-ip-b-1",
            question: "What are Python's key features that make it popular?",
            talkingPoints: [
              "Readable syntax resembling pseudocode — easy to learn",
              "Extensive standard library and ecosystem (PyPI has 400k+ packages)",
              "Interpreted language with dynamic typing",
              "Versatile: web dev, data science, automation, scripting",
              "Large community and excellent documentation",
            ],
            keywords: [
              "interpreted",
              "dynamically typed",
              "open source",
              "PEP 8",
              "REPL",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "py-ip-i-1",
            question:
              "Explain Python's memory management and garbage collection.",
            talkingPoints: [
              "Python uses reference counting as the primary memory management technique",
              "Objects are freed when reference count drops to zero",
              "Cyclic garbage collector handles reference cycles (objects referencing each other)",
              "Use sys.getrefcount() to inspect reference counts",
              "Memory profiling tools: memory_profiler, tracemalloc",
            ],
            keywords: [
              "reference counting",
              "garbage collection",
              "CPython",
              "reference cycle",
              "heap",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "py-ip-a-1",
            question: "How would you optimize a slow Python script?",
            talkingPoints: [
              "Profile first: cProfile or line_profiler to find the actual bottleneck",
              "Algorithmic optimization (correct data structures) > micro-optimization",
              "Replace Python loops with vectorized NumPy operations for numerical work",
              "Use C extensions (Cython, ctypes) for CPU-bound hotspots",
              "Parallelize I/O-bound work with asyncio or threads; CPU-bound with multiprocessing",
            ],
            keywords: [
              "profiling",
              "cProfile",
              "NumPy vectorization",
              "Cython",
              "multiprocessing",
            ],
          },
        ],
      },
    ],
  },

  "data-engineer": {
    freeCourses: [
      {
        name: "Data Engineering on Google Cloud",
        url: "https://www.coursera.org/professional-certificates/gcp-data-engineering",
        provider: "Google",
        platform: "Coursera",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "IBM Data Engineering Professional Certificate",
        url: "https://www.coursera.org/professional-certificates/ibm-data-engineer",
        provider: "IBM",
        platform: "Coursera",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Apache Spark Tutorial",
        url: "https://www.youtube.com/playlist?list=PLmtsMNDRU0ByOQoz6lnihh6CtMrErNax7",
        provider: "Intellipaat",
        platform: "YouTube",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "Data Engineering in Hindi",
        url: "https://www.youtube.com/results?search_query=data+engineering+hindi",
        provider: "YouTube",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "Data Engineering Telugu Tutorial",
        url: "https://www.youtube.com/results?search_query=data+engineering+telugu",
        provider: "YouTube",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "SQL for Data Engineering",
        url: "https://www.freecodecamp.org/learn/relational-database/",
        provider: "freeCodeCamp",
        platform: "freeCodeCamp",
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
            id: "de-b-1",
            question: "What is an ETL pipeline?",
            options: [
              {
                text: "Extract, Transform, Load – moving data from source to destination",
                isCorrect: true,
              },
              { text: "Edit, Test, Launch", isCorrect: false },
              { text: "A type of neural network", isCorrect: false },
              { text: "A database backup process", isCorrect: false },
            ],
            explanation:
              "ETL stands for Extract, Transform, Load — the core process of data engineering.",
          },
          {
            id: "de-b-2",
            question: "Which tool is commonly used for batch data processing?",
            options: [
              { text: "Apache Spark", isCorrect: true },
              { text: "React", isCorrect: false },
              { text: "Redis", isCorrect: false },
              { text: "NGINX", isCorrect: false },
            ],
            explanation:
              "Apache Spark is the industry-standard tool for large-scale batch and stream processing.",
          },
          {
            id: "de-b-3",
            question: "What is a data lake?",
            options: [
              {
                text: "A centralized repository that stores raw data at any scale",
                isCorrect: true,
              },
              { text: "A structured relational database", isCorrect: false },
              { text: "A caching layer", isCorrect: false },
              { text: "A cloud storage pricing tier", isCorrect: false },
            ],
            explanation:
              "Data lakes store raw unstructured or structured data at massive scale for later processing.",
          },
          {
            id: "de-b-4",
            question: "What does 'schema on read' mean?",
            options: [
              {
                text: "Structure is applied when data is read, not when stored",
                isCorrect: true,
              },
              { text: "Data is validated before writing", isCorrect: false },
              {
                text: "Schema is auto-generated from CSV files",
                isCorrect: false,
              },
              { text: "A type of database index", isCorrect: false },
            ],
            explanation:
              "Schema on read is the data lake pattern where structure is imposed at query time.",
          },
          {
            id: "de-b-5",
            question:
              "Which file format is commonly used in data lakes for its efficiency?",
            options: [
              { text: "Parquet", isCorrect: true },
              { text: "DOCX", isCorrect: false },
              { text: "HTML", isCorrect: false },
              { text: "MP4", isCorrect: false },
            ],
            explanation:
              "Parquet is a columnar storage format widely used in big data for efficiency and compression.",
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "de-i-1",
            question: "What is Apache Kafka used for?",
            options: [
              {
                text: "Real-time event streaming and messaging",
                isCorrect: true,
              },
              { text: "Machine learning model training", isCorrect: false },
              { text: "Static website hosting", isCorrect: false },
              { text: "SQL query optimization", isCorrect: false },
            ],
            explanation:
              "Kafka is a distributed event streaming platform for high-throughput real-time data pipelines.",
          },
          {
            id: "de-i-2",
            question: "What is data partitioning in distributed systems?",
            options: [
              {
                text: "Dividing data across nodes for parallel processing and scalability",
                isCorrect: true,
              },
              { text: "Encrypting database columns", isCorrect: false },
              { text: "Creating database backups", isCorrect: false },
              { text: "Indexing query results", isCorrect: false },
            ],
            explanation:
              "Partitioning splits data across multiple nodes so queries run in parallel, improving performance.",
          },
          {
            id: "de-i-3",
            question: "Which of the following is a cloud data warehouse?",
            options: [
              { text: "Snowflake", isCorrect: true },
              { text: "Apache Kafka", isCorrect: false },
              { text: "Airflow", isCorrect: false },
              { text: "dbt", isCorrect: false },
            ],
            explanation:
              "Snowflake is a popular cloud-native data warehouse platform.",
          },
          {
            id: "de-i-4",
            question: "What is Apache Airflow used for?",
            options: [
              {
                text: "Orchestrating and scheduling data pipelines as DAGs",
                isCorrect: true,
              },
              { text: "Storing ML models", isCorrect: false },
              { text: "Real-time stream processing", isCorrect: false },
              { text: "Visualizing dashboards", isCorrect: false },
            ],
            explanation:
              "Airflow orchestrates complex workflows as Directed Acyclic Graphs (DAGs).",
          },
          {
            id: "de-i-5",
            question: "What does dbt (data build tool) primarily do?",
            options: [
              {
                text: "Transforms data inside the warehouse using SQL and version control",
                isCorrect: true,
              },
              { text: "Extracts data from APIs", isCorrect: false },
              { text: "Trains ML models", isCorrect: false },
              { text: "Manages Kafka topics", isCorrect: false },
            ],
            explanation:
              "dbt focuses on the T in ELT — transforming data that's already loaded into a warehouse.",
          },
        ],
      },
      {
        level: "advanced",
        passingScore: 70,
        questions: [
          {
            id: "de-a-1",
            question: "What is the Lambda architecture in data engineering?",
            options: [
              {
                text: "A hybrid batch + stream processing architecture for low-latency and historical accuracy",
                isCorrect: true,
              },
              { text: "A serverless deployment pattern", isCorrect: false },
              {
                text: "A Python function optimization technique",
                isCorrect: false,
              },
              { text: "An AWS pricing model", isCorrect: false },
            ],
            explanation:
              "Lambda architecture combines batch (accurate historical) and speed (low-latency real-time) layers.",
          },
          {
            id: "de-a-2",
            question: "How does Delta Lake improve data reliability?",
            options: [
              {
                text: "ACID transactions, schema enforcement, and time-travel on data lakes",
                isCorrect: true,
              },
              {
                text: "It compresses parquet files automatically",
                isCorrect: false,
              },
              { text: "It replaces Kafka for streaming", isCorrect: false },
              { text: "It auto-scales Spark clusters", isCorrect: false },
            ],
            explanation:
              "Delta Lake brings reliability features like ACID transactions to data lakes, enabling rollback and auditing.",
          },
          {
            id: "de-a-3",
            question: "What is data lineage and why does it matter?",
            options: [
              {
                text: "Tracking where data came from, how it transformed, and where it flows — critical for auditing and debugging",
                isCorrect: true,
              },
              { text: "A backup retention policy", isCorrect: false },
              { text: "A database indexing strategy", isCorrect: false },
              { text: "A Kafka consumer group concept", isCorrect: false },
            ],
            explanation:
              "Data lineage enables root-cause analysis, regulatory compliance, and trust in data quality.",
          },
          {
            id: "de-a-4",
            question:
              "What problem does the Kappa architecture solve over Lambda?",
            options: [
              {
                text: "Eliminates the batch layer — everything is treated as a stream, reducing complexity",
                isCorrect: true,
              },
              { text: "It adds a GPU layer for ML training", isCorrect: false },
              { text: "It replaces SQL with NoSQL", isCorrect: false },
              { text: "It improves Kafka throughput", isCorrect: false },
            ],
            explanation:
              "Kappa architecture simplifies Lambda by using a single stream processing layer for all data.",
          },
          {
            id: "de-a-5",
            question:
              "What is a slowly changing dimension (SCD) in data warehousing?",
            options: [
              {
                text: "A dimension that changes over time with strategies to track historical values",
                isCorrect: true,
              },
              { text: "A low-cardinality column", isCorrect: false },
              { text: "A deprecated database table", isCorrect: false },
              { text: "A type of Parquet partition", isCorrect: false },
            ],
            explanation:
              "SCDs (Types 1–3) define how to handle historical changes to dimensional data in a warehouse.",
          },
        ],
      },
    ],
    interviewPrep: [
      {
        level: "basic",
        questions: [
          {
            id: "de-ib-1",
            question:
              "What is the difference between a data warehouse and a data lake?",
            talkingPoints: [
              "Data warehouse: structured, schema-on-write, optimized for analytics queries",
              "Data lake: raw/unstructured data, schema-on-read, cheaper storage",
              "Warehouse examples: Snowflake, BigQuery; Lake examples: S3, ADLS",
            ],
            keywords: [
              "data warehouse",
              "data lake",
              "schema-on-write",
              "schema-on-read",
              "structured data",
            ],
          },
          {
            id: "de-ib-2",
            question: "Explain ETL vs ELT.",
            talkingPoints: [
              "ETL: transform before loading — used with traditional warehouses",
              "ELT: load raw then transform inside warehouse — modern cloud approach",
              "ELT enabled by cheap cloud compute (BigQuery, Snowflake)",
            ],
            keywords: [
              "ETL",
              "ELT",
              "transformation",
              "pipeline",
              "cloud warehouse",
            ],
          },
          {
            id: "de-ib-3",
            question: "What is Apache Spark and when would you use it?",
            talkingPoints: [
              "In-memory distributed processing framework",
              "Use for large-scale batch processing, ML pipelines, streaming",
              "Faster than MapReduce for iterative algorithms",
            ],
            keywords: [
              "Apache Spark",
              "distributed processing",
              "RDD",
              "DataFrame",
              "in-memory",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "de-ii-1",
            question:
              "How would you handle late-arriving data in a streaming pipeline?",
            talkingPoints: [
              "Use watermarks to define how late data is accepted",
              "Windowing strategies: tumbling, sliding, session windows",
              "Store late data in separate partition for reprocessing",
            ],
            keywords: [
              "watermarks",
              "late data",
              "windowing",
              "Kafka",
              "Flink",
              "Spark Streaming",
            ],
          },
          {
            id: "de-ii-2",
            question:
              "Describe how you would design a data pipeline for a high-volume e-commerce platform.",
            talkingPoints: [
              "Ingest: Kafka for real-time events (orders, clicks)",
              "Process: Spark/Flink for aggregation and enrichment",
              "Store: Delta Lake or Snowflake; serve via BI tool",
            ],
            keywords: [
              "data pipeline",
              "Kafka",
              "Spark",
              "Snowflake",
              "Delta Lake",
              "scalability",
            ],
          },
          {
            id: "de-ii-3",
            question:
              "What are the key differences between row-based and columnar storage?",
            talkingPoints: [
              "Row: fast for transactional reads/writes (OLTP)",
              "Columnar (Parquet, ORC): fast for analytical queries that scan few columns",
              "Columnar enables high compression ratios",
            ],
            keywords: [
              "columnar storage",
              "Parquet",
              "ORC",
              "OLAP",
              "OLTP",
              "compression",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "de-ia-1",
            question:
              "How would you ensure data quality across a large-scale pipeline?",
            talkingPoints: [
              "Automated data validation at ingestion (Great Expectations, dbt tests)",
              "Schema evolution handling with backward-compatible changes",
              "Data profiling and monitoring with alerting on anomalies",
            ],
            keywords: [
              "data quality",
              "Great Expectations",
              "dbt tests",
              "schema evolution",
              "data profiling",
              "monitoring",
            ],
          },
          {
            id: "de-ia-2",
            question:
              "Explain your approach to cost optimization in a cloud data platform.",
            talkingPoints: [
              "Right-size compute clusters, use spot/preemptible instances",
              "Partition and compress data to reduce query scan costs",
              "Implement data tiering: hot/warm/cold storage",
            ],
            keywords: [
              "cost optimization",
              "partitioning",
              "data tiering",
              "spot instances",
              "columnar compression",
            ],
          },
          {
            id: "de-ia-3",
            question:
              "How do you handle schema evolution in a data pipeline without breaking downstream consumers?",
            talkingPoints: [
              "Use schema registry (Confluent) for Avro/Protobuf schemas",
              "Apply backward-compatible changes: add optional fields only",
              "Version APIs and use feature flags for breaking changes",
            ],
            keywords: [
              "schema evolution",
              "schema registry",
              "Avro",
              "backward compatibility",
              "versioning",
            ],
          },
        ],
      },
    ],
  },

  "data-scientist": {
    freeCourses: [
      {
        name: "Machine Learning by Andrew Ng",
        url: "https://www.coursera.org/specializations/machine-learning-introduction",
        provider: "Stanford/Coursera",
        platform: "Coursera",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "IBM Data Science Professional Certificate",
        url: "https://www.coursera.org/professional-certificates/ibm-data-science",
        provider: "IBM",
        platform: "Coursera",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Data Science with Python in Hindi",
        url: "https://www.youtube.com/results?search_query=data+science+python+hindi",
        provider: "YouTube",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "Data Science Telugu Tutorial",
        url: "https://www.youtube.com/results?search_query=data+science+telugu",
        provider: "YouTube",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "Kaggle Learn – Free ML Courses",
        url: "https://www.kaggle.com/learn",
        provider: "Kaggle",
        platform: "Kaggle",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Fast.ai – Practical Deep Learning",
        url: "https://www.fast.ai",
        provider: "fast.ai",
        platform: "fast.ai",
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
            id: "ds-b-1",
            question: "What is supervised learning?",
            options: [
              {
                text: "Training a model on labeled data to predict outcomes",
                isCorrect: true,
              },
              { text: "Training without any data", isCorrect: false },
              { text: "Using reinforcement signals only", isCorrect: false },
              { text: "Clustering similar data points", isCorrect: false },
            ],
            explanation:
              "Supervised learning uses labeled input-output pairs to train predictive models.",
          },
          {
            id: "ds-b-2",
            question: "What is overfitting?",
            options: [
              {
                text: "Model performs well on training data but poorly on new data",
                isCorrect: true,
              },
              {
                text: "Model is too simple to learn patterns",
                isCorrect: false,
              },
              { text: "Model trains too slowly", isCorrect: false },
              { text: "Model has too few parameters", isCorrect: false },
            ],
            explanation:
              "Overfitting occurs when a model memorizes training data and fails to generalize.",
          },
          {
            id: "ds-b-3",
            question:
              "Which library is primarily used for data manipulation in Python?",
            options: [
              { text: "Pandas", isCorrect: true },
              { text: "Flask", isCorrect: false },
              { text: "Django", isCorrect: false },
              { text: "Requests", isCorrect: false },
            ],
            explanation:
              "Pandas provides DataFrame structures for data loading, cleaning, and analysis.",
          },
          {
            id: "ds-b-4",
            question: "What does EDA stand for?",
            options: [
              { text: "Exploratory Data Analysis", isCorrect: true },
              { text: "External Data Application", isCorrect: false },
              { text: "Encoded Data Algorithm", isCorrect: false },
              { text: "Engineering Data Assessment", isCorrect: false },
            ],
            explanation:
              "EDA is the process of visually and statistically exploring datasets to understand patterns.",
          },
          {
            id: "ds-b-5",
            question: "What is a confusion matrix used for?",
            options: [
              {
                text: "Evaluating classification model performance showing TP, TN, FP, FN",
                isCorrect: true,
              },
              { text: "Visualizing feature correlations", isCorrect: false },
              { text: "Plotting learning curves", isCorrect: false },
              { text: "Comparing regression models", isCorrect: false },
            ],
            explanation:
              "A confusion matrix shows how well a classifier performs across all classes.",
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "ds-i-1",
            question: "What is cross-validation and why is it used?",
            options: [
              {
                text: "Splitting data into k folds to reliably estimate model performance on unseen data",
                isCorrect: true,
              },
              {
                text: "A regularization technique to reduce overfitting",
                isCorrect: false,
              },
              { text: "A feature engineering method", isCorrect: false },
              { text: "A gradient descent variant", isCorrect: false },
            ],
            explanation:
              "K-fold cross-validation gives a more reliable performance estimate than a single train/test split.",
          },
          {
            id: "ds-i-2",
            question: "What is regularization in ML?",
            options: [
              {
                text: "Adding a penalty to the loss function to prevent overfitting",
                isCorrect: true,
              },
              {
                text: "Normalizing input features to 0–1 range",
                isCorrect: false,
              },
              {
                text: "Removing duplicate rows from the dataset",
                isCorrect: false,
              },
              { text: "Resampling imbalanced classes", isCorrect: false },
            ],
            explanation:
              "L1 (Lasso) and L2 (Ridge) regularization penalize large coefficients to improve generalization.",
          },
          {
            id: "ds-i-3",
            question: "What is the ROC-AUC score?",
            options: [
              {
                text: "Area under the ROC curve — measures classifier's ability to distinguish classes",
                isCorrect: true,
              },
              { text: "A regression accuracy metric", isCorrect: false },
              { text: "Root of average clustering distance", isCorrect: false },
              { text: "A dimensionality reduction score", isCorrect: false },
            ],
            explanation:
              "AUC = 1.0 is perfect; 0.5 is random. It's threshold-independent.",
          },
          {
            id: "ds-i-4",
            question: "What is feature importance in tree-based models?",
            options: [
              {
                text: "A measure of how much each feature reduces impurity across all trees",
                isCorrect: true,
              },
              {
                text: "A ranking of features by their data type",
                isCorrect: false,
              },
              {
                text: "The number of times a feature appears in the dataset",
                isCorrect: false,
              },
              { text: "The correlation between features", isCorrect: false },
            ],
            explanation:
              "Feature importance helps interpret tree models and identify which variables drive predictions most.",
          },
          {
            id: "ds-i-5",
            question: "What is Principal Component Analysis (PCA)?",
            options: [
              {
                text: "Dimensionality reduction that projects data onto axes of maximum variance",
                isCorrect: true,
              },
              { text: "A clustering algorithm", isCorrect: false },
              { text: "A classification algorithm", isCorrect: false },
              { text: "A data sampling technique", isCorrect: false },
            ],
            explanation:
              "PCA reduces features while preserving maximum variance, useful for visualization and noise reduction.",
          },
        ],
      },
      {
        level: "advanced",
        passingScore: 70,
        questions: [
          {
            id: "ds-a-1",
            question:
              "How would you handle class imbalance in a fraud detection model?",
            options: [
              {
                text: "SMOTE oversampling, class weights, precision-recall over accuracy, threshold tuning",
                isCorrect: true,
              },
              { text: "Remove minority class samples", isCorrect: false },
              { text: "Use only accuracy as the metric", isCorrect: false },
              { text: "Increase learning rate", isCorrect: false },
            ],
            explanation:
              "Fraud datasets are heavily imbalanced. Accuracy is misleading; use F1, AUC-PR, and resampling strategies.",
          },
          {
            id: "ds-a-2",
            question: "What is the bias-variance tradeoff?",
            options: [
              {
                text: "High bias = underfitting; high variance = overfitting; goal is to balance both",
                isCorrect: true,
              },
              {
                text: "A hardware optimization in neural networks",
                isCorrect: false,
              },
              { text: "A data cleaning technique", isCorrect: false },
              { text: "A feature selection method", isCorrect: false },
            ],
            explanation:
              "Understanding bias-variance helps choose model complexity and regularization strength.",
          },
          {
            id: "ds-a-3",
            question: "Explain SHAP values and their use.",
            options: [
              {
                text: "Game-theory-based feature attribution showing each feature's contribution to a prediction",
                isCorrect: true,
              },
              { text: "A clustering distance metric", isCorrect: false },
              {
                text: "A neural network activation function",
                isCorrect: false,
              },
              { text: "A hyperparameter tuning method", isCorrect: false },
            ],
            explanation:
              "SHAP values provide model-agnostic, consistent feature importance for both local and global explanations.",
          },
          {
            id: "ds-a-4",
            question: "What is concept drift in ML models?",
            options: [
              {
                text: "The statistical properties of the target variable change over time, degrading model performance",
                isCorrect: true,
              },
              { text: "A model training bug", isCorrect: false },
              {
                text: "Feature scaling shifting between datasets",
                isCorrect: false,
              },
              { text: "GPU memory overflow during training", isCorrect: false },
            ],
            explanation:
              "Concept drift requires model monitoring and periodic retraining to maintain performance in production.",
          },
          {
            id: "ds-a-5",
            question:
              "What is A/B testing and how is statistical significance determined?",
            options: [
              {
                text: "Controlled experiment comparing two variants; significance via p-value < 0.05 or confidence interval",
                isCorrect: true,
              },
              { text: "A model comparison technique", isCorrect: false },
              { text: "A feature engineering approach", isCorrect: false },
              { text: "A data labeling method", isCorrect: false },
            ],
            explanation:
              "A/B tests require sufficient sample size (power analysis) and correct statistical testing to avoid false positives.",
          },
        ],
      },
    ],
    interviewPrep: [
      {
        level: "basic",
        questions: [
          {
            id: "ds-ib-1",
            question: "Walk me through your data science project workflow.",
            talkingPoints: [
              "Define problem → gather data → EDA → feature engineering → modeling → evaluation → deployment",
              "Emphasize iterative nature and domain understanding",
              "Mention stakeholder communication at each stage",
            ],
            keywords: [
              "CRISP-DM",
              "EDA",
              "feature engineering",
              "model evaluation",
              "deployment",
            ],
          },
          {
            id: "ds-ib-2",
            question:
              "What is the difference between correlation and causation?",
            talkingPoints: [
              "Correlation: two variables move together, doesn't imply cause",
              "Causation: one variable directly influences the other",
              "Classic example: ice cream sales and drowning rates both rise in summer (common cause: heat)",
            ],
            keywords: [
              "correlation",
              "causation",
              "confounding variables",
              "statistical significance",
            ],
          },
          {
            id: "ds-ib-3",
            question: "How do you handle missing data?",
            talkingPoints: [
              "Identify pattern: MCAR, MAR, MNAR",
              "Strategies: drop rows/columns, mean/median/mode imputation, model-based imputation",
              "Consider domain knowledge — sometimes 'missing' is informative",
            ],
            keywords: [
              "missing data",
              "imputation",
              "MCAR",
              "mean imputation",
              "KNN imputation",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "ds-ii-1",
            question: "How would you select features for a predictive model?",
            talkingPoints: [
              "Filter methods: correlation, chi-square, mutual information",
              "Wrapper methods: RFE (Recursive Feature Elimination)",
              "Embedded methods: Lasso regularization, tree feature importance",
            ],
            keywords: [
              "feature selection",
              "RFE",
              "Lasso",
              "mutual information",
              "dimensionality reduction",
            ],
          },
          {
            id: "ds-ii-2",
            question:
              "Explain gradient boosting and how it differs from random forests.",
            talkingPoints: [
              "Random forest: parallel ensemble of independent trees (bagging)",
              "Gradient boosting: sequential trees, each correcting previous errors",
              "GB typically better accuracy; RF faster to train and less prone to overfitting",
            ],
            keywords: [
              "gradient boosting",
              "XGBoost",
              "random forest",
              "bagging",
              "boosting",
              "ensemble",
            ],
          },
          {
            id: "ds-ii-3",
            question: "How do you evaluate a regression model?",
            talkingPoints: [
              "MAE: average absolute error, interpretable",
              "RMSE: penalizes large errors more, sensitive to outliers",
              "R²: proportion of variance explained; adjusted R² for multiple features",
            ],
            keywords: [
              "MAE",
              "RMSE",
              "R-squared",
              "regression metrics",
              "residuals",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "ds-ia-1",
            question:
              "How would you deploy a machine learning model to production?",
            talkingPoints: [
              "Containerize with Docker, expose via REST API (FastAPI/Flask)",
              "Set up CI/CD pipeline for model retraining and deployment",
              "Monitor for data drift, performance degradation; implement rollback strategy",
            ],
            keywords: [
              "MLOps",
              "Docker",
              "FastAPI",
              "model monitoring",
              "CI/CD",
              "drift detection",
            ],
          },
          {
            id: "ds-ia-2",
            question:
              "Describe your approach to building a recommendation system.",
            talkingPoints: [
              "Collaborative filtering (user-user, item-item) vs content-based vs hybrid",
              "Matrix factorization (SVD, ALS) for scalability",
              "Cold start problem: use content-based for new users/items",
            ],
            keywords: [
              "collaborative filtering",
              "content-based",
              "matrix factorization",
              "cold start",
              "recommendation",
            ],
          },
          {
            id: "ds-ia-3",
            question: "How do you ensure fairness in an ML model?",
            talkingPoints: [
              "Audit training data for representation bias",
              "Evaluate metrics disaggregated by demographic groups",
              "Use fairness-aware algorithms or post-hoc debiasing techniques",
            ],
            keywords: [
              "model fairness",
              "bias",
              "algorithmic fairness",
              "demographic parity",
              "disparate impact",
            ],
          },
        ],
      },
    ],
  },

  "bi-developer": {
    freeCourses: [
      {
        name: "Microsoft Power BI Fundamentals",
        url: "https://learn.microsoft.com/en-us/training/paths/get-started-power-bi/",
        provider: "Microsoft",
        platform: "Microsoft Learn",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Tableau Desktop Specialist Free Training",
        url: "https://www.tableau.com/learn/training/elearning",
        provider: "Tableau",
        platform: "Tableau eLearning",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Power BI in Hindi",
        url: "https://www.youtube.com/results?search_query=power+bi+hindi+tutorial",
        provider: "YouTube",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "Power BI Telugu Tutorial",
        url: "https://www.youtube.com/results?search_query=power+bi+telugu+tutorial",
        provider: "YouTube",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "SQL for BI Developers – Mode Analytics",
        url: "https://mode.com/sql-tutorial/",
        provider: "Mode Analytics",
        platform: "Mode",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Data Visualization with Tableau – Coursera",
        url: "https://www.coursera.org/specializations/data-visualization",
        provider: "UC Davis",
        platform: "Coursera",
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
            id: "bid-b-1",
            question: "What does OLAP stand for?",
            options: [
              { text: "Online Analytical Processing", isCorrect: true },
              {
                text: "Offline Logical Application Processing",
                isCorrect: false,
              },
              { text: "Online Application Layer Protocol", isCorrect: false },
              {
                text: "Operational Language Access Protocol",
                isCorrect: false,
              },
            ],
            explanation:
              "OLAP enables multi-dimensional analytical queries, the foundation of BI tools.",
          },
          {
            id: "bid-b-2",
            question: "What is a star schema?",
            options: [
              {
                text: "A data model with a central fact table surrounded by dimension tables",
                isCorrect: true,
              },
              { text: "A type of chart in Tableau", isCorrect: false },
              { text: "A backup strategy in SQL Server", isCorrect: false },
              { text: "A Power BI visualization type", isCorrect: false },
            ],
            explanation:
              "Star schema is the most common dimensional model used in data warehouses and BI solutions.",
          },
          {
            id: "bid-b-3",
            question: "What is a KPI in BI context?",
            options: [
              {
                text: "Key Performance Indicator — a measurable value showing business objective achievement",
                isCorrect: true,
              },
              { text: "Knowledge Processing Interface", isCorrect: false },
              { text: "Kernel Performance Index", isCorrect: false },
              { text: "Key Programming Instruction", isCorrect: false },
            ],
            explanation:
              "KPIs are the core metrics that BI dashboards are designed to track and communicate.",
          },
          {
            id: "bid-b-4",
            question: "What is a calculated measure in Power BI?",
            options: [
              {
                text: "A DAX expression that computes an aggregate value dynamically based on filters",
                isCorrect: true,
              },
              { text: "A fixed number entered manually", isCorrect: false },
              { text: "A SQL stored procedure result", isCorrect: false },
              { text: "A column copied from Excel", isCorrect: false },
            ],
            explanation:
              "DAX measures are evaluated in the context of report filters and slicers.",
          },
          {
            id: "bid-b-5",
            question:
              "What is the difference between a dimension and a fact in a data warehouse?",
            options: [
              {
                text: "Dimensions describe context (who, what, where); facts contain measurable numeric values",
                isCorrect: true,
              },
              {
                text: "Dimensions store numbers; facts store text",
                isCorrect: false,
              },
              { text: "They are the same thing", isCorrect: false },
              {
                text: "Facts are stored in Excel; dimensions in SQL",
                isCorrect: false,
              },
            ],
            explanation:
              "Fact tables hold metrics (sales, quantity); dimension tables provide descriptive attributes.",
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "bid-i-1",
            question: "What is row-level security (RLS) in Power BI?",
            options: [
              {
                text: "Restricting data visibility per user role at the row level within reports",
                isCorrect: true,
              },
              { text: "Password-protecting a Power BI file", isCorrect: false },
              { text: "Encrypting database columns", isCorrect: false },
              { text: "A SQL Server replication feature", isCorrect: false },
            ],
            explanation:
              "RLS allows a single report to show different users only the data they are authorized to see.",
          },
          {
            id: "bid-i-2",
            question: "What does DAX stand for?",
            options: [
              {
                text: "Data Analysis Expressions — formula language used in Power BI and SSAS",
                isCorrect: true,
              },
              { text: "Dynamic Application Extension", isCorrect: false },
              { text: "Database Access XML", isCorrect: false },
              { text: "Direct Analytics Expression", isCorrect: false },
            ],
            explanation:
              "DAX is the formula language used to create calculated columns, measures, and tables in Power BI.",
          },
          {
            id: "bid-i-3",
            question: "What is a slowly changing dimension Type 2 (SCD2)?",
            options: [
              {
                text: "Adding a new row with new values and marking old row inactive, preserving history",
                isCorrect: true,
              },
              { text: "Updating the existing row in place", isCorrect: false },
              {
                text: "Deleting and recreating the dimension",
                isCorrect: false,
              },
              {
                text: "Storing changes in a separate audit table",
                isCorrect: false,
              },
            ],
            explanation:
              "SCD Type 2 preserves full history by adding new rows with effective date/flag columns.",
          },
          {
            id: "bid-i-4",
            question: "What is the purpose of a data model in Power BI?",
            options: [
              {
                text: "Defining relationships between tables so DAX measures aggregate correctly across tables",
                isCorrect: true,
              },
              { text: "Setting color themes for reports", isCorrect: false },
              { text: "Connecting to live databases", isCorrect: false },
              {
                text: "Publishing reports to Power BI Service",
                isCorrect: false,
              },
            ],
            explanation:
              "The data model defines cardinality and join relationships critical for correct measure calculations.",
          },
          {
            id: "bid-i-5",
            question:
              "When would you use DirectQuery mode in Power BI instead of Import?",
            options: [
              {
                text: "When data is very large or must be real-time; queries go live to the source",
                isCorrect: true,
              },
              {
                text: "When you want faster report performance",
                isCorrect: false,
              },
              { text: "When the dataset fits in RAM", isCorrect: false },
              { text: "When using Excel data sources", isCorrect: false },
            ],
            explanation:
              "DirectQuery always shows fresh data at the cost of query speed; Import is faster but requires refresh.",
          },
        ],
      },
      {
        level: "advanced",
        passingScore: 70,
        questions: [
          {
            id: "bid-a-1",
            question: "What is context transition in DAX?",
            options: [
              {
                text: "CALCULATE converts row context into an equivalent filter context for measure evaluation",
                isCorrect: true,
              },
              { text: "Switching report pages in Power BI", isCorrect: false },
              { text: "Changing data source connections", isCorrect: false },
              { text: "A Power Query transformation step", isCorrect: false },
            ],
            explanation:
              "Context transition is a core DAX concept where CALCULATE wraps a row context into a filter context.",
          },
          {
            id: "bid-a-2",
            question: "How do you optimize a slow Power BI report?",
            options: [
              {
                text: "Reduce cardinality, use aggregations, avoid calculated columns vs measures, use DAX Studio to profile",
                isCorrect: true,
              },
              { text: "Add more visuals to the page", isCorrect: false },
              { text: "Switch to DirectQuery mode", isCorrect: false },
              { text: "Increase dataset refresh frequency", isCorrect: false },
            ],
            explanation:
              "Performance tuning requires DAX Studio analysis, model optimization, and avoiding expensive patterns.",
          },
          {
            id: "bid-a-3",
            question: "What is composite model in Power BI?",
            options: [
              {
                text: "Combining Import and DirectQuery tables in a single model for flexibility and performance",
                isCorrect: true,
              },
              { text: "Merging two Power BI files", isCorrect: false },
              { text: "Using multiple visuals on one page", isCorrect: false },
              {
                text: "Connecting Power BI to multiple workspaces",
                isCorrect: false,
              },
            ],
            explanation:
              "Composite models let you use Import for small tables (fast) and DirectQuery for large/live tables.",
          },
          {
            id: "bid-a-4",
            question: "What is the Tabular Object Model (TOM) used for?",
            options: [
              {
                text: "Programmatically managing SSAS/Power BI dataset objects via .NET or PowerShell",
                isCorrect: true,
              },
              {
                text: "A visualization framework in Tableau",
                isCorrect: false,
              },
              { text: "A data ingestion protocol", isCorrect: false },
              { text: "A Power Query function library", isCorrect: false },
            ],
            explanation:
              "TOM enables automated deployment, metadata scripting, and ALM for enterprise BI solutions.",
          },
          {
            id: "bid-a-5",
            question: "How do incremental refresh policies work in Power BI?",
            options: [
              {
                text: "Only new/changed data within a defined range window is refreshed, reducing refresh time and load",
                isCorrect: true,
              },
              {
                text: "The entire dataset is deleted and reloaded daily",
                isCorrect: false,
              },
              {
                text: "Visuals are re-rendered without loading new data",
                isCorrect: false,
              },
              {
                text: "A Power Automate flow triggers the refresh",
                isCorrect: false,
              },
            ],
            explanation:
              "Incremental refresh uses RangeStart/RangeEnd parameters to partition data and refresh only recent slices.",
          },
        ],
      },
    ],
    interviewPrep: [
      {
        level: "basic",
        questions: [
          {
            id: "bid-ib-1",
            question:
              "What is the difference between Power BI Desktop and Power BI Service?",
            talkingPoints: [
              "Desktop: authoring tool for building reports and data models (free)",
              "Service: cloud platform for sharing, collaboration, and scheduled refresh (Pro/Premium license)",
              "Publish from Desktop to Service; mobile apps consume Service reports",
            ],
            keywords: [
              "Power BI Desktop",
              "Power BI Service",
              "publishing",
              "sharing",
              "collaboration",
            ],
          },
          {
            id: "bid-ib-2",
            question:
              "Explain the difference between measures and calculated columns in Power BI.",
            talkingPoints: [
              "Calculated column: evaluated row by row at data refresh, stored in memory",
              "Measure: evaluated dynamically at query time based on filter context",
              "Prefer measures for aggregations — they don't bloat model size",
            ],
            keywords: [
              "DAX",
              "calculated column",
              "measure",
              "filter context",
              "row context",
            ],
          },
          {
            id: "bid-ib-3",
            question: "What is the role of Power Query in BI development?",
            talkingPoints: [
              "ETL layer: connect, clean, transform data before loading into model",
              "M language underpins transformations",
              "Combine multiple sources, handle nulls, pivot/unpivot, merge queries",
            ],
            keywords: [
              "Power Query",
              "M language",
              "data transformation",
              "ETL",
              "data preparation",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "bid-ii-1",
            question:
              "How do you design an efficient data model for a large-scale BI solution?",
            talkingPoints: [
              "Star/snowflake schema with clear fact and dimension separation",
              "Minimize model size: remove unused columns, use integer keys",
              "Define relationships correctly: avoid many-to-many where possible",
            ],
            keywords: [
              "star schema",
              "data model",
              "cardinality",
              "relationships",
              "model optimization",
            ],
          },
          {
            id: "bid-ii-2",
            question:
              "Explain how you would implement row-level security for a national sales dashboard.",
            talkingPoints: [
              "Create roles in Power BI Desktop filtered by region/salesperson",
              "Use USERNAME() or USERPRINCIPALNAME() DAX function for dynamic RLS",
              "Test with 'View As Role' before publishing",
            ],
            keywords: [
              "RLS",
              "row-level security",
              "DAX",
              "USERPRINCIPALNAME",
              "dynamic security",
            ],
          },
          {
            id: "bid-ii-3",
            question: "What is the importance of a date table in Power BI?",
            talkingPoints: [
              "Required for time intelligence functions (DATEADD, SAMEPERIODLASTYEAR, etc.)",
              "Must be marked as a date table with continuous date range",
              "Enables year-over-year, MTD, QTD analysis",
            ],
            keywords: [
              "date table",
              "time intelligence",
              "DAX",
              "fiscal calendar",
              "SAMEPERIODLASTYEAR",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "bid-ia-1",
            question:
              "How would you architect an enterprise-grade Power BI deployment?",
            talkingPoints: [
              "Centralized datasets in Premium workspaces with certified datasets",
              "ALM: separate Dev/Test/Prod workspaces with deployment pipelines",
              "Gateway for on-premise data; XMLA endpoint for external tool access",
            ],
            keywords: [
              "Power BI Premium",
              "ALM",
              "deployment pipelines",
              "XMLA endpoint",
              "enterprise BI",
            ],
          },
          {
            id: "bid-ia-2",
            question: "Describe a complex DAX scenario you have solved.",
            talkingPoints: [
              "Example: running totals, ranking within categories, or dynamic segmentation",
              "Explain filter context manipulation and CALCULATE usage",
              "Use RANKX, TOPN, SELECTEDVALUE, or SWITCH for advanced scenarios",
            ],
            keywords: [
              "DAX",
              "CALCULATE",
              "RANKX",
              "TOPN",
              "filter context",
              "advanced DAX",
            ],
          },
          {
            id: "bid-ia-3",
            question:
              "How do you govern and maintain a large Power BI environment?",
            talkingPoints: [
              "Activity logs and audit logs via Admin API for usage monitoring",
              "Dataset lineage to understand report dependencies",
              "Automated testing with Tabular Editor and Best Practice Analyzer",
            ],
            keywords: [
              "Power BI governance",
              "audit logs",
              "lineage",
              "Tabular Editor",
              "Best Practice Analyzer",
            ],
          },
        ],
      },
    ],
  },

  "bi-analyst": {
    freeCourses: [
      {
        name: "Google Data Analytics Certificate",
        url: "https://www.coursera.org/professional-certificates/google-data-analytics",
        provider: "Google",
        platform: "Coursera",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Power BI for Beginners",
        url: "https://learn.microsoft.com/en-us/training/paths/get-started-power-bi/",
        provider: "Microsoft",
        platform: "Microsoft Learn",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Business Analytics in Hindi",
        url: "https://www.youtube.com/results?search_query=business+analytics+hindi",
        provider: "YouTube",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "Data Analytics Telugu Tutorial",
        url: "https://www.youtube.com/results?search_query=data+analytics+telugu",
        provider: "YouTube",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "Excel for Data Analysis – Coursera",
        url: "https://www.coursera.org/learn/excel-data-analysis",
        provider: "Duke University",
        platform: "Coursera",
        language: "English",
        level: "Beginner",
      },
      {
        name: "SQL Tutorial – Mode Analytics",
        url: "https://mode.com/sql-tutorial/",
        provider: "Mode Analytics",
        platform: "Mode",
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
            id: "bia-b-1",
            question: "What is the primary purpose of a BI analyst?",
            options: [
              {
                text: "Analyze business data to provide actionable insights for decision-making",
                isCorrect: true,
              },
              {
                text: "Write backend APIs for the analytics platform",
                isCorrect: false,
              },
              { text: "Design database schemas", isCorrect: false },
              { text: "Manage cloud infrastructure", isCorrect: false },
            ],
            explanation:
              "BI analysts bridge business questions and data to produce insights that drive decisions.",
          },
          {
            id: "bia-b-2",
            question: "What is a pivot table?",
            options: [
              {
                text: "An Excel/BI tool feature to summarize, aggregate, and cross-tabulate data",
                isCorrect: true,
              },
              { text: "A database index type", isCorrect: false },
              { text: "A SQL JOIN operation", isCorrect: false },
              { text: "A chart type in Tableau", isCorrect: false },
            ],
            explanation:
              "Pivot tables let analysts quickly group and aggregate data across multiple dimensions.",
          },
          {
            id: "bia-b-3",
            question: "Which chart is best for showing trend over time?",
            options: [
              { text: "Line chart", isCorrect: true },
              { text: "Pie chart", isCorrect: false },
              { text: "Scatter plot", isCorrect: false },
              { text: "Histogram", isCorrect: false },
            ],
            explanation:
              "Line charts effectively communicate continuous data changes over a time axis.",
          },
          {
            id: "bia-b-4",
            question: "What SQL clause is used to filter grouped results?",
            options: [
              { text: "HAVING", isCorrect: true },
              { text: "WHERE", isCorrect: false },
              { text: "GROUP BY", isCorrect: false },
              { text: "ORDER BY", isCorrect: false },
            ],
            explanation:
              "HAVING filters rows after GROUP BY aggregation; WHERE filters before aggregation.",
          },
          {
            id: "bia-b-5",
            question: "What does a bar chart compare?",
            options: [
              {
                text: "Categorical values across different groups",
                isCorrect: true,
              },
              { text: "Data distribution frequency", isCorrect: false },
              { text: "Correlation between two variables", isCorrect: false },
              { text: "Proportion of a whole", isCorrect: false },
            ],
            explanation:
              "Bar charts are ideal for comparing discrete categories with clear visual length encoding.",
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "bia-i-1",
            question: "What is a funnel analysis?",
            options: [
              {
                text: "Tracking user progression through sequential steps to identify drop-off points",
                isCorrect: true,
              },
              { text: "A financial forecasting method", isCorrect: false },
              { text: "A data ingestion pipeline", isCorrect: false },
              { text: "A type of A/B test", isCorrect: false },
            ],
            explanation:
              "Funnel analysis is commonly used for e-commerce checkout, onboarding, and conversion optimization.",
          },
          {
            id: "bia-i-2",
            question: "What is cohort analysis?",
            options: [
              {
                text: "Grouping users by shared characteristic/time period to track behavior over time",
                isCorrect: true,
              },
              { text: "Comparing two marketing campaigns", isCorrect: false },
              { text: "Segmenting customers by geography", isCorrect: false },
              { text: "Analyzing product defects by batch", isCorrect: false },
            ],
            explanation:
              "Cohort analysis reveals retention patterns and how user behavior evolves after a specific event.",
          },
          {
            id: "bia-i-3",
            question: "What is data blending in Tableau?",
            options: [
              {
                text: "Combining data from multiple sources in a single visualization without a database join",
                isCorrect: true,
              },
              { text: "Merging two Tableau workbooks", isCorrect: false },
              { text: "Applying color gradients to a chart", isCorrect: false },
              { text: "Exporting data to Excel", isCorrect: false },
            ],
            explanation:
              "Data blending allows joining data from different databases/file sources at the visualization level.",
          },
          {
            id: "bia-i-4",
            question:
              "What is the difference between drill-down and drill-through in BI?",
            options: [
              {
                text: "Drill-down shows lower hierarchy levels in same report; drill-through navigates to a detail report",
                isCorrect: true,
              },
              { text: "They are the same feature", isCorrect: false },
              {
                text: "Drill-down filters by date; drill-through filters by category",
                isCorrect: false,
              },
              {
                text: "Drill-through is only available in Tableau",
                isCorrect: false,
              },
            ],
            explanation:
              "Both improve report interactivity; drill-through typically opens a new detailed report page.",
          },
          {
            id: "bia-i-5",
            question: "What is churn analysis?",
            options: [
              {
                text: "Identifying customers likely to stop using a product or service",
                isCorrect: true,
              },
              {
                text: "Analyzing product manufacturing defects",
                isCorrect: false,
              },
              { text: "Tracking employee turnover", isCorrect: false },
              { text: "Measuring server downtime", isCorrect: false },
            ],
            explanation:
              "Churn analysis helps businesses identify at-risk customers and implement retention strategies.",
          },
        ],
      },
      {
        level: "advanced",
        passingScore: 70,
        questions: [
          {
            id: "bia-a-1",
            question:
              "How would you build a customer segmentation model for a retail business?",
            options: [
              {
                text: "RFM analysis (Recency, Frequency, Monetary) combined with K-means clustering",
                isCorrect: true,
              },
              {
                text: "Using a simple age and gender filter",
                isCorrect: false,
              },
              { text: "Sorting customers by revenue alone", isCorrect: false },
              { text: "Applying a linear regression model", isCorrect: false },
            ],
            explanation:
              "RFM segmentation is a proven framework; K-means adds statistical rigor to segment discovery.",
          },
          {
            id: "bia-a-2",
            question: "How do you measure the ROI of a BI initiative?",
            options: [
              {
                text: "Compare decision quality improvement, cost savings from automation, and revenue impact vs BI investment",
                isCorrect: true,
              },
              {
                text: "Count the number of dashboards built",
                isCorrect: false,
              },
              { text: "Measure report load times", isCorrect: false },
              { text: "Track number of SQL queries saved", isCorrect: false },
            ],
            explanation:
              "BI ROI requires quantifying business outcomes — not just technical metrics.",
          },
          {
            id: "bia-a-3",
            question:
              "What is predictive analytics and how does it differ from descriptive analytics?",
            options: [
              {
                text: "Descriptive: what happened; predictive: uses statistical models to forecast what will happen",
                isCorrect: true,
              },
              {
                text: "Predictive is just filtering by future dates",
                isCorrect: false,
              },
              {
                text: "They are the same — both use historical data",
                isCorrect: false,
              },
              {
                text: "Predictive requires real-time data only",
                isCorrect: false,
              },
            ],
            explanation:
              "Descriptive analytics informs; predictive analytics forecasts using regression, ML, or time series.",
          },
          {
            id: "bia-a-4",
            question:
              "How do you handle conflicting data from multiple source systems in a BI report?",
            options: [
              {
                text: "Establish a single source of truth, document lineage, and align with business on definitions",
                isCorrect: true,
              },
              {
                text: "Show all versions and let users decide",
                isCorrect: false,
              },
              { text: "Use the most recent source always", isCorrect: false },
              { text: "Average the values from all sources", isCorrect: false },
            ],
            explanation:
              "Data governance and clear metric definitions prevent conflicting numbers that erode trust.",
          },
          {
            id: "bia-a-5",
            question:
              "What is Monte Carlo simulation used for in business analytics?",
            options: [
              {
                text: "Modeling probability distributions of outcomes under uncertainty using random sampling",
                isCorrect: true,
              },
              { text: "A type of A/B test for marketing", isCorrect: false },
              { text: "A SQL optimization technique", isCorrect: false },
              { text: "A Tableau chart type", isCorrect: false },
            ],
            explanation:
              "Monte Carlo is used for financial risk modeling, project planning, and scenario analysis.",
          },
        ],
      },
    ],
    interviewPrep: [
      {
        level: "basic",
        questions: [
          {
            id: "bia-ib-1",
            question:
              "How do you approach a new business analytics requirement?",
            talkingPoints: [
              "Understand the business question first — what decision will this analysis support?",
              "Identify data sources and assess quality",
              "Agree on metrics and KPI definitions before building",
            ],
            keywords: [
              "requirements gathering",
              "KPI definition",
              "data sources",
              "stakeholder alignment",
            ],
          },
          {
            id: "bia-ib-2",
            question: "What is the difference between a metric and a KPI?",
            talkingPoints: [
              "Metric: any measurable value (e.g., page views)",
              "KPI: a strategic metric tied to a business objective (e.g., monthly conversion rate > 5%)",
              "Not all metrics are KPIs; KPIs require a target and owner",
            ],
            keywords: [
              "metric",
              "KPI",
              "business objective",
              "target",
              "measurement",
            ],
          },
          {
            id: "bia-ib-3",
            question:
              "Describe a dashboard you have built and the impact it had.",
            talkingPoints: [
              "Describe the business problem, data sources, and key metrics shown",
              "Explain design choices: which chart types, why",
              "Quantify impact: time saved, decisions improved",
            ],
            keywords: [
              "dashboard design",
              "data visualization",
              "business impact",
              "stakeholder communication",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "bia-ii-1",
            question:
              "How do you ensure accuracy of a BI report before publishing?",
            talkingPoints: [
              "Cross-validate against source system totals",
              "Peer review with another analyst or business user",
              "Document data lineage and transformation logic",
            ],
            keywords: [
              "data validation",
              "accuracy",
              "QA",
              "cross-validation",
              "data lineage",
            ],
          },
          {
            id: "bia-ii-2",
            question:
              "How would you present an analysis to a non-technical executive?",
            talkingPoints: [
              "Lead with the insight/recommendation, not the methodology",
              "Use simple charts — avoid complexity",
              "Anticipate 'so what' — every slide should answer a business question",
            ],
            keywords: [
              "executive communication",
              "data storytelling",
              "visualization",
              "insight presentation",
            ],
          },
          {
            id: "bia-ii-3",
            question: "What is a leading vs lagging indicator?",
            talkingPoints: [
              "Lagging: measures past performance (e.g., revenue last quarter)",
              "Leading: predicts future performance (e.g., sales pipeline value)",
              "Good dashboards include both to support proactive decisions",
            ],
            keywords: [
              "leading indicator",
              "lagging indicator",
              "predictive",
              "KPI",
              "business performance",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "bia-ia-1",
            question:
              "How would you build a self-service analytics culture in an organization?",
            talkingPoints: [
              "Certified datasets with clear documentation in a data catalog",
              "Training programs and champions network",
              "Governance: defined roles for what self-service vs IT-managed",
            ],
            keywords: [
              "self-service BI",
              "data governance",
              "data catalog",
              "training",
              "enablement",
            ],
          },
          {
            id: "bia-ia-2",
            question:
              "Describe a time when your analysis changed a business decision.",
            talkingPoints: [
              "Quantify the insight: 'X% of revenue came from Y segment'",
              "Explain how the analysis countered an assumption",
              "Show business outcome: decision made, result measured",
            ],
            keywords: [
              "analytical impact",
              "data-driven decision",
              "business outcome",
              "insight storytelling",
            ],
          },
          {
            id: "bia-ia-3",
            question: "What emerging BI trends are shaping the industry?",
            talkingPoints: [
              "AI-augmented analytics: natural language queries, auto-insights",
              "Embedded analytics: BI inside operational applications",
              "Real-time dashboards and streaming analytics for operational use",
            ],
            keywords: [
              "AI analytics",
              "natural language query",
              "embedded analytics",
              "real-time BI",
              "augmented analytics",
            ],
          },
        ],
      },
    ],
  },

  "database-administrator": {
    freeCourses: [
      {
        name: "Database Administration with MySQL",
        url: "https://www.coursera.org/learn/intro-sql",
        provider: "University of Michigan",
        platform: "Coursera",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Oracle DBA Training – Oracle University (Free Tutorials)",
        url: "https://education.oracle.com/free-resources/",
        provider: "Oracle",
        platform: "Oracle University",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "SQL and Database Administration Hindi",
        url: "https://www.youtube.com/results?search_query=database+administration+hindi",
        provider: "YouTube",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "Database Administration Telugu Tutorial",
        url: "https://www.youtube.com/results?search_query=database+administration+telugu",
        provider: "YouTube",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "PostgreSQL Tutorial",
        url: "https://www.postgresqltutorial.com/",
        provider: "PostgreSQL Tutorial",
        platform: "Web",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Microsoft Azure Database Administrator Associate – Free Learning Path",
        url: "https://learn.microsoft.com/en-us/certifications/azure-database-administrator-associate/",
        provider: "Microsoft",
        platform: "Microsoft Learn",
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
            id: "dba-b-1",
            question: "What is normalization in a database?",
            options: [
              {
                text: "Organizing data to reduce redundancy and improve integrity through normal forms",
                isCorrect: true,
              },
              {
                text: "Converting data to normal distribution",
                isCorrect: false,
              },
              { text: "Compressing database files", isCorrect: false },
              { text: "A backup restoration process", isCorrect: false },
            ],
            explanation:
              "Normalization (1NF, 2NF, 3NF) eliminates redundancy and ensures data consistency.",
          },
          {
            id: "dba-b-2",
            question: "What is a primary key?",
            options: [
              {
                text: "A column or set of columns that uniquely identifies each row in a table",
                isCorrect: true,
              },
              {
                text: "The most important column in a table",
                isCorrect: false,
              },
              { text: "A foreign key reference", isCorrect: false },
              { text: "An index on the first column", isCorrect: false },
            ],
            explanation:
              "Primary keys enforce entity integrity — every row must be uniquely identifiable.",
          },
          {
            id: "dba-b-3",
            question: "What is the purpose of an index in a database?",
            options: [
              {
                text: "Speed up data retrieval by creating a lookup structure for query optimization",
                isCorrect: true,
              },
              { text: "Enforce data integrity constraints", isCorrect: false },
              { text: "Store computed column values", isCorrect: false },
              { text: "Back up table data automatically", isCorrect: false },
            ],
            explanation:
              "Indexes trade storage space for faster read performance, critical for query optimization.",
          },
          {
            id: "dba-b-4",
            question: "What does ACID stand for in database transactions?",
            options: [
              {
                text: "Atomicity, Consistency, Isolation, Durability",
                isCorrect: true,
              },
              { text: "Automated, Cached, Indexed, Durable", isCorrect: false },
              {
                text: "Access, Control, Integrity, Distribution",
                isCorrect: false,
              },
              {
                text: "Async, Consistent, Independent, Durable",
                isCorrect: false,
              },
            ],
            explanation:
              "ACID properties guarantee reliable transaction processing in relational databases.",
          },
          {
            id: "dba-b-5",
            question: "What is a database backup?",
            options: [
              {
                text: "A copy of database data used to restore after data loss or corruption",
                isCorrect: true,
              },
              { text: "A replica database for reporting", isCorrect: false },
              { text: "An archived transaction log", isCorrect: false },
              { text: "A database schema export", isCorrect: false },
            ],
            explanation:
              "Regular backups are the first line of defense against data loss and a core DBA responsibility.",
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "dba-i-1",
            question: "What is query plan analysis and why is it important?",
            options: [
              {
                text: "Examining the execution plan to understand how the database processes a query and identify bottlenecks",
                isCorrect: true,
              },
              {
                text: "Planning the database schema in advance",
                isCorrect: false,
              },
              { text: "Scheduling batch query jobs", isCorrect: false },
              {
                text: "Writing stored procedures efficiently",
                isCorrect: false,
              },
            ],
            explanation:
              "EXPLAIN/execution plans reveal full table scans, missing indexes, and join inefficiencies.",
          },
          {
            id: "dba-i-2",
            question: "What is database replication?",
            options: [
              {
                text: "Automatically copying data from a primary database to one or more replica databases",
                isCorrect: true,
              },
              { text: "Creating a copy of the schema only", isCorrect: false },
              { text: "Backing up data to S3", isCorrect: false },
              { text: "Migrating to a new database engine", isCorrect: false },
            ],
            explanation:
              "Replication provides high availability, load balancing for reads, and disaster recovery.",
          },
          {
            id: "dba-i-3",
            question: "What is connection pooling?",
            options: [
              {
                text: "Reusing a set of pre-established database connections to reduce connection overhead",
                isCorrect: true,
              },
              {
                text: "Distributing queries across multiple databases",
                isCorrect: false,
              },
              { text: "Caching query results", isCorrect: false },
              { text: "A backup scheduling technique", isCorrect: false },
            ],
            explanation:
              "Connection pooling (PgBouncer, HikariCP) reduces latency by avoiding repeated connection setup.",
          },
          {
            id: "dba-i-4",
            question:
              "What is the difference between a clustered and non-clustered index?",
            options: [
              {
                text: "Clustered: data physically sorted by index key; non-clustered: separate lookup structure pointing to rows",
                isCorrect: true,
              },
              {
                text: "Clustered indexes are faster in all cases",
                isCorrect: false,
              },
              {
                text: "Non-clustered indexes don't need maintenance",
                isCorrect: false,
              },
              { text: "They are functionally identical", isCorrect: false },
            ],
            explanation:
              "A table can have only one clustered index (its physical order) but multiple non-clustered indexes.",
          },
          {
            id: "dba-i-5",
            question: "What is point-in-time recovery (PITR)?",
            options: [
              {
                text: "Restoring a database to any specific moment using base backup + transaction logs",
                isCorrect: true,
              },
              { text: "Recovering a single deleted row", isCorrect: false },
              {
                text: "Resetting a database to factory settings",
                isCorrect: false,
              },
              { text: "Recovering from a dropped index", isCorrect: false },
            ],
            explanation:
              "PITR leverages WAL/transaction logs to recover to a precise moment before data loss occurred.",
          },
        ],
      },
      {
        level: "advanced",
        passingScore: 70,
        questions: [
          {
            id: "dba-a-1",
            question:
              "How would you design a high-availability database architecture?",
            options: [
              {
                text: "Primary-replica replication with automatic failover, load balancing reads to replicas, and monitoring",
                isCorrect: true,
              },
              { text: "Increase storage on a single server", isCorrect: false },
              { text: "Use more frequent backups", isCorrect: false },
              {
                text: "Partition tables across more columns",
                isCorrect: false,
              },
            ],
            explanation:
              "HA requires replication, automatic failover (Patroni, MHA), and a tested runbook for failover events.",
          },
          {
            id: "dba-a-2",
            question: "What is database sharding?",
            options: [
              {
                text: "Horizontally partitioning data across multiple database instances for scalability beyond single-node limits",
                isCorrect: true,
              },
              {
                text: "Vertically splitting a table's columns",
                isCorrect: false,
              },
              {
                text: "Encrypting sensitive database columns",
                isCorrect: false,
              },
              { text: "Archiving old data to cold storage", isCorrect: false },
            ],
            explanation:
              "Sharding scales writes horizontally but introduces complexity in cross-shard queries and consistency.",
          },
          {
            id: "dba-a-3",
            question: "What is MVCC (Multi-Version Concurrency Control)?",
            options: [
              {
                text: "Maintaining multiple versions of rows to allow concurrent reads and writes without blocking each other",
                isCorrect: true,
              },
              { text: "A database replication protocol", isCorrect: false },
              { text: "A backup versioning system", isCorrect: false },
              { text: "A SQL query caching mechanism", isCorrect: false },
            ],
            explanation:
              "MVCC (used in PostgreSQL, Oracle) enables high concurrency by giving each transaction a consistent snapshot.",
          },
          {
            id: "dba-a-4",
            question: "How do you handle a production database outage?",
            options: [
              {
                text: "Immediate: assess, communicate status, invoke DR plan; fail over to replica; root cause analysis post-recovery",
                isCorrect: true,
              },
              { text: "Restart the database server first", isCorrect: false },
              {
                text: "Restore from last night's backup immediately",
                isCorrect: false,
              },
              { text: "Wait for the vendor to respond", isCorrect: false },
            ],
            explanation:
              "Incident response prioritizes communication and RTO; post-mortem prevents recurrence.",
          },
          {
            id: "dba-a-5",
            question:
              "What are the key differences between OLTP and OLAP database optimization?",
            options: [
              {
                text: "OLTP: optimize for concurrent short reads/writes, normalized; OLAP: optimize for complex analytical queries, denormalized/columnar",
                isCorrect: true,
              },
              { text: "OLTP is faster in all cases", isCorrect: false },
              { text: "OLAP is just OLTP with more storage", isCorrect: false },
              {
                text: "They require identical indexing strategies",
                isCorrect: false,
              },
            ],
            explanation:
              "OLTP needs low-latency transactions; OLAP needs scan-efficient queries — fundamentally different designs.",
          },
        ],
      },
    ],
    interviewPrep: [
      {
        level: "basic",
        questions: [
          {
            id: "dba-ib-1",
            question: "What are the most important responsibilities of a DBA?",
            talkingPoints: [
              "Backup and recovery planning",
              "Performance monitoring and query optimization",
              "Security: user access management, encryption, auditing",
            ],
            keywords: [
              "backup",
              "performance tuning",
              "security",
              "availability",
              "DBA responsibilities",
            ],
          },
          {
            id: "dba-ib-2",
            question:
              "How would you secure a database from unauthorized access?",
            talkingPoints: [
              "Principle of least privilege — grant only required permissions",
              "Encrypt data at rest and in transit (TLS)",
              "Audit logs and regular access reviews",
            ],
            keywords: [
              "least privilege",
              "encryption",
              "TLS",
              "audit",
              "access control",
            ],
          },
          {
            id: "dba-ib-3",
            question:
              "What is the difference between DELETE, TRUNCATE, and DROP?",
            talkingPoints: [
              "DELETE: removes rows, logged, can be rolled back, WHERE supported",
              "TRUNCATE: removes all rows fast, minimal logging, not easily rolled back",
              "DROP: removes entire table/object including structure",
            ],
            keywords: [
              "DELETE",
              "TRUNCATE",
              "DROP",
              "transaction",
              "DDL vs DML",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "dba-ii-1",
            question: "How do you investigate and resolve slow queries?",
            talkingPoints: [
              "Capture slow query log / pg_stat_statements",
              "Analyze execution plan for full table scans, missing indexes, bad join orders",
              "Apply targeted indexes, rewrite query, update statistics",
            ],
            keywords: [
              "slow query",
              "execution plan",
              "EXPLAIN",
              "indexing",
              "query optimization",
            ],
          },
          {
            id: "dba-ii-2",
            question: "Describe your database backup and recovery strategy.",
            talkingPoints: [
              "Full + incremental backups with defined RPO and RTO SLAs",
              "Store backups offsite/cloud; encrypt backups",
              "Test restoration monthly — an untested backup is not a backup",
            ],
            keywords: [
              "RPO",
              "RTO",
              "full backup",
              "incremental",
              "disaster recovery",
              "restore testing",
            ],
          },
          {
            id: "dba-ii-3",
            question:
              "What is database partitioning and when would you use it?",
            talkingPoints: [
              "Range, hash, or list partitioning to split large tables",
              "Improves query performance by partition pruning",
              "Easier archival: drop old partitions instead of deleting rows",
            ],
            keywords: [
              "partitioning",
              "range partition",
              "partition pruning",
              "archival",
              "large tables",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "dba-ia-1",
            question:
              "How would you plan and execute a zero-downtime database migration?",
            talkingPoints: [
              "Dual-write pattern: write to old and new DB simultaneously during migration",
              "Shadow reads to validate new DB produces same results",
              "Cut over with feature flag; monitor closely before decommissioning old DB",
            ],
            keywords: [
              "zero downtime",
              "dual-write",
              "shadow reads",
              "database migration",
              "cutover",
            ],
          },
          {
            id: "dba-ia-2",
            question: "How do you approach database capacity planning?",
            talkingPoints: [
              "Monitor growth trends: data size, QPS, connection counts over time",
              "Project 6–12 months ahead based on business growth plans",
              "Identify scaling triggers: scale-up thresholds and when to shard/archive",
            ],
            keywords: [
              "capacity planning",
              "growth trends",
              "scaling",
              "QPS",
              "storage forecasting",
            ],
          },
          {
            id: "dba-ia-3",
            question:
              "What is the CAP theorem and how does it influence database selection?",
            talkingPoints: [
              "CAP: Consistency, Availability, Partition Tolerance — can't have all three simultaneously",
              "RDBMS prioritize CP; many NoSQL systems prioritize AP",
              "Inform database choice based on which two properties the use case requires",
            ],
            keywords: [
              "CAP theorem",
              "consistency",
              "availability",
              "partition tolerance",
              "NoSQL vs RDBMS",
            ],
          },
        ],
      },
    ],
  },

  "data-architect": {
    freeCourses: [
      {
        name: "Data Warehouse Fundamentals – IBM",
        url: "https://www.coursera.org/learn/data-warehouse-bi-building-blocks",
        provider: "IBM",
        platform: "Coursera",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "Cloud Data Architecture on AWS",
        url: "https://aws.amazon.com/training/learn-about/data-analytics/",
        provider: "AWS",
        platform: "AWS Training",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "Data Architecture Hindi Tutorial",
        url: "https://www.youtube.com/results?search_query=data+architecture+hindi",
        provider: "YouTube",
        platform: "YouTube",
        language: "Hindi",
        level: "Intermediate",
      },
      {
        name: "Data Architecture Telugu Tutorial",
        url: "https://www.youtube.com/results?search_query=data+architecture+telugu",
        provider: "YouTube",
        platform: "YouTube",
        language: "Telugu",
        level: "Intermediate",
      },
      {
        name: "Google Cloud Professional Data Engineer Prep",
        url: "https://cloud.google.com/learn/training/data-ml",
        provider: "Google Cloud",
        platform: "Google Cloud Training",
        language: "English",
        level: "Advanced",
      },
      {
        name: "Snowflake University – Free Courses",
        url: "https://www.snowflake.com/snowflake-university/",
        provider: "Snowflake",
        platform: "Snowflake University",
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
            id: "da-b-1",
            question: "What is a data architecture?",
            options: [
              {
                text: "The overall design of an organization's data collection, storage, transformation, distribution, and use",
                isCorrect: true,
              },
              { text: "The layout of a database table", isCorrect: false },
              { text: "A UI design pattern", isCorrect: false },
              { text: "A cloud cost management plan", isCorrect: false },
            ],
            explanation:
              "Data architecture defines the blueprints for how an organization's data flows and is managed.",
          },
          {
            id: "da-b-2",
            question:
              "What is the difference between data at rest and data in motion?",
            options: [
              {
                text: "At rest: stored in databases/files; in motion: actively moving between systems (streaming, API calls)",
                isCorrect: true,
              },
              {
                text: "Data at rest is older data; data in motion is recent",
                isCorrect: false,
              },
              { text: "They are the same concept", isCorrect: false },
              {
                text: "Data at rest is in RAM; data in motion is on disk",
                isCorrect: false,
              },
            ],
            explanation:
              "Each state requires different security and processing approaches in architecture design.",
          },
          {
            id: "da-b-3",
            question: "What is a data catalog?",
            options: [
              {
                text: "A centralized inventory of data assets with metadata for discovery and governance",
                isCorrect: true,
              },
              { text: "A list of database tables", isCorrect: false },
              {
                text: "A product catalog stored in a database",
                isCorrect: false,
              },
              { text: "A SQL schema file", isCorrect: false },
            ],
            explanation:
              "Data catalogs (Collibra, Alation, Apache Atlas) enable data discovery and governance at scale.",
          },
          {
            id: "da-b-4",
            question:
              "What is the difference between a relational and a NoSQL database?",
            options: [
              {
                text: "Relational: structured tables with SQL; NoSQL: flexible schemas optimized for specific data models",
                isCorrect: true,
              },
              {
                text: "NoSQL is always faster than relational",
                isCorrect: false,
              },
              { text: "Relational databases can't scale", isCorrect: false },
              { text: "NoSQL doesn't support any queries", isCorrect: false },
            ],
            explanation:
              "NoSQL types (document, key-value, graph, column) each optimize for specific access patterns.",
          },
          {
            id: "da-b-5",
            question: "What is data governance?",
            options: [
              {
                text: "Policies, standards, and processes to ensure data quality, security, and compliance",
                isCorrect: true,
              },
              { text: "A cloud data storage policy", isCorrect: false },
              { text: "A SQL access control mechanism", isCorrect: false },
              { text: "An ETL pipeline design approach", isCorrect: false },
            ],
            explanation:
              "Data governance establishes accountability and trustworthiness of organizational data assets.",
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "da-i-1",
            question: "What is a data mesh architecture?",
            options: [
              {
                text: "Decentralized data ownership where domain teams own and publish their data as products",
                isCorrect: true,
              },
              {
                text: "A type of neural network architecture",
                isCorrect: false,
              },
              {
                text: "A mesh network topology for data centers",
                isCorrect: false,
              },
              { text: "A multi-cloud storage strategy", isCorrect: false },
            ],
            explanation:
              "Data mesh addresses central data team bottlenecks by distributing ownership to domain teams.",
          },
          {
            id: "da-i-2",
            question:
              "What is the difference between a data warehouse and a data lakehouse?",
            options: [
              {
                text: "Lakehouse combines lake storage flexibility with warehouse query performance and ACID support",
                isCorrect: true,
              },
              {
                text: "Lakehouse is just a smaller data warehouse",
                isCorrect: false,
              },
              {
                text: "Data warehouse is always on-premise; lakehouse is cloud only",
                isCorrect: false,
              },
              {
                text: "They serve completely different use cases and can't overlap",
                isCorrect: false,
              },
            ],
            explanation:
              "Lakehouses (Delta Lake, Apache Iceberg) bring reliability and performance to raw storage.",
          },
          {
            id: "da-i-3",
            question: "What is metadata management?",
            options: [
              {
                text: "Organizing and governing data about data — schemas, lineage, ownership, quality, and usage stats",
                isCorrect: true,
              },
              { text: "Managing file system permissions", isCorrect: false },
              { text: "Database index maintenance", isCorrect: false },
              { text: "API documentation management", isCorrect: false },
            ],
            explanation:
              "Rich metadata enables discoverability, lineage tracking, and trust in data assets.",
          },
          {
            id: "da-i-4",
            question: "What is Apache Iceberg and why is it significant?",
            options: [
              {
                text: "An open table format enabling ACID transactions, schema evolution, and time-travel on data lakes",
                isCorrect: true,
              },
              { text: "A stream processing engine", isCorrect: false },
              { text: "A cloud database service", isCorrect: false },
              { text: "A data visualization framework", isCorrect: false },
            ],
            explanation:
              "Iceberg solves data lake reliability problems and is becoming the industry standard open table format.",
          },
          {
            id: "da-i-5",
            question: "What is event-driven architecture?",
            options: [
              {
                text: "System design where services communicate via events on a message bus, enabling loose coupling",
                isCorrect: true,
              },
              {
                text: "An application that reacts to user UI events",
                isCorrect: false,
              },
              {
                text: "A calendar-based ETL scheduling approach",
                isCorrect: false,
              },
              { text: "A type of database trigger", isCorrect: false },
            ],
            explanation:
              "EDA enables real-time data flow and decoupled services, foundational for modern data platforms.",
          },
        ],
      },
      {
        level: "advanced",
        passingScore: 70,
        questions: [
          {
            id: "da-a-1",
            question:
              "How would you architect a modern data platform for a 500-person company?",
            options: [
              {
                text: "Ingestion (Kafka/Fivetran) → Lake (S3 + Iceberg) → Warehouse (Snowflake) → Semantics (dbt) → BI (Power BI/Tableau)",
                isCorrect: true,
              },
              {
                text: "A single Oracle database with all data",
                isCorrect: false,
              },
              {
                text: "Multiple independent Excel databases per team",
                isCorrect: false,
              },
              {
                text: "A Hadoop cluster with MapReduce jobs",
                isCorrect: false,
              },
            ],
            explanation:
              "Modern stacks separate concerns: ingest, store, transform, serve — each layer replaceable independently.",
          },
          {
            id: "da-a-2",
            question: "What are the four principles of data mesh?",
            options: [
              {
                text: "Domain ownership, data as product, self-serve platform, federated computational governance",
                isCorrect: true,
              },
              {
                text: "Centralized storage, unified ETL, shared schemas, global governance team",
                isCorrect: false,
              },
              { text: "Speed, scale, security, simplicity", isCorrect: false },
              {
                text: "Batch processing, streaming, analytics, reporting",
                isCorrect: false,
              },
            ],
            explanation:
              "Zhamak Dehghani's data mesh principles address organizational and technical scalability of data.",
          },
          {
            id: "da-a-3",
            question:
              "How do you evaluate and select a database technology for a new system?",
            options: [
              {
                text: "Assess access patterns, consistency needs, scale, team expertise, and total cost of ownership",
                isCorrect: true,
              },
              {
                text: "Always use the most popular database",
                isCorrect: false,
              },
              {
                text: "Choose the database the vendor recommends",
                isCorrect: false,
              },
              {
                text: "Use the same database as existing systems regardless of fit",
                isCorrect: false,
              },
            ],
            explanation:
              "Technology selection is use-case driven — read/write patterns, latency, scale, and team skills all matter.",
          },
          {
            id: "da-a-4",
            question: "What is semantic layer in a data platform?",
            options: [
              {
                text: "A business logic layer (dbt metrics, LookML) that defines metrics consistently above the physical data model",
                isCorrect: true,
              },
              {
                text: "The presentation layer of a BI dashboard",
                isCorrect: false,
              },
              {
                text: "Natural language processing of queries",
                isCorrect: false,
              },
              { text: "A data validation framework", isCorrect: false },
            ],
            explanation:
              "The semantic layer ensures 'revenue' means the same thing in every tool across the organization.",
          },
          {
            id: "da-a-5",
            question: "What is data observability and why is it critical?",
            options: [
              {
                text: "Monitoring data health — freshness, volume, schema changes, distribution anomalies — to detect issues proactively",
                isCorrect: true,
              },
              {
                text: "Monitoring server CPU and memory for databases",
                isCorrect: false,
              },
              { text: "A data catalog feature", isCorrect: false },
              {
                text: "Network latency monitoring between data centers",
                isCorrect: false,
              },
            ],
            explanation:
              "Data observability tools (Monte Carlo, Great Expectations) catch data quality issues before they reach downstream consumers.",
          },
        ],
      },
    ],
    interviewPrep: [
      {
        level: "basic",
        questions: [
          {
            id: "da-ib-1",
            question: "What principles guide good data architecture design?",
            talkingPoints: [
              "Separation of concerns: ingest, store, transform, serve independently",
              "Scalability by design: horizontal scaling, partitioning, right-sized components",
              "Governance built-in: lineage, quality checks, access control from the start",
            ],
            keywords: [
              "data architecture principles",
              "scalability",
              "separation of concerns",
              "data governance",
            ],
          },
          {
            id: "da-ib-2",
            question:
              "How do you approach data modeling for a new analytical domain?",
            talkingPoints: [
              "Understand business entities and how they relate",
              "Choose appropriate model: star schema for BI, normalized for operational systems",
              "Document definitions and grain of each fact table",
            ],
            keywords: [
              "data modeling",
              "star schema",
              "dimensional modeling",
              "grain",
              "fact table",
            ],
          },
          {
            id: "da-ib-3",
            question:
              "What is the role of a data architect vs a data engineer?",
            talkingPoints: [
              "Architect: designs the blueprint, standards, governance; strategic role",
              "Engineer: builds and operates the pipelines and systems; tactical implementation",
              "Architect sets the vision; engineer executes it",
            ],
            keywords: [
              "data architect",
              "data engineer",
              "architecture vs implementation",
              "strategy vs execution",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "da-ii-1",
            question:
              "How would you migrate a legacy on-premise data warehouse to the cloud?",
            talkingPoints: [
              "Assess current workloads: query patterns, data volumes, dependencies",
              "Lift-and-shift vs re-architect — often opportunity to modernize during migration",
              "Phased migration with dual-run period; validate parity before cutover",
            ],
            keywords: [
              "cloud migration",
              "data warehouse modernization",
              "lift and shift",
              "phased migration",
              "Snowflake",
              "BigQuery",
            ],
          },
          {
            id: "da-ii-2",
            question:
              "How do you design for GDPR/data privacy compliance in a data platform?",
            talkingPoints: [
              "Data classification: identify PII and sensitive data across all systems",
              "Implement access controls and audit logging for PII",
              "Right to erasure: design deletion capability (logical delete + purge in cold storage)",
            ],
            keywords: [
              "GDPR",
              "data privacy",
              "PII",
              "data classification",
              "right to erasure",
              "compliance",
            ],
          },
          {
            id: "da-ii-3",
            question:
              "What is the role of an API layer in a data architecture?",
            talkingPoints: [
              "Abstracts data consumers from physical storage; enables consistent access",
              "Supports versioning, rate limiting, and SLA enforcement",
              "GraphQL or REST APIs can serve both internal and external data consumers",
            ],
            keywords: [
              "data API",
              "abstraction layer",
              "GraphQL",
              "REST",
              "data serving",
              "API gateway",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "da-ia-1",
            question:
              "How would you design a data architecture that scales from startup to enterprise?",
            talkingPoints: [
              "Start simple: single warehouse + ELT; don't over-engineer day 1",
              "Design seams for future separation: use abstraction layers, avoid coupling",
              "Document architecture decisions (ADRs) so evolution is intentional",
            ],
            keywords: [
              "scalable architecture",
              "ADR",
              "evolutionary architecture",
              "technical debt",
              "data platform growth",
            ],
          },
          {
            id: "da-ia-2",
            question:
              "Describe how you would implement data lineage across a complex pipeline.",
            talkingPoints: [
              "Column-level lineage from source to BI using OpenLineage / Marquez",
              "Integrate lineage collection into pipeline frameworks (dbt, Spark)",
              "Surface lineage in catalog for impact analysis and debugging",
            ],
            keywords: [
              "data lineage",
              "OpenLineage",
              "column-level lineage",
              "impact analysis",
              "data catalog",
            ],
          },
          {
            id: "da-ia-3",
            question:
              "How do you balance data democratization with governance and security?",
            talkingPoints: [
              "Self-serve with guardrails: certified datasets, clear documentation, usage policies",
              "Role-based access with attribute-based fine-grained control for sensitive data",
              "Audit everything; monitor for unusual access patterns",
            ],
            keywords: [
              "data democratization",
              "data governance",
              "self-service",
              "RBAC",
              "data security",
            ],
          },
        ],
      },
    ],
  },

  "etl-developer": {
    freeCourses: [
      {
        name: "ETL and Data Pipelines with Shell, Airflow and Kafka – IBM",
        url: "https://www.coursera.org/learn/etl-and-data-pipelines-shell-airflow-kafka",
        provider: "IBM",
        platform: "Coursera",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "Talend Open Studio Tutorial",
        url: "https://www.youtube.com/results?search_query=talend+open+studio+tutorial",
        provider: "YouTube",
        platform: "YouTube",
        language: "English",
        level: "Beginner",
      },
      {
        name: "ETL Development Hindi Tutorial",
        url: "https://www.youtube.com/results?search_query=etl+development+hindi",
        provider: "YouTube",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "ETL Development Telugu Tutorial",
        url: "https://www.youtube.com/results?search_query=etl+developer+telugu",
        provider: "YouTube",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "Apache NiFi Tutorial",
        url: "https://www.youtube.com/results?search_query=apache+nifi+tutorial",
        provider: "YouTube",
        platform: "YouTube",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Python for ETL – Real Python",
        url: "https://realpython.com/python-etl/",
        provider: "Real Python",
        platform: "Web",
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
            id: "etl-b-1",
            question: "What are the three phases of an ETL process?",
            options: [
              {
                text: "Extract (pull data), Transform (clean/reshape), Load (write to target)",
                isCorrect: true,
              },
              { text: "Export, Translate, Load", isCorrect: false },
              { text: "Edit, Transfer, Log", isCorrect: false },
              { text: "Encode, Transform, Launch", isCorrect: false },
            ],
            explanation:
              "ETL: Extract from source, Transform per business rules, Load into target warehouse/database.",
          },
          {
            id: "etl-b-2",
            question: "What is data transformation in ETL?",
            options: [
              {
                text: "Converting, cleansing, aggregating, and restructuring source data to match target schema and rules",
                isCorrect: true,
              },
              {
                text: "Converting files from one format to another",
                isCorrect: false,
              },
              { text: "Moving files between servers", isCorrect: false },
              { text: "Compressing data before loading", isCorrect: false },
            ],
            explanation:
              "Transformation handles nulls, deduplication, data type conversions, lookups, and business rule application.",
          },
          {
            id: "etl-b-3",
            question: "What is a staging area in ETL?",
            options: [
              {
                text: "A temporary storage area where raw extracted data is held before transformation",
                isCorrect: true,
              },
              { text: "A test environment for ETL jobs", isCorrect: false },
              { text: "A cloud storage bucket", isCorrect: false },
              { text: "A database view", isCorrect: false },
            ],
            explanation:
              "Staging isolates raw data from the production warehouse and allows re-processing without re-extracting.",
          },
          {
            id: "etl-b-4",
            question: "What is incremental data extraction?",
            options: [
              {
                text: "Extracting only new or changed records since the last extraction run",
                isCorrect: true,
              },
              {
                text: "Extracting data in small batches regardless of changes",
                isCorrect: false,
              },
              { text: "Extracting every other record", isCorrect: false },
              { text: "A data compression technique", isCorrect: false },
            ],
            explanation:
              "Incremental extraction (using timestamps or CDC) is far more efficient than full extraction every time.",
          },
          {
            id: "etl-b-5",
            question: "What is data quality in ETL context?",
            options: [
              {
                text: "Ensuring data is accurate, complete, consistent, and valid before loading to target",
                isCorrect: true,
              },
              { text: "Measuring ETL pipeline speed", isCorrect: false },
              {
                text: "Counting the number of records loaded",
                isCorrect: false,
              },
              { text: "Checking server uptime", isCorrect: false },
            ],
            explanation:
              "Data quality checks prevent bad data from polluting the warehouse and downstream analytics.",
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "etl-i-1",
            question: "What is Change Data Capture (CDC)?",
            options: [
              {
                text: "Tracking row-level database changes (insert/update/delete) in real time using DB logs",
                isCorrect: true,
              },
              {
                text: "A manual process to record schema changes",
                isCorrect: false,
              },
              {
                text: "Capturing source code differences in version control",
                isCorrect: false,
              },
              { text: "A data masking technique", isCorrect: false },
            ],
            explanation:
              "CDC tools (Debezium, AWS DMS) capture database changes from transaction logs for real-time pipelines.",
          },
          {
            id: "etl-i-2",
            question: "What is the difference between ETL and ELT?",
            options: [
              {
                text: "ETL transforms before loading (external engine); ELT loads raw then transforms inside the warehouse",
                isCorrect: true,
              },
              { text: "ELT is always faster than ETL", isCorrect: false },
              {
                text: "They are identical with different naming conventions",
                isCorrect: false,
              },
              {
                text: "ETL is cloud-based; ELT is on-premise",
                isCorrect: false,
              },
            ],
            explanation:
              "Modern cloud warehouses support ELT well; ETL tools like Informatica are better for complex transformations outside the DB.",
          },
          {
            id: "etl-i-3",
            question: "What is a surrogate key in data warehousing?",
            options: [
              {
                text: "A system-generated integer key assigned to each dimension row, independent of source system key",
                isCorrect: true,
              },
              {
                text: "A natural key from the source system",
                isCorrect: false,
              },
              {
                text: "A composite key made of multiple columns",
                isCorrect: false,
              },
              { text: "A foreign key in a fact table", isCorrect: false },
            ],
            explanation:
              "Surrogate keys decouple the warehouse from source system key changes, enabling SCD tracking.",
          },
          {
            id: "etl-i-4",
            question: "How do you handle duplicate records in ETL?",
            options: [
              {
                text: "Deduplication using business key matching, ROW_NUMBER() ranking, or MERGE/UPSERT operations",
                isCorrect: true,
              },
              {
                text: "Load all records including duplicates",
                isCorrect: false,
              },
              { text: "Delete the entire table and reload", isCorrect: false },
              { text: "Use the latest record by ID always", isCorrect: false },
            ],
            explanation:
              "Deduplication strategy depends on the business definition of a unique record and SCD type.",
          },
          {
            id: "etl-i-5",
            question: "What is an ETL job dependency and how is it managed?",
            options: [
              {
                text: "When one ETL job must complete successfully before another can run; managed via orchestration tools",
                isCorrect: true,
              },
              { text: "A scheduled cron job for backups", isCorrect: false },
              {
                text: "A foreign key constraint in the database",
                isCorrect: false,
              },
              { text: "A data type compatibility check", isCorrect: false },
            ],
            explanation:
              "Airflow DAGs, Azure Data Factory pipelines, and SSIS control flow manage complex ETL dependencies.",
          },
        ],
      },
      {
        level: "advanced",
        passingScore: 70,
        questions: [
          {
            id: "etl-a-1",
            question: "How would you design a fault-tolerant ETL pipeline?",
            options: [
              {
                text: "Idempotent steps, checkpointing, dead-letter queues for failed records, automatic retry with backoff",
                isCorrect: true,
              },
              {
                text: "Run the entire pipeline daily from scratch",
                isCorrect: false,
              },
              {
                text: "Increase server resources to reduce failures",
                isCorrect: false,
              },
              {
                text: "Disable error handling for performance",
                isCorrect: false,
              },
            ],
            explanation:
              "Fault tolerance requires idempotency so restarts don't create duplicates, plus monitoring and alerting.",
          },
          {
            id: "etl-a-2",
            question:
              "What is parallel processing in ETL and how do you implement it?",
            options: [
              {
                text: "Splitting data into independent partitions processed simultaneously across multiple threads/nodes",
                isCorrect: true,
              },
              {
                text: "Running two separate ETL tools at the same time",
                isCorrect: false,
              },
              {
                text: "Having two developers work on the pipeline simultaneously",
                isCorrect: false,
              },
              {
                text: "Scheduling jobs at parallel time intervals",
                isCorrect: false,
              },
            ],
            explanation:
              "Partitioning by date range, hash, or key enables horizontal parallelism in Spark, SSIS, and custom pipelines.",
          },
          {
            id: "etl-a-3",
            question:
              "How do you optimize a slow ETL pipeline that processes 100M rows daily?",
            options: [
              {
                text: "Incremental extraction, parallel processing, pushdown optimization to source DB, columnar formats",
                isCorrect: true,
              },
              { text: "Increase the ETL server's RAM", isCorrect: false },
              {
                text: "Split it into two jobs scheduled at different times",
                isCorrect: false,
              },
              { text: "Load data twice — once for QA check", isCorrect: false },
            ],
            explanation:
              "Performance optimization is multi-layered: extract less, push down more, process in parallel, use efficient formats.",
          },
          {
            id: "etl-a-4",
            question:
              "What is data lineage in ETL and how do you implement it?",
            options: [
              {
                text: "Tracking each record's journey from source to target, including all transformations applied",
                isCorrect: true,
              },
              { text: "Version controlling ETL code in Git", isCorrect: false },
              { text: "Documenting ETL job schedules", isCorrect: false },
              { text: "Monitoring ETL job execution times", isCorrect: false },
            ],
            explanation:
              "Lineage enables root-cause analysis when downstream data is wrong — 'which transformation caused this?'",
          },
          {
            id: "etl-a-5",
            question:
              "How would you migrate an Informatica ETL workflow to a modern cloud-native pipeline?",
            options: [
              {
                text: "Analyze transformations, re-implement in dbt/Spark, use ADF or Airflow for orchestration, validate parity",
                isCorrect: true,
              },
              {
                text: "Export Informatica workflows and import into AWS directly",
                isCorrect: false,
              },
              {
                text: "Rewrite everything in a single sprint",
                isCorrect: false,
              },
              {
                text: "Keep Informatica and add cloud tools in parallel permanently",
                isCorrect: false,
              },
            ],
            explanation:
              "Migration requires mapping legacy transformations to modern equivalents and validating output parity before cutover.",
          },
        ],
      },
    ],
    interviewPrep: [
      {
        level: "basic",
        questions: [
          {
            id: "etl-ib-1",
            question:
              "Walk me through how you would design an ETL pipeline for a new data source.",
            talkingPoints: [
              "Understand source system: API/file/DB, volume, frequency, schema",
              "Design transformation logic with business rules",
              "Load strategy: full/incremental, SCD handling, target table design",
            ],
            keywords: [
              "ETL design",
              "source analysis",
              "transformation logic",
              "loading strategy",
              "pipeline design",
            ],
          },
          {
            id: "etl-ib-2",
            question:
              "How do you handle errors and exceptions in an ETL process?",
            talkingPoints: [
              "Log all errors with source record identifier and error type",
              "Dead-letter/rejection tables for invalid records",
              "Alert on failure thresholds; never silently drop records",
            ],
            keywords: [
              "error handling",
              "dead-letter queue",
              "rejection table",
              "logging",
              "alerting",
            ],
          },
          {
            id: "etl-ib-3",
            question: "What ETL tools have you worked with?",
            talkingPoints: [
              "Mention tools relevant to your experience: Informatica, SSIS, Talend, dbt, Spark, ADF",
              "Contrast their strengths: visual vs code-first, on-prem vs cloud",
              "Relate to business context: which tool is best for which scenario",
            ],
            keywords: [
              "Informatica",
              "SSIS",
              "Talend",
              "dbt",
              "Apache Spark",
              "Azure Data Factory",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "etl-ii-1",
            question:
              "How would you implement an SCD Type 2 in an ETL pipeline?",
            talkingPoints: [
              "On each run: identify new/changed records by comparing business keys",
              "For changed records: set EndDate/IsActive=False on existing row, insert new row with new values",
              "Use MERGE statement or separate INSERT/UPDATE logic",
            ],
            keywords: [
              "SCD Type 2",
              "slowly changing dimension",
              "MERGE",
              "surrogate key",
              "historical tracking",
            ],
          },
          {
            id: "etl-ii-2",
            question: "How do you validate data quality after an ETL load?",
            talkingPoints: [
              "Row count reconciliation between source and target",
              "Aggregate checksums: sum of key numeric columns",
              "Business rule validation: no nulls in required fields, referential integrity",
            ],
            keywords: [
              "data validation",
              "row count",
              "checksum",
              "reconciliation",
              "data quality checks",
            ],
          },
          {
            id: "etl-ii-3",
            question:
              "What is the impact of ETL performance on downstream BI reports?",
            talkingPoints: [
              "Slow ETL extends data refresh latency — reports show stale data",
              "Failed ETL jobs cause missing data or broken dashboards",
              "Performance SLAs should be defined: data must be ready by X AM",
            ],
            keywords: [
              "ETL performance",
              "data freshness",
              "SLA",
              "refresh latency",
              "business impact",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "etl-ia-1",
            question:
              "How would you architect a real-time ETL/streaming pipeline?",
            talkingPoints: [
              "Source CDC via Debezium → Kafka → Flink/Spark Streaming → target warehouse",
              "Design for exactly-once semantics or at-least-once with idempotent writes",
              "Monitor consumer lag and define alerting thresholds",
            ],
            keywords: [
              "streaming ETL",
              "CDC",
              "Debezium",
              "Kafka",
              "Flink",
              "exactly-once",
              "consumer lag",
            ],
          },
          {
            id: "etl-ia-2",
            question:
              "How do you ensure data consistency across multiple source systems in an ETL pipeline?",
            talkingPoints: [
              "Define master data management rules: which system is source of truth per entity",
              "Cross-system reconciliation checks after each load",
              "Implement conflict resolution strategy for overlapping data",
            ],
            keywords: [
              "data consistency",
              "MDM",
              "source of truth",
              "reconciliation",
              "conflict resolution",
            ],
          },
          {
            id: "etl-ia-3",
            question: "Describe how you would test an ETL pipeline.",
            talkingPoints: [
              "Unit test: individual transformation functions with known inputs/outputs",
              "Integration test: end-to-end with a subset of production-like data",
              "Regression test: validate no existing behavior changed after code modification",
            ],
            keywords: [
              "ETL testing",
              "unit test",
              "integration test",
              "regression test",
              "test data",
              "data validation",
            ],
          },
        ],
      },
    ],
  },

  "analytics-engineer": {
    freeCourses: [
      {
        name: "dbt Fundamentals – dbt Learn",
        url: "https://courses.getdbt.com/courses/fundamentals",
        provider: "dbt Labs",
        platform: "dbt Learn",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Analytics Engineering with dbt – Advanced",
        url: "https://courses.getdbt.com/courses/advanced-deployment",
        provider: "dbt Labs",
        platform: "dbt Learn",
        language: "English",
        level: "Advanced",
      },
      {
        name: "Analytics Engineering Hindi Tutorial",
        url: "https://www.youtube.com/results?search_query=analytics+engineering+dbt+hindi",
        provider: "YouTube",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "Analytics Engineering Telugu Tutorial",
        url: "https://www.youtube.com/results?search_query=analytics+engineering+telugu",
        provider: "YouTube",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "SQL for Analytics – Mode",
        url: "https://mode.com/sql-tutorial/",
        provider: "Mode Analytics",
        platform: "Mode",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Snowflake for Analytics Engineers",
        url: "https://www.snowflake.com/snowflake-university/",
        provider: "Snowflake",
        platform: "Snowflake University",
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
            id: "ae-b-1",
            question: "What is the primary role of an analytics engineer?",
            options: [
              {
                text: "Transform raw data in the warehouse into clean, documented models for analysts and BI tools",
                isCorrect: true,
              },
              { text: "Train machine learning models", isCorrect: false },
              { text: "Build frontend data dashboards", isCorrect: false },
              {
                text: "Manage cloud infrastructure for data systems",
                isCorrect: false,
              },
            ],
            explanation:
              "Analytics engineers bridge data engineering (data pipelines) and data analysis (insights).",
          },
          {
            id: "ae-b-2",
            question: "What does dbt stand for?",
            options: [
              { text: "Data Build Tool", isCorrect: true },
              { text: "Database Batch Transfer", isCorrect: false },
              { text: "Data Business Transformation", isCorrect: false },
              { text: "Distributed Backend Tool", isCorrect: false },
            ],
            explanation:
              "dbt (data build tool) is the core tool of analytics engineering — SQL-first transformations with software engineering practices.",
          },
          {
            id: "ae-b-3",
            question: "What is a dbt model?",
            options: [
              {
                text: "A SQL SELECT statement saved as a .sql file that dbt compiles and runs in the warehouse",
                isCorrect: true,
              },
              {
                text: "A machine learning model trained with dbt",
                isCorrect: false,
              },
              { text: "A schema definition file", isCorrect: false },
              { text: "A dbt cloud dashboard configuration", isCorrect: false },
            ],
            explanation:
              "dbt models are SELECT statements; dbt handles creating the table/view and managing dependencies between models.",
          },
          {
            id: "ae-b-4",
            question: "What is the purpose of dbt tests?",
            options: [
              {
                text: "Automated data quality checks (not_null, unique, accepted_values, relationships) run after each model build",
                isCorrect: true,
              },
              { text: "Unit tests for Python functions", isCorrect: false },
              {
                text: "Performance benchmarks for SQL queries",
                isCorrect: false,
              },
              { text: "Checking server connectivity", isCorrect: false },
            ],
            explanation:
              "dbt tests ensure data integrity and catch quality issues before they reach downstream consumers.",
          },
          {
            id: "ae-b-5",
            question: "What is a staging layer in dbt?",
            options: [
              {
                text: "Models that lightly clean and rename raw source data as the first transformation layer",
                isCorrect: true,
              },
              { text: "A production deployment environment", isCorrect: false },
              {
                text: "A temporary database for development work",
                isCorrect: false,
              },
              { text: "A type of dbt macro", isCorrect: false },
            ],
            explanation:
              "Staging models are 1:1 with source tables — they standardize naming and types before further transformation.",
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "ae-i-1",
            question:
              "What is the difference between a dbt model materialized as a view vs a table?",
            options: [
              {
                text: "View: query runs on read, no storage; Table: data stored in warehouse, faster queries but more storage",
                isCorrect: true,
              },
              { text: "Tables are more accurate than views", isCorrect: false },
              {
                text: "Views support dbt tests; tables don't",
                isCorrect: false,
              },
              {
                text: "Only tables can be incrementally updated",
                isCorrect: false,
              },
            ],
            explanation:
              "Materialization choice depends on query frequency, data volume, and downstream speed requirements.",
          },
          {
            id: "ae-i-2",
            question: "What is an incremental dbt model?",
            options: [
              {
                text: "A model that appends or merges only new/changed records since the last run, avoiding full table rebuilds",
                isCorrect: true,
              },
              {
                text: "A model that runs incrementally through rows",
                isCorrect: false,
              },
              {
                text: "A model deployed in stages over time",
                isCorrect: false,
              },
              { text: "A model with dynamic column count", isCorrect: false },
            ],
            explanation:
              "Incremental models dramatically reduce warehouse costs and processing time for large fact tables.",
          },
          {
            id: "ae-i-3",
            question: "What are dbt macros used for?",
            options: [
              {
                text: "Reusable Jinja2 functions that generate dynamic SQL to avoid repetition across models",
                isCorrect: true,
              },
              { text: "Scheduling dbt jobs", isCorrect: false },
              { text: "Connecting to data sources", isCorrect: false },
              { text: "Visualizing model DAGs", isCorrect: false },
            ],
            explanation:
              "Macros enable DRY SQL — define complex logic once and call it across models.",
          },
          {
            id: "ae-i-4",
            question: "What is a dbt source and why is it important?",
            options: [
              {
                text: "A declared reference to raw data in the warehouse enabling lineage tracking and freshness checks",
                isCorrect: true,
              },
              {
                text: "The original database system before data is loaded",
                isCorrect: false,
              },
              { text: "A dbt connection configuration", isCorrect: false },
              { text: "A type of dbt test", isCorrect: false },
            ],
            explanation:
              "Declaring sources in dbt enables automatic lineage, source freshness alerting, and documentation.",
          },
          {
            id: "ae-i-5",
            question:
              "What is the Kimball methodology in analytics engineering?",
            options: [
              {
                text: "Dimensional modeling approach: fact and dimension tables optimized for BI tool performance",
                isCorrect: true,
              },
              { text: "A software testing framework", isCorrect: false },
              { text: "A cloud data platform architecture", isCorrect: false },
              {
                text: "A dbt project folder structure standard",
                isCorrect: false,
              },
            ],
            explanation:
              "Kimball's star schema approach organizes business processes as fact tables with surrounding dimension tables.",
          },
        ],
      },
      {
        level: "advanced",
        passingScore: 70,
        questions: [
          {
            id: "ae-a-1",
            question:
              "How do you design a robust dbt project structure for a large team?",
            options: [
              {
                text: "Layered architecture: sources → staging → intermediate → marts; one mart per business domain",
                isCorrect: true,
              },
              {
                text: "One large SQL file per business domain",
                isCorrect: false,
              },
              {
                text: "All models in a single folder, named by creation date",
                isCorrect: false,
              },
              {
                text: "Separate dbt projects per data source",
                isCorrect: false,
              },
            ],
            explanation:
              "Layered architecture with clear naming conventions enables team scalability and model discoverability.",
          },
          {
            id: "ae-a-2",
            question:
              "How do you manage dbt project performance at scale (thousands of models)?",
            options: [
              {
                text: "Selective model tagging, incremental materialization, model scoping with --select, CI/CD for slim builds",
                isCorrect: true,
              },
              { text: "Run all models every hour", isCorrect: false },
              {
                text: "Split into separate warehouses per team",
                isCorrect: false,
              },
              { text: "Reduce dbt tests to improve speed", isCorrect: false },
            ],
            explanation:
              "Large dbt projects require selective builds, incremental models, and parallel execution to stay within compute budgets.",
          },
          {
            id: "ae-a-3",
            question:
              "How would you implement a metric layer in a dbt project?",
            options: [
              {
                text: "Define metrics using dbt MetricFlow (dbt Semantic Layer) for consistent, queryable business definitions",
                isCorrect: true,
              },
              { text: "Create one model per metric", isCorrect: false },
              { text: "Document metrics in a README file", isCorrect: false },
              {
                text: "Use BI tool calculated measures for all metrics",
                isCorrect: false,
              },
            ],
            explanation:
              "The dbt Semantic Layer (MetricFlow) ensures metrics are defined once and consistent across all BI tools.",
          },
          {
            id: "ae-a-4",
            question: "What is CI/CD for dbt and how do you implement it?",
            options: [
              {
                text: "Run dbt build --select state:modified+ on PR open; merge to production triggers full run",
                isCorrect: true,
              },
              {
                text: "Manually check all models before each deployment",
                isCorrect: false,
              },
              {
                text: "Deploy new models to production without testing",
                isCorrect: false,
              },
              { text: "Run all tests weekly", isCorrect: false },
            ],
            explanation:
              "dbt CI/CD uses slim CI (state:modified) to test only changed models, reducing PR feedback time significantly.",
          },
          {
            id: "ae-a-5",
            question:
              "How do you document a large dbt project for team and stakeholder use?",
            options: [
              {
                text: "YAML descriptions for every model/column, dbt docs generate for browsable docs, integrate with data catalog",
                isCorrect: true,
              },
              { text: "Rely on SQL comments only", isCorrect: false },
              {
                text: "Write a separate wiki for documentation",
                isCorrect: false,
              },
              {
                text: "Rename models to be self-documenting",
                isCorrect: false,
              },
            ],
            explanation:
              "dbt docs generates a browsable data dictionary; connecting to a catalog (DataHub, Atlan) enables company-wide discovery.",
          },
        ],
      },
    ],
    interviewPrep: [
      {
        level: "basic",
        questions: [
          {
            id: "ae-ib-1",
            question:
              "How is analytics engineering different from data engineering?",
            talkingPoints: [
              "Data engineers: build pipelines that move data (ingest, orchestrate)",
              "Analytics engineers: transform data inside the warehouse for business use (dbt, SQL)",
              "Analytics engineers work closer to the business; DE works closer to infrastructure",
            ],
            keywords: [
              "analytics engineering",
              "data engineering",
              "dbt",
              "SQL",
              "transformation",
            ],
          },
          {
            id: "ae-ib-2",
            question: "Walk me through your dbt project structure.",
            talkingPoints: [
              "Sources → Staging (raw clean) → Intermediate (business logic joins) → Marts (consumption layer)",
              "Each mart corresponds to a business domain (finance, marketing, operations)",
              "YAML files for documentation and tests alongside each model layer",
            ],
            keywords: [
              "dbt",
              "staging",
              "intermediate",
              "mart",
              "project structure",
            ],
          },
          {
            id: "ae-ib-3",
            question:
              "What data quality checks do you implement in your analytics models?",
            talkingPoints: [
              "dbt generic tests: not_null on key fields, unique on grain, accepted_values for enums",
              "Custom singular tests for complex business rules",
              "Source freshness checks to alert on stale data",
            ],
            keywords: [
              "dbt tests",
              "data quality",
              "not_null",
              "unique",
              "source freshness",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "ae-ii-1",
            question:
              "How would you refactor a spaghetti SQL query into a clean dbt model?",
            talkingPoints: [
              "Break into staging models for each source table reference",
              "Intermediate model for complex joins/logic with clear naming",
              "Final mart model is simple SELECT from intermediate — easy for analysts to understand",
            ],
            keywords: [
              "refactoring",
              "dbt models",
              "CTE decomposition",
              "modular SQL",
              "code quality",
            ],
          },
          {
            id: "ae-ii-2",
            question:
              "How do you handle breaking changes in a dbt model consumed by a BI tool?",
            talkingPoints: [
              "Version the model: create new model with _v2 suffix or in separate schema",
              "Communicate change to downstream consumers before deprecating old model",
              "Use dbt deprecation notices and maintain old model briefly during transition",
            ],
            keywords: [
              "breaking changes",
              "versioning",
              "backward compatibility",
              "deprecation",
              "stakeholder communication",
            ],
          },
          {
            id: "ae-ii-3",
            question:
              "Explain how you would build a revenue attribution model.",
            talkingPoints: [
              "Define attribution model: first touch, last touch, or multi-touch (linear, time decay)",
              "Join events data to conversions using session/user ID and timestamps",
              "Document business rules clearly — attribution is always a political topic",
            ],
            keywords: [
              "revenue attribution",
              "multi-touch",
              "first-touch",
              "last-touch",
              "marketing analytics",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "ae-ia-1",
            question:
              "How do you manage data contracts between upstream data engineers and downstream analytics models?",
            talkingPoints: [
              "Define source contracts: agreed schema, SLA, and data quality expectations",
              "Use dbt sources with schema tests as the contract enforcement layer",
              "Alert on source freshness and schema drift; trigger downstream team communication",
            ],
            keywords: [
              "data contracts",
              "schema enforcement",
              "source freshness",
              "SLA",
              "data quality",
            ],
          },
          {
            id: "ae-ia-2",
            question:
              "How would you architect a self-serve analytics layer for business users?",
            talkingPoints: [
              "Well-documented marts organized by business domain with business-friendly naming",
              "Semantic layer (dbt Metrics / Looker LookML) so metrics are defined once",
              "Training and enablement for analysts; governance to maintain quality",
            ],
            keywords: [
              "self-serve analytics",
              "semantic layer",
              "dbt Metrics",
              "documentation",
              "data governance",
            ],
          },
          {
            id: "ae-ia-3",
            question:
              "How do you evaluate when to use a view, table, incremental, or ephemeral materialization in dbt?",
            talkingPoints: [
              "Ephemeral: pure CTE — no storage, used in lineage only; good for intermediate steps queried once",
              "View: frequently changing data queried infrequently; no storage cost",
              "Table: expensive query run often; pre-compute for speed",
              "Incremental: large fact tables; only process new records",
            ],
            keywords: [
              "dbt materialization",
              "view",
              "table",
              "incremental",
              "ephemeral",
              "performance",
            ],
          },
        ],
      },
    ],
  },

  "data-quality-analyst": {
    freeCourses: [
      {
        name: "Data Quality and Data Governance – IBM",
        url: "https://www.coursera.org/learn/introduction-to-data-governance",
        provider: "IBM",
        platform: "Coursera",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Great Expectations Documentation & Tutorials",
        url: "https://docs.greatexpectations.io/docs/tutorials/quickstart/",
        provider: "Great Expectations",
        platform: "Web",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "Data Quality Hindi Tutorial",
        url: "https://www.youtube.com/results?search_query=data+quality+management+hindi",
        provider: "YouTube",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "Data Quality Telugu Tutorial",
        url: "https://www.youtube.com/results?search_query=data+quality+telugu",
        provider: "YouTube",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "SQL for Data Quality Analysis – Mode",
        url: "https://mode.com/sql-tutorial/",
        provider: "Mode Analytics",
        platform: "Mode",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Data Governance Fundamentals – DAMA",
        url: "https://www.dama.org/cpages/body-of-knowledge",
        provider: "DAMA International",
        platform: "DAMA",
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
            id: "dqa-b-1",
            question: "What are the six dimensions of data quality?",
            options: [
              {
                text: "Accuracy, Completeness, Consistency, Timeliness, Validity, Uniqueness",
                isCorrect: true,
              },
              {
                text: "Speed, Size, Structure, Schema, Syntax, Semantics",
                isCorrect: false,
              },
              {
                text: "Format, File type, Version, Encryption, Access, Storage",
                isCorrect: false,
              },
              {
                text: "Raw, Cleaned, Enriched, Aggregated, Stored, Archived",
                isCorrect: false,
              },
            ],
            explanation:
              "These six DQ dimensions are from the DAMA-DMBOK framework and universally used in data quality assessment.",
          },
          {
            id: "dqa-b-2",
            question: "What is data profiling?",
            options: [
              {
                text: "Analyzing a dataset to understand its structure, content, and quality characteristics",
                isCorrect: true,
              },
              { text: "Creating user profiles from data", isCorrect: false },
              { text: "Encrypting sensitive data columns", isCorrect: false },
              {
                text: "Optimizing database query performance",
                isCorrect: false,
              },
            ],
            explanation:
              "Data profiling reveals null rates, distinct values, min/max, and pattern distributions critical for quality assessment.",
          },
          {
            id: "dqa-b-3",
            question: "What is a data anomaly?",
            options: [
              {
                text: "A data point or pattern that deviates significantly from expected or normal behavior",
                isCorrect: true,
              },
              { text: "A malformed file format", isCorrect: false },
              { text: "A database constraint violation", isCorrect: false },
              { text: "A duplicate record", isCorrect: false },
            ],
            explanation:
              "Anomaly detection catches data issues like sudden drops/spikes in values, null rate changes, and distribution shifts.",
          },
          {
            id: "dqa-b-4",
            question: "What is referential integrity?",
            options: [
              {
                text: "Ensuring foreign key values in one table match primary key values in the referenced table",
                isCorrect: true,
              },
              {
                text: "Checking that all numeric values are within range",
                isCorrect: false,
              },
              { text: "Validating email address formats", isCorrect: false },
              {
                text: "Ensuring no duplicate primary keys exist",
                isCorrect: false,
              },
            ],
            explanation:
              "Referential integrity prevents orphaned records and is a core relational database quality constraint.",
          },
          {
            id: "dqa-b-5",
            question: "What is data completeness?",
            options: [
              {
                text: "The degree to which required data values are present and not null in a dataset",
                isCorrect: true,
              },
              {
                text: "Whether the dataset has been fully loaded",
                isCorrect: false,
              },
              {
                text: "The percentage of records that passed validation",
                isCorrect: false,
              },
              { text: "A measure of how recent the data is", isCorrect: false },
            ],
            explanation:
              "Completeness checks are among the most common DQ rules — critical fields must not be null.",
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "dqa-i-1",
            question: "What is a data quality rule?",
            options: [
              {
                text: "A defined condition that data must satisfy to be considered valid — e.g., age > 0 AND age < 150",
                isCorrect: true,
              },
              { text: "A database constraint only", isCorrect: false },
              { text: "A compliance regulation", isCorrect: false },
              { text: "An ETL transformation step", isCorrect: false },
            ],
            explanation:
              "DQ rules capture business logic for valid data; they can be implemented in SQL, dbt tests, or tools like Great Expectations.",
          },
          {
            id: "dqa-i-2",
            question: "What is Great Expectations?",
            options: [
              {
                text: "An open-source Python library for defining, validating, and documenting data quality expectations",
                isCorrect: true,
              },
              {
                text: "A test management tool for software developers",
                isCorrect: false,
              },
              {
                text: "A business requirements documentation tool",
                isCorrect: false,
              },
              { text: "A data visualization framework", isCorrect: false },
            ],
            explanation:
              "Great Expectations allows teams to define data contracts as code and validate them at pipeline checkpoints.",
          },
          {
            id: "dqa-i-3",
            question:
              "How would you detect data drift in a production pipeline?",
            options: [
              {
                text: "Monitor statistical distributions over time — mean, std dev, null rates, unique counts per column",
                isCorrect: true,
              },
              {
                text: "Check if row counts match the previous day exactly",
                isCorrect: false,
              },
              { text: "Run data profiling once a quarter", isCorrect: false },
              { text: "Check if the schema has changed", isCorrect: false },
            ],
            explanation:
              "Statistical drift detection catches subtle data changes that row count checks miss.",
          },
          {
            id: "dqa-i-4",
            question: "What is a data quality scorecard?",
            options: [
              {
                text: "A dashboard showing DQ metric scores per dimension and data asset, enabling prioritization of issues",
                isCorrect: true,
              },
              {
                text: "A performance review for data engineers",
                isCorrect: false,
              },
              { text: "A list of all database tables", isCorrect: false },
              { text: "A data catalog entry", isCorrect: false },
            ],
            explanation:
              "DQ scorecards create visibility and accountability — business stakeholders can see data trustworthiness at a glance.",
          },
          {
            id: "dqa-i-5",
            question:
              "What is the difference between data validation and data verification?",
            options: [
              {
                text: "Validation: data meets business rules; Verification: data matches expected values from a source",
                isCorrect: true,
              },
              { text: "They are identical terms", isCorrect: false },
              {
                text: "Verification is done by developers; validation by analysts",
                isCorrect: false,
              },
              {
                text: "Validation is automated; verification is always manual",
                isCorrect: false,
              },
            ],
            explanation:
              "Validation checks business logic correctness; verification checks data parity between systems.",
          },
        ],
      },
      {
        level: "advanced",
        passingScore: 70,
        questions: [
          {
            id: "dqa-a-1",
            question:
              "How would you build an automated data quality framework from scratch?",
            options: [
              {
                text: "Define rules in code (dbt tests / Great Expectations), run at pipeline checkpoints, alert on failures, track metrics over time",
                isCorrect: true,
              },
              { text: "Run manual SQL checks weekly", isCorrect: false },
              {
                text: "Build a spreadsheet of quality rules for analysts to check daily",
                isCorrect: false,
              },
              {
                text: "Use only database constraints for all validation",
                isCorrect: false,
              },
            ],
            explanation:
              "Automated DQ frameworks shift quality left, catch issues at ingestion rather than in reports.",
          },
          {
            id: "dqa-a-2",
            question:
              "How do you prioritize which data quality issues to fix first?",
            options: [
              {
                text: "Impact × frequency: high-impact business decisions + high-occurrence issues take priority",
                isCorrect: true,
              },
              {
                text: "Fix issues alphabetically by table name",
                isCorrect: false,
              },
              {
                text: "Fix the easiest issues first to show quick wins",
                isCorrect: false,
              },
              {
                text: "Fix the most recently discovered issues first",
                isCorrect: false,
              },
            ],
            explanation:
              "DQ prioritization requires business impact assessment — not all issues are worth fixing.",
          },
          {
            id: "dqa-a-3",
            question:
              "What is total data management (TDM) approach to data quality?",
            options: [
              {
                text: "DQ as an organizational responsibility across all data producers and consumers, not just IT",
                isCorrect: true,
              },
              {
                text: "Managing all data in a single database",
                isCorrect: false,
              },
              { text: "A Talend data management product", isCorrect: false },
              {
                text: "Running all DQ checks in the data warehouse",
                isCorrect: false,
              },
            ],
            explanation:
              "Data quality requires cultural change — accountability must exist at the source system, not just at the warehouse.",
          },
          {
            id: "dqa-a-4",
            question:
              "How would you implement data observability across a large data platform?",
            options: [
              {
                text: "Collect freshness, volume, schema, distribution, and lineage signals; surface via unified observability platform",
                isCorrect: true,
              },
              {
                text: "Set up log monitoring for database servers",
                isCorrect: false,
              },
              {
                text: "Schedule daily data reconciliation reports",
                isCorrect: false,
              },
              {
                text: "Use a single Great Expectations suite for all tables",
                isCorrect: false,
              },
            ],
            explanation:
              "Data observability (Monte Carlo, Acceldata, or custom) provides system-wide visibility into data health in real time.",
          },
          {
            id: "dqa-a-5",
            question:
              "How do you handle root cause analysis when a data quality issue is discovered in production?",
            options: [
              {
                text: "Trace lineage backward from affected table to source; identify the transformation or source record where issue originated",
                isCorrect: true,
              },
              {
                text: "Rerun all ETL jobs to see if the issue goes away",
                isCorrect: false,
              },
              {
                text: "Replace affected data with industry averages",
                isCorrect: false,
              },
              { text: "Delete and reload the entire table", isCorrect: false },
            ],
            explanation:
              "RCA uses data lineage to pinpoint root cause; then fix at origin and re-process affected downstream data.",
          },
        ],
      },
    ],
    interviewPrep: [
      {
        level: "basic",
        questions: [
          {
            id: "dqa-ib-1",
            question: "What does a data quality analyst do day-to-day?",
            talkingPoints: [
              "Profile new data sources; identify quality gaps and document DQ rules",
              "Build and maintain automated quality checks in the pipeline",
              "Investigate and escalate data quality incidents to engineering and business teams",
            ],
            keywords: [
              "data profiling",
              "DQ rules",
              "data quality checks",
              "incident management",
              "collaboration",
            ],
          },
          {
            id: "dqa-ib-2",
            question:
              "How do you communicate data quality issues to non-technical stakeholders?",
            talkingPoints: [
              "Translate technical issues into business impact: 'X% of sales records have missing region — regional reports are unreliable'",
              "Use visuals: trend charts showing DQ score over time",
              "Prioritize by business impact, not by technical severity",
            ],
            keywords: [
              "stakeholder communication",
              "business impact",
              "data quality scorecard",
              "visualization",
              "prioritization",
            ],
          },
          {
            id: "dqa-ib-3",
            question: "What SQL queries do you use to check data quality?",
            talkingPoints: [
              "NULL rate: COUNT(*) - COUNT(column) / COUNT(*)",
              "Duplicate check: COUNT(*) vs COUNT(DISTINCT key)",
              "Range validation: WHERE value NOT BETWEEN min AND max",
              "Referential integrity: LEFT JOIN with IS NULL on FK",
            ],
            keywords: [
              "SQL",
              "null check",
              "duplicate detection",
              "range validation",
              "referential integrity",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "dqa-ii-1",
            question: "How would you design a data quality monitoring system?",
            talkingPoints: [
              "Define DQ dimensions and rules per critical table/column",
              "Automate checks in the pipeline with alerting thresholds",
              "Track DQ scores over time in a dashboard for trend visibility",
            ],
            keywords: [
              "DQ monitoring",
              "automated checks",
              "alerting",
              "DQ dashboard",
              "trend analysis",
            ],
          },
          {
            id: "dqa-ii-2",
            question:
              "Describe a data quality incident you investigated and resolved.",
            talkingPoints: [
              "Describe symptom: 'Revenue dropped 20% overnight in the report'",
              "Investigation: traced to ETL job failure that loaded null values for one region",
              "Resolution: fixed ETL rule, reprocessed affected date range, added monitoring rule",
            ],
            keywords: [
              "incident investigation",
              "root cause analysis",
              "ETL fix",
              "reprocessing",
              "monitoring",
            ],
          },
          {
            id: "dqa-ii-3",
            question: "How do you establish data quality SLAs?",
            talkingPoints: [
              "Work with business to define acceptable thresholds per dimension (e.g., 99% completeness for critical fields)",
              "Baseline current state; set improvement targets",
              "Monitor and report against SLA monthly; escalate breaches",
            ],
            keywords: [
              "data quality SLA",
              "thresholds",
              "baseline",
              "business alignment",
              "governance",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "dqa-ia-1",
            question:
              "How would you embed data quality into a CI/CD data pipeline?",
            talkingPoints: [
              "DQ gates: pipeline fails on critical rule violations; warnings for non-blocking issues",
              "Pre-load validation: check source data quality before transformation",
              "Post-load validation: verify target table quality after each run",
            ],
            keywords: [
              "CI/CD",
              "DQ gates",
              "pipeline validation",
              "pre-load",
              "post-load",
              "automated quality",
            ],
          },
          {
            id: "dqa-ia-2",
            question:
              "How do you build a data quality culture in an organization?",
            talkingPoints: [
              "Make DQ visible: publish scorecards accessible to all teams",
              "Assign data stewards: domain teams own quality of their data",
              "Gamify: recognize teams with improving DQ scores",
            ],
            keywords: [
              "data quality culture",
              "data stewards",
              "data ownership",
              "DQ scorecard",
              "organizational change",
            ],
          },
          {
            id: "dqa-ia-3",
            question:
              "What is master data management (MDM) and how does it relate to data quality?",
            talkingPoints: [
              "MDM: managing a single authoritative version of core business entities (customers, products, locations)",
              "Poor MDM causes DQ issues: same customer in 5 forms across systems",
              "MDM tools: Informatica MDM, SAP MDM; strategies: registry, consolidation, coexistence, centralized",
            ],
            keywords: [
              "MDM",
              "master data",
              "golden record",
              "entity resolution",
              "data stewardship",
            ],
          },
        ],
      },
    ],
  },
};
