import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Education', '#education'],
    ['Contact', '#contact'],
  ]

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/80 backdrop-blur-md border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="container-width flex items-center justify-between py-4">
        {/* Logo */}
        <motion.a 
          href="#home" 
          className="text-xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hariom.dev
        </motion.a>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(([label, href], index) => (
            <motion.li 
              key={href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
            >
              <motion.a 
                href={href} 
                className="text-slate-300 hover:text-primary-400 transition-colors duration-300 font-medium relative group"
                whileHover={{ y: -2 }}
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          className="hidden md:inline-flex items-center px-6 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          Let's Talk
        </motion.a>
        
        {/* Mobile Menu Button */}
        <motion.button 
          onClick={() => setOpen(!open)} 
          className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-slate-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </motion.button>
      </nav>
      
      {/* Mobile Navigation */}
      {open && (
        <motion.div 
          className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="container-width py-6 space-y-4">
            {links.map(([label, href], index) => (
              <motion.li 
                key={href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <a 
                  href={href} 
                  onClick={() => setOpen(false)} 
                  className="block py-2 text-slate-300 hover:text-primary-400 transition-colors font-medium"
                >
                  {label}
                </a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: links.length * 0.1, duration: 0.3 }}
            >
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full"
              >
                Let's Talk
              </a>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}