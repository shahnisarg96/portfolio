import React, { useState } from "react";
import skills from "../data/skills";

const categories = Object.keys(skills);

// Flatten all skills for top skills
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
                <h3 className="text-3xl font-bold text-primary mb-10 text-center">
                    Skills
                </h3>

                {/* Top Skills Grid */}
                <div className="grid grid-cols-4 gap-6 mb-6">
                    {(!showAll ? topSkills : []).map((tech, i) => (
                        <div
                            key={i}
                            className="group flex flex-col items-center bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10 rounded-lg p-4 shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.03]"
                        >
                            <span className="text-4xl mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary">
                                {tech.icon}
                            </span>
                            <span className="text-xs font-medium text-base-content text-center transition-colors duration-300 group-hover:text-secondary">
                                {tech.title}
                            </span>
                            {showAll && (
                                <span className="text-[10px] text-secondary mt-1">{tech.category}</span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Show More / Show Less Button */}
                <div className="flex justify-center mb-10">
                    <button
                        className="btn btn-outline btn-primary px-6 hover:scale-105 transition-transform"
                        onClick={() => setShowAll((v) => !v)}
                    >
                        {showAll ? "Show Less" : "Show All Skills"}
                    </button>
                </div>

                {/* Grouped by category when showing all */}
                {showAll && (
                    <div className="mt-10 space-y-10">
                        {categories.filter((cat) => cat != 'Top Skills').map((cat) => (
                            <div key={cat}>
                                <h4 className="text-lg font-semibold text-secondary mb-4">{cat}</h4>
                                <div className="grid grid-cols-4 gap-6">
                                    {skills[cat].map((tech, i) => (
                                        <div
                                            key={i}
                                            className="group flex flex-col items-center bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10 rounded-lg p-4 shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.03]"
                                        >
                                            <span className="text-4xl mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary">
                                                {tech.icon}
                                            </span>
                                            <span className="text-xs font-medium text-base-content text-center transition-colors duration-300 group-hover:text-primary">
                                                {tech.title}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default SkillsSection;
