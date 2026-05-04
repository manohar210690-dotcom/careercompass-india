import { CategoryBadge } from "@/components/CategoryBadge";
import { FreeCertificationSection } from "@/components/FreeCertificationSection";
import { FreeCourseSection } from "@/components/FreeCourseSection";
import { InterviewPrepSection } from "@/components/InterviewPrepSection";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { jobPortals, portalInfo, roleJobPortals } from "@/data/jobPortals";
import { allRoleExtras } from "@/data/roleExtrasIndex";
import { roles } from "@/data/roles";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  Award,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  ExternalLink,
  IndianRupee,
  MessageSquare,
  Tag,
  TrendingUp,
  Wrench,
  Youtube,
} from "lucide-react";
import { useState } from "react";

type TabId = "overview" | "courses" | "certifications" | "interview";

const TABS: { id: TabId; label: string; icon: React.ReactNode }[] = [
  {
    id: "overview",
    label: "Overview",
    icon: <Briefcase className="w-4 h-4" />,
  },
  {
    id: "courses",
    label: "Free Courses",
    icon: <BookOpen className="w-4 h-4" />,
  },
  {
    id: "certifications",
    label: "Free Certifications",
    icon: <Award className="w-4 h-4" />,
  },
  {
    id: "interview",
    label: "Interview Prep",
    icon: <MessageSquare className="w-4 h-4" />,
  },
];

const levelColors: Record<string, string> = {
  Fresher: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
  Junior: "bg-blue-500/10 text-blue-700 border-blue-500/20",
  "Mid-Level": "bg-violet-500/10 text-violet-700 border-violet-500/20",
  Senior: "bg-amber-500/10 text-amber-700 border-amber-500/20",
  Lead: "bg-orange-500/10 text-orange-700 border-orange-500/20",
  "Architect/Expert": "bg-rose-500/10 text-rose-700 border-rose-500/20",
};

export default function RoleDetail() {
  const { roleId } = useParams({ from: "/roles/$roleId" });
  const role = roles.find((r) => r.id === roleId);
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  if (!role) {
    return (
      <Layout>
        <div
          className="container max-w-4xl mx-auto px-4 py-24 text-center"
          data-ocid="role_detail.not_found"
        >
          <div className="text-5xl mb-4">😕</div>
          <h1 className="font-display font-bold text-2xl text-foreground mb-2">
            Role not found
          </h1>
          <p className="text-muted-foreground mb-6">
            This role does not exist in our directory.
          </p>
          <Link
            to="/roles"
            search={{ category: undefined }}
            data-ocid="role_detail.back.button"
          >
            <Button>Browse All Roles</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const portals =
    roleJobPortals[role.id] ??
    (() => {
      const roleKeyword = encodeURIComponent(role.name);
      return {
        linkedin: `https://www.linkedin.com/jobs/search/?keywords=${roleKeyword}&location=India`,
        naukri: `https://www.naukri.com/${role.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-jobs`,
        indeed: `https://in.indeed.com/jobs?q=${roleKeyword}&l=India`,
        internshala: jobPortals[role.category].internshala,
      };
    })();

  const extras = allRoleExtras[role.id];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-card border-b border-border py-8 md:py-10">
        <div className="container max-w-4xl mx-auto px-4">
          <Link
            to="/roles"
            search={{ category: undefined }}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-fast mb-4"
            data-ocid="role_detail.back.link"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Browse
          </Link>
          <div className="flex items-start gap-4 flex-wrap">
            <div className="flex-1 min-w-0">
              <div className="mb-3">
                <CategoryBadge categoryId={role.category} size="md" />
              </div>
              <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight">
                {role.name}
              </h1>
              {role.careerLevels && role.careerLevels.length > 0 && (
                <div className="mt-3 flex items-center gap-2 flex-wrap">
                  <IndianRupee className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Salary range:{" "}
                    <span className="font-semibold text-foreground">
                      ₹{role.careerLevels[0].minSalaryLPA}–
                      {
                        role.careerLevels[role.careerLevels.length - 1]
                          .maxSalaryLPA
                      }{" "}
                      LPA
                    </span>{" "}
                    (Fresher to Expert, India 2025–26)
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tab navigation */}
      <section className="bg-card border-b border-border sticky top-0 z-10 shadow-sm">
        <div className="container max-w-4xl mx-auto px-4">
          <div
            className="flex gap-0 overflow-x-auto scrollbar-none"
            data-ocid="role_detail.tabs"
          >
            {TABS.map((tab) => (
              <button
                type="button"
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                data-ocid={`role_detail.tab.${tab.id}`}
                className={`flex items-center gap-1.5 px-4 py-3.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors flex-shrink-0 ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-10">
        <div className="container max-w-4xl mx-auto px-4">
          {/* ── FREE COURSES TAB ── */}
          {activeTab === "courses" && (
            <FreeCourseSection courses={extras?.freeCourses} />
          )}

          {/* ── FREE CERTIFICATIONS TAB ── */}
          {activeTab === "certifications" && (
            <FreeCertificationSection
              certifications={role.freeCertifications}
            />
          )}

          {/* ── INTERVIEW PREP TAB ── */}
          {activeTab === "interview" && (
            <InterviewPrepSection prep={extras?.interviewPrep} />
          )}

          {/* ── OVERVIEW TAB ── */}
          {activeTab === "overview" && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main content */}
              <div className="lg:col-span-2 space-y-8">
                {/* About */}
                <div className="bg-card rounded-xl border border-border p-6 shadow-card">
                  <h2 className="font-display font-semibold text-foreground text-lg mb-3 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    About This Role
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {role.description}
                  </p>
                </div>

                {/* Career Levels & Salary */}
                {role.careerLevels && role.careerLevels.length > 0 && (
                  <div
                    className="bg-card rounded-xl border border-border p-6 shadow-card"
                    data-ocid="role_detail.salary.section"
                  >
                    <h2 className="font-display font-semibold text-foreground text-lg mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      Career Levels & Salary in India (2025–26)
                    </h2>
                    <p className="text-sm text-muted-foreground mb-5">
                      Indicative salary ranges in Lakhs Per Annum (LPA) for
                      Indian IT market. Actual salaries vary by city, company,
                      and skills.
                    </p>
                    <div className="space-y-3">
                      {role.careerLevels.map((cl, i) => (
                        <div
                          key={cl.level}
                          className="border border-border rounded-lg p-4 hover:border-primary/30 transition-colors"
                          data-ocid={`role_detail.salary.item.${i + 1}`}
                        >
                          <div className="flex items-start justify-between gap-3 flex-wrap">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span
                                className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full border ${levelColors[cl.level] ?? "bg-muted text-muted-foreground border-border"}`}
                              >
                                {cl.level}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {cl.avgYearsExperience}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 text-foreground font-bold text-base">
                              <IndianRupee className="w-3.5 h-3.5 text-primary" />
                              <span className="text-primary">
                                {cl.minSalaryLPA}–{cl.maxSalaryLPA}
                              </span>
                              <span className="text-xs font-normal text-muted-foreground ml-1">
                                LPA
                              </span>
                            </div>
                          </div>
                          <div className="mt-2">
                            <div className="text-xs text-muted-foreground">
                              Typical titles:{" "}
                              <span className="text-foreground">
                                {cl.typicalTitles.join(", ")}
                              </span>
                            </div>
                          </div>
                          <div className="mt-2.5 h-1.5 rounded-full bg-muted overflow-hidden">
                            <div
                              className="h-full rounded-full bg-primary/60 transition-all"
                              style={{
                                width: `${Math.min(100, (cl.maxSalaryLPA / 120) * 100)}%`,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Required Skills */}
                <div className="bg-card rounded-xl border border-border p-6 shadow-card">
                  <h2 className="font-display font-semibold text-foreground text-lg mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Required Skills
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {role.requiredSkills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-sm py-1 px-3"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Tools & Technologies */}
                {role.toolsAndTechnologies &&
                  role.toolsAndTechnologies.length > 0 && (
                    <div
                      className="bg-card rounded-xl border border-border p-6 shadow-card"
                      data-ocid="role_detail.tools.section"
                    >
                      <h2 className="font-display font-semibold text-foreground text-lg mb-4 flex items-center gap-2">
                        <Wrench className="w-4 h-4 text-primary" />
                        Tools & Technologies
                      </h2>
                      <p className="text-sm text-muted-foreground mb-4">
                        Key tools, languages, and platforms you'll work with in
                        this role:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {role.toolsAndTechnologies.map((tool) => (
                          <span
                            key={tool}
                            className="inline-flex items-center bg-primary/8 text-primary border border-primary/20 text-sm font-medium px-3 py-1.5 rounded-full transition-colors hover:bg-primary/15"
                            data-ocid="role_detail.tool.badge"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                {/* Resume Keywords / Key Skills */}
                {role.resumeKeywords && role.resumeKeywords.length > 0 && (
                  <div
                    className="bg-amber-50 rounded-xl border border-amber-200 p-6 shadow-card"
                    data-ocid="role_detail.resume_keywords.section"
                  >
                    <h2 className="font-display font-semibold text-amber-900 text-lg mb-2 flex items-center gap-2">
                      <Tag className="w-4 h-4 text-amber-600" />
                      Resume Keywords / Key Skills
                    </h2>
                    <p className="text-sm text-amber-700 mb-4">
                      Include these keywords in your resume to get shortlisted
                      by ATS and recruiters for {role.name} roles:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {role.resumeKeywords.map((kw) => (
                        <span
                          key={kw}
                          className="inline-flex items-center bg-amber-100 text-amber-800 border border-amber-300 text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-amber-200 transition-colors cursor-default"
                          data-ocid="role_detail.resume_keyword.badge"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Work Style Match */}
                <div className="bg-card rounded-xl border border-border p-6 shadow-card">
                  <h2 className="font-display font-semibold text-foreground text-lg mb-4">
                    🎯 Work-Style Match
                  </h2>
                  <p className="text-sm text-muted-foreground mb-3">
                    This role is a great fit if you are:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {role.matchReasons.map((reason) => (
                      <span
                        key={reason}
                        className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-sm font-medium px-3 py-1.5 rounded-full"
                      >
                        ✓ {reason.replace(/-/g, " ")}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Companies by Type (legacy field) */}
                {role.companiesByType && (
                  <div
                    className="bg-card rounded-xl border border-border p-6 shadow-card"
                    data-ocid="role_detail.companies_by_type.section"
                  >
                    <h2 className="font-display font-semibold text-foreground text-lg mb-2 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-primary" />
                      Companies Hiring Across Sectors
                    </h2>
                    <p className="text-sm text-muted-foreground mb-5">
                      Top companies hiring for {role.name} roles across
                      different company types in India:
                    </p>
                    <div className="space-y-4">
                      {(
                        [
                          {
                            key: "product" as const,
                            label: "🚀 Product Companies",
                            color:
                              "bg-blue-500/8 text-blue-700 border-blue-500/20",
                          },
                          {
                            key: "service" as const,
                            label: "🏭 IT Service Companies",
                            color:
                              "bg-violet-500/8 text-violet-700 border-violet-500/20",
                          },
                          {
                            key: "consulting" as const,
                            label: "💼 Consulting Firms",
                            color:
                              "bg-amber-500/8 text-amber-700 border-amber-500/20",
                          },
                          {
                            key: "startup" as const,
                            label: "⚡ Startups",
                            color:
                              "bg-rose-500/8 text-rose-700 border-rose-500/20",
                          },
                          {
                            key: "industry" as const,
                            label: "🏦 Industry/Domain Companies",
                            color:
                              "bg-teal-500/8 text-teal-700 border-teal-500/20",
                          },
                        ] as {
                          key: keyof typeof role.companiesByType;
                          label: string;
                          color: string;
                        }[]
                      ).map(({ key, label, color }) => (
                        <div
                          key={key}
                          data-ocid={`role_detail.companies.${key}`}
                        >
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                            {label}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {role.companiesByType![key].map((company) => (
                              <span
                                key={company}
                                className={`inline-flex items-center border text-xs font-medium px-3 py-1.5 rounded-full ${color}`}
                              >
                                {company}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Job Portals */}
                <div className="bg-card rounded-xl border border-border p-6 shadow-card">
                  <h2 className="font-display font-semibold text-foreground text-lg mb-4">
                    🔗 Apply on Job Portals
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Search for fresher {role.name} positions on these platforms:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {portalInfo.map((portal) => (
                      <a
                        key={portal.key}
                        href={portals[portal.key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-ocid={`role_detail.portal.${portal.key}.link`}
                        className="flex items-center justify-between gap-3 bg-muted/40 hover:bg-muted rounded-lg px-4 py-3 transition-fast group"
                      >
                        <div className="flex items-center gap-2">
                          <span>{portal.icon}</span>
                          <span className="text-sm font-medium text-foreground">
                            {portal.name}
                          </span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-fast" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Companies Hiring (new structured field) */}
                {role.companiesHiring && (
                  <div
                    className="bg-card rounded-xl border border-border p-6 shadow-card"
                    data-ocid="role_detail.companies_hiring.section"
                  >
                    <h2 className="font-display font-semibold text-foreground text-lg mb-2 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-primary" />
                      Companies Hiring for This Role
                    </h2>
                    <p className="text-sm text-muted-foreground mb-5">
                      Companies across different sectors that actively hire for{" "}
                      {role.name} roles in India:
                    </p>
                    <div className="space-y-4">
                      {(
                        [
                          {
                            key: "productCompanies" as const,
                            label: "🚀 Product Companies",
                            color:
                              "bg-blue-500/8 text-blue-700 border-blue-500/20 hover:bg-blue-500/15",
                            ocid: "product",
                          },
                          {
                            key: "serviceCompanies" as const,
                            label: "🏭 Service Companies",
                            color:
                              "bg-emerald-500/8 text-emerald-700 border-emerald-500/20 hover:bg-emerald-500/15",
                            ocid: "service",
                          },
                          {
                            key: "consultingFirms" as const,
                            label: "💼 Consulting Firms",
                            color:
                              "bg-violet-500/8 text-violet-700 border-violet-500/20 hover:bg-violet-500/15",
                            ocid: "consulting",
                          },
                          {
                            key: "startups" as const,
                            label: "⚡ Startups",
                            color:
                              "bg-orange-500/8 text-orange-700 border-orange-500/20 hover:bg-orange-500/15",
                            ocid: "startup",
                          },
                          {
                            key: "industryCompanies" as const,
                            label: "🏦 Industry / Domain",
                            color:
                              "bg-teal-500/8 text-teal-700 border-teal-500/20 hover:bg-teal-500/15",
                            ocid: "industry",
                          },
                        ] as {
                          key: keyof NonNullable<typeof role.companiesHiring>;
                          label: string;
                          color: string;
                          ocid: string;
                        }[]
                      )
                        .filter((s) => role.companiesHiring![s.key].length > 0)
                        .map(({ key, label, color, ocid }) => (
                          <div
                            key={key}
                            data-ocid={`role_detail.companies_hiring.${ocid}`}
                          >
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                              {label}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {role.companiesHiring![key].map((company) => (
                                <span
                                  key={company}
                                  className={`inline-flex items-center border text-xs font-medium px-3 py-1.5 rounded-full transition-colors cursor-default ${color}`}
                                >
                                  {company}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* YouTube Learning Resources */}
                {role.youtubeChannels && role.youtubeChannels.length > 0 && (
                  <div
                    className="bg-card rounded-xl border border-border p-6 shadow-card"
                    data-ocid="role_detail.youtube.section"
                  >
                    <h2 className="font-display font-semibold text-foreground text-lg mb-4 flex items-center gap-2">
                      <Youtube className="w-4 h-4 text-red-500" />
                      YouTube Learning Resources
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      Start learning for free with these beginner-friendly
                      YouTube channels:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {role.youtubeChannels.map((ch, i) => (
                        <a
                          key={ch.channelName}
                          href={ch.channelUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-ocid={`role_detail.youtube.link.${i + 1}`}
                          className="flex items-center justify-between gap-3 bg-red-500/5 hover:bg-red-500/10 border border-red-500/15 rounded-lg px-4 py-3 transition-fast group"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <Youtube className="w-4 h-4 text-red-500 flex-shrink-0" />
                            <span className="text-sm font-medium text-foreground truncate">
                              {ch.channelName}
                            </span>
                          </div>
                          <span className="text-xs text-red-500 font-semibold whitespace-nowrap flex-shrink-0">
                            Watch →
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-5">
                {/* Top Companies */}
                <div className="bg-card rounded-xl border border-border p-5 shadow-card">
                  <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                    🏢 Top Companies Hiring
                  </h3>
                  <ul className="space-y-2">
                    {role.topCompanies.map((company) => (
                      <li
                        key={company}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {company}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Salary Quick Summary */}
                {role.careerLevels && role.careerLevels.length > 0 && (
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                    <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                      <IndianRupee className="w-4 h-4 text-primary" />
                      Salary Overview (INR)
                    </h3>
                    <ul className="space-y-2">
                      {role.careerLevels.map((cl) => (
                        <li
                          key={cl.level}
                          className="flex items-center justify-between gap-2 text-xs"
                        >
                          <span className="text-muted-foreground truncate">
                            {cl.level}
                          </span>
                          <span className="font-semibold text-foreground whitespace-nowrap">
                            ₹{cl.minSalaryLPA}–{cl.maxSalaryLPA}L
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                      LPA = Lakhs Per Annum. India 2025–26 estimates.
                    </p>
                  </div>
                )}

                {/* Interests */}
                <div className="bg-card rounded-xl border border-border p-5 shadow-card">
                  <h3 className="font-display font-semibold text-foreground mb-3">
                    💡 You Might Like This If You're Into
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {role.interests.map((interest) => (
                      <Badge
                        key={interest}
                        variant="outline"
                        className="text-xs"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Quick nav to other tabs */}
                <div className="bg-card rounded-xl border border-border p-5 shadow-card">
                  <h3 className="font-display font-semibold text-foreground mb-3 text-sm">
                    📋 Also Available
                  </h3>
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => setActiveTab("courses")}
                      data-ocid="role_detail.shortcut.courses"
                      className="w-full text-left flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground py-1.5 transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5 flex-shrink-0" />
                      Free Courses (incl. Hindi & Telugu)
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("certifications")}
                      data-ocid="role_detail.shortcut.certifications"
                      className="w-full text-left flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground py-1.5 transition-colors"
                    >
                      <Award className="w-3.5 h-3.5 flex-shrink-0" />
                      Free Certifications
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("interview")}
                      data-ocid="role_detail.shortcut.interview"
                      className="w-full text-left flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground py-1.5 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 flex-shrink-0" />
                      Interview Questions & Talking Points
                    </button>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                  <p className="text-sm text-foreground font-medium mb-2">
                    Not sure if this is right for you?
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    Take our quick work-style quiz to find roles that match your
                    personality.
                  </p>
                  <Link to="/quiz">
                    <Button
                      size="sm"
                      className="w-full"
                      data-ocid="role_detail.quiz_cta.button"
                    >
                      Take the Career Quiz
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
