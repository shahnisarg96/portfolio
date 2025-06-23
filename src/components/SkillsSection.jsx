import React, { useState } from "react";
import { motion } from "framer-motion";
import skills from "../data/skills";

// Animation variants (consistent with AboutSection)
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.05
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const categories = Object.keys(skills);
const allSkills = Object.entries(skills).flatMap(([category, techs]) =>
    techs.map((tech) => ({ ...tech, category }))
);
const TOP_SKILLS_COUNT = 12;

const SkillsSection = () => {
    const [showAll, setShowAll] = useState(false);
    const topSkills = allSkills.slice(0, TOP_SKILLS_COUNT);

    return (
        <section id="skills" className="py-16 mt-6 scroll-mt-20 bg-gradient-to-b from-base-100 to-base-200">
            <div className="max-w-5xl mx-auto px-4">
                <motion.h3
                    className="text-4xl font-bold text-primary mb-12 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    SKILLS
                </motion.h3>

                {/* Top Skills Grid - Fixed to re-render properly */}
                {!showAll && (
                    <motion.div
                        key="top-skills" // Key forces re-render
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-4 gap-6 mb-6"
                    >
                        {topSkills.map((tech, i) => (
                            <motion.div
                                key={i}
                                variants={item}
                                className="group flex flex-col items-center bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10 rounded-lg p-4 shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.03]"
                            >
                                <span className="text-4xl mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary">
                                    {tech.icon}
                                </span>
                                <span className="text-xs font-medium text-base-content text-center transition-colors duration-300 group-hover:text-secondary">
                                    {tech.title}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {/* Show More / Show Less Button */}
                <motion.div
                    className="flex justify-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.button
                        className="btn btn-outline btn-primary px-6"
                        onClick={() => setShowAll((v) => !v)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {showAll ? "Show Less" : "Show All Skills"}
                    </motion.button>
                </motion.div>

                {/* Grouped by category when showing all */}
                {showAll && (
                    <motion.div
                        className="mt-10 space-y-10"
                        key="all-skills" // Key forces re-render
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        {categories.filter(cat => cat !== 'Top Skills').map((cat) => (
                            <motion.div key={cat} variants={item}>
                                <motion.h4
                                    className="text-lg font-semibold text-secondary mb-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                >
                                    {cat}
                                </motion.h4>
                                <motion.div
                                    className="grid grid-cols-4 gap-6"
                                    variants={container}
                                >
                                    {skills[cat].map((tech, i) => (
                                        <motion.div
                                            key={i}
                                            variants={item}
                                            className="group flex flex-col items-center bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10 rounded-lg p-4 shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.03]"
                                        >
                                            <span className="text-4xl mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary">
                                                {tech.icon}
                                            </span>
                                            <span className="text-xs font-medium text-base-content text-center transition-colors duration-300 group-hover:text-primary">
                                                {tech.title}
                                            </span>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default SkillsSection;
