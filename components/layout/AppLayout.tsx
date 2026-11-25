"use client";

import { useState } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import { listItems } from "@/config/navigation";
import type { ListItemType } from "@/types/myList";
import { tasks } from "@/data/task";

function canDeleteList(id: string) {
  return !tasks.some((task) => task.listId === id);
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [lists, setLists] = useState<ListItemType[]>(listItems);

  function handleAddList(label: string, colorTag: string) {
    const id = crypto.randomUUID();

    const newList: ListItemType = {
      id,
      label,
      colorTag,
      href: `/list/${id}`,
      count: 0,
    };

    setLists((currentList) => [...currentList, newList]);
  }

  function handleDeleteList(id: string) {
    if (!canDeleteList(id)) return;
    setLists((currentLists) => currentLists.filter((list) => list.id !== id));
  }

  function openMobileMenu() {
    setIsMobileMenuOpen(true);
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <div className="grid h-dvh grid-cols-1 grid-rows-[150px_minmax(0,1fr)] overflow-hidden md:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)]">
      {isMobileMenuOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMobileMenu}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}
      <SideBar
        isMobileMenuOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        lists={lists}
        onAddList={handleAddList}
        canDeleteList={canDeleteList}
        onDeleteList={handleDeleteList}
      />

      <Header onMenuClick={openMobileMenu} lists={lists} />

      <main className="col-start-1 row-start-2 min-h-0 min-w-0 overflow-y-auto bg-gray-50 p-4 md:col-start-2 md:p-8">
        {children}
      </main>
    </div>
  );
}
