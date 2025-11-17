import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-blue-50/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-gray-900 mb-8"
        >
          Experience
        </motion.h2>

        <div className="rounded-2xl bg-white ring-1 ring-black/5 shadow-sm p-6">
          <h3 className="font-semibold text-gray-900">Internship at Bajaj Finserv (Digital Platforms)</h3>
          <div className="mt-2 text-gray-700 text-sm">Role: Intern — Digital Platforms</div>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>• Assisted with content and basic research for digital platform initiatives.</li>
            <li>• Helped prepare reports and presentations for internal stakeholders.</li>
            <li>• Collaborated with teams to support day-to-day operations and documentation.</li>
          </ul>
          <div className="mt-3 text-gray-700">
            Outcomes: Improved presentation quality, gained exposure to platform workflows, and strengthened communication skills.
          </div>
        </div>
      </div>
    </section>
  );
}
