import type { FreeCourse } from "@/data/roleExtras";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

type LanguageFilter = "All" | "English" | "Hindi" | "Telugu";

const LANGUAGE_FILTERS: LanguageFilter[] = [
  "All",
  "English",
  "Hindi",
  "Telugu",
];

const PLATFORM_COLORS: Record<string, string> = {
  NPTEL: "bg-purple-500/10 text-purple-700 border-purple-500/20",
  Coursera: "bg-blue-500/10 text-blue-700 border-blue-500/20",
  GUVI: "bg-green-500/10 text-green-700 border-green-500/20",
  YouTube: "bg-red-500/10 text-red-700 border-red-500/20",
  LearnVern: "bg-orange-500/10 text-orange-700 border-orange-500/20",
  Swayam: "bg-indigo-500/10 text-indigo-700 border-indigo-500/20",
  freeCodeCamp: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
  edX: "bg-muted text-muted-foreground border-border",
};

const LANG_COLORS: Record<string, string> = {
  English: "bg-blue-500/10 text-blue-700 border-blue-500/20",
  Hindi: "bg-orange-500/10 text-orange-700 border-orange-500/20",
  Telugu: "bg-green-500/10 text-green-700 border-green-500/20",
  "English & Hindi": "bg-amber-500/10 text-amber-700 border-amber-500/20",
  "English & Telugu": "bg-teal-500/10 text-teal-700 border-teal-500/20",
};

const LEVEL_COLORS: Record<string, string> = {
  Beginner: "bg-emerald-500/10 text-emerald-700",
  Intermediate: "bg-amber-500/10 text-amber-700",
  Advanced: "bg-rose-500/10 text-rose-700",
};

function matchesFilter(course: FreeCourse, filter: LanguageFilter): boolean {
  if (filter === "All") return true;
  return course.language.includes(filter);
}

interface Props {
  courses: FreeCourse[] | undefined;
}

export function FreeCourseSection({ courses }: Props) {
  const [activeFilter, setActiveFilter] = useState<LanguageFilter>("All");

  if (!courses || courses.length === 0) {
    return (
      <div
        className="text-center py-16 px-6 rounded-xl border border-border bg-card"
        data-ocid="free_courses.empty_state"
      >
        <div className="text-5xl mb-4">📚</div>
        <h3 className="font-display font-semibold text-foreground text-lg mb-2">
          Courses coming soon
        </h3>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          We're curating free courses across platforms and languages for this
          role. Check back soon!
        </p>
      </div>
    );
  }

  const filtered = courses.filter((c) => matchesFilter(c, activeFilter));

  return (
    <div data-ocid="free_courses.section">
      {/* Header row */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div
          className="flex flex-wrap gap-2"
          aria-label="Filter courses by language"
        >
          {LANGUAGE_FILTERS.map((lang) => {
            const count =
              lang === "All"
                ? courses.length
                : courses.filter((c) => matchesFilter(c, lang)).length;
            return (
              <button
                type="button"
                key={lang}
                onClick={() => setActiveFilter(lang)}
                data-ocid={`free_courses.filter.${lang.toLowerCase()}`}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  activeFilter === lang
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {lang}
                <span
                  className={`ml-1.5 text-xs ${activeFilter === lang ? "opacity-80" : "text-muted-foreground"}`}
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
        <span className="text-sm text-muted-foreground">
          {filtered.length} course{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Course grid */}
      {filtered.length === 0 ? (
        <div
          className="text-center py-10 rounded-xl border border-border bg-card"
          data-ocid="free_courses.empty_state"
        >
          <p className="text-muted-foreground text-sm">
            No {activeFilter} courses found for this role yet.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-3">
          {filtered.map((course, i) => (
            <a
              key={`${course.name}-${i}`}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid={`free_courses.item.${i + 1}`}
              className="group bg-card border border-border rounded-xl p-4 hover:border-primary/30 hover:shadow-sm transition-all flex flex-col gap-3"
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors flex-1 min-w-0">
                  {course.name}
                </p>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
              </div>

              {/* Provider */}
              <p className="text-xs text-muted-foreground -mt-1">
                {course.provider}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                <span
                  className={`inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-full border ${
                    PLATFORM_COLORS[course.platform] ??
                    "bg-muted text-muted-foreground border-border"
                  }`}
                >
                  {course.platform}
                </span>
                <span
                  className={`inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-full border ${
                    LANG_COLORS[course.language] ??
                    "bg-muted text-muted-foreground border-border"
                  }`}
                >
                  {course.language}
                </span>
                {course.level && (
                  <span
                    className={`inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-full ${
                      LEVEL_COLORS[course.level] ??
                      "bg-muted text-muted-foreground"
                    }`}
                  >
                    {course.level}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
