import { projects } from "../constants/index.js";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        {/* Section Header */}
        <TitleHeader
          title="Interactive Projects I’ve Built"
          sub="⚡Projects"
        />

        {/* Project Cards */}
        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {projects.map((project, index) => (
            <GlowCard card={project} key={index} index={index}>
              <div className="flex flex-col gap-3">
                
                {/* Project Image with hover effect */}
                <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover transform group-hover:scale-105 transition duration-500"
                  />

                  {/* GitHub overlay */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500"
                  >
                    <FaGithub size={32} className="text-white hover:text-blue-400 transition-colors duration-300" />
                  </a>
                </div>

                {/* Title + Description */}
                <h3 className="font-bold text-lg mt-2">{project.title}</h3>
                <p className="text-white-75">{project.description}</p>

              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
