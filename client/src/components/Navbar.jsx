import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Profile", href: "#profile" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070b14]/90 backdrop-blur-md border-b border-[#1c283c]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
        <div className="group flex items-center gap-1 text-2xl font-bold cursor-pointer">
          <span className="text-blue-500 font-mono transition-transform duration-300 group-hover:-translate-x-1">
            &lt;
          </span>
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] group-hover:animate-[shine_1.5s_linear_infinite]">
            <b>Lubaiqa Dev</b>
          </span>
          <span className="text-blue-500 font-mono transition-transform duration-300 group-hover:translate-x-1">
            /&gt;
          </span>
        </div>

        <div className="hidden md:flex gap-10 text-base text-gray-300">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-1 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
