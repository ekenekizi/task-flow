import AddTaskBtn from "../ui/header/AddTaskBtn";
import PageHeader from "../ui/header/PageHeader";

export default function Header() {
  return (
    <header className="border row-start-1 row-end-2">
      {/* top header */}
      <div>
        <PageHeader />
        <AddTaskBtn/>
      </div>

      {/* lower header */}
      <div></div>
    </header>
  );
}
