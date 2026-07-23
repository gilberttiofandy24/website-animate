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
  const header = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: header.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          markers: true,
        },
      });
      tl.from(".wu-band", { xPercent: -100, ease: "none" });
    },
    { scope: container },
  );

  return (
    <>
      <div className="overflow-hidden bg-white py-24" ref={container}>
        <div className="wu-band w-[60%] bg-black pr-12">
          <h1 className="wu-title text-right text-5xl font-bold text-white">
            Why Choose Us?
          </h1>
        </div>
      </div>
    </>
  );
};

export default WhyUsSection;
