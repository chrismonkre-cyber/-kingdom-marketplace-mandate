import { Link } from "react-router-dom";

export default function GoldButton({ to, href, children, className = "" }) {
  const base = `inline-block font-cinzel text-sm md:text-base font-bold px-6 py-2.5 rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-400 transition-all shadow-md hover:shadow-yellow-500/30 ${className}`;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={base}>{children}</a>;
  if (to) return <Link to={to} className={base}>{children}</Link>;
  return <button className={base}>{children}</button>;
}