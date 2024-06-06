import React from "react";

import HeroSecion from "../components/HeroSecion";
import WhatWeDo from "../components/WhatWeDo";
import Testimonial from "../components/Testimonial";
import OurWork from "../components/OurWork";
import Discuss from "../components/Discuss";

export default function Home() {
  return (
    <main className="">
      <HeroSecion
        title={"Let Make Your Interior Better"}
        description="Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic."
        buttonTitle="Explore Our Services"
        buttonLink={'/services'}
      />
      <WhatWeDo />
      <Testimonial />
      <OurWork />
      <Discuss />
    </main>
  );
}
