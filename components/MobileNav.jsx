"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

const Links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];
export const MobileNav = () => {
  const pathname = usePathname();
  return (
    <>
      <div>
        <Sheet>
          <SheetTrigger className="flex justify-center items-center ">
            <CiMenuFries size={30} className="text-green-600" />
          </SheetTrigger>
          <SheetContent className="flex flex-col ">
            <div className="mt-32 mb-20 text-center text-3xl">
              {" "}
              <h1 className="font-semibold">
                Nagdy <span className="text-green-800">.</span>
              </h1>
            </div>
            <nav className="flex flex-col gap-8">
              {Links.map((l, index) => {
                return (
                  <Link
                    href={l.path}
                    key={index}
                    className={`${
                      l.path === pathname &&
                      "text-green-600 border-b-2 border-green-600 "
                    }font-medium capitalize hover:text-green-600 transition-all`}
                  >
                    {l.name}
                  </Link>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};
