"use client";
import { ListFormProps } from "@/types/myList";

export default function ListForm({ colors, toggleListMenu }: ListFormProps) {
  return (
    <form className="bg-white/10 border border-gray-500 rounded-md w-[90%] p-2 flex flex-col gap-2 ">
      <input
        name="list-name"
        placeholder="List name..."
        className="placeholder:text-gray-500 outline-none text-white"
      />
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <button
            key={color.name}
            className="size-5 rounded-full hover:scale-120 transition-all duration-200"
            style={{
              backgroundColor: color.value,
            }}
          ></button>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          type="button"
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
