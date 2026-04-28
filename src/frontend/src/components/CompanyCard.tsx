import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Company } from "@/data/companies";
import { ExternalLink } from "lucide-react";

interface CompanyCardProps {
  company: Company;
  index?: number;
}

export function CompanyCard({ company, index }: CompanyCardProps) {
  return (
    <div
      data-ocid={`companies.item.${index ?? 1}`}
      className="rounded-xl border border-border bg-card shadow-card hover:shadow-card-hover transition-smooth hover:-translate-y-0.5 p-5 flex flex-col gap-4"
    >
      {/* Logo + Name */}
      <div className="flex items-center gap-3">
        <div
          className={`w-12 h-12 rounded-xl ${company.colorClass} flex items-center justify-center flex-shrink-0`}
        >
          <span className="text-white font-display font-bold text-xs tracking-tight">
            {company.initials}
          </span>
        </div>
        <div className="min-w-0">
          <h3 className="font-display font-semibold text-foreground text-base truncate">
            {company.name}
          </h3>
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
