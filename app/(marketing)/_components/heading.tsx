"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function Headings() {
  const { isAuthenticated, isLoading } = useConvexAuth();

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
        {isLoading && (
          <div className="w-full flex items-center justify-center">
            <Spinner size={"lg"} />
          </div>
        )}
        {isAuthenticated && !isLoading && (
          <Button asChild>
            <Link href={"/document"}>
              JustNote <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        )}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button size="sm">Log In to JustNote</Button>
            </SignInButton>
          </>
        )}
      </div>
    </>
  );
}

export default Headings;
