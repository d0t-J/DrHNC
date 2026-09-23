/** Hairline rule between sections, aligned to the content width. */
export default function SectionDivider() {
    return (
        <div aria-hidden="true" className="mx-auto max-w-content px-7">
            <span className="block h-px bg-line-soft" />
        </div>
    );
}
