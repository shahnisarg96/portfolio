import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import contactDetails from '../data/contactDetails';

const TITLES = [
    'Full-Stack Developer',
    'Cloud-Native Engineer',
    'JavaScript Specialist',
    'AI/LLM Explorer',
    'Database Polyglot'
];

function useRotatingText(words, delay = 2000) {
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
        const timer = setTimeout(() => setIndex((i) => (i + 1) % words.length), delay);
        return () => clearTimeout(timer);
    }, [index, words.length, delay]);
    return words[index];
}

// Animation variants
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

const IntroSection = () => {
    const animatedTitle = useRotatingText(TITLES, 2000);

    return (
        <section
            id="intro"
            className="min-h-screen flex items-center justify-center relative overflow-hidden scroll-mt-16"
        >
            {/* Animated Gradient Background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-base-100 to-base-200 z-0"
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
            />

            {/* Decorative Pulsing Circles */}
            <motion.div
                className="absolute -top-10 left-1/4 w-64 h-64 rounded-full bg-primary/30 blur-3xl z-0"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute -bottom-10 right-1/4 w-64 h-64 rounded-full bg-secondary/30 blur-3xl z-0"
                animate={{ scale: [1, 1.07, 1] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />

            {/* Main Content */}
            <motion.div
                className="container mx-auto px-4 relative z-10"
                variants={container}
                initial="hidden"
                animate="show"
            >
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Text content */}
                    <div className="text-center lg:text-left max-w-2xl">
                        <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" variants={item}>
                            <span className="block">Hello, I'm</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                Nisarg Shah
                            </span>
                        </motion.h1>
                        <motion.h2
                            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-base-content/80 min-h-[2.5rem]"
                            key={animatedTitle}
                            variants={item}
                        >
                            {animatedTitle}
                        </motion.h2>
                        <motion.p className="text-lg mb-8 text-base-content/80 max-w-xl mx-auto lg:mx-0" variants={item}>
                            I create digital solutions that solve real problems with clean, efficient code and intuitive interfaces.
                        </motion.p>

                        {/* Social & Contact Links with Animated Hover */}
                        <motion.div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4" variants={item}>
                            {contactDetails.map((c, i) => (
                                <motion.a
                                    key={i}
                                    href={c.href}
                                    target={c.href.startsWith('http') ? '_blank' : undefined}
                                    rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="btn btn-ghost btn-circle text-xl transition-transform"
                                    title={c.title}
                                    whileHover={{ scale: 1.2, rotate: -8 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {c.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Profile image and decoration */}
                    <motion.div className="relative hidden lg:block" variants={item}>
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-base-content/10 shadow-xl">
                            <img
                                src="./img/nisarg.jpg"
                                alt="Nisarg Shah"
                                className="w-full h-full object-cover scale-150"
                                loading="lazy"
                            />
                        </div>
                        <motion.div
                            className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-primary/20 animate-pulse"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-secondary/20 animate-pulse"
                            animate={{ scale: [1, 1.08, 1] }}
                            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                        />

                        <div className="absolute -top-6 left-1/4 bg-base-100 rounded-full p-2 shadow-lg border border-base-content/10">
                            <div className="rounded-xl w-16 h-16" >
                                <FaReact className="w-full h-full text-[#61DAFB]" />
                            </div>
                        </div>
                        <div className="absolute -bottom-6 right-1/4 bg-base-100 rounded-full p-2 shadow-lg border border-base-content/10">
                            <div className="rounded-xl w-16 h-16">
                                <FaNodeJs className="w-full h-full text-[#5FA04E]" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Animated Scroll Indicator */}
                <motion.div
                    className="mt-16 flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        y: [0, 10, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut"
                    }}
                >
                    <span className="text-sm mb-2">Scroll to explore</span>
                    <div className="w-8 h-12 rounded-full border-2 border-base-content flex justify-center p-1">
                        <motion.div
                            className="w-2 h-2 bg-base-content rounded-full"
                            animate={{ y: [0, 8, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.5,
                                ease: "easeInOut"
                            }}
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default IntroSection;
