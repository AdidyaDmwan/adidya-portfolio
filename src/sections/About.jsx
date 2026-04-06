import { motion } from 'framer-motion'
import profilePhoto from '../assets/profile.jpg'

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-2/5 flex-shrink-0"
          >
            <div className="relative">
              <img
                src={profilePhoto}
                alt="Adidya Darmawan"
                className="w-full rounded-2xl border-2 border-primary-border object-cover shadow-sm"
              />
              <div className="absolute inset-0 rounded-2xl bg-primary opacity-5"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-3/5"
          >
            <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">
              About Me
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">
              Get to Know Me Better
            </h2>

            <p className="text-body leading-relaxed mb-4">
              I am a Software Engineering student currently pursuing a Joint Degree 2+2 program
              at Nanjing Xiaozhuang University, China, after completing my first two years
              at Esa Unggul University, Jakarta. This international experience has sharpened
              both my technical skills and my ability to adapt and collaborate across cultures.
            </p>

            <p className="text-body leading-relaxed mb-8">
              I enjoy building real-world applications that solve meaningful problems — from
              AI-powered web apps and full stack systems to mobile and desktop applications.
              My goal is to craft software that is not only functional and scalable, but also
              delivers a great experience to the people who use it.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Web Development', 'Mobile Development', 'Java Programming', 'AI Integration', 'Open to Opportunities'].map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 text-sm font-medium text-primary bg-primary-light border border-primary-border rounded-full cursor-default transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary hover:shadow-sm select-none"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About