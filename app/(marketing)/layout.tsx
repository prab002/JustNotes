import NavBar from "./_components/navbar";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full ">
      <NavBar />
      <main className="h-full pt-40 dark:bg-[#1f1f1f]">{children}</main>
    </div>
  );
}
