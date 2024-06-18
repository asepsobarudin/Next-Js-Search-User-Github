"use client";

import Image from "next/image";
import Link from "next/link";
import NavbarIcons from "@/public/vercel.svg";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  const navActive = (link: string) => {
    const navStyle = "border-2 rounded-md";
    const styleActive = "border-black";
    const styleNonActive = "border-transparent";

    return path === link
      ? `${navStyle} ${styleActive}`
      : `${navStyle} ${styleNonActive}`;
  };

  return (
    <nav className="flex justify-center items-center w-full h-auto ">
      <div className="container bg-slate-300 p-2 flex justify-between">
        <div className="h-[30px] w-max overflow-hidden">
          <Image
            src={NavbarIcons}
            alt="Icons"
            className="block object-contain h-full w-max"
          />
        </div>
        <ul className="flex justify-center items-center w-max gap-2">
          <li className={navActive("/")}>
            <Link href={"/"} className="p-2">
              Home
            </Link>
          </li>
          <li className={navActive("/search_user")}>
            <Link href={"/search_user"} className="p-2">
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
