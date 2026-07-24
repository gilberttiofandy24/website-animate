"use client";

import AfterHeroes from "@/app/afterHeroes";
import HeroesSection from "@/app/heroes";
import KokoroyaSection from "@/app/kokoroya";
import SignatureDishSection from "@/app/signatureDish";
import WhyUsSection from "@/app/whyUsSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

// Set before the browser restores scroll on reload; inside the effect is too late.
if (typeof history !== "undefined") {
  history.scrollRestoration = "manual";
}

const Home = () => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      window.scrollTo(0, 0);

      const lenis = new Lenis({ duration: 1.8 });
      lenis.on("scroll", ScrollTrigger.update);
      const raf = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

      lenis.scrollTo(0, { immediate: true });
      lenis.stop();
      const startLenis = () => lenis.start();
      window.addEventListener("heroes-done", startLenis, { once: true });
      const unlockFallback = setTimeout(startLenis, 6000);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=350%",
          scrub: true,
          pin: true,
          // refresh pin ini DULUAN (spacer kepasang) sebelum trigger di
          // section bawahnya ngitung posisi — biar mereka ga stale.
          refreshPriority: 1,
        },
      });
      tl.from(".after-heroes", { xPercent: -100, ease: "none" })
        .from(".ah-nav > *", {
          y: -120,
          opacity: 0,
          ease: "none",
          stagger: 0.2,
        })
        .to(".video-bar", {
          scaleY: 0,
          transformOrigin: "top",
          ease: "none",
          stagger: 0.1,
        });

      ScrollTrigger.refresh();

      return () => {
        clearTimeout(unlockFallback);
        window.removeEventListener("heroes-done", startLenis);
        gsap.ticker.remove(raf);
        lenis.destroy();
      };
    },
    { scope: container },
  );
  return (
    <>
      <div
        ref={container}
        className="relative min-h-screen bg-black w-full overflow-hidden"
      >
        <HeroesSection />
        <AfterHeroes />
      </div>
      <WhyUsSection />
      <SignatureDishSection />
      <KokoroyaSection />
    </>
  );
};

export default Home;
