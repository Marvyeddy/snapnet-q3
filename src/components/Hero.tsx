import HeroImg from "../assets/Revenue-bro 1.svg";
import Vector from "../assets/Vector.svg";

const Hero = () => {
  return (
    <section className="relative">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-[1172px] w-full px-4 sm:px-6 lg:px-[60px] mx-auto gap-8 md:gap-12 mt-30 md:mt-24">
        <div className="flex-1 w-full">
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-center lg:text-left leading-tight md:leading-tight">
            Mutual Investment
          </h1>
          <p className="w-full max-w-[449px] text-paragraph  mt-[18px] md:mt-[28px] mb-[32px] md:mb-[44px] text-center lg:text-left mx-auto lg:mx-0 text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed px-1 md:px-0">
            At Finance we care about your future. We help you invest the way you
            want. So you can relax, have fun and let your fund grow.
          </p>

          <div className="inline-flex flex-col items-center lg:items-start w-full lg:w-[241px]">
            <button className="w-full max-w-[241px] px-4 py-2 cursor-pointer text-[18px] md:text-[20px] lg:text-[24px] text-white bg-[#27AE60] rounded-full mx-auto lg:mx-0 transition hover:brightness-110">
              Learn more
            </button>
            <div className="h-1 mx-auto bg-btn  w-[40px] md:w-[55px] lg:w-[69.5px] rounded mt-2"></div>
          </div>
        </div>

        <div className="flex-1 flex justify-center w-full mb-8 lg:mb-0 max-md:hidden">
          <img
            src={HeroImg}
            alt="hero"
            loading="lazy"
            className="object-contain "
          />
        </div>
      </div>

      <div className="w-fit mx-auto mt-16 ">
        <button className="cursor-pointer">
          <img src={Vector} alt="down-button" loading="lazy" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
