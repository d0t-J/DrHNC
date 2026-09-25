/** Shown while a route's content is still on its way. */
export default function Loading() {
    return (
        <section className="px-7 py-14 md:py-18" aria-busy="true">
            <div className="mx-auto max-w-content">
                <span className="sr-only">Loading</span>
                <div className="skeleton h-3 w-40 rounded-full" />
                <div className="skeleton mt-5 h-10 w-[min(28ch,100%)] rounded-lg" />
                <div className="skeleton mt-3 h-10 w-[min(20ch,100%)] rounded-lg" />
                <div className="mt-8 space-y-3">
                    <div className="skeleton h-4 w-full max-w-[46ch] rounded-full" />
                    <div className="skeleton h-4 w-full max-w-[42ch] rounded-full" />
                    <div className="skeleton h-4 w-full max-w-[38ch] rounded-full" />
                </div>
                <div className="mt-9 grid gap-7 sm:grid-cols-2">
                    <div className="skeleton h-28 rounded-xl" />
                    <div className="skeleton h-28 rounded-xl" />
                </div>
            </div>
        </section>
    );
}
