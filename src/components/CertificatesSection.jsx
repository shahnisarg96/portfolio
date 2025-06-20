import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import certificates from '../data/certificates'; // Adjust the import path as necessary

const popupVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 20 },
    visible: { opacity: 1, scale: 1.2, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
    exit: { opacity: 0, scale: 0.85, y: 20, transition: { duration: 0.2 } }
};

const CertificatesSection = () => {
    const [hoveredIdx, setHoveredIdx] = useState(null);

    return (
        <section id="certifications" className="py-16 mt-6 scroll-mt-20 bg-gradient-to-b from-base-100 to-base-200">
            <div className="max-w-5xl mx-auto px-4">
                <h3 className="text-3xl font-bold text-primary mb-10 text-center">
                    Appreciations & Certifications
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 relative">
                    {certificates.map((cert, idx) => (
                        <div
                            key={idx}
                            className="relative flex flex-col items-center bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10 rounded-xl p-4 shadow-md border border-base-300 cursor-pointer"
                            onMouseEnter={() => setHoveredIdx(idx)}
                            onMouseLeave={() => setHoveredIdx(null)}
                            onFocus={() => setHoveredIdx(idx)}
                            onBlur={() => setHoveredIdx(null)}
                            tabIndex={0}
                        >
                            <div className="w-20 h-20 flex items-center justify-center mb-3">
                                <img
                                    src={cert.imgSrc}
                                    alt={cert.title}
                                    className="w-full h-full object-contain rounded-md shadow"
                                    loading="lazy"
                                />
                            </div>
                            <div className="text-center text-base-content/90 font-medium text-sm mt-1">
                                {cert.title}
                            </div>

                            {/* Popup on hover - only image enlarged */}
                            <AnimatePresence>
                                {hoveredIdx === idx && (
                                    <motion.div
                                        className="absolute z-50 left-1/2 -top-36 -translate-x-1/2 rounded-2xl shadow-2xl border border-base-300 bg-base-100 p-2"
                                        style={{ width: 400, height: 400 }}
                                        variants={popupVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                    >
                                        <img
                                            src={cert.imgSrc}
                                            alt={cert.title}
                                            className="w-full h-full object-contain rounded-lg"
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificatesSection;
