// roleExtrasData2.ts — Free Courses, Mock Tests, Interview Prep for ML/AI, DevOps, QA roles
import type { FreeCourse, InterviewPrep, MockTest } from "./roleExtras";

interface RoleExtras {
  freeCourses?: FreeCourse[];
  mockTests?: MockTest[];
  interviewPrep?: InterviewPrep[];
}

export const roleExtrasData2: Record<string, RoleExtras> = {
  "machine-learning-engineer": {
    freeCourses: [
      {
        name: "Machine Learning Specialization – Andrew Ng",
        url: "https://www.coursera.org/specializations/machine-learning-introduction",
        provider: "DeepLearning.AI / Coursera",
        platform: "Coursera",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Machine Learning in Hindi",
        url: "https://www.youtube.com/c/CampusX",
        provider: "CampusX",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "ML & Deep Learning Telugu Tutorial",
        url: "https://www.youtube.com/results?search_query=machine+learning+telugu",
        provider: "Naresh IT Telugu",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "Fast.ai – Practical Deep Learning for Coders",
        url: "https://course.fast.ai/",
        provider: "fast.ai",
        platform: "YouTube",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "NPTEL Introduction to Machine Learning",
        url: "https://nptel.ac.in/courses/106105152",
        provider: "IIT Madras / NPTEL",
        platform: "NPTEL",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "MLOps Fundamentals – Google Cloud",
        url: "https://www.coursera.org/learn/mlops-fundamentals",
        provider: "Google Cloud / Coursera",
        platform: "Coursera",
        language: "English",
        level: "Advanced",
      },
      {
        name: "Krish Naik ML Tutorials Hindi/English",
        url: "https://www.youtube.com/c/KrishNaik",
        provider: "Krish Naik",
        platform: "YouTube",
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
            id: "ml-b-1",
            question: "What is supervised learning?",
            topic: "ML Fundamentals",
            explanation:
              "Supervised learning trains a model on labeled examples (input-output pairs). The model learns to map inputs to outputs and predict on new data.",
            options: [
              { text: "Learning without any data", isCorrect: false },
              {
                text: "Training on labeled input-output pairs",
                isCorrect: true,
              },
              {
                text: "Learning by grouping similar data points",
                isCorrect: false,
              },
              {
                text: "A neural network with no hidden layers",
                isCorrect: false,
              },
            ],
          },
          {
            id: "ml-b-2",
            question: "What is overfitting in a machine learning model?",
            topic: "Model Evaluation",
            explanation:
              "Overfitting occurs when a model learns the training data too well, including noise, and performs poorly on new unseen data (low generalization).",
            options: [
              {
                text: "When a model is too simple to capture patterns",
                isCorrect: false,
              },
              {
                text: "When a model performs well on training data but poorly on new data",
                isCorrect: true,
              },
              { text: "When the training data is too small", isCorrect: false },
              {
                text: "When the model takes too long to train",
                isCorrect: false,
              },
            ],
          },
          {
            id: "ml-b-3",
            question: "What does a confusion matrix show?",
            topic: "Model Evaluation",
            explanation:
              "A confusion matrix shows actual vs. predicted classifications: True Positives, True Negatives, False Positives, and False Negatives — used to evaluate classification models.",
            options: [
              { text: "The training speed of a model", isCorrect: false },
              {
                text: "Actual vs. predicted classifications (TP, TN, FP, FN)",
                isCorrect: true,
              },
              { text: "The complexity of the model", isCorrect: false },
              { text: "The distribution of training data", isCorrect: false },
            ],
          },
          {
            id: "ml-b-4",
            question: "What is feature engineering?",
            topic: "ML Pipeline",
            explanation:
              "Feature engineering is the process of using domain knowledge to create, transform, or select input variables (features) that improve model performance.",
            options: [
              {
                text: "Building physical features of hardware",
                isCorrect: false,
              },
              {
                text: "Creating and transforming input variables to improve model performance",
                isCorrect: true,
              },
              { text: "Engineering the target variable", isCorrect: false },
              {
                text: "A technique to visualize model decisions",
                isCorrect: false,
              },
            ],
          },
          {
            id: "ml-b-5",
            question:
              "What is the difference between classification and regression?",
            topic: "ML Types",
            explanation:
              "Classification predicts a discrete category (spam/not spam). Regression predicts a continuous numerical value (house price).",
            options: [
              {
                text: "Classification is supervised; regression is unsupervised",
                isCorrect: false,
              },
              {
                text: "Classification predicts categories; regression predicts continuous values",
                isCorrect: true,
              },
              { text: "Regression is more accurate", isCorrect: false },
              {
                text: "They are the same with different names",
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
            id: "ml-i-1",
            question: "What is the bias-variance tradeoff?",
            topic: "ML Theory",
            explanation:
              "Bias is the error from simplifying assumptions (underfitting). Variance is the error from sensitivity to training data fluctuations (overfitting). The sweet spot minimizes both.",
            options: [
              {
                text: "Bias is always bad; variance is always good",
                isCorrect: false,
              },
              {
                text: "High bias = underfitting; high variance = overfitting; need to balance both",
                isCorrect: true,
              },
              {
                text: "Bias and variance always increase together",
                isCorrect: false,
              },
              { text: "It only applies to neural networks", isCorrect: false },
            ],
          },
          {
            id: "ml-i-2",
            question: "What is cross-validation and why is it used?",
            topic: "Model Evaluation",
            explanation:
              "Cross-validation (k-fold) evaluates a model by splitting data into k folds, training on k-1 and testing on 1, rotating through all folds. It gives a more reliable estimate than a single train-test split.",
            options: [
              {
                text: "Training a model on multiple datasets from different sources",
                isCorrect: false,
              },
              {
                text: "Evaluating model by rotating through k train-test splits for reliable estimates",
                isCorrect: true,
              },
              {
                text: "Crossing out outliers from the training data",
                isCorrect: false,
              },
              {
                text: "Comparing two different models on the same dataset",
                isCorrect: false,
              },
            ],
          },
          {
            id: "ml-i-3",
            question:
              "What does regularization (L1, L2) do in machine learning?",
            topic: "Regularization",
            explanation:
              "Regularization adds a penalty to the loss function for large weights, discouraging overfitting. L1 (Lasso) encourages sparsity; L2 (Ridge) shrinks weights toward zero.",
            options: [
              { text: "It speeds up model training", isCorrect: false },
              {
                text: "It penalizes large weights to reduce overfitting",
                isCorrect: true,
              },
              { text: "It normalizes training data to 0-1", isCorrect: false },
              { text: "It regularizes the learning rate", isCorrect: false },
            ],
          },
          {
            id: "ml-i-4",
            question: "What is gradient descent?",
            topic: "Optimization",
            explanation:
              "Gradient descent is an optimization algorithm that iteratively adjusts model parameters in the direction of the steepest descent of the loss function to find the minimum.",
            options: [
              {
                text: "A method to visualize model performance",
                isCorrect: false,
              },
              {
                text: "An iterative optimization algorithm that minimizes the loss by adjusting parameters",
                isCorrect: true,
              },
              { text: "A data preprocessing technique", isCorrect: false },
              {
                text: "A type of neural network architecture",
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
            id: "ml-a-1",
            question: "What is the attention mechanism in transformers?",
            topic: "Deep Learning",
            explanation:
              "Attention allows the model to focus on relevant parts of the input sequence when generating each output element. Self-attention computes relationships between all positions in a sequence — the foundation of transformers like BERT and GPT.",
            options: [
              {
                text: "A regularization technique for neural networks",
                isCorrect: false,
              },
              {
                text: "A mechanism for models to weigh the relevance of each input position",
                isCorrect: true,
              },
              { text: "A technique to reduce training time", isCorrect: false },
              {
                text: "A visualization method for neural activations",
                isCorrect: false,
              },
            ],
          },
          {
            id: "ml-a-2",
            question: "What is MLOps?",
            topic: "MLOps",
            explanation:
              "MLOps (Machine Learning Operations) applies DevOps practices to ML systems: automated pipelines for training, versioning, deployment, monitoring, and retraining of models in production.",
            options: [
              {
                text: "A machine learning framework by Google",
                isCorrect: false,
              },
              {
                text: "DevOps practices applied to ML lifecycle: build, deploy, monitor, retrain",
                isCorrect: true,
              },
              { text: "A type of supervised learning", isCorrect: false },
              { text: "An open-source ML toolkit", isCorrect: false },
            ],
          },
          {
            id: "ml-a-3",
            question: "What is model drift and how do you detect it?",
            topic: "Production ML",
            explanation:
              "Model drift occurs when model performance degrades in production as real-world data distributions change. Detect with: monitoring prediction distributions, tracking performance metrics, statistical tests (KL divergence, PSI) on input features.",
            options: [
              { text: "When a model file is corrupted", isCorrect: false },
              {
                text: "Degradation in model performance due to changing data distributions",
                isCorrect: true,
              },
              {
                text: "Slow model inference speed over time",
                isCorrect: false,
              },
              { text: "Memory leaks in model serving", isCorrect: false },
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
            id: "ml-ip-b-1",
            question: "Explain the ML model development lifecycle.",
            talkingPoints: [
              "Define the business problem and success metrics first",
              "Collect and explore data (EDA), handle quality issues",
              "Feature engineering and selection",
              "Model training, evaluation, and hyperparameter tuning",
              "Deployment, monitoring, and retraining loop",
            ],
            keywords: [
              "CRISP-DM",
              "EDA",
              "feature engineering",
              "hyperparameter tuning",
              "model deployment",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "ml-ip-i-1",
            question: "How do you handle imbalanced datasets?",
            talkingPoints: [
              "Understand the imbalance ratio and domain impact (fraud, medical)",
              "Oversampling minority class: SMOTE to synthesize new samples",
              "Undersampling majority class or combining both",
              "Use appropriate metrics: precision-recall AUC, F1, not accuracy",
              "Class weighting in model loss function",
            ],
            keywords: [
              "SMOTE",
              "class imbalance",
              "precision-recall",
              "F1 score",
              "oversampling",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "ml-ip-a-1",
            question:
              "How would you design an ML system for fraud detection at scale?",
            talkingPoints: [
              "Real-time feature computation (transaction velocity, device, geo) with feature store",
              "Online learning or frequent retraining as fraud patterns shift",
              "Ensemble: rule-based + ML model for interpretability + performance",
              "Extremely imbalanced data — design training pipeline accordingly",
              "Monitor false positive rate carefully — impacts real user experience",
            ],
            keywords: [
              "feature store",
              "real-time inference",
              "concept drift",
              "precision-recall",
              "explainability",
            ],
          },
        ],
      },
    ],
  },

  "devops-engineer": {
    freeCourses: [
      {
        name: "Docker and Kubernetes – Full Course",
        url: "https://www.youtube.com/watch?v=bhBSlnQcq2k",
        provider: "freeCodeCamp",
        platform: "YouTube",
        language: "English",
        level: "Beginner",
      },
      {
        name: "DevOps Tutorial in Hindi",
        url: "https://www.youtube.com/results?search_query=devops+tutorial+hindi",
        provider: "Abhishek Veeramalla",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "DevOps & Kubernetes Telugu Tutorial",
        url: "https://www.youtube.com/results?search_query=devops+kubernetes+telugu",
        provider: "Telugu TechWorld",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "AWS Cloud Practitioner Essentials (Free)",
        url: "https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/",
        provider: "AWS",
        platform: "edX",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Google Cloud Fundamentals – Coursera",
        url: "https://www.coursera.org/learn/gcp-fundamentals",
        provider: "Google Cloud / Coursera",
        platform: "Coursera",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Linux Command Line Basics",
        url: "https://www.guvi.in/courses/linux",
        provider: "GUVI",
        platform: "GUVI",
        language: "English & Hindi",
        level: "Beginner",
      },
      {
        name: "Terraform for Beginners",
        url: "https://www.youtube.com/watch?v=SLB_c_ayRMo",
        provider: "freeCodeCamp",
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
            id: "do-b-1",
            question: "What does CI/CD stand for?",
            topic: "DevOps Basics",
            explanation:
              "CI/CD stands for Continuous Integration and Continuous Delivery/Deployment. CI automates building and testing code on each commit; CD automates delivery to production.",
            options: [
              { text: "Code Integration / Code Deployment", isCorrect: false },
              {
                text: "Continuous Integration / Continuous Delivery (or Deployment)",
                isCorrect: true,
              },
              {
                text: "Cloud Infrastructure / Cloud Delivery",
                isCorrect: false,
              },
              {
                text: "Container Integration / Container Distribution",
                isCorrect: false,
              },
            ],
          },
          {
            id: "do-b-2",
            question: "What is Docker used for?",
            topic: "Containers",
            explanation:
              "Docker packages an application and its dependencies into a container — a standardized unit that runs consistently across different environments (dev, test, production).",
            options: [
              { text: "Managing cloud server billing", isCorrect: false },
              {
                text: "Packaging apps and dependencies into portable containers",
                isCorrect: true,
              },
              { text: "Monitoring application performance", isCorrect: false },
              { text: "Writing infrastructure as code", isCorrect: false },
            ],
          },
          {
            id: "do-b-3",
            question: "What is the main purpose of Kubernetes?",
            topic: "Container Orchestration",
            explanation:
              "Kubernetes automates deployment, scaling, and management of containerized applications across a cluster of machines.",
            options: [
              { text: "Building Docker images", isCorrect: false },
              {
                text: "Orchestrating and scaling containerized applications",
                isCorrect: true,
              },
              { text: "Monitoring server logs", isCorrect: false },
              { text: "Writing CI/CD pipelines", isCorrect: false },
            ],
          },
          {
            id: "do-b-4",
            question: "What is Infrastructure as Code (IaC)?",
            topic: "IaC",
            explanation:
              "Infrastructure as Code manages and provisions infrastructure through machine-readable configuration files rather than manual processes, enabling version control and reproducibility.",
            options: [
              {
                text: "Writing backend code for infrastructure companies",
                isCorrect: false,
              },
              {
                text: "Managing infrastructure through configuration files and automation",
                isCorrect: true,
              },
              {
                text: "A programming language for cloud platforms",
                isCorrect: false,
              },
              { text: "An on-premise data center setup", isCorrect: false },
            ],
          },
          {
            id: "do-b-5",
            question:
              "What is the difference between a container and a virtual machine?",
            topic: "Containers vs VMs",
            explanation:
              "Containers share the host OS kernel (lightweight, fast). VMs include the entire OS (heavier, full isolation). Containers start in milliseconds; VMs take minutes.",
            options: [
              { text: "Containers are always more secure", isCorrect: false },
              {
                text: "Containers share host OS kernel (light); VMs include full OS (heavy)",
                isCorrect: true,
              },
              { text: "They are functionally identical", isCorrect: false },
              {
                text: "VMs are for Linux; containers are for Windows",
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
            id: "do-i-1",
            question: "What is a Kubernetes Pod?",
            topic: "Kubernetes",
            explanation:
              "A Pod is the smallest deployable unit in Kubernetes — it groups one or more containers that share network and storage, always scheduled together on the same node.",
            options: [
              { text: "A Kubernetes cluster", isCorrect: false },
              {
                text: "The smallest deployable unit grouping one or more containers",
                isCorrect: true,
              },
              { text: "A node in a Kubernetes cluster", isCorrect: false },
              { text: "A container image registry", isCorrect: false },
            ],
          },
          {
            id: "do-i-2",
            question: "What is the purpose of a Dockerfile?",
            topic: "Docker",
            explanation:
              "A Dockerfile contains instructions to build a Docker image — specifying the base image, dependencies, configuration, and commands to run the application.",
            options: [
              { text: "It configures a Kubernetes cluster", isCorrect: false },
              {
                text: "A set of instructions for building a Docker image",
                isCorrect: true,
              },
              { text: "A docker-compose configuration", isCorrect: false },
              { text: "A CI/CD pipeline configuration", isCorrect: false },
            ],
          },
          {
            id: "do-i-3",
            question: "What does Terraform do?",
            topic: "Infrastructure as Code",
            explanation:
              "Terraform is a tool by HashiCorp for declaratively defining, provisioning, and managing cloud infrastructure (AWS, Azure, GCP) using configuration files.",
            options: [
              { text: "Monitors application performance", isCorrect: false },
              {
                text: "Declaratively provisions cloud infrastructure as code",
                isCorrect: true,
              },
              { text: "Builds Docker images", isCorrect: false },
              { text: "Manages Kubernetes pod scaling", isCorrect: false },
            ],
          },
          {
            id: "do-i-4",
            question: "What is blue-green deployment?",
            topic: "Deployment Strategies",
            explanation:
              "Blue-green deployment maintains two identical production environments. The new version is deployed to the inactive (green) environment and traffic switches instantly, enabling zero-downtime deploys and easy rollback.",
            options: [
              {
                text: "A color scheme for infrastructure dashboards",
                isCorrect: false,
              },
              {
                text: "Two identical environments enabling zero-downtime deploys with instant traffic switching",
                isCorrect: true,
              },
              {
                text: "Deploying to blue team servers first, then green team",
                isCorrect: false,
              },
              {
                text: "A Kubernetes rolling update strategy",
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
            id: "do-a-1",
            question: "What is GitOps?",
            topic: "GitOps",
            explanation:
              "GitOps uses Git as the single source of truth for declarative infrastructure and applications. Changes to Git repos automatically trigger deployments through operators like ArgoCD or Flux.",
            options: [
              {
                text: "Using Git for source code management only",
                isCorrect: false,
              },
              {
                text: "Using Git as the single source of truth for automated infrastructure deployments",
                isCorrect: true,
              },
              {
                text: "A GitHub feature for infrastructure templates",
                isCorrect: false,
              },
              {
                text: "Git branching strategy for DevOps teams",
                isCorrect: false,
              },
            ],
          },
          {
            id: "do-a-2",
            question: "What is service mesh and when would you use it?",
            topic: "Microservices",
            explanation:
              "A service mesh (Istio, Linkerd) handles service-to-service communication: load balancing, mTLS encryption, observability, retries, and circuit breaking — without changing application code.",
            options: [
              { text: "A network of physical servers", isCorrect: false },
              {
                text: "Infrastructure layer for service-to-service communication, observability, and security",
                isCorrect: true,
              },
              { text: "A container registry solution", isCorrect: false },
              { text: "A DNS management solution", isCorrect: false },
            ],
          },
          {
            id: "do-a-3",
            question: "How does Kubernetes handle rolling updates?",
            topic: "Kubernetes",
            explanation:
              "Kubernetes rolling updates incrementally replace old pods with new ones. It respects maxSurge (extra pods allowed) and maxUnavailable settings to ensure desired availability during the update.",
            options: [
              {
                text: "It deletes all old pods at once and creates new ones",
                isCorrect: false,
              },
              {
                text: "It incrementally replaces pods while maintaining configured availability",
                isCorrect: true,
              },
              {
                text: "Rolling updates require manual pod deletion",
                isCorrect: false,
              },
              {
                text: "It creates a second cluster for updates",
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
            id: "do-ip-b-1",
            question: "Explain the DevOps lifecycle.",
            talkingPoints: [
              "Plan → Develop → Build → Test → Release → Deploy → Operate → Monitor, then loop",
              "Core principle: break down silos between development and operations",
              "Automation at every stage reduces manual errors",
              "Cultural shift as much as technical — shared responsibility",
              "Metrics: deployment frequency, lead time, MTTR, change failure rate (DORA)",
            ],
            keywords: [
              "CI/CD",
              "automation",
              "DORA metrics",
              "shift left",
              "infrastructure as code",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "do-ip-i-1",
            question: "How would you design a CI/CD pipeline?",
            talkingPoints: [
              "Source: code push triggers pipeline (GitHub Actions, Jenkins, GitLab CI)",
              "Build: compile code, run unit tests, build Docker image",
              "Test: integration tests, security scan (SAST/DAST), code quality gate",
              "Staging: deploy to staging, run E2E tests",
              "Production: deploy with rolling/blue-green strategy, health checks",
            ],
            keywords: [
              "pipeline stages",
              "GitHub Actions",
              "SAST",
              "Docker image",
              "smoke tests",
              "rollback",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "do-ip-a-1",
            question:
              "How would you handle secrets management in a Kubernetes cluster?",
            talkingPoints: [
              "Never store secrets in Git or Docker images (even base64 is not encryption)",
              "Use Kubernetes Secrets with encryption at rest enabled",
              "Integrate with external secrets managers: HashiCorp Vault, AWS Secrets Manager",
              "Vault Agent or External Secrets Operator to sync secrets to K8s",
              "Rotate secrets regularly; use least-privilege service accounts",
            ],
            keywords: [
              "Vault",
              "External Secrets Operator",
              "RBAC",
              "encryption at rest",
              "least privilege",
            ],
          },
        ],
      },
    ],
  },

  "qa-automation-engineer": {
    freeCourses: [
      {
        name: "Selenium WebDriver Full Course",
        url: "https://www.youtube.com/watch?v=j7VZsCCnptM",
        provider: "freeCodeCamp",
        platform: "YouTube",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Software Testing in Hindi",
        url: "https://www.youtube.com/results?search_query=software+testing+hindi+tutorial",
        provider: "Naukri Learning",
        platform: "YouTube",
        language: "Hindi",
        level: "Beginner",
      },
      {
        name: "Selenium Testing Telugu Tutorial",
        url: "https://www.youtube.com/results?search_query=selenium+testing+telugu",
        provider: "Naresh IT Telugu",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "ISTQB Exam Prep – Free",
        url: "https://www.youtube.com/results?search_query=ISTQB+foundation+exam+prep",
        provider: "QA Automated",
        platform: "YouTube",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "Postman API Testing Tutorial",
        url: "https://www.youtube.com/watch?v=VywxIQ2ZXw4",
        provider: "Postman",
        platform: "YouTube",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Cypress End-to-End Testing",
        url: "https://www.youtube.com/watch?v=avBUqv9TQCY",
        provider: "freeCodeCamp",
        platform: "YouTube",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "Test Automation in Hindi – Playwright",
        url: "https://www.youtube.com/results?search_query=playwright+testing+hindi",
        provider: "Anuj Magazine",
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
            id: "qa-b-1",
            question:
              "What is the difference between functional and non-functional testing?",
            topic: "Testing Fundamentals",
            explanation:
              "Functional testing verifies what the system does (features, business logic). Non-functional testing verifies how well it does it (performance, security, usability).",
            options: [
              {
                text: "Functional = automated; non-functional = manual",
                isCorrect: false,
              },
              {
                text: "Functional tests features/behavior; non-functional tests performance/reliability/security",
                isCorrect: true,
              },
              { text: "Non-functional is more important", isCorrect: false },
              {
                text: "They are the same with different names",
                isCorrect: false,
              },
            ],
          },
          {
            id: "qa-b-2",
            question: "What is a test case?",
            topic: "Testing Basics",
            explanation:
              "A test case is a documented set of conditions, inputs, actions, and expected results to verify a specific functionality or behavior of a system.",
            options: [
              { text: "A bug report", isCorrect: false },
              {
                text: "A documented set of steps and expected results to verify a feature",
                isCorrect: true,
              },
              { text: "A test automation script", isCorrect: false },
              { text: "A requirements document", isCorrect: false },
            ],
          },
          {
            id: "qa-b-3",
            question:
              "What is the difference between black-box and white-box testing?",
            topic: "Testing Types",
            explanation:
              "Black-box testing tests functionality without knowledge of internal code. White-box testing tests internal structure and code logic, requires access to source code.",
            options: [
              {
                text: "Black-box is manual; white-box is automated",
                isCorrect: false,
              },
              {
                text: "Black-box tests functionality without code knowledge; white-box tests internal code structure",
                isCorrect: true,
              },
              {
                text: "White-box is for UI; black-box is for APIs",
                isCorrect: false,
              },
              {
                text: "Black-box is harder and more expensive",
                isCorrect: false,
              },
            ],
          },
          {
            id: "qa-b-4",
            question: "What is regression testing?",
            topic: "Testing Strategy",
            explanation:
              "Regression testing verifies that new code changes did not break existing functionality. It re-runs existing test cases after changes to detect unintended side effects.",
            options: [
              { text: "Testing new features", isCorrect: false },
              {
                text: "Verifying existing functionality was not broken by new changes",
                isCorrect: true,
              },
              { text: "Testing performance regression", isCorrect: false },
              {
                text: "Reverting code to a previous version",
                isCorrect: false,
              },
            ],
          },
          {
            id: "qa-b-5",
            question: "What is the difference between a bug and a defect?",
            topic: "Testing Terms",
            explanation:
              "In practice, they are used interchangeably. Technically: a bug is an error in code; a defect is a deviation from expected behavior. All defects in running software can be called bugs.",
            options: [
              {
                text: "A bug is in code; a defect is in requirements",
                isCorrect: false,
              },
              {
                text: "In practice, they are interchangeable — both describe software failing to meet expectations",
                isCorrect: true,
              },
              { text: "A defect is more severe than a bug", isCorrect: false },
              {
                text: "Bugs are found by developers; defects by QA",
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
            id: "qa-i-1",
            question: "What is the Page Object Model (POM) design pattern?",
            topic: "Test Architecture",
            explanation:
              "POM separates page structure from test logic. Each page has a corresponding class with locators and methods. Tests call page methods, not locators directly — improving maintainability.",
            options: [
              {
                text: "A way to create PDF reports from test results",
                isCorrect: false,
              },
              {
                text: "A pattern separating page locators/actions into classes from test logic",
                isCorrect: true,
              },
              {
                text: "A methodology for manual test case writing",
                isCorrect: false,
              },
              { text: "A type of test data management", isCorrect: false },
            ],
          },
          {
            id: "qa-i-2",
            question:
              "What is API testing and how does it differ from UI testing?",
            topic: "API Testing",
            explanation:
              "API testing validates backend services directly (HTTP requests/responses) without going through the UI. It is faster, more stable, and catches issues earlier than UI testing.",
            options: [
              {
                text: "API testing is done only by developers",
                isCorrect: false,
              },
              {
                text: "API testing validates backend directly; faster and more stable than UI testing",
                isCorrect: true,
              },
              {
                text: "API testing requires no programming knowledge",
                isCorrect: false,
              },
              {
                text: "UI and API testing are done with the same tools",
                isCorrect: false,
              },
            ],
          },
          {
            id: "qa-i-3",
            question: "What is test coverage and why does it matter?",
            topic: "Testing Metrics",
            explanation:
              "Test coverage measures what percentage of code/requirements is exercised by tests. High coverage reduces the risk of undetected bugs but does not guarantee quality — the quality of tests matters too.",
            options: [
              { text: "How many tests you have written", isCorrect: false },
              {
                text: "The percentage of code/requirements exercised by tests",
                isCorrect: true,
              },
              { text: "How fast your tests run", isCorrect: false },
              {
                text: "The number of test environments configured",
                isCorrect: false,
              },
            ],
          },
          {
            id: "qa-i-4",
            question:
              "What is the difference between load testing and stress testing?",
            topic: "Performance Testing",
            explanation:
              "Load testing verifies behavior under expected (normal) load. Stress testing pushes beyond normal load to find the breaking point and observe how the system fails.",
            options: [
              {
                text: "Load testing is for databases; stress testing is for APIs",
                isCorrect: false,
              },
              {
                text: "Load tests expected load; stress tests push beyond limits to find breaking point",
                isCorrect: true,
              },
              {
                text: "They are the same technique with different names",
                isCorrect: false,
              },
              {
                text: "Stress testing is done before load testing",
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
            id: "qa-a-1",
            question:
              "How would you approach building a test automation framework from scratch?",
            topic: "Framework Design",
            explanation:
              "Key decisions: test framework (Selenium/Playwright/Cypress), language (Java/Python/JS), design patterns (POM, Screenplay), parallel execution, reporting (Allure), CI/CD integration, and data management strategy.",
            options: [
              { text: "Start by writing tests immediately", isCorrect: false },
              {
                text: "Evaluate requirements, choose tools, implement POM structure, CI integration, reporting",
                isCorrect: true,
              },
              {
                text: "Copy an existing framework from GitHub",
                isCorrect: false,
              },
              { text: "Write tests in plain language first", isCorrect: false },
            ],
          },
          {
            id: "qa-a-2",
            question: "What is shift-left testing?",
            topic: "Modern QA",
            explanation:
              "Shift-left testing moves testing earlier in the development lifecycle — involving QA in requirements, writing tests before code (TDD), and integrating tests into CI from day one, catching bugs when they are cheapest to fix.",
            options: [
              {
                text: "Moving QA team to the left side of the office",
                isCorrect: false,
              },
              {
                text: "Integrating testing earlier in the development lifecycle to catch bugs sooner",
                isCorrect: true,
              },
              {
                text: "A type of left-to-right script testing",
                isCorrect: false,
              },
              { text: "Reducing the number of tests", isCorrect: false },
            ],
          },
          {
            id: "qa-a-3",
            question: "What is contract testing in microservices?",
            topic: "Microservices Testing",
            explanation:
              'Contract testing verifies that services can communicate correctly by testing the "contract" (API agreement) between consumer and provider independently, without needing both to run simultaneously. Pact is a popular tool.',
            options: [
              {
                text: "Legal agreements between QA teams and developers",
                isCorrect: false,
              },
              {
                text: "Testing the API agreement between services independently without both running",
                isCorrect: true,
              },
              {
                text: "Integration testing between two services",
                isCorrect: false,
              },
              {
                text: "Verifying SLA contracts for external APIs",
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
            id: "qa-ip-b-1",
            question: "What is your approach to writing effective test cases?",
            talkingPoints: [
              "Understand requirements thoroughly before writing any test",
              "Cover positive (happy path), negative, and boundary test cases",
              "Each test case should test one thing — single responsibility",
              "Include clear preconditions, steps, and expected results",
              "Prioritize based on risk and critical user paths",
            ],
            keywords: [
              "boundary testing",
              "equivalence partitioning",
              "test coverage",
              "acceptance criteria",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "qa-ip-i-1",
            question: "How do you decide what to automate vs. keep manual?",
            talkingPoints: [
              "Automate: regression tests, smoke tests, data-driven tests, high-frequency scenarios",
              "Keep manual: exploratory testing, UI/UX review, one-time tests, unstable features",
              "Consider maintenance cost — flaky automated tests are worse than manual",
              "ROI calculation: frequency × time saved vs. automation development cost",
            ],
            keywords: [
              "automation ROI",
              "flaky tests",
              "exploratory testing",
              "regression suite",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "qa-ip-a-1",
            question:
              "How would you build a QA strategy for a microservices application?",
            talkingPoints: [
              "Testing pyramid: unit (lots) → integration → contract → E2E (few)",
              "Contract testing with Pact for service boundaries",
              "Consumer-driven contracts to prevent breaking changes",
              "Chaos engineering to test resilience (Chaos Monkey)",
              'Observability in production as the "last line of QA"',
            ],
            keywords: [
              "testing pyramid",
              "contract testing",
              "Pact",
              "chaos engineering",
              "observability",
            ],
          },
        ],
      },
    ],
  },

  "cloud-engineer": {
    freeCourses: [
      {
        name: "AWS Cloud Practitioner Essentials",
        url: "https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/",
        provider: "AWS",
        platform: "edX",
        language: "English",
        level: "Beginner",
      },
      {
        name: "AWS Solutions Architect in Hindi",
        url: "https://www.youtube.com/results?search_query=aws+solutions+architect+hindi",
        provider: "Abhishek Veeramalla",
        platform: "YouTube",
        language: "Hindi",
        level: "Intermediate",
      },
      {
        name: "Cloud Computing Telugu Tutorial",
        url: "https://www.youtube.com/results?search_query=cloud+computing+telugu",
        provider: "Telugu TechWorld",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "Microsoft Azure Fundamentals (AZ-900) Free",
        url: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
        provider: "Microsoft Learn",
        platform: "edX",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Google Cloud Associate Engineer Prep",
        url: "https://www.coursera.org/professional-certificates/cloud-engineering-gcp",
        provider: "Google Cloud / Coursera",
        platform: "Coursera",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "Cloud Computing NPTEL",
        url: "https://nptel.ac.in/courses/106104185",
        provider: "IIT Kharagpur / NPTEL",
        platform: "NPTEL",
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
            id: "ce-b-1",
            question: "What are the three main cloud service models?",
            topic: "Cloud Basics",
            explanation:
              "IaaS (Infrastructure as a Service), PaaS (Platform as a Service), and SaaS (Software as a Service) — increasing abstraction from infrastructure at each level.",
            options: [
              { text: "Public, Private, Hybrid", isCorrect: false },
              { text: "IaaS, PaaS, SaaS", isCorrect: true },
              { text: "On-demand, Reserved, Spot", isCorrect: false },
              { text: "Compute, Storage, Networking", isCorrect: false },
            ],
          },
          {
            id: "ce-b-2",
            question: "What is cloud elasticity?",
            topic: "Cloud Concepts",
            explanation:
              "Cloud elasticity is the ability to automatically scale computing resources up or down based on demand, paying only for what you use.",
            options: [
              {
                text: "The ability to stretch network cables",
                isCorrect: false,
              },
              {
                text: "Automatically scaling resources up or down based on demand",
                isCorrect: true,
              },
              {
                text: "Flexibility in choosing cloud providers",
                isCorrect: false,
              },
              {
                text: "The speed of cloud network connections",
                isCorrect: false,
              },
            ],
          },
          {
            id: "ce-b-3",
            question: "What is an AWS EC2 instance?",
            topic: "AWS",
            explanation:
              "EC2 (Elastic Compute Cloud) provides resizable virtual servers in the cloud. You can launch instances with different OS, CPU, RAM, and storage configurations.",
            options: [
              { text: "A cloud database service", isCorrect: false },
              { text: "A virtual server in the cloud", isCorrect: true },
              { text: "An object storage service", isCorrect: false },
              { text: "A CDN service", isCorrect: false },
            ],
          },
          {
            id: "ce-b-4",
            question:
              "What is the difference between object storage and block storage?",
            topic: "Storage",
            explanation:
              "Object storage (AWS S3) stores data as objects with metadata — great for unstructured data. Block storage (AWS EBS) presents raw storage as disks to VMs — great for databases and OS.",
            options: [
              { text: "Object storage is slower", isCorrect: false },
              {
                text: "Object storage for unstructured data; block storage as raw disks for VMs",
                isCorrect: true,
              },
              { text: "Block storage is for backups only", isCorrect: false },
              { text: "They are the same thing", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "intermediate",
        passingScore: 65,
        questions: [
          {
            id: "ce-i-1",
            question: "What is AWS IAM and why is it important?",
            topic: "Security",
            explanation:
              "IAM (Identity and Access Management) controls who can access AWS resources and what they can do. It implements the principle of least privilege — grant only what is needed.",
            options: [
              { text: "A monitoring service", isCorrect: false },
              {
                text: "AWS service for managing users, roles, and permissions",
                isCorrect: true,
              },
              { text: "An instance type selector", isCorrect: false },
              { text: "An infrastructure as code tool", isCorrect: false },
            ],
          },
          {
            id: "ce-i-2",
            question: "What is a VPC (Virtual Private Cloud)?",
            topic: "Networking",
            explanation:
              "A VPC is an isolated virtual network you define in the cloud — with your own IP ranges, subnets, route tables, and network gateways. It is the network foundation for cloud resources.",
            options: [
              { text: "A type of cloud server", isCorrect: false },
              {
                text: "An isolated virtual network in the cloud you control",
                isCorrect: true,
              },
              { text: "A private cloud hosting company", isCorrect: false },
              { text: "A VPN for connecting offices", isCorrect: false },
            ],
          },
          {
            id: "ce-i-3",
            question:
              "What is the purpose of a Content Delivery Network (CDN)?",
            topic: "Networking",
            explanation:
              "A CDN (like AWS CloudFront) caches content at edge locations geographically close to users, reducing latency and improving load times for static assets and dynamic content.",
            options: [
              { text: "To deliver physical server hardware", isCorrect: false },
              {
                text: "To cache and serve content from edge locations closer to users",
                isCorrect: true,
              },
              {
                text: "To synchronize databases across regions",
                isCorrect: false,
              },
              { text: "To manage content moderation", isCorrect: false },
            ],
          },
        ],
      },
      {
        level: "advanced",
        passingScore: 70,
        questions: [
          {
            id: "ce-a-1",
            question: "How do you design for high availability on AWS?",
            topic: "Architecture",
            explanation:
              "HA design: deploy across multiple Availability Zones, use Auto Scaling Groups with ALB, managed services with built-in redundancy (RDS Multi-AZ), and health checks with failover.",
            options: [
              {
                text: "Use the largest instance type available",
                isCorrect: false,
              },
              {
                text: "Multi-AZ deployment, Auto Scaling, load balancers, and managed services",
                isCorrect: true,
              },
              { text: "Enable CloudWatch monitoring", isCorrect: false },
              { text: "Use on-demand instances only", isCorrect: false },
            ],
          },
          {
            id: "ce-a-2",
            question: "What is cloud cost optimization?",
            topic: "Cost Management",
            explanation:
              "Cloud cost optimization involves right-sizing instances, using Reserved/Spot instances for predictable workloads, auto-scaling to match demand, and eliminating unused resources.",
            options: [
              {
                text: "Switching to the cheapest cloud provider",
                isCorrect: false,
              },
              {
                text: "Right-sizing, reserved capacity, auto-scaling, and eliminating waste",
                isCorrect: true,
              },
              { text: "Using only free tier services", isCorrect: false },
              {
                text: "Reducing the number of cloud regions",
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
            id: "ce-ip-b-1",
            question:
              "Explain the shared responsibility model in cloud computing.",
            talkingPoints: [
              "Cloud provider is responsible for security OF the cloud (physical infrastructure, hardware)",
              "Customer is responsible for security IN the cloud (data, IAM, network config, OS)",
              "Boundary varies by service model: IaaS customer manages OS; PaaS only app/data",
              "Common mistake: assuming cloud provider handles all security",
            ],
            keywords: [
              "shared responsibility",
              "IAM",
              "data encryption",
              "compliance",
              "customer responsibility",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "ce-ip-i-1",
            question:
              "How would you migrate an on-premise application to the cloud?",
            talkingPoints: [
              "Assess: inventory, dependencies, performance requirements",
              "Migration strategies (6 Rs): Rehost (lift and shift), Replatform, Refactor, Repurchase, Retire, Retain",
              "Start with non-critical workloads to build expertise",
              "Establish landing zone: VPC, IAM, logging, security baseline",
              "Test thoroughly in staging; plan cutover and rollback",
            ],
            keywords: [
              "lift and shift",
              "6 Rs",
              "landing zone",
              "TCO",
              "migration plan",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "ce-ip-a-1",
            question:
              "Design a multi-region disaster recovery architecture on AWS.",
            talkingPoints: [
              "Define RPO (recovery point objective) and RTO (recovery time objective)",
              "Strategies: Backup/Restore (cheapest), Pilot Light, Warm Standby, Active-Active",
              "For low RTO: Active-Active with Route 53 failover routing",
              "Data replication: S3 Cross-Region Replication, RDS Global Database, DynamoDB Global Tables",
              "Test DR regularly — untested DR is not DR",
            ],
            keywords: [
              "RPO",
              "RTO",
              "Active-Active",
              "Route 53 failover",
              "Global Database",
              "chaos engineering",
            ],
          },
        ],
      },
    ],
  },

  "data-engineer": {
    freeCourses: [
      {
        name: "Data Engineering Zoomcamp (Free)",
        url: "https://github.com/DataTalksClub/data-engineering-zoomcamp",
        provider: "DataTalks.Club",
        platform: "YouTube",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "Apache Spark Tutorial Hindi",
        url: "https://www.youtube.com/results?search_query=apache+spark+tutorial+hindi",
        provider: "Krish Naik",
        platform: "YouTube",
        language: "Hindi",
        level: "Intermediate",
      },
      {
        name: "Data Engineering Telugu Tutorial",
        url: "https://www.youtube.com/results?search_query=data+engineering+telugu",
        provider: "Telugu TechWorld",
        platform: "YouTube",
        language: "Telugu",
        level: "Beginner",
      },
      {
        name: "IBM Data Engineering Professional Certificate",
        url: "https://www.coursera.org/professional-certificates/ibm-data-engineer",
        provider: "IBM / Coursera",
        platform: "Coursera",
        language: "English",
        level: "Beginner",
      },
      {
        name: "Apache Kafka for Beginners",
        url: "https://www.youtube.com/watch?v=Ch5VhJzaoaI",
        provider: "freeCodeCamp",
        platform: "YouTube",
        language: "English",
        level: "Intermediate",
      },
      {
        name: "SQL for Data Engineering – NPTEL",
        url: "https://nptel.ac.in/courses/106105175",
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
            id: "de-b-1",
            question: "What does ETL stand for in data engineering?",
            topic: "Data Pipelines",
            explanation:
              "ETL stands for Extract, Transform, Load — the three stages of moving data from source systems to a destination (usually a data warehouse).",
            options: [
              { text: "Execute, Test, Launch", isCorrect: false },
              { text: "Extract, Transform, Load", isCorrect: true },
              { text: "Encode, Transfer, Link", isCorrect: false },
              { text: "Export, Track, Log", isCorrect: false },
            ],
          },
          {
            id: "de-b-2",
            question: "What is Apache Kafka primarily used for?",
            topic: "Streaming",
            explanation:
              "Apache Kafka is a distributed event streaming platform used for high-throughput, real-time data pipelines and event-driven architectures.",
            options: [
              { text: "Batch processing of large files", isCorrect: false },
              {
                text: "Real-time distributed event streaming and messaging",
                isCorrect: true,
              },
              { text: "SQL database management", isCorrect: false },
              { text: "Machine learning model training", isCorrect: false },
            ],
          },
          {
            id: "de-b-3",
            question: "What is a data warehouse?",
            topic: "Data Architecture",
            explanation:
              "A data warehouse is a centralized repository that stores integrated, historical data from multiple sources, optimized for analytical querying and reporting.",
            options: [
              { text: "A file storage system like Dropbox", isCorrect: false },
              {
                text: "A centralized repository of structured, historical data optimized for analytics",
                isCorrect: true,
              },
              { text: "A transactional database", isCorrect: false },
              { text: "A place to store raw log files", isCorrect: false },
            ],
          },
          {
            id: "de-b-4",
            question:
              "What is the difference between batch and stream processing?",
            topic: "Processing Types",
            explanation:
              "Batch processing handles large volumes of data at scheduled intervals. Stream processing handles data continuously in real-time as it arrives. Batch has higher latency; streaming has lower.",
            options: [
              {
                text: "Batch is for large companies; streaming for startups",
                isCorrect: false,
              },
              {
                text: "Batch processes at intervals; stream processing handles data continuously in real-time",
                isCorrect: true,
              },
              {
                text: "Streaming is always better than batch",
                isCorrect: false,
              },
              {
                text: "Batch requires more memory than streaming",
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
            id: "de-i-1",
            question: "What is data partitioning and why is it important?",
            topic: "Data Storage",
            explanation:
              "Partitioning divides large tables into smaller, manageable pieces (usually by date or category). Queries can skip irrelevant partitions (partition pruning), dramatically improving performance.",
            options: [
              {
                text: "Splitting a database server into multiple instances",
                isCorrect: false,
              },
              {
                text: "Dividing data into segments for improved query performance and management",
                isCorrect: true,
              },
              { text: "Encrypting sensitive data fields", isCorrect: false },
              {
                text: "Backing up data across multiple regions",
                isCorrect: false,
              },
            ],
          },
          {
            id: "de-i-2",
            question: "What is Apache Airflow used for?",
            topic: "Orchestration",
            explanation:
              "Apache Airflow is a workflow orchestration platform for authoring, scheduling, and monitoring data pipelines (DAGs — Directed Acyclic Graphs).",
            options: [
              { text: "Stream processing of data", isCorrect: false },
              {
                text: "Orchestrating, scheduling, and monitoring data workflow DAGs",
                isCorrect: true,
              },
              { text: "Training machine learning models", isCorrect: false },
              { text: "A distributed storage system", isCorrect: false },
            ],
          },
          {
            id: "de-i-3",
            question: "What is a slowly changing dimension (SCD)?",
            topic: "Data Modeling",
            explanation:
              "An SCD is a dimension table attribute that changes over time. Type 1 overwrites old value; Type 2 adds a new row and keeps history; Type 3 keeps current and previous values.",
            options: [
              {
                text: "A database that performs slow queries",
                isCorrect: false,
              },
              {
                text: "A dimension attribute that changes over time with different strategies for tracking history",
                isCorrect: true,
              },
              { text: "A type of streaming data dimension", isCorrect: false },
              {
                text: "A dimension with a slow update schedule",
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
            id: "de-a-1",
            question:
              "What is the difference between a data lake, lakehouse, and data warehouse?",
            topic: "Data Architecture",
            explanation:
              "Data warehouse: structured, query-optimized. Data lake: raw data any format, cheap storage. Data lakehouse combines both — open formats (Parquet + Delta Lake) with warehouse-like capabilities (ACID, indexing).",
            options: [
              {
                text: "Data lake and lakehouse are the same",
                isCorrect: false,
              },
              {
                text: "Lakehouse combines lake flexibility with warehouse capabilities on open formats",
                isCorrect: true,
              },
              {
                text: "Data warehouse is always the best choice",
                isCorrect: false,
              },
              { text: "They differ only in cloud provider", isCorrect: false },
            ],
          },
          {
            id: "de-a-2",
            question: "What is data lineage and why is it important?",
            topic: "Data Governance",
            explanation:
              "Data lineage tracks the origin, movement, and transformation of data throughout the pipeline. Critical for debugging, compliance (GDPR), impact analysis, and building trust in data.",
            options: [
              {
                text: "The length of time data has been stored",
                isCorrect: false,
              },
              {
                text: "Tracking where data came from and every transformation it underwent",
                isCorrect: true,
              },
              {
                text: "The hierarchy of data access permissions",
                isCorrect: false,
              },
              { text: "A database schema version history", isCorrect: false },
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
            id: "de-ip-b-1",
            question: "Explain the components of a modern data stack.",
            talkingPoints: [
              "Ingestion: Fivetran, Airbyte, Kafka, custom pipelines",
              "Storage: cloud data warehouse (BigQuery, Snowflake, Redshift)",
              "Transformation: dbt for SQL-based transforms",
              "Orchestration: Apache Airflow or Prefect for scheduling",
              "BI Layer: Metabase, Looker, Power BI for consumption",
            ],
            keywords: [
              "data stack",
              "dbt",
              "Airflow",
              "BigQuery",
              "Fivetran",
              "ELT",
            ],
          },
        ],
      },
      {
        level: "intermediate",
        questions: [
          {
            id: "de-ip-i-1",
            question: "How do you ensure data quality in a pipeline?",
            talkingPoints: [
              "Define data quality dimensions: completeness, accuracy, consistency, timeliness",
              "Validate at ingestion: schema checks, null checks, range validation",
              "Monitoring: row count anomaly detection, SLA breach alerts",
              "Great Expectations or dbt tests for automated quality checks",
              "Data contracts between producers and consumers",
            ],
            keywords: [
              "data quality",
              "Great Expectations",
              "dbt tests",
              "data contracts",
              "SLA monitoring",
            ],
          },
        ],
      },
      {
        level: "advanced",
        questions: [
          {
            id: "de-ip-a-1",
            question:
              "Design a real-time data pipeline for an e-commerce platform.",
            talkingPoints: [
              "Producers emit events (order placed, payment, shipment) to Kafka topics",
              "Kafka Streams or Flink for real-time processing and enrichment",
              "Feature store for ML: computed features available sub-millisecond",
              "Lambda architecture: fast path (streaming) + slow path (batch) serving same queries",
              "Dead letter queue for failed events; idempotent consumers",
            ],
            keywords: [
              "Kafka",
              "Flink",
              "lambda architecture",
              "feature store",
              "idempotent",
              "dead letter queue",
            ],
          },
        ],
      },
    ],
  },
};
