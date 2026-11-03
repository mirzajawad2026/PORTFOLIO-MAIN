"use client";
import { useEffect, useState } from "react";
export default function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => { const f = () => setShow(window.scrollY > 500); window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f); }, []);
  return show ? <button className="top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>⌃</button> : null;
}
