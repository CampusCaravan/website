import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/Components/ui/button";
// import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet";

const NavBarPhone = () => {
  return (
    <div className="flex gap-2 md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/Icons/Bars-Black.svg"
            alt="Pages"
            width={28}
            height={28}
          ></Image>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-center ">Pages</SheetTitle>
          </SheetHeader>
          <div className="">
            <div className="flex flex-col gap-2 mt-2">
              <Link href="/">
                <Button className="w-full text-white bg-black">Home</Button>
              </Link>
              <Link href="/Article">
                <Button className="w-full text-white bg-black">Articles</Button>
              </Link>
              <Link href="/Events">
                <Button className="w-full text-white bg-black">Events</Button>
              </Link>
              <Link href="/About">
                <Button className="w-full text-white bg-black">About</Button>
              </Link>
            </div>
            {/* <div className="">
              <SheetClose asChild>
                <Link href="/">
                  <Button type="submit" className="w-full">
                    Logout
                  </Button>
                </Link>
              </SheetClose>
            </div> */}
          </div>
          <SheetFooter></SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavBarPhone;
