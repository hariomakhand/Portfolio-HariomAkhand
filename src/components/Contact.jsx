import React from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().min(10, "Message too short").required("Message is required"),
});

export default function Contact() {
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

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-primary-400" />,
      title: "Email",
      value: "hariomakhand82@gmail.com",
      link: "mailto:hariomakhand82@gmail.com"
    },
    {
      icon: <FaPhone className="text-success-400" />,
      title: "Phone",
      value: "+91 6267318849",
      link: "tel:+916267318849"
    },
    {
      icon: <FaMapMarkerAlt className="text-accent-400" />,
      title: "Location",
      value: "Sundrel, India",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20">
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
                📬 Get In Touch
              </span>
            </motion.div>

            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text"
              variants={itemVariants}
            >
              Let's Work Together
            </motion.h2>

            <motion.p 
              className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto px-4 sm:px-0"
              variants={itemVariants}
            >
              Have a project in mind or want to discuss opportunities? I'd love to hear from you. 
              Let's create something amazing together!
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-200 mb-6 sm:mb-8">Contact Information</h3>
              
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="p-2 sm:p-3 rounded-lg bg-white/10 border border-white/20 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-slate-200 text-sm sm:text-base">{info.title}</h4>
                      {info.link !== "#" ? (
                        <a 
                          href={info.link} 
                          className="text-slate-400 hover:text-primary-400 transition-colors text-sm sm:text-base break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-400 text-sm sm:text-base">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <h4 className="font-semibold text-slate-200 mb-2 text-sm sm:text-base">Quick Response</h4>
                <p className="text-slate-400 text-xs sm:text-sm">
                  I typically respond to emails within 24 hours. For urgent matters, 
                  feel free to call me directly.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Formik
                initialValues={{ name: "", email: "", subject: "", message: "" }}
                validationSchema={ContactSchema}
                onSubmit={(values, { resetForm }) => {
                  window.location.href = `mailto:hariomakhand82@gmail.com?subject=${values.subject}&body=Hi, my name is ${values.name}.%0D%0A${values.message}%0D%0AEmail: ${values.email}`;
                  resetForm();
                }}
              >
                {() => (
                  <Form className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      {/* Name */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.4 }}
                      >
                        <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-2">
                          Full Name
                        </label>
                        <Field
                          name="name"
                          placeholder="Your full name"
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 placeholder-slate-500 focus:border-primary-500 focus:bg-white/10 transition-all duration-300 outline-none text-sm sm:text-base"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-error-500 text-xs sm:text-sm mt-1"
                        />
                      </motion.div>

                      {/* Email */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9, duration: 0.4 }}
                      >
                        <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-2">
                          Email Address
                        </label>
                        <Field
                          type="email"
                          name="email"
                          placeholder="your.email@example.com"
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 placeholder-slate-500 focus:border-primary-500 focus:bg-white/10 transition-all duration-300 outline-none text-sm sm:text-base"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-error-500 text-xs sm:text-sm mt-1"
                        />
                      </motion.div>
                    </div>

                    {/* Subject */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.0, duration: 0.4 }}
                    >
                      <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-2">
                        Subject
                      </label>
                      <Field
                        name="subject"
                        placeholder="What's this about?"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 placeholder-slate-500 focus:border-primary-500 focus:bg-white/10 transition-all duration-300 outline-none text-sm sm:text-base"
                      />
                      <ErrorMessage
                        name="subject"
                        component="div"
                        className="text-error-500 text-xs sm:text-sm mt-1"
                      />
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.1, duration: 0.4 }}
                    >
                      <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-2">
                        Message
                      </label>
                      <Field
                        as="textarea"
                        rows="4"
                        name="message"
                        placeholder="Tell me about your project or idea..."
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 placeholder-slate-500 focus:border-primary-500 focus:bg-white/10 transition-all duration-300 outline-none resize-none text-sm sm:text-base"
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-error-500 text-xs sm:text-sm mt-1"
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2, duration: 0.4 }}
                    >
                      <motion.button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaPaperPlane />
                        Send Message
                      </motion.button>
                    </motion.div>
                  </Form>
                )}
              </Formik>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}