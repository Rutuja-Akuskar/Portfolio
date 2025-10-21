import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import therapy from "../assets/therapy.jpeg";

const Welcome = () => {
  const { theme } = useTheme();
  return (
    <section
      className={`relative overflow-hidden min-h-screen flex items-center justify-center font-sans ${
        theme === "dark"
          ? "bg-card text-slate-100"
          : "bg-gradient-to-br from-white via-teal-50 to-white text-slate-900"
      }`}
    >
      {/* Background blobs */}
      <div
        className={`absolute top-[-120px] left-[-120px] w-[300px] h-[300px] rounded-full blur-3xl animate-[ping_6s_ease-in-out_infinite] ${
          theme === "dark"
            ? "bg-emerald-800 opacity-10 mix-blend-screen"
            : "bg-teal-300 opacity-20"
        }`}
      />
      <div
        className={`absolute bottom-[-120px] right-[-100px] w-[260px] h-[260px] rounded-full blur-2xl animate-[ping_5s_ease-in-out_infinite] ${
          theme === "dark"
            ? "bg-emerald-700 opacity-10 mix-blend-screen"
            : "bg-teal-400 opacity-20"
        }`}
      />

      {/* Main content grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Text Content */}
        <div className="text-center md:text-left space-y-6 animate-[fadeInUp_1s_ease-out]">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight ${
              theme === "dark" ? "text-emerald-400" : "text-teal-600"
            }`}
          >
            <span
              className={`block ${
                theme === "dark" ? "text-slate-100" : "text-gray-900"
              }`}
            >
              Welcome to
            </span>
            <span
              className={`block mt-2 bg-clip-text text-transparent bg-gradient-to-r ${
                theme === "dark"
                  ? "from-emerald-400 to-teal-300"
                  : "from-teal-600 to-emerald-400"
              }`}
            >
              Dr. Rutuja Physiotherapy Clinic
            </span>
          </h1>

          <p
            className={`text-lg md:text-xl leading-relaxed ${
              theme === "dark" ? "text-slate-300" : "text-gray-700"
            }`}
          >
            At <strong className="text-teal-600">Dr. Rutuja’s Clinic</strong>, we
            believe every patient deserves a life free from pain and
            limitations.
          </p>

          <p
            className={`text-lg md:text-xl leading-relaxed ${
              theme === "dark" ? "text-slate-300" : "text-gray-700"
            }`}
          >
            Our approach is personalized — helping you move better, regain
            strength, and restore your confidence in motion.
          </p>

          <p
            className={`text-lg md:text-xl leading-relaxed ${
              theme === "dark" ? "text-slate-300" : "text-gray-700"
            }`}
          >
            Whether you're healing from an injury, surgery, or chronic pain —
            your journey to wellness begins here.
          </p>

          <div className="pt-4">
            <button
              className={`relative px-10 py-4 font-semibold text-lg rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl ${
                theme === "dark"
                  ? "bg-emerald-500 text-slate-900 hover:bg-emerald-600"
                  : "bg-gradient-to-r from-teal-500 to-emerald-400 text-white hover:from-teal-600 hover:to-emerald-500"
              }`}
            >
              Get Started
              <div className="absolute inset-0 rounded-full bg-white opacity-10 hover:opacity-20 transition duration-300" />
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center md:justify-end animate-[fadeIn_1.5s_ease-out]">
          <img
            src={therapy}
            alt="Clinic Illustration"
            className="w-[90%] max-w-md drop-shadow-2xl rounded-2xl border border-gray-100"
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
