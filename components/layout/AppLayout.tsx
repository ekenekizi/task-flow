"use client";

import { useState, useEffect, Suspense } from "react";
import { useTaskStore } from "@/stores/task-store";
import SideBar from "./SideBar";
import Header from "./Header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lists = useTaskStore((state) => state.lists);
  const tasks = useTaskStore((state) => state.tasks);
  const initializeTasks = useTaskStore((state) => state.initializeTasks);
  const addList = useTaskStore((state) => state.addList);
  const deleteEmptyList = useTaskStore((state) => state.deleteEmptyList);

  useEffect(() => {
    initializeTasks();
  }, [initializeTasks]);

  function canDeleteList(id: string) {
    return tasks !== null && !tasks.some((task) => task.listId === id);
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
      <Suspense fallback={null}>
        <SideBar
          isMobileMenuOpen={isMobileMenuOpen}
          onClose={closeMobileMenu}
          lists={lists}
          onAddList={addList}
          canDeleteList={canDeleteList}
          onDeleteList={deleteEmptyList}
        />
      </Suspense>

      <Header onMenuClick={openMobileMenu} lists={lists} />

      <main className="col-start-1 row-start-2 min-h-0 min-w-0 overflow-y-auto bg-gray-50 p-4 md:col-start-2 md:p-8">
        {children}
      </main>
    </div>
  );
}
