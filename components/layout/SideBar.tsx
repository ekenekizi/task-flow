"use client";
import Logo from "../ui/Logo";
import {
  Calendar,
  Inbox,
  LayoutList,
  Star,
  type LucideIcon,
} from "lucide-react";
import NavItem from "../ui/NavItem";
export default function SideBar() {
  interface NavItem {
    label: string;
    href: string;
    count: number;
    icon: LucideIcon;
    iconColor: "text-primary" | "text-important" | "text-all";
  }

  const navItems: NavItem[] = [
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
  return (
    <aside className="border col-start-1 col-end-2 h-screen row-start-1 row-end-3 bg-[#1a1a2e] ">
      <Logo />

      <nav className="border-y border-[#373749] p-2">
        <ul className="space-y-3">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavItem
                label={item.label}
                href={item.href}
                count={item.count}
                icon={item.icon}
                iconColor={item.iconColor}
              />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
