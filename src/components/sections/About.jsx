import { RevealOnScroll } from "../RevealOnScroll"
import { SiPython, SiNumpy, SiPandas, SiJupyter, SiReact, SiTailwindcss, SiGit } from "react-icons/si";
import { EducationExperience } from "../EducationExperience";

const icons = [
  { Icon: SiPython, color: "#3776AB" },
  { Icon: SiNumpy, color: "#013243" },
  { Icon: SiPandas, color: "#150458" },
  { Icon: SiJupyter, color: "#F37626" },
  { Icon: SiReact, color: "#61DAFB" },
  { Icon: SiTailwindcss, color: "#38BDF8" },
  { Icon: SiGit, color: "#F05032" },
];

export const SkillIcons = () => (
  <div className="mt-4 flex items-center justify-center gap-8">
    {icons.map(({ Icon, color }, i) => (
      <Icon
        key={i}
        className="text-3xl hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition"
        style={{ color }}
        onMouseEnter={(e) => (e.currentTarget.style.color = color)}
        onMouseLeave={(e) => (e.currentTarget.style.color = "")}
      />
    ))}
  </div>
);



export const About = () => {
    const languages = ["Python", "C", "Java", "JavaScript", "SQL", "Bash"]
    const frontendSkills = ["React", "TailwindCSS", "Vite"];
    const backendSkills = ["Node.js", "Linux", "Git", "API Implementation", "DSA"];
    const dataMLSkills = ["NumPy", "Pandas", "Matplotlib", "SciPy", "Sklearn", "Seaborn"]
  
    return (
      <section 
      id="about" 
      className="min-h-screen flex items-center justify-center py-20"
      >

        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent text-center">
            About Me
          </h2>
  
          <div className="rounded-xl p-8 border border-transparent hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
            My course, project, and research work at Dartmouth has prepared me for <strong>software and algorithmn development, statistical analysis, mathematical modeling, and numerical analysis</strong>. 
            My interests outside of the classroom include music, hiking, and teaching. 
            </p>

            <EducationExperience />
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Languages */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Data */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Data / ML</h3>
                <div className="flex flex-wrap gap-2">
                  {dataMLSkills.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
  
              {/* Backend */}
              <div className="rounded-xl p-6 mb-4 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
            <SkillIcons />
          </div>

        </div>
        </RevealOnScroll>
      </section>
    );
  };
  