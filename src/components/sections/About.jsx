import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {
    const frontendSkills = ["React", "TailwindCSS"];
    const backendSkills = ["Node.js", "Python"];
  
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
            <p className="text-gray-300 mb-6">something about me</p>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech) => (
                    <span
                      key={tech}
                      className="bg-green-500/10 text-green-400 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gird-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-transparent border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl fond-bold mb-4">
                        Education
                    </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>
                                B.A. in Math and Computer Science
                            </strong>
                        </li>
                        <li>
                                Relevant Coursework: Software Design and Implementation
                        </li>
                    </ul>

            </div>

          </div>
        </div>
        </RevealOnScroll>
      </section>
    );
  };
  