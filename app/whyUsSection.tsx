"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

const features = [
  {
    title: "Authentic",
    text: "At KOKOROYA, we serve a variety of authentic Japanese food prepared from the freshest and seasonal ingredients, with a contemporary twist, that everyone can love. Being fully licensed, we offer a selection of Japanese beer, sake, wine and cocktails, as well as child size drinks.",
    images: ["/kokoroya/chooseus1.jpg"],
  },
  {
    title: "Experience",
    text: "KOKOROYA value customers the most, providing the best and innovative dining experience possible. Customers order food through iPad making it more exciting and enthralling.",
    images: ["/kokoroya/chooseus2.jpg"],
  },
  {
    title: "Atmosphere",
    text: "KOKOROYA equates to family. Family is our core of existence. Parents can enjoy dining with us while watching their kids playing inside the playpen. Equally, singles and couples can savour the taste and feel the warm ambiance. KOKOROYA aims to improve any aspects of hospitality to cater our diners needs, doing the best we can as one KOKOROYA family.",
    images: ["/kokoroya/chooseus4.jpg"],
  },
];

gsap.registerPlugin(ScrollTrigger);

const WhyUsSection = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".wu-band", {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: ".wu-band",
          start: "top 90%",
          end: "top 40%",
          scrub: 2,
          toggleActions: "restart pause reverse pause",
        },
      });
      const sections = gsap.utils.toArray<HTMLElement>(".containers .panel");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".containers",
          pin: true,
          scrub: 0.1,
          end: "+=4000",
        },
      });
    },

    { scope: container },
  );

  return (
    <>
      <div className="bg-white" ref={container}>
        <div className="containers relative h-screen overflow-hidden bg-white">
          <div className="wu-band absolute top-0 left-0 z-10 w-full bg-black px-6 py-6 md:w-[60%] md:py-10 md:pr-12">
            <h1 className="wu-title text-center text-3xl font-bold text-white md:text-right md:text-5xl">
              Why Choose Us?
            </h1>
          </div>

          <div className="track flex h-full w-max items-center">
            {features.map((f, i) => (
              <section
                key={f.title}
                className="panel flex w-screen shrink-0 flex-col items-center gap-6 px-6 pt-24 pb-10 md:flex-row md:gap-16 md:px-28 md:pt-0 md:pb-0"
              >
                <div className="order-2 flex-1 md:order-1">
                  <span className="block text-5xl font-bold text-neutral-200 md:text-7xl">
                    0{i + 1}
                  </span>
                  <h2 className="mt-2 text-3xl font-bold text-black md:text-6xl">
                    {f.title}
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-600 md:mt-6 md:text-lg">
                    {f.text}
                  </p>
                </div>
                <div className="relative order-1 h-[32vh] w-full shrink-0 overflow-hidden rounded-2xl md:order-2 md:h-[65vh] md:w-[45%] md:rounded-3xl">
                  <Image
                    src={f.images[0]}
                    alt={f.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUsSection;
