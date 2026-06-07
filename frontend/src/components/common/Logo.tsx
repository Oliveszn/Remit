import { Link } from "react-router-dom";

type LogoProps = {
  textClassName?: string;
  iconClassName?: string;
  className?: string;
  showText?: boolean;
  [key: string]: unknown;
};

export function Logo({
  iconClassName = "bg-zinc-900 text-white",
  className = "",
  showText = true,
  ...props
}: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="Remit home"
      className={`inline-flex items-center gap-2 group ${className}`}
      {...props}
    >
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-lg ${iconClassName}`}
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
          <path
            d="M2 8h12M10 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {showText && (
        <span
          data-nav-light
          style={{ color: "#ffffff" }}
          className="text-xl font-bold tracking-tight transition-colors group-hover:text-gray-300"
        >
          Remit
        </span>
      )}
    </Link>
  );
}
