import { FC } from "react";
import {
  BookOpenCheck,
  Home,
  BookMarked,
  Timer,
  Settings,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { getCookie } from "cookies-next";
import { useState, useEffect } from "react";

interface NavLeftProps {}

function getStoreRole() {
  const role = getCookie("role");
  return role as string;
}

const NavLeft: FC<NavLeftProps> = ({}) => {
  const [role, setRole] = useState<string>("");

  useEffect(() => {
    setRole(getStoreRole());
  }, []);

  return (
    <div className="w-20 h-full border-r-2 border-gray-300 flex flex-col justify-between items-center font-normal text-sm text-gray-900">
      <div className="py-2">
        <BookOpenCheck />
      </div>
      <div className="flex flex-col gap-y-4">
        <Link href="/">
          <button className="p-2 cursor-pointer hover:bg-[#C9C39F] rounded-full">
            <Home />
          </button>
        </Link>
        <button className="p-2 cursor-pointer hover:bg-[#C9C39F] rounded-full">
          <BookMarked />
        </button>
        <button className="p-2 cursor-pointer hover:bg-[#C9C39F] rounded-full">
          <Timer />
        </button>
        {role === "ADMIN" ? (
          <Link href="/admin">
            <button className="p-2 cursor-pointer hover:bg-[#C9C39F] rounded-full">
              <Settings />
            </button>
          </Link>
        ) : null}
      </div>
      <button className="p-2 cursor-pointer hover:bg-[#C9C39F] rounded-full">
        <Menu />
      </button>
    </div>
  );
};

export default NavLeft;
