import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 bg-gradient-to-b from-white to-blue-50/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">Portfolio</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Hi, I’m Punit —
            <span className="block text-blue-700">A Passionate Learner & Future Business Professional</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-prose">
            I enjoy exploring business, branding, and digital products. I value creativity and clear thinking, and I love turning ideas into simple, impactful outcomes.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-5 py-2.5 shadow-sm hover:bg-blue-700 transition-colors"
            >
              <Download size={18} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-blue-700 px-5 py-2.5 shadow-sm ring-1 ring-blue-600/20 hover:ring-blue-600/40 hover:bg-blue-50 transition"
            >
              <Mail size={18} /> Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-xl bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">Photo Placeholder</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
