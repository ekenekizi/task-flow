"use client";

import { Plus } from "lucide-react";

export default function AddTaskBtn() {
  return (
    <button className="flex items-center gap-3 bg-secondary py-2 px-4 rounded-xl text-white hover:bg-secondary/80 transition-colors duration-300">
      <Plus />
      <p>Add Task</p>
    </button>
  );
}
