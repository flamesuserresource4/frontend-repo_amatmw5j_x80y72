import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="relative mx-auto w-full max-w-6xl px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl"
      >
        Let’s Build Something Great
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
      >
        <p className="mx-auto max-w-3xl text-center text-slate-200/85">
          Open to full‑time roles, freelance projects, and collaborations. If you’re hiring or have a project in mind,
          let’s connect.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hello@sathish.dev"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 hover:bg-white/10"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href="https://github.com/"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
