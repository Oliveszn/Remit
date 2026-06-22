import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import {
  registerschema,
  type RegisterFormValues,
} from "@/utils/validation/auth-validation";
import { AppleIcon, GoogleIcon } from "@/config/authicons";
import { PasswordStrength } from "@/utils/PasswordStrength";

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerschema),
    mode: "onChange",
  });

  const passwordValue = watch("password", "");

  const onSubmit = async (data: RegisterFormValues) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-md flex flex-col gap-6">
      {/* Heading */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-zinc-900">
          Let's get you started — it's free.
        </h1>
        {/* <p className="text-sm text-zinc-500">
          Let's get you started — it's free.
        </p> */}
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
        noValidate
        aria-label="Create account form"
      >
        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="signup-email"
            className="text-sm font-medium text-zinc-700"
          >
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "signup-email-error" : undefined}
            {...register("email")}
            className={`
              h-11 px-3 rounded-lg border bg-white outline-none text-sm
              transition-colors duration-150
              focus:border-main focus:ring-2 focus:ring-main/20
              ${errors.email ? "border-red-400" : "border-zinc-300"}
            `}
          />
          {errors.email && (
            <p
              id="signup-email-error"
              role="alert"
              className="text-xs text-red-500"
            >
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="signup-password"
            className="text-sm font-medium text-zinc-700"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="signup-password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Create a password"
              aria-invalid={!!errors.password}
              aria-describedby="signup-password-hint signup-password-strength"
              {...register("password")}
              className={`
                h-11 px-3 pr-11 w-full rounded-lg border bg-white outline-none text-sm
                transition-colors duration-150
                focus:border-main focus:ring-2 focus:ring-main/20
                ${errors.password ? "border-red-400" : "border-zinc-300"}
              `}
            />
            <button
              type="button"
              onClick={() => setShowPassword((p) => !p)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 transition-colors"
            >
              {showPassword ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                  <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>

          <div id="signup-password-strength">
            <PasswordStrength password={passwordValue} />
          </div>

          {errors.password && (
            <p
              id="signup-password-hint"
              role="alert"
              className="text-xs text-red-500"
            >
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          aria-disabled={!isValid || isSubmitting}
          className="
            h-11 rounded-lg text-white text-sm font-semibold
            transition-all duration-150
            disabled:opacity-40 disabled:cursor-not-allowed
            enabled:hover:opacity-90 enabled:active:scale-[0.98]
          "
          style={{ backgroundColor: "var(--color-main)" }}
        >
          {isSubmitting ? "Creating account…" : "Create account"}
        </button>

        {/* Divider */}
        <div
          className="flex items-center gap-3"
          role="separator"
          aria-label="or continue with"
        >
          <div className="h-px bg-zinc-200 flex-1" />
          <span className="text-xs text-zinc-400 select-none">OR</span>
          <div className="h-px bg-zinc-200 flex-1" />
        </div>

        {/* Google */}
        <button
          type="button"
          className="
            h-11 rounded-lg bg-white border border-zinc-300 text-zinc-800
            flex items-center justify-center gap-2.5 text-sm font-medium
            hover:bg-zinc-50 transition-colors duration-150
          "
          aria-label="Continue with Google"
        >
          <GoogleIcon />
          Continue with Google
        </button>

        {/* Apple */}
        <button
          type="button"
          className="
            h-11 rounded-lg bg-black text-white
            flex items-center justify-center gap-2.5 text-sm font-medium
            hover:bg-zinc-900 transition-colors duration-150
          "
          aria-label="Continue with Apple"
        >
          <AppleIcon />
          Continue with Apple
        </button>

        {/* Switch */}
        <p className="text-sm text-center text-zinc-500">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="font-semibold hover:underline"
            style={{ color: "var(--color-main)" }}
          >
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
