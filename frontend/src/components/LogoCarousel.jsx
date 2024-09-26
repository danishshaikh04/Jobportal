import React, { useEffect, useState } from "react";
import logo1 from "../assets/logos/logo1.webp";
import logo2 from "../assets/logos/logo2.png";
import logo3 from "../assets/logos/logo3.png";
import logo4 from "../assets/logos/logo4.png";
import logo5 from "../assets/logos/logo5.png";
import logo6 from "../assets/logos/logo6.png";
import logo7 from "../assets/logos/logo7.png";
import logo8 from "../assets/logos/logo8.png";
import logo9 from "../assets/logos/logo9.png";
import logo10 from "../assets/logos/logo10.png";
import logo11 from "../assets/logos/logo11.png";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const LogoCarousel = () => {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
  ];

  const [api, setApi] = useState(); // No TypeScript type annotation
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1500);

    return () => clearTimeout(interval); // Cleanup the timeout
  }, [api, current]);

  return (
    <div className="w-full py-5 lg:py-10">
      <div className="container mx-auto flex flex-col items-center">
      <h className="text-4xl flex justify-center items-center text-center tracking-tighter lg:max-w-xl font-regular pb-10 w-full ">
            Trusted by market leaders
          </h>
        <div className="grid grid-cols-3 gap-10 items-center  mx-auto">
          <div className="relative w-full col-span-4">
            <div className="bg-gradient-to-r from-background via-white/0 to-background z-10 absolute left-0 top-0 right-0 bottom-0 w-full h-full"></div>
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {logos.map((logo, index) => (
                  <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                    <div className="flex items-center justify-center bg-white w-28 h-28 p-2 rounded-md shadow-md">
                      <img
                        src={logo}
                        alt={`Job Portal Logo ${index + 1}`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
