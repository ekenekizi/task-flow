import { Calendar, Inbox, LayoutList, Star } from "lucide-react";

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
    view: "inbox",
    icon: Inbox,
    iconColor: "text-primary",
  },
  {
    label: "Today",
    href: "/today",
    view: "today",
    icon: Calendar,
    iconColor: "text-primary",
  },
  {
    label: "Important",
    href: "/important",
    view: "important",
    icon: Star,
    iconColor: "text-important",
  },
  {
    label: "All Tasks",
    href: "/all",
    view: "all",
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
  },
  {
    id: "personal",
    label: "Personal",
    colorTag: colors[2].value,
    href: "/list/personal",
  },
  {
    id: "shopping",
    label: "Shopping",
    colorTag: colors[6].value,
    href: "/list/shopping",
  },
];
