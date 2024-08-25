"use client";

import UseScrollTop from "@/hooks/user-scroll-top";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { ModeToggle } from "@/components/mode-toggle";

const NavBar = () => {
  const scrolled = UseScrollTop(10);
  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex  items-center gap-x-2 ">
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;
