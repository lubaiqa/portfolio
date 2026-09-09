import profileImg from "../assets/image.png";

function Hero() {
  return (
    <header
      id="profile"
      className="relative pt-40 pb-24 border-b border-[#1c283c] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-blue-500 mb-3 font-mono text-sm">Hi, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
            Lubaiqa <span className="text-blue-500">Asif</span>
          </h1>
          <p className="text-gray-400 max-w-md mb-8">
            MERN Stack Developer who enjoys turning "what if?" into "it works."
            Building thoughtful web experiences with code, creativity, and
            curiosity.
          </p>
          <div className="flex flex-wrap gap-4">
         <a   
              href="#contact"
              className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg font-semibold text-white border border-[#1c283c] hover:border-blue-500 transition-colors"
            >
              View work
            </a>
            <a
              href="/Lubaiqa-CV.pdf"
              download
              className="px-6 py-3 rounded-lg font-semibold text-white border border-[#1c283c] hover:border-blue-500 transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={profileImg}
            alt="Lubaiqa Asif"
            className="w-full max-w-md h-auto object-contain rounded-2xl"
          />
        </div>
      </div>
    </header>
  );
}

export default Hero;