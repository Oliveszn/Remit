// import { useEffect, useRef } from "react";
// import { DecoBlob, DecoCapsule, DecoSpiral } from "../Business/CardSvg";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);
// const CARDS = [
//   {
//     bg: "#E0DDFB",
//     text: "You get paid, you promise yourself this month will be different, then boom — you're broke by week two.",
//     decoration: <DecoSpiral />,
//     textColor: "text-[#1A1A1A]",
//     img: "/pp1.webp",
//     imgAlt: "Person checking their phone looking stressed about money",
//   },
//   {
//     bg: "#665BE0",
//     text: "Bills pile up, subscriptions renew, and you're left wondering what happened.",
//     decoration: <DecoBlob />,
//     textColor: "text-white",
//     img: "/pp2.webp",
//     imgAlt: "Overwhelmed by notifications and payment reminders",
//   },
//   {
//     bg: "#1B1B24",
//     text: "We get it. That's why we built Remit: so you can stop stressing and start automating.",
//     decoration: <DecoCapsule />,
//     textColor: "text-white",
//     img: "/pp3.webp",
//     imgAlt: "Person relaxed with finances on autopilot",
//   },
// ];

// // ─── Individual slide ─────────────────────────────────────────────────────────

// type SlideProps = (typeof CARDS)[number];

// function ExperienceSlide({
//   bg,
//   text,
//   decoration,
//   textColor,
//   img,
//   imgAlt,
// }: SlideProps) {
//   return (
//     <div
//       className="shrink-0 w-[80vw] max-w-[820px] h-[520px] rounded-3xl overflow-hidden flex flex-col"
//       style={{ backgroundColor: bg }}
//       aria-label={text}
//     >
//       {/* Image — top 60% */}
//       <div className="relative h-[60%] w-full overflow-hidden">
//         <img
//           src={img}
//           alt={imgAlt}
//           className="w-full h-full object-cover object-center"
//           loading="lazy"
//           decoding="async"
//         />
//       </div>

//       {/* Card copy — bottom 40% */}
//       <div className="relative flex-1 p-6 lg:p-8 flex flex-col justify-end overflow-hidden">
//         {/* Decorative SVG clipped to card bottom */}
//         <div
//           className="absolute top-0 right-0 pointer-events-none opacity-60"
//           aria-hidden="true"
//         >
//           {decoration}
//         </div>
//         <p
//           className={`font-semibold text-lg leading-snug relative z-10 max-w-sm ${textColor}`}
//         >
//           {text}
//         </p>
//       </div>
//     </div>
//   );
// }

// export function ExperienceSection() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const trackRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const track = trackRef.current;
//     if (!section || !track) return;

//     // Amount to scroll horizontally = full track width minus one viewport width
//     const getScrollAmount = () => -(track.scrollWidth - track.offsetWidth);

//     const ctx = gsap.context(() => {
//       gsap.to(track, {
//         x: getScrollAmount,
//         ease: "none",
//         scrollTrigger: {
//           trigger: section,
//           start: "top top",
//           end: () => `+=${Math.abs(getScrollAmount())}`,
//           scrub: 1,
//           pin: true,
//           anticipatePin: 1,
//           invalidateOnRefresh: true,
//         },
//       });
//     }, section);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="overflow-hidden bg-white"
//       aria-labelledby="experience-heading"
//     >
//       <div className="h-screen flex flex-col justify-center gap-10 px-10 lg:px-20">
//         {/* Heading */}
//         <h2
//           id="experience-heading"
//           className="text-4xl lg:text-6xl font-medium text-black capitalize text-center tracking-tight leading-[1.14] shrink-0"
//         >
//           Money shouldn't <br /> feel messy
//         </h2>

//         {/* Horizontal track */}
//         <div
//           ref={trackRef}
//           className="flex gap-6 will-change-transform"
//           role="list"
//           aria-label="Personal finance experiences"
//         >
//           {CARDS.map((card, i) => (
//             <div key={i} role="listitem">
//               <ExperienceSlide {...card} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DecoBlob, DecoCapsule, DecoSpiral } from "../Business/CardSvg";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    bg: "#E0DDFB",
    text: "You get paid, you promise yourself this month will be different, then boom — you're broke by week two.",
    decoration: <DecoSpiral />,
    textColor: "text-[#1A1A1A]",
    img: "/pp1.webp",
    imgAlt: "Person checking their phone looking stressed about money",
  },
  {
    bg: "#665BE0",
    text: "Bills pile up, subscriptions renew, and you're left wondering what happened.",
    decoration: <DecoBlob />,
    textColor: "text-white",
    img: "/pp2.webp",
    imgAlt: "Overwhelmed by notifications and payment reminders",
  },
  {
    bg: "#1B1B24",
    text: "We get it. That's why we built Remit: so you can stop stressing and start automating.",
    decoration: <DecoCapsule />,
    textColor: "text-white",
    img: "/pp3.webp",
    imgAlt: "Person relaxed with finances on autopilot",
  },
];

type SlideProps = (typeof CARDS)[number];

function ExperienceSlide({
  bg,
  text,
  decoration,
  textColor,
  img,
  imgAlt,
}: SlideProps) {
  return (
    <div
      // Change 1: flex-col on mobile, flex-row on lg
      // Change 2: width is 92vw so exactly one fills the screen at a time
      className="shrink-0 w-[92vw] max-w-[900px] rounded-3xl overflow-hidden flex flex-col lg:flex-row lg:h-[460px]"
      style={{ backgroundColor: bg }}
      aria-label={text}
    >
      {/* Image
          Mobile: fixed height so card text shows below
          Desktop: half the width, full height via flex */}
      <div className="relative w-full h-[200px] lg:h-auto lg:w-1/2 shrink-0 overflow-hidden">
        <img
          src={img}
          alt={imgAlt}
          className="w-full h-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Card copy */}
      <div className="relative flex-1 p-6 lg:p-10 flex flex-col justify-end overflow-hidden min-h-[160px]">
        <div
          className="absolute top-0 right-0 pointer-events-none opacity-60"
          aria-hidden="true"
        >
          {decoration}
        </div>
        <p
          className={`font-semibold text-base lg:text-xl leading-snug relative z-10 max-w-sm ${textColor}`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // Original working formula — total track width minus one viewport width
    const getScrollAmount = () => -(track.scrollWidth - track.offsetWidth);

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.abs(getScrollAmount())}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-white"
      aria-labelledby="experience-heading"
    >
      <div className="h-screen flex flex-col justify-center gap-10 px-10 lg:px-20">
        <h2
          id="experience-heading"
          className="text-4xl lg:text-6xl font-medium text-black capitalize text-center tracking-tight leading-[1.14] shrink-0"
        >
          Money shouldn't <br /> feel messy
        </h2>

        <div
          ref={trackRef}
          className="flex gap-6 will-change-transform"
          role="list"
          aria-label="Personal finance experiences"
        >
          {CARDS.map((card, i) => (
            <div key={i} role="listitem">
              <ExperienceSlide {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
