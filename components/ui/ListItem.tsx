import { ListItemProps } from "@/types/myList";
import { Trash } from "lucide-react";
import Link from "next/link";

export default function ListItem({
  label,
  colorTag,
  href,
  count,
  isActive,
}: ListItemProps) {
  return (
    <li className="flex justify-between  items-center group">
      <Link
        href={href}
        className={`text-gray-400 flex justify-between items-center py-2 px-3 w-[90%] rounded-lg transition-all duration-200 ${
          isActive
            ? "bg-active text-white"
            : "hover:bg-active/40 hover:text-gray-300"
        }`}
      >
        <div className="flex gap-3 items-center">
          <div
            style={{ backgroundColor: colorTag }}
            className="size-3 rounded-full"
          />

          <p>{label}</p>
        </div>

        <p>{count}</p>
      </Link>

      <div className="size-7 bg-transparent group/delete hover:bg-red-500/20 flex items-center justify-center rounded-md">
        <Trash
          size={16}
          className="group-hover:text-gray-400 group-hover/delete:text-red-500 text-transparent transition-all duration-200"
        />
      </div>
    </li>
  );
}
