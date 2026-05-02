import React, { useState } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroChocolates from "./HeroChocolates";
import FlavorCards from "./FlavorCards";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [activeFlavor, setActiveFlavor] = useState(null);

  useGSAP(() => {
    const pairs = [
      {
        choco: document.querySelector(".caremel-choco"),
        card: document.querySelector(".caramel-card"),
      },
      {
        choco: document.querySelector(".cocoa-choco"),
        card: document.querySelector(".cocoa-card"),
      },
      {
        choco: document.querySelector(".orange-choco"),
        card: document.querySelector(".orange-card"),
      },
      {
        choco: document.querySelector(".almond-choco"),
        card: document.querySelector(".almond-card"),
      },
    ];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".choco-section",
        start: "top top",
        end: "74% center",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    pairs.forEach(({ choco, card }) => {
      tl.to(
        choco,
        {
          x: () => {
            const chocPos = choco.getBoundingClientRect();
            const cardPos = card.getBoundingClientRect();
            return (
              cardPos.left +
              cardPos.width / 2 -
              (chocPos.left + chocPos.width / 2)
            );
          },
          y: () => {
            const chocPos = choco.getBoundingClientRect();
            const cardPos = card.getBoundingClientRect();
            return (
              cardPos.top +
              cardPos.height / 2 -
              (chocPos.top + chocPos.height * 0.68)
            );
          },
          scale: 0.6,
          ease: "none",
        },
        0,
      );
    });
  });

  return (
    <section className="choco-section inner-container">
      <HeroChocolates activeFlavor={activeFlavor} />
      <FlavorCards setActiveFlavor={setActiveFlavor} />
    </section>
  );
};

export default Hero;
