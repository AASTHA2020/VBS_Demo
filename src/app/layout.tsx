import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Virtual Building Studio | AEC Production Partner",
  description:
    "Virtual Building Studio (VBS) provides remote AEC production teams for architectural, Scan-to-BIM and MEPF firms worldwide.",
  openGraph: {
    title: "Virtual Building Studio | AEC Production Partner",
    description:
      "400+ remote architects and engineers helping architecture, surveying and MEPF firms deliver work with accuracy and speed.",
    url: "https://www.virtualbuildingstudio.com",
    siteName: "Virtual Building Studio",
    type: "website"
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

