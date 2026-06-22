import { useNavScroll } from "@/hooks/useNavScroll";

export function HeroSection() {
  const heroRef = useNavScroll("light-page");

  return (
    <section
      ref={heroRef}
      className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center px-6 relative overflow-hidden"
      aria-labelledby="personal-hero-heading"
    >
      {/* Subtle grid overlay*/}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(101,91,224,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(101,91,224,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Heading */}
        <h1
          id="personal-hero-heading"
          className="text-5xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 leading-[1.06]"
        >
          For People Who Are Bad With Money.{" "}
          <span
            className="block font-medium italic text-4xl lg:text-5xl mt-2"
            style={{ color: "var(--color-main)" }}
          >
            (But Are Trying)
          </span>
        </h1>

        {/* Body */}
        <p className="text-lg lg:text-xl text-zinc-500 leading-relaxed max-w-2xl">
          If you've ever forgotten to pay your bills, dipped into savings too
          early, or wondered where your salary went — you're not alone. Remit
          helps you sort your money out automatically, no guilt trips attached.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="/signup"
            className="
              inline-flex items-center justify-center
              px-10 py-3.5 rounded-lg
              text-white text-base font-semibold
              transition-opacity duration-150 hover:opacity-90
              shadow-lg bg-black
            "
          >
            Get started
          </a>

          <a
            href="#download"
            className="
              inline-flex items-center justify-center gap-2
              px-10 py-3.5 rounded-lg
              text-zinc-800 text-base font-semibold
              border border-black hover:bg-zinc-50
              transition-colors duration-150
            "
          >
            Get the app
          </a>
        </div>
      </div>
    </section>
  );
}
