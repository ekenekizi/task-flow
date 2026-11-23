import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative flex-1 min-w-0">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />
      <input
        placeholder="Search tasks..."
        className="h-full border border-gray-300 placeholder:text-gray-400 bg-gray-50 rounded-2xl w-full py-2 pl-11 pr-4 focus:outline-secondary transition-all duration-300"
      />
    </div>
  );
}
