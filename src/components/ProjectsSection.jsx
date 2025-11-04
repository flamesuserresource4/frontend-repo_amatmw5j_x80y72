import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'FinFlo — Personal Finance App',
    desc: 'A Flutter app with real‑time analytics, category budgeting, and delightful micro‑interactions.',
    stack: ['Flutter', 'Firebase', 'Riverpod'],
    link: '#',
    hue: 'from-fuchsia-500/30 to-violet-500/30',
  },
  {
    title: 'PulseCRM — Sales Dashboard',
    desc: 'Angular web app for teams with role‑based access, charts, and offline‑first syncing.',
    stack: ['Angular', 'NgRx', 'Tailwind'],
    link: '#',
    hue: 'from-cyan-500/30 to-emerald-500/30',
  },
  {
    title: 'TrackX — Logistics Platform',
    desc: 'Spring Boot APIs powering shipment tracking and alerts with robust observability.',
    stack: ['Spring Boot', 'PostgreSQL', 'Grafana'],
    link: '#',
    hue: 'from-amber-500/30 to-rose-500/30',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative mx-auto w-full max-w-6xl px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl"
      >
        Featured Projects
      </motion.h2>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <motion.a
            key={p.title}
            href={p.link}
            target={p.link.startsWith('http') ? '_blank' : undefined}
            rel={p.link.startsWith('http') ? 'noreferrer' : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className={`pointer-events-none absolute -inset-1 bg-gradient-to-br ${p.hue} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />
            <div className="relative z-10">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <ExternalLink className="h-4 w-4 text-slate-300/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <p className="mt-2 text-sm text-slate-300/90">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200/90">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
