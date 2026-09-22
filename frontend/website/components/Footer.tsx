import Link from "next/link";
import {
    EmailIcon,
    FacebookIcon,
    WhatsAppIcon,
    YouTubeIcon,
} from "@/components/SocialIcons";
import { WHATSAPP_URL } from "@/lib/contact";

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

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61582055819875";
const YOUTUBE_URL = "https://www.youtube.com/@dr.hasannasir9200/";
const EMAIL_ADDRESS = "drhasannasir12@gmail.com";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-ink text-mist mt-6">
            <div className="mx-auto max-w-content px-7 pt-12 pb-8">
                <div className="flex flex-wrap justify-between gap-8">
                    {/* Left: legal identity + social */}
                    <div className="space-y-4">
                        <p className="text-sm text-mist/70 max-w-[38ch]">
                            Consultations with Dr. Hasan Nasir Cheema &middot;
                            Street 4, Chak 199, Gattwala, East Canal Road,
                            Faisalabad
                        </p>
                        <p className="text-sm text-mist/70 max-w-[38ch]">
                            Health and wellness products are available separately
                            from{" "}
                            <a
                                href="https://shop.drhasannasir.com/"
                                className="text-mist hover:text-white underline underline-offset-2"
                            >
                                Zaade Sehat by Dr Hasan Nasir
                            </a>
                            .
                        </p>
                        <div className="flex items-center gap-1">
                            <FacebookIcon
                                href={FACEBOOK_URL}
                                className="p-2 rounded-lg text-mist/60 hover:bg-white/10"
                            />
                            <YouTubeIcon
                                href={YOUTUBE_URL}
                                className="p-2 rounded-lg text-mist/60 hover:bg-white/10"
                            />
                            <WhatsAppIcon
                                href={WHATSAPP_URL}
                                className="p-2 rounded-lg text-mist/60 hover:bg-white/10"
                            />
                            <EmailIcon
                                href={`mailto:${EMAIL_ADDRESS}`}
                                className="p-2 rounded-lg text-mist/60 hover:bg-white/10"
                            />
                        </div>
                    </div>

                    {/* Right: policy links */}
                    <nav
                        className="flex max-w-[42rem] flex-col gap-3 sm:min-w-0 sm:flex-1 sm:flex-row sm:flex-wrap sm:justify-end sm:gap-x-5 sm:gap-y-3 sm:items-start"
                        aria-label="Policy links"
                    >
                        {policyLinks.map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className="text-[0.88rem] text-mist/70 no-underline hover:text-white transition-colors"
                            >
                                {l.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <p className="mt-7 border-t border-mist/15 pt-4 text-[0.78rem] text-mist/50">
                    &copy; {year} Dr. Hasan Nasir Cheema. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
