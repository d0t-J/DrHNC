/**
 * Chrome shared by the policy pages: a reading-progress bar and a sticky label
 * naming the policy being read. Both are CSS only, so no JavaScript ships.
 */
export default function PolicyChrome({ label }: { label: string }) {
    return (
        <>
            <div aria-hidden="true" className="scroll-progress print:hidden" />
            <div className="sticky top-[72px] z-40 border-b border-line-soft bg-paper/90 backdrop-blur-sm print:hidden">
                <p className="mx-auto max-w-content px-7 py-2 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-soft">
                    {label}
                </p>
            </div>
        </>
    );
}
