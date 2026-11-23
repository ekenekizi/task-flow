import AddTaskBtn from "../ui/header/AddTaskBtn";
import PageHeader from "../ui/header/PageHeader";
import SearchBar from "../ui/header/SearchBar";
import SortDropdown from "../ui/header/SortDropdown";
import TaskStatusFilter from "../ui/header/TaskStatusFilter";

export default function Header() {
  return (
    <header className="row-start-1 row-end-2 p-4 flex flex-col justify-between">
      {/* top header */}
      <div className="flex items-center justify-between">
        <PageHeader />
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
