import { Link } from "react-router-dom";

function GooglePlayIcon() {
  return (
    <img
      src="/google-play.svg"
      alt=""
      className="w-7 h-7 shrink-0"
      aria-hidden="true"
    />
  );
}

function AppleIcon() {
  return (
    <svg
      viewBox="0 0 384 512"
      fill="currentColor"
      className="w-6 h-6 shrink-0"
      aria-hidden="true"
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

type StoreButtonProps = {
  href: string;
  icon: React.ReactNode;
  eyebrow: string;
  label: string;
  ariaLabel: string;
};

function StoreButton({
  href,
  icon,
  eyebrow,
  label,
  ariaLabel,
}: StoreButtonProps) {
  return (
    <Link
      to={href}
      aria-label={ariaLabel}
      className="
        flex items-center gap-3
        bg-white text-black
        px-5 py-3.5 rounded-xl
        border border-black/10
        hover:bg-zinc-100 transition-colors duration-150
        w-full sm:w-auto
        min-w-[160px]
      "
    >
      {icon}
      <div className="flex flex-col leading-tight">
        <span className="text-[11px] text-zinc-500 font-normal">{eyebrow}</span>
        <span className="text-sm font-semibold">{label}</span>
      </div>
    </Link>
  );
}

export function DownloadSection() {
  return (
    <section
      className="bg-white py-10 px-4 lg:py-20 lg:px-6"
      aria-labelledby="download-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div
          className="
            relative flex flex-col items-center justify-center
            rounded-2xl lg:rounded-3xl
            overflow-hidden
            px-6 py-14 lg:py-20
            bg-[linear-gradient(180deg,_#302C7E_-14.97%,_#1B1B24_100%)]
            min-h-[420px]
          "
        >
          {/* Background texture */}
          <img
            src="/extrobg.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-bottom z-[1] mix-blend-overlay opacity-80 pointer-events-none"
          />

          {/* Dark overlay */}
          <div
            className="absolute inset-0 bg-[rgba(27,27,36,0.3)] z-[2] pointer-events-none"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-[3] flex flex-col items-center gap-6 text-center max-w-lg w-full">
            <h2
              id="download-heading"
              className="text-3xl lg:text-5xl font-semibold text-white leading-tight tracking-tight"
            >
              Start managing your money differently.
            </h2>

            <p className="text-sm lg:text-base text-white/80 leading-relaxed max-w-sm">
              Join thousands who finally understand where their money goes — and
              how to make it work better.
            </p>

            {/* Store buttons */}
            <div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mt-2"
              aria-label="Download options"
            >
              <StoreButton
                href="#"
                icon={<GooglePlayIcon />}
                eyebrow="Get it on"
                label="Google Play"
                ariaLabel="Download on Google Play"
              />
              <StoreButton
                href="#"
                icon={<AppleIcon />}
                eyebrow="Download on the"
                label="App Store"
                ariaLabel="Download on the App Store"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
