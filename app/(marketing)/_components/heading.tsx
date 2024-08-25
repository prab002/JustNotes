"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function Headings() {
  return (
    <>
      <div className="max-w-3xl space-y-4">
        <h1 className="text-2xl sm:text-2xl md:text-3xl">
          You can Create,Share,Add just like apple notes with{" "}
          <span className="font-bold underline">JustNote 🧑🏼‍💻</span>
        </h1>
        <h3 className="text-base sm:text-xl md:text-2xl">
          JustNote is a simple way to write your notes.
        </h3>
        <Button>
          JustNote <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </>
  );
}

export default Headings;
