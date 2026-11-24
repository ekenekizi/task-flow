"use client";

import { useState } from "react";
import SideBar from "./SideBar";
import Header from "./Header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <SideBar isMobileMenuOpen={isMobileMenuOpen} onClose={closeMobileMenu} />

      <Header onMenuClick={openMobileMenu} />

      <main className="col-start-1 row-start-2 min-h-0 min-w-0 overflow-y-auto bg-gray-50 p-4 md:col-start-2 md:p-8">
        {children}
      </main>
    </div>
  );
}
