import React from 'react';
import { motion } from 'framer-motion';
import { getExperienceYears } from '../utils/util'; // Adjust the import path as necessary

const AboutSection = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
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
                        className="text-4xl font-bold text-primary mb-6 text-center"
                        variants={item}
                    >
                        About Me
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
                            I'm a <span className="font-bold text-primary">JavaScript-first Full-Stack Developer</span> with <span className="font-bold">{getExperienceYears()}+ years</span> of experience building robust, scalable systems across frontend, backend, databases, and cloud infrastructure.
                        </p>

                        <p className="text-base-content/90">
                            My toolkit spans <span className="font-semibold text-secondary">React, Angular, Node.js, NestJS, and Fastify</span> on the application layer, and <span className="font-semibold text-secondary">MySQL, PostgreSQL, MongoDB, CosmosDB, and Neo4j</span> for data persistence. I'm cloud-agnostic, deploying to <span className="font-semibold text-secondary">Azure, AWS, GCP, and DigitalOcean</span> with containerization (Docker/Kubernetes) and CI/CD pipelines.
                        </p>

                        <p className="text-base-content/90">
                            I specialize in API integration and enjoy experimenting with <span className="font-semibold text-secondary">AI/LLMs</span> (Azure OpenAI, DeepSeek, Ollama) and exploring <span className="font-semibold text-secondary">Web3 and blockchain</span> technologies. I'm also experienced with messaging systems (Kafka, RabbitMQ) and caching solutions (Redis).
                        </p>

                        <p className="text-base-content/90">
                            Whether building SPAs, designing APIs, or optimizing cloud deployments, I thrive on creating solutions through collaboration. My philosophy: <span className="italic font-medium">"Code what matters, deploy what scales, and always keep learning."</span>
                        </p>
                    </motion.div>

                    <motion.div variants={item} className="mt-10">
                        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border-l-4 border-secondary">
                            <h4 className="text-xl font-semibold text-secondary mb-3">
                                Current Focus
                            </h4>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Cloud-native architectures with microservices</li>
                                <li>AI-driven automation and intelligent systems</li>
                                <li>Scalable system design and performance optimization</li>
                            </ul>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
