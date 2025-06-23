import React from 'react';
import { motion } from 'framer-motion';
import { getExperienceYears } from '../utils/util'; // Adjust the import path as necessary

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

const AboutSection = () => (
    <section id="about" className="py-16 scroll-mt-20 bg-gradient-to-b from-base-100 to-base-200">
        <div className="max-w-5xl mx-auto px-4">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-8"
            >
                <motion.h3
                    className="text-4xl font-bold text-primary mb-12 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    ABOUT ME
                </motion.h3>

                <motion.blockquote
                    className="border-l-4 border-primary pl-6 py-3 bg-base-200 rounded-r-lg shadow-sm"
                    variants={item}
                >
                    <p className="text-xl font-medium italic">
                        "Keep it simple. Keep it scalable."
                    </p>
                </motion.blockquote>

                <motion.div variants={item} className="space-y-6 text-lg">
                    <p className="text-base-content/90">
                        I’m a <span className="font-bold text-primary">tech-agnostic Full-Stack Engineer</span> with <span className="font-bold">{getExperienceYears()}+ years</span> of experience architecting and building robust, scalable systems—across frontend, backend, databases, and the cloud.
                    </p>

                    <p className="text-base-content/90">
                        My toolkit is ever-evolving and includes <span className="font-semibold text-secondary">Node.js, React, Angular, Java, SpringBoot, NestJS, Fastify, React Native, Flutter</span> and more on the app side, as well as <span className="font-semibold text-secondary">MySQL, PostgreSQL, MongoDB, CosmosDB, Neo4j</span> and various NoSQL/graph databases. I’m truly cloud-native, deploying to <span className="font-semibold text-secondary">Azure, AWS, GCP, DigitalOcean</span> using <span className="font-semibold text-secondary">Docker, Kubernetes, and CI/CD</span> best practices.
                    </p>

                    <p className="text-base-content/90">
                        I thrive on integrating APIs, experimenting with <span className="font-semibold text-secondary">AI/LLMs</span> (Azure OpenAI, DeepSeek, Ollama), and exploring <span className="font-semibold text-secondary">Web3 and blockchain</span> possibilities. I’m also hands-on with messaging, streaming, and caching systems like <span className="font-semibold text-secondary">Kafka, RabbitMQ, and Redis.</span>
                    </p>

                    <p className="text-base-content/90">
                        Whether it’s building SPAs, designing APIs, or optimizing cloud deployments, I’m passionate about learning, collaborating, and delivering real value. My approach: <span className="italic font-bold text-primary">"Code what matters, deploy what scales, and always keep learning."</span>
                    </p>
                </motion.div>

                <motion.div variants={item} className="mt-10">
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border-l-4 border-secondary">
                        <h4 className="text-xl font-semibold text-secondary mb-3">
                            Current Focus
                        </h4>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Cloud-native architectures and microservices</li>
                            <li>AI-driven automation and intelligent systems</li>
                            <li>Enterprise-scale, resilient system design</li>
                            <li>Tech leadership and leading cross-functional teams</li>
                        </ul>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    </section>
);

export default AboutSection;
