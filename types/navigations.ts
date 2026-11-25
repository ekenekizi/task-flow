import type { LucideIcon } from "lucide-react";
import type { BuiltInView } from "@/lib/task-views";

export interface NavItemTypes {
  label: string;
  href: string;
  view: BuiltInView;
  icon: LucideIcon;
  iconColor: "text-primary" | "text-important" | "text-all";
}
export interface NavItemProps extends Omit<NavItemTypes, "view"> {
  count: number;
  isActive: boolean;
  onClick: () => void;
}
