import "./globals.css";
import { site } from "@/data/site";
export const metadata = { title: `${site.name} — ${site.role}`, description: site.tagline };
export default function RootLayout({ children }) {
  return (<html lang="en"><body>{children}</body></html>);
}
