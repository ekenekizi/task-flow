"use client";
import { NavItemProps } from "@/types/navigations";
import Link from "next/link";

export default function NavItem({
  label,
  icon: Icon,
  count,
  href,
  iconColor,
  isActive,
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={`flex justify-between items-center group transition-all duration-200 px-4 py-2  rounded-lg ${isActive ? "bg-active text-white" : "text-gray-400 hover:bg-active/40 hover:text-gray-300"}`}
    >
      <div className="flex items-center gap-2">
        <Icon size={20} className={`${iconColor}`} />
        <span className="">{label}</span>
      </div>
      {count > 0 ? (
        <div
          className={`h-5 w-5 rounded-full  flex justify-center items-center ${isActive ? "bg-[#636371]" : "hover:text-gray-200 group-hover:bg-[#454555] bg-[#303042]"}`}
        >
          <p className="mb-0.5">{count}</p>
        </div>
      ) : null}
    </Link>
  );
}
