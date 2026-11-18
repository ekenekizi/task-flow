import Logo from "../ui/Logo";
import {
  Calendar,
  Inbox,
  LayoutList,
  Star,
  type LucideIcon,
} from "lucide-react";
export default function SideBar() {
  interface NavItem {
    label: string;
    href: string;
    count: number;
    icon: LucideIcon;
  }

  const navItems: NavItem[] = [
    {
      label: "Inbox",
      href: "/",
      count: 0,
      icon: Inbox,
    },
    {
      label: "Today",
      href: "/today",
      count: 3,
      icon: Calendar,
    },
    {
      label: "Important",
      href: "/important",
      count: 4,
      icon: Star,
    },
    {
      label: "All Tasks",
      href: "/",
      count: 8,
      icon: LayoutList,
    },
  ];
  return (
    <aside className="border col-start-1 col-end-2 h-screen row-start-1 row-end-3 ">
      <Logo />

      <nav className="border">
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>{item.label}</li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
