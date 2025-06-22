import React from 'react';
import { motion } from 'framer-motion';
import contactDetails from '../data/contactDetails';

// Animation variants
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12
        }
    }
};
const item = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const ContactSection = () => (
    <section id="contact" className="p-6 mt-6 rounded-xl bg-gradient-to-r from-primary/30 via-base-200 to-secondary/30 shadow-lg flex flex-col items-center">
        <motion.div
            className="max-w-3xl mx-auto px-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.h3
                className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center"
                variants={item}
            >
                Let’s Connect
            </motion.h3>
            <motion.p
                className="text-base-content/80 text-lg text-center mb-10"
                variants={item}
            >
                Whether you want to discuss a project, share an idea, or just say hi—my inbox and DMs are always open!
            </motion.p>
            <motion.div
                className="grid grid-cols-3 sm:grid-cols-3 gap-x-12 gap-y-8 justify-items-center"
                variants={container}
            >
                {contactDetails.map((c, i) => (
                    <motion.a
                        key={i}
                        href={c.href}
                        target={c.href.startsWith('http') ? '_blank' : undefined}
                        rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex flex-col items-center group"
                        title={c.title}
                        variants={item}
                        whileHover={{ y: -6, scale: 1.12 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <span className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 text-primary text-2xl mb-2 transition group-hover:bg-primary group-hover:text-secondary shadow">
                            {c.icon}
                        </span>
                        <span className="text-sm text-base-content/80 group-hover:text-primary text-center break-all transition-colors font-medium">
                            {c.label}
                        </span>
                    </motion.a>
                ))}
            </motion.div>
        </motion.div>
    </section>
);

export default ContactSection;
