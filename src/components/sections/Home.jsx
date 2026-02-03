import { RevealOnScroll } from "../RevealOnScroll"

export const Home = () => {
    return <section 
        id="home"
        className="min-h-screen flex items-center justify-center relative"
    >
        <RevealOnScroll>
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl ml:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent leading-right">
                Isabela Fenner
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                I am a <strong>Dartmouth '27</strong> studying <strong> Computer Science, Applied Math, and French</strong>. 
                I am passionate about applying my quantitative skills to real-world problems, 
            and I am interested in the intersection of technology and healthcare, as well as computational modeling and financial markets. 
            </p>
            
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                <strong>Explore this site to learn more about my experiences!</strong>
            </p>

            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded 
                        font-medium transition relative overflow-hitten hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4">
                    View Projects
                </a>

            </div>
        </div>
        </RevealOnScroll>

    </section>
}