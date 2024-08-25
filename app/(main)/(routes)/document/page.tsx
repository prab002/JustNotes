"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

function Document() {
  const { user } = useUser();
  console.log(user);
  return (
    <div className="w-full h-full flex items-center justify-center flex-col space-y-4">
      <Image
        src="/empty.jpg"
        width={300}
        height={300}
        alt="empty "
        className="dark:hidden"
      />
      <h1 className="text-lg font-medium">
        welcome to {user?.username}&apos;'s JustNote{" "}
      </h1>
      <Button>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
}

export default Document;
