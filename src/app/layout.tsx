import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";
import { Providers } from "@/context/providers";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

const pixelFont = localfont({
  src: "../../public/fonts/MonoRegular.woff2",
  variable: "--font-pixelFont",
});

export const metadata: Metadata = {
  title: "AtomFit",
  description:
    "AtomFit is more than just a fitness app, it's your personal trainer, nutritionist, and motivator all in one.",
  authors: [
    { name: "Crintea Sebastian Daniel" },
    { name: "Casciuc Stanislav" },
    { name: "Robu Gabriel" },
    { name: "Rusu Sebastian Matei" },
  ],
  keywords: [
    "Fitness",
    "Gym",
    "Workout",
    "Exercise",
    "Atom",
    "AtomFit",
    "Health",
    "Nutrition",
    "Calorie Tracker",
    "Progress Tracking",
    "Personalized Workouts",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          pixelFont.variable,
          "min-h-screen antialiased",
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
