import { CARDS } from "@/config/business/CardsIcon";
import { ChallengeCard } from "./ChallengeCard";

export function CardSection() {
  return (
    <section
      className="bg-[#F6F6FC] py-20 px-6"
      aria-labelledby="challenges-heading"
    >
      <div className="mx-auto max-w-6xl flex flex-col gap-12">
        {/* Heading */}
        <h2
          id="challenges-heading"
          className="text-4xl lg:text-5xl font-semibold text-black tracking-tight leading-[1.1] text-center max-w-3xl mx-auto"
        >
          Why Managing Business Finances Is Harder Than It Should Be.
        </h2>

        {/* Cards */}
        <ul
          className="flex flex-col lg:flex-row gap-6"
          role="list"
          aria-label="Business finance challenges"
        >
          {CARDS.map((card, i) => (
            <li key={i} className="flex-1 min-w-0">
              <ChallengeCard {...card} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
