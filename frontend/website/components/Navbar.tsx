"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
    { href: "/booking", label: "Booking", emphasized: true },
    { href: "/products", label: "Zaade Sehat Shop", emphasized: true },
    { href: "/#contact", label: "Contact", emphasized: true },
    { href: "/legal", label: "Legal", emphasized: true },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 60);
        handler(); // set initial state on mount
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 bg-forest-deep transition-shadow duration-300 ${
                scrolled ? "shadow-md" : ""
            }`}
        >
            <div className="mx-auto flex max-w-content items-center justify-between px-7 h-[72px]">
                {/* Brand */}
                <Link href="/" className="no-underline hover:no-underline">
                    <span className="font-display text-xl font-semibold tracking-wide text-paper leading-tight">
                        Dr. Hasan Nasir Cheema
                        <small className="block font-body text-[0.65rem] font-medium tracking-[0.08em] uppercase text-paper/75">
                            Consultant Physician
                        </small>
                        <small className="block font-body text-[0.65rem] font-normal tracking-[0.08em] text-paper/75 mt-0.5">
                            MBBS · BMJ · M.Phil · Food &amp; Nutrition
                        </small>
                    </span>
                </Link>

                {/* Desktop nav */}
                <nav
                    className="hidden md:flex items-center gap-2"
                    aria-label="Main navigation"
                >
                    {navLinks.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className={`inline-flex items-center rounded-full px-3 py-2 text-[0.92rem] no-underline transition-colors duration-200 hover:bg-forest-soft hover:text-white hover:no-underline ${
                                l.emphasized
                                    ? "font-semibold text-paper"
                                    : "font-medium text-paper/75"
                            }`}
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile toggle */}
                <button
                    className="md:hidden rounded-lg border border-paper/40 px-3 py-2 text-paper text-sm font-medium transition-colors duration-200 hover:bg-forest-soft hover:text-white"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? "Close" : "Menu"}
                </button>
            </div>

            {/* Mobile nav */}
            {open && (
                <nav
                    className="md:hidden flex flex-col gap-1 px-4 pb-5 pt-2 border-t border-paper/15 bg-forest-deep"
                    aria-label="Mobile navigation"
                >
                    {navLinks.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className={`inline-flex w-fit items-center rounded-full px-3 py-2 text-[0.92rem] no-underline transition-colors duration-200 hover:bg-forest-soft hover:text-white ${
                                l.emphasized
                                    ? "font-semibold text-paper"
                                    : "font-medium text-paper/75"
                            }`}
                            onClick={() => setOpen(false)}
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
}
