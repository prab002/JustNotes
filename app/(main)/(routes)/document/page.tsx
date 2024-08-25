"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

function Document() {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({
      title: "Untitled",
    });

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "Note created successfully",
      error: "Failed to create note",
    });
  };

  return (
    <div className="w-full h-full flex items-center justify-center flex-col space-y-4">
      <Image
        src="/empty.jpg"
        width={300}
        height={300}
        alt="empty"
        className="dark:hidden"
      />
      <h1 className="text-lg font-medium">
        Welcome to {user?.username}&apos;s JustNote{" "}
      </h1>
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
}

export default Document;
