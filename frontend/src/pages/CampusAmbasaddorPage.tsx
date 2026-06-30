import { Helmet } from "react-helmet-async";
import { HeroSplit } from "@/components/CampusAmbassador/HeroSplit";
import { AdvantageCard } from "@/components/CampusAmbassador/AdvantageCard";
import { ADVANTAGE_CARDS } from "@/config/ambassadorConfig";

// Section 1  Hero

function AmbassadorHero() {
  return (
    <section
      className="py-20 lg:py-28 px-6 lg:px-8 bg-white"
      aria-labelledby="ambassador-hero-heading"
    >
      <div className="mx-auto max-w-6xl">
        <HeroSplit
          headingId="ambassador-hero-heading"
          heading="Become a Campus Ambassador"
          body="Remit's Campus Ambassador Program is designed to equip students with vital financial & professional skills while helping them build meaningful connections early in their careers."
          cta="Join now"
          ctaHref="/auth/signup"
          imagePosition="right"
          imageSrc="/campus-ambassador-hero.webp"
          imageAlt="Campus ambassador smiling with fellow students"
        />
      </div>
    </section>
  );
}

// Section 2 Career growth

function CareerSection() {
  return (
    <section
      className="py-20 lg:py-28 px-6 lg:px-8 bg-[#F6F6FC]"
      aria-labelledby="career-heading"
    >
      <div className="mx-auto max-w-6xl">
        <HeroSplit
          headingId="career-heading"
          heading="Accelerate Your Career Growth"
          body="Join a vibrant network of students from campuses across Nigeria and develop highly sought-after skills through collaborative projects and strategic connections. Future-proof your career and access new opportunities in a dynamic job market."
          cta="Get started"
          ctaHref="/auth/signup"
          imagePosition="left"
          imageSrc="/accelerate-growth.webp"
          imageAlt="Students collaborating on a project together"
        />
      </div>
    </section>
  );
}

// Section 3 Advantages grid

function AdvantagesSection() {
  return (
    <section
      className="py-20 lg:py-28 px-6 lg:px-8 bg-white"
      aria-labelledby="advantages-heading"
    >
      <div className="mx-auto max-w-6xl flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
          <h2
            id="advantages-heading"
            className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-tight"
          >
            Discover Your Advantages
          </h2>
          <p className="text-base lg:text-lg text-zinc-500 leading-relaxed">
            Experience amazing opportunities and benefits designed to elevate
            your academic and professional journey.
          </p>
        </div>
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
          role="list"
          aria-label="Ambassador program advantages"
        >
          {ADVANTAGE_CARDS.map((card) => (
            <li key={card.title}>
              <AdvantageCard {...card} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Page

export default function CampusAmbassadorPage() {
  return (
    <>
      <Helmet>
        <title>Campus Ambassador | Remit</title>
        <meta
          name="description"
          content="Join Remit's Campus Ambassador Program and build financial skills, earn rewards, and grow your career network while still in school."
        />
      </Helmet>

      <main>
        <AmbassadorHero />
        <CareerSection />
        <AdvantagesSection />
      </main>
    </>
  );
}
