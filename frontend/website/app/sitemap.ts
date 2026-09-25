import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** Routes listed for search engines, most important first. */
const routes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/booking", priority: 0.9 },
    { path: "/legal", priority: 0.4 },
    { path: "/privacy-policy", priority: 0.3 },
    { path: "/terms-of-service", priority: 0.3 },
    { path: "/refund-cancellation-policy", priority: 0.3 },
    { path: "/shipping-delivery-policy", priority: 0.3 },
    { path: "/health-product-disclaimer", priority: 0.3 },
    { path: "/cookie-policy", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return routes.map(({ path, priority }) => ({
        url: `${SITE_URL}${path}`,
        lastModified,
        changeFrequency: priority >= 0.9 ? "monthly" : "yearly",
        priority,
    }));
}
