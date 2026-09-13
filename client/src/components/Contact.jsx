import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // "sending" | "success" | "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 border-b border-[#1c283c]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="mb-12 text-center">
          <h2 className="group inline-block cursor-default text-3xl font-bold text-white relative pb-3">
            <span className="transition-colors duration-300 group-hover:text-blue-400">
              Contact
            </span>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[3px] w-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-300 group-hover:w-24"></span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Have an internship opening or a project in mind? Let's talk.
          </p>
        </div>

        <div className="bg-[#101a2c] border border-[#1c283c] rounded-2xl p-10 grid md:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full bg-[#0d1420] border border-[#1c283c] rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@email.com"
                className="w-full bg-[#0d1420] border border-[#1c283c] rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Say hello..."
                className="w-full bg-[#0d1420] border border-[#1c283c] rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-6 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
            {status === "success" && (
              <p className="text-green-400 text-sm">
                Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm">
                Something went wrong. Please try again.
              </p>
            )}
          </form>

          <div className="flex flex-col justify-center gap-5">
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <FaMapMarkerAlt className="text-blue-500" size={16} /> Faisalabad,
              Pakistan
            </div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=lubaiqa.asif01@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors"
            >
              <FaEnvelope className="text-blue-500" size={16} />{" "}
              lubaiqa.asif01@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/lubaiqa-asif-8aa1b9390/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors"
            >
              <FaLinkedin className="text-blue-500" size={16} />{" "}
              linkedin.com/in/lubaiqa-asif
            </a>
            <a
              href="https://github.com/lubaiqa"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors"
            >
              <FaGithub className="text-blue-500" size={16} />{" "}
              github.com/lubaiqa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
