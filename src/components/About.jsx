import React from 'react';
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaGraduationCap, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const stats = [
    { label: "Years Experience", value: "0+", icon: "🚀" },
    { label: "Projects Completed", value: "3+", icon: "💼" },
    { label: "Technologies", value: "10+", icon: "⚡" },
    { label: "Happy Clients", value: "0+", icon: "😊" }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20">
      <div className="container-width">
        <motion.div 
          className="section-card p-4 sm:p-6 md:p-8 lg:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {/* Content */}
            <div>
              <motion.div variants={itemVariants}>
                <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                  👋 About Me
                </span>
              </motion.div>

              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text"
                variants={itemVariants}
              >
                Crafting Digital Excellence
              </motion.h2>

              <motion.p 
                className="text-sm sm:text-base md:text-lg text-slate-300 mb-4 md:mb-6 leading-relaxed"
                variants={itemVariants}
              >
                I'm a passionate Full Stack Developer with expertise in the MERN stack. I love creating 
                clean, efficient, and user-friendly applications that solve real-world problems. Currently 
                pursuing BCA and constantly learning new technologies to stay ahead in the ever-evolving 
                tech landscape.
              </motion.p>

              <motion.p 
                className="text-sm sm:text-base text-slate-400 mb-6 md:mb-8 leading-relaxed"
                variants={itemVariants}
              >
                My journey in web development started with curiosity and has evolved into a passion for 
                creating exceptional digital experiences. I believe in writing clean code, following best 
                practices, and delivering solutions that exceed expectations.
              </motion.p>

              {/* Personal Info */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 md:mb-8"
                variants={itemVariants}
              >
                {[
                  { icon: FaMapMarkerAlt, label: "Location", value: "Sundrel, India" },
                  { icon: FaGraduationCap, label: "Education", value: "BCA Student" },
                  { icon: FaEnvelope, label: "Email", value: "hariomakhand82@gmail.com" },
                  { icon: FaPhone, label: "Phone", value: "+91 6267318849" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10">
                    <item.icon className="text-primary-400 text-base sm:text-lg flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-slate-400">{item.label}</p>
                      <p className="text-sm sm:text-base text-slate-200 font-medium truncate">{item.value}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="flex gap-3 sm:gap-4"
                variants={itemVariants}
              >
                {[
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/hariom-akhand", color: "hover:text-blue-400" },
                  { icon: FaGithub, href: "https://github.com/hariomakhand", color: "hover:text-gray-300" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-slate-400 ${social.color} transition-all duration-300`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={18} className="sm:w-5 sm:h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Image & Stats */}
            <div className="relative mt-8 lg:mt-0">
              <motion.div
                className="relative"
                variants={itemVariants}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl sm:rounded-3xl blur-3xl"></div>
                
                {/* Profile Image */}
                <motion.div
                  className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-6 md:mb-8"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src="./profile-image.jpg"
                    alt="Hariom Akhand"
                    className="w-full max-w-xs sm:max-w-sm mx-auto rounded-xl sm:rounded-2xl shadow-2xl"
                  />
                </motion.div>

                {/* Stats Grid */}
                <motion.div 
                  className="grid grid-cols-2 gap-2 sm:gap-4"
                  variants={itemVariants}
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">{stat.icon}</div>
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary-400 mb-1">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}