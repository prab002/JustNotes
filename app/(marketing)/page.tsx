import FooterPage from "./_components/footer";
import Headings from "./_components/heading";
import HeroPage from "./_components/heroes";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-full ">
        <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
          <Headings />
          <HeroPage />
        </div>
          <FooterPage />
      </div>
    </>
  );
}
