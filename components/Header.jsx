import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import { MobileNav } from "./MobileNav";

export const Header = () => {
  return (
    <>
      <div>
        <header className="container py-8 xl:py-12 text-white">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                Nagdy <span className="text-green-800">.</span>
              </h1>
            </Link>
            <div className="hidden xl:flex items-center gap-8">
              <Nav />
              <Link href="/contact">
                <button class="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
                  Hire me
                </button>
              </Link>
            </div>
            {/* mobile nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
