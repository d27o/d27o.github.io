"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="container site-header__inner">
      <Link className="site-brand" href="/" onClick={() => setOpen(false)}>{site.name}<span className="site-brand__dot" aria-hidden="true">.</span></Link>
      <button type="button" className="menu-toggle" aria-controls="site-nav" aria-expanded={open}
        onClick={() => setOpen(!open)}>Меню <span aria-hidden="true">{open ? "×" : "☰"}</span></button>
      <nav id="site-nav" className={`site-nav${open ? " site-nav--open" : ""}`} aria-label="Основная навигация">
        {navigation.map(({ label, href }) => <Link key={href} href={href}
          aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
      </nav>
    </div>
  </header>;
}
