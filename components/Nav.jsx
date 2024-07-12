"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Nav = () => {
  const pathname = usePathname();
  return (
    <>
      <>
        <div>
          <nav className="flex gap-8">
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
        </div>
      </>
    </>
  );
};

export default Nav;
