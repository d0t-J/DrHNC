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

                {/* Mobile toggle: three bars that morph into a cross */}
                <button
                    className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-paper/40 text-paper transition-colors duration-200 hover:bg-forest-soft hover:text-white active:scale-95"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    aria-controls="mobile-navigation"
                    onClick={() => setOpen((v) => !v)}
                >
                    <span aria-hidden="true" className="relative block h-4 w-5">
                        <span
                            className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-out ${
                                open ? "top-[7px] rotate-45" : "top-0"
                            }`}
                        />
                        <span
                            className={`absolute left-0 top-[7px] block h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
                                open ? "opacity-0" : "opacity-100"
                            }`}
                        />
                        <span
                            className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-out ${
                                open ? "top-[7px] -rotate-45" : "top-[14px]"
                            }`}
                        />
                    </span>
                </button>
            </div>

            {/* Mobile nav: the wrapper animates its own height open and shut */}
            <div
                className={`md:hidden grid overflow-hidden bg-forest-deep transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    open
                        ? "grid-rows-[1fr] border-t border-paper/15 opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <nav
                    id="mobile-navigation"
                    className="min-h-0 overflow-hidden"
                    aria-label="Mobile navigation"
                    aria-hidden={!open}
                >
                    <div className="flex flex-col gap-1 px-4 pb-5 pt-2">
                        {navLinks.map((l, i) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                tabIndex={open ? 0 : -1}
                                style={{
                                    transitionDelay: open
                                        ? `${80 + i * 55}ms`
                                        : "0ms",
                                }}
                                className={`inline-flex w-fit items-center rounded-full px-3 py-2 text-[0.92rem] no-underline transition-all duration-300 ease-out hover:bg-forest-soft hover:text-white ${
                                    open
                                        ? "translate-x-0 opacity-100"
                                        : "-translate-x-2 opacity-0"
                                } ${
                                    l.emphasized
                                        ? "font-semibold text-paper"
                                        : "font-medium text-paper/75"
                                }`}
                                onClick={() => setOpen(false)}
                            >
                                {l.label}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    );
}
