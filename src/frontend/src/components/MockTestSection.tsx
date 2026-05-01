import type { MockTest, TestLevel } from "@/data/roleExtras";
import { useState } from "react";

interface Props {
  tests: MockTest[] | undefined;
  roleId: string;
}

type TestState = "idle" | "taking" | "done";

const LEVEL_CONFIG: Record<
  TestLevel,
  { label: string; color: string; activeBg: string; badge: string }
> = {
  basic: {
    label: "Basic",
    color: "text-emerald-700 border-emerald-500/30",
    activeBg: "bg-emerald-500 text-white border-emerald-500",
    badge: "bg-emerald-500/10 text-emerald-700",
  },
  intermediate: {
    label: "Intermediate",
    color: "text-amber-700 border-amber-500/30",
    activeBg: "bg-amber-500 text-white border-amber-500",
    badge: "bg-amber-500/10 text-amber-700",
  },
  advanced: {
    label: "Advanced",
    color: "text-rose-700 border-rose-500/30",
    activeBg: "bg-rose-500 text-white border-rose-500",
    badge: "bg-rose-500/10 text-rose-700",
  },
};

const LEVELS: TestLevel[] = ["basic", "intermediate", "advanced"];

function CircleProgress({ percentage }: { percentage: number }) {
  const r = 42;
  const circ = 2 * Math.PI * r;
  const dash = (percentage / 100) * circ;
  const color =
    percentage >= 70 ? "#22c55e" : percentage >= 50 ? "#f59e0b" : "#ef4444";
  return (
    <svg
      width="108"
      height="108"
      viewBox="0 0 108 108"
      className="-rotate-90"
      role="img"
      aria-label={`Score: ${Math.round(percentage)} percent`}
    >
      <circle
        cx="54"
        cy="54"
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        className="text-muted/30"
      />
      <circle
        cx="54"
        cy="54"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${circ}`}
        className="transition-all duration-700"
      />
      <text
        x="54"
        y="54"
        textAnchor="middle"
        dominantBaseline="middle"
        className="rotate-90 text-foreground font-bold"
        fill="currentColor"
        fontSize="18"
        transform="rotate(90 54 54)"
        fontWeight="700"
        aria-label={`${Math.round(percentage)} percent`}
      >
        {Math.round(percentage)}%
      </text>
    </svg>
  );
}

export function MockTestSection({ tests, roleId: _roleId }: Props) {
  const [activeLevel, setActiveLevel] = useState<TestLevel>("basic");
  const [testState, setTestState] = useState<TestState>("idle");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);

  const availableTests = tests ?? [];
  const test = availableTests.find((t) => t.level === activeLevel);

  function startTest() {
    if (!test) return;
    setTestState("taking");
    setCurrentQuestion(0);
    setSelectedOption(null);
    setAnswers(new Array(test.questions.length).fill(null));
    setShowExplanation(false);
  }

  function handleOptionSelect(idx: number) {
    if (showExplanation) return;
    setSelectedOption(idx);
  }

  function handleNext() {
    if (!test || selectedOption === null) return;
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = selectedOption;
    setAnswers(updatedAnswers);

    if (!showExplanation) {
      setShowExplanation(true);
      return;
    }

    if (currentQuestion + 1 >= test.questions.length) {
      setTestState("done");
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    }
  }

  function handleRetake() {
    setTestState("idle");
    setCurrentQuestion(0);
    setSelectedOption(null);
    setAnswers([]);
    setShowExplanation(false);
  }

  function handleTryNextLevel() {
    const idx = LEVELS.indexOf(activeLevel);
    if (idx < LEVELS.length - 1) {
      setActiveLevel(LEVELS[idx + 1]);
      handleRetake();
    }
  }

  if (!tests || tests.length === 0) {
    return (
      <div
        className="text-center py-16 px-6 rounded-xl border border-border bg-card"
        data-ocid="mock_test.empty_state"
      >
        <div className="text-5xl mb-4">🧪</div>
        <h3 className="font-display font-semibold text-foreground text-lg mb-2">
          Mock tests coming soon
        </h3>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          We're building role-specific mock tests for all three levels. Check
          back shortly!
        </p>
      </div>
    );
  }

  return (
    <div data-ocid="mock_test.section">
      {/* Level tabs */}
      <div
        className="flex gap-2 mb-6 flex-wrap"
        data-ocid="mock_test.level_tabs"
      >
        {LEVELS.map((level) => {
          const cfg = LEVEL_CONFIG[level];
          const hasTest = availableTests.some((t) => t.level === level);
          return (
            <button
              type="button"
              key={level}
              onClick={() => {
                setActiveLevel(level);
                handleRetake();
              }}
              data-ocid={`mock_test.tab.${level}`}
              disabled={!hasTest}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors ${
                activeLevel === level
                  ? cfg.activeBg
                  : hasTest
                    ? `bg-card ${cfg.color} hover:bg-muted/60`
                    : "bg-muted/30 text-muted-foreground/40 border-border cursor-not-allowed"
              }`}
            >
              {cfg.label}
              {!hasTest && (
                <span className="ml-1 text-xs opacity-60">(soon)</span>
              )}
            </button>
          );
        })}
      </div>

      {!test ? (
        <div
          className="text-center py-10 rounded-xl border border-border bg-card"
          data-ocid="mock_test.empty_state"
        >
          <p className="text-muted-foreground text-sm">
            No {activeLevel} test available yet.
          </p>
        </div>
      ) : testState === "idle" ? (
        /* ── Start card ── */
        <div
          className="bg-card rounded-xl border border-border p-8 text-center max-w-lg mx-auto"
          data-ocid="mock_test.start_card"
        >
          <div
            className={`inline-flex items-center text-sm font-semibold px-3 py-1 rounded-full mb-5 ${LEVEL_CONFIG[activeLevel].badge}`}
          >
            {LEVEL_CONFIG[activeLevel].label} Level
          </div>
          <h3 className="font-display font-bold text-foreground text-xl mb-2">
            {test.questions.length} Questions
          </h3>
          <p className="text-muted-foreground text-sm mb-1">
            Passing score: {test.passingScore}%
          </p>
          <p className="text-muted-foreground text-sm mb-8">
            Multiple choice — one correct answer per question.
          </p>
          <button
            type="button"
            onClick={startTest}
            data-ocid="mock_test.start_button"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            Start Test
          </button>
        </div>
      ) : testState === "done" ? (
        /* ── Score screen ── */
        (() => {
          const correctCount = answers.filter((ans, i) => {
            if (ans === null) return false;
            return test.questions[i].options[ans].isCorrect;
          }).length;
          const pct = Math.round((correctCount / test.questions.length) * 100);
          const passed = pct >= test.passingScore;
          return (
            <div
              className="bg-card rounded-xl border border-border p-6"
              data-ocid="mock_test.score_screen"
            >
              {/* Score summary */}
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                <div className="flex-shrink-0">
                  <CircleProgress percentage={pct} />
                </div>
                <div className="text-center sm:text-left">
                  <div
                    className={`inline-flex items-center text-sm font-bold px-3 py-1 rounded-full mb-3 ${passed ? "bg-emerald-500/10 text-emerald-700" : "bg-rose-500/10 text-rose-700"}`}
                  >
                    {passed ? "🎉 Passed!" : "😓 Not quite — try again"}
                  </div>
                  <p className="text-foreground font-bold text-2xl">
                    {correctCount} / {test.questions.length}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Passing score: {test.passingScore}%
                  </p>
                </div>
              </div>

              {/* Question review */}
              <div className="space-y-3 mb-6">
                {test.questions.map((q, i) => {
                  const ans = answers[i];
                  const isCorrect = ans !== null && q.options[ans].isCorrect;
                  return (
                    <div
                      key={q.id}
                      className={`flex items-start gap-3 p-3 rounded-lg border text-sm ${isCorrect ? "border-emerald-500/20 bg-emerald-500/5" : "border-rose-500/20 bg-rose-500/5"}`}
                    >
                      <span className="flex-shrink-0 font-bold text-base">
                        {isCorrect ? "✓" : "✗"}
                      </span>
                      <div className="min-w-0">
                        <p className="text-foreground font-medium leading-snug">
                          {q.question}
                        </p>
                        {ans !== null && !isCorrect && (
                          <p className="text-muted-foreground text-xs mt-1">
                            Correct:{" "}
                            <span className="font-semibold text-foreground">
                              {q.options.find((o) => o.isCorrect)?.text}
                            </span>
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  type="button"
                  onClick={handleRetake}
                  data-ocid="mock_test.retake_button"
                  className="px-6 py-2.5 rounded-full text-sm font-semibold border border-border bg-card hover:bg-muted/60 text-foreground transition-colors"
                >
                  Retake Test
                </button>
                {LEVELS.indexOf(activeLevel) < LEVELS.length - 1 && (
                  <button
                    type="button"
                    onClick={handleTryNextLevel}
                    data-ocid="mock_test.next_level_button"
                    className="px-6 py-2.5 rounded-full text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Try{" "}
                    {
                      LEVEL_CONFIG[LEVELS[LEVELS.indexOf(activeLevel) + 1]]
                        .label
                    }{" "}
                    Level →
                  </button>
                )}
              </div>
            </div>
          );
        })()
      ) : (
        /* ── Taking test ── */
        (() => {
          const q = test.questions[currentQuestion];
          const progress = (currentQuestion / test.questions.length) * 100;
          const correctIdx = q.options.findIndex((o) => o.isCorrect);
          return (
            <div
              className="bg-card rounded-xl border border-border p-6"
              data-ocid="mock_test.question_screen"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3 text-sm text-muted-foreground">
                <span className="font-medium">
                  Question {currentQuestion + 1} of {test.questions.length}
                </span>
                {q.topic && (
                  <span className="bg-muted/60 px-2.5 py-0.5 rounded-full text-xs">
                    {q.topic}
                  </span>
                )}
              </div>

              {/* Progress bar */}
              <div className="h-1.5 rounded-full bg-muted mb-6 overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Question */}
              <p className="text-foreground font-semibold text-base leading-snug mb-5">
                {q.question}
              </p>

              {/* Options */}
              <div className="space-y-2.5 mb-5" data-ocid="mock_test.options">
                {q.options.map((opt, i) => {
                  let optClass =
                    "border-border bg-background text-foreground hover:border-primary/40 hover:bg-primary/5";
                  if (selectedOption === i && !showExplanation) {
                    optClass = "border-primary bg-primary/10 text-foreground";
                  } else if (showExplanation) {
                    if (i === correctIdx) {
                      optClass =
                        "border-emerald-500 bg-emerald-500/10 text-emerald-700";
                    } else if (selectedOption === i && i !== correctIdx) {
                      optClass = "border-rose-500 bg-rose-500/10 text-rose-700";
                    } else {
                      optClass =
                        "border-border bg-background text-muted-foreground";
                    }
                  }
                  return (
                    <button
                      type="button"
                      key={opt.text}
                      onClick={() => handleOptionSelect(i)}
                      disabled={showExplanation}
                      data-ocid={`mock_test.option.${i + 1}`}
                      className={`w-full text-left px-4 py-3 rounded-lg border text-sm font-medium transition-all ${optClass} ${showExplanation ? "cursor-default" : "cursor-pointer"}`}
                    >
                      <span className="mr-2 opacity-50">
                        {String.fromCharCode(65 + i)}.
                      </span>
                      {opt.text}
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {showExplanation && (
                <div
                  className="bg-muted/40 border border-border rounded-lg p-4 mb-5 text-sm"
                  data-ocid="mock_test.explanation"
                >
                  <p className="font-semibold text-foreground mb-1">
                    {selectedOption !== null &&
                    q.options[selectedOption].isCorrect
                      ? "✅ Correct!"
                      : "❌ Incorrect"}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {q.explanation}
                  </p>
                </div>
              )}

              {/* Next button */}
              <button
                type="button"
                onClick={handleNext}
                disabled={selectedOption === null}
                data-ocid="mock_test.next_button"
                className="w-full py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                {!showExplanation
                  ? "Submit Answer"
                  : currentQuestion + 1 >= test.questions.length
                    ? "See Results"
                    : "Next Question →"}
              </button>
            </div>
          );
        })()
      )}
    </div>
  );
}
