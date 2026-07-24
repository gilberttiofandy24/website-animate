import React from "react";

// tiap huruf diisi foto beda; ganti img-nya sesuka hati
const letters = [
  { char: "K", img: "/kokoroya/chooseus1.jpg" },
  { char: "O", img: "/kokoroya/chooseus2.jpg" },
  { char: "K", img: "/kokoroya/chooseus3.jpg" },
  { char: "O", img: "/kokoroya/chooseus4.jpg" },
  { char: "R", img: "/kokoroya/koko.jpg" },
  { char: "O", img: "/kokoroya/koko-menu-3.jpg" },
  { char: "Y", img: "/kokoroya/chooseus1.jpg" },
  { char: "A", img: "/kokoroya/chooseus3.jpg" },
];

const KokoroyaSection = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-[#faf3e8] px-4 md:flex-row md:gap-5">
      <h1 className="flex select-none font-black leading-none tracking-tighter text-[20vw] md:text-[13vw]">
        {letters.map((l, i) => (
          <span
            key={i}
            className="bg-cover bg-center bg-clip-text text-transparent"
            style={{ backgroundImage: `url('${l.img}')` }}
          >
            {l.char}
          </span>
        ))}
      </h1>
      <video
        src="/kokoroya/kokomv.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="h-37.5 w-37.5 object-cover"
        style={{
          WebkitMaskImage: "url('/kokoroya/kokorologo.png')",
          maskImage: "url('/kokoroya/kokorologo.png')",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />
    </div>
  );
};

export default KokoroyaSection;
