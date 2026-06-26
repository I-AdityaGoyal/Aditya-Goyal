import { motion } from 'framer-motion'
import { FiArrowRight, FiArrowUpRight, FiGithub, FiLinkedin } from 'react-icons/fi'
import { SiPython, SiOpenai, SiAnthropic, SiLangchain, SiPytorch, SiHuggingface } from 'react-icons/si'
import { profile, socials } from '../data/info'
import { usePrefersReducedMotion } from '../lib/hooks'
import Typewriter from './Typewriter'

// Tech badges that revolve around the avatar ring (evenly spaced).
const orbit = [SiPython, SiOpenai, SiAnthropic, SiLangchain, SiPytorch, SiHuggingface]
const ORBIT_DURATION = 26 // seconds per full revolution

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const [firstName, ...restName] = profile.name.split(' ')
  const lastName = restName.join(' ')
  const reduceMotion = usePrefersReducedMotion()
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center gap-12 px-5 pb-16 pt-28 sm:px-8 md:grid md:grid-cols-[1.1fr_0.9fr] md:gap-8 md:pt-24"
    >
      {/* ---- text column ---- */}
      <motion.div variants={container} initial="hidden" animate="show" className="text-center md:text-left">
        <motion.p
          variants={item}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-slate-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for opportunities
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Hi, I'm <span className="text-gradient text-glow">{firstName}</span>
          <br className="hidden sm:block" /> {lastName}
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-4 flex items-center justify-center gap-2 text-xl font-medium text-slate-200 sm:text-2xl md:justify-start"
        >
          <span className="text-slate-500">&lt;</span>
          <Typewriter words={profile.roles} className="font-mono text-accent" />
          <span className="text-slate-500">/&gt;</span>
        </motion.div>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:mx-0 md:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-wrap items-center justify-center gap-4 md:justify-start"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-[var(--bg)] transition-all hover:shadow-[0_0_30px_-4px_rgb(var(--accent-rgb))]"
          >
            View My Work
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-slate-200 transition-colors hover:border-accent/50 hover:text-accent"
          >
            Get in Touch
            <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-8 flex items-center justify-center gap-5 md:justify-start">
          <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-400 transition-colors hover:text-accent">
            <FiGithub className="text-xl" />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-400 transition-colors hover:text-accent">
            <FiLinkedin className="text-xl" />
          </a>
          <span className="font-mono text-xs text-slate-600">// based in {profile.location}</span>
        </motion.div>
      </motion.div>

      {/* ---- avatar column ---- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto aspect-square w-64 sm:w-80 md:w-full md:max-w-md"
      >
        {/* glow */}
        <div className="absolute inset-6 rounded-full bg-accent/20 blur-3xl" />

        {/* rotating rings */}
        <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-accent/30" />
        <div
          className="absolute inset-4 rounded-full border border-accent/20"
          style={{ animation: 'spin 30s linear infinite reverse' }}
        />

        {/* core */}
        <div className="absolute inset-8 grid place-items-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm">
          {profile.photoUrl ? (
            <img src={profile.photoUrl} alt={profile.name} className="h-full w-full object-cover" />
          ) : (
            <span className="text-gradient text-7xl font-bold sm:text-8xl">{profile.initials}</span>
          )}
        </div>

        {/* orbiting tech badges — outer layer spins, icons stay upright */}
        <motion.div
          className="absolute inset-0"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: 'linear' }}
        >
          {orbit.map((Icon, i) => {
            const angle = (360 / orbit.length) * i
            return (
              // full-size layer rotated by the badge's angle, so the badge
              // pinned to its top edge lands on the orbit ring
              <div key={i} className="absolute inset-0" style={{ transform: `rotate(${angle}deg)` }}>
                <motion.div
                  className="absolute left-1/2 top-0 grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-[var(--bg-soft)]/80 text-accent shadow-lg backdrop-blur sm:h-12 sm:w-12"
                  style={{ x: '-50%', y: '-50%', rotate: -angle }}
                >
                  {/* counter-spin cancels the outer rotation to keep icons upright */}
                  <motion.span
                    animate={reduceMotion ? undefined : { rotate: -360 }}
                    transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: 'linear' }}
                  >
                    <Icon className="text-lg sm:text-xl" />
                  </motion.span>
                </motion.div>
              </div>
            )
          })}
        </motion.div>
      </motion.div>

      {/* scroll hint */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <span className="h-2 w-1 rounded-full bg-accent" />
        </span>
      </motion.a>
    </section>
  )
}
