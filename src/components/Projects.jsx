import { motion } from "framer-motion";

const projects = [
  {
    title: "Project Alpha",
    description: "A placeholder project focusing on branding concepts and presentation design.",
  },
  {
    title: "Market Insights",
    description: "Research-based project exploring consumer behavior and digital platforms.",
  },
  {
    title: "Digital Product Mockup",
    description: "Conceptual experience for a simple, user-friendly product interface.",
  },
  {
    title: "Presentation Framework",
    description: "Template system for fast, clean PPT creation and storytelling.",
  },
];

function ProjectCard({ title, description }) {
  return (
    <div className="rounded-2xl bg-white ring-1 ring-black/5 shadow-sm p-6 flex flex-col">
      <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
      <p className="mt-2 text-gray-600 flex-1">{description}</p>
      <div className="mt-4">
        <a
          href="#"
          className="inline-flex items-center rounded-full bg-blue-600 text-white px-4 py-2 text-sm hover:bg-blue-700 transition-colors"
        >
          View More
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-gray-900 mb-8"
        >
          Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
