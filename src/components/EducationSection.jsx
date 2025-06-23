import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaGraduationCap, FaSchool } from 'react-icons/fa';
import education from '../data/education';

// Consistent motion variants
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const cardHover = {
    hover: {
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3 }
    }
};

const icons = [<FaUniversity />, <FaGraduationCap />, <FaSchool />];

const EducationSection = () => (
    <section id="education" className="py-16 mt-6 scroll-mt-20 bg-gradient-to-b from-base-100 to-base-200">
        <div className="max-w-3xl mx-auto px-4">
            <motion.h3
                className="text-4xl font-bold text-primary mb-12 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                EDUCATION
            </motion.h3>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="relative"
            >
                {/* Vertical timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 via-base-300 to-secondary/30 rounded-full z-0" />

                <div className="space-y-12">
                    {education.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            variants={item}
                            className="relative flex items-start gap-6"
                        >
                            {/* Timeline dot with icon */}
                            <div className="z-10 flex-shrink-0">
                                <motion.div
                                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 via-base-200 to-secondary/30 flex items-center justify-center text-2xl text-primary shadow-lg border-2 border-base-300"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {icons[idx] || <FaSchool />}
                                </motion.div>
                            </div>

                            {/* Card content */}
                            <motion.div
                                className="flex-1 bg-gradient-to-r from-primary/10 via-base-200 to-secondary/10 rounded-xl p-6 shadow-md border border-base-300"
                                variants={cardHover}
                                whileHover="hover"
                            >
                                <h4 className="text-lg font-bold mb-1 text-primary">
                                    {edu.degree}
                                </h4>
                                <div className="mb-1">
                                    <a
                                        href={edu.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-base-content hover:underline hover:text-secondary"
                                    >
                                        {edu.school}
                                    </a>
                                </div>
                                <div className="text-base-content/80 mb-1">{edu.location}</div>
                                {edu.grade && (
                                    <div className="text-base-content/90 mb-1">
                                        <span className="font-medium">Grade:</span> {edu.grade}
                                    </div>
                                )}
                                <div className="mt-1 text-sm text-secondary font-semibold">{edu.period}</div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
);

export default EducationSection;
