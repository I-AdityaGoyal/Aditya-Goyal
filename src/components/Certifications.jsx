import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { certifications } from '../data/info'
import SectionHeading from './SectionHeading'

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-28"
    >
      <SectionHeading kicker="07 — Credentials" align="center">
        Certifications &amp; <span className="text-gradient">honors</span>
      </SectionHeading>

      <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title + cert.issuer}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
            className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.05]"
          >
            <div className="flex items-center justify-between">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                <FiAward />
              </span>
              <span className="font-mono text-xs text-slate-500">{cert.year}</span>
            </div>
            <h3 className="mt-4 text-sm font-semibold leading-snug text-slate-100">
              {cert.title}
            </h3>
            <p className="mt-1 text-xs text-slate-400">{cert.issuer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
