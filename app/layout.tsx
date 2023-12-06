import "../styles/globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import NavBar from "../components/NavBar";

import { Space_Grotesk } from "next/font/google";
import clsx from "clsx";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Harry Baines",
  description: "Harrys portfolio website",
  keywords: ["portfolio", "website", "react", "nextjs"],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={clsx(
          spaceGrotesk.className,
          "antialiased bg-background text-foreground"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <main className="h-full px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[700px] mx-auto">
            {children}
          </main>
          <footer className="h-14 text-center text-sm">
            Coded from scratch by Harry Baines, 2023
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
