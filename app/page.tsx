import { tasks } from "@/data/task";
import TaskList from "@/components/tasks/TaskList";

export default function HomePage() {
  return <TaskList tasks={tasks} />;
}
