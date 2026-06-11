export default function SectionWhatWeDo() {
  return (
    <section
      id="section-2"
      className="section-what-we-do bg-white dark:bg-gray-900 flex justify-center"
    >
      <div className="section-2-inner w-full max-w-[1440px] flex flex-col md:grid md:grid-cols-[minmax(140px,22%)_1px_1fr] px-4 md:pl-24">
        {/* Label haut gauche */}
        <div className="pt-1 pb-4 md:pb-0">
          <p className="section-2-label text-sm text-gray-400 dark:text-gray-500 font-normal uppercase tracking-[0.25em]">
            What we do
          </p>
        </div>

        {/* Ligne verticale / horizontale */}
        <div className="section-2-divider hidden md:block bg-neutral-200 dark:bg-gray-700" />
        <div className="section-2-divider md:hidden h-px w-full bg-neutral-200 dark:bg-gray-700 mb-4" />

        {/* Headline décalé centre-droit */}
        <div className="flex items-center pl-0 md:pl-10 lg:pl-20 xl:pl-28 pr-4 md:pr-24">
          <h2 className="section-2-headline">
            <span className="section-2-headline-text block dark:text-gray-100">
              No studio, No crew.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
