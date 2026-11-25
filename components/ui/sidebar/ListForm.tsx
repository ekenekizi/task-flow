"use client";

import { useState, type FormEvent } from "react";
import type { ListFormProps } from "@/types/myList";

export default function ListForm({
  colors,
  toggleListMenu,
  onAddList,
}: ListFormProps) {
  const [name, setName] = useState("");
  const [selectedColor, setSelectedColor] = useState(colors[0]?.value ?? "");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const label = name.trim();

    if (!label) {
      setError("Enter a list name.");
      return;
    }

    if (!selectedColor) {
      setError("Choose a list color.");
      return;
    }

    onAddList(label, selectedColor);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/10 border border-gray-500 rounded-md w-[90%] p-2 flex flex-col gap-2"
    >
      <label>
        <span className="sr-only">List name</span>
        <input
          name="list-name"
          placeholder="List name..."
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            setError("");
          }}
          className="w-full placeholder:text-gray-500 outline-none text-white"
        />
      </label>

      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="List color"
      >
        {colors.map((color) => (
          <button
            key={color.name}
            type="button"
            aria-label={color.name}
            aria-pressed={selectedColor === color.value}
            onClick={() => {
              setSelectedColor(color.value);
              setError("");
            }}
            className={`size-5 rounded-full hover:scale-120 transition-all duration-200 ${
              selectedColor === color.value ? "ring-2 ring-white" : ""
            }`}
            style={{ backgroundColor: color.value }}
          />
        ))}
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-300">
          {error}
        </p>
      )}

      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-secondary hover:bg-secondary/80 text-white w-25 rounded-lg"
        >
          Add
        </button>
        <button
          type="button"
          onClick={toggleListMenu}
          className="w-25 text-gray-400 hover:text-white transition-all duration-200"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
