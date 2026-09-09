import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-10">
      <div className="max-w-6xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-1 text-lg font-bold">
          <span className="text-blue-500 font-mono">&lt;</span>
          <span className="text-white">Lubaiqa</span>
          <span className="text-blue-500 font-mono">/&gt;</span>
          <span className="text-gray-500 font-normal text-sm ml-3">
            MERN Stack Developer
          </span>
        </div>

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/lubaiqa-asif-8aa1b9390/"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-full border border-[#1c283c] flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 transition-colors"
          >
            <FaLinkedin size={15} />
          </a>
          <a
            href="https://github.com/lubaiqa"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-full border border-[#1c283c] flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 transition-colors"
          >
            <FaGithub size={15} />
          </a>
        </div>
      </div>

      <p className="text-center text-gray-500 text-xs mt-8">
        &copy; 2026 Lubaiqa. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
