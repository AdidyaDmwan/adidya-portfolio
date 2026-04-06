import { FiGithub, FiLinkedin } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-sm text-placeholder">
          &copy; 2026 Adidya Darmawan
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/AdidyaDmwan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors duration-200"
          >
            <FiGithub size={15} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/adidyadarmawan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors duration-200"
          >
            <FiLinkedin size={15} />
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
