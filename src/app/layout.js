import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MusicPlayer from "./components/MusicPlayer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ===============================
// COMPLETE + FIXED METADATA
// ===============================
export const metadata = {
  metadataBase: new URL("https://hospiceandbeyond.com"),
  title: "Hospice & Beyond",
  description: "A legacy of compassion – honoring every life, every moment.",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "Hospice & Beyond",
    description: "A legacy of compassion – honoring every life, every moment.",
    url: "https://hospiceandbeyond.com",
    siteName: "Hospice & Beyond",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hospice & Beyond",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hospice & Beyond",
    description: "A legacy of compassion – honoring every life, every moment.",
    images: ["/og-image.png"],
  },
};

// ===============================
// themeColor MUST BE IN viewport
// ===============================
export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <MusicPlayer />
      </body>
    </html>
  );
}
