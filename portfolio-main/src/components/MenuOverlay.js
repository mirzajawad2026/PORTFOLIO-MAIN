"use client";
import { motion } from "framer-motion";
import { site } from "@/data/site";
export default function MenuOverlay({ onClose }) {
  return (
    <motion.div className="overlay" initial={{ clipPath: "circle(0% at 90% 5%)" }} animate={{ clipPath: "circle(150% at 90% 5%)" }} exit={{ clipPath: "circle(0% at 90% 5%)" }} transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}>
      <button className="close" onClick={onClose}>✕</button>
      <span className="mark big">{site.initials}</span>
      <ul>{site.nav.map((n, i) => (
        <motion.li key={n} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.07 }}>
          <a href={`#${n.toLowerCase()}`} onClick={onClose}>{n.toUpperCase()}</a></motion.li>))}</ul>
      <aside><h4>CONTACT US</h4><p>{site.location}</p><p>{site.email}</p><p>{site.phone}</p>
        <div className="pills">{["github", "linkedin", "email"].map((k) => <a key={k} href={site.links[k]}>{k.toUpperCase()} ↗</a>)}</div></aside>
    </motion.div>);
}
