import { Suspense } from "react";
import TaskView from "@/components/tasks/TaskView";

interface ListPageProps {
  params: Promise<{ id: string }>;
}

async function ListTasks({ params }: ListPageProps) {
  const { id } = await params;

  return <TaskView view={{ listId: id }} />;
}

export default function ListPage({ params }: ListPageProps) {
  return (
    <Suspense fallback={<p className="text-sm text-gray-500">Loading list…</p>}>
      <ListTasks params={params} />
    </Suspense>
  );
}
