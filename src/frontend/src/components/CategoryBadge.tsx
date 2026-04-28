import type { CategoryId } from "@/data/categories";
import { categoryMap } from "@/data/categories";

interface CategoryBadgeProps {
  categoryId: CategoryId;
  size?: "sm" | "md" | "lg";
}

export function CategoryBadge({ categoryId, size = "md" }: CategoryBadgeProps) {
  const category = categoryMap[categoryId];

  const sizeClasses = {
    sm: "text-xs px-2 py-0.5 gap-1",
    md: "text-xs px-2.5 py-1 gap-1.5",
    lg: "text-sm px-3 py-1.5 gap-2",
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full ${category.colorClass} ${sizeClasses[size]}`}
    >
      <span>{category.icon}</span>
      {category.name}
    </span>
  );
}
