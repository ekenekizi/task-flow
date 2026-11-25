"use client";

import { navItems } from "@/config/navigation";
import type { ListItemType } from "@/types/myList";
import { usePathname } from "next/navigation";

interface PageHeaderProps {
  lists: ListItemType[];
}

export default function PageHeader({ lists }: PageHeaderProps) {
  const pathname = usePathname();

  const currentPage = [...navItems, ...lists].find(
    (item) => item.href === pathname,
  );

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
        {currentPage?.count ?? 0}{" "}
        <span>{(currentPage?.count ?? 0) > 1 ? "tasks" : "task"}</span>
      </span>
    </div>
  );
}
