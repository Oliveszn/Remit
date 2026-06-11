type LogoPillProps = {
  name: string;
  icon: React.ReactNode;
  style?: React.CSSProperties;
  floatRef: (el: HTMLDivElement | null) => void;
};

export function LogoPill({ name, icon, style, floatRef }: LogoPillProps) {
  return (
    <div
      ref={floatRef}
      style={style}
      className="
        absolute
        flex items-center gap-2.5
        px-2 py-2 rounded-2xl
        bg-white/10 backdrop-blur-sm
        border border-white/20
        shadow-lg shadow-black/20
        select-none
      "
      aria-label={name}
    >
      {icon}
      {/* <span className="text-sm font-semibold text-white whitespace-nowrap">
        {name}
      </span> */}
    </div>
  );
}
