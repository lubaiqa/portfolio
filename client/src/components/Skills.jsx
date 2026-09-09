import { skills } from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="py-24 border-b border-[#1c283c]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="mb-12 text-center">
          <h2 className="group inline-block cursor-default text-3xl font-bold text-white relative pb-3">
            <span className="transition-colors duration-300 group-hover:text-blue-400">
              Skills
            </span>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[3px] w-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-300 group-hover:w-24"></span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Tools and technologies I use to build full-stack applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group basis-[calc(25%-15px)] grow-0 shrink-0 min-w-[140px] bg-[#101a2c] border border-[#1c283c] rounded-xl py-8 px-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500"
              >
                <Icon
                  size={36}
                  color={skill.color}
                  className="mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                />
                <p className="relative inline-block text-gray-400 text-sm font-medium transition-colors duration-300 group-hover:text-white after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1.5 after:h-[3px] after:w-0 after:rounded-full after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500 after:transition-all after:duration-500 after:ease-out group-hover:after:w-[120%]">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
