import { CompanyCard } from "@/components/CompanyCard";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import type { Company } from "@/data/companies";
import { companies } from "@/data/companies";
import { Building2, Search, X } from "lucide-react";
import { useMemo, useState } from "react";

const COMPANY_TYPES: {
  value: Company["companyType"] | "all";
  label: string;
}[] = [
  { value: "all", label: "All Types" },
  { value: "product", label: "Product" },
  { value: "service", label: "Service" },
  { value: "consulting", label: "Consulting" },
  { value: "startup", label: "Startup" },
  { value: "industry", label: "Industry" },
];

const ALL_SECTORS = [
  "all",
  "IT",
  "BFSI",
  "CPG",
  "Manufacturing",
  "Pharma",
  "Insurance",
  "E-commerce",
  "EdTech",
  "Gaming",
  "Mobility",
  "Social Media",
  "Retail",
  "Marketplace",
  "EV/Auto",
  "Auto",
];

export default function Companies() {
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState<Company["companyType"] | "all">(
    "all",
  );
  const [activeSector, setActiveSector] = useState("all");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return companies.filter((c) => {
      const matchesType = activeType === "all" || c.companyType === activeType;
      const matchesSector =
        activeSector === "all" || c.industrySector === activeSector;
      const matchesQuery =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.rolesHiring.some((r) => r.toLowerCase().includes(q)) ||
        c.industrySector.toLowerCase().includes(q);
      return matchesType && matchesSector && matchesQuery;
    });
  }, [query, activeType, activeSector]);

  const hasActiveFilters =
    activeType !== "all" || activeSector !== "all" || query !== "";

  function clearFilters() {
    setQuery("");
    setActiveType("all");
    setActiveSector("all");
  }

  const countLabel = (() => {
    if (activeSector !== "all" && activeType === "all" && !query) {
      return `${filtered.length} ${activeSector} companies`;
    }
    if (activeType !== "all" && activeSector === "all" && !query) {
      return `${filtered.length} ${COMPANY_TYPES.find((t) => t.value === activeType)?.label ?? ""} companies`;
    }
    return `${filtered.length} ${filtered.length === 1 ? "company" : "companies"}`;
  })();

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-card border-b border-border py-10 md:py-12">
        <div className="container max-w-7xl mx-auto px-4">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
            Top Companies Hiring Freshers
          </h1>
          <p className="text-muted-foreground">
            {companies.length}+ companies across IT, BFSI, CPG, Manufacturing,
            Pharma, Insurance & more — actively recruiting engineering
            graduates. Click any company to visit their careers page directly.
          </p>
        </div>
      </section>

      <section className="bg-background py-8">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Search + Filters */}
          <div className="space-y-4 mb-6">
            {/* Search row */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search companies, sectors or roles..."
                className="pl-9 h-10"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                data-ocid="companies.search_input"
              />
            </div>

            {/* Company type tabs */}
            <div
              className="flex flex-wrap gap-2"
              data-ocid="companies.type_filter"
              aria-label="Filter by company type"
            >
              {COMPANY_TYPES.map((t) => (
                <button
                  type="button"
                  key={t.value}
                  onClick={() => setActiveType(t.value)}
                  data-ocid={`companies.type.${t.value}.tab`}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-fast border ${
                    activeType === t.value
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-card text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Sector filter pills — scrollable row */}
            <div
              className="flex flex-wrap gap-2"
              data-ocid="companies.sector_filter"
              aria-label="Filter by industry sector"
            >
              {ALL_SECTORS.map((s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => setActiveSector(s)}
                  data-ocid={`companies.sector.${s.toLowerCase().replace(/\//g, "_")}.tab`}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-fast border ${
                    activeSector === s
                      ? "bg-secondary text-secondary-foreground border-secondary shadow-sm"
                      : "bg-muted/40 text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
                  }`}
                >
                  {s === "all" ? "All Sectors" : s}
                </button>
              ))}
            </div>
          </div>

          {/* Results count + clear */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {countLabel}
              </span>
            </p>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                data-ocid="companies.clear_filters_button"
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-fast"
              >
                <X className="w-3.5 h-3.5" />
                Clear filters
              </button>
            )}
          </div>

          {/* Active filter badges */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2 mb-4">
              {activeType !== "all" && (
                <Badge
                  variant="secondary"
                  className="gap-1.5 pl-2 pr-1 py-1 text-xs"
                >
                  {COMPANY_TYPES.find((t) => t.value === activeType)?.label}
                  <button
                    type="button"
                    onClick={() => setActiveType("all")}
                    className="ml-0.5 hover:text-foreground transition-fast"
                    aria-label="Remove type filter"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
              {activeSector !== "all" && (
                <Badge
                  variant="secondary"
                  className="gap-1.5 pl-2 pr-1 py-1 text-xs"
                >
                  {activeSector}
                  <button
                    type="button"
                    onClick={() => setActiveSector("all")}
                    className="ml-0.5 hover:text-foreground transition-fast"
                    aria-label="Remove sector filter"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
              {query && (
                <Badge
                  variant="secondary"
                  className="gap-1.5 pl-2 pr-1 py-1 text-xs"
                >
                  "{query}"
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="ml-0.5 hover:text-foreground transition-fast"
                    aria-label="Clear search"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
            </div>
          )}

          {/* Companies Grid */}
          {filtered.length === 0 ? (
            <div
              className="text-center py-16"
              data-ocid="companies.empty_state"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <Building2 className="w-7 h-7 text-muted-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                No companies found
              </h3>
              <p className="text-muted-foreground mb-4">
                Try a different search term or filter combination
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="text-sm text-primary hover:underline"
                data-ocid="companies.empty_state.clear_button"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div
              className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              data-ocid="companies.list"
            >
              {filtered.map((company, i) => (
                <CompanyCard key={company.id} company={company} index={i + 1} />
              ))}
            </div>
          )}

          {/* Sector overview cards */}
          <div className="mt-12 mb-8">
            <h2 className="font-display font-bold text-xl text-foreground mb-4">
              Browse by Sector
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {[
                { sector: "IT", emoji: "💻", desc: "Tech companies" },
                { sector: "BFSI", emoji: "🏦", desc: "Banking & fintech" },
                { sector: "CPG", emoji: "🛒", desc: "Consumer goods" },
                { sector: "Manufacturing", emoji: "🏭", desc: "Industrial" },
                { sector: "Pharma", emoji: "💊", desc: "Healthcare & pharma" },
                {
                  sector: "Insurance",
                  emoji: "🛡️",
                  desc: "Life & general insurance",
                },
                {
                  sector: "E-commerce",
                  emoji: "📦",
                  desc: "Online retail & commerce",
                },
                { sector: "EdTech", emoji: "🎓", desc: "Education technology" },
                { sector: "EV/Auto", emoji: "⚡", desc: "Electric vehicles" },
                {
                  sector: "Gaming",
                  emoji: "🎮",
                  desc: "Gaming & entertainment",
                },
              ].map(({ sector, emoji, desc }) => {
                const count = companies.filter(
                  (c) => c.industrySector === sector,
                ).length;
                return (
                  <button
                    type="button"
                    key={sector}
                    onClick={() => {
                      setActiveSector(sector);
                      setActiveType("all");
                      setQuery("");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    data-ocid={`companies.sector_card.${sector.toLowerCase().replace(/\//g, "_")}.button`}
                    className="text-left p-4 rounded-xl border border-border bg-card hover:bg-muted/40 hover:border-foreground/20 transition-smooth"
                  >
                    <div className="text-2xl mb-2">{emoji}</div>
                    <div className="font-display font-semibold text-foreground text-sm">
                      {sector}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {desc}
                    </div>
                    <div className="text-xs font-medium text-primary mt-2">
                      {count} companies
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Job Portal Banner */}
          <div className="mt-4 bg-muted/30 rounded-2xl border border-border p-6 md:p-8 text-center">
            <h2 className="font-display font-bold text-xl text-foreground mb-2">
              Looking for more opportunities?
            </h2>
            <p className="text-muted-foreground text-sm mb-5">
              Browse pre-filled job search links on top portals for every IT
              category. Visit a role's detail page to get direct search links.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                {
                  name: "LinkedIn Jobs",
                  url: "https://www.linkedin.com/jobs/search/?keywords=IT+fresher&location=India",
                  emoji: "💼",
                },
                {
                  name: "Naukri.com",
                  url: "https://www.naukri.com/fresher-jobs-in-india",
                  emoji: "🔍",
                },
                {
                  name: "Indeed India",
                  url: "https://in.indeed.com/jobs?q=IT+fresher&l=India",
                  emoji: "🌐",
                },
                {
                  name: "Internshala",
                  url: "https://internshala.com/jobs/it-jobs",
                  emoji: "🎓",
                },
              ].map((portal) => (
                <a
                  key={portal.name}
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={`companies.portal.${portal.name.toLowerCase().replace(/\s+/g, "_")}.link`}
                  className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted hover:border-foreground/30 transition-fast"
                >
                  <span>{portal.emoji}</span>
                  {portal.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
