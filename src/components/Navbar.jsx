import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const LOGO = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/4ac06c230_newlogo.png";
const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/daily", label: "Daily" },
  { to: "/marketplace", label: "Marketplace" },
  { to: "/journal", label: "Journal" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-yellow-600/40">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="rounded-full overflow-hidden h-10 md:h-12 w-10 md:w-12 flex-shrink-0">
            <img src={LOGO} alt="Kingdom Mandate Ministry" className="h-full w-full object-cover" />
          </div>
          <span className="hidden sm:inline font-cinzel text-sm md:text-base font-bold text-yellow-200 drop-shadow">Kingdom Marketplace</span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(l => (
            <Link key={l.to} to={l.to}
              className={`px-3 py-1.5 rounded font-cinzel text-sm transition-colors ${location.pathname === l.to ? "bg-yellow-600/40 text-yellow-100" : "text-yellow-100 hover:text-white hover:bg-yellow-600/25"}`}>
              {l.label}
            </Link>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-yellow-200 p-1">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg border-t border-yellow-700/30">
          {NAV_LINKS.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
              className={`block px-6 py-3 font-cinzel text-sm border-b border-yellow-900/20 ${location.pathname === l.to ? "text-yellow-200 bg-yellow-900/25" : "text-yellow-100"}`}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}