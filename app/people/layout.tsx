import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Companies in motion — Proxima Mumbai",
  description: "Meet the companies and startups being built inside the Proxima Mumbai community.",
};

export default function PeopleLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
