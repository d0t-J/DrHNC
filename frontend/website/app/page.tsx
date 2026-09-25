import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealSection from "@/components/RevealSection";
import {
    EmailIcon,
    FacebookIcon,
    WhatsAppIcon,
    YouTubeIcon,
} from "@/components/SocialIcons";
import SectionDivider from "@/components/SectionDivider";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import {
    CLINIC_PHONE,
    ONLINE_CONSULTATION_PHONE,
    WHATSAPP_URL,
} from "@/lib/contact";

export const metadata: Metadata = {
    title: "Dr. Hasan Nasir Cheema Clinic",
    description:
        "Book online or in-person consultations with Dr. Hasan Nasir Cheema. Visit Zaade Sehat by Dr. Hasan Nasir Cheema for separately branded health and wellness products.",
};

const steps = [
    {
        title: "Choose an appointment",
        body: "Open the online booking page and choose an available date and time.",
    },
    {
        title: "Share your details",
        body: "Enter your contact details and the information requested for your appointment.",
    },
    {
        title: "Confirm with advance payment",
        body: "Complete full advance payment securely online to reserve your consultation.",
    },
    {
        title: "Receive your confirmation",
        body: "You'll receive a booking confirmation with your appointment details.",
    },
];

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61582055819875";
const YOUTUBE_URL = "https://www.youtube.com/@dr.hasannasir9200/";

export default function HomePage() {
    const waLink = WHATSAPP_URL;

    return (
        <>
            <WhatsAppFloatButton href={waLink} targetId="whatsapp-hero-cta" />
            {/* ── Hero + About ────────────────────────────────────────── */}
            <div className="px-7 bg-gradient-to-b from-mist/60 via-mist/20 to-paper pb-4">
                <div className="mx-auto max-w-content">
                    <div className="md:grid md:grid-cols-[1fr_400px] md:gap-12 md:items-start">
                        {/* Hero text */}
                        <div>
                            <div className="pt-14 pb-14 md:pt-18 md:pb-18">
                                <span className="reveal font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep mb-4 inline-block">
                                    Appointment-based consultations
                                </span>
                                <h1 className="reveal reveal-d1 text-[clamp(2.1rem,4.6vw,3.4rem)] font-semibold leading-[1.08] max-w-[16ch] text-balance">
                                    Book your consultation with Dr. Hasan Nasir
                                    Cheema
                                </h1>
                                <p className="reveal reveal-d2 mt-5 max-w-[46ch] text-[1.1rem] text-ink-soft">
                                    Book your consultation online, choose an
                                    available appointment, and pay in advance to
                                    secure your time. Health and wellness
                                    products are available separately from Zaade
                                    Sehat by Dr. Hasan Nasir Cheema.
                                </p>
                                <div className="reveal reveal-d3 mt-8 flex flex-wrap gap-4">
                                    <Link
                                        href="/booking"
                                        className="group inline-flex items-center gap-2 rounded-full bg-honey px-6 py-3.5 text-[0.95rem] font-semibold text-white no-underline shadow-sm transition-colors duration-200 hover:bg-forest-deep hover:text-white hover:shadow-md hover:no-underline active:shadow-inner active:brightness-95"
                                    >
                                        Book Now
                                        <svg
                                            aria-hidden="true"
                                            viewBox="0 0 20 20"
                                            className="h-4 w-4 fill-current transition-transform duration-200 group-hover:translate-x-1"
                                        >
                                            <path d="M10.6 4.3a1 1 0 0 0-1.4 1.4L12.1 9H4a1 1 0 1 0 0 2h8.1l-2.9 3.3a1 1 0 0 0 1.4 1.4l4.6-4.4a1 1 0 0 0 0-1.6l-4.6-4.4Z" />
                                        </svg>
                                    </Link>
                                    <Link
                                        href="/products"
                                        className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-[0.95rem] font-semibold text-ink no-underline transition-colors duration-200 hover:border-forest-deep hover:bg-forest-deep hover:text-white hover:no-underline active:shadow-inner active:brightness-95"
                                    >
                                        Shop Zaade Sehat
                                    </Link>
                                    <a
                                        id="whatsapp-hero-cta"
                                        href={waLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Message Dr. Hasan Nasir Cheema on WhatsApp"
                                        className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-[0.95rem] font-semibold text-forest-deep no-underline shadow-sm transition-colors duration-200 hover:bg-forest-deep hover:text-whatsapp hover:shadow-md hover:no-underline active:shadow-inner active:brightness-95"
                                    >
                                        Message on WhatsApp
                                    </a>
                                </div>

                                {/* Mobile photo — below CTAs, portrait, hidden on md+ */}
                                <div className="md:hidden mt-10 relative rounded-xl overflow-hidden bg-mist aspect-[4/5] max-h-[420px] w-full ring-1 ring-line-soft ring-offset-4 ring-offset-paper">
                                    <Image
                                        src="/images/dr-hasan-nasir.jpg"
                                        alt="Dr. Hasan Nasir Cheema, Consultant Physician"
                                        fill
                                        className="object-cover object-top"
                                        sizes="(max-width: 768px) 100vw"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Photo, desktop only */}
                        <div className="hidden md:block">
                            <div className="reveal reveal-d2 relative mt-16">
                                {/* Soft green glow behind the portrait */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-sage/20 blur-3xl"
                                />
                                <div className="relative rounded-xl overflow-hidden bg-mist aspect-[3/4] max-h-[540px] shadow-lg ring-1 ring-line-soft ring-offset-4 ring-offset-paper">
                                    <Image
                                        src="/images/dr-hasan-nasir.jpg"
                                        alt="Dr. Hasan Nasir Cheema, Consultant Physician"
                                        fill
                                        className="object-cover object-top"
                                        priority
                                        sizes="400px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Full-width introduction below the hero */}
                    <RevealSection
                        as="div"
                        id="about"
                        className="border-t border-line-soft py-14 md:py-18"
                    >
                        <div className="grid md:grid-cols-[200px_1fr] gap-10 items-start">
                            <div>
                                <span className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep">
                                    About
                                </span>
                                <h2 className="mt-3 text-[clamp(1.4rem,2.6vw,1.8rem)] max-w-[18ch] font-semibold leading-snug">
                                    Healing through expertise,
                                    <br className="hidden md:block" /> one
                                    patient at a time
                                </h2>
                            </div>
                            <div>
                                <p className="flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[0.8rem] font-semibold tracking-[0.1em] uppercase text-sage-deep mb-6">
                                    <span>MBBS (King Edward)</span>
                                    <span aria-hidden="true">·</span>
                                    <span>BMJ England</span>
                                    <span aria-hidden="true">·</span>
                                    <span>M.Phil Human Biochem</span>
                                    <span aria-hidden="true">·</span>
                                    <span>Food and Nutrition Expert</span>
                                </p>
                                <div className="space-y-4 text-ink-soft text-[1.02rem]">
                                    <p className="drop-cap">
                                        Dr. Hasan Nasir Cheema is a General
                                        Physician with over 15 years of clinical
                                        experience, with a special interest in
                                        gut and brain health, anxiety, and
                                        depression management. His approach to
                                        healthcare goes beyond treating
                                        symptoms, focusing on identifying
                                        underlying factors and helping patients
                                        develop sustainable habits around
                                        nutrition, movement, sleep, and
                                        lifestyle.
                                    </p>
                                    <p>
                                        Dr. Cheema believes that lasting health
                                        and wellbeing are built through healthy
                                        nutrition and balanced eating combined
                                        with regular physical activity and
                                        fitness. To support this holistic
                                        approach, he has dedicated nutritional
                                        and psychological support services
                                        through a specialized team, enabling
                                        patients to receive structured guidance
                                        alongside their medical care.
                                    </p>
                                    <p>
                                        A committed fitness enthusiast himself,
                                        Dr. Cheema emphasizes practical,
                                        evidence-informed guidance on healthy
                                        eating, nutrition, exercise, and
                                        physical activity as essential
                                        components of disease prevention and
                                        long-term wellbeing. Through his
                                        clinical practice and health education,
                                        he aims to help people understand their
                                        health better, make informed decisions,
                                        and build sustainable habits for a
                                        healthier life.
                                    </p>
                                    <p>
                                        Every appointment is booked online in
                                        advance, ensuring that your consultation
                                        time is reserved before you arrive.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </RevealSection>
                </div>
            </div>

            <SectionDivider />

            {/* ── How it works ─────────────────────────────────────────── */}
            <RevealSection
                id="how-it-works"
                className="px-7 py-14 md:py-18 bg-paper-sunken"
            >
                <div className="mx-auto max-w-content">
                    <span className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep">
                        How booking works
                    </span>
                    <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.1rem)] max-w-[22ch]">
                        From online booking to confirmed appointment
                    </h2>
                    <ol className="mt-9 list-none p-0 m-0">
                        {steps.map((step, i) => (
                            <li
                                key={i}
                                className="relative grid grid-cols-[44px_1fr] gap-5 pb-8 last:pb-0"
                            >
                                {/* Connector line, hidden on the last step */}
                                {i < steps.length - 1 && (
                                    <span
                                        aria-hidden="true"
                                        className="absolute left-[15px] top-8 bottom-0 w-px bg-sage/30"
                                    />
                                )}
                                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-sage font-mono text-[0.78rem] font-semibold text-white">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <div className="pt-1">
                                    <h3 className="font-body text-[1.05rem] font-semibold text-ink">
                                        {step.title}
                                    </h3>
                                    <p className="mt-1.5 text-[0.96rem] text-ink-soft">
                                        {step.body}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </RevealSection>

            <SectionDivider />

            {/* ── Contact ──────────────────────────────────────────────── */}
            <RevealSection
                id="contact"
                className="px-7 py-14 md:py-18 bg-paper"
            >
                <div className="mx-auto max-w-content">
                    <span className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep">
                        Contact
                    </span>
                    <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.1rem)]">
                        Find us
                    </h2>

                    <div className="mt-8 grid gap-7 md:grid-cols-3">
                        {/* Wide column: address, then the map */}
                        <div className="flex flex-col gap-7 md:col-span-2">
                            <div className="card-hover rounded-xl border border-line-soft bg-paper-raised p-5 shadow-sm hover:shadow-md">
                                <p className="font-mono text-[0.75rem] tracking-[0.08em] uppercase text-ink-soft">
                                    Address
                                </p>
                                <p className="mt-1.5 text-[1.02rem] text-ink">
                                    Alharam Town, near Marahab Mart II, East
                                    Canal Road, Faisalabad
                                </p>
                            </div>
                            <div className="flex-1 overflow-hidden rounded-xl border border-line-soft shadow-sm">
                                <iframe
                                    src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s31.4603588,73.1798694!6i17!3m1!1sen!5m1!1sen"
                                    width="100%"
                                    height="100%"
                                    className="block min-h-[320px] w-full"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Dr. Hasan Nasir Cheema consultation location"
                                />
                            </div>
                        </div>

                        {/* Narrow column: the two phone lines, then email */}
                        <div className="flex flex-col gap-7">
                            <div className="card-hover rounded-xl border border-line-soft bg-paper-raised p-5 shadow-sm hover:shadow-md">
                                <p className="font-mono text-[0.75rem] tracking-[0.08em] uppercase text-ink-soft">
                                    Phone
                                </p>
                                <div className="mt-3 space-y-4">
                                    <div>
                                        <p className="text-[0.85rem] font-semibold text-ink">
                                            Online consultation
                                        </p>
                                        <a
                                            href={waLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-1 block text-[1.02rem] tabular-nums text-sage-deep"
                                        >
                                            {ONLINE_CONSULTATION_PHONE.display}
                                        </a>
                                        <p className="mt-1 text-[0.85rem] tabular-nums text-ink-soft">
                                            WhatsApp or call · 12:00 PM–5:00 PM
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-[0.85rem] font-semibold text-ink">
                                            Clinic · in-person visits
                                        </p>
                                        <a
                                            href={CLINIC_PHONE.whatsapp}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-1 block text-[1.02rem] tabular-nums text-sage-deep"
                                        >
                                            {CLINIC_PHONE.display}
                                        </a>
                                        <p className="mt-1 text-[0.85rem] tabular-nums text-ink-soft">
                                            WhatsApp or call · 6:00 PM–9:00 PM
                                        </p>
                                    </div>
                                </div>
                                <p className="mt-4 border-t border-line-soft pt-3 text-[0.85rem] text-ink-soft">
                                    These are separate lines. For online
                                    consultations and general questions, use the
                                    online consultation number. Call the clinic
                                    number only if you plan to visit the clinic.
                                </p>
                            </div>
                            <div className="card-hover rounded-xl border border-line-soft bg-paper-raised p-5 shadow-sm hover:shadow-md">
                                <p className="font-mono text-[0.75rem] tracking-[0.08em] uppercase text-ink-soft">
                                    Email
                                </p>
                                <a
                                    href="mailto:drhasannasir12@gmail.com"
                                    className="mt-1.5 block break-words text-[1.02rem] text-sage-deep"
                                >
                                    drhasannasir12@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social links */}
                    <div className="mt-8 flex items-center gap-3">
                        <span className="font-mono text-[0.75rem] uppercase tracking-[0.08em] text-ink-soft mr-1">
                            Connect
                        </span>
                        <FacebookIcon
                            href={FACEBOOK_URL}
                            className="p-2 rounded-lg hover:bg-mist"
                        />
                        <YouTubeIcon
                            href={YOUTUBE_URL}
                            className="p-2 rounded-lg hover:bg-mist"
                        />
                        <WhatsAppIcon
                            href={waLink}
                            className="p-2 rounded-lg hover:bg-mist"
                        />
                        <EmailIcon
                            href="mailto:drhasannasir12@gmail.com"
                            className="p-2 rounded-lg hover:bg-mist"
                        />
                    </div>
                </div>
            </RevealSection>
        </>
    );
}
