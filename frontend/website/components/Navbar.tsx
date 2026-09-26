"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
    { href: "/", label: "Home", highlight: false },
    { href: "/booking", label: "Booking", highlight: true },
    { href: "/products", label: "Zaade Sehat Shop", highlight: true },
    { href: "/#contact", label: "Contact", highlight: false },
    { href: "/legal", label: "Legal", highlight: true },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 60);
        handler(); // set initial state on mount
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    // Hold the page still behind the open drawer, and close it on Escape.
    useEffect(() => {
        if (!open) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKey);
        };
    }, [open]);

    // Home and in-page anchors carry no current-page highlight.
    const isActive = (link: (typeof navLinks)[number]) =>
        link.highlight && pathname.startsWith(link.href);

    return (
        <header
            className={`sticky top-0 z-50 bg-forest-deep transition-shadow duration-300 ${
                scrolled ? "shadow-md" : ""
            }`}
        >
            <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-7 h-[72px]">
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

                {/* Desktop nav, centred like the shop */}
                <nav
                    className="hidden md:flex flex-1 items-center justify-center gap-1"
                    aria-label="Main navigation"
                >
                    {navLinks.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            aria-current={isActive(l) ? "page" : undefined}
                            className={`inline-flex items-center rounded-lg px-4 py-2 text-[0.94rem] font-normal no-underline transition-colors duration-200 hover:no-underline ${
                                isActive(l)
                                    ? "bg-paper text-forest-deep"
                                    : "text-white hover:bg-paper/15"
                            }`}
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile toggle: solid honey square, as on the shop */}
                <button
                    className="md:hidden inline-flex h-8 w-8 items-center justify-center bg-honey text-white transition-colors duration-200 hover:bg-honey-deep active:scale-95"
                    aria-label="Open menu"
                    aria-expanded={open}
                    aria-controls="mobile-drawer"
                    onClick={() => setOpen(true)}
                >
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 448 512"
                        className="h-4 w-4 fill-current"
                    >
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                </button>
            </div>

            {/* Dimmed backdrop behind the drawer */}
            <div
                aria-hidden="true"
                onClick={() => setOpen(false)}
                className={`md:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-500 ${
                    open ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
            />

            {/* Drawer, sliding in from the left */}
            <div
                id="mobile-drawer"
                role="dialog"
                aria-modal="true"
                aria-label="Site menu"
                aria-hidden={!open}
                className={`md:hidden fixed top-0 z-50 h-full w-[min(360px,88vw)] bg-forest-deep shadow-2xl transition-[left] duration-500 ease-[cubic-bezier(0.6,0.1,0.68,0.53)] ${
                    open ? "left-0" : "left-[-110%]"
                }`}
            >
                <div className="flex items-start justify-between gap-4 px-6 pb-5 pt-6">
                    <Link
                        href="/"
                        onClick={() => setOpen(false)}
                        className="no-underline hover:no-underline"
                    >
                        <span className="font-display text-lg font-semibold tracking-wide text-paper leading-tight">
                            Dr. Hasan Nasir Cheema
                            <small className="block font-body text-[0.62rem] font-medium tracking-[0.08em] uppercase text-paper/75">
                                Consultant Physician
                            </small>
                        </span>
                    </Link>
                    <button
                        onClick={() => setOpen(false)}
                        aria-label="Close menu"
                        className="inline-flex h-9 w-9 shrink-0 items-center justify-center bg-paper text-forest-deep transition-colors duration-200 hover:bg-white active:scale-95"
                    >
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 384 512"
                            className="h-3.5 w-3.5 fill-current"
                        >
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                        </svg>
                    </button>
                </div>

                <nav aria-label="Mobile navigation" className="flex flex-col">
                    {navLinks.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            tabIndex={open ? 0 : -1}
                            aria-current={isActive(l) ? "page" : undefined}
                            onClick={() => setOpen(false)}
                            className={`block px-6 py-4 text-[0.95rem] no-underline transition-colors duration-200 hover:no-underline ${
                                isActive(l)
                                    ? "bg-paper text-forest-deep"
                                    : "text-white hover:bg-white/10"
                            }`}
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
