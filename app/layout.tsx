import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Metal3D — Intelligence for the built world",
  description: "Agentic AI for manufacturing and construction. Connect engineering knowledge, coordinate complex workflows, and move from intent to execution with Metal3D.",
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "Metal3D — Intelligence for the built world", description: "Agentic AI for manufacturing and construction.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
