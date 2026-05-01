import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Company } from "@/data/companies";
import { ExternalLink } from "lucide-react";

interface CompanyCardProps {
  company: Company;
  index?: number;
}

const typeLabels: Record<Company["companyType"], string> = {
  product: "Product",
  service: "Service",
  consulting: "Consulting",
  startup: "Startup",
  industry: "Industry",
};

const typeColors: Record<Company["companyType"], string> = {
  product: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  service:
    "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
  consulting:
    "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  startup:
    "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  industry: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
};

export function CompanyCard({ company, index }: CompanyCardProps) {
  return (
    <div
      data-ocid={`companies.item.${index ?? 1}`}
      className="rounded-xl border border-border bg-card shadow-card hover:shadow-card-hover transition-smooth hover:-translate-y-0.5 p-5 flex flex-col gap-4"
    >
      {/* Logo + Name + Type */}
      <div className="flex items-start gap-3">
        <div
          className={`w-12 h-12 rounded-xl ${company.colorClass} flex items-center justify-center flex-shrink-0`}
        >
          <span className="text-white font-display font-bold text-xs tracking-tight">
            {company.initials}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-display font-semibold text-foreground text-base truncate">
            {company.name}
          </h3>
          <div className="flex items-center gap-1.5 mt-1 flex-wrap">
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${typeColors[company.companyType]}`}
            >
              {typeLabels[company.companyType]}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-muted text-muted-foreground border border-border">
              {company.industrySector}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
        {company.description}
      </p>

      {/* Roles hiring */}
      <div className="flex flex-wrap gap-1.5">
        {company.rolesHiring.slice(0, 3).map((role) => (
          <Badge key={role} variant="secondary" className="text-xs font-normal">
            {role}
          </Badge>
        ))}
        {company.rolesHiring.length > 3 && (
          <Badge
            variant="outline"
            className="text-xs font-normal text-muted-foreground"
          >
            +{company.rolesHiring.length - 3}
          </Badge>
        )}
      </div>

      {/* CTA */}
      <a
        href={company.careerUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid={`companies.item.${index ?? 1}.link`}
      >
        <Button variant="outline" size="sm" className="w-full gap-2">
          <ExternalLink className="w-3.5 h-3.5" />
          View Careers
        </Button>
      </a>
    </div>
  );
}
