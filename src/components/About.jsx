import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-12 gap-8 items-start"
        >
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-gray-600 leading-relaxed">
              I’m Punit, a curious learner with a growing interest in business, branding, digital products, and creative thinking. I enjoy understanding how ideas become products and how brands connect with people.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
