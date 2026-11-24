"use client";

import Logo from "../ui/sidebar/Logo";
import { ChevronRight, Plus, X } from "lucide-react";
import { colors, navItems, listItems } from "@/config/navigation";
import NavItem from "../ui/sidebar/NavItem";
import { useState } from "react";

import { usePathname } from "next/navigation";
import ListForm from "../ui/sidebar/ListForm";
import ListItem from "../ui/sidebar/ListItem";

interface SideBarProps {
  isMobileMenuOpen: boolean;
  onClose: () => void;
}
export default function SideBar({ isMobileMenuOpen, onClose }: SideBarProps) {
  const [isListOpen, setIsListOpen] = useState(false);
  const [showListMenu, setShowListMenu] = useState(false);

  function toggleListMenu() {
    setShowListMenu(!showListMenu);
  }
  const pathname = usePathname();

  return (
    <aside
      className={`
    fixed inset-y-0 left-0 z-50
    w-75 max-w-[85vw]
    overflow-y-auto border bg-[#1a1a2e]
    transition-transform duration-300 ease-in-out
    ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
    md:static md:col-start-1 md:row-start-1 md:row-end-3
    md:block md:h-dvh md:w-auto md:max-w-none
    md:translate-x-0
  `}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close navigation menu"
        className="absolute right-3 top-3 rounded-md p-2 text-gray-400 hover:bg-white/10 hover:text-white md:hidden"
      >
        <X size={20} />
      </button>
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
                onClick={onClose}
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
                  onClick={onClose}
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
