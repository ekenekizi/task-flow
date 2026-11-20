"use client";

import Logo from "../ui/sidebar/Logo";
import {
  Calendar,
  ChevronRight,
  Inbox,
  LayoutList,
  Plus,
  Star,
} from "lucide-react";
import NavItem from "../ui/sidebar/NavItem";
import { useState } from "react";
import ListItem from "../ui/sidebar/ListItem";
import { NavItemTypes } from "@/types/navigations";
import { ColorOptionType, ListItemType } from "@/types/myList";
import { usePathname } from "next/navigation";
import ListForm from "../ui/sidebar/ListForm";
export default function SideBar() {
  const [isListOpen, setIsListOpen] = useState(false);
  const [showListMenu, setShowListMenu] = useState(false);

  function toggleListMenu() {
    setShowListMenu(!showListMenu);
  }
  const pathname = usePathname();

  const colors: ColorOptionType[] = [
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

  const listItem: ListItemType[] = [
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

  const navItems: NavItemTypes[] = [
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
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavItem
                label={item.label}
                href={item.href}
                count={item.count}
                icon={item.icon}
                iconColor={item.iconColor}
                isActive={pathname === item.href}
              />
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-4 py-2 space-y-1 ">
        <button
          className="text-gray-500 flex items-center gap-1 hover:text-gray-400 transition-all duration-200 "
          onClick={() => setIsListOpen(!isListOpen)}
        >
          <span
            className={`duration-200 transition-all ${isListOpen ? "rotate-90" : ""}`}
          >
            <ChevronRight size={20} />
          </span>
          <h2>MY LIST</h2>
        </button>

        <nav>
          <ul className="flex flex-col gap-2">
            {listItem.map((item) => (
              <ListItem
                key={item.label}
                label={item.label}
                colorTag={item.colorTag}
                href={item.href}
                count={item.count}
                isActive={pathname === item.href}
              />
            ))}
          </ul>
        </nav>

        {showListMenu || (
          <button
            className="text-gray-500 flex items-center gap-1 py-2 px-1 rounded-md hover:bg-active/40 transition-all duration-200 w-full hover:text-gray-300"
            onClick={toggleListMenu}
          >
            <Plus />
            <p>New list</p>
          </button>
        )}
        {showListMenu && (
          <ListForm toggleListMenu={toggleListMenu} colors={colors} />
        )}
      </div>
    </aside>
  );
}
