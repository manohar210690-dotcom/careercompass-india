import { Layout } from "@/components/Layout";
import { RoleCard } from "@/components/RoleCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories } from "@/data/categories";
import type { CategoryId } from "@/data/categories";
import { roles } from "@/data/roles";
import { useSearch } from "@tanstack/react-router";
import { Filter, Search, X } from "lucide-react";
import { useMemo, useState } from "react";

export default function BrowseRoles() {
  const search = useSearch({ from: "/roles" });
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryId | "all">(
    (search as { category?: CategoryId }).category ?? "all",
  );

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return roles.filter((role) => {
      const matchesCategory =
        activeCategory === "all" || role.category === activeCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        role.name.toLowerCase().includes(q) ||
        role.description.toLowerCase().includes(q) ||
        role.requiredSkills.some((s) => s.toLowerCase().includes(q)) ||
        role.interests.some((i) => i.toLowerCase().includes(q))
      );
    });
  }, [activeCategory, query]);

  const clearFilters = () => {
    setQuery("");
    setActiveCategory("all");
  };

  const hasFilters = query || activeCategory !== "all";

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-card border-b border-border py-10 md:py-12">
        <div className="container max-w-7xl mx-auto px-4">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
            Browse IT Roles
          </h1>
          <p className="text-muted-foreground">
            Explore {roles.length}+ roles across 10 categories. Find the career
            that fits you.
          </p>
        </div>
      </section>

      <section className="bg-background py-8">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Search + Filter bar */}
          <div className="flex flex-col gap-4 mb-6">
            <div className="relative max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search roles, skills, or interests..."
                className="pl-9 h-10"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                data-ocid="roles.search_input"
              />
              {query && (
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-fast"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2 items-center">
              <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                data-ocid="roles.filter.all.tab"
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-fast border ${
                  activeCategory === "all"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-foreground/30"
                }`}
              >
                All ({roles.length})
              </button>
              {categories.map((cat) => {
                const count = roles.filter((r) => r.category === cat.id).length;
                return (
                  <button
                    type="button"
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    data-ocid={`roles.filter.${cat.id}.tab`}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-fast border ${
                      activeCategory === cat.id
                        ? `${cat.colorClass} border-transparent`
                        : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-foreground/30"
                    }`}
                  >
                    <span>{cat.icon}</span>
                    {cat.shortName} ({count})
                  </button>
                );
              })}
            </div>

            {/* Results count + clear */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing{" "}
                <span className="font-semibold text-foreground">
                  {filtered.length}
                </span>{" "}
                roles
              </p>
              {hasFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="gap-1.5 text-xs"
                  data-ocid="roles.clear_filters.button"
                >
                  <X className="w-3 h-3" />
                  Clear filters
                </Button>
              )}
            </div>
          </div>

          {/* Roles Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-16" data-ocid="roles.empty_state">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                No roles found
              </h3>
              <p className="text-muted-foreground mb-4">
                Try different keywords or clear your filters
              </p>
              <Button
                variant="outline"
                onClick={clearFilters}
                data-ocid="roles.empty_state_clear.button"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((role, i) => (
                <RoleCard key={role.id} role={role} index={i + 1} />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
