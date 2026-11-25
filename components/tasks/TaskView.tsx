"use client";

import { useTaskStore } from "@/stores/task-store";
import TaskList from "./TaskList";
import { selectTasks, type View } from "@/lib/task-views";

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
