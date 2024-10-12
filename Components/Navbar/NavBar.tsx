import React from "react";
import Logo from "@/Components/Navbar/Logo";
import NavBarPhone from "./NavBarPhone";
import NavBarNotPhone from "./NavBarNotPhone";

export default function NavBar() {
  return (
    <div>
      <div className="flex justify-between items-center gap-5 pt-2 mb-2 pl-5 pr-8 sm:pl-10 sm:pr-16">
        <Logo />
        <NavBarPhone />
        <NavBarNotPhone />
      </div>
      <hr className="relative border-t-3 border-t-double border-gray-800 text-center h-5 my-auto w-full" />
    </div>
  );
}
