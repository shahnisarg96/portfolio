import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import certificates from '../data/certificates';

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const popupVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } }
};

const CertificatesSection = () => {
    const [popupIdx, setPopupIdx] = useState(null);

    // Optional: close popup on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setPopupIdx(null);
        };
        if (popupIdx !== null) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [popupIdx]);

    return (
        <section id="certifications" className="py-16 mt-6 scroll-mt-20 bg-gradient-to-b from-base-100 to-base-200">
            <div className="max-w-5xl mx-auto px-4">
                <motion.h3
                    className="text-3xl font-bold text-primary mb-12 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    APPRECIATIONS & CERTIFICATIONS
                </motion.h3>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 relative"
                >
                    {certificates.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            variants={item}
                            className="relative flex flex-col items-center bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10 rounded-xl p-4 shadow-md border border-base-300 cursor-pointer"
                            tabIndex={0}
                            onClick={() => setPopupIdx(idx)}
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
                        </motion.div>
                    ))}
                </motion.div>

                {/* Popup/Modal */}
                <AnimatePresence>
                    {popupIdx !== null && (
                        <motion.div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
                            variants={popupVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div className="bg-base-100 rounded-2xl shadow-2xl border border-base-300 p-4 flex flex-col items-center relative w-[90vw] max-w-2xl">
                                <img
                                    src={certificates[popupIdx].imgSrc}
                                    alt={certificates[popupIdx].title}
                                    className="w-full h-full object-contain rounded-lg max-h-[60vh]"
                                />
                                <button
                                    onClick={() => setPopupIdx(null)}
                                    className="absolute top-2 right-2 text-base-content bg-base-200 rounded-full px-2 py-1 font-bold shadow hover:bg-base-300 cursor-pointer"
                                    aria-label="Close"
                                >
                                    ×
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default CertificatesSection;
