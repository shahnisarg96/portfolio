import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaSkype} from 'react-icons/fa';

const contactDetails = [
    {
        icon: <FaEnvelope />,
        label: 'shahnisarg96@gmail.com',
        href: 'mailto:shahnisarg96@gmail.com',
        title: 'Email',
    },
    {
        icon: <FaPhone />,
        label: '+91-8401998755',
        href: 'tel:+918401998755',
        title: 'Call',
    },
    {
        icon: <FaGithub />,
        label: 'GitHub',
        href: 'https://github.com/shahnisarg96',
        title: 'GitHub',
    },
    {
        icon: <FaLinkedin />,
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/shahnisarg96',
        title: 'LinkedIn',
    },
    {
        icon: <FaTwitter />,
        label: 'Twitter',
        href: 'https://twitter.com/yourtwitter', // Replace with your handle
        title: 'Twitter',
    },
    {
        icon: <FaSkype />,
        label: 'Skype',
        href: 'skype:live:.cid.f4877edde3ed90c8?call',
        title: 'Skype',
    },
];

export default contactDetails;