import Image from "next/image";
import React from "react";

const HeroPage = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex w-full  items-center justify-center">
        <div className="relative w-[200px] h-[200px] sm:w-[330px] sm:h-[330px] md:w-[300px] md:h-[300px]">
          <Image
            src={"/heropage1.png"}
            fill
            alt="hero image "
            className="object-contain dark:hidden"
          />
          <Image
            src={"/heropage1_dark_mode.png"}
            fill
            alt="hero image "
            className="object-contain hidden dark:block"
          />
        </div>
        <div className=" relative w-[300px] h-[300px] hidden sm:block">
          <Image
            src={"/heropage2.png"}
            fill
            alt="hero image"
            className="object-contain dark:hidden"
          />
          <Image
            src={"/justNoteit.png"}
            fill
            alt="hero image"
            className="object-contain hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
