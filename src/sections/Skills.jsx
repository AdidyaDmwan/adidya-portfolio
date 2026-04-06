import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const skillsData = [
  // Frontend
  { name: 'HTML & CSS', category: 'frontend', label: 'Frontend', pct: 90 },
  { name: 'JavaScript', category: 'frontend', label: 'Frontend', pct: 85 },
  { name: 'React JS', category: 'frontend', label: 'Frontend', pct: 82 },
  { name: 'Next.js 14', category: 'frontend', label: 'Frontend', pct: 78 },
  { name: 'Tailwind CSS', category: 'frontend', label: 'Frontend', pct: 88 },

  // Backend
  { name: 'FastAPI', category: 'backend', label: 'Backend', pct: 78 },
  { name: 'PostgreSQL', category: 'backend', label: 'Backend', pct: 75 },
  { name: 'MySQL', category: 'backend', label: 'Backend', pct: 75 },
  { name: 'Supabase', category: 'backend', label: 'Backend', pct: 78 },
  { name: 'Docker', category: 'backend', label: 'Backend', pct: 70 },

  // Mobile
  { name: 'Flutter', category: 'mobile', label: 'Mobile', pct: 75 },
  { name: 'Riverpod', category: 'mobile', label: 'Mobile', pct: 70 },

  // Java
  { name: 'Java', category: 'java', label: 'Java', pct: 82 },
  { name: 'OOP Principles', category: 'java', label: 'Java', pct: 80 },

  // Tools
  { name: 'Git & GitHub', category: 'tools', label: 'Tools', pct: 85 },
  { name: 'Groq AI API', category: 'tools', label: 'Tools', pct: 78 },
  { name: 'Figma', category: 'tools', label: 'Tools', pct: 70 },
]

const badgeStyles = {
  frontend: 'bg-blue-50 text-blue-600',
  backend: 'bg-green-50 text-green-600',
  mobile: 'bg-purple-50 text-purple-600',
  java: 'bg-orange-50 text-orange-500',
  tools: 'bg-yellow-50 text-yellow-600',
}

const filters = ['All', 'Frontend', 'Backend', 'Mobile', 'Java', 'Tools']

const ProgressBar = ({ pct }) => {
  const [width, setWidth] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(pct), 100)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [pct])

  return (
    <div ref={ref}>
      <div className="w-full bg-surface-alt rounded-full h-1.5 overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
          style={{ width: width + '%' }}
        ></div>
      </div>
      <p className="text-right text-xs text-placeholder mt-1">{pct}%</p>
    </div>
  )
}

const Skills = () => {
  const [active, setActive] = useState('All')

  const filtered = skillsData.filter((s) =>
    active === 'All' ? true : s.label === active
  )

  return (
    <section id="skills" className="py-24 bg-surface-alt">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-3">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted text-sm">Technologies & tools I work with</p>
        </motion.div>

        <div className="flex justify-center gap-2 flex-wrap mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                active === f
                  ? 'bg-primary text-white border-primary shadow-sm'
                  : 'bg-white text-muted border-border hover:border-primary hover:text-primary'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white border border-border rounded-2xl p-5 hover:border-primary-border hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-1">
                <p className="font-semibold text-heading text-sm">{skill.name}</p>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded ${badgeStyles[skill.category]}`}>
                  {skill.label.toUpperCase()}
                </span>
              </div>
              <p className="text-xs text-muted mb-4">{skill.label}</p>
              <ProgressBar pct={skill.pct} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills