import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "UHL Next",
  description: "Next generation of UHL websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      <body className={cn("min-h-dvh font-sans antialiased", GeistSans.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
