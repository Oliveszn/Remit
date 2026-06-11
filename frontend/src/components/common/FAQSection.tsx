import { FAQItem, type FAQItemData } from "./FAQItem";

type FAQSectionProps = {
  heading?: string;
  items: FAQItemData[];
  className?: string;
};

export function FAQSection({
  heading = "Frequently Asked Questions",
  items,
  className = "",
}: FAQSectionProps) {
  return (
    <section
      aria-labelledby="faq-heading"
      className={`py-20 px-6 bg-[#FFFFFF] ${className}`}
    >
      <div className="mx-auto max-w-6xl flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h2
            id="faq-heading"
            className="text-4xl lg:text-5xl font-semibold tracking-tight text-black leading-[1.1] text-center"
          >
            {heading}
          </h2>
        </div>

        {/* Items */}
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3" role="list">
          {items.map((item, i) => (
            <li key={i}>
              <FAQItem {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
