import { motion } from 'framer-motion'
import meetmindImg from '../assets/projects/meetmind.jpeg'
import hidayahImg from '../assets/projects/hidayah.jpg'
import expenseImg from '../assets/projects/expense.jpg'

const projectsData = [
  {
    id: 1,
    title: 'MeetMind',
    category: 'web',
    categoryLabel: 'WEB',
    description:
      'An AI-powered full stack meeting notes summarizer. Upload audio or text files and instantly get summaries, action items, and key decisions powered by Groq LLaMA AI.',
    tech: ['Next.js 14', 'FastAPI', 'PostgreSQL', 'Docker', 'Groq AI', 'TailwindCSS'],
    image: meetmindImg,
    // liveUrl: 'https://meetmind-kappa.vercel.app',
    apiUrl: 'https://meetmind-production.up.railway.app/docs',
    githubUrl: 'https://github.com/AdidyaDmwan/meetmind',
  },
  {
    id: 2,
    title: 'Document Extraction Pipeline',
    category: 'ai',
    categoryLabel: 'AI AUTOMATION',
    inDevelopment: true,
    description:
      'An intelligent end-to-end data extraction pipeline that converts invoices and document scans into structured data using Gemini API & Pydantic. Features automated business logic validation, human-in-the-loop review queues for edge cases, and test dataset accuracy evaluations.',
    tech: ['Python', 'Gemini API', 'Pydantic', 'SQLite', 'Streamlit'],
    image: null,
    liveUrl: null,
    apiUrl: null,
    githubUrl: 'https://github.com/AdidyaDmwan/doc-extraction',
  },
  {
    id: 3,
    title: 'Expense Tracker AI',
    category: 'mobile',
    categoryLabel: 'MOBILE',
    description:
      'A full-featured mobile expense tracker and budget planner built with Flutter. Includes AI financial advisor powered by Groq LLaMA that analyzes your real spending data and gives personalized insights in Bahasa Indonesia.',
    tech: ['Flutter', 'Supabase', 'Riverpod', 'Groq AI', 'PostgreSQL'],
    image: expenseImg,
    liveUrl: null,
    apiUrl: null,
    githubUrl: 'https://github.com/AdidyaDmwan/expense-tracker',
  },
  {
    id: 4,
    title: 'Hidayah',
    category: 'java',
    categoryLabel: 'JAVA',
    description:
      'A desktop game built using Java and Object-Oriented Programming principles. Features engineered game logic and an interactive UI for a seamless user experience.',
    tech: ['Java', 'OOP Principles'],
    image: hidayahImg,
    liveUrl: null,
    apiUrl: null,
    githubUrl: 'https://github.com/AdidyaDmwan/Hidayah-Game',
  },
]

const categoryStyles = {
  web: {
    badge: 'bg-primary-light text-primary',
    title: 'text-primary',
    tech: 'bg-primary-light text-primary',
    bg: 'bg-primary-light/50',
    iconColor: 'text-primary',
    icon: '🌐',
  },
  ai: {
    badge: 'bg-emerald-50 text-emerald-600',
    title: 'text-emerald-600',
    tech: 'bg-emerald-50 text-emerald-600',
    bg: 'bg-emerald-50/70',
    iconColor: 'text-emerald-500',
    icon: '🤖',
  },
  mobile: {
    badge: 'bg-purple-50 text-purple-600',
    title: 'text-purple-600',
    tech: 'bg-purple-50 text-purple-600',
    bg: 'bg-purple-50',
    iconColor: 'text-purple-400',
    icon: '📱',
  },
  java: {
    badge: 'bg-orange-50 text-orange-500',
    title: 'text-heading',
    tech: 'bg-orange-50 text-orange-500',
    bg: 'bg-orange-50',
    iconColor: 'text-orange-400',
    icon: '☕',
  },
}

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-3">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted text-sm">Things I have built</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {projectsData.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-border rounded-2xl overflow-hidden hover:border-primary-border hover:shadow-md transition-all duration-300 group"
            >
              {/* Thumbnail */}
              <div className="relative w-full h-52 bg-surface-alt overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className={`w-full h-full flex flex-col items-center justify-center gap-3 ${
                    categoryStyles[project.category]?.bg || 'bg-surface-alt'
                  }`}>
                    <div className={`text-4xl font-bold opacity-30 ${
                      categoryStyles[project.category]?.iconColor || 'text-muted'
                    }`}>
                      {categoryStyles[project.category]?.icon || '💻'}
                    </div>
                    <span className="text-xs text-placeholder font-medium">Screenshot coming soon</span>
                  </div>
                )}

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm bg-white/80 ${categoryStyles[project.category].badge}`}>
                    {project.categoryLabel || project.category.toUpperCase()}
                  </span>
                </div>

                {/* Status badges: Live or In Development */}
                {project.liveUrl && (
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-50/90 text-green-600 backdrop-blur-sm flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse inline-block"></span>
                      Live
                    </span>
                  </div>
                )}
                {project.inDevelopment && (
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-50/95 text-amber-700 backdrop-blur-sm border border-amber-200/80 flex items-center gap-1.5 shadow-xs">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse inline-block"></span>
                      In Development
                    </span>
                  </div>
                )}
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className={`text-lg font-bold mb-2 ${categoryStyles[project.category].title}`}>
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-xs font-medium px-3 py-1 rounded-full ${categoryStyles[project.category].tech}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action links */}
                {(project.liveUrl || project.githubUrl || project.apiUrl) && (
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-primary hover:text-primary-hover transition-colors duration-200"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.apiUrl && (
                      <a
                        href={project.apiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-muted hover:text-heading transition-colors duration-200"
                      >
                        API Docs
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-muted hover:text-heading transition-colors duration-200 ml-auto"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}

          {/* More coming soon banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 bg-surface-alt border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center py-10 gap-2"
          >
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-placeholder text-xl font-light">
              +
            </div>
            <p className="text-xs font-medium text-placeholder uppercase tracking-wider">More projects coming soon</p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Projects