"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function Preloader() {
  const [gone, setGone] = useState(false);
  useEffect(() => { const t = setTimeout(() => setGone(true), 1800); return () => clearTimeout(t); }, []);
  if (gone) return null;
  return (<motion.div className="curtain" initial={{ y: 0 }} animate={{ y: "-100%", borderBottomLeftRadius: "50% 20%", borderBottomRightRadius: "50% 20%" }} transition={{ delay: 0.9, duration: 0.7, ease: [0.76, 0, 0.24, 1] }} />);
}
