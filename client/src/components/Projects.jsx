import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="py-24 border-b border-[#1c283c]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="mb-8 text-center">
          <h2 className="group inline-block cursor-default text-3xl font-bold text-white relative pb-3">
            <span className="transition-colors duration-300 group-hover:text-blue-400">
              Projects
            </span>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[3px] w-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-300 group-hover:w-24"></span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A selection of full-stack apps I've built end to end.
          </p>
        </div>

        <div className="divide-y divide-[#1c283c]">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
