import React from 'react'
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Btn from "./Btn";


export default function Hero() {
  return (
       <HeroHighlight>

        <div className="flex justify-center ">

        <Highlight className="text-black  px-2 md:text-4xl  font-bold max-w-full sm:max-w-2xl md:max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
          🚀 Something Cool is Peeling Off Soon...
        </Highlight>
        </div>
        <h1 className="text-md sm:text-2xl md:text-3xl mt-8 sm:mt-10 md:mt-12 px-2 sm:px-4 font-bold text-neutral-700 max-w-full sm:max-w-2xl md:max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
          We’re cooking up bold stickers for bold vibes.<br />
          Get ready to stick your style on everything you love.
        </h1>
        <div className="flex justify-center mt-4 sm:mt-6 px-2">
          <Btn value="🔔 Notify Me When It Drops" />
        </div>

      </HeroHighlight>
  )
}
