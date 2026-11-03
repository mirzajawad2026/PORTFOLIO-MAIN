"use client";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { reveal } from "@/lib/motion";
export default function About() {
  return (<section id="about" className="about">
    <motion.h2 {...reveal}>{site.statement}</motion.h2>
    <motion.div {...reveal}>{site.about.map((p) => <p key={p}>{p}</p>)}</motion.div>
  </section>);
}
