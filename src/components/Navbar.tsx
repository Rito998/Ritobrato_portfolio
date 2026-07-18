import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

type Section = 'hero' | 'projects' | 'about' | 'contact'

interface NavbarProps {
  activeSection: Section
  onNavigate: (section: Section) => void
}

const navItems = [
  { id: '01', label: 'Works', section: 'projects' as Section },
  { id: '02', label: 'About', section: 'about' as Section },
  { id: '03', label: 'Contact', section: 'contact' as Section },
]

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [time, setTime] = useState<string>('')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 809.98)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      })
      setTime(`CUP ${formatter.format(new Date())}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleNavClick = (section: Section) => {
    onNavigate(section)
    setMobileOpen(false)
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm"
      role="banner"
    >
      <nav
        className="max-w-[1340px] mx-auto flex justify-between items-center py-9 px-[15px] md-tablet:py-[30px] md-tablet:px-[18px] mobile:py-6 mobile:px-[18px]"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <button
          onClick={() => onNavigate('hero')}
          className="text-lg font-semibold hover:opacity-75 transition-opacity"
          aria-label="Go to home"
        >
          R.
        </button>

        {/* Desktop Nav */}
        {!isMobile && (
          <div className="flex-1 flex justify-center gap-8 md-tablet:gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.section)}
                className="nav-link-underline group"
                aria-current={
                  item.section === activeSection ? 'page' : undefined
                }
              >
                <span className="text-[8px] leading-3 tracking-[-0.08px] font-medium uppercase">
                  {item.id}
                </span>
                <span className="text-xs leading-4 tracking-[-0.12px] font-medium uppercase ml-2">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Desktop Right Section */}
        {!isMobile && (
          <div className="flex items-center gap-8 ml-auto">
            <a
              href="mailto:ritobrato123@gmail.com"
              className="text-xs leading-4 tracking-[-0.12px] font-medium hover:text-[#F598F2] transition-colors"
              aria-label="Email Rito"
            >
              ritobrato123@gmail.com
            </a>
            <div className="text-xs leading-4 tracking-[-0.12px] font-medium text-gray-400">
              {time}
            </div>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="ml-auto p-2 hover:bg-white/10 rounded transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobile && (
        <motion.div
          id="mobile-menu"
          initial={{ gridTemplateRows: '0fr' }}
          animate={{ gridTemplateRows: mobileOpen ? '1fr' : '0fr' }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="grid overflow-hidden"
        >
          <div className="overflow-hidden bg-black/80 backdrop-blur-sm">
            <div className="flex flex-col gap-6 px-[18px] py-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.section)}
                  className="text-[28px] leading-8 tracking-[-0.84px] font-medium uppercase text-left hover:text-[#F598F2] transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="mailto:ritobrato123@gmail.com"
                  className="text-xs leading-4 tracking-[-0.12px] font-medium text-gray-400 hover:text-white transition-colors block mb-3"
                >
                  ritobrato123@gmail.com
                </a>
                <div className="text-xs leading-4 tracking-[-0.12px] font-medium text-gray-400">
                  {time}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
