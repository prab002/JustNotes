import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/provider/theme-provider";
import { ModalProvider } from "@/components/provider/modal-provider";
import { ConvexClientProvider } from "@/components/provider/convex-provider";

import { Toaster } from "sonner";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Just-Note",
  description: "You can write your Notes Online with JustNotes",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/logoDark.png",
      href: "/logoDark.png",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/logoLight.png",
      href: "/logoLight.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="justnote-theme-2"
          >
            <Toaster position="bottom-center" />
            <ModalProvider />
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
