import type { Metadata } from "next";
import Link from "next/link";
import SectionDivider from "@/components/SectionDivider";
import { ONLINE_CONSULTATION_PHONE, WHATSAPP_URL } from "@/lib/contact";

export const metadata: Metadata = {
    title: "Page not found",
    description:
        "This page does not exist. Return to the home page or book a consultation with Dr. Hasan Nasir Cheema.",
};

export default function NotFound() {
    return (
        <section className="px-7 py-14 md:py-18">
            <div className="mx-auto max-w-[720px] text-center">
                <span className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep">
                    Error 404
                </span>
                <h1 className="mt-3 text-[clamp(1.8rem,4vw,2.6rem)] font-semibold">
                    We could not find that page
                </h1>
                <p className="mx-auto mt-4 max-w-[46ch] text-ink-soft">
                    The page may have moved, or the address may be mistyped. Use
                    the links below, or message the online consultation line and
                    we will point you the right way.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center rounded-full bg-forest-deep px-6 py-3.5 text-[0.95rem] font-semibold text-white no-underline shadow-sm transition-colors duration-200 hover:bg-forest-soft hover:shadow-md hover:no-underline active:shadow-inner active:brightness-95"
                    >
                        Back to home
                    </Link>
                    <Link
                        href="/booking"
                        className="inline-flex items-center rounded-full border border-line px-6 py-3.5 text-[0.95rem] font-semibold text-ink no-underline transition-colors duration-200 hover:border-forest-deep hover:bg-forest-deep hover:text-white hover:no-underline active:shadow-inner active:brightness-95"
                    >
                        Book a consultation
                    </Link>
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full bg-whatsapp px-6 py-3.5 text-[0.95rem] font-semibold text-forest-deep no-underline shadow-sm transition-colors duration-200 hover:bg-forest-deep hover:text-whatsapp hover:shadow-md hover:no-underline active:shadow-inner active:brightness-95"
                    >
                        Message on WhatsApp
                    </a>
                </div>

                <div className="mt-12">
                    <SectionDivider />
                </div>

                <p className="mt-8 text-[0.92rem] text-ink-soft">
                    Online consultation ·{" "}
                    <a
                        href={ONLINE_CONSULTATION_PHONE.tel}
                        className="tabular-nums text-sage-deep"
                    >
                        {ONLINE_CONSULTATION_PHONE.display}
                    </a>
                </p>
            </div>
        </section>
    );
}
