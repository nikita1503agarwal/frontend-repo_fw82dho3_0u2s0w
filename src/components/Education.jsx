import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-gray-900 mb-8"
        >
          Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white ring-1 ring-black/5 shadow-sm p-6">
            <h3 className="font-semibold text-gray-900">Bachelor's Degree</h3>
            <p className="text-gray-600 mt-1">Placeholder University — Business-related field</p>
            <p className="text-gray-600">Year: 2021 – 2025</p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-black/5 shadow-sm p-6">
            <h3 className="font-semibold text-gray-900">Senior Secondary</h3>
            <p className="text-gray-600 mt-1">Placeholder School — Commerce Stream</p>
            <p className="text-gray-600">Year: 2019 – 2021</p>
          </div>
        </div>
      </div>
    </section>
  );
}
