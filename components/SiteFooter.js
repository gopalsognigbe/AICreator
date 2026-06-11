const COL1_MAIN = ["Product Shots", "AI Videos"];
const COL1_SECONDARY = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

const COL2_MAIN = ["Features", "Pricing"];
const COL2_SECONDARY = ["Instagram", "Contact"];

function FooterLink({ href, children, className }) {
  return (
    <a href={href} className={`block transition-colors duration-200 ${className}`}>
      {children}
    </a>
  );
}

function LinkColumn({ mainLinks, secondaryLinks }) {
  return (
    <div>
      <div className="flex flex-col gap-3">
        {mainLinks.map((label) => (
          <FooterLink
            key={label}
            href="#"
            className="text-sm text-black dark:text-white font-medium hover:text-gray-500 dark:hover:text-gray-400"
          >
            {label}
          </FooterLink>
        ))}
      </div>
      <div className="flex flex-col gap-3 mt-6">
        {secondaryLinks.map((label) => (
          <FooterLink
            key={label}
            href="#"
            className="text-sm text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
          >
            {label}
          </FooterLink>
        ))}
      </div>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="site-footer bg-gray-100 dark:bg-gray-800 rounded-t-3xl px-4 md:px-12 py-16 mt-8">
      <div className="max-w-[1440px] mx-auto">
        {/* Partie haute */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black dark:bg-white rounded-md flex items-center justify-center shrink-0">
              <span className="text-white dark:text-black text-sm font-bold">
                AI
              </span>
            </div>
            <span className="text-3xl font-semibold text-black dark:text-white">
              AICreator
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
            <LinkColumn mainLinks={COL1_MAIN} secondaryLinks={COL1_SECONDARY} />
            <LinkColumn mainLinks={COL2_MAIN} secondaryLinks={COL2_SECONDARY} />
          </div>
        </div>

        {/* Partie basse */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-400 dark:text-gray-500 m-0">
            © 2026, AICreator ltd. UK, London. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500 m-0">
            Registered in England &amp; Wales No: 13044361
          </p>
        </div>
      </div>
    </footer>
  );
}
