"use client";

import { useState } from "react";
import {
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Flag,
  Tag,
} from "lucide-react";

import type { Task } from "@/types/task";

interface TaskCardProps {
  task: Task;
  listName?: string;
  listColor?: string;
}

const priorityConfig = {
  URGENT: {
    label: "Urgent",
    color: "text-red-500",
    background: "bg-red-50",
  },
  HIGH: {
    label: "High",
    color: "text-orange-500",
    background: "bg-orange-50",
  },
  MEDIUM: {
    label: "Medium",
    color: "text-yellow-600",
    background: "bg-yellow-50",
  },
  LOW: {
    label: "Low",
    color: "text-green-600",
    background: "bg-green-50",
  },
};

export default function TaskCard({ task, listName, listColor }: TaskCardProps) {
  const [expanded, setExpanded] = useState(false);

  const priority = priorityConfig[task.priority];

  const completedSubtasks = task.subtasks.filter(
    (subtask) => subtask.completed,
  ).length;

  const hasSubtasks = task.subtasks.length > 0;

  return (
    <article className="rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-violet-200">
      {/* Task heading */}
      <div className="flex items-start gap-3">
        {/* Completion indicator - visual only for now */}
        <span
          aria-hidden="true"
          className={`mt-0.5 size-5 shrink-0 rounded-full border-2 ${
            task.completed
              ? "border-violet-600 bg-violet-600"
              : "border-gray-300"
          }`}
        />

        {/* Task content */}
        <div className="min-w-0 flex-1">
          <h3
            className={`text-sm font-medium ${
              task.completed ? "text-gray-400 line-through" : "text-gray-800"
            }`}
          >
            {task.title}
          </h3>

          {task.description && (
            <p className="mt-1 line-clamp-2 text-xs text-gray-400">
              {task.description}
            </p>
          )}
        </div>
      </div>

      {/* Task metadata */}
      <div className="mt-3 flex flex-wrap items-center gap-2 pl-8">
        {/* Priority */}
        <span
          className={`flex items-center gap-1 rounded-md px-2 py-1 text-xs ${priority.color} ${priority.background}`}
        >
          <Flag size={12} />
          {priority.label}
        </span>

        {/* Due date */}
        {task.dueDate && (
          <span className="flex items-center gap-1 text-xs text-gray-400">
            <CalendarDays size={13} />
            {new Date(`${task.dueDate}T00:00:00`).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </span>
        )}

        {/* List */}
        {listName && (
          <span className="flex items-center gap-1 text-xs text-gray-400">
            <span
              className="size-2 rounded-full"
              style={{ backgroundColor: listColor ?? "#9ca3af" }}
            />
            {listName}
          </span>
        )}

        {/* Tags */}
        {task.tags.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs text-violet-500"
          >
            <Tag size={11} />
            {tag}
          </span>
        ))}

        {/* Subtask toggle */}
        {hasSubtasks && (
          <button
            type="button"
            onClick={() => setExpanded((current) => !current)}
            className="ml-auto flex items-center gap-1 text-xs text-gray-400 transition-colors hover:text-gray-700"
          >
            {expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            {completedSubtasks}/{task.subtasks.length} subtasks
          </button>
        )}
      </div>

      {/* Subtasks */}
      {expanded && hasSubtasks && (
        <div className="ml-9 mt-4 space-y-3 border-l-2 border-gray-100 pl-4">
          {task.subtasks.map((subtask) => (
            <div key={subtask.id} className="flex items-center gap-2">
              <span
                className={`size-3.5 shrink-0 rounded border ${
                  subtask.completed
                    ? "border-violet-600 bg-violet-600"
                    : "border-gray-300"
                }`}
              />

              <span
                className={`text-xs ${
                  subtask.completed
                    ? "text-gray-400 line-through"
                    : "text-gray-600"
                }`}
              >
                {subtask.title}
              </span>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
