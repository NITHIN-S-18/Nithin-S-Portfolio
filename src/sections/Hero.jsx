import { words } from "../constants";
import Button from "../components/Button.jsx";
import Spline from '@splinetool/react-spline';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
 
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });
  
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 z-0">
  <img src="images/bg.png" alt="" />
      </div>

      {/* Main Layout */}
      <div className="hero-layout flex flex-col lg:flex-row items-center justify-between relative">
        
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-1/2 w-full md:px-20 px-5 z-10">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Crafting{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Into Bold Creations</h1>
              <h1>With Pure Passion</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm Nithin, blending logic and creativity to build meaningful digital experiences.
            </p>

            <Button
              text="Know About Me"
              className="md:w-80 md:h-16 w-60 h-12"
              id="about"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model */}
        <div className="w-full lg:w-1/2 h-[1000px] md:h-[1200px] flex justify-center items-center min-h-[500px] sm:min-h-[600px]">
          <Spline
            scene="https://prod.spline.design/Xk9jtwyINjaqrvcA/scene.splinecode"
            className="w-full h-[60vh] sm:h-[65vh] md:h-[700px] xl:h-[800px] -translate-y-25 md:-translate-y-15"
            
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
