import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RouteTransition from "@/components/RouteTransition";
import { clinicJsonLd, SITE_NAME, SITE_URL } from "@/lib/site";

const fraunces = Fraunces({
    subsets: ["latin"],
    weight: ["500", "600"],
    variable: "--font-fraunces",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-inter",
    display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["500", "600"],
    variable: "--font-ibm-plex-mono",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "Consultant Physician in Faisalabad | Dr. Hasan Nasir Cheema",
        template: "%s | Dr. Hasan Nasir Cheema",
    },
    description:
        "Dr. Hasan Nasir Cheema is a consultant physician in Faisalabad with over 15 years of experience in gut health, anxiety and nutrition. Book an online or in-person consultation.",
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        siteName: SITE_NAME,
        locale: "en_PK",
        url: SITE_URL,
        title: "Consultant Physician in Faisalabad | Dr. Hasan Nasir Cheema",
        description:
            "Online and in-person consultations with Dr. Hasan Nasir Cheema, consultant physician in Faisalabad. Appointments are booked and paid for in advance.",
        images: [
            {
                url: "/images/dr-hasan-nasir.jpg",
                width: 1500,
                height: 1500,
                alt: "Dr. Hasan Nasir Cheema, Consultant Physician",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Consultant Physician in Faisalabad | Dr. Hasan Nasir Cheema",
        description:
            "Online and in-person consultations with Dr. Hasan Nasir Cheema, consultant physician in Faisalabad.",
        images: ["/images/dr-hasan-nasir.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "health",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en-PK"
            className={`${fraunces.variable} ${inter.variable} ${ibmPlexMono.variable}`}
        >
            <body className="flex min-h-screen flex-col">
                <script
                    type="application/ld+json"
                    // Structured data is static and contains no user input.
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(clinicJsonLd),
                    }}
                />
                <Navbar />
                <main className="flex-1">
                    <RouteTransition>{children}</RouteTransition>
                </main>
                <Footer />
            </body>
        </html>
    );
}
