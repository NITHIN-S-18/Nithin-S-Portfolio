import { aboutCards } from "../constants/index.js";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const About = () => {
  return (
    <section id="about" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get To Know Me"
          sub="⭐️ About Me"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {aboutCards.map((aboutcard, index) => (
            <GlowCard card={aboutcard} key={index} index={index}>
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-lg">{aboutcard.title}</h3>
                <p className="text-white-75">{aboutcard.description}</p>
                <p className="text-sm text-white-50 italic">{aboutcard.footer}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
