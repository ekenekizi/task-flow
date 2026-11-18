import { SquareCheckBig } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex gap-3 items-center p-4">
      <div className="p-1.5 bg-primary rounded-lg w-fit">
        <SquareCheckBig className="text-white" />
      </div>
      <p className="font-bold text-xl text-white">TaskFlow</p>
    </div>
  );
}
