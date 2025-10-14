import React from "react";
import HospitalImage from "../assest/hospital.jpg";
import WeatherImage from "../assest/Weather.jpg";
import BusImage from "../assest/bus.jpg";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb, SiMui } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "Weather Dashboard",
      description: "A comprehensive weather application with real-time data, forecasts, and beautiful visualizations. Features location-based weather, search functionality, and responsive design.",
      image: WeatherImage,
      technologies: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        // { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "API", icon: <FaDatabase className="text-green-400" /> }
      ],
      features: [
        "Real-time weather data",
        "7-day forecast",
        "Location search",
        "Responsive design",
        "Weather maps"
      ],
      demo: "https://hariomakhand.github.io/Weather-app/",
      source: "https://github.com/hariomakhand/Weather-app",
      status: "Completed"
    },
    {
      title: "Hospital Management",
      description: "A professional hospital management system designed to handle patient records, doctor appointments, and medical staff management with an industry-level UI. Built using React and Material UI (MUI).",
      image: HospitalImage,
      technologies: [
        { name: "React", icon: <FaReact className='text-cyan-400' /> },
        { name: "JavaScript", icon: <SiJavascript className='text-yellow-400' /> },
        { name: "Material UI", icon: <SiMui className='text-blue-500' /> }
      ],
      features: [
        "Patient registration and management",
        "Doctor appointment scheduling",
        "Department-wise doctor listing",
        "Responsive Material UI dashboard",
        "Animated navigation bar with images"
      ],

      demo: "https://hariomakhand.github.io/Hospital-Mangment-123/",
      source: "https://github.com/hariomakhand/Hospital-Mangment-123/",
      status: "Completed"
    },
    {
      title: "Collage Bus  Management",
      description: "This project helps a college manage its entire transportation system digitally — including bus routes, drivers, and students, with real-time GPS tracking and notifications.",
      image: BusImage,
      technologies: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> }
      ],
      features: [
        "Role-based login for admin, driver, and student",
        "Bus route and stop management",
        "Real-time bus tracking (optional with Google Maps API)",
        "Student bus pass generation",
        "Driver attendance and schedule management",
        "Admin dashboard to manage all data",
        "Notification system for delays or breakdowns",
        "Secure authentication with JWT",
        "Responsive and modern UI with Tailwind CSS"
      ],

      demo: "#",
      source: "#",
      status: "In Progress"
    }
  ];

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
    <section id="projects" className="py-12 sm:py-16 md:py-20">
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
            className="text-center mb-8 md:mb-12"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                💼 Featured Work
              </span>
            </motion.div>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text"
              variants={itemVariants}
            >
              Projects & Applications
            </motion.h2>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto px-4 sm:px-0"
              variants={itemVariants}
            >
              Here are some of my recent projects that showcase my skills in full-stack development,
              UI/UX design, and problem-solving.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${project.status === 'Completed'
                      ? 'bg-primary-500/100 text-success-400 border border-success-500/30'
                      : 'bg-warning-500/100 text-warning-400 border border-warning-500/30'
                      }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-6">
                    <div className="flex gap-2 sm:gap-3">
                      {project.demo !== "#" && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 sm:p-2 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaExternalLinkAlt size={14} className="sm:w-4 sm:h-4" />
                        </motion.a>
                      )}
                      {project.source !== "#" && (
                        <motion.a
                          href={project.source}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 sm:p-2 rounded-full bg-slate-700 text-white hover:bg-slate-600 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaGithub size={14} className="sm:w-4 sm:h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-200 mb-2 sm:mb-3 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>


                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-1 px-1.5 sm:px-2 py-1 rounded-md bg-white/10 border border-white/20 text-xs"
                      >
                        <span className="text-xs sm:text-sm">{tech.icon}</span>
                        <span className="text-slate-300 hidden sm:inline">{tech.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-1 mb-4 sm:mb-6">
                    <h4 className="text-xs sm:text-sm font-medium text-slate-300 mb-1 sm:mb-2">Key Features:</h4>
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-1 sm:gap-2 text-xs text-slate-400">
                        <div className="w-1 h-1 rounded-full bg-primary-400 flex-shrink-0"></div>
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 sm:gap-3">
                    {project.demo !== "#" && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center py-2 px-3 sm:px-4 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors text-xs sm:text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Live Demo
                      </motion.a>
                    )}
                    {project.source !== "#" && (
                      <motion.a
                        href={project.source}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center py-2 px-3 sm:px-4 bg-white/10 border border-white/20 text-slate-300 rounded-lg font-medium hover:bg-white/20 transition-colors text-xs sm:text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Projects */}
          <motion.div
            className="text-center mt-8 md:mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.a
              href="https://github.com/hariomakhand"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}