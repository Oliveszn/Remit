const footerLinks = {
  company: [
    {
      label: "Campus Ambassador",
      href: "https://www.lint.finance/campus-ambassadors",
    },
    { label: "Blog", href: "https://www.lint.finance/blog" },
    { label: "Referral Program", href: "https://www.lint.finance/referrals" },
  ],
  legal: [
    {
      label: "Terms & Conditions",
      href: "https://www.lint.finance/terms-of-use",
    },
    {
      label: "Privacy Policy",
      href: "https://www.lint.finance/privacy-policy",
    },
  ],
  support: [
    { label: "WhatsApp", href: "https://wa.me/2348130695389" },
    { label: "growth@remit.finance", href: "mailto:growth@lint.finance" },
  ],
};

function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-lg font-bold text-white mb-4 tracking-tight">
        {heading}
      </h3>
      <ul className="space-y-3" role="list">
        {links.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className="text-base text-white hover:text-gray-400 transition-colors duration-150"
              {...(href.startsWith("http") && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="border-t border-zinc-200 bg-[#1B1B24] mt-auto"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — Brand + address */}
          <div className="space-y-5">
            {/* Logo */}
            <a
              href="/"
              className="inline-flex items-center gap-2 group"
              aria-label="Remit home"
            >
              {/* Icon mark */}
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white"
                aria-hidden="true"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {/* Arrow-right-through-circle — a remittance/transfer mark */}
                  <path
                    d="M2 8h12M10 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-gray-300 transition-colors">
                Remit
              </span>
            </a>

            {/* Address */}
            <address className="not-italic space-y-1">
              <p className="text-sm text-white leading-relaxed">
                123 Finance Street
                <br />
                Lagos, Nigeria
              </p>
            </address>
          </div>

          {/* Col 2 — Company */}
          <FooterColumn heading="Company" links={footerLinks.company} />

          {/* Col 3 — Legal */}
          <FooterColumn heading="Legal" links={footerLinks.legal} />

          {/* Col 4 — Support */}
          <FooterColumn heading="Support" links={footerLinks.support} />
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-zinc-200 pt-8">
          <p className="text-xs text-white">
            &copy; {new Date().getFullYear()} Remit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
