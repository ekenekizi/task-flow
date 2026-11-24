import type { LucideIcon } from "lucide-react";

export interface NavItemTypes {
  label: string;
  href: string;
  count: number;
  icon: LucideIcon;
  iconColor: "text-primary" | "text-important" | "text-all";
  onClick: () => void;
}
export interface NavItemProps extends NavItemTypes {
  isActive: boolean;
}
