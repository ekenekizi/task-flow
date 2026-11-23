import {
  Calendar,
  Inbox,
  LayoutList,
  Star,
  type LucideIcon,
} from "lucide-react";

import type { NavItemTypes } from "@/types/navigations";
import type { ColorOptionType, ListItemType } from "@/types/myList";

// Available colors for custom lists
export const colors: ColorOptionType[] = [
  { name: "Indigo", value: "#6366F1" },
  { name: "Purple", value: "#9333EA" },
  { name: "Pink", value: "#EC4899" },
  { name: "Red", value: "#EF4444" },
  { name: "Orange", value: "#F97316" },
  { name: "Yellow", value: "#EAB308" },
  { name: "Green", value: "#22C55E" },
  { name: "Teal", value: "#14B8A6" },
  { name: "Blue", value: "#3B82F6" },
  { name: "Cyan", value: "#06B6D4" },
];

// Main application navigation
export const navItems: NavItemTypes[] = [
  {
    label: "Inbox",
    href: "/",
    count: 0,
    icon: Inbox,
    iconColor: "text-primary",
  },
  {
    label: "Today",
    href: "/today",
    count: 3,
    icon: Calendar,
    iconColor: "text-primary",
  },
  {
    label: "Important",
    href: "/important",
    count: 4,
    icon: Star,
    iconColor: "text-important",
  },
  {
    label: "All Tasks",
    href: "/all",
    count: 8,
    icon: LayoutList,
    iconColor: "text-all",
  },
];

// Custom lists
export const listItems: ListItemType[] = [
  {
    id: "work",
    label: "Work",
    colorTag: colors[0].value,
    href: "/list/work",
    count: 4,
  },
  {
    id: "personal",
    label: "Personal",
    colorTag: colors[2].value,
    href: "/list/personal",
    count: 3,
  },
  {
    id: "shopping",
    label: "Shopping",
    colorTag: colors[6].value,
    href: "/list/shopping",
    count: 1,
  },
];
