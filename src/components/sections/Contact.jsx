import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
            Get in Touch
          </h2>

          <div className="flex flex-col items-center space-y-4">
            {/* Email */}
            <p className="text-gray-300 text-xl">
              Email:{" "}
              <a
                href="mailto:isabela.fenner.27@dartmouth.edu"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                isabela.fenner.27@dartmouth.edu
              </a>
            </p>

            {/* Links */}
            <div className="flex text-xl space-x-8 pt-4">
              <a
                href="https://www.linkedin.com/in/isabelafenner"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/isabelafenner"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
