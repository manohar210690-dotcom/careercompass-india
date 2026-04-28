import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/categories";
import { roles } from "@/data/roles";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Building2,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const stats = [
  { label: "Job Roles", value: `${roles.length}+`, icon: Target },
  { label: "Categories", value: "10", icon: TrendingUp },
  { label: "Top Companies", value: "23+", icon: Building2 },
  { label: "Quiz Questions", value: "10", icon: Brain },
];

const features = [
  {
    icon: BookOpen,
    title: "Browse 100+ Roles",
    description:
      "Explore detailed profiles for 100+ IT, design, and marketing roles — from Full Stack Developer to SEO Executive and Brand Designer.",
  },
  {
    icon: Brain,
    title: "Work-Style Quiz",
    description:
      "10 simple questions about how you work and what excites you. Get matched to your ideal career paths — no technical knowledge required.",
  },
  {
    icon: Building2,
    title: "Top Companies",
    description:
      "Discover 23+ companies actively hiring freshers in India, with direct links to their career pages and application portals.",
  },
  {
    icon: Zap,
    title: "Job Portal Links",
    description:
      "Pre-filled search links to LinkedIn, Naukri, Indeed, and Internshala for every role category — start applying in one click.",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 gradient-hero pointer-events-none" />
        <div className="container max-w-7xl mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6 animate-fade-in">
              <Star className="w-3.5 h-3.5" />
              For Indian Engineering Graduates
            </div>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl text-foreground leading-tight mb-6 animate-fade-up">
              Find Your{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Perfect IT Career
              </span>{" "}
              Path
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Explore 100+ IT, design, and marketing roles tailored for Indian
              engineering graduates. Take our work-style quiz to discover which
              careers match your personality and interests.
            </p>
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Link to="/quiz">
                <Button
                  size="lg"
                  className="gap-2 text-base h-12 px-8"
                  data-ocid="hero.quiz_cta.button"
                >
                  <Brain className="w-4 h-4" />
                  Take the Career Quiz
                </Button>
              </Link>
              <Link to="/roles" search={{ category: undefined }}>
                {" "}
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 text-base h-12 px-8"
                  data-ocid="hero.browse_cta.button"
                >
                  Browse All Roles
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            {stats.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="text-center bg-card rounded-xl border border-border p-4 shadow-card"
              >
                <Icon className="w-5 h-5 text-primary mx-auto mb-1.5" />
                <div className="font-display font-bold text-2xl text-foreground">
                  {value}
                </div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-background py-0">
        <div className="container max-w-7xl mx-auto px-4 pb-0 -mt-4">
          <div className="rounded-2xl overflow-hidden border border-border shadow-card max-w-4xl mx-auto">
            <img
              src="/assets/generated/hero-careers.dim_1200x500.jpg"
              alt="Indian engineering graduates exploring IT career paths"
              className="w-full object-cover"
              style={{ maxHeight: "300px" }}
            />
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
              Explore by Category
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From software development to digital marketing — browse roles
              across 10 career domains
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {categories.map((cat) => {
              const count = roles.filter((r) => r.category === cat.id).length;
              return (
                <Link
                  key={cat.id}
                  to="/roles"
                  search={{ category: cat.id }}
                  data-ocid={`home.category.${cat.id}.link`}
                  className="group"
                >
                  <div
                    className={`rounded-xl border ${cat.borderClass} ${cat.bgClass} p-4 text-center hover:shadow-card-hover transition-smooth hover:-translate-y-0.5`}
                  >
                    <div className="text-2xl mb-2">{cat.icon}</div>
                    <div
                      className={`font-display font-semibold text-sm ${cat.textClass} mb-1`}
                    >
                      {cat.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {count} roles
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-background py-16 md:py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
              Everything You Need
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Tools and guidance designed specifically for engineering graduates
              starting their IT journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-card rounded-xl border border-border p-6 shadow-card hover:shadow-card-hover transition-smooth"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-muted/40 py-16">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-card">
            <Users className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3">
              Not sure where to start?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Answer 10 simple questions about how you work and what excites
              you. We'll match you to IT roles that suit your personality — no
              technical knowledge needed.
            </p>
            <Link to="/quiz">
              <Button
                size="lg"
                className="gap-2"
                data-ocid="home.bottom_quiz_cta.button"
              >
                Start the Free Quiz
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
