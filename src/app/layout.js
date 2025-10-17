import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MusicPlayer from "./components/MusicPlayer"; // ✅ add this line

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hospice and Beyond",
  description: "A legacy of compassion – honoring every life, every moment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <MusicPlayer /> {/* 🎧 plays globally on all pages */}
      </body>
    </html>
  );
}
