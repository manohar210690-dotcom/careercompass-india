// roleExtrasData2.ts — Free Courses, Mock Tests, Interview Prep for ML/AI, DevOps, QA roles
import type {
  FreeCourse,
  InterviewGuide,
  InterviewPrep,
  MockTest,
} from "./roleExtras";

interface RoleExtras {
  freeCourses?: FreeCourse[];
  mockTests?: MockTest[];
  interviewPrep?: InterviewPrep[];
  interviewGuide?: InterviewGuide;
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
    interviewGuide: {
      revisionTopics: [
        {
          category: "Machine Learning Core",
          topics: [
            "Supervised learning algorithms: linear/logistic regression, SVM, decision trees, ensembles",
            "Bias-variance tradeoff, regularization (L1, L2, elastic net)",
            "Model evaluation metrics: AUC-ROC, precision-recall, F1, RMSE",
            "Feature engineering: encoding, scaling, feature selection",
          ],
        },
        {
          category: "Deep Learning",
          topics: [
            "Neural network architecture: layers, activation functions, backpropagation",
            "Optimization: SGD, Adam, learning rate scheduling",
            "Regularization: dropout, batch normalization, weight decay",
            "Transformer architecture and self-attention mechanism",
          ],
        },
        {
          category: "MLOps & Production",
          topics: [
            "ML pipelines: feature engineering → training → evaluation → deployment",
            "Model serving: REST APIs with FastAPI, batch inference vs real-time",
            "Model monitoring: data drift, prediction drift, performance decay",
            "Feature stores (Feast/Tecton) for feature reuse across models",
          ],
        },
        {
          category: "Python & Tools",
          topics: [
            "PyTorch or TensorFlow: model definition, training loop, custom layers",
            "Scikit-learn pipeline and cross-validation",
            "MLflow for experiment tracking, model registry",
            "Docker + Kubernetes for ML model deployment",
          ],
        },
        {
          category: "System Design for ML",
          topics: [
            "Designing a recommendation system: retrieval, ranking, post-processing",
            "Real-time vs batch inference architecture tradeoffs",
            "Handling class imbalance: SMOTE, class weights, threshold tuning",
            "A/B testing for model evaluation in production",
          ],
        },
      ],
      tipsToCrack: [
        "Have an end-to-end ML project on GitHub: data → features → model → evaluation → API",
        "Be ready to explain any algorithm from first principles, not just 'I used XGBoost'",
        "Coding rounds often include implementing gradient descent or a simple neural net from scratch",
        "System design rounds are increasingly common for senior ML: design a fraud detection system",
        "MLOps awareness is a strong differentiator — show you understand deployment and monitoring",
        "Know your evaluation metrics and WHEN to use F1 vs AUC-ROC vs precision-recall",
        "Discuss imbalanced datasets: SMOTE, cost-sensitive learning, threshold adjustment",
        "Be ready to critique a given model and suggest improvements systematically",
        "Show business context: 'a false positive means X, a false negative means Y for this problem'",
        "Deep learning is table stakes for senior roles: know transformers and fine-tuning",
        "Ask about their model deployment infrastructure and retraining frequency",
        "Kaggle competition experience or leaderboard rankings are valuable talking points",
      ],
    },
  },

  "ai-research-scientist": {
    interviewGuide: {
      revisionTopics: [
        {
          category: "Research Foundations",
          topics: [
            "Machine learning theory: PAC learning, VC dimension, generalization bounds",
            "Probability and statistics: Bayesian inference, hypothesis testing, distributions",
            "Optimization: convex vs non-convex, SGD variants, second-order methods",
            "Information theory: entropy, KL divergence, mutual information, cross-entropy",
          ],
        },
        {
          category: "Deep Learning & Architecture",
          topics: [
            "Transformer architecture: multi-head attention, positional encoding, layer norm",
            "Generative models: VAE, GAN (training instability, mode collapse), diffusion models",
            "Self-supervised and contrastive learning: SimCLR, MoCo, BYOL, DINO",
            "RLHF and alignment techniques: reward modeling, PPO for language models",
          ],
        },
        {
          category: "Research Methodology",
          topics: [
            "Experimental design: ablation studies, controlled variables, baselines",
            "Reproducibility: seeds, hardware variance, reporting standards (papers with code)",
            "Research paper anatomy: motivation, contributions, experiments, limitations",
            "Scientific writing: clarity, related work positioning, honest failure analysis",
          ],
        },
        {
          category: "Programming & Frameworks",
          topics: [
            "PyTorch advanced: custom autograd functions, CUDA extensions, profiling",
            "JAX: functional transforms, vmap/pmap, JIT compilation",
            "HuggingFace ecosystem: Transformers, Datasets, Accelerate, PEFT",
            "Experiment tracking: Weights & Biases, MLflow — reproducible research setups",
          ],
        },
        {
          category: "Evaluation & Benchmarks",
          topics: [
            "Benchmark suites: GLUE, SuperGLUE, ImageNet, MMLU, BIG-Bench",
            "Statistical significance: t-tests, bootstrap confidence intervals, effect size",
            "Human evaluation design: inter-annotator agreement, Likert scales, pairwise comparisons",
            "Failure analysis: error categorization, distribution shift detection",
          ],
        },
      ],
      tipsToCrack: [
        "Know 3-4 landmark papers deeply (Attention is All You Need, BERT, GPT series, ResNet) — be ready to explain architecture choices and the problems they solved",
        "Read papers critically: identify what problem they solve, their key insight, and what open questions they leave",
        "Have a GitHub with reproduced paper results or novel experiments — research chops matter more than product work",
        "Prepare to discuss your own research contributions end-to-end: motivation, hypothesis, experiments, findings",
        "System design questions shift to: design a large-scale training infrastructure, or design an evaluation pipeline for LLMs",
        "Know the difference between empirical and theoretical contributions — be clear which kind you make in your projects",
        "Show breadth: know recent trends (LLMs, diffusion models, RLHF) even if your specialty is narrower",
        "Internship/thesis work is your strongest signal — prepare a concise story of your best project with clear impact",
        "Be ready for whiteboard math: gradient derivation, probability calculations, information theory basics",
        "Demonstrate research taste: what papers do you find exciting right now and why? Shows you stay current",
        "Know publication venues: NeurIPS, ICML, ICLR, ACL, CVPR — and what each community values and looks for",
        "Show you can communicate complex ideas simply — good researchers are good communicators who can explain their work clearly",
      ],
    },
  },

  "nlp-engineer": {
    interviewGuide: {
      revisionTopics: [
        {
          category: "NLP Fundamentals",
          topics: [
            "Tokenization strategies: whitespace, BPE, WordPiece, SentencePiece — trade-offs",
            "Word embeddings: Word2Vec (skip-gram/CBOW), GloVe, FastText — how they differ",
            "Language modeling: n-gram models, perplexity, neural LMs",
            "Core NLP tasks: text classification, NER, POS tagging, dependency parsing",
          ],
        },
        {
          category: "Transformer Models",
          topics: [
            "BERT: masked LM, next sentence prediction, fine-tuning for classification/NER/QA",
            "GPT family: causal LM, in-context learning, instruction tuning, chain-of-thought",
            "Parameter-efficient fine-tuning: LoRA, QLoRA, prefix tuning, prompt tuning",
            "Model compression: quantization (INT8/INT4), distillation, pruning",
          ],
        },
        {
          category: "NLP Tasks & Pipelines",
          topics: [
            "Question answering: extractive (SQuAD) vs generative, retrieval-augmented generation (RAG)",
            "Summarization: extractive vs abstractive, ROUGE evaluation, hallucination mitigation",
            "Information extraction: relation extraction, coreference resolution, event detection",
            "Dialogue systems: intent detection, slot filling, multi-turn context management",
          ],
        },
        {
          category: "Production NLP",
          topics: [
            "RAG architecture: vector databases (FAISS, Pinecone, Weaviate), chunking strategies",
            "LLM orchestration: LangChain, LlamaIndex — chains, agents, tool use",
            "Inference optimization: vLLM for batching, ONNX export, TensorRT, KV cache",
            "Hallucination control: grounding, citation, constrained decoding, confidence scoring",
          ],
        },
        {
          category: "Evaluation",
          topics: [
            "Text generation metrics: BLEU (translation), ROUGE (summarization), BERTScore",
            "LLM evaluation: MMLU, HellaSwag, TruthfulQA — benchmark selection rationale",
            "Human evaluation design: pairwise preference, Likert scale, inter-annotator agreement",
            "Multilingual evaluation: handling Hindi/regional languages, multilingual benchmarks",
          ],
        },
      ],
      tipsToCrack: [
        "Know the transformer architecture inside out — multi-head attention, positional encoding, layer norm, feed-forward blocks",
        "Be ready to explain BERT vs GPT training objectives (masked LM vs causal LM) and when to use each for which task",
        "RAG is now standard in industry — know vector DBs (FAISS, Pinecone, Weaviate), chunking strategies, and re-ranking",
        "Fine-tuning experience is a strong signal: know LoRA, QLoRA, PEFT — explain why full fine-tuning is often impractical",
        "Tokenization edge cases (subword handling, OOV, multilingual) come up surprisingly often in NLP interviews",
        "Evaluation metric choice depends on task — explain when ROUGE is insufficient and why you'd supplement with human eval",
        "Latency optimization is critical for production: know quantization (INT8/INT4), distillation, ONNX export, vLLM",
        "Have at least one end-to-end NLP project: raw data → preprocessing → model → evaluation → deployed API",
        "Prompt engineering and LLM orchestration (LangChain, LlamaIndex) are now expected knowledge at most NLP roles",
        "Know hallucination mitigation strategies: grounding, citation, constrained decoding, confidence calibration",
        "Show awareness of multilingual NLP for Indian companies — Hindi/regional language models (IndicBERT, MuRIL) are relevant",
        "Discuss dataset quality issues: handling noisy labels, class imbalance, domain mismatch, data collection ethics",
      ],
    },
  },

  "computer-vision-engineer": {
    interviewGuide: {
      revisionTopics: [
        {
          category: "Image Processing Fundamentals",
          topics: [
            "Convolutions: kernel operations, padding, stride, receptive field calculations",
            "Filters: Sobel/Canny for edge detection, Gaussian blur, morphological ops (erosion, dilation)",
            "Color spaces: RGB, HSV, LAB — when each is useful for CV tasks",
            "Histograms and SIFT/ORB for classical feature extraction and matching",
          ],
        },
        {
          category: "CNN Architectures",
          topics: [
            "Classic architectures: VGG (depth), ResNet (skip connections), EfficientNet (compound scaling)",
            "Lightweight models: MobileNetV2/V3, ShuffleNet — depthwise separable convolutions",
            "Vision Transformers: ViT patch embeddings, DeiT distillation, Swin Transformer hierarchy",
            "Feature pyramid networks (FPN): multi-scale feature fusion for detection",
          ],
        },
        {
          category: "CV Tasks",
          topics: [
            "Object detection: YOLO (v5/v8 anchor-free), Faster R-CNN (two-stage), SSD",
            "Segmentation: U-Net (medical), Mask R-CNN (instance), SAM (Segment Anything Model)",
            "Classification evaluation: top-1/top-5 accuracy, confusion matrix, per-class metrics",
            "Pose estimation, optical flow, OCR — knowing when to use each approach",
          ],
        },
        {
          category: "Training & Data",
          topics: [
            "Data augmentation: albumentations library — geometric, color, noise transforms",
            "Transfer learning strategy: when to freeze/unfreeze layers, learning rate warm-up",
            "Synthetic data generation and domain adaptation for scarce labeled data",
            "Annotation pipelines: CVAT, LabelImg — annotation quality and inter-annotator agreement",
          ],
        },
        {
          category: "Production CV",
          topics: [
            "Edge deployment: TensorRT for NVIDIA, OpenVINO for Intel, CoreML for iOS",
            "Model optimization: INT8 quantization, layer fusion, batch inference on GPU",
            "Camera pipeline: preprocessing, frame rate vs accuracy tradeoff, hardware-aware design",
            "Evaluation metrics: mAP (mean Average Precision), IoU thresholds, precision-recall curves",
          ],
        },
      ],
      tipsToCrack: [
        "Know YOLO (v5/v8) vs Faster R-CNN trade-offs in depth — speed vs accuracy, anchor-free vs anchor-based — this comes up constantly",
        "OpenCV basics are still tested: image transformations, contour detection, homography, camera calibration",
        "Transfer learning from ImageNet pretrained models is almost always the right starting point — be able to explain the inductive bias",
        "Data augmentation strategy matters: explain how you chose augmentations for a specific domain (medical, satellite, retail)",
        "Know the difference between instance segmentation, semantic segmentation, and panoptic segmentation — and when to use each",
        "Vision Transformers are now mainstream — understand ViT vs CNN inductive biases (translation equivariance vs global attention)",
        "Edge deployment is a key differentiator: mention TensorRT, ONNX, quantization for embedded/mobile devices",
        "Always discuss dataset collection and annotation strategy — it demonstrates production maturity and real-world experience",
        "Object detection metrics: know mAP at multiple IoU thresholds (COCO-style), precision-recall curves — be precise with these",
        "For Indian companies: document processing, vehicle detection, surveillance, retail shelf analysis are common domains to mention",
        "Demo projects should show real-world constraints: handling varying lighting, occlusion, scale variation, motion blur",
        "Know SAM (Segment Anything Model) and CLIP — they are reshaping the field and come up in senior/research-focused interviews",
      ],
    },
  },

  "deep-learning-engineer": {
    interviewGuide: {
      revisionTopics: [
        {
          category: "Neural Network Fundamentals",
          topics: [
            "Backpropagation: chain rule derivation, computational graphs, gradient flow",
            "Activation functions: ReLU, GELU, Swish — vanishing/exploding gradients and solutions",
            "Weight initialization: Xavier/Glorot, He initialization — why initialization matters",
            "Loss functions: cross-entropy, MSE, focal loss, contrastive loss — selection criteria",
          ],
        },
        {
          category: "Architectures",
          topics: [
            "CNNs: convolution, pooling, receptive field, skip connections (ResNet)",
            "RNNs/LSTMs: vanishing gradient problem, gating mechanisms, sequence modeling limitations",
            "Transformers: scaled dot-product attention, multi-head, positional encoding",
            "Graph Neural Networks and diffusion models — fundamentals and key use cases",
          ],
        },
        {
          category: "Training Techniques",
          topics: [
            "Normalization: batch norm, layer norm, group norm — when each is appropriate",
            "Regularization: dropout, DropPath, weight decay, data augmentation",
            "Learning rate schedules: warmup, cosine annealing, cyclic LR, one-cycle policy",
            "Mixed precision training: FP16/BF16, gradient scaling, loss scaling",
          ],
        },
        {
          category: "Optimization & Scaling",
          topics: [
            "Distributed training: DDP (data parallel), model parallelism, pipeline parallelism",
            "ZeRO optimization stages (1/2/3): offloading optimizer states, gradients, parameters",
            "Gradient checkpointing for memory reduction vs compute tradeoff",
            "GPU memory profiling: CUDA memory, activation memory, optimizer states breakdown",
          ],
        },
        {
          category: "Frameworks & Production",
          topics: [
            "PyTorch advanced: custom autograd, CUDA kernels, torch.compile, TorchDynamo",
            "Model export: ONNX, TorchScript, TensorRT — conversion gotchas and dynamic shapes",
            "Experiment tracking: W&B/MLflow — logging metrics, artifacts, hyperparameter sweeps",
            "Inference serving: TorchServe, Triton Inference Server — batching and concurrency",
          ],
        },
      ],
      tipsToCrack: [
        "Implement backpropagation from scratch for a linear layer and a sigmoid — interviewers at research-focused companies test this",
        "Know PyTorch's autograd system deeply: when to use .detach(), requires_grad, and writing custom backward functions",
        "Distributed training is expected at senior levels: know DDP vs model parallelism vs pipeline parallelism and their communication patterns",
        "Debugging training is a core skill: loss NaN root causes, gradient flow visualization with hooks, learning curve analysis",
        "Mixed precision (FP16/BF16) training is now standard — know when it helps and when it causes numerical instability",
        "Transformer implementation from scratch is a common coding challenge at research-oriented companies — practice this",
        "Benchmark your models rigorously: measure FLOPs, parameter count, throughput — this shows engineering rigor and maturity",
        "Know the difference between training-time and inference-time optimizations — they use different tools and have different goals",
        "Stay current: diffusion models, Mamba/SSM architectures, LLM fine-tuning techniques are recent hot topics in interviews",
        "For system design: design a large-scale training pipeline with checkpointing, monitoring, experiment tracking, and fault tolerance",
        "GitHub with training code showing proper experiment tracking (MLflow/W&B), reproducibility, and clean abstractions is a must",
        "Know hardware basics: GPU memory hierarchy, tensor cores, CUDA streams — understanding these helps in optimization discussions",
      ],
    },
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
    interviewGuide: {
      revisionTopics: [
        {
          category: "Containers & Kubernetes",
          topics: [
            "Docker: Dockerfile best practices, multi-stage builds, image layering",
            "Kubernetes resources: Pod, Deployment, Service, Ingress, ConfigMap, Secret",
            "Kubernetes scheduling: resource requests/limits, node affinity, taints/tolerations",
            "K8s networking: Services (ClusterIP/NodePort/LoadBalancer), Ingress controllers",
          ],
        },
        {
          category: "CI/CD Pipelines",
          topics: [
            "GitHub Actions: workflow YAML, jobs, steps, secrets",
            "Jenkins: pipeline as code (Jenkinsfile), shared libraries",
            "Deployment strategies: rolling, blue-green, canary",
            "Artifact management: Docker Registry, Helm charts, versioning",
          ],
        },
        {
          category: "Infrastructure as Code",
          topics: [
            "Terraform: providers, resources, state, modules, workspace",
            "Ansible: playbooks, roles, inventory, and idempotency",
            "GitOps with ArgoCD or Flux: declarative cluster state",
            "Helm: chart structure, values files, templating",
          ],
        },
        {
          category: "Observability & Security",
          topics: [
            "Prometheus + Grafana for metrics collection and dashboards",
            "ELK Stack or Loki for log aggregation and querying",
            "Distributed tracing with Jaeger or Zipkin",
            "Secrets management: HashiCorp Vault, AWS Secrets Manager",
          ],
        },
        {
          category: "Cloud Platforms",
          topics: [
            "AWS core services: EC2, EKS, RDS, S3, IAM, VPC, Lambda",
            "Networking: VPC, subnets, security groups, NAT gateway",
            "Cost optimization: right-sizing, reserved instances, Spot",
            "Multi-cloud and hybrid cloud considerations",
          ],
        },
      ],
      tipsToCrack: [
        "Set up a complete CI/CD pipeline project on GitHub and be ready to walk through every step",
        "Kubernetes is now a baseline — practice kubectl commands and know the control plane architecture",
        "Prepare to troubleshoot a broken pipeline in an interview scenario",
        "DORA metrics (deployment frequency, lead time, MTTR, change failure rate) show engineering maturity",
        "Terraform modules and remote state are commonly tested — have a project to show",
        "Security is non-negotiable: secrets in Git is an immediate red flag to avoid",
        "Show cost awareness: mention a time you optimized cloud spending",
        "GitOps is the modern standard — know ArgoCD or Flux at least conceptually",
        "On-call experience (or readiness) shows operational maturity — mention your incident response experience",
        "Know the DevOps culture: it's not just tools, it's about breaking silos",
        "Ask about their current CI/CD stack, cloud provider, and on-call practices",
      ],
    },
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
    interviewGuide: {
      revisionTopics: [
        {
          category: "Testing Fundamentals",
          topics: [
            "Testing pyramid: unit, integration, E2E ratios and why it matters",
            "Black-box vs white-box vs grey-box testing",
            "Equivalence partitioning and boundary value analysis",
            "Test case design: positive, negative, edge cases, and exploratory",
          ],
        },
        {
          category: "Automation Tools",
          topics: [
            "Selenium WebDriver: locators, waits (implicit/explicit/fluent), POM design pattern",
            "Playwright or Cypress for modern web testing with auto-waiting",
            "REST API testing with Postman, RestAssured, or Karate",
            "Mobile testing: Appium for iOS/Android automation",
          ],
        },
        {
          category: "Framework Design",
          topics: [
            "Page Object Model (POM) and its benefits for maintainability",
            "Data-driven and keyword-driven testing approaches",
            "Parallel test execution with TestNG or JUnit 5",
            "Allure or ExtentReports for test reporting",
          ],
        },
        {
          category: "Performance & Security Testing",
          topics: [
            "Load testing with JMeter or k6: virtual users, ramp-up, assertions",
            "Performance metrics: response time, throughput, error rate, percentiles",
            "OWASP ZAP for basic security testing (DAST)",
            "SQL injection and XSS vulnerability testing",
          ],
        },
        {
          category: "CI/CD Integration",
          topics: [
            "Integrating test suites into GitHub Actions or Jenkins pipelines",
            "Shift-left testing: involving QA from requirements stage",
            "Test environment management and Docker-based test infrastructure",
            "Flaky test management strategies",
          ],
        },
      ],
      tipsToCrack: [
        "Have a test automation framework project on GitHub — theory without code won't impress",
        "Be ready to code a Selenium or Playwright test live in the interview",
        "Know the POM design pattern and be able to explain why it improves maintainability",
        "Show debugging skills: how do you investigate a flaky test that fails 20% of the time?",
        "Prepare a STAR answer for 'Tell me about a bug you found that everyone else missed'",
        "API testing is increasingly important: know REST fundamentals and Postman/RestAssured",
        "Shift-left mindset demonstrates maturity: you review requirements, not just test after code",
        "Performance testing awareness opens doors to senior QA roles",
        "Show CI/CD integration knowledge: testing in pipelines is expected at most companies",
        "Agile QA skills matter: writing acceptance criteria, participating in sprint ceremonies",
        "Ask about their test coverage percentage, CI pipeline, and how they manage test environments",
      ],
    },
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
    interviewGuide: {
      revisionTopics: [
        {
          category: "Cloud Fundamentals",
          topics: [
            "IaaS, PaaS, SaaS service models and cloud deployment models",
            "AWS core services: EC2, S3, RDS, Lambda, IAM, VPC, CloudFront",
            "GCP equivalents: GCE, GCS, Cloud SQL, Cloud Functions, IAM, VPC",
            "Azure equivalents: VMs, Blob Storage, Azure SQL, Functions, RBAC",
          ],
        },
        {
          category: "Networking & Security",
          topics: [
            "VPC design: subnets, route tables, security groups, NACLs",
            "IAM: roles, policies, least privilege, cross-account access",
            "VPN, Direct Connect/Dedicated Interconnect for hybrid connectivity",
            "Encryption: KMS, customer-managed keys, data at rest and in transit",
          ],
        },
        {
          category: "Architecture & Resilience",
          topics: [
            "Multi-AZ vs multi-region architecture tradeoffs",
            "Auto-scaling: dynamic scaling policies, target tracking",
            "Disaster recovery: RTO/RPO, backup strategies, failover",
            "Serverless architecture: Lambda, API Gateway, event-driven patterns",
          ],
        },
        {
          category: "Infrastructure as Code",
          topics: [
            "Terraform for multi-cloud infrastructure provisioning",
            "AWS CloudFormation or CDK for AWS-native IaC",
            "Module design for reusable infrastructure components",
            "State management: remote state, locking, import existing resources",
          ],
        },
        {
          category: "Cost Optimization",
          topics: [
            "Reserved instances vs Spot instances vs On-demand tradeoffs",
            "Cost allocation with tags and cost explorer analysis",
            "Right-sizing: CPU/memory utilization analysis",
            "S3 lifecycle policies and storage class transitions",
          ],
        },
      ],
      tipsToCrack: [
        "An AWS Solutions Architect or Google Cloud ACE certification is a strong signal — if you have one, lead with it",
        "Be ready to design a cloud architecture from scratch: 3-tier web app, serverless pipeline, etc.",
        "VPC design is heavily tested: subnets, security groups, public vs private placement",
        "IAM least privilege is foundational security — be able to explain roles vs policies vs groups",
        "Terraform is the standard IaC tool — have a working project to show",
        "Cost optimization stories are valuable: mention a time you reduced cloud spend significantly",
        "Know auto-scaling: how it works, what triggers it, and how to configure it",
        "Disaster recovery planning shows operational maturity beyond just provisioning",
        "Show multi-cloud or hybrid awareness even if you specialize in one cloud",
        "Security is non-negotiable: no open S3 buckets, no public security groups in your demo projects",
        "Ask about their primary cloud provider, multi-account strategy, and FinOps practices",
      ],
    },
  },

  "mlops-engineer": {
    interviewGuide: {
      revisionTopics: [
        {
          category: "MLOps Fundamentals",
          topics: [
            "ML pipeline lifecycle: data ingestion → feature engineering → training → evaluation → deployment → monitoring",
            "MLOps maturity levels: manual → automated → CI/CD — what each level looks like in practice",
            "Difference between DevOps and MLOps: code versioning vs model + data + code versioning",
            "Feature stores and their role: online vs offline stores, consistency between training and serving",
            "Data versioning with DVC or LakeFS: tracking datasets, pipelines, and experiment reproducibility",
          ],
        },
        {
          category: "Model Deployment & Serving",
          topics: [
            "REST API serving with FastAPI/Flask/TorchServe: request batching, concurrency, async handlers",
            "Batch vs real-time vs streaming inference: latency, throughput, and cost tradeoffs for each",
            "Blue-green and canary deployments for ML: traffic splitting, model comparison, rollback gates",
            "Model registry concepts: MLflow Model Registry — versioning, stage transitions, lineage tracking",
            "Containerizing ML models with Docker: base image selection, dependency pinning, CUDA compatibility",
          ],
        },
        {
          category: "CI/CD for Machine Learning",
          topics: [
            "ML pipelines with Kubeflow/Airflow/ZenML: DAG design, step dependencies, artifact passing",
            "Automated model retraining triggers: data drift threshold, scheduled retraining, performance degradation",
            "Testing strategies for ML: unit tests for feature transforms, integration tests for full pipeline runs",
            "Shadow mode deployment: running new model in parallel without serving its predictions to users",
            "Experiment tracking with MLflow/Weights & Biases: runs, metrics, artifacts, model comparison",
          ],
        },
        {
          category: "Model Monitoring & Observability",
          topics: [
            "Data drift detection: statistical tests — KS test, PSI (Population Stability Index), Jensen-Shannon divergence",
            "Concept drift vs data drift vs model drift: definitions, detection approaches, response strategies",
            "Prediction monitoring dashboards: distribution of predictions, feature distributions, latency metrics",
            "Logging predictions and ground-truth labels for delayed feedback and performance retrospectives",
            "Alerting strategies and SLAs for ML systems: alert thresholds, on-call runbooks, escalation paths",
          ],
        },
        {
          category: "Infrastructure & Cloud",
          topics: [
            "Kubernetes for ML workloads: pods, deployments, resource requests/limits, GPU node selectors",
            "GPU provisioning and cost optimization: spot GPU instances, preemption handling, autoscaling",
            "AWS SageMaker / GCP Vertex AI / Azure ML: managed training, endpoint deployment, pipeline features",
            "Infrastructure-as-code with Terraform for ML infra: compute clusters, storage, IAM, networking",
            "Distributed training setup: DDP with PyTorch, multi-node Kubernetes jobs, storage I/O bottlenecks",
          ],
        },
      ],
      tipsToCrack: [
        "Build and demo a complete MLOps pipeline on GitHub: training → versioning → CI → deployment → monitoring",
        "Know the difference between data drift and concept drift — interviewers love this nuance",
        "Be ready to walk through how you'd set up automated retraining: triggers, validation gates, rollback",
        "Kubernetes is table stakes — know how to deploy a model as a K8s service with resource limits",
        "Show familiarity with at least one cloud ML platform (SageMaker, Vertex AI, or Azure ML)",
        "MLflow experiment tracking + model registry + deployment workflow is the most common scenario question",
        "Explain how you'd detect and respond to model degradation in production without waiting for user complaints",
        "Discuss cost optimization: spot instances for training, right-sizing inference pods, caching strategies",
        "Feature stores are a hot topic — explain why they matter for consistency between training and serving",
        "Show you understand the 'last mile' problem — getting models from notebooks into production reliably",
        "Bring up CI/CD patterns: what tests run before promoting a model to staging vs production",
        "Ask about their model monitoring stack — it shows seniority and genuine interest",
      ],
    },
  },

  "ai-product-manager": {
    interviewGuide: {
      revisionTopics: [
        {
          category: "AI/ML Fundamentals for PMs",
          topics: [
            "Supervised vs unsupervised vs reinforcement learning: business use cases and tradeoffs for each",
            "Model evaluation metrics and product outcomes: precision vs recall tradeoffs in real decisions",
            "AI limitations: hallucinations, bias, uncertainty, data requirements, and explainability constraints",
            "Difference between an ML model, an ML pipeline, and a complete AI product",
            "Data flywheel concept: how more users generate better data which improves the model",
          ],
        },
        {
          category: "Product Strategy & Roadmap",
          topics: [
            "Identifying AI opportunities vs non-AI solutions: when NOT to use ML and why",
            "Building AI product roadmaps: short-term (data/infra), medium-term (model), long-term (product)",
            "Framing success metrics for AI features: OKRs, KPIs, and guardrail metrics to protect against harm",
            "Responsible AI product development: fairness, accountability, transparency at each roadmap stage",
            "Cold start problem and strategies to handle it: rule-based fallback, content seeding, onboarding flows",
          ],
        },
        {
          category: "Data & Experimentation",
          topics: [
            "A/B testing design for AI features: split testing, interleaving experiments, holdout groups",
            "Understanding data pipelines and labeling requirements for supervised learning products",
            "Working with data teams: data requirements documents, annotation guidelines, quality criteria",
            "Model evaluation: offline metrics vs online evaluation — why offline results don't always predict online impact",
            "Experimentation pitfalls: novelty effect, network effects, long-term value vs short-term metric gains",
          ],
        },
        {
          category: "Cross-functional Collaboration",
          topics: [
            "Communicating AI constraints to stakeholders: timelines, uncertainty, model limitations in plain language",
            "Writing effective PRDs for AI features: data requirements, model behavior specs, evaluation criteria",
            "Working with ML engineers: sprint planning, dependency management, milestone definitions",
            "Translating business requirements into ML problem framing: regression vs classification vs ranking",
            "Managing expectations for AI projects: why 'it's 90% accurate' needs context and careful framing",
          ],
        },
        {
          category: "AI Ethics & Governance",
          topics: [
            "Bias in AI systems: types of bias, detection approaches, and mitigation strategies for PMs",
            "GDPR and data privacy implications for AI products: consent, minimization, right to explanation",
            "Explainability requirements: translating LIME/SHAP outputs into user-facing explanations",
            "Content moderation and trust & safety frameworks for AI-generated content features",
            "Responsible AI frameworks and industry standards: Microsoft RAI, Google PAIR, NIST AI RMF",
          ],
        },
      ],
      tipsToCrack: [
        "Study 3-4 real AI product case studies (Gmail Smart Reply, YouTube recommendations, Spotify Discover Weekly)",
        "Be ready to answer: 'How would you define success for an AI feature?' — metrics, not just user stories",
        "Know the difference between precision and recall and when each matters for product decisions",
        "Practice explaining ML concepts in non-technical terms — that's the core PM skill being evaluated",
        "Prepare a story about working through an AI project that didn't go as planned and what you learned",
        "Understand A/B testing deeply: what makes a good AI experiment, how long to run it, guardrail metrics",
        "Show you can push back on 'just add AI' — explain when a rule-based system is better than ML",
        "Discuss responsible AI: bias, fairness, privacy — interviewers increasingly test for ethics awareness",
        "Have a point of view on a specific AI product trend (LLMs in products, AI agents, personalization)",
        "Show cross-functional leadership: how you aligned engineers, designers, and business stakeholders",
        "Cold start and data flywheel are favourite scenario questions — prepare structured answers",
        "Ask about their AI governance process — it signals maturity and strategic thinking",
      ],
    },
  },

  "conversational-ai-developer": {
    interviewGuide: {
      revisionTopics: [
        {
          category: "Conversational AI Foundations",
          topics: [
            "Intent recognition, entity extraction, and dialogue state management fundamentals",
            "NLU vs NLG vs NLP distinctions: what each layer does and where models fit",
            "Slot filling and form-based dialogue patterns: required vs optional slots, validation logic",
            "Conversational flow design: linear vs branching vs mixed-initiative dialogue strategies",
            "Dialogue acts and speech acts: inform, request, confirm, deny, greet, farewell taxonomies",
          ],
        },
        {
          category: "NLP & Language Models",
          topics: [
            "Transformer architecture and BERT/GPT family for dialogue: contextual embeddings for intent classification",
            "Intent classification with fine-tuned transformers: dataset preparation, few-shot learning",
            "Named entity recognition (NER) for slot extraction: IOB tagging, CRF layers, transformer NER",
            "Retrieval-augmented generation (RAG) for FAQ bots: document chunking, embedding, retrieval, generation",
            "Semantic similarity and sentence embeddings for intent matching: cosine similarity, bi-encoder models",
          ],
        },
        {
          category: "Bot Development Platforms",
          topics: [
            "Rasa framework: NLU pipeline configuration, custom actions, forms, domain YAML structure",
            "Dialogflow ES vs CX: entity types, fulfillment webhooks, intent transition models, mega agents",
            "Microsoft Bot Framework and Azure Bot Service: activity schema, middleware, proactive messaging",
            "LangChain for LLM-based conversational agents: chains, tools, memory, agent executor patterns",
            "Voice-to-text integration: Google Speech API, AWS Transcribe — latency, streaming, speaker diarization",
          ],
        },
        {
          category: "Context & Memory Management",
          topics: [
            "Multi-turn context tracking across conversation sessions: session state storage and expiry",
            "Entity carryover and context window management in multi-turn dialogue",
            "Conversation history storage and retrieval patterns for personalized responses",
            "Personalization using user profile data in dialogue: preferences, history, CRM integration",
            "Handling ambiguity, clarification prompts, and graceful fallbacks to human agents",
          ],
        },
        {
          category: "Deployment & Quality",
          topics: [
            "Conversation testing: unit tests for intents, end-to-end dialogue simulation tests",
            "NLU evaluation metrics: intent accuracy, entity F1, confusion matrix analysis, coverage",
            "A/B testing conversational flows for engagement rate, containment rate, and task completion",
            "Monitoring: conversation logs, drop-off analysis, human handoff rate, resolution rate",
            "Voice bot deployment: latency constraints (<500ms target), TTS quality evaluation, ASR error handling",
          ],
        },
      ],
      tipsToCrack: [
        "Build a working chatbot on Rasa or Dialogflow and be ready to walk through every design decision",
        "Know the difference between task-oriented bots and open-domain chatbots — most enterprise work is task-oriented",
        "Intent accuracy vs entity accuracy vs conversation success rate — know which metrics matter when",
        "RAG-based bots are increasingly common — be ready to explain how you'd build a FAQ bot with RAG",
        "Demonstrate context handling: how does your bot remember what the user said two turns ago?",
        "Fallback strategy is critical — explain your approach to graceful degradation and human handoff",
        "Voice bot challenges (latency, TTS tone, ASR errors) come up frequently in senior interviews",
        "Show you've thought about personas and tone of voice — bot personality design is a differentiator",
        "Prepare for a live design exercise: 'Design a bot to handle banking account queries' — practice this format",
        "Know LangChain basics — LLM-based agents are now part of most Conversational AI discussions",
        "Show conversation testing discipline — interviewers respect candidates who think about edge cases and failure modes",
        "Ask about their bot's containment rate and what they're doing to improve it — real-world signal",
      ],
    },
  },

  "recommendation-engineer": {
    interviewGuide: {
      revisionTopics: [
        {
          category: "Recommendation Algorithms",
          topics: [
            "Collaborative filtering: user-based and item-based CF with cosine similarity and Pearson correlation",
            "Matrix factorization: SVD, ALS (Alternating Least Squares), NMF — which works best when",
            "Content-based filtering: TF-IDF features, embedding similarity, item metadata utilization",
            "Knowledge-based recommenders for cold start: constraint-based and case-based approaches",
            "Hybrid approaches: combining CF + content + contextual signals with weighted ensembles",
          ],
        },
        {
          category: "Deep Learning for Recommendations",
          topics: [
            "Two-tower models for retrieval: user tower + item tower, training with in-batch negatives",
            "Wide & Deep architecture: memorization (wide) vs generalization (deep) for ranking",
            "Neural collaborative filtering and attention mechanisms for interaction modeling",
            "Sequence-based models: GRU4Rec, SASRec for session-based and sequential recommendations",
            "Embedding-based approaches: Item2Vec/Word2Vec for item embeddings from interaction sequences",
          ],
        },
        {
          category: "System Architecture",
          topics: [
            "Two-stage architecture: candidate retrieval → ranking → re-ranking with business rules",
            "Approximate nearest neighbor search: FAISS, ScaNN, Annoy — indexing strategies and tradeoffs",
            "Feature stores for real-time user/item features: online serving latency requirements",
            "A/B testing infrastructure for recommendation experiments: experiment logging, metric computation",
            "Scalability: handling millions of users and items with distributed computing and caching",
          ],
        },
        {
          category: "Evaluation & Business Metrics",
          topics: [
            "Offline metrics: NDCG, MAP, Precision@K, Recall@K, Hit Rate — when to use each",
            "Online metrics: CTR, conversion rate, dwell time, revenue per recommendation, session depth",
            "Cold start problem: new user (no interaction history) and new item (no interactions) separately",
            "Diversity vs relevance tradeoff: serendipity, coverage, novelty in recommendation quality",
            "Feedback loops and popularity bias: filter bubbles, rich-get-richer dynamics, mitigation",
          ],
        },
        {
          category: "Data & Production",
          topics: [
            "Implicit vs explicit feedback: clicks, views, dwell time, purchases vs ratings — signal quality",
            "Feature engineering: user history aggregation, session context, temporal decay features",
            "Handling sparse interaction matrices and long-tail item distributions in training",
            "Real-time vs batch recommendation serving: latency budgets, pre-computation, cache invalidation",
            "Data pipelines for collecting and processing user interaction logs at scale",
          ],
        },
      ],
      tipsToCrack: [
        "Implement collaborative filtering and matrix factorization from scratch — it's a common coding round question",
        "The two-stage architecture (retrieval + ranking) is industry standard — know it inside out",
        "Be ready to discuss cold start: new users AND new items are separate problems with different solutions",
        "Know NDCG and how it differs from MAP — and be ready to explain which to use for which problem",
        "Bring up the popularity bias problem — it shows you understand real-world recommendation system failures",
        "FAISS for approximate nearest neighbor search is commonly asked — explain why ANN instead of exact search",
        "Prepare a system design answer: 'Design Netflix/Spotify recommendations' — cover retrieval, ranking, serving",
        "Discuss A/B testing challenges for recommendations: metric sensitivity, novelty effects, long-term value",
        "Deep learning models (two-tower, Wide & Deep) are expected for senior roles — study one in depth",
        "Show awareness of ethical issues: filter bubbles, diversity, and fairness in recommendations",
        "Implicit feedback handling (clicks ≠ satisfaction) is a favourite nuance question",
        "Ask about their item catalog size and how they handle the long-tail — shows practical understanding",
      ],
    },
  },

  "ai-ethics-researcher": {
    interviewGuide: {
      revisionTopics: [
        {
          category: "Fairness & Bias in AI",
          topics: [
            "Types of bias: historical, representation, measurement, aggregation, and algorithmic bias",
            "Fairness metrics: demographic parity, equal opportunity, equalized odds, individual fairness",
            "Disparate impact analysis and protected attributes under anti-discrimination law",
            "Bias mitigation strategies: pre-processing (reweighting), in-processing (adversarial), post-processing (threshold adjustment)",
            "Intersectionality in algorithmic fairness: handling multiple overlapping protected attributes",
          ],
        },
        {
          category: "AI Safety & Robustness",
          topics: [
            "Adversarial attacks: white-box vs black-box, FGSM, PGD — model evasion and poisoning",
            "Robustness testing: out-of-distribution detection, stress testing, red teaming AI systems",
            "Alignment problem: value alignment, reward hacking, specification gaming in RL systems",
            "AI safety frameworks: Constitutional AI, RLHF limitations, scalable oversight approaches",
            "Uncertainty quantification and its role in safe deployment of high-stakes AI systems",
          ],
        },
        {
          category: "Explainability & Transparency",
          topics: [
            "Post-hoc explanation methods: LIME, SHAP, GRAD-CAM for vision — how each works and limitations",
            "Intrinsically interpretable models vs post-hoc explanations: accuracy-interpretability tradeoffs",
            "Counterfactual explanations and their role in algorithmic recourse for affected individuals",
            "Transparency requirements under GDPR Article 22: automated decision-making and right to explanation",
            "Model cards, datasheets for datasets, and AI documentation standards — format and content",
          ],
        },
        {
          category: "AI Governance & Policy",
          topics: [
            "EU AI Act: risk categories (unacceptable, high, limited, minimal), requirements per category",
            "GDPR implications for AI: data minimization, purpose limitation, right to explanation, consent",
            "Responsible AI frameworks: Microsoft RAI, Google PAIR, NIST AI RMF — structure and principles",
            "AI auditing and third-party assessments: scope, methodology, reporting, remediation",
            "Sectoral regulations: AI in healthcare (FDA), finance (SR 11-7), hiring (EEOC guidelines)",
          ],
        },
        {
          category: "Research Methods & Ethics Advocacy",
          topics: [
            "Quantitative fairness evaluations: dataset audits, disparity analysis, statistical significance testing",
            "Qualitative methods: participatory design, community consultation, ethnographic research",
            "Publishing ethics: responsible disclosure of AI system vulnerabilities and dual-use risks",
            "Communicating AI risks to non-technical stakeholders and policymakers: translation strategies",
            "Interdisciplinary collaboration: working with lawyers, social scientists, philosophers, domain experts",
          ],
        },
      ],
      tipsToCrack: [
        "Read at least 5 landmark papers: Buolamwini & Gebru (2018 Gender Shades), Dwork et al. (2012 fairness), Ribeiro LIME, Lundberg SHAP, Gebru Datasheets for Datasets",
        "Know the EU AI Act categories — it's now the most tested policy framework in interviews",
        "Be ready to analyze a real case study of AI bias (Amazon hiring tool, COMPAS recidivism, facial recognition) in depth",
        "Fairness metrics are not interchangeable — practice explaining why demographic parity and equalized odds can conflict",
        "Show you can operationalize ethics: not just 'we should be fair' but 'here is how we measure and mitigate'",
        "Interdisciplinary communication is core to this role — show you can explain technical concepts to lawyers and policymakers",
        "Prepare a position on a current AI ethics debate (LLM hallucinations, generative AI copyright, AI in hiring)",
        "SHAP and LIME are expected knowledge — be ready to explain them to a non-technical audience",
        "Show awareness of tensions: explainability vs accuracy, fairness vs utility, safety vs capability",
        "Research methodology matters — show you can design a bias audit study with controls and statistical rigor",
        "Model cards and datasheets for datasets are increasingly required — know the format and purpose",
        "Ask about how their organization handles ethical concerns when they conflict with business objectives — shows maturity",
      ],
    },
  },
};
