export function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-lg font-bold text-white mb-4 tracking-tight">
        {heading}
      </h3>
      <ul className="space-y-3" role="list">
        {links.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className="text-base text-white hover:text-gray-400 transition-colors duration-150"
              {...(href.startsWith("http") && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
