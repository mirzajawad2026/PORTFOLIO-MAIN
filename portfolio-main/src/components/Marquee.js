import { marquee } from "@/data/site";
export default function Marquee() {
  const row = [...marquee, ...marquee, ...marquee];
  return (<div className="marquee">{[0, 1].map((r) => (
    <div key={r} className={`track ${r ? "rev" : ""}`}>{row.map((m, i) => <span key={i}>{m} <i>✦</i></span>)}</div>))}</div>);
}
