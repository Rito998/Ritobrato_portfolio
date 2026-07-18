import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react'
import useRevealAnimation from '../hooks/useRevealAnimation'
import { useRef, useEffect } from 'react'

const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:ritobrato123@gmail.com',
    value: 'ritobrato123@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Rito998',
    value: '@Rito998',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/ritobrato-maiti-2880102a3',
    value: 'Ritobrato Maiti',
  },
]

export default function Contact() {
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
      <div className="max-w-[1340px] mx-auto flex flex-col justify-center items-center h-full">
        {/* Header */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 md-tablet:mb-20 mobile:mb-16"
        >
          <h2 className="text-[72px] md-tablet:text-[48px] mobile:text-[40px] leading-tight tracking-tight font-medium mb-6">
            Let's Connect
          </h2>
          <p className="text-xl md-tablet:text-lg mobile:text-base leading-relaxed max-w-2xl text-gray-400 mx-auto">
            Whether you have a project idea, want to collaborate, or just want to chat about design
            and development, I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md-tablet:grid-cols-2 mobile:grid-cols-1 gap-8 md-tablet:gap-6 w-full max-w-2xl mb-24 md-tablet:mb-20 mobile:mb-16"
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                className="group border border-white/20 rounded-lg p-8 md-tablet:p-6 hover:border-[#F598F2] hover:bg-white/5 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <Icon
                    size={24}
                    className="text-[#F598F2] group-hover:scale-110 transition-transform"
                  />
                  <h3 className="text-lg font-medium">{link.label}</h3>
                </div>
                <p className="text-base text-gray-300 group-hover:text-white transition-colors">
                  {link.value}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-gray-400 group-hover:text-[#F598F2] transition-colors">
                  Get in touch
                  <ExternalLink size={16} />
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="mailto:ritobrato123@gmail.com"
            className="inline-block btn-fill-up text-lg px-8 py-4"
          >
            Start a conversation
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32 md-tablet:mt-24 mobile:mt-16 pt-16 md-tablet:pt-12 mobile:pt-12 border-t border-white/10 text-center w-full"
        >
          <p className="text-sm text-gray-500 mb-2">
            Based in Coimbatore, India | Available for remote & on-site opportunities
          </p>
          <p className="text-xs text-gray-600">
            © 2024 Ritobrato Maiti. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
