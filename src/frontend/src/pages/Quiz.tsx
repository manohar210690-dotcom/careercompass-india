import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { categoryMap } from "@/data/categories";
import { type RiasecScores, SECTION_COLORS, quizQuestions } from "@/data/quiz";
import { roles } from "@/data/roles";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  ChevronRight,
  RotateCcw,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Phase = "intro" | "quiz" | "transition" | "results";

interface MbtiCounts {
  EI: { E: number; I: number };
  SN: { S: number; N: number };
  TF: { T: number; F: number };
  JP: { J: number; P: number };
}

interface MatchResult {
  role: (typeof roles)[number];
  score: number;
  percentage: number;
  fitReason: string;
}

const SECTION_META: Record<
  string,
  { icon: React.ReactNode; label: string; description: string }
> = {
  interests: {
    icon: <Sparkles className="w-5 h-5" />,
    label: "Your Happy Place (Work Edition)",
    description:
      "What genuinely excites you at work? Let's find roles where Mondays don't hurt.",
  },
  drains: {
    icon: <Zap className="w-5 h-5" />,
    label: "The Joy Killers",
    description:
      "Knowing your kryptonite helps us steer you away from roles that'll slowly drain you.",
  },
  thinking: {
    icon: <Brain className="w-5 h-5" />,
    label: "Inside Your Brain",
    description:
      "How you think, decide, and work reveals which roles fit your natural wiring.",
  },
  scenarios: {
    icon: <Trophy className="w-5 h-5" />,
    label: "It's 3 PM on a Monday...",
    description:
      "Real work situations, real instincts — this is where your true fit shows up.",
  },
};

// RIASEC category mapping
const CATEGORY_RIASEC: Record<string, Partial<RiasecScores>> = {
  development: { R: 2, I: 2 },
  data: { I: 2, C: 2 },
  "ai-ml": { I: 2, R: 1 },
  infrastructure: { R: 2, C: 1 },
  "it-support": { S: 2, C: 1 },
  "sap-erp": { C: 2, E: 1 },
  "tools-platforms": { R: 1, C: 2 },
  "non-coding-it": { E: 2, S: 1 },
  "design-creative": { A: 2, I: 1 },
  "marketing-growth": { E: 2, A: 1 },
};

const MBTI_ROLE_MAP: Record<string, string[]> = {
  INTJ: [
    "solutions-architect-associate",
    "cloud-architect",
    "data-scientist",
    "security-engineer",
    "ml-engineer",
  ],
  INTP: [
    "ai-research-scientist",
    "backend-developer",
    "data-engineer",
    "nlp-engineer",
  ],
  ENTJ: [
    "it-project-manager",
    "program-manager",
    "product-manager",
    "cloud-architect",
  ],
  ENTP: [
    "product-manager",
    "ai-product-manager",
    "it-consultant",
    "business-analyst",
  ],
  INFJ: ["technical-writer", "uiux-designer", "change-management-analyst"],
  INFP: [
    "content-writer",
    "uiux-designer",
    "graphic-designer",
    "product-designer",
  ],
  ENFJ: [
    "agile-coach",
    "scrum-master",
    "it-project-manager",
    "change-management-analyst",
  ],
  ENFP: [
    "product-manager",
    "digital-marketing-executive",
    "growth-hacker",
    "content-strategist",
  ],
  ISTJ: [
    "sap-fico-consultant",
    "it-compliance-analyst",
    "database-administrator",
    "itil-process-manager",
  ],
  ISFJ: [
    "it-support-engineer",
    "helpdesk-analyst",
    "service-desk-analyst",
    "technical-account-manager",
  ],
  ESTJ: [
    "it-project-manager",
    "sap-sd-consultant",
    "it-vendor-manager",
    "itil-process-manager",
  ],
  ESFJ: ["technical-account-manager", "scrum-master", "it-support-engineer"],
  ISTP: ["devops-engineer", "network-engineer", "sre", "system-administrator"],
  ISFP: [
    "uiux-designer",
    "web-designer",
    "graphic-designer",
    "motion-designer",
  ],
  ESTP: [
    "pre-sales-consultant",
    "growth-hacker",
    "performance-marketing-manager",
  ],
  ESFP: [
    "social-media-manager",
    "digital-marketing-executive",
    "community-manager",
  ],
};

const RIASEC_LABELS: Record<
  keyof RiasecScores,
  { name: string; color: string; description: string }
> = {
  R: {
    name: "Realistic",
    color: "bg-emerald-500",
    description: "Hands-on, technical, likes building things",
  },
  I: {
    name: "Investigative",
    color: "bg-violet-500",
    description: "Analytical, research-oriented, problem-solver",
  },
  A: {
    name: "Artistic",
    color: "bg-amber-500",
    description: "Creative, expressive, values aesthetics",
  },
  S: {
    name: "Social",
    color: "bg-blue-500",
    description: "People-oriented, collaborative, empathetic",
  },
  E: {
    name: "Enterprising",
    color: "bg-orange-500",
    description: "Leadership-driven, persuasive, goal-focused",
  },
  C: {
    name: "Conventional",
    color: "bg-slate-500",
    description: "Organised, structured, detail-oriented",
  },
};

const MBTI_DESCRIPTIONS: Record<string, { label: string; desc: string }> = {
  E: {
    label: "Extrovert (E)",
    desc: "You gain energy from collaboration and social interaction",
  },
  I: {
    label: "Introvert (I)",
    desc: "You do your best thinking independently and in focused work",
  },
  S: {
    label: "Sensing (S)",
    desc: "You prefer concrete facts, proven methods, and practical approaches",
  },
  N: {
    label: "Intuitive (N)",
    desc: "You're drawn to patterns, possibilities, and innovative thinking",
  },
  T: {
    label: "Thinking (T)",
    desc: "You make decisions based on logic, data, and objective analysis",
  },
  F: {
    label: "Feeling (F)",
    desc: "You factor in people, values, and human impact in decisions",
  },
  J: {
    label: "Judging (J)",
    desc: "You prefer structured plans, clear timelines, and decisive closure",
  },
  P: {
    label: "Perceiving (P)",
    desc: "You thrive with flexibility, adaptability, and open-ended exploration",
  },
};

const FIT_REASONS: Record<string, string> = {
  development:
    "Matches your hands-on building instincts and technical problem-solving",
  data: "Aligns with your analytical thinking and love of data patterns",
  "ai-ml":
    "Suits your investigative mindset and passion for intelligent systems",
  infrastructure:
    "Fits your systematic reliability-focused and technical nature",
  "it-support":
    "Matches your people-first approach and problem resolution instincts",
  "sap-erp":
    "Aligns with your structured, process-driven, and enterprise-oriented style",
  "tools-platforms":
    "Fits your technical precision and tooling-focused mindset",
  "non-coding-it":
    "Suits your leadership, analytical, and cross-functional instincts",
  "design-creative":
    "Matches your creative vision and user-experience sensibilities",
  "marketing-growth":
    "Aligns with your enterprising energy and creative communication style",
};

// ─── Scoring logic ────────────────────────────────────────────────────────────

function computeResults(
  roleCounts: Map<string, number>,
  riasecScores: RiasecScores,
  mbtiType: string,
): MatchResult[] {
  const maxRoleCount = Math.max(...roleCounts.values(), 1);
  const riasecMax = Math.max(...Object.values(riasecScores), 1);

  const mbtiBonus = new Set(MBTI_ROLE_MAP[mbtiType] ?? []);

  return roles
    .filter((r) => roleCounts.has(r.id) || mbtiBonus.has(r.id))
    .map((r) => {
      const roleCount = roleCounts.get(r.id) ?? 0;
      const baseScore = roleCount / maxRoleCount;

      // RIASEC category bonus
      const catKey = r.category
        .replace("design-creative", "design-creative")
        .replace("marketing-growth", "marketing-growth");
      const catRiasec = CATEGORY_RIASEC[catKey] ?? {};
      let riasecBonus = 0;
      for (const [dim, val] of Object.entries(catRiasec) as [
        keyof RiasecScores,
        number,
      ][]) {
        riasecBonus += (riasecScores[dim] / riasecMax) * val * 0.15;
      }

      const mbtiScore = mbtiBonus.has(r.id) ? 0.1 : 0;
      const total = baseScore + riasecBonus + mbtiScore;

      const catId = r.category;
      const fitReason =
        FIT_REASONS[catId] ?? "Matches your overall work-style profile";

      return { role: r, score: total, percentage: 0, fitReason };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((r, _i, arr) => ({
      ...r,
      percentage: Math.round((r.score / (arr[0]?.score ?? 1)) * 100),
    }));
}

function deriveMbti(counts: MbtiCounts): string {
  const e = counts.EI.E >= counts.EI.I ? "E" : "I";
  const s = counts.SN.S >= counts.SN.N ? "S" : "N";
  const t = counts.TF.T >= counts.TF.F ? "T" : "F";
  const j = counts.JP.J >= counts.JP.P ? "J" : "P";
  return `${e}${s}${t}${j}`;
}

// ─── Section progress ─────────────────────────────────────────────────────────

const SECTION_RANGES: Record<string, [number, number]> = {
  interests: [0, 5],
  drains: [6, 11],
  thinking: [12, 17],
  scenarios: [18, 24],
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function Quiz() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Map<string, string>>(new Map());
  const [riasecScores, setRiasecScores] = useState<RiasecScores>({
    R: 0,
    I: 0,
    A: 0,
    S: 0,
    E: 0,
    C: 0,
  });
  const [mbtiCounts, setMbtiCounts] = useState<MbtiCounts>({
    EI: { E: 0, I: 0 },
    SN: { S: 0, N: 0 },
    TF: { T: 0, F: 0 },
    JP: { J: 0, P: 0 },
  });
  const [roleCounts, setRoleCounts] = useState<Map<string, number>>(new Map());
  const [results, setResults] = useState<MatchResult[]>([]);
  const [mbtiType, setMbtiType] = useState("");
  const [animKey, setAnimKey] = useState(0);
  const [transitionSection, setTransitionSection] = useState("");
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const question = quizQuestions[currentQ];
  const totalQ = quizQuestions.length;
  const progress = (currentQ / totalQ) * 100;
  const currentSection = question?.section ?? "interests";
  const sectionColors = SECTION_COLORS[currentSection];

  useEffect(() => {
    return () => {
      if (transitionTimer.current) clearTimeout(transitionTimer.current);
    };
  }, []);

  const handleAnswer = (optionId: string) => {
    const opt = question.options.find((o) => o.id === optionId);
    if (!opt) return;

    // Update answers
    const newAnswers = new Map(answers);
    newAnswers.set(question.id, optionId);
    setAnswers(newAnswers);

    // Accumulate RIASEC
    const newRiasec = { ...riasecScores };
    for (const [k, v] of Object.entries(opt.riasecScores) as [
      keyof RiasecScores,
      number,
    ][]) {
      newRiasec[k] += v;
    }
    setRiasecScores(newRiasec);

    // Accumulate MBTI
    const newMbti = {
      ...mbtiCounts,
      ...{
        EI: { ...mbtiCounts.EI },
        SN: { ...mbtiCounts.SN },
        TF: { ...mbtiCounts.TF },
        JP: { ...mbtiCounts.JP },
      },
    };
    for (const ax of opt.mbtiAxes) {
      if (ax.dimension === "EI") {
        if (ax.pole === "left") newMbti.EI.E += ax.weight;
        else newMbti.EI.I += ax.weight;
      } else if (ax.dimension === "SN") {
        if (ax.pole === "left") newMbti.SN.S += ax.weight;
        else newMbti.SN.N += ax.weight;
      } else if (ax.dimension === "TF") {
        if (ax.pole === "left") newMbti.TF.T += ax.weight;
        else newMbti.TF.F += ax.weight;
      } else if (ax.dimension === "JP") {
        if (ax.pole === "left") newMbti.JP.J += ax.weight;
        else newMbti.JP.P += ax.weight;
      }
    }
    setMbtiCounts(newMbti);

    // Accumulate role counts
    const newRoleCounts = new Map(roleCounts);
    for (const rId of opt.roleIds) {
      newRoleCounts.set(rId, (newRoleCounts.get(rId) ?? 0) + 1);
    }
    setRoleCounts(newRoleCounts);

    const nextIdx = currentQ + 1;
    if (nextIdx >= totalQ) {
      // Compute and show results
      const type = deriveMbti(newMbti);
      setMbtiType(type);
      setResults(computeResults(newRoleCounts, newRiasec, type));
      setPhase("results");
      return;
    }

    const nextSection = quizQuestions[nextIdx].section;
    const currentIsLastInSection =
      currentQ + 1 <= totalQ - 1 && nextSection !== currentSection;

    if (currentIsLastInSection) {
      setTransitionSection(nextSection);
      setPhase("transition");
      transitionTimer.current = setTimeout(() => {
        setCurrentQ(nextIdx);
        setAnimKey((k) => k + 1);
        setPhase("quiz");
      }, 1800);
    } else {
      setCurrentQ(nextIdx);
      setAnimKey((k) => k + 1);
    }
  };

  const handleReset = () => {
    if (transitionTimer.current) clearTimeout(transitionTimer.current);
    setPhase("intro");
    setCurrentQ(0);
    setAnswers(new Map());
    setRiasecScores({ R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 });
    setMbtiCounts({
      EI: { E: 0, I: 0 },
      SN: { S: 0, N: 0 },
      TF: { T: 0, F: 0 },
      JP: { J: 0, P: 0 },
    });
    setRoleCounts(new Map());
    setResults([]);
    setMbtiType("");
    setAnimKey(0);
  };

  const getRiasecPercent = (val: number) => {
    const maxVal = Math.max(...Object.values(riasecScores), 1);
    return Math.round((val / maxVal) * 100);
  };

  const getSectionProgress = () => {
    const range = SECTION_RANGES[currentSection];
    if (!range) return 0;
    const [start, end] = range;
    const count = end - start + 1;
    const done = currentQ - start;
    return Math.round((done / count) * 100);
  };

  // ── Intro ──────────────────────────────────────────────────────────────────

  if (phase === "intro") {
    return (
      <Layout>
        <section className="bg-background py-16 md:py-28">
          <div className="container max-w-2xl mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
              <span className="text-4xl">🧭</span>
            </div>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 leading-tight">
              Discover Your Ideal IT Career Path
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Answer 25 questions across 4 sections to uncover IT roles that
              genuinely match your personality, interests, and work style.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {Object.entries(SECTION_META).map(([key, meta]) => (
                <div
                  key={key}
                  className={`rounded-xl border p-3 text-center ${SECTION_COLORS[key].badge} border-${SECTION_COLORS[key].border}`}
                >
                  <div className="flex justify-center mb-1.5">{meta.icon}</div>
                  <p className="text-xs font-medium leading-snug">
                    {meta.label}
                  </p>
                </div>
              ))}
            </div>

            <ul className="text-sm text-muted-foreground space-y-2 mb-8 inline-block text-left">
              <li className="flex items-center gap-2">
                <span className="text-primary font-bold">✓</span>
                25 questions based on O*NET Interest Profiler & MBTI frameworks
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-bold">✓</span>
                Takes 5–7 minutes — no technical knowledge required
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-bold">✓</span>
                Matched to your RIASEC profile + MBTI personality type
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-bold">✓</span>
                Get your top 5 ideal IT career paths with fit explanations
              </li>
            </ul>

            <div className="flex justify-center">
              <Button
                size="lg"
                className="gap-2 h-12 px-8"
                onClick={() => setPhase("quiz")}
                data-ocid="quiz.start_button"
              >
                Start Career Assessment
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // ── Section Transition ─────────────────────────────────────────────────────

  if (phase === "transition") {
    const meta = SECTION_META[transitionSection];
    const colors = SECTION_COLORS[transitionSection];
    return (
      <Layout>
        <section className="bg-background py-16 md:py-24 min-h-[60vh] flex items-center">
          <div className="container max-w-lg mx-auto px-4 text-center animate-fade-in">
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${colors.bg}`}
            >
              <span className={`${colors.text}`}>{meta?.icon}</span>
            </div>
            <p className="text-sm font-medium text-muted-foreground mb-1 uppercase tracking-wide">
              Up Next
            </p>
            <h2
              className={`font-display font-bold text-2xl md:text-3xl mb-3 ${colors.text}`}
            >
              {meta?.label}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {meta?.description}
            </p>
          </div>
        </section>
      </Layout>
    );
  }

  // ── Quiz ──────────────────────────────────────────────────────────────────

  if (phase === "quiz" && question) {
    const isSelected = (optId: string) => answers.get(question.id) === optId;
    const sectionMeta = SECTION_META[currentSection];
    const sectionPct = getSectionProgress();

    return (
      <Layout>
        <section className="bg-background py-8 md:py-14">
          <div className="container max-w-2xl mx-auto px-4">
            {/* Top meta bar */}
            <div className="flex items-center justify-between mb-3">
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${sectionColors.badge}`}
              >
                {sectionMeta?.icon}
                {question.sectionLabel}
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                Question{" "}
                <span className="text-foreground font-bold">
                  {currentQ + 1}
                </span>{" "}
                of {totalQ}
              </span>
            </div>

            {/* Overall progress */}
            <div className="mb-1.5">
              <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
                <div
                  data-ocid="quiz.progress_bar"
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Section progress */}
            <div className="flex items-center gap-2 mb-7">
              <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    currentSection === "interests"
                      ? "bg-primary"
                      : currentSection === "drains"
                        ? "bg-destructive"
                        : currentSection === "thinking"
                          ? "bg-accent"
                          : "bg-secondary-foreground"
                  }`}
                  style={{ width: `${sectionPct}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground tabular-nums">
                {Math.round(progress)}% complete
              </span>
            </div>

            {/* Question card */}
            <div
              key={animKey}
              className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8 animate-fade-up"
              data-ocid="quiz.question_card"
            >
              {question.description && (
                <p className="text-xs text-muted-foreground italic mb-3 leading-relaxed">
                  {question.description}
                </p>
              )}
              <h2 className="font-display font-bold text-lg md:text-xl text-foreground mb-5 leading-snug">
                {question.question}
              </h2>

              <div className="space-y-2.5">
                {question.options.map((option, idx) => {
                  const selected = isSelected(option.id);
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleAnswer(option.id)}
                      data-ocid={`quiz.option.${idx + 1}.button`}
                      className={`w-full text-left px-4 py-3.5 rounded-xl border-2 transition-smooth font-body text-sm md:text-base flex items-start gap-3 ${
                        selected
                          ? "border-primary bg-primary/10 text-primary font-medium"
                          : "border-border bg-muted/20 hover:border-primary/50 hover:bg-primary/5 text-foreground"
                      }`}
                    >
                      <span
                        className={`mt-0.5 min-w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 transition-fast ${
                          selected
                            ? "bg-primary border-primary text-primary-foreground"
                            : "border-muted-foreground/40"
                        }`}
                      >
                        {selected ? "✓" : String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1 leading-snug">{option.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-5">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  if (currentQ > 0) {
                    setCurrentQ(currentQ - 1);
                    setAnimKey((k) => k + 1);
                  } else {
                    setPhase("intro");
                  }
                }}
                data-ocid="quiz.back_button"
              >
                ← Back
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleReset}
                data-ocid="quiz.reset_button"
              >
                <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
                Restart
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // ── Results ────────────────────────────────────────────────────────────────

  const riasecEntries = Object.entries(RIASEC_LABELS) as [
    keyof RiasecScores,
    (typeof RIASEC_LABELS)[keyof RiasecScores],
  ][];
  const mbtiLetters = mbtiType.split("") as string[];

  return (
    <Layout>
      <section className="bg-background py-10 md:py-16">
        <div className="container max-w-3xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Trophy className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">
              Your Career Match Profile
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Based on your responses across all 4 sections, here is your
              personalised IT career analysis.
            </p>
          </div>

          {/* RIASEC profile */}
          <div
            className="bg-card rounded-2xl border border-border shadow-card p-6 mb-6"
            data-ocid="quiz.riasec_section"
          >
            <h2 className="font-display font-semibold text-base text-foreground mb-1">
              Your RIASEC Interest Profile
            </h2>
            <p className="text-xs text-muted-foreground mb-4">
              Based on Holland's O*NET model — shows your dominant work
              interests
            </p>
            <div className="space-y-3">
              {riasecEntries.map(([key, meta]) => {
                const val = riasecScores[key];
                const pct = getRiasecPercent(val);
                return (
                  <div key={key} className="flex items-center gap-3">
                    <div className="w-24 md:w-28 flex-shrink-0">
                      <p className="text-xs font-semibold text-foreground">
                        {meta.name}
                      </p>
                      <p className="text-xs text-muted-foreground leading-snug hidden md:block">
                        {meta.description}
                      </p>
                    </div>
                    <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${meta.color}`}
                        style={{ width: `${pct}%` }}
                        data-ocid={`quiz.riasec_bar.${key.toLowerCase()}`}
                      />
                    </div>
                    <span className="text-xs font-bold text-foreground w-8 text-right tabular-nums">
                      {pct}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MBTI type */}
          {mbtiType.length === 4 && (
            <div
              className="bg-card rounded-2xl border border-border shadow-card p-6 mb-6"
              data-ocid="quiz.mbti_section"
            >
              <h2 className="font-display font-semibold text-base text-foreground mb-1">
                Your Personality Type
              </h2>
              <p className="text-xs text-muted-foreground mb-4">
                Derived from MBTI 16 Personalities framework
              </p>
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                {mbtiLetters.map((letter) => (
                  <div
                    key={`mbti-letter-${letter}`}
                    className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center"
                  >
                    <span className="font-display font-bold text-xl text-primary">
                      {letter}
                    </span>
                  </div>
                ))}
                <span className="ml-2 font-display font-bold text-xl text-foreground">
                  {mbtiType}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {mbtiLetters.map((letter, i) => {
                  const desc = MBTI_DESCRIPTIONS[letter];
                  return desc ? (
                    <div
                      key={`trait-${letter}`}
                      className="flex items-start gap-2 text-sm"
                      data-ocid={`quiz.mbti_trait.${i + 1}`}
                    >
                      <span className="font-bold text-primary flex-shrink-0">
                        {letter}
                      </span>
                      <div>
                        <span className="font-semibold text-foreground text-xs">
                          {desc.label}
                        </span>
                        <p className="text-muted-foreground text-xs leading-snug">
                          {desc.desc}
                        </p>
                      </div>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          )}

          {/* Top role matches */}
          <div className="mb-8">
            <h2 className="font-display font-bold text-xl text-foreground mb-1">
              Your Top 5 IT Role Matches
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Ranked by how well your profile maps to each role's demands
            </p>
            <div className="space-y-3" data-ocid="quiz.results_list">
              {results.map((result, i) => {
                const cat = categoryMap[result.role.category];
                const rankColors = [
                  "bg-amber-100 text-amber-700 border-amber-200",
                  "bg-slate-100 text-slate-600 border-slate-200",
                  "bg-orange-100 text-orange-600 border-orange-200",
                  "bg-muted text-muted-foreground border-border",
                  "bg-muted text-muted-foreground border-border",
                ];
                return (
                  <Link
                    key={result.role.id}
                    to="/roles/$roleId"
                    params={{ roleId: result.role.id }}
                    data-ocid={`quiz.result.item.${i + 1}`}
                    className="group block"
                  >
                    <div className="bg-card rounded-xl border border-border shadow-card hover:shadow-card-hover transition-smooth p-4 md:p-5">
                      <div className="flex items-start gap-3">
                        {/* Rank badge */}
                        <div
                          className={`w-9 h-9 flex-shrink-0 rounded-full border-2 flex items-center justify-center text-sm font-bold ${rankColors[i]}`}
                        >
                          {i + 1}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-fast text-sm md:text-base">
                              {result.role.name}
                            </h3>
                            {cat && (
                              <Badge
                                variant="outline"
                                className={`text-xs ${cat.colorClass}`}
                              >
                                {cat.icon} {cat.shortName}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground leading-snug mb-2 line-clamp-1">
                            {result.fitReason}
                          </p>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full bg-primary rounded-full"
                                style={{ width: `${result.percentage}%` }}
                              />
                            </div>
                            <span className="text-xs font-bold text-primary flex-shrink-0 tabular-nums">
                              {result.percentage}% match
                            </span>
                          </div>
                        </div>

                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-fast flex-shrink-0 mt-1" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="outline"
              onClick={handleReset}
              className="gap-2"
              data-ocid="quiz.retake_button"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Assessment
            </Button>
            <Link to="/roles" search={{ category: undefined }}>
              <Button
                className="gap-2 w-full"
                data-ocid="quiz.browse_all_button"
              >
                Browse All 114+ Roles
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
