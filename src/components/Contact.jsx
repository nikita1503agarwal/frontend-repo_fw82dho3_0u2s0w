import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-blue-50/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-gray-900 mb-8"
        >
          Contact
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl bg-white ring-1 ring-black/5 shadow-sm p-6"
          >
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-1 w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="mt-1 w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-blue-600 text-white px-5 py-2.5 hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-2xl bg-white ring-1 ring-black/5 shadow-sm p-6"
          >
            <p className="text-gray-600">Connect on social platforms</p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://instagram.com/"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-pink-600 text-white px-4 py-2 text-sm hover:bg-pink-700"
                rel="noreferrer"
              >
                <Instagram size={16} /> Instagram
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-blue-700 text-white px-4 py-2 text-sm hover:bg-blue-800"
                rel="noreferrer"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
