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
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Project 1 */}
                    <div className="p-6 rounded-xl border border-transparent hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Tiny Search Engine</h3>
                        <p className="text-gray-400 mb-4">C-based crawler, indexer, and ranked querier.</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["C", "Data Structures", "Documentation"].map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <a
                            href="mailto:isabela.fenner.27@dartmouth.edu?subject=GitHub%20Repo%20Access%20Request%20(Tiny%20Search%20Engine)"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            Request Access →
                        </a>
                    </div>

                    {/* Project 2 */}
                    <div className="p-6 rounded-xl border border-transparent hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Nuggets</h3>
                        <p className="text-gray-400 mb-4">Grid-based dungeon exploration game inspired by Rogue.</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["C", "Game Logic"].map((tech) => (
                                <span key={tech} className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <a
                            href="mailto:isabela.fenner.27@dartmouth.edu?subject=GitHub%20Repo%20Access%20Request%20(Nuggets)"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            Request Access →
                        </a>
                    </div>


                    {/* Project 4 */}
                    <div className="p-6 rounded-xl border border-transparent hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Kevin Bacon</h3>
                        <p className="text-gray-400 mb-4">Graph-based actor connectivity analysis.</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Graphs", "C"].map((tech) => (
                                <span key={tech} className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <a
                            href="mailto:isabela.fenner.27@dartmouth.edu?subject=GitHub%20Repo%20Access%20Request%20(Kevin%20Bacon)"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            Request Access →
                        </a>
                    </div>

                    {/* Project 5 */}
                    <div className="p-6 rounded-xl border border-transparent hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Huffman Encoding</h3>
                        <p className="text-gray-400 mb-4">Lossless compression using Huffman trees.</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["C", "Algorithms"].map((tech) => (
                                <span key={tech} className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <a
                            href="mailto:isabela.fenner.27@dartmouth.edu?subject=GitHub%20Repo%20Access%20Request%20(Huffman%20Encoding)"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            Request Access →
                        </a>
                    </div>

                    {/* Project 3 */}
                    <div className="p-6 rounded-xl border border-transparent hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Lyrical Complexity</h3>
                        <p className="text-gray-400 mb-4">Quantitative analysis of lyrical complexity vs. popularity.</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Python", "NLP", "Pandas"].map((tech) => (
                                <span key={tech} className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <a
                            href="https://drive.google.com/file/d/1kCqHsWZRLG7k6BAPshJu_dnr-rUEWaYG/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            View Analysis (PDF) →
                        </a>
                    </div>

                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}
