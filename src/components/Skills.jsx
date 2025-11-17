import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Card = ({ title, items }) => (
  <div className="rounded-2xl bg-white ring-1 ring-black/5 shadow-sm p-6">
    <h3 className="font-semibold text-gray-900 flex items-center gap-2">
      <Star size={18} className="text-blue-600" /> {title}
    </h3>
    <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-gray-700">
      {items.map((i) => (
        <li key={i} className="rounded-lg bg-gray-50 px-3 py-2">
          {i}
        </li>
      ))}
    </ul>
  </div>
);

export default function Skills() {
  const soft = ["Communication", "Teamwork", "Problem-solving", "Creativity"];
  const hard = [
    "Basic marketing knowledge",
    "PPT creation",
    "Report writing",
    "Research",
  ];

  return (
    <section id="skills" className="py-16 bg-blue-50/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-gray-900 mb-8"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Card title="Soft Skills" items={soft} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <Card title="Hard Skills" items={hard} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
