"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUpDown, ChevronDown } from "lucide-react";

const sortOptions = ["Date Created", "Due Date", "Priority", "Title"];

export default function SortDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Priority");
  const containerRef = useRef<HTMLDivElement>(null);

  // Close the menu when the user clicks anywhere outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative flex shrink-0">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 whitespace-nowrap rounded-2xl border border-slate-200 bg-gray-100 px-4 text-sm text-gray-600"
      >
        <ArrowUpDown size={15} />
        <span>{selectedSort}</span>
        <ChevronDown
          size={14}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-20 mt-2 w-max min-w-full overflow-hidden rounded-xl bg-white py-2 shadow-lg">
          {sortOptions.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSelectedSort(option);
                setIsOpen(false);
              }}
              className={`block w-full whitespace-nowrap px-4 py-2 text-left text-sm ${
                selectedSort === option
                  ? "bg-violet-50 text-violet-600"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
