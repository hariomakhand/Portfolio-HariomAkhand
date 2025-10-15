import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaLinkedin, FaGithub, FaCode, FaDownload } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

export default function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "attract" },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: { 
              attract: { distance: 200, duration: 0.4 },
              push: { quantity: 4 }
            },
          },
          particles: {
            color: { value: ["#0ea5e9", "#d946ef", "#10b981"] },
            links: {
              color: "#0ea5e9",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outModes: { default: "bounce" },
            },
            number: { value: 80, density: { enable: true, area: 800 } },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Realistic 3D Spider Web Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Web Thread Gradients */}
            <linearGradient id="webThread" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1"/>
              <stop offset="30%" stopColor="#0ea5e9" stopOpacity="0.4"/>
              <stop offset="70%" stopColor="#d946ef" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1"/>
            </linearGradient>
            
            {/* Dew Drop Effect */}
            <radialGradient id="dewDrop" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8"/>
              <stop offset="70%" stopColor="#0ea5e9" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#transparent" stopOpacity="0"/>
            </radialGradient>
            
            {/* Glow Filter */}
            <filter id="webGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Radial Web Structure */}
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45) * (Math.PI / 180);
            const x2 = 50 + Math.cos(angle) * 45;
            const y2 = 50 + Math.sin(angle) * 45;
            return (
              <motion.line
                key={`radial-${i}`}
                x1="50%"
                y1="50%"
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="url(#webThread)"
                strokeWidth="0.8"
                filter="url(#webGlow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1],
                  opacity: [0, 0.7, 0.5, 0.7]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
                className="hover:stroke-white/60 transition-all duration-300"
              />
            );
          })}
          
          {/* Concentric Web Circles */}
          {[...Array(5)].map((_, i) => {
            const radius = 10 + i * 8;
            return (
              <motion.circle
                key={`circle-${i}`}
                cx="50%"
                cy="50%"
                r={`${radius}%`}
                fill="none"
                stroke="url(#webThread)"
                strokeWidth="0.6"
                filter="url(#webGlow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1],
                  opacity: [0, 0.6, 0.4, 0.6],
                  r: [`${radius}%`, `${radius + 1}%`, `${radius}%`]
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
                className="hover:stroke-white/50 transition-all duration-300"
              />
            );
          })}
          
          {/* Connecting Web Threads */}
          {[...Array(12)].map((_, i) => {
            const startAngle = Math.random() * 360;
            const endAngle = startAngle + 45 + Math.random() * 90;
            const startRadius = 15 + Math.random() * 20;
            const endRadius = 25 + Math.random() * 15;
            
            const x1 = 50 + Math.cos(startAngle * Math.PI / 180) * startRadius;
            const y1 = 50 + Math.sin(startAngle * Math.PI / 180) * startRadius;
            const x2 = 50 + Math.cos(endAngle * Math.PI / 180) * endRadius;
            const y2 = 50 + Math.sin(endAngle * Math.PI / 180) * endRadius;
            
            return (
              <motion.path
                key={`thread-${i}`}
                d={`M ${x1} ${y1} Q ${(x1+x2)/2 + Math.random()*5-2.5} ${(y1+y2)/2 + Math.random()*5-2.5} ${x2} ${y2}`}
                fill="none"
                stroke="url(#webThread)"
                strokeWidth="0.4"
                filter="url(#webGlow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0.9, 1],
                  opacity: [0, 0.5, 0.3, 0.5]
                }}
                transition={{
                  duration: 5 + Math.random() * 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2
                }}
                className="hover:stroke-white/40 transition-all duration-300"
              />
            );
          })}
        </svg>
        
        {/* 3D Dew Drops */}
        <motion.div
          className="absolute inset-0"
          animate={{
            rotateX: [0, 1, -1, 0],
            rotateY: [0, 0.5, -0.5, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
        >
          {[...Array(8)].map((_, i) => {
            const size = Math.random() * 3 + 2;
            return (
              <motion.div
                key={`dew-${i}`}
                className="absolute rounded-full bg-gradient-to-br from-white/40 via-primary-400/30 to-transparent"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.3))',
                  backdropFilter: 'blur(1px)'
                }}
                animate={{
                  scale: [0.8, 1.2, 1, 1.1, 0.8],
                  opacity: [0.3, 0.8, 0.6, 0.9, 0.3],
                  rotateZ: [0, 360],
                  y: [0, -2, 1, 0]
                }}
                transition={{
                  duration: 6 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 3
                }}
                whileHover={{
                  scale: 1.5,
                  opacity: 1,
                  filter: 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.6))'
                }}
              />
            );
          })}
        </motion.div>
        
        {/* Web Shimmer Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 70%, rgba(217, 70, 239, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 80%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 -z-5">
        {/* Floating Code Symbols */}
        <motion.div
          className="absolute top-20 left-10 text-4xl text-primary-400/30"
          animate={{
            y: [0, -20, 0],
            rotateY: [0, 180, 360],
            rotateX: [0, 15, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          &lt;/&gt;
        </motion.div>

        <motion.div
          className="absolute top-32 right-16 text-3xl text-accent-400/30"
          animate={{
            y: [0, 15, 0],
            rotateZ: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          { }
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-20 text-5xl text-success-400/30"
          animate={{
            x: [0, 20, 0],
            rotateY: [0, -180, 0],
            rotateZ: [0, 45, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ⚛️
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-10 text-4xl text-warning-400/30"
          animate={{
            y: [0, -25, 0],
            rotateX: [0, 360],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🚀
        </motion.div>

        {/* 3D Geometric Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-primary-400/20 rounded-lg"
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            rotateZ: [0, 180]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px"
          }}
        />

        <motion.div
          className="absolute top-3/4 right-1/4 w-12 h-12 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-full"
          animate={{
            rotateY: [0, 360],
            scale: [1, 1.5, 1],
            z: [0, 50, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            transformStyle: "preserve-3d"
          }}
        />
      </div>

      <div className="container-width">
        <motion.div 
          className="section-card p-8 md:p-16 text-center relative overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px"
          }}
        >
          {/* 3D Background Gradient Orbs */}
          <motion.div 
            className="absolute top-0 left-0 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 1.2, 1],
              rotateZ: [0, 180, 360]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
            animate={{
              scale: [1, 0.8, 1],
              rotateZ: [360, 180, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div variants={itemVariants}>
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6"
              whileHover={{
                scale: 1.05,
                rotateX: 10,
                rotateY: 10
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              🚀 Available for Opportunities
            </motion.span>
          </motion.div>

          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight px-4 sm:px-0"
            variants={itemVariants}
            style={{ transformStyle: "preserve-3d" }}
          >
            Hi, I'm{" "}
            <motion.span 
              className="gradient-text inline-block"
              animate={{
                rotateY: [0, 5, -5, 0],
                rotateX: [0, 2, -2, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Hariom Akhand
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-3 md:mb-4 px-4 sm:px-0"
            variants={itemVariants}
          >
            Full Stack Developer
          </motion.p>

          <motion.p 
            className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed px-4 sm:px-0"
            variants={itemVariants}
          >
            Passionate about creating exceptional digital experiences with modern web technologies. 
            Specializing in MERN stack development and responsive design.
          </motion.p>

          {/* 3D Profile Image */}
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <motion.div
              className="relative inline-block"
              whileHover={{ 
                scale: 1.05,
                rotateY: 15,
                rotateX: 10
              }}
              animate={{
                rotateY: [0, 5, -5, 0],
                y: [0, -10, 0]
              }}
              transition={{
                hover: { type: "spring", stiffness: 300 },
                default: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-lg opacity-75"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.75, 0.9, 0.75]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <img
                src="profile.jpg"
                alt="Hariom Akhand"
                className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-2 sm:border-4 border-white/20 shadow-2xl object-cover"
                style={{
                  filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))"
                }}
              />
            </motion.div>
          </motion.div>

          {/* 3D Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 md:mb-8 px-4 sm:px-0"
            variants={itemVariants}
          >
            <motion.a
              href="HariomAkhandCV.pdf"
              download
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                rotateX: 10,
                rotateY: 5
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <FaDownload className="group-hover:animate-bounce" />
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                rotateX: -10,
                rotateY: -5
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <FaCode />
              Let's Work Together
            </motion.a>
          </motion.div>

          {/* 3D Social Links */}
          <motion.div 
            className="flex justify-center gap-4 sm:gap-6"
            variants={itemVariants}
          >
            {[
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/hariom-akhand", color: "hover:text-blue-400" },
              { icon: FaGithub, href: "https://github.com/hariomakhand", color: "hover:text-gray-300" }
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-slate-400 ${social.color} transition-all duration-300`}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -8,
                    rotateY: 180,
                    rotateX: 15
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 1.5 + index * 0.1,
                    hover: { type: "spring", stiffness: 400 }
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Icon size={18} className="sm:w-5 sm:h-5" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* 3D Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotateX: [0, 15, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-slate-400"
              style={{ transformStyle: "preserve-3d" }}
            >
              <HiArrowDown size={24} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}