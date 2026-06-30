type HeroSplitProps = {
  heading: string;
  body: string;
  cta: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  /** "left" = image left, text right | "right" = text left, image right (default) */
  imagePosition?: "left" | "right";
  headingId?: string;
};

export function HeroSplit({
  heading,
  body,
  cta,
  ctaHref = "#",
  imageSrc,
  imageAlt = "",
  imagePosition = "right",
  headingId,
}: HeroSplitProps) {
  const textBlock = (
    <div className="flex flex-col gap-6 justify-center">
      <h1
        id={headingId}
        className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.08]"
      >
        {heading}
      </h1>
      <p className="text-base lg:text-lg text-zinc-500 leading-relaxed max-w-lg">
        {body}
      </p>
      <div>
        <a
          href={ctaHref}
          className="
            inline-flex items-center justify-center
            px-8 py-4 rounded-xl
            text-white text-sm font-semibold
            transition-opacity duration-150 hover:opacity-90
          "
          style={{ backgroundColor: "var(--color-main)" }}
        >
          {cta}
        </a>
      </div>
    </div>
  );

  const imageBlock = (
    <div aria-hidden={!imageSrc}>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
      {imagePosition === "left" ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </div>
  );
}
