"use client";
import { motion } from "framer-motion";
import { services } from "@/data/site";
import { reveal } from "@/lib/motion";
export default function Services() {
  return (<section id="services" className="services">
    {services.map((s, i) => (
      <motion.div key={s.title} className="pill" {...reveal} whileHover={{ borderColor: "#ff4d00" }}>
        <span className="num">0{i + 1} →</span>
        <div><h3>{s.title.toUpperCase()}</h3><div className="chips">{s.tags.map((t) => <em key={t}>● {t.toUpperCase()}</em>)}</div></div>
        <div className="art" style={{ background: s.g }} />
      </motion.div>))}
  </section>);
}
