import type { InterviewGuide } from "@/data/roleExtras";
import { BookOpen, CheckCircle, Lightbulb } from "lucide-react";

interface Props {
  guide: InterviewGuide | undefined;
}

export function InterviewGuideSection({ guide }: Props) {
  if (!guide) {
    return (
      <div
        className="text-center py-16 px-6 rounded-xl border border-border bg-card"
        data-ocid="interview_guide.empty_state"
      >
        <div className="text-5xl mb-4">📚</div>
        <h3 className="font-display font-semibold text-foreground text-lg mb-2">
          Interview Guide coming soon
        </h3>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          We're preparing a tailored interview guide for this role. Check back
          soon!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8" data-ocid="interview_guide.section">
      {/* Key Topics to Revise */}
      <div>
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-9 h-9 rounded-xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <h2 className="font-display font-bold text-foreground text-xl">
              Key Topics to Revise
            </h2>
            <p className="text-sm text-muted-foreground">
              Study these areas before your interview to be thoroughly prepared
            </p>
          </div>
        </div>

        <div
          className="grid md:grid-cols-2 gap-4"
          data-ocid="interview_guide.topics.section"
        >
          {guide.revisionTopics.map((section, i) => (
            <div
              key={section.category}
              className="bg-card rounded-xl border border-indigo-200/60 p-5 hover:border-indigo-300/80 transition-colors"
              data-ocid={`interview_guide.topic_category.${i + 1}`}
            >
              <h3 className="font-semibold text-indigo-700 text-sm mb-3 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-md bg-indigo-500/15 flex items-center justify-center text-indigo-600 font-bold text-xs">
                  {i + 1}
                </span>
                {section.category}
              </h3>
              <ul className="space-y-2">
                {section.topics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Tips to Crack It */}
      <div>
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <h2 className="font-display font-bold text-foreground text-xl">
              Tips to Crack It
            </h2>
            <p className="text-sm text-muted-foreground">
              Real-world advice from people who've been through this interview
            </p>
          </div>
        </div>

        <div
          className="bg-amber-50 rounded-xl border border-amber-200/70 p-6"
          data-ocid="interview_guide.tips.section"
        >
          <ol className="space-y-3">
            {guide.tipsToCrack.map((tip, i) => (
              <li
                key={tip}
                className="flex items-start gap-3"
                data-ocid={`interview_guide.tip.${i + 1}`}
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm text-amber-900 leading-relaxed">{tip}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
