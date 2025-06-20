import React from 'react';
import { motion } from 'framer-motion';
import experiences from '../data/experience'; // Adjust the path as necessary

const ExperienceSection = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, x: -30 },
        show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section id="experience" className="py-16 mt-6 scroll-mt-20 bg-gradient-to-b from-base-100 to-base-200">
            <div className="max-w-5xl mx-auto px-4">
                <motion.h3
                    className="text-4xl font-bold text-primary mb-12 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Professional Journey
                </motion.h3>

                <motion.div
                    className="relative"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Vertical timeline */}
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 to-secondary/20 rounded-full z-0"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                className="relative pl-16"
                                variants={item}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 top-5 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary z-10 flex items-center justify-center">
                                    <div className="w-4 h-4 rounded-full bg-base-100"></div>
                                </div>

                                {/* Experience card */}
                                <div className="bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10 rounded-xl p-6 shadow-lg border border-base-300 hover:shadow-xl transition-all duration-300 group">
                                    <div className="flex flex-col md:flex-row gap-6 items-start">
                                        {/* Company Logo */}
                                        <a href={exp.url} target="_blank" rel="noopener noreferrer" className="shrink-0">
                                            <div className="bg-base-100 p-3 rounded-lg border border-base-300 shadow-sm group-hover:shadow-md transition">
                                                <img
                                                    src={exp.logo}
                                                    alt={`${exp.company} logo`}
                                                    className="w-16 h-16 object-contain"
                                                />
                                            </div>
                                        </a>

                                        {/* Experience Details */}
                                        <div className="flex-1">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                                <div>
                                                    <h4 className="text-xl font-bold">
                                                        <a
                                                            href={exp.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-primary hover:underline"
                                                        >
                                                            {exp.company}
                                                        </a>
                                                    </h4>
                                                    <div className="text-base-content font-semibold">{exp.role}</div>
                                                </div>
                                                <span className="text-sm text-secondary font-medium bg-base-200 px-3 py-1 rounded-full">
                                                    {exp.period}
                                                </span>
                                            </div>

                                            <p className="text-base-content/80 mb-4 italic">{exp.description}</p>

                                            {/* Stack badges */}
                                            {exp.stack && (
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {exp.stack.map((tech, i) => (
                                                        <span
                                                            key={i}
                                                            className="badge badge-outline badge-primary text-xs font-medium"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Highlights */}
                                            <ul className="space-y-2">
                                                {exp.highlights.map((h, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="text-primary mr-2">▹</span>
                                                        <span className="text-base-content/90">{h}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ExperienceSection;
