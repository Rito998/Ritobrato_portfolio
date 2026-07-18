import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import useRevealAnimation from '../hooks/useRevealAnimation'
import { useRef, useEffect } from 'react'

const projects = [
  {
    id: 1,
    number: '01',
    title: 'VEX Real Estate Finder',
    role: 'Full-Stack Developer',
    description:
      'A website for helping people find real estate deals in their cities and towns. Features property search, deal discovery, and location-based filtering built with JavaScript.',
    tags: ['JavaScript', 'Real Estate', 'Web App', 'Full-Stack'],
    color: '#F598F2',
    link: 'https://github.com/Rito998/VEX-Real-estate-finder',
  },
  {
    id: 2,
    number: '02',
    title: 'Twitter Clone',
    role: 'Frontend Developer',
    description:
      'A faithful recreation of Twitter\'s core UI and interaction patterns — feed, tweets, profiles and navigation — built from scratch with HTML and CSS.',
    tags: ['HTML', 'CSS', 'UI Clone', 'Frontend'],
    color: '#F598F2',
    link: 'https://github.com/Rito998/Twitter-Clone',
  },
  {
    id: 3,
    number: '03',
    title: 'Movie Website',
    role: 'Frontend Developer',
    description:
      'A cinematic movie discovery interface showcasing film listings, details and modern layout design built with clean, semantic HTML.',
    tags: ['HTML', 'CSS', 'UI Design', 'Frontend'],
    color: '#F598F2',
    link: 'https://github.com/Rito998/Movie-website',
  },
  {
    id: 4,
    number: '04',
    title: 'Ritobrato Portfolio',
    role: 'Designer & Developer',
    description:
      'A personal portfolio website showcasing projects, skills, and experience with a clean, modern design aesthetic.',
    tags: ['Portfolio', 'Web Design', 'Personal Brand'],
    color: '#F598F2',
    link: 'https://github.com/Rito998/Ritobrato_portfolio',
  },
  {
    id: 5,
    number: '05',
    title: 'Smart India Hackathon 2024',
    role: 'Team Lead & Product Designer',
    description:
      'Farm Connect: A blockchain-based contract farming platform bridging farmers and buyers with transparent, secure, and traceable transactions.',
    tags: ['Blockchain', 'UI/UX Design', 'Product', 'Hackathon'],
    color: '#F598F2',
    link: 'https://github.com/Rito998',
  },
  {
    id: 6,
    number: '06',
    title: 'More on GitHub →',
    role: 'View all repositories',
    description:
      'Explore more of my open-source work, experiments, and side projects on GitHub. Actively building and shipping.',
    tags: ['Open Source', 'GitHub', 'All Projects'],
    color: '#F598F2',
    link: 'https://github.com/Rito998?tab=repositories',
  },
]

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { isVisible, setElement } = useRevealAnimation()

  useEffect(() => {
    if (containerRef.current) {
      setElement(containerRef.current)
    }
  }, [setElement])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <div className="relative w-full min-h-screen animated-bg py-32 px-[15px] md-tablet:py-24 md-tablet:px-[18px] mobile:py-16 mobile:px-[18px]">
      <div className="max-w-[1340px] mx-auto">
        {/* Header */}
        <div className="mb-20 md-tablet:mb-16 mobile:mb-12">
          <h2 className="text-[72px] md-tablet:text-[48px] mobile:text-[40px] leading-tight tracking-tight font-medium mb-6">
            Featured Works
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            A selection of projects showcasing design thinking, technical depth, and commitment to
            user-centered experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid gap-12 md-tablet:gap-8 mobile:gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group border-b border-white/10 pb-8 md-tablet:pb-6 mobile:pb-6 hover:border-[#F598F2]/30 transition-all duration-300 cursor-pointer"
              onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
            >
              <div className="flex justify-between items-start gap-8 md-tablet:gap-6 mobile:flex-col">
                {/* Left Content */}
                <div className="flex-1">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span
                      className="text-sm font-medium tracking-wide"
                      style={{ color: project.color }}
                    >
                      {project.number}
                    </span>
                    <h3 className="text-2xl md-tablet:text-xl mobile:text-lg font-medium">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-400 mb-4">{project.role}</p>
                  <p className="text-base leading-6 text-gray-300 mb-6 max-w-2xl">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium border border-white/20 rounded-full hover:border-[#F598F2] hover:text-[#F598F2] transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Icon */}
                <div className="flex-shrink-0 mt-2 md-tablet:mt-1 mobile:mt-4">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ x: 4, y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLink
                      size={20}
                      className="text-gray-400 group-hover:text-[#F598F2] transition-colors"
                    />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
