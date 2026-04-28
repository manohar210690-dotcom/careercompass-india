import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { categoryMap } from "@/data/categories";
import { quizQuestions } from "@/data/quiz";
import { roles } from "@/data/roles";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, RotateCcw, Trophy } from "lucide-react";
import { useState } from "react";

type QuizState = "intro" | "questions" | "results";

interface MatchResult {
  role: (typeof roles)[number];
  score: number;
  percentage: number;
}

function computeResults(answers: Record<string, string>): MatchResult[] {
  const counts: Record<string, number> = {};
  for (const optionId of Object.values(answers)) {
    const question = quizQuestions.find((q) =>
      q.options.some((o) => o.id === optionId),
    );
    if (!question) continue;
    const option = question.options.find((o) => o.id === optionId);
    if (!option) continue;
    for (const rId of option.roleIds) {
      counts[rId] = (counts[rId] ?? 0) + 1;
    }
  }

  const maxScore = Math.max(...Object.values(counts), 1);
  return roles
    .filter((r) => counts[r.id])
    .map((r) => ({
      role: r,
      score: counts[r.id] ?? 0,
      percentage: Math.round(((counts[r.id] ?? 0) / maxScore) * 100),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
}

export default function Quiz() {
  const [state, setState] = useState<QuizState>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<MatchResult[]>([]);

  const question = quizQuestions[currentQ];
  const totalQ = quizQuestions.length;
  const progress = (currentQ / totalQ) * 100;

  const handleAnswer = (optionId: string) => {
    const newAnswers = { ...answers, [question.id]: optionId };
    setAnswers(newAnswers);
    if (currentQ < totalQ - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setResults(computeResults(newAnswers));
      setState("results");
    }
  };

  const handleReset = () => {
    setState("intro");
    setCurrentQ(0);
    setAnswers({});
    setResults([]);
  };

  return (
    <Layout>
      {state === "intro" && (
        <section className="bg-background py-16 md:py-24">
          <div className="container max-w-2xl mx-auto px-4 text-center">
            <div className="text-5xl mb-4">🧭</div>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Discover Your Career Path
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Answer 10 quick questions about how you work and what excites you.
              No technical knowledge required!
            </p>
            <ul className="text-sm text-muted-foreground space-y-1.5 mb-8 inline-block text-left">
              <li>✓ Questions about work style, not technical skills</li>
              <li>✓ Takes under 2 minutes</li>
              <li>✓ Get matched to 5-8 ideal career paths</li>
            </ul>
            <div className="flex justify-center">
              <Button
                size="lg"
                className="gap-2 h-12 px-8"
                onClick={() => setState("questions")}
                data-ocid="quiz.start.button"
              >
                Start the Quiz
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {state === "questions" && question && (
        <section className="bg-background py-10 md:py-16">
          <div className="container max-w-2xl mx-auto px-4">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-muted-foreground">
                  Question {currentQ + 1} of {totalQ}
                </span>
                <span className="text-sm font-medium text-primary">
                  {Math.round(progress)}% complete
                </span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div
                  data-ocid="quiz.progress_bar"
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div
              className="bg-card rounded-2xl border border-border shadow-card p-8 animate-fade-up"
              data-ocid="quiz.question_card"
            >
              <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-6 leading-snug">
                {question.question}
              </h2>
              <div className="space-y-3">
                {question.options.map((option) => {
                  const isSelected = answers[question.id] === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleAnswer(option.id)}
                      data-ocid={`quiz.option.${option.id}.button`}
                      className={`w-full text-left px-5 py-4 rounded-xl border transition-smooth font-body text-sm md:text-base ${
                        isSelected
                          ? "border-primary bg-primary/10 text-primary font-medium"
                          : "border-border bg-muted/30 hover:border-primary/50 hover:bg-primary/5 text-foreground"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-fast border-current text-xs">
                          {isSelected ? "✓" : ""}
                        </span>
                        {option.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Back / Reset */}
            <div className="flex justify-between mt-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  if (currentQ > 0) setCurrentQ(currentQ - 1);
                  else setState("intro");
                }}
                data-ocid="quiz.back.button"
              >
                ← Back
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleReset}
                data-ocid="quiz.reset.button"
              >
                <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
                Restart
              </Button>
            </div>
          </div>
        </section>
      )}

      {state === "results" && (
        <section className="bg-background py-10 md:py-16">
          <div className="container max-w-3xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <Trophy className="w-7 h-7 text-primary" />
              </div>
              <h1 className="font-display font-bold text-3xl text-foreground mb-2">
                Your Career Matches!
              </h1>
              <p className="text-muted-foreground">
                Based on your answers, here are the IT roles that best match
                your work style and interests.
              </p>
            </div>

            {/* Results */}
            <div className="space-y-4 mb-10" data-ocid="quiz.results.list">
              {results.map((result, i) => {
                const cat = categoryMap[result.role.category];
                return (
                  <Link
                    key={result.role.id}
                    to="/roles/$roleId"
                    params={{ roleId: result.role.id }}
                    data-ocid={`quiz.results.item.${i + 1}`}
                    className="group"
                  >
                    <div className="bg-card rounded-xl border border-border shadow-card hover:shadow-card-hover transition-smooth p-5">
                      <div className="flex items-start gap-4">
                        {/* Rank */}
                        <div
                          className={`w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center text-sm font-bold ${
                            i === 0
                              ? "bg-amber-100 text-amber-700"
                              : i === 1
                                ? "bg-slate-100 text-slate-600"
                                : i === 2
                                  ? "bg-orange-100 text-orange-600"
                                  : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {i + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-fast">
                              {result.role.name}
                            </h3>
                            <span
                              className={`text-xs font-medium px-2 py-0.5 rounded-full ${cat.colorClass}`}
                            >
                              {cat.icon} {cat.shortName}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                            {result.role.description}
                          </p>
                          {/* Match bar */}
                          <div className="flex items-center gap-3">
                            <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full bg-primary rounded-full"
                                style={{ width: `${result.percentage}%` }}
                              />
                            </div>
                            <span className="text-xs font-medium text-primary flex-shrink-0">
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

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="outline"
                onClick={handleReset}
                className="gap-2"
                data-ocid="quiz.retake.button"
              >
                <RotateCcw className="w-4 h-4" />
                Retake Quiz
              </Button>
              <Link to="/roles" search={{ category: undefined }}>
                {" "}
                <Button className="gap-2" data-ocid="quiz.browse_all.button">
                  Browse All Roles
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
