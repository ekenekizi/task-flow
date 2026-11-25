"use client";

import { navItems } from "@/config/navigation";
import type { ListItemType } from "@/types/myList";
import { usePathname } from "next/navigation";
import { countActiveTasks } from "@/lib/task-views";
import { useTaskStore } from "@/stores/task-store";

interface PageHeaderProps {
  lists: ListItemType[];
}

export default function PageHeader({ lists }: PageHeaderProps) {
  const pathname = usePathname();
  const tasks = useTaskStore((state) => state.tasks);
  const currentPage = [...navItems, ...lists].find(
    (item) => item.href === pathname,
  );
  const count = currentPage
    ? countActiveTasks(
        tasks,
        "view" in currentPage ? currentPage.view : { listId: currentPage.id },
      )
    : 0;

  return (
    <div className="flex items-center gap-3">
      {currentPage && "colorTag" in currentPage && (
        <div
          style={{ backgroundColor: currentPage.colorTag }}
          className="size-3 rounded-full"
        />
      )}

      <h1 className="text-2xl font-semibold">
        {currentPage?.label ?? "Tasks"}
      </h1>

      <span className="text-sm text-gray-500">
        {count} {count === 1 ? "task" : "tasks"}
      </span>
    </div>
  );
}
