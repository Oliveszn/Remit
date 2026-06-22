import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Logo } from "./Logo";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { dropdownData, navLinks } from "@/config/navigation";
import { DesktopDropdown } from "./Navbar/DesktopDropdown";
import { MobileAccordion } from "./Navbar/MobileAccordion";
import { useMobileMenuAnimation } from "@/hooks/useMobileMenuNavigation";
import { NavAuthButtons } from "./Navbar/NavAuthButton";
import { NavTabs } from "./Navbar/NavTabs";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handler = () => setActiveDropdown(null);
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const { drawerRef, overlayRef, itemsRef, openMenu, closeMenu } =
    useMobileMenuAnimation(setMenuOpen);
  const toggleAccordion = (label: string) =>
    setOpenAccordion((prev) => (prev === label ? null : label));

  return (
    <>
      {/* Sticky bar */}
      <header
        data-navbar
        className="
          sticky top-0 z-40
         bg-main-foreground backdrop-blur-md
        "
        role="banner"
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto max-w-7xl px-6 lg:px-8 py-4 flex items-center justify-between"
        >
          {/* Col 1 — Logo + Tabs */}
          <Logo />
          <div className="hidden md:flex items-center">
            <NavTabs />
          </div>

          {/* Col 2 — Links (desktop only) */}
          <ul
            className="hidden md:flex items-center gap-8"
            role="list"
            aria-label="Site links"
          >
            {navLinks.map(({ label, href, external, hasDropdown }) => (
              <li
                key={label}
                className="relative"
                onMouseEnter={() => hasDropdown && setActiveDropdown(label)}
                onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  data-nav-light
                  href={href}
                  className="flex items-center gap-1 text-base font-semibold duration-150 group"
                  style={{ color: "#ffffff" }}
                  {...(external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  aria-haspopup={hasDropdown ? "true" : undefined}
                  aria-expanded={
                    hasDropdown ? activeDropdown === label : undefined
                  }
                >
                  {label}

                  {hasDropdown && (
                    <HugeiconsIcon
                      icon={ArrowDown01Icon}
                      size={16}
                      className="
                      transition-transform duration-200
                      group-hover:rotate-180
                      "
                    />
                  )}
                </a>

                {hasDropdown && dropdownData[label] && (
                  <DesktopDropdown
                    label={label}
                    items={dropdownData[label]}
                    visible={activeDropdown === label}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Col 3 — Auth buttons (desktop only) */}
          <NavAuthButtons />

          {/* Hamburger (mobile only) */}
          <Button
            className="md:hidden bg-transparent flex flex-col justify-center items-center gap-[5px] w-9 h-9 rounded-md hover:bg-zinc-100 transition-colors"
            onClick={openMenu}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="block w-5 h-[1.5px] bg-zinc-800 rounded-full" />
            <span className="block w-5 h-[1.5px] bg-zinc-800 rounded-full" />
            <span className="block w-3.5 h-[1.5px] bg-zinc-800 rounded-full self-start ml-[5px]" />
          </Button>
        </nav>
      </header>

      {/* Mobile drawer  */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            ref={overlayRef}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden"
            aria-hidden="true"
            onClick={closeMenu}
          />

          {/* Drawer */}
          <div
            ref={drawerRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="
              fixed inset-y-0 left-0 z-50
              w-full
              bg-white
              flex flex-col
              md:hidden
            "
          >
            {/* Drawer header */}
            <div className="h-16 flex items-center justify-between px-6 border-b border-zinc-100 shrink-0">
              {/* Logo repeated */}
              <Logo textClassName="text-zinc-900" />

              {/* Close button */}
              <Button
                onClick={closeMenu}
                variant="ghost"
                aria-label="Close navigation menu"
                className="flex items-center justify-center w-9 h-9 rounded-md hover:bg-zinc-100 transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2 2l12 12M14 2L2 14"
                    stroke="#18181b"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </Button>
            </div>

            {/* Drawer body */}
            <div
              ref={itemsRef}
              className="flex flex-col flex-1 px-6 pt-8 pb-10 overflow-y-auto"
            >
              {/* Tabs */}
              <NavTabs fullWidth onNavigate={closeMenu} />

              {/* Nav links */}
              <ul className="space-y-1" role="list">
                {navLinks.map(({ label, href, external, hasDropdown }) =>
                  hasDropdown && dropdownData[label] ? (
                    <MobileAccordion
                      key={label}
                      label={label}
                      items={dropdownData[label]}
                      isOpen={openAccordion === label}
                      onToggle={() => toggleAccordion(label)}
                    />
                  ) : (
                    <li
                      key={label}
                      className="menu-item border-b border-zinc-100"
                    >
                      <a
                        href={href}
                        onClick={closeMenu}
                        className="
                        flex items-center justify-between
                        py-4 text-lg font-medium text-zinc-800
                        border-b border-zinc-100
                        hover:text-zinc-500 transition-colors
                      "
                        {...(external && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                      >
                        {label}
                        {hasDropdown && (
                          <HugeiconsIcon
                            icon={ArrowDown01Icon}
                            size={16}
                            className="
                      transition-transform duration-200
                      group-hover:rotate-180
                      "
                          />
                        )}
                      </a>
                    </li>
                  ),
                )}
              </ul>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Auth buttons pinned to bottom */}
              <div className="menu-item space-y-3">
                <a
                  href="/auth/signup"
                  onClick={closeMenu}
                  className="
                    flex w-full items-center justify-center
                    px-4 py-3 rounded-xl
                    bg-main text-white text-sm font-semibold
                  "
                >
                  Create account
                </a>
                <a
                  href="/auth/login"
                  onClick={closeMenu}
                  className="
                    flex w-full items-center justify-center
                    px-4 py-3 rounded-xl
                    border border-zinc-200 text-zinc-700 text-sm font-semibold
                    hover:bg-zinc-50 transition-colors
                  "
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
