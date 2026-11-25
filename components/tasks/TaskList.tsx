import { Task } from "@/types/task";
import TaskCard from "./TaskCard";
import type { ListItemType } from "@/types/myList";

interface TaskListProps {
  tasks: Task[];
  lists: ListItemType[];
}

export default function TaskList({ tasks, lists }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <h3 className="text-sm font-medium text-gray-700">No tasks found</h3>

        <p className="mt-1 text-xs text-gray-400">
          Your tasks will appear here
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => {
        const list = lists.find((item) => item.id === task.listId);

        return (
          <TaskCard
            key={task.id}
            task={task}
            listName={list?.label}
            listColor={list?.colorTag}
          />
        );
      })}
    </div>
  );
}
