"use client";

import Image from "next/image";

const AfterHeroes = () => {
  return (
    <section className="after-heroes absolute inset-0">
      <div className="min-h-screen w-full bg-white">
        <nav className="ah-nav flex items-center justify-between px-8 py-6">
          <Image
            src="/kokoroya/kokorologo.png"
            alt="logo"
            width={80}
            height={80}
            className="invert-100"
          />
          <div className="kokoroya  text-2xl font-bold tracking-[0.5em] text-black">
            KOKOROYA
          </div>
          <button className="rounded-full bg-black px-6 py-2 text-white">
            Book
          </button>
        </nav>
        <div className="video-wrap relative mx-auto mt-12 aspect-video w-2/3 overflow-hidden">
          <video
            src="/kokoroya/kokomv.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="video-bar h-full flex-1 bg-white" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterHeroes;
