import React, { useState } from 'react';
import {
    FaUser, FaChartLine, FaLaptopCode, FaChartBar,
    FaMedal, FaGraduationCap, FaEnvelope, FaFilePdf,
    FaTimes
} from 'react-icons/fa';

const navItems = [
    { id: 'about', title: 'About', icon: <FaUser className="text-primary" /> },
    { id: 'experience', title: 'Experience', icon: <FaChartLine className="text-secondary" /> },
    { id: 'projects', title: 'Projects', icon: <FaLaptopCode className="text-accent" /> },
    { id: 'skills', title: 'Skills', icon: <FaChartBar className="text-info" /> },
    { id: 'certifications', title: 'Certifications', icon: <FaMedal className="text-success" /> },
    { id: 'education', title: 'Education', icon: <FaGraduationCap className="text-warning" /> },
    { id: 'contact', title: 'Contact', icon: <FaEnvelope className="text-error" /> },
    {
        id: 'resume',
        title: 'Resume',
        icon: <FaFilePdf className="text-base-content" />,
        href: './pdf/nisarg_2025.pdf',
        target: '_blank'
    }
];

const Navigation = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    // Prevent body scroll when sidebar is open (optional, for better UX)
    React.useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    return (
        <>
            {/* Desktop Navigation */}
            <div className="hidden lg:block fixed inset-y-0 left-0 w-64 bg-base-200 z-10 shadow">
                <div className="p-6 border-b border-base-300">
                    <a href="#intro" className="text-xl font-bold text-primary">Nisarg Shah</a>
                    <p className="text-sm text-base-content mt-1">Full Stack Developer</p>
                </div>
                <ul className="menu p-2">
                    {navItems.map(item => (
                        <li key={item.id}>
                            <a
                                href={item.href || `#${item.id}`}
                                target={item.target || '_self'}
                                className="flex items-center gap-3 py-3 px-2 rounded-lg hover:bg-base-300"
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span className="text-base-content">{item.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Navbar */}
            <div className="lg:hidden navbar bg-base-100 fixed top-0 z-20 shadow">
                <div className="navbar-start">
                    <button
                        className="btn btn-ghost"
                        onClick={() => setMobileOpen(true)}
                        aria-label="Open menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
                <div className="navbar-center">
                    <a href="#intro" className="text-lg font-bold text-primary">Nisarg Shah</a>
                </div>
                <div className="navbar-end">
                    <a
                        href="assets/pdf/nisarg_resume_2020.pdf"
                        target="_blank"
                        className="btn btn-ghost"
                        aria-label="Resume"
                    >
                        <FaFilePdf className="text-lg text-base-content" />
                    </a>
                </div>
            </div>

            {/* Mobile Sidebar with Animation */}
            {/* Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black bg-opacity-40 transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setMobileOpen(false)}
                aria-hidden={!mobileOpen}
            />

            {/* Sidebar */}
            <aside
                className={`
                    fixed top-0 left-0 h-full w-80 bg-base-200 z-50 shadow-lg
                    transform transition-transform duration-300 ease-in-out
                    ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
                `}
                aria-hidden={!mobileOpen}
            >
                <div className="p-4 border-b border-base-300 flex items-center justify-between">
                    <div>
                        <a
                            href="#intro"
                            className="text-xl font-bold text-primary"
                            onClick={() => setMobileOpen(false)}
                        >
                            Nisarg Shah
                        </a>
                        <p className="text-sm text-base-content">Full Stack Developer</p>
                    </div>
                    <button
                        className="btn btn-sm btn-circle btn-ghost"
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close menu"
                    >
                        <FaTimes />
                    </button>
                </div>
                <ul className="menu p-2">
                    {navItems.map(item => (
                        <li key={item.id}>
                            <a
                                href={item.href || `#${item.id}`}
                                target={item.target || '_self'}
                                className="flex items-center gap-3 py-3 px-2 rounded-lg hover:bg-base-300"
                                onClick={() => setMobileOpen(false)}
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span className="text-base-content">{item.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );
};

export default Navigation;
