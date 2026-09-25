"use client";

import { usePathname } from "next/navigation";

/**
 * Fades each route in. The key makes React swap the subtree on navigation,
 * which restarts the CSS animation. No animation library involved.
 */
export default function RouteTransition({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <div key={pathname} className="route-fade">
            {children}
        </div>
    );
}
