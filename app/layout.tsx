import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.title}` },
  description: site.description,
  authors: [{ name: site.name, url: site.githubUrl }],
  icons: { icon: "/src/images/file-code-solid.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>
    <a className="skip-link" href="#main">К содержимому</a>
    <Header />
    <main id="main">{children}</main>
    <Footer />
  </body></html>;
}
