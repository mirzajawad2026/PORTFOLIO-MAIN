"use client";
import { useState } from "react";
import { site } from "@/data/site";
export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); const f = new FormData(e.target);
    window.location.href = `${site.links.email}?subject=Message from ${f.get("name")}&body=${encodeURIComponent(f.get("message"))}`; setSent(true); };
  return (<section id="contact" className="contact">
    <div><h2>LET'S CREATE SOMETHING MEANINGFUL</h2><p className="lime">{site.email} // {site.phone}</p>
      <div className="mini"><b>{site.name.toUpperCase()}</b><span>{site.brand} | {site.role}</span></div></div>
    <form onSubmit={submit}><input name="name" placeholder="First Name" required /><input name="email" type="email" placeholder="Email Address" required />
      <textarea name="message" placeholder="Message" rows={6} required /><button className="lime-btn">{sent ? "opening mail…" : "submit message"}</button></form>
    <footer><a href="#home" className="up">↑</a><div><b>{site.name.toUpperCase()}</b><p>© 2026 {site.name}. All rights reserved</p></div></footer>
    <h1 className="giant">{site.name.toUpperCase()}</h1>
  </section>);
}
