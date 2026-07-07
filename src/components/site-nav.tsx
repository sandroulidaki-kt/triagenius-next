"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/training-support", label: "Training & Support" },
  { href: "/plans", label: "Plans" },
  { href: "/contact", label: "Contact Us" },
];

const TRIAGENIUS_CHILDREN = [
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/training-support", label: "Training & Support" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const triagenithActive = TRIAGENIUS_CHILDREN.some((c) => isActive(c.href));

  return (
    <header className="site-nav sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-[90px] max-w-[1920px] items-center justify-between px-6 md:h-[124px] md:px-[100px] xl:px-[200px]">
        <Link prefetch={false} href="/" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-hor.png" alt="Triagenius" className="h-12 md:h-16" />
        </Link>

        <div className="flex items-center gap-10">
          <nav className="hidden items-center gap-10 text-[18px] font-semibold text-black/90 lg:flex">
            <Link prefetch={false}
              href="/"
              className={`transition-colors hover:text-brand-teal ${isActive("/") ? "text-brand-teal" : ""}`}
            >
              Home
            </Link>

            <div className="group relative">
              <button
                type="button"
                className={`flex items-center gap-1 transition-colors hover:text-brand-teal ${triagenithActive ? "text-brand-teal" : ""}`}
              >
                Triagenius
                <svg className="mt-0.5 h-3 w-3" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="absolute left-1/2 top-full hidden -translate-x-1/2 pt-3 group-hover:block">
                <div className="w-56 rounded-xl bg-white py-2 text-base font-normal shadow-xl">
                  {TRIAGENIUS_CHILDREN.map((c) => (
                    <Link prefetch={false} key={c.href} href={c.href} className="block px-5 py-2.5 hover:bg-gray-50 hover:text-brand-teal">
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link prefetch={false} href="/plans" className={`transition-colors hover:text-brand-teal ${isActive("/plans") ? "text-brand-teal" : ""}`}>
              Plans
            </Link>
            <Link prefetch={false} href="/contact" className={`transition-colors hover:text-brand-teal ${isActive("/contact") ? "text-brand-teal" : ""}`}>
              Contact Us
            </Link>
          </nav>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/flag-en.png" alt="English" className="hidden h-7 w-7 rounded-full sm:block" />
          <button
            type="button"
            className="p-2 lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 px-6 pb-4 font-semibold text-black/90 lg:hidden">
          {LINKS.map((l, i) => (
            <Link prefetch={false}
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`py-2 ${i < LINKS.length - 1 ? "border-b border-gray-100" : ""} ${isActive(l.href) ? "text-brand-teal" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
