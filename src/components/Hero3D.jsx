import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Github, Linkedin, Download } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden">
      {/* Spline 3D scene as the main hero background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Glass content card */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-[0_0_1px_rgba(255,255,255,0.4),0_20px_80px_-20px_rgba(0,0,0,0.5)] p-8 md:p-10"
        >
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/90">
                <Rocket className="h-3.5 w-3.5 text-fuchsia-300" />
                <span>Flutter • Full-Stack • Premium Portfolio</span>
              </div>
              <h1 className="mt-4 font-semibold tracking-tight text-white">
                <span className="text-3xl leading-tight sm:text-4xl md:text-5xl">
                  P. Sathish Kumar
                </span>
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-200/80 sm:text-base">
                Flutter and Full‑Stack Developer crafting seamless mobile apps and scalable web platforms.
                Skilled in Flutter, Angular, React Native (Expo), and Java (Spring Boot).
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition-transform duration-200 hover:scale-[1.02]"
                >
                  Explore Projects
                </a>
                <a
                  href="https://github.com/" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 backdrop-blur hover:bg-white/10"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 backdrop-blur hover:bg-white/10"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-2 text-sm text-fuchsia-100 backdrop-blur hover:bg-fuchsia-500/20"
                >
                  <Download className="h-4 w-4" /> Get Resume
                </a>
              </div>
            </div>
            <div className="grid w-full max-w-md grid-cols-2 gap-3 md:max-w-sm">
              {[
                { label: 'Flutter', value: '5+ yrs' },
                { label: 'Angular', value: '4+ yrs' },
                { label: 'React Native (Expo)', value: '3+ yrs' },
                { label: 'Spring Boot', value: '4+ yrs' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg"
                >
                  <p className="text-xs text-slate-300/80">{item.label}</p>
                  <p className="mt-1 text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient ring overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[12%] h-56 w-56 -translate-x-1/2 rounded-full bg-gradient-to-br from-fuchsia-500/30 to-cyan-500/30 blur-2xl" />
      </div>
    </section>
  );
}
