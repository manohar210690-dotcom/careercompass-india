import { Award, ExternalLink } from "lucide-react";

interface Certification {
  name: string;
  url: string;
  provider: string;
}

interface Props {
  certifications: Certification[] | undefined;
}

const PROVIDER_COLORS: Record<string, string> = {
  Coursera: "bg-blue-500/10 text-blue-700 border-blue-500/20",
  "Google Cloud": "bg-sky-500/10 text-sky-700 border-sky-500/20",
  Google: "bg-sky-500/10 text-sky-700 border-sky-500/20",
  Microsoft: "bg-blue-500/10 text-blue-700 border-blue-500/20",
  AWS: "bg-orange-500/10 text-orange-700 border-orange-500/20",
  Amazon: "bg-orange-500/10 text-orange-700 border-orange-500/20",
  NPTEL: "bg-purple-500/10 text-purple-700 border-purple-500/20",
  Swayam: "bg-indigo-500/10 text-indigo-700 border-indigo-500/20",
  GUVI: "bg-green-500/10 text-green-700 border-green-500/20",
  IBM: "bg-blue-500/10 text-blue-700 border-blue-500/20",
  Meta: "bg-violet-500/10 text-violet-700 border-violet-500/20",
  Oracle: "bg-rose-500/10 text-rose-700 border-rose-500/20",
  Salesforce: "bg-sky-500/10 text-sky-700 border-sky-500/20",
  SAP: "bg-amber-500/10 text-amber-700 border-amber-500/20",
  edX: "bg-muted text-muted-foreground border-border",
  freeCodeCamp: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
};

function getProviderColor(provider: string): string {
  for (const key of Object.keys(PROVIDER_COLORS)) {
    if (provider.toLowerCase().includes(key.toLowerCase())) {
      return PROVIDER_COLORS[key];
    }
  }
  return "bg-primary/10 text-primary border-primary/20";
}

export function FreeCertificationSection({ certifications }: Props) {
  if (!certifications || certifications.length === 0) {
    return (
      <div
        className="text-center py-16 px-6 rounded-xl border border-border bg-card"
        data-ocid="free_certifications.empty_state"
      >
        <div className="text-5xl mb-4">🏅</div>
        <h3 className="font-display font-semibold text-foreground text-lg mb-2">
          Certifications coming soon
        </h3>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          We're curating free certifications from top platforms for this role.
          Check back soon!
        </p>
      </div>
    );
  }

  return (
    <div data-ocid="free_certifications.section">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-primary" />
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              {certifications.length}
            </span>{" "}
            free certification{certifications.length !== 1 ? "s" : ""} available
          </p>
        </div>
        <span className="inline-flex items-center gap-1 text-xs font-medium bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 px-2.5 py-1 rounded-full">
          ✓ 100% Free
        </span>
      </div>

      {/* Certification grid */}
      <div className="grid sm:grid-cols-2 gap-3">
        {certifications.map((cert, i) => (
          <div
            key={`${cert.name}-${i}`}
            className="bg-card border border-border rounded-xl p-4 hover:border-primary/30 hover:shadow-sm transition-all flex flex-col gap-3"
            data-ocid={`free_certifications.item.${i + 1}`}
          >
            {/* Top row */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground leading-snug">
                  {cert.name}
                </p>
              </div>
            </div>

            {/* Provider badge */}
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full border ${getProviderColor(
                  cert.provider,
                )}`}
              >
                {cert.provider}
              </span>
            </div>

            {/* CTA */}
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid={`free_certifications.link.${i + 1}`}
              className="mt-auto flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Get Certified →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
