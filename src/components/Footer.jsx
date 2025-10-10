import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/hariomakhand", color: "hover:text-gray-300", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/hariom-akhand", color: "hover:text-blue-400", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:hariomakhand82@gmail.com", color: "hover:text-primary-400", label: "Email" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const contactInfo = [
    { icon: FaEnvelope, text: "hariomakhand82@gmail.com", href: "mailto:hariomakhand82@gmail.com" },
    { icon: FaPhone, text: "+91 6267318849", href: "tel:+916267318849" },
    { icon: FaMapMarkerAlt, text: "Sundrel, India", href: "#" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer 
      className="relative mt-20 bg-gradient-to-t from-slate-900 to-slate-800 border-t border-white/10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #0ea5e9 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #d946ef 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container-width relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 md:py-16">
          
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.h3 
              className="text-2xl md:text-3xl font-bold gradient-text mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Hariom Akhand
            </motion.h3>
            <p className="text-slate-400 text-sm md:text-base mb-6 leading-relaxed max-w-md">
              Full Stack Developer passionate about creating exceptional digital experiences. 
              Specializing in MERN stack development and modern web technologies.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-slate-400 ${social.color} transition-all duration-300`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                    title={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold text-slate-200 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors duration-300 text-sm md:text-base relative group"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold text-slate-200 mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                  >
                    <Icon className="text-primary-400 text-sm flex-shrink-0" />
                    {contact.href !== "#" ? (
                      <motion.a
                        href={contact.href}
                        className="text-slate-400 hover:text-primary-400 transition-colors duration-300 text-sm break-all"
                        whileHover={{ x: 2 }}
                      >
                        {contact.text}
                      </motion.a>
                    ) : (
                      <span className="text-slate-400 text-sm">{contact.text}</span>
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-white/10 py-6 md:py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p 
              className="text-slate-400 text-sm text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.4 }}
            >
              © {new Date().getFullYear()} Hariom Akhand. Made with{" "}
              <motion.span
                className="text-red-500 inline-block"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaHeart className="inline w-3 h-3" />
              </motion.span>
              {" "}in India. All rights reserved.
            </motion.p>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-400 hover:bg-primary-500/30 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.4 }}
              title="Back to top"
            >
              <FaArrowUp size={16} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-2 h-2 bg-primary-400/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-20 w-3 h-3 bg-accent-400/30 rounded-full"
          animate={{
            y: [0, 15, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </motion.footer>
  )
}