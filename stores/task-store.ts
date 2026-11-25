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
      count: 0,
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
}));
