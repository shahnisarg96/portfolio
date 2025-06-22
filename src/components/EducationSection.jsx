import React from 'react';
import { FaUniversity, FaGraduationCap, FaSchool } from 'react-icons/fa';
import education from '../data/education'; // Adjust the path as necessary

const icons = [<FaUniversity />, <FaGraduationCap />, <FaSchool />];

const EducationSection = () => (
    <section id="education" className="py-16 mt-6 scroll-mt-20 bg-gradient-to-b from-base-100 to-base-200">
        <div className="max-w-3xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-primary mb-10 text-center">Education</h3>
            <div className="relative">
                {/* Vertical timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 via-base-300 to-secondary/30 rounded-full z-0" />
                <div className="space-y-12">
                    {education.map((edu, idx) => (
                        <div key={idx} className="relative flex items-start gap-6">
                            {/* Timeline dot with icon */}
                            <div className="z-10 flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 via-base-200 to-secondary/30 flex items-center justify-center text-2xl text-primary shadow-lg border-2 border-base-300">
                                    {icons[idx] || <FaSchool />}
                                </div>
                            </div>
                            {/* Card content */}
                            <div className="flex-1 bg-gradient-to-r from-primary/10 via-base-200 to-secondary/10 rounded-xl p-6 shadow-md border border-base-300">
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default EducationSection;
