import Image from "next/image";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className="hidden md:flex items-center justify-center gap-x-2">
      <Image
        src={"/logoDark.png"}
        alt="logo"
        width={40}
        height={40}
        className="dark:hidden"
      />
      <Image
        src={"/logoLight.png"}
        alt="logo"
        width={40}
        height={40}
        className=" dark:block hidden "
      />
      <p className={cn(font.className, "font-semibold")}>justNote</p>
    </div>
  );
};

export default Logo;
