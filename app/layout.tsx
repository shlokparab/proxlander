import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proxima Mumbai — Mumbai’s builder network",
  description: "A high-trust tech community for founders, engineers, researchers and designers building ambitious things from Mumbai.",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Proxima Mumbai — Mumbai’s builder network, in public.",
    description: "Small rooms. Useful artifacts. Relationships that compound.",
    type: "website",
    images: [{ url: "/og.png", width: 1729, height: 910, alt: "Proxima Mumbai — Mumbai’s builder network, in public." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proxima Mumbai",
    description: "Mumbai’s builder network, in public.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
