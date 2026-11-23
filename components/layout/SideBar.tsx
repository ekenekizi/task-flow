"use client";

import Logo from "../ui/sidebar/Logo";
import { ChevronRight, Plus } from "lucide-react";
import { colors, navItems, listItems } from "@/config/navigation";
import NavItem from "../ui/sidebar/NavItem";
import { useState } from "react";

import { usePathname } from "next/navigation";
import ListForm from "../ui/sidebar/ListForm";
import ListItem from "../ui/sidebar/ListItem";
export default function SideBar() {
  const [isListOpen, setIsListOpen] = useState(false);
  const [showListMenu, setShowListMenu] = useState(false);

  function toggleListMenu() {
    setShowListMenu(!showListMenu);
  }
  const pathname = usePathname();

  return (
    <aside className="border col-start-1 col-end-2  row-start-1 row-end-3 bg-[#1a1a2e] sticky top-0 h-dvh self-start overflow-y-auto ">
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

        {isListOpen && (
          <nav>
            <ul className="flex flex-col gap-2">
              {listItems.map((item) => (
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
        )}

        {showListMenu || (
          <button
            className="text-gray-500 flex items-center gap-1 py-2 px-1 rounded-md hover:bg-active/40 transition-all duration-200 w-full hover:text-gray-300"
            onClick={toggleListMenu}
          >
            <Plus size={20} />
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
