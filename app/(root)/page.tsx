import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center flex-col bg-[url('https://i.pinimg.com/736x/ea/ca/25/eaca25eb83410f906cff060fcd02c4b9.jpg')] bg-cover ">
        <p className="font-sans text-5xl font-bold ">
          hello this will be Notion clone ☯️ by @prab
        </p>
        <Button>notion world 🧑🏼‍💻</Button>
      </div>
    </>
  );
}
