import { Menu } from "lucide-react";
import AddTaskBtn from "../ui/header/AddTaskBtn";
import PageHeader from "../ui/header/PageHeader";
import SearchBar from "../ui/header/SearchBar";
import SortDropdown from "../ui/header/SortDropdown";
import TaskStatusFilter from "../ui/header/TaskStatusFilter";
import type { ListItemType } from "@/types/myList";
import { Suspense } from "react";

interface HeaderProps {
  onMenuClick: () => void;
  lists: ListItemType[];
}

export default function Header({ onMenuClick, lists }: HeaderProps) {
  return (
    <header className="col-start-1 row-start-1 row-end-2 min-w-0 p-3 flex flex-col justify-between md:col-start-2 md:p-4">
      {/* top header */}
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            aria-label="Open navigation menu"
            className="rounded-md p-2 hover:bg-gray-100 md:hidden"
          >
            <Menu size={22} />
          </button>
          <Suspense
            fallback={<h1 className="text-2xl font-semibold"> Tasks</h1>}
          >
            <PageHeader lists={lists} />
          </Suspense>
        </div>

        <AddTaskBtn />
      </div>

      {/* lower header */}
      <div className="flex items-stretch gap-3">
        <SearchBar />
        <TaskStatusFilter />
        <SortDropdown />
      </div>
    </header>
  );
}
