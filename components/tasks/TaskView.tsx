"use client";

import { today as mockToday } from "@/data/task";
import { useTaskStore } from "@/stores/task-store";
import type { Task } from "@/types/task";
import TaskList from "./TaskList";

type View = "inbox" | "today" | "important" | "all" | { listId: string };

function selectTasks(tasks: Task[], view: View): Task[] {
  if (typeof view === "object") {
    return tasks.filter((task) => task.listId === view.listId);
  }

  switch (view) {
    case "inbox":
      return tasks.filter(
        (task) => task.listId === "inbox" || task.listId === null,
      );
    case "today":
      return tasks.filter((task) => task.dueDate === mockToday);
    case "important":
      return tasks.filter(
        (task) => task.priority === "HIGH" || task.priority === "URGENT",
      );
    case "all":
      return tasks;
  }
}

export default function TaskView({ view }: { view: View }) {
  const tasks = useTaskStore((state) => state.tasks);
  const lists = useTaskStore((state) => state.lists);

  if (tasks === null) {
    return <p className="text-sm text-gray-500">Loading tasks…</p>;
  }

  if (
    typeof view === "object" &&
    !lists.some((list) => list.id === view.listId)
  ) {
    return (
      <p className="text-sm text-gray-500">This list could not be found.</p>
    );
  }

  return <TaskList tasks={selectTasks(tasks, view)} lists={lists} />;
}
