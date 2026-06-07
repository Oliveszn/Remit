import { footerLinks } from "@/config/footer";
import { Logo } from "./Logo";
import { FooterColumn } from "./Footer/FooterColumn";

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
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — Brand + address */}
          <div className="space-y-5">
            {/* Logo */}
            <Logo />

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
