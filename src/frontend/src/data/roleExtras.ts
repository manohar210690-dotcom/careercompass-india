// ── roleExtras.ts ─────────────────────────────────────────────────────────────
// Supplementary interfaces for free courses, mock tests, and interview prep.
// These are imported into roles.ts and used as optional Role fields.
// ─────────────────────────────────────────────────────────────────────────────

export interface FreeCourse {
  name: string;
  url: string;
  provider: string;
  platform: string; // e.g. "NPTEL", "Coursera", "GUVI", "YouTube", "Udemy", "edX", "Swayam", "LearnVern"
  language:
    | "English"
    | "Hindi"
    | "Telugu"
    | "English & Hindi"
    | "English & Telugu";
  level?: "Beginner" | "Intermediate" | "Advanced";
  durationHours?: number; // approximate hours
}

// ── Mock Tests ────────────────────────────────────────────────────────────────

export interface MCQOption {
  text: string;
  isCorrect: boolean;
}

export interface MCQQuestion {
  id: string;
  question: string;
  options: MCQOption[]; // exactly 4 options, exactly 1 correct
  explanation: string; // shown after answering
  topic?: string; // optional topic tag e.g. "Arrays", "SQL Joins"
}

export type TestLevel = "basic" | "intermediate" | "advanced";

export interface MockTest {
  level: TestLevel;
  questions: MCQQuestion[]; // 5-8 questions per level
  passingScore: number; // percentage e.g. 60
}

// ── Interview Prep ────────────────────────────────────────────────────────────

export interface InterviewQuestion {
  id: string;
  question: string;
  talkingPoints: string[]; // 3-5 bullet points of what to cover in the answer
  keywords: string[]; // technical terms to use in the answer
}

export interface InterviewPrep {
  level: TestLevel;
  questions: InterviewQuestion[]; // 3-5 questions per level
}
