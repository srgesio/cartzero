import type { Metadata } from "next";
import "./globals.css";
import { Tourney, Titillium_Web } from "next/font/google";

const tourney = Tourney({
  variable: "--font-tourney",
  subsets: ["latin"],
});

const titilliumWeb = Titillium_Web({
  variable: "--font-titillium-web",
  weight: ["200", "400", "600", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cartzero ADMIN",
  description: "Cartzero Admin",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${tourney.variable} ${titilliumWeb.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
