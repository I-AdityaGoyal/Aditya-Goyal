import { motion } from 'framer-motion'
import { SiKaggle, SiLeetcode, SiYoutube } from 'react-icons/si'
import { FiArrowUpRight, FiArrowRight, FiAward } from 'react-icons/fi'
import { kaggle, leetcode, youtube } from '../data/info'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

// Each card animates on its own (instead of relying on a parent
// staggerChildren variant) so a card never gets stuck hidden.
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
})

const cardClass =
  'group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-accent/40 sm:p-7'

function KaggleCard() {
  return (
    <motion.div {...reveal(0)} className={cardClass}>
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-0" />

      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-xl border border-[#20beff]/30 bg-[#20beff]/10 text-2xl text-[#20beff]">
          <SiKaggle />
        </span>
        <div>
          <h3 className="text-xl font-bold text-slate-100">Kaggle</h3>
          <p className="font-mono text-xs uppercase tracking-wide text-accent/80">
            {kaggle.rankLabel}
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-end gap-5">
        <div>
          <div className="text-5xl font-bold text-gradient">{kaggle.rank}</div>
          <div className="mt-1 text-xs text-slate-500">Global rank</div>
        </div>
        <div className="mb-1 flex gap-5 border-l border-white/10 pl-5">
          <div>
            <div className="text-2xl font-bold text-slate-100">{kaggle.notebooks}</div>
            <div className="text-xs text-slate-500">Notebooks</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-100">{kaggle.upvotes}</div>
            <div className="text-xs text-slate-500">Upvotes</div>
          </div>
        </div>
      </div>

      <ul className="mt-5 space-y-2">
        {kaggle.highlights.slice(0, 3).map((nb) => (
          <li key={nb.title}>
            <a
              href={nb.url}
              target="_blank"
              rel="noreferrer"
              className="group/row flex items-center justify-between gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 transition-colors hover:border-accent/30 hover:bg-white/[0.04]"
            >
              <span className="truncate text-sm text-slate-300 group-hover/row:text-accent">
                {nb.title}
              </span>
              <span className="shrink-0 font-mono text-xs text-slate-500">▲ {nb.votes}</span>
            </a>
          </li>
        ))}
      </ul>

      <a
        href={kaggle.profile}
        target="_blank"
        rel="noreferrer"
        className="mt-auto inline-flex items-center gap-1.5 self-start pt-6 text-sm font-medium text-accent transition-colors hover:text-accent-2"
      >
        View Kaggle profile
        <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </motion.div>
  )
}

function LeetCodeCard() {
  return (
    <motion.div {...reveal(0.1)} className={cardClass}>
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#ffa116]/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-0" />

      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-xl border border-[#ffa116]/30 bg-[#ffa116]/10 text-2xl text-[#ffa116]">
          <SiLeetcode />
        </span>
        <div>
          <h3 className="text-xl font-bold text-slate-100">LeetCode</h3>
          <a
            href={leetcode.url}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs uppercase tracking-wide text-accent/80 hover:text-accent"
          >
            {leetcode.handle}
          </a>
        </div>
      </div>

      <div className="mt-5 flex items-end gap-2">
        <div className="text-5xl font-bold text-gradient">{leetcode.solved}</div>
        <div className="mb-1.5 text-sm text-slate-500">/ {leetcode.total} solved</div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {leetcode.breakdown.map((b) => (
          <div
            key={b.label}
            className="rounded-lg border border-white/5 bg-white/[0.02] px-2 py-2.5 text-center"
          >
            <div className="font-mono text-[11px] uppercase tracking-wide" style={{ color: b.color }}>
              {b.label}
            </div>
            <div className="mt-1 text-xl font-bold text-slate-100">{b.solved}</div>
            <div className="text-[10px] text-slate-500">/ {b.total}</div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <span className="text-xs text-slate-500">
          Global rank <span className="font-mono text-slate-300">#{leetcode.rank}</span>
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[11px] font-medium text-amber-300">
          <FiAward className="text-xs" /> {leetcode.badge}
        </span>
      </div>

      <a
        href={leetcode.url}
        target="_blank"
        rel="noreferrer"
        className="mt-auto inline-flex items-center gap-1.5 self-start pt-6 text-sm font-medium text-accent transition-colors hover:text-accent-2"
      >
        View LeetCode profile
        <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </motion.div>
  )
}

function YouTubeCard() {
  return (
    <motion.div {...reveal(0.2)} className={cardClass}>
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#ff0000]/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-0" />

      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-xl border border-[#ff0000]/30 bg-[#ff0000]/10 text-2xl text-[#ff4d4d]">
          <SiYoutube />
        </span>
        <div>
          <h3 className="text-xl font-bold text-slate-100">YouTube · DSA</h3>
          <a
            href={youtube.url}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs uppercase tracking-wide text-accent/80 hover:text-accent"
          >
            {youtube.handle}
          </a>
        </div>
      </div>

      <div className="mt-5 flex items-end gap-5">
        <div>
          <div className="text-5xl font-bold text-gradient">{youtube.subscribers}</div>
          <div className="mt-1 text-xs text-slate-500">Subscribers</div>
        </div>
        <div className="mb-1 border-l border-white/10 pl-5">
          <div className="text-2xl font-bold text-slate-100">{youtube.videos}</div>
          <div className="text-xs text-slate-500">Videos</div>
        </div>
      </div>

      <p className="mt-5 line-clamp-2 text-sm leading-relaxed text-slate-400">{youtube.blurb}</p>

      <ul className="mt-5 space-y-2">
        {youtube.playlists.slice(0, 3).map((pl) => (
          <li
            key={pl.title}
            className="flex items-center justify-between gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
          >
            <span className="truncate text-sm text-slate-300">{pl.title}</span>
            <span className="shrink-0 font-mono text-xs text-slate-500">{pl.count} lessons</span>
          </li>
        ))}
      </ul>

      <a
        href={youtube.url}
        target="_blank"
        rel="noreferrer"
        className="group/btn mt-auto inline-flex items-center gap-2 self-start pt-6 text-sm font-medium text-accent transition-colors hover:text-accent-2"
      >
        Watch on YouTube
        <FiArrowRight className="transition-transform group-hover/btn:translate-x-0.5" />
      </a>
    </motion.div>
  )
}

export default function Community() {
  return (
    <section id="community" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading kicker="06 — Community" align="center">
        Beyond the <span className="text-gradient">9-to-5</span>
      </SectionHeading>

      <Reveal delay={0.05}>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-400">
          I share what I learn — top-voted data-science notebooks on Kaggle, a hands-on DSA
          teaching channel on YouTube, and steady problem-solving on LeetCode.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <KaggleCard />
        <LeetCodeCard />
        <YouTubeCard />
      </div>
    </section>
  )
}
