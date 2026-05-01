import type { InterviewPrep, TestLevel } from "@/data/roleExtras";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface Props {
  prep: InterviewPrep[] | undefined;
}

const LEVEL_CONFIG: Record<
  TestLevel,
  { label: string; activeBg: string; color: string; badge: string }
> = {
  basic: {
    label: "Basic",
    activeBg: "bg-emerald-500 text-white border-emerald-500",
    color: "text-emerald-700 border-emerald-500/30",
    badge: "bg-emerald-500/10 text-emerald-700",
  },
  intermediate: {
    label: "Intermediate",
    activeBg: "bg-amber-500 text-white border-amber-500",
    color: "text-amber-700 border-amber-500/30",
    badge: "bg-amber-500/10 text-amber-700",
  },
  advanced: {
    label: "Advanced",
    activeBg: "bg-rose-500 text-white border-rose-500",
    color: "text-rose-700 border-rose-500/30",
    badge: "bg-rose-500/10 text-rose-700",
  },
};

const LEVELS: TestLevel[] = ["basic", "intermediate", "advanced"];

export function InterviewPrepSection({ prep }: Props) {
  const [activeLevel, setActiveLevel] = useState<TestLevel>("basic");
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  if (!prep || prep.length === 0) {
    return (
      <div
        className="text-center py-16 px-6 rounded-xl border border-border bg-card"
        data-ocid="interview_prep.empty_state"
      >
        <div className="text-5xl mb-4">🎤</div>
        <h3 className="font-display font-semibold text-foreground text-lg mb-2">
          Interview prep coming soon
        </h3>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          We're curating common interview questions and model answers for this
          role. Check back soon!
        </p>
      </div>
    );
  }

  const currentPrep = prep.find((p) => p.level === activeLevel);

  function toggleExpanded(id: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div data-ocid="interview_prep.section">
      {/* Level tabs */}
      <div
        className="flex gap-2 mb-6 flex-wrap"
        data-ocid="interview_prep.level_tabs"
      >
        {LEVELS.map((level) => {
          const cfg = LEVEL_CONFIG[level];
          const levelPrep = prep.find((p) => p.level === level);
          const count = levelPrep?.questions.length ?? 0;
          return (
            <button
              type="button"
              key={level}
              onClick={() => setActiveLevel(level)}
              data-ocid={`interview_prep.tab.${level}`}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors flex items-center gap-1.5 ${
                activeLevel === level
                  ? cfg.activeBg
                  : `bg-card ${cfg.color} hover:bg-muted/60`
              }`}
            >
              {cfg.label}
              {count > 0 && (
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full ${activeLevel === level ? "bg-white/20" : cfg.badge}`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {!currentPrep || currentPrep.questions.length === 0 ? (
        <div
          className="text-center py-10 rounded-xl border border-border bg-card"
          data-ocid="interview_prep.empty_state"
        >
          <p className="text-muted-foreground text-sm">
            No {activeLevel} questions available yet.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {currentPrep.questions.map((q, i) => {
            const isOpen = expanded.has(q.id);
            return (
              <div
                key={q.id}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/25 transition-colors"
                data-ocid={`interview_prep.item.${i + 1}`}
              >
                {/* Question header */}
                <button
                  type="button"
                  onClick={() => toggleExpanded(q.id)}
                  data-ocid={`interview_prep.toggle.${i + 1}`}
                  className="w-full text-left px-5 py-4 flex items-start justify-between gap-3 hover:bg-muted/30 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <span
                      className={`flex-shrink-0 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center mt-0.5 ${LEVEL_CONFIG[activeLevel].badge}`}
                    >
                      Q{i + 1}
                    </span>
                    <p className="text-foreground font-semibold text-sm leading-snug">
                      {q.question}
                    </p>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  )}
                </button>

                {/* Expanded content */}
                {isOpen && (
                  <div
                    className="px-5 pb-5 border-t border-border"
                    data-ocid={`interview_prep.answer.${i + 1}`}
                  >
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mt-4 mb-3">
                      Key Talking Points
                    </p>
                    <ul className="space-y-2 mb-4">
                      {q.talkingPoints.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm text-foreground leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {q.keywords.length > 0 && (
                      <>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          Keywords to Use
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {q.keywords.map((kw) => (
                            <span
                              key={kw}
                              className="inline-flex items-center bg-primary/8 text-primary border border-primary/20 text-xs font-medium px-2.5 py-1 rounded-full"
                            >
                              {kw}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
