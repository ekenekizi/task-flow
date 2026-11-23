export type Priority = "LOW" | "MEDIUM" | "HIGH" | "URGENT";

export interface Subtask {
  id: string;
  title: string;
  completed: boolean;
}

export interface Task {
  id: string;
  title: string;
  description: string | null;
  completed: boolean;
  priority: Priority;
  dueDate: string | null;
  listId: string | null;
  tags: string[];
  createdAt: string;
  subtasks: Subtask[];
}
