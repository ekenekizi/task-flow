"use client";

import { create } from "zustand";
import { listItems } from "@/config/navigation";
import { tasks as mockTasks } from "@/data/task";
import type { ListItemType } from "@/types/myList";
import type { Task } from "@/types/task";

interface TaskStore {
  lists: ListItemType[];
  tasks: Task[] | null;
  initializeTasks: () => void;
  addList: (label: string, colorTag: string) => void;
  deleteEmptyList: (id: string) => void;
  toggleTask: (taskId: string) => void;
  toggleSubtask: (taskId: string, subtaskId: string) => void;
}

export const useTaskStore = create<TaskStore>()((set) => ({
  lists: listItems,
  tasks: null,

  initializeTasks: () =>
    set((state) => (state.tasks === null ? { tasks: mockTasks } : state)),

  addList: (label, colorTag) => {
    const id = crypto.randomUUID();

    const newList: ListItemType = {
      id,
      label,
      colorTag,
      href: `/list/${id}`,
    };

    set((state) => ({ lists: [...state.lists, newList] }));
  },

  deleteEmptyList: (id) =>
    set((state) => {
      if (
        state.tasks === null ||
        state.tasks.some((task) => task.listId === id)
      ) {
        return state;
      }

      return { lists: state.lists.filter((list) => list.id !== id) };
    }),

  toggleTask: (taskId) =>
    set((state) => {
      if (state.tasks === null) return state;

      return {
        tasks: state.tasks.map((task) =>
          task.id === taskId ? { ...task, completed: !task.completed } : task,
        ),
      };
    }),

  toggleSubtask: (taskId, subtaskId) =>
    set((state) => {
      if (state.tasks === null) return state;

      return {
        tasks: state.tasks.map((task) => {
          if (task.id !== taskId) return task;

          return {
            ...task,
            subtasks: task.subtasks.map((subtask) =>
              subtask.id === subtaskId
                ? { ...subtask, completed: !subtask.completed }
                : subtask,
            ),
          };
        }),
      };
    }),
}));
