import { today as mockToday } from "@/data/task";
import type { Task } from "@/types/task";

export type BuiltInView = "inbox" | "today" | "important" | "all";
export type View = BuiltInView | { listId: string };

export function selectTasks(tasks: Task[], view: View): Task[] {
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

export function countActiveTasks(tasks: Task[] | null, view: View): number {
  if (tasks === null) return 0;

  return selectTasks(tasks, view).filter((task) => !task.completed).length;
}
