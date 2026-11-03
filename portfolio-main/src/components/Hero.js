"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import profile from "./profile.png";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <motion.h1
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.9 }}
      >
        {site.headline}
      </motion.h1>

      <motion.img
        src={profile.src}
        alt={site.name}
        className="portrait"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.9 }}
      />

      <div className="card intro">
        <b>{site.intro}</b>
        <ul>
          {site.tags.map((t) => (
            <li key={t}>✦ {t}</li>
          ))}
        </ul>
      </div>

      <div className="stats">
        {site.stats.map((s, i) => (
          <div
            key={s.l}
            className={`card stat ${i === 1 ? "dark" : ""}`}
          >
            <b>{s.v}</b>
            <span>{s.l}</span>
          </div>
        ))}
      </div>

      <div className="center">
        <p className="outline">{site.tagline}</p>
        <a href="#projects" className="btn-dark">
          VIEW PROJECTS
        </a>
      </div>
    </section>
  );
}