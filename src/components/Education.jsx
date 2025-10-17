import React from "react";
import { FaSchool, FaGraduationCap, FaLaptopCode, FaCalendarAlt, FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "10th Grade",
    school: "Nav Jeevan Public High School Bijwad",
    year: "2020-2021",
    details: "Completed secondary education with strong foundation in core subjects",
    icon: <FaSchool className="text-primary-400 text-2xl" />,
    completed: true,
    type: "secondary"
  },
  {
    degree: "12th Grade",
    school: "Government Higher Secondary School Sundrel",
    year: "2022-2023",
    details: "Science Stream (Maths) - Prepared foundation for computer applications",
    icon: <FaSchool className="text-accent-400 text-2xl" />,
    completed: true,
    type: "higher-secondary"
  },
 {
  degree: "BCA - 1st to 3rd Year",
  school: "Sant Singaji Institute of Science and Management Sandalpur",
  year: "2023-Present",
  details: "Studied programming, database concepts, web technologies, data structures, software engineering, and currently focusing on full-stack development",
  icon: <FaGraduationCap className="text-blue-400 text-2xl" />,
  completed: false,
  type: "undergraduate"
},

  {
    degree: "IT Diploma",
    school: "Sant Singaji Institute of Science and Management Sandalpur",
    year: "2024-Present",
    details: "Specialized diploma in Information Technology and modern web frameworks",
    icon: <FaLaptopCode className="text-purple-400 text-2xl" />,
    completed: false,
    type: "diploma"
  },
];

export default function Education() {
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
    <section id="education" className="py-12 sm:py-16 md:py-20">
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
                🎓 Academic Journey
              </span>
            </motion.div>

            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text"
              variants={itemVariants}
            >
              Education & Learning Path
            </motion.h2>

            <motion.p 
              className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto px-4 sm:px-0"
              variants={itemVariants}
            >
              My educational journey from foundational learning to specialized computer applications, 
              building the knowledge base for my development career.
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-success-500 opacity-30"></div>

            <div className="space-y-6 md:space-y-8">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start gap-4 sm:gap-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Timeline Dot */}
                  <div className="relative flex-shrink-0">
                    <motion.div 
                      className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center ${
                        edu.completed 
                          ? 'bg-white/10 border-primary-500/50' 
                          : 'bg-white/5 border-accent-500/50'
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {edu.icon}
                    </motion.div>
                    
                    {/* Pulse Effect for Current */}
                    {!edu.completed && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-accent-500/30"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>

                  {/* Content Card */}
                  <motion.div 
                    className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg sm:text-xl font-semibold text-slate-200">
                            {edu.degree}
                          </h3>
                          {edu.completed && (
                            <motion.div
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ delay: 0.2 + index * 0.05, type: "spring" }}
                            >
                              <FaTrophy className="text-yellow-400 text-sm" />
                            </motion.div>
                          )}
                        </div>
                        <p className="text-sm sm:text-base text-slate-300 font-medium mb-1">
                          {edu.school}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2 text-slate-400">
                        <FaCalendarAlt className="text-xs" />
                        <span className="text-xs sm:text-sm font-medium">{edu.year}</span>
                      </div>
                    </div>

                    {/* Performance Indicator */}
                    {(edu.cgpa || edu.sgpa) && (
                      <motion.div 
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success-500/20 border border-success-500/30 text-success-400 text-xs sm:text-sm font-medium mb-3"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                      >
                        <FaTrophy className="text-xs" />
                        {edu.cgpa || edu.sgpa}
                      </motion.div>
                    )}

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {edu.details}
                    </p>

                    {/* Status Badge */}
                    <div className="mt-3">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        edu.completed
                          ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                          : 'bg-accent-500/20 text-accent-400 border border-accent-500/30'
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          edu.completed ? 'bg-primary-400' : 'bg-accent-400'
                        }`}></div>
                        {edu.completed ? 'Completed' : 'In Progress'}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div
            className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            {[
              { label: "Years of Study", value: "5+", icon: "📚" },
              { label: "Degrees Completed", value: "2", icon: "🎓" },
              { label: "Current Programs", value: "2", icon: "📖" },
              { label: "Academic Focus", value: "IT", icon: "💻" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
              >
                <div className="text-lg sm:text-xl mb-1">{stat.icon}</div>
                <div className="text-lg sm:text-xl font-bold text-primary-400 mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}