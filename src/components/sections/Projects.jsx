import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return (
        <section 
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent text-center">
                    {" "}
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Project 1 */}
                    <div className="p-6 rounded-xl border border-transparent hover:-translate-y-1 hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">
                            Tiny Search Engine
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Description
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["C", "Documentation"].map((tech, key) => (
                                <span
                                key={tech}
                                className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                              >
                                {tech}
                              </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a
                                href="#"
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                {" "}
                                View Project → {" "}
                            </a>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="p-6 rounded-xl border border-transparent hover:-translate-y-1 hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">
                            Nuggets
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Description
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["C", "Documentation"].map((tech, key) => (
                                <span
                                key={tech}
                                className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                              >
                                {tech}
                              </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a
                                href="#"
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                {" "}
                                View Project → {" "}
                            </a>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="p-6 rounded-xl border border-transparent hover:-translate-y-1 hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">
                            Lyrical Complexity
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Description
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["C", "Documentation"].map((tech, key) => (
                                <span
                                key={tech}
                                className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                              >
                                {tech}
                              </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a
                                href="#"
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                {" "}
                                View Project → {" "}
                            </a>
                        </div>
                    </div>


                    {/* Project 4 */}
                    <div className="p-6 rounded-xl border border-transparent hover:-translate-y-1 hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">
                            Kevin Bacon
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Description
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["C", "Documentation"].map((tech, key) => (
                                <span
                                key={tech}
                                className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                              >
                                {tech}
                              </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a
                                href="#"
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                {" "}
                                View Project → {" "}
                            </a>
                        </div>
                    </div>

                    {/* Project 5 */}
                    <div className="p-6 rounded-xl border border-transparent hover:-translate-y-1 hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">
                            Huffman Encoding
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Description
                        </p>
                        <div>
                            {["C", "Documentation"].map((tech, key) => (
                                <span
                                key={tech}
                                className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                              >
                                {tech}
                              </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a
                                href="#"
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                {" "}
                                View Project → {" "}
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}