"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const HeroesSection = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const split = new SplitText(".text-anim1", {
        type: "words",
      });
      const split2 = new SplitText(".text-anim2", {
        type: "words",
      });
      const title = new SplitText(".kokoroya", {
        type: "chars, words",
      });

      const tl = gsap.timeline({
        onComplete: () => window.dispatchEvent(new Event("heroes-done")),
      });

      tl.from(split.words, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
      })
        .from(
          split2.words,
          {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            stagger: 0.1,
          },
          "-=0.5",
        )
        .from(
          ".image-logo",
          {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            stagger: 0.1,
          },
          "-=0.5",
        )
        .from(
          title.words,
          {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            stagger: 0.1,
          },
          "-=0.9",
        )
        .from(".scroll-hint", { opacity: 0, y: 20, duration: 0.5 });

      return () => {
        split.revert();
        split2.revert();
        title.revert();
      };
    },
    { scope: container },
  );

  return (
    <div className="flex flex-col w-full h-screen items-center" ref={container}>
      <div className="kokoroya pt-10 text-2xl font-bold tracking-[0.5em] text-white">
        KOKOROYA
      </div>
      <div className="mx-auto w-full flex-1 max-w-6xl flex items-center justify-start px-6">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col">
            <h1 className="text-anim1 text-7xl md:text-8xl font-semibold text-white">
              Every Slice
            </h1>
            <h1 className="text-anim2 text-7xl md:text-8xl font-semibold text-white/80 italic">
              Tells a Story
            </h1>
          </div>
          <div className="flex flex-col">
            <Image
              src={"/kokoroya/kokorologo.png"}
              alt="koko"
              width={150}
              height={150}
              className="image-logo"
            />
          </div>
        </div>
      </div>
      <div className="scroll-hint pb-8 text-sm uppercase tracking-widest text-white/50 animate-bounce">
        scroll
      </div>
    </div>
  );
};

export default HeroesSection;
