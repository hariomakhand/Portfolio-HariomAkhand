import React from "react";
import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaJava, 
  FaGitAlt, FaDocker, FaDatabase, FaServer, FaMobile, FaCode 
} from "react-icons/fa";
import { 
  SiMysql, SiMongodb, SiPostman, SiTailwindcss, SiExpress, 
  SiTypescript, SiNextdotjs, SiRedux, SiFirebase,
  SiPostgresql, SiRedis, SiGraphql
} from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaMobile className="text-primary-400" />,
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, level: 85 },
        { name: "React", icon: <FaReact className="text-cyan-400" />, level: 80 },
        { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" />, level: 85 },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: 70 }
      ]
    },
    {
      title: "Backend Development",
      icon: <FaServer className="text-accent-400" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 80 },
        { name: "Express.js", icon: <SiExpress className="text-gray-400" />, level: 85 },
        { name: "Java", icon: <FaJava className="text-red-500" />, level: 75 },
        { name: "REST APIs", icon: <FaCode className="text-purple-400" />, level: 85 },
       
      ]
    },
    {
      title: "Database & Cloud",
      icon: <FaDatabase className="text-success-400" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: 80 },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" />, level: 75 },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" />, level: 70 },
      
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <FaCode className="text-blue-400" />,
      skills: [
        { name: "Git/GitHub", icon: <FaGitAlt className="text-orange-600" />, level: 85 },
        
       
        { name: "VS Code", icon: "💻", level: 90 },
        { name: "Vite", icon: "⚡", level: 80 },
        { name: "Webpack", icon: "📦", level: 65 }
      ]
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
    <section id="skills" className="py-12 sm:py-16 md:py-20">
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
                🛠️ Technical Skills
              </span>
            </motion.div>

            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text"
              variants={itemVariants}
            >
              Technologies I Work With
            </motion.h2>

            <motion.p 
              className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto px-4 sm:px-0"
              variants={itemVariants}
            >
              I'm passionate about learning new technologies and constantly improving my skills 
              to deliver cutting-edge solutions.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 rounded-lg bg-white/10 border border-white/20">
                    {category.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-200">{category.title}</h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1), duration: 0.4 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="text-lg sm:text-xl">{skill.icon}</div>
                          <span className="font-medium text-slate-200 text-sm sm:text-base">{skill.name}</span>
                        </div>
                        <span className="text-xs sm:text-sm text-slate-400 font-medium">{skill.level}%</span>
                      </div>
                      
                      <div className="h-1.5 sm:h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5, duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            className="mt-8 md:mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-slate-200 mb-4 sm:mb-6">Other Technologies</h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              {[
                { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
                { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
                
               
                { name: "Responsive Design", icon: "📱" },
                { name: "API Integration", icon: "🔗" },
                { name: "Performance Optimization", icon: "⚡" }
                
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-2 sm:py-3 rounded-full bg-white/10 border border-white/20 text-slate-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <span className="text-sm sm:text-base md:text-lg">{tech.icon}</span>
                  <span className="text-xs sm:text-sm font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}