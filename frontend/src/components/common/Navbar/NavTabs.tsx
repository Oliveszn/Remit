import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate, useLocation } from "react-router-dom";

const TABS = [
  { value: "business", label: "Business", path: "/business" },
  { value: "personal", label: "Personal", path: "/personal" },
];

type NavTabsProps = {
  className?: string;
  fullWidth?: boolean; // makes list + triggers span full width (mobile)
  onNavigate?: () => void; // called after navigation like close drawer
};

export function NavTabs({
  className = "",
  fullWidth = false,
  onNavigate,
}: NavTabsProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const active =
    TABS.find((t) => pathname.startsWith(t.path))?.value ?? "personal";

  const listClass = fullWidth
    ? "w-full bg-zinc-300 px-2 py-6 rounded-xl h-auto"
    : "bg-zinc-300 p-2 rounded-xl h-auto";

  const triggerClass = fullWidth
    ? `
        w-full rounded-lg px-4 py-4 text-base font-medium
        text-zinc-700 hover:cursor-pointer
        data-[state=active]:bg-main
        data-[state=active]:text-white
        data-[state=active]:shadow-none
        transition-colors
      `
    : `
        rounded-lg px-4 py-3 text-sm font-medium
        text-zinc-700
        hover:bg-main hover:text-white hover:cursor-pointer
        data-[state=active]:bg-main
        data-[state=active]:text-white
        data-[state=active]:shadow-none
        transition-colors
      `;

  return (
    <Tabs
      value={active}
      onValueChange={(val) => {
        const tab = TABS.find((t) => t.value === val);
        if (tab) {
          navigate(tab.path);
          onNavigate?.();
        }
      }}
      className={className}
    >
      <TabsList className={listClass}>
        {TABS.map(({ value, label }) => (
          <TabsTrigger key={value} value={value} className={triggerClass}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
