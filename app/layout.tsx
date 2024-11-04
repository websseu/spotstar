import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Must-Visit Starbucks Locations",
  description:
    "Explore top Starbucks locations worldwide with essential details on parking, amenities, and must-visit recommendations for the coffee enthusiast.",
  keywords:
    "Starbucks, coffee, must-visit Starbucks, Starbucks locations, Starbucks parking, coffee shop amenities",
  openGraph: {
    title: "Explore Must-Visit Starbucks Locations Worldwide",
    description:
      "Discover top Starbucks spots with detailed information on amenities, parking options, and what makes each location unique.",
    url: "https://spotstarworld.com",
    type: "website",
    images: [
      {
        url: "https://spotstarworld.com/starworld.jpg",
        width: 1200,
        height: 630,
        alt: "Must-Visit Starbucks Locations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Must-Visit Starbucks Locations",
    description:
      "Discover must-visit Starbucks spots worldwide with insights into parking, amenities, and unique features.",
    images: ["https://spotstarworld.com/starworld.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
