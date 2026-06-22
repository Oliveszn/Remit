import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen w-full flex bg-[#F0EFFC] p-5">
      {/* LEFT PANEL */}
      <div className="hidden lg:flex w-[380px] rounded-2xl bg-[rgb(102,91,224)] text-white p-10">
        <div className="flex flex-col justify-center gap-6 w-full">
          <div className="flex justify-center">
            <img src="/slider-1.svg" alt="" className="w-[280px]" />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-[32px] font-bold leading-tight">
              Handle your finances with ease
            </h2>

            <p className="text-sm text-white/80 leading-relaxed">
              From managing stipends and supporting loved ones, to handling
              essential personal bills and subscriptions, to seamlessly
              organizing business expenses and salaries.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <main className="flex-1 flex items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
}
