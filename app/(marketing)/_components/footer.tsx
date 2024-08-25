import React from "react";
import Logo from "./logo";
import { Button } from "@/components/ui/button";

const FooterPage = () => {
  return (
    <div className="flex items-center justify-start p-6 bg-background dark:bg-[#1f1f1f] z-50">
      <Logo />
      <div className="md:ml-auto w-full justify-between flex md:justify-end items-center gap-x-2 text-muted-foreground">
        <Button variant={"ghost"} size={"sm"}>
          Privacy Policy
        </Button>
        <Button variant={"ghost"} size={"sm"}>
          Terms and Condition
        </Button>
      </div>
    </div>
  );
};

export default FooterPage;
