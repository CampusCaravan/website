import React from "react";
import Link from "next/link";

const NavBarNotPhone = () => {
  return (
    <div className="gap-x-10 hidden md:flex">
      <Link href="/">
        <h3>HOME</h3>
      </Link>
      <Link href="/Article">
        <h3>ARTICLES</h3>
      </Link>
      <Link href="/Events">
        <h3>EVENTS</h3>
      </Link>
      <Link href="/About">
        <h3>ABOUT</h3>
      </Link>
    </div>
  );
};

export default NavBarNotPhone;
