import React, { useState } from 'react';
import { FaExternalLinkAlt, FaCode, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '../data/projects'; // Adjust the import path as necessary

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const detailsVariants = {
    collapsed: {
        opacity: 0,
        height: 0,
        marginTop: 0,
        transition: {
            duration: 0.2
        }
    },
    open: {
        opacity: 1,
        height: "auto",
        marginTop: 0,
        transition: {
            duration: 0.4
        }
    }
};

const ProjectsSection = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);

    // Toggle expand/collapse for project details
    const toggleExpand = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    // Show only top 4 projects unless "Show All" is clicked
    const projectsToShow = showAll ? projects : projects.slice(0, 4);

    return (
        <section id="projects" className="py-16 mt-6 scroll-mt-20 bg-gradient-to-b from-base-100 to-base-200">
            <div className="max-w-5xl mx-auto px-4">
                <motion.h3
                    className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center"
                >
                    Projects
                </motion.h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projectsToShow.map((project, idx) => (
                        <motion.div
                            key={idx}
                            className="group border border-base-300 rounded-xl shadow-lg bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10 hover:shadow-2xl transition-all duration-300 relative"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div
                                className="p-6 cursor-pointer"
                                onClick={() => toggleExpand(idx)}
                                tabIndex={0}
                                aria-expanded={expandedIndex === idx}
                                onKeyDown={e => {
                                    if (e.key === "Enter" || e.key === " ") toggleExpand(idx);
                                }}
                            >
                                <div className="flex justify-between items-center">
                                    <h4 className="text-2xl font-semibold text-base-content group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h4>
                                    <span className="text-primary text-xl">
                                        {expandedIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
                                    </span>
                                </div>
                                <p className="mt-3 text-base-content/80 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.technology.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="badge badge-outline badge-secondary text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Animated expand/collapse for details */}
                            <AnimatePresence initial={false}>
                                {expandedIndex === idx && project.details && (
                                    <motion.div
                                        className="border-t border-base-300 px-6 pb-6 bg-base-100 overflow-hidden"
                                        key="details"
                                        initial="collapsed"
                                        animate="open"
                                        exit="collapsed"
                                        variants={detailsVariants}
                                    >
                                        <h5 className="text-lg font-semibold text-secondary mt-6 mb-3">Details</h5>
                                        <ul className="list-disc list-inside space-y-1 text-base-content/90">
                                            {project.details.map((detail, i) => (
                                                <li key={i}>{detail}</li>
                                            ))}
                                        </ul>
                                        <div className="mt-4 flex gap-4">
                                            {project.demo && (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-sm btn-primary flex items-center gap-2"
                                                >
                                                    Live Demo <FaExternalLinkAlt />
                                                </a>
                                            )}
                                            {project.code && (
                                                <a
                                                    href={project.code}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-sm btn-secondary flex items-center gap-2"
                                                >
                                                    Source Code <FaCode />
                                                </a>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Show More / Show Less Button */}
                <div className="flex justify-center mt-10">
                    <button
                        className="btn btn-outline btn-primary px-6"
                        onClick={() => setShowAll((v) => !v)}
                    >
                        {showAll ? "Show Less" : "Show All Projects"}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
