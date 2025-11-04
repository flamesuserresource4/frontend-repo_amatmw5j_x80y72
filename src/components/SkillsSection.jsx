import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Server } from 'lucide-react';

const skills = [
  {
    title: 'Mobile UI/UX',
    icon: Code,
    items: ['Flutter', 'Dart', 'Provider/Bloc', 'Animations', 'Firebase'],
    gradient: 'from-fuchsia-500/20 via-violet-500/20 to-cyan-500/20',
  },
  {
    title: 'Web Frontend',
    icon: Layers,
    items: ['Angular', 'TypeScript', 'Tailwind', 'Framer Motion', 'PWAs'],
    gradient: 'from-cyan-500/20 via-sky-500/20 to-emerald-500/20',
  },
  {
    title: 'Backend & Cloud',
    icon: Server,
    items: ['Java (Spring Boot)', 'Node.js', 'REST APIs', 'Auth & Security', 'CI/CD'],
    gradient: 'from-amber-500/20 via-rose-500/20 to-fuchsia-500/20',
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative mx-auto w-full max-w-6xl px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl"
      >
        Core Skills
      </motion.h2>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ title, icon: Icon, items, gradient }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className={`pointer-events-none absolute -inset-1 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br ${gradient}`} />

            <div className="relative z-10">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <Icon className="h-5 w-5 text-slate-100" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-300/90">
                {items.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
