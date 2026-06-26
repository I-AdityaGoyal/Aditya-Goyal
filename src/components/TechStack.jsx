import { useRef } from 'react'
import { motion } from 'framer-motion'
import {
  SiPython,
  SiFastapi,
  SiLangchain,
  SiOpenai,
  SiAnthropic,
  SiClaude,
  SiGooglegemini,
  SiGooglecloud,
  SiPytorch,
  SiTensorflow,
  SiHuggingface,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiOllama,
  SiDocker,
  SiRedis,
  SiStreamlit,
  SiJupyter,
  SiAnaconda,
  SiGit,
  SiGithub,
  SiMongodb,
  SiSqlite,
} from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc'
import { FaDiagramProject, FaAws, FaDatabase } from 'react-icons/fa6'
import { TbApi, TbVector, TbVectorTriangle, TbDatabase } from 'react-icons/tb'
import { skills } from '../data/info'
import SectionHeading from './SectionHeading'

const iconRegistry = {
  python: SiPython,
  fastapi: SiFastapi,
  langchain: SiLangchain,
  langgraph: FaDiagramProject,
  openai: SiOpenai,
  anthropic: SiAnthropic,
  gemini: SiGooglegemini,
  pytorch: SiPytorch,
  tensorflow: SiTensorflow,
  huggingface: SiHuggingface,
  sklearn: SiScikitlearn,
  pandas: SiPandas,
  numpy: SiNumpy,
  opencv: SiOpencv,
  ollama: SiOllama,
  azure: VscAzure,
  docker: SiDocker,
  redis: SiRedis,
  streamlit: SiStreamlit,
  jupyter: SiJupyter,
  anaconda: SiAnaconda,
  git: SiGit,
  github: SiGithub,
  claudecode: SiClaude,
  codex: SiOpenai,
  sql: FaDatabase,
  mongodb: SiMongodb,
  sqlite: SiSqlite,
  vectordb: TbVectorTriangle,
  faiss: TbVector,
  lancedb: TbDatabase,
  chromadb: FaDatabase,
  graphapi: TbApi,
  gcp: SiGooglecloud,
  aws: FaAws,
}

// Official brand colors. A few logos whose true color is near-black or near-white
// (GitHub, Anthropic, LangChain, pandas, NumPy, Ollama) use a readable variant
// so they stay visible on the dark background.
const brandColor = {
  python: '#3776AB',
  fastapi: '#05998B',
  langchain: '#1C9C7C',
  langgraph: '#2F9E8F',
  openai: '#10A37F',
  anthropic: '#D97757',
  gemini: '#4988F5',
  pytorch: '#EE4C2C',
  tensorflow: '#FF6F00',
  huggingface: '#FFD21E',
  sklearn: '#F7931E',
  pandas: '#E70488',
  numpy: '#4DABCF',
  opencv: '#5C3EE8',
  ollama: '#E5E7EB',
  azure: '#0089D6',
  docker: '#2496ED',
  redis: '#FF4438',
  streamlit: '#FF4B4B',
  jupyter: '#F37626',
  anaconda: '#44A833',
  git: '#F05032',
  github: '#F0F6FC',
  claudecode: '#D97757',
  codex: '#10A37F',
  sql: '#4479A1',
  mongodb: '#47A248',
  sqlite: '#4FB8E8',
  vectordb: '#14B8A6',
  faiss: '#0467DF',
  lancedb: '#22D3EE',
  chromadb: '#FF7043',
  graphapi: '#2F6FED',
  gcp: '#4285F4',
  aws: '#FF9900',
}

export default function TechStack() {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <section id="skills" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading kicker="05 — Toolbox" align="center">
        Tech <span className="text-gradient">Stack</span>
      </SectionHeading>

      <p className="mx-auto mt-4 max-w-md text-center text-sm text-slate-400">
        The frameworks, models, and infrastructure I reach for to build and ship production AI.
      </p>

      <div
        ref={ref}
        onMouseMove={onMove}
        className="group relative mx-auto mt-14 max-w-4xl rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
      >
        {/* cursor spotlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(240px circle at var(--mx) var(--my), rgb(var(--accent-rgb) / 0.14), transparent 70%)',
          }}
        />

        <div className="relative grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-6">
          {skills.map((skill, i) => {
            const Icon = iconRegistry[skill.icon]
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: (i % 6) * 0.05 }}
                className="group/tile flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-2 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-accent/5"
              >
                {Icon ? (
                  <Icon
                    className="text-3xl transition-transform duration-300 group-hover/tile:scale-110 sm:text-4xl"
                    style={{ color: brandColor[skill.icon] || '#cbd5e1' }}
                  />
                ) : (
                  <span className="text-2xl">{skill.name[0]}</span>
                )}
                <span className="font-mono text-[10px] text-slate-500 sm:text-[11px]">
                  {skill.name}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
