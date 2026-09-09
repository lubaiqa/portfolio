function ProjectCard({ project, reverse }) {
  return (
    <div
      className={`grid md:grid-cols-2 gap-11 items-center py-12 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="aspect-video rounded-2xl overflow-hidden border border-[#1c283c] bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-white/80 font-semibold text-lg">
            {project.name}
          </span>
        )}
      </div>

      <div>
        <p className="text-blue-500 text-sm font-mono mb-2">{project.tag}</p>
        <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
        <p className="text-gray-400 mb-6 max-w-md">{project.description}</p>
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-lg border border-[#1c283c] text-white text-sm font-semibold hover:border-blue-500 transition-colors"
          >
            GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-lg text-white text-sm font-semibold bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
