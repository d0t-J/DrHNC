import Link from "next/link";
import {
    EmailIcon,
    FacebookIcon,
    WhatsAppIcon,
    YouTubeIcon,
} from "@/components/SocialIcons";
import {
    CLINIC_PHONE,
    ONLINE_CONSULTATION_PHONE,
    WHATSAPP_URL,
} from "@/lib/contact";
import { CLINIC_ADDRESS, SOCIAL_PROFILES } from "@/lib/site";

const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/booking", label: "Book an Appointment" },
    { href: "/products", label: "Zaade Sehat Shop" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
];

const policyLinks = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms & Conditions" },
    {
        href: "/refund-cancellation-policy",
        label: "Returns & Refunds",
    },
    { href: "/shipping-delivery-policy", label: "Shipping & Delivery" },
    { href: "/health-product-disclaimer", label: "Health Disclaimer" },
    { href: "/cookie-policy", label: "Cookie Policy" },
];

const [FACEBOOK_URL, YOUTUBE_URL] = SOCIAL_PROFILES;
const EMAIL_ADDRESS = "drhasannasir12@gmail.com";

const headingClass =
    "font-mono text-[0.72rem] uppercase tracking-[0.12em] text-paper/60";
const linkClass =
    "text-[0.88rem] text-paper/70 no-underline transition-colors hover:text-white";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-6 border-t-4 border-sage bg-forest-deep text-paper">
            <div className="mx-auto max-w-content px-7 pb-8 pt-12">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
                    {/* Brand, clinic address and the shop note */}
                    <div className="space-y-4">
                        <p className="max-w-[38ch] text-sm text-paper/70">
                            Consultations with Dr. Hasan Nasir Cheema,
                            Consultant Physician, focused on gut and brain
                            health, nutrition and long-term wellbeing.
                        </p>
                        <div>
                            <p className={headingClass}>Clinic Address</p>
                            <p className="mt-2 max-w-[32ch] text-sm text-paper/70">
                                {CLINIC_ADDRESS.street},{" "}
                                {CLINIC_ADDRESS.city}
                            </p>
                        </div>
                        <p className="max-w-[38ch] text-sm text-paper/70">
                            Health and wellness products are available
                            separately from{" "}
                            <Link
                                href="/products"
                                className="text-paper underline underline-offset-2 hover:text-white"
                            >
                                Zaade Sehat by Dr. Hasan Nasir Cheema
                            </Link>
                            .
                        </p>
                    </div>

                    {/* Quick links */}
                    <nav aria-label="Quick links">
                        <p className={headingClass}>Quick Links</p>
                        <ul className="mt-3 space-y-2.5 list-none p-0">
                            {quickLinks.map((l) => (
                                <li key={l.href}>
                                    <Link href={l.href} className={linkClass}>
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Policies */}
                    <nav aria-label="Policy links">
                        <p className={headingClass}>Policies</p>
                        <ul className="mt-3 space-y-2.5 list-none p-0">
                            {policyLinks.map((l) => (
                                <li key={l.href}>
                                    <Link href={l.href} className={linkClass}>
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Socials, then contact details */}
                    <div className="space-y-6">
                        <div>
                            <p className={headingClass}>Socials</p>
                            <div className="mt-2 flex items-center gap-1">
                                <FacebookIcon
                                    href={FACEBOOK_URL}
                                    className="rounded-lg p-2 text-paper/70 transition-colors hover:bg-white/10 hover:text-white"
                                />
                                <YouTubeIcon
                                    href={YOUTUBE_URL}
                                    className="rounded-lg p-2 text-paper/70 transition-colors hover:bg-white/10 hover:text-white"
                                />
                                <WhatsAppIcon
                                    href={WHATSAPP_URL}
                                    className="rounded-lg p-2 text-paper/70 transition-colors hover:bg-white/10 hover:text-white"
                                />
                                <EmailIcon
                                    href={`mailto:${EMAIL_ADDRESS}`}
                                    className="rounded-lg p-2 text-paper/70 transition-colors hover:bg-white/10 hover:text-white"
                                />
                            </div>
                        </div>
                        <div>
                            <p className={headingClass}>Contact</p>
                            <ul className="mt-3 space-y-2.5 list-none p-0 text-[0.88rem]">
                                <li>
                                    <span className="text-paper/50">
                                        Clinic:{" "}
                                    </span>
                                    <a
                                        href={CLINIC_PHONE.whatsapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`tabular-nums ${linkClass}`}
                                    >
                                        {CLINIC_PHONE.display}
                                    </a>
                                </li>
                                <li>
                                    <span className="text-paper/50">
                                        Booking:{" "}
                                    </span>
                                    <a
                                        href={
                                            ONLINE_CONSULTATION_PHONE.whatsapp
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`tabular-nums ${linkClass}`}
                                    >
                                        {ONLINE_CONSULTATION_PHONE.display}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`mailto:${EMAIL_ADDRESS}`}
                                        className={`break-words ${linkClass}`}
                                    >
                                        {EMAIL_ADDRESS}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <p className="mt-10 border-t border-paper/20 pt-4 text-[0.78rem] text-paper/60">
                    &copy; {year} Dr. Hasan Nasir Cheema. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
