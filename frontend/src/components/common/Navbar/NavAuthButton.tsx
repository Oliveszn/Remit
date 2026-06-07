import { useRef } from "react";

const MAIN = "#756be3";

export function NavAuthButtons() {
  const loginRef = useRef<HTMLAnchorElement>(null);
  const signupRef = useRef<HTMLAnchorElement>(null);

  // Read the current nav state by checking what GSAP set on the header
  const isScrolled = () => {
    const navbar = document.querySelector<HTMLElement>("[data-navbar]");
    if (!navbar) return false;
    // When scrolled, GSAP sets backgroundColor to #ffffff
    return navbar.style.backgroundColor === "rgb(255, 255, 255)";
  };

  // Login hover
  const onLoginEnter = () => {
    const el = loginRef.current;
    if (!el) return;
    if (isScrolled()) {
      // White nav → login rests as black text, hover = purple bg + white text
      el.style.backgroundColor = MAIN;
      el.style.color = "#ffffff";
    } else {
      // Purple nav → login rests as white text, hover = white bg + dark text
      el.style.backgroundColor = "#ffffff";
      el.style.color = "#18181b";
    }
  };

  const onLoginLeave = () => {
    const el = loginRef.current;
    if (!el) return;
    el.style.backgroundColor = "transparent";
    el.style.color = isScrolled() ? "#18181b" : "#ffffff";
  };

  //  Sign-up hover
  const onSignupEnter = () => {
    const el = signupRef.current;
    if (!el) return;
    if (isScrolled()) {
      // White nav → signup rests as purple bg + white text, hover = darken
      el.style.backgroundColor = "#5f55cc"; // slightly darker purple
      el.style.color = "#ffffff";
    } else {
      // Purple nav → signup rests as white bg + black text, hover = lighten
      el.style.backgroundColor = "#f0effd";
      el.style.color = MAIN;
    }
  };

  const onSignupLeave = () => {
    const el = signupRef.current;
    if (!el) return;
    if (isScrolled()) {
      el.style.backgroundColor = MAIN;
      el.style.color = "#ffffff";
    } else {
      el.style.backgroundColor = "#ffffff";
      el.style.color = "#18181b";
    }
  };

  return (
    <div
      className="hidden md:flex items-center gap-6"
      aria-label="Account actions"
    >
      <a
        ref={loginRef}
        data-nav-light
        href="/login"
        style={{
          color: "#ffffff",
          backgroundColor: "transparent",
          transition: "background-color 0.2s, color 0.2s",
        }}
        className="text-base font-bold px-4 py-2 rounded-lg"
        onMouseEnter={onLoginEnter}
        onMouseLeave={onLoginLeave}
      >
        Login
      </a>

      <a
        ref={signupRef}
        data-nav-dark
        href="/signup"
        style={{
          backgroundColor: "#ffffff",
          color: "#18181b",
          transition: "background-color 0.2s, color 0.2s, box-shadow 0.2s",
          boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        }}
        className="inline-flex items-center px-6 py-2 rounded-lg text-base font-semibold border border-black/10"
        onMouseEnter={onSignupEnter}
        onMouseLeave={onSignupLeave}
      >
        Create account
      </a>
    </div>
  );
}
