import { CompanyCard } from "@/components/CompanyCard";
import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { companies } from "@/data/companies";
import { Search } from "lucide-react";
import { useState } from "react";

export default function Companies() {
  const [query, setQuery] = useState("");

  const filtered = companies.filter((c) => {
    const q = query.toLowerCase();
    if (!q) return true;
    return (
      c.name.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.rolesHiring.some((r) => r.toLowerCase().includes(q))
    );
  });

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-card border-b border-border py-10 md:py-12">
        <div className="container max-w-7xl mx-auto px-4">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
            Top Companies Hiring Freshers
          </h1>
          <p className="text-muted-foreground">
            {companies.length}+ companies actively recruiting engineering
            graduates across India. Click any company to visit their careers
            page directly.
          </p>
        </div>
      </section>

      <section className="bg-background py-8">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Search */}
          <div className="relative max-w-md mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search companies or domains..."
              className="pl-9 h-10"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              data-ocid="companies.search_input"
            />
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {filtered.length}
            </span>{" "}
            companies
          </p>

          {/* Companies Grid */}
          {filtered.length === 0 ? (
            <div
              className="text-center py-16"
              data-ocid="companies.empty_state"
            >
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                No companies found
              </h3>
              <p className="text-muted-foreground">
                Try a different search term
              </p>
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

          {/* Job Portal Banner */}
          <div className="mt-12 bg-muted/30 rounded-2xl border border-border p-6 md:p-8 text-center">
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
