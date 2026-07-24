"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const SignatureDishSection = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const split = new SplitText(".osd-text", { type: "words" });
      gsap.from(split.words, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".osd-text", start: "top 80%" },
      });

      // stacked layers: pin container, dish-2 lalu dish-3 naik dari bawah
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".dishes",
          start: "top top",
          end: "+=2500",
          scrub: true,
          pin: true,
        },
      });
      tl.from(".dish-1 .food", { rotation: 360, ease: "none" })
        .from(".dish-2", { yPercent: 100, ease: "none" })
        .from(".dish-2 .food", { rotation: 360, ease: "none" }, "<")
        .from(".dish-3", { yPercent: 100, ease: "none" })
        .from(".dish-3 .food", { rotation: 360, ease: "none" }, "<");

      return () => {
        split.revert();
      };
    },
    { scope: container },
  );

  return (
    <div className="bg-black" ref={container}>
      <div className="flex min-h-screen items-center justify-center bg-black px-6 pt-20">
        <h1 className="osd-text text-center text-5xl font-bold text-white md:text-8xl">
          OUR SIGNATURE DISH
        </h1>
      </div>

      {/* layers numpuk di dalam container yang di-pin */}
      <div className="dishes relative h-screen overflow-hidden">
        {/* DISH 1 — layer dasar */}
        <div className="dish-1 absolute inset-0 z-10 flex items-center justify-center bg-yellow-500">
          <div className="flex w-[85%] flex-row items-center justify-between md:w-[80%]">
            <div className="copy-1 max-w-[55%] text-black md:max-w-sm">
              <span className="text-sm font-semibold uppercase tracking-widest">
                Chef&apos;s Choice
              </span>
              <h2 className="mt-3 text-4xl font-bold md:text-7xl">
                Chirashi Deluxe
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-800 md:text-lg">
                Freshly sliced sashimi over seasoned rice — a KOKOROYA
                favourite that captures the season on a single plate.
              </p>
            </div>
            <Image
              src="/kokoroya/fud.png"
              width={400}
              height={400}
              alt="Chirashi Deluxe"
              className="food food-1 shrink-0"
            />
          </div>
        </div>

        {/* DISH 2 — naik nutupin dish 1 */}
        <div className="dish-2 absolute inset-0 z-20 flex items-center justify-center bg-emerald-400">
          <div className="flex w-[85%] flex-row items-center justify-between md:w-[80%]">
            <div className="copy-2 max-w-[55%] text-black md:max-w-sm">
              <span className="text-sm font-semibold uppercase tracking-widest">
                House Special
              </span>
              <h2 className="mt-3 text-4xl font-bold md:text-7xl">
                Dragon Roll
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-800 md:text-lg">
                Grilled unagi and creamy avocado wrapped in pearl rice,
                finished with a whisper of sweet eel glaze.
              </p>
            </div>
            <Image
              src="/kokoroya/fud2.png"
              width={400}
              height={400}
              alt="Dragon Roll"
              className="food food-2 shrink-0"
            />
          </div>
        </div>

        {/* DISH 3 — naik nutupin dish 2 */}
        <div className="dish-3 absolute inset-0 z-30 flex items-center justify-center bg-orange-400">
          <div className="flex w-[85%] flex-row items-center justify-between md:w-[80%]">
            <div className="copy-3 max-w-[55%] text-black md:max-w-sm">
              <span className="text-sm font-semibold uppercase tracking-widest">
                Premium Cut
              </span>
              <h2 className="mt-3 text-4xl font-bold md:text-7xl">
                Wagyu Nigiri
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-800 md:text-lg">
                Torch-seared A5 wagyu draped over warm rice — it melts the
                moment it meets your palate.
              </p>
            </div>
            <Image
              src="/kokoroya/fud3.png"
              width={400}
              height={400}
              alt="Wagyu Nigiri"
              className="food food-3 shrink-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignatureDishSection;
