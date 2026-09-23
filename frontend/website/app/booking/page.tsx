import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book a Consultation",
    description:
        "Book an online or in-person consultation with Dr. Hasan Nasir Cheema.",
};

export default function BookingPage() {
    return (
        <section className="px-7 py-16 md:py-20">
            <div className="mx-auto max-w-[720px]">
                <span className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep">
                    Consultations
                </span>
                <h1 className="mt-3 text-[clamp(1.8rem,4vw,2.6rem)] font-semibold">
                    Book a consultation with Dr. Hasan Nasir Cheema
                </h1>
                <p className="mt-4 max-w-[58ch] text-ink-soft">
                    Online and in-person consultations are provided by Dr. Hasan
                    Nasir Cheema. Continue to the appointment portal to choose
                    an available time and submit your booking details.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <a
                        href="https://shop.drhasannasir.com/book-an-appointment/"
                        className="inline-flex items-center rounded-full bg-honey px-6 py-3.5 text-[0.95rem] font-semibold text-white no-underline shadow-sm transition-colors duration-200 hover:bg-forest-deep hover:text-white hover:shadow-md hover:no-underline"
                    >
                        Continue to appointment booking
                    </a>
                    <a
                        href="https://shop.drhasannasir.com/"
                        className="inline-flex items-center rounded-full border border-line px-6 py-3.5 text-[0.95rem] font-semibold text-ink no-underline transition-colors duration-200 hover:border-forest-deep hover:bg-forest-deep hover:text-white hover:no-underline"
                    >
                        Shop Zaade Sehat
                    </a>
                </div>

                <p className="mt-8 rounded-xl border border-line-soft bg-mist/30 px-5 py-4 text-[0.94rem] text-ink-soft">
                    Zaade Sehat by Dr. Hasan Nasir Cheema is the separate online
                    retail shop for health and wellness products. Purchasing a
                    product does not book a consultation.
                </p>
            </div>
        </section>
    );
}
