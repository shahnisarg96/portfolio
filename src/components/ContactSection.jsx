import React from 'react';
import { motion } from 'framer-motion';
import contactDetails from '../data/contactDetails';

// Animation variants (consistent with AboutSection)
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

const ContactSection = () => (
    <section id="contact" className="py-16 mt-6 rounded-xl bg-gradient-to-r from-primary/30 via-base-200 to-secondary/30 shadow-lg flex flex-col items-center">
        <div className="max-w-3xl mx-auto px-4 w-full">
            <motion.h3
                className="text-4xl font-bold text-primary mb-12 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                LET'S CONNECT
            </motion.h3>
            <motion.p
                className="text-base-content/80 text-lg text-center mb-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                Whether you want to discuss a project, share an idea, or just say hi—my inbox and DMs are always open!
            </motion.p>
            <motion.div
                className="grid grid-cols-3 gap-x-12 gap-y-8 justify-items-center"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
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
                        whileHover={{ y: -8, scale: 1.12, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.10)" }}
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
        </div>
    </section>
);

export default ContactSection;
