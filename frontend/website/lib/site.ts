// Single source of truth for site-wide values used by metadata, the sitemap
// and the structured data.

import { CLINIC_PHONE, ONLINE_CONSULTATION_PHONE } from "@/lib/contact";

export const SITE_URL = "https://drhasannasir.com";

export const SITE_NAME = "Dr. Hasan Nasir Cheema";

export const SHOP_URL = "https://shop.drhasannasir.com/";

export const CLINIC_ADDRESS = {
    street: "Alharam Town, near Marahab Mart II, East Canal Road",
    city: "Faisalabad",
    region: "Punjab",
    country: "PK",
};

// Coordinates of the clinic pin used by the map embed.
export const CLINIC_GEO = { lat: 31.4603588, lng: 73.1798694 };

export const SOCIAL_PROFILES = [
    "https://www.facebook.com/profile.php?id=61582055819875",
    "https://www.youtube.com/@dr.hasannasir9200/",
];

/** Structured data describing the practice, for search engines. */
export const clinicJsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${SITE_URL}/#clinic`,
    name: "Dr. Hasan Nasir Cheema Clinic",
    url: SITE_URL,
    image: `${SITE_URL}/images/dr-hasan-nasir.jpg`,
    telephone: ONLINE_CONSULTATION_PHONE.display,
    email: "drhasannasir12@gmail.com",
    medicalSpecialty: ["PrimaryCare", "Nutrition", "Psychiatric"],
    address: {
        "@type": "PostalAddress",
        streetAddress: CLINIC_ADDRESS.street,
        addressLocality: CLINIC_ADDRESS.city,
        addressRegion: CLINIC_ADDRESS.region,
        addressCountry: CLINIC_ADDRESS.country,
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: CLINIC_GEO.lat,
        longitude: CLINIC_GEO.lng,
    },
    contactPoint: [
        {
            "@type": "ContactPoint",
            contactType: "online consultation",
            telephone: ONLINE_CONSULTATION_PHONE.display,
            availableLanguage: ["en", "ur"],
        },
        {
            "@type": "ContactPoint",
            contactType: "clinic",
            telephone: CLINIC_PHONE.display,
            availableLanguage: ["en", "ur"],
        },
    ],
    founder: {
        "@type": "Person",
        name: "Dr. Hasan Nasir Cheema",
        jobTitle: "Consultant Physician",
        hasCredential: [
            "MBBS (King Edward)",
            "BMJ England",
            "M.Phil Human Biochemistry",
        ],
    },
    sameAs: SOCIAL_PROFILES,
};
