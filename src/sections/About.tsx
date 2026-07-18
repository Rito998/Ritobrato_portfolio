import { motion } from 'framer-motion'
import useRevealAnimation from '../hooks/useRevealAnimation'
import { useRef, useEffect } from 'react'

const skills = [
  { category: 'Design', items: ['UI/UX Design', 'Prototyping', 'Design Systems', 'Wireframing'] },
  { category: 'Frontend', items: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['Java', 'Python', 'Blockchain', 'APIs'] },
  { category: 'Tools', items: ['Figma', 'GitHub', 'Vite', 'Adobe Suite'] },
]

const experience = [
  {
    period: '2024 - Present',
    role: 'UI/UX Designer & Full-Stack Developer',
    company: 'Independent Freelancer',
    description: 'Building design systems, landing pages, and full-stack applications for diverse clients.',
  },
  {
    period: '2024',
    role: 'Team Lead, Product Designer',
    company: 'Smart India Hackathon 2024',
    description: 'Led Farm Connect project, a blockchain-based contract farming platform, from concept to prototype.',
  },
  {
    period: '2023 - 2024',
    role: 'UI/UX Designer (Internship)',
    company: 'AES Technologies',
    description: 'Designed interfaces for audit, healthcare, city administration, education, and travel domains.',
  },
]

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { isVisible, setElement } = useRevealAnimation()

  useEffect(() => {
    if (containerRef.current) {
      setElement(containerRef.current)
    }
  }, [setElement])

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: i * 0.1,
      },
    }),
  }

  return (
    <div className="relative w-full min-h-screen animated-bg py-32 px-[15px] md-tablet:py-24 md-tablet:px-[18px] mobile:py-16 mobile:px-[18px]">
      <div className="max-w-[1340px] mx-auto">
        {/* Intro */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 md-tablet:mb-20 mobile:mb-16"
        >
          <h2 className="text-[72px] md-tablet:text-[48px] mobile:text-[40px] leading-tight tracking-tight font-medium mb-8">
            About Me
          </h2>
          <p className="text-xl md-tablet:text-lg mobile:text-base leading-relaxed max-w-3xl text-gray-300">
            I'm a full-stack developer who enjoys building efficient, well-structured software across
            the stack. I work primarily with Java, Python, and C++, and I lean heavily on tools like
            GitHub Copilot to move faster and write cleaner code. Always looking to sharpen my skills
            and take on new challenges.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24 md-tablet:mb-20 mobile:mb-16"
        >
          <h3 className="text-2xl font-medium mb-12">Skills & Expertise</h3>
          <div className="grid grid-cols-2 md-tablet:grid-cols-2 mobile:grid-cols-1 gap-12 md-tablet:gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                custom={groupIndex}
                variants={itemVariants}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
              >
                <h4 className="text-sm font-medium text-[#F598F2] mb-4 uppercase tracking-wide">
                  {skillGroup.category}
                </h4>
                <ul className="space-y-2">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="text-base text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-medium mb-12">Experience</h3>
          <div className="space-y-8 md-tablet:space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.role}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                className="border-l-2 border-[#F598F2] pl-6 md-tablet:pl-4"
              >
                <div className="flex justify-between items-start gap-4 mb-2">
                  <div>
                    <h4 className="text-lg font-medium">{exp.role}</h4>
                    <p className="text-sm text-gray-400">{exp.company}</p>
                  </div>
                  <span className="text-xs font-medium text-gray-500 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-base text-gray-300 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 md-tablet:mt-20 mobile:mt-16 pt-16 md-tablet:pt-12 mobile:pt-12 border-t border-white/10"
        >
          <h3 className="text-2xl font-medium mb-6">Certifications</h3>
          <ul className="space-y-3 text-base text-gray-300">
            <li>• IBM Data Science Certification</li>
            <li>• IIT Kanpur Soft Skills Training</li>
            <li>• Full-Stack Development Specialization</li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
