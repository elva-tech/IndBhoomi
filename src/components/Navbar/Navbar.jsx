import { useState } from "react";
import { navLinks } from "./navData";

export default function Navbar() {
  const [open, setOpen] = useState(null); // for desktop dropdown
  const [mobileOpen, setMobileOpen] = useState(false); // for hamburger

  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="font-serif text-xl tracking-wide text-gray-900">
            IndBhoomi
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item, i) => (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => setOpen(i)}
                onMouseLeave={() => setOpen(null)}
              >
                <a
                  href={item.href || "#"}
                  className="text-sm font-medium text-gray-800 hover:text-black transition"
                >
                  {item.label}
                </a>

                {/* Dropdown */}
                {item.submenu && open === i && (
                  <div className="absolute left-0 top-full mt-3 w-56 rounded-xl bg-white shadow-xl border border-black/5 p-2">
                    {item.submenu.map((sub, j) => (
                      <a
                        key={j}
                        href={sub.href}
                        className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-black/5 transition"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full bg-black px-6 py-2 text-sm font-medium text-white hover:scale-105 transition"
          >
            Contact Us
          </a>

          {/* Hamburger (Mobile only) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <span className="h-[2px] w-6 bg-black"></span>
            <span className="h-[2px] w-6 bg-black"></span>
            <span className="h-[2px] w-6 bg-black"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-black/5 shadow-lg">
          <div className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((item, i) => (
              <div key={i}>
                <a
                  href={item.href || "#"}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm font-medium text-gray-800"
                >
                  {item.label}
                </a>

                {item.submenu && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {item.submenu.map((sub, j) => (
                      <a
                        key={j}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-sm text-gray-600"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex w-fit rounded-full bg-black px-6 py-2 text-sm font-medium text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
