"use client";

import { Circle, CircleCheck, SlidersHorizontal } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";

type TaskStatus = "Active" | "All" | "Done";

interface StatusItemProps {
  label: TaskStatus;
  icon: LucideIcon;
  isActive: boolean;
  onSelect: () => void;
}

const taskStatus: {
  label: TaskStatus;
  icon: LucideIcon;
}[] = [
  {
    label: "Active",
    icon: Circle,
  },
  {
    label: "All",
    icon: SlidersHorizontal,
  },
  {
    label: "Done",
    icon: CircleCheck,
  },
];

function StatusItem({
  icon: Icon,
  label,
  isActive,
  onSelect,
}: StatusItemProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm transition-all duration-200 ${
        isActive
          ? "bg-white text-[#263D63] shadow-sm"
          : "text-slate-400 hover:text-slate-600"
      }`}
    >
      <Icon size={17} strokeWidth={1.8} className="mt-0.5" />
      <span>{label}</span>
    </button>
  );
}

export default function TaskStatusFilter() {
  const [currentFilter, setCurrentFilter] = useState<TaskStatus>("Active");

  return (
    <div className="flex shrink-0 items-center gap-1 rounded-2xl bg-[#F1F2F5] p-1">
      {taskStatus.map((stats) => (
        <StatusItem
          key={stats.label}
          icon={stats.icon}
          label={stats.label}
          isActive={currentFilter === stats.label}
          onSelect={() => setCurrentFilter(stats.label)}
        />
      ))}
    </div>
  );
}
