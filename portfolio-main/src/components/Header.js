"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { site } from "@/data/site";
import MenuOverlay from "./MenuOverlay";
export default function Header() {
  const [open, setOpen] = useState(false);
  const icons = [["GH", site.links.github], ["IN", site.links.linkedin], ["@", site.links.email], ["☎", `tel:${site.phone}`]];
  return (<>
    <header className="header">
      <a href="#home" className="logo"><span className="mark">{site.initials}</span><b>{site.name}</b></a>
      <nav className="icons">{icons.map(([t, h]) => <a key={t} href={h} className="icon">{t}</a>)}</nav>
      <button className="grid" onClick={() => setOpen(true)} aria-label="Menu">⠿</button>
      <a href={site.cv} className="btn-dark" download>DOWNLOAD CV</a>
    </header>
    <AnimatePresence>{open && <MenuOverlay onClose={() => setOpen(false)} />}</AnimatePresence>
  </>);
}
