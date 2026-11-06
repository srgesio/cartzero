import type { Metadata } from "next";
import "./globals.css";
import { Tourney, Titillium_Web } from "next/font/google";

const tourney = Tourney({
  variable: "--font-tourney",
  subsets: ["latin"],
});

const titilliumWeb = Titillium_Web({
  variable: "--font-titillium-web",
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "Cartzero ECOM",
  description: "Cartzero Ecommerce",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${tourney.variable} ${titilliumWeb.variable} h-full w-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
