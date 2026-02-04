import { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";

const cardClass =
  "p-6 rounded-xl border border-transparent hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all";

const Collapsible = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-transparent hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.08)] transition-all">
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between px-5 py-4 text-left rounded-xl hover:bg-white/[0.03] transition"
      >
        <span className="text-white font-semibold">{title}</span>
        <span className="text-gray-300 text-xl leading-none">
          {open ? "−" : "+"}
        </span>
      </button>

      <div
        className={`px-5 overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-[700px] pb-5 opacity-100" : "max-h-0 pb-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export const EducationExperience = () => {
  const courses = [
    "Machine Learning and Statistical Data Analysis",
    "Linear Regression Modeling",
    "Software Design and Implementation",
    "Object-Oriented Programming",
    "Probability",
    "Linear Algebra",
    "Discrete Mathematics",
  ];

  const experiences = [
    {
      role: "Center for Technology and Behavioral Health - Research Assistant",
      dates: "2025–Present",
      bullets: [
        "Interdisciplinary lab developing mobile applications that use digital biomarkers to enhance prediction and understanding of chronic post-surgical pain.",
        "Interviewing patients, creating app content, and supporting backend development",
      ],
    },
    {
      role: "Computer Science Teaching Assistant",
      dates: "2024-Present",
      bullets: [
        "Introduction to Programming (COSC1) & Software Design and Implementation (COSC50)",
        "Evaluating student code and communicating technical feedback on algorithmic design, data structure use, and coding style"
      ],
    },
    {
        role: "James O. Freedman Presidential Scholar",
        dates: "2025",
        bullets: [
          "Designed and tested hypothesis on in-group bias in LLM behavior",
          "Used iterative Python-based simulation through external APIs",
          "Applied statistical models using Pandas to extract insighst from large, noisy data",
        ],
      }
  ];

  return (
    <section
      id="education-experience"
      className="py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 w-full">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education card */}
            <div className={cardClass}>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">Education</h3>
              <p className="text-gray-400">
                Dartmouth College — B.A. Computer Science, Applied Math, French
              </p>
              <p className="text-gray-500 text-sm mt-1">2023–2027</p>

              <div className="mt-6 space-y-4">
                <Collapsible title="Relevant Coursework" defaultOpen>
                  <ul className="space-y-2 text-gray-300">
                    {courses.map((c) => (
                      <li key={c}>• {c}</li>
                    ))}
                  </ul>
                </Collapsible>

                <Collapsible title="Technical Focus Areas">
                  <ul className="space-y-2 text-gray-300">
                    <li>• Systems programming and performance-minded code</li>
                    <li>• Data analysis, modeling, and visualization</li>
                    <li>• Algorithmic problem solving</li>
                  </ul>
                </Collapsible>
              </div>
            </div>

            {/* Experience card */}
            <div className={cardClass}>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">Experience</h3>

              <div className="space-y-4">
                {experiences.map((exp) => (
                  <Collapsible
                    key={exp.role}
                    title={
                      <div className="flex flex-col">
                        <span className="text-white font-semibold">{exp.role}</span>
                        <span className="text-gray-500 text-sm">{exp.dates}</span>
                      </div>
                    }
                  >
                    <ul className="space-y-2 text-gray-300">
                      {exp.bullets.map((b) => (
                        <li key={b}>• {b}</li>
                      ))}
                    </ul>
                  </Collapsible>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
