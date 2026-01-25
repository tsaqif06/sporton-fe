import Button from "../ui/button";
import Image from "next/image";
import { FiFastForward } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="container mx-auto min-h-screen flex items-center relative overflow-hidden lg:overflow-visible px-4 lg:px-0 py-20 lg:py-0"
    >
      <div className="flex flex-col lg:flex-row items-center w-full relative">
        <Image
          src="/images/img-basketball.png"
          width={432}
          height={423}
          alt="image sporton"
          className="grayscale absolute left-0 -top-20 hidden lg:block"
        />

        <div className="z-10 w-full lg:w-3/4 xl:ml-20">
          <div className="text-primary italic font-bold text-center lg:text-left">
            Friday Sale, 50%
          </div>

          <h1 className="font-extrabold text-[45px] md:text-[70px] lg:text-[95px] italic bg-gradient-to-b leading-[1.1] from-black to-[#979797] bg-clip-text text-transparent text-center lg:text-left">
            WEAR YOUR <br className="hidden md:block" />
            TOP-QUALITY <br className="hidden md:block" />
            SPORTSWEAR
          </h1>

          <p className="w-full lg:w-1/2 mt-6 lg:mt-10 leading-loose text-center lg:text-left text-gray-600">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do. Premium fabrics. Unmatched comfort.
            Limitless motion.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-10 lg:mt-14 justify-center lg:justify-start">
            <Button className="w-full sm:w-auto flex justify-center items-center gap-2">
              Explore More <FiFastForward />
            </Button>
            <Button
              variant="ghost"
              className="w-full sm:w-auto flex justify-center items-center gap-2"
            >
              Watch Video
              <Image
                src="/images/icon-play-video.svg"
                alt="icon play video"
                width={29}
                height={29}
              />
            </Button>
          </div>
        </div>

        <div className="mt-12 lg:mt-0 relative lg:absolute lg:-right-10 lg:top-1/2 lg:-translate-y-1/2 w-full max-w-[300px] md:max-w-[500px] lg:max-w-[700px]">
          <Image
            src="/images/img-hero.png"
            width={700}
            height={950}
            alt="image sporton hero"
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      <Image
        src="/images/img-ornament-hero.svg"
        width={420}
        height={420}
        alt="ornament"
        className="absolute -right-[150px] top-1/2 -translate-y-1/2 hidden lg:block -z-10"
      />
    </section>
  );
};

export default HeroSection;
