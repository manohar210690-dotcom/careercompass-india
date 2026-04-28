import { Badge } from "@/components/ui/badge";
import { categoryMap } from "@/data/categories";
import type { Role } from "@/data/roles";
import { Link } from "@tanstack/react-router";

interface RoleCardProps {
  role: Role;
  index?: number;
}

export function RoleCard({ role, index }: RoleCardProps) {
  const category = categoryMap[role.category];

  return (
    <Link
      to="/roles/$roleId"
      params={{ roleId: role.id }}
      data-ocid={`roles.item.${index ?? 1}`}
      className="group block"
    >
      <div className="h-full rounded-xl border border-border bg-card shadow-card hover:shadow-card-hover transition-smooth hover:-translate-y-0.5 p-5 flex flex-col gap-3">
        {/* Category badge */}
        <div className="flex items-center justify-between gap-2">
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${category.colorClass}`}
          >
            <span>{category.icon}</span>
            {category.shortName}
          </span>
        </div>

        {/* Role name */}
        <h3 className="font-display font-semibold text-foreground text-base leading-snug group-hover:text-primary transition-fast line-clamp-2">
          {role.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed flex-1">
          {role.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {role.requiredSkills.slice(0, 3).map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="text-xs font-normal"
            >
              {skill}
            </Badge>
          ))}
          {role.requiredSkills.length > 3 && (
            <Badge
              variant="outline"
              className="text-xs font-normal text-muted-foreground"
            >
              +{role.requiredSkills.length - 3} more
            </Badge>
          )}
        </div>
      </div>
    </Link>
  );
}
