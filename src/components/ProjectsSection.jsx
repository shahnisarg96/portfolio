import React, { useState, useRef, useLayoutEffect } from 'react';
import { FaExternalLinkAlt, FaCode, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '../data/projects';

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const detailsVariants = {
    collapsed: {
        opacity: 0,
        height: 0,
        marginTop: 0,
        transition: { duration: 0.2 }
    },
    open: {
        opacity: 1,
        height: "auto",
        marginTop: 0,
        transition: { duration: 0.4 }
    }
};

const ProjectsSection = () => {
    const [expandedId, setExpandedId] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const [animationKey, setAnimationKey] = useState(0);
    const scrollPositionRef = useRef(0);
    const sectionRef = useRef(null);

    const toggleExpand = (title) => {
        setExpandedId(prevId => (prevId === title ? null : title));
    };

    const projectsToShow = showAll ? projects : projects.slice(0, 4);

    const handleShowAll = () => {
        if (!showAll) {
            // Save current scroll position before expanding
            scrollPositionRef.current = window.scrollY;
        } else {
            // On "Show Less", scroll to the top of the Projects section
            setTimeout(() => {
                if (sectionRef.current) {
                    sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100); // Delay to allow layout to update
        }
        setShowAll(v => !v);
        setExpandedId(null);
        setAnimationKey(prev => prev + 1); // Force re-animation
    };

    // Restore scroll position after the project list changes (for "Show All")
    useLayoutEffect(() => {
        if (scrollPositionRef.current !== 0 && showAll) {
            window.scrollTo(0, scrollPositionRef.current);
            scrollPositionRef.current = 0;
        }
    }, [projectsToShow, showAll]);

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="py-16 mt-6 scroll-mt-20 bg-gradient-to-b from-base-100 to-base-200"
        >
            <div className="max-w-5xl mx-auto px-4">
                <motion.h3
                    className="text-4xl font-bold text-primary mb-12 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    PROJECTS
                </motion.h3>

                <motion.div
                    key={animationKey}
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 gap-10"
                >
                    {projectsToShow.map((project) => (
                        <motion.div
                            key={project.title}
                            variants={item}
                            className="group border border-base-300 rounded-xl shadow-lg bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10 hover:shadow-2xl transition-all duration-300"
                        >
                            <div
                                className="p-6 cursor-pointer"
                                onClick={() => toggleExpand(project.title)}
                                tabIndex={0}
                                aria-expanded={expandedId === project.title}
                                onKeyDown={e => {
                                    if (e.key === "Enter" || e.key === " ") toggleExpand(project.title);
                                }}
                            >
                                <div className="flex justify-between items-center">
                                    <h4 className="text-2xl font-semibold text-base-content group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h4>
                                    <span className="text-primary text-xl">
                                        {expandedId === project.title ? <FaChevronUp /> : <FaChevronDown />}
                                    </span>
                                </div>
                                <p className="mt-3 text-base-content/80 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.technology.map((tech, i) => (
                                        <motion.span
                                            key={i}
                                            className="badge badge-outline badge-secondary text-sm"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            <AnimatePresence initial={false}>
                                {expandedId === project.title && project.details && (
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
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                >
                                                    {detail}
                                                </motion.li>
                                            ))}
                                        </ul>
                                        <div className="mt-4 flex gap-4">
                                            {project.demo && (
                                                <motion.a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-sm btn-primary flex items-center gap-2"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    Live Demo <FaExternalLinkAlt />
                                                </motion.a>
                                            )}
                                            {project.code && (
                                                <motion.a
                                                    href={project.code}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-sm btn-secondary flex items-center gap-2"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    Source Code <FaCode />
                                                </motion.a>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="flex justify-center mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <button
                        className="btn btn-outline btn-primary px-6"
                        onClick={handleShowAll}
                    >
                        {showAll ? "Show Less" : "Show All Projects"}
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;
