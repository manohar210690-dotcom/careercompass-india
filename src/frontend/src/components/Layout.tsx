import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, Brain, Building2, Compass, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/roles", label: "Browse Roles", icon: BookOpen },
  { to: "/quiz", label: "Career Quiz", icon: Brain },
  { to: "/companies", label: "Companies", icon: Building2 },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Compass className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-foreground text-sm">
                CareerCompass
              </span>
              <span className="text-xs text-muted-foreground font-body">
                India
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => {
              const isActive = currentPath.startsWith(to);
              return (
                <Link
                  key={to}
                  to={to}
                  data-ocid={`nav.${label.toLowerCase().replace(/\s+/g, "_")}.link`}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-fast ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-2">
            <Link to="/quiz" className="hidden md:block">
              <Button size="sm" data-ocid="nav.quiz_cta.button">
                Find My Career Path
              </Button>
            </Link>
            <button
              type="button"
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-fast"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              data-ocid="nav.mobile_menu.toggle"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border py-3 space-y-1 animate-fade-in">
            {navLinks.map(({ to, label, icon: Icon }) => {
              const isActive = currentPath.startsWith(to);
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  data-ocid={`nav.mobile_${label.toLowerCase().replace(/\s+/g, "_")}.link`}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-fast ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              );
            })}
            <div className="pt-2 pb-1">
              <Link to="/quiz" onClick={() => setMobileOpen(false)}>
                <Button
                  size="sm"
                  className="w-full"
                  data-ocid="nav.mobile_quiz_cta.button"
                >
                  Find My Career Path
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
              <Compass className="w-3 h-3 text-primary-foreground" />
            </div>
            <span className="text-sm font-display font-semibold text-foreground">
              CareerCompass India
            </span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Helping Indian engineering graduates find their ideal IT career
            path.
          </p>
          <p className="text-xs text-muted-foreground">
            © {year}.{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-fast underline underline-offset-2"
            >
              Built with love using caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
