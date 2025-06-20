const projects = [
    {
        title: 'Scalable Microservices Architecture',
        description: 'A comprehensive microservices architecture template featuring API Gateway, authentication service, and Kafka integration for logging',
        technology: ['Java', 'Spring Boot', 'Kafka', 'API Gateway', 'Microservices'],
        code: 'https://github.com/shahnisarg96/scalable-architecture-template',
        details: [
            'Modular microservices design for scalability',
            'Centralized API Gateway for routing and security',
            'Kafka integration for asynchronous logging'
        ]
    },
    {
        title: 'Node.js API Gateway Framework',
        description: 'Customizable API Gateway template for routing, authentication, and request management',
        technology: ['Node.js', 'Express', 'API Gateway', 'JWT'],
        code: 'https://github.com/shahnisarg96/api-gateway-template',
        details: [
            'Lightweight and extensible gateway architecture',
            'Supports authentication and rate limiting',
            'Easy integration with microservices'
        ]
    },
    {
        title: 'DevTinder - Social Learning Platform',
        description: 'Tinder-inspired platform for developer networking and collaboration',
        technology: ['Node.js', 'React', 'MongoDB', 'Socket.io'],
        code: 'https://github.com/shahnisarg96/devTinder-node',
        demo: 'https://github.com/shahnisarg96/devTinder-react',
        details: [
            'Real-time matching and chat functionality',
            'User profile management with skill tags',
            'Responsive design for all devices'
        ]
    },
    {
        title: 'NetflixGPT - AI-Powered Streaming',
        description: 'Streaming platform with AI-powered content discovery and recommendations',
        technology: ['React', 'Next.js', 'OpenAI API', 'Tailwind CSS'],
        code: 'https://github.com/shahnisarg96/NetflixGPT',
        details: [
            'Intelligent movie search using AI',
            'Personalized recommendation engine',
            'Server-side rendering for performance'
        ]
    },
    {
        title: 'FoodFusion - Restaurant Discovery',
        description: 'Food delivery platform with restaurant listings and order management',
        technology: ['React', 'Node.js', 'MongoDB', 'Redux'],
        code: 'https://github.com/shahnisarg96/namaste-food',
        details: [
            'Dynamic restaurant and menu listings',
            'Real-time order tracking',
            'User authentication and reviews'
        ]
    },
    {
        title: 'StreamVerse - Video Platform',
        description: 'Video streaming platform with content discovery and playback',
        technology: ['React', 'Node.js', 'MongoDB', 'YouTube API'],
        code: 'https://github.com/shahnisarg96/namaste-youtube',
        details: [
            'Video streaming and playback engine',
            'Content search and filtering',
            'User subscriptions and playlists'
        ]
    },
    {
        title: 'BookSwap - Literary Exchange',
        description: 'Platform for book enthusiasts to exchange and discover new titles',
        technology: ['React', 'Node.js', 'MongoDB'],
        code: 'https://github.com/shahnisarg96/book-exchange-backend',
        demo: 'https://github.com/shahnisarg96/book-exchange-frontend',
        details: [
            'Book listing and search functionality',
            'Exchange request management',
            'User messaging system'
        ]
    },
    {
        title: 'ExpenseWise - Finance Tracker',
        description: 'Mobile application for tracking personal expenses and budgets',
        technology: ['Flutter', 'Dart', 'Firebase'],
        code: 'https://github.com/shahnisarg96/flutter-expense-tracker',
        details: [
            'Expense categorization and visualization',
            'Budget planning and alerts',
            'Cross-platform support'
        ]
    },
    {
        title: 'Solidity Patterns - Smart Contract Library',
        description: 'Collection of reusable smart contract templates and patterns',
        technology: ['Solidity', 'Ethereum', 'Smart Contracts'],
        code: 'https://github.com/shahnisarg96/solidity-snippets',
        details: [
            'Reusable contract templates',
            'Common Solidity patterns',
            'Testing and deployment scripts'
        ]
    },
    {
        title: 'AgileMind - AI-Assisted Planning',
        description: 'AI-powered agile planning tool for automated story creation',
        technology: ['Azure DevOps', 'JIRA', 'OpenAI API', 'Node.js'],
        details: [
            'Automated user story generation',
            'Requirements analysis and summarization',
            'Agile workflow integration'
        ]
    },
    {
        title: 'AlertHub - Enterprise Messaging',
        description: 'Scalable alerting platform for system-wide notifications',
        technology: ['Node.js', 'Kafka', 'Redis', 'Microservices'],
        details: [
            'High-throughput messaging architecture',
            'Real-time alert delivery system',
            'Enterprise-grade reliability'
        ]
    },
    {
        title: 'KPI Dashboard - System Monitoring',
        description: 'Real-time monitoring solution for critical system metrics',
        technology: ['React', 'Node.js', 'Kafka', 'API Gateway'],
        details: [
            'Real-time KPI visualization',
            'Automated alerting system',
            'Customizable monitoring widgets'
        ]
    },
    {
        title: 'FeatureHub - Dynamic UI Control',
        description: 'Feature management portal for dynamic application customization',
        technology: ['React', 'Node.js', 'Feature Flags', 'Microservices'],
        details: [
            'Dynamic feature toggling',
            'User segmentation and targeting',
            'Real-time configuration updates'
        ]
    },
    {
        title: 'SecureInsure - Blockchain Data Vault',
        description: 'Insurance data management system with blockchain security',
        technology: ['Blockchain', 'Ethereum', 'Smart Contracts', 'React'],
        details: [
            'Immutable policy records',
            'Smart contract-based management',
            'Secure data authentication'
        ]
    },
    // Original projects below
    {
        title: 'Infinity Web Services',
        description: 'A sales website for Infinity web services and solutions',
        technology: ['Angular 9', 'Node.js', 'MongoDB', 'SMTP'],
        code: 'https://github.com/shahnisarg96/infinity-web-services',
        details: [
            'Role-based access control for admin and sales teams',
            'Integrated payment gateway and email notifications',
            'Deployed on AWS with CI/CD pipeline'
        ]
    },
    {
        title: 'Record Keeper',
        description: 'Digital ledger application similar to khata book',
        technology: ['Angular 9', 'Node.js', 'MongoDB', 'Angular Material'],
        code: 'https://github.com/shahnisarg96/record-keeper',
        details: [
            'Financial tracking for small businesses',
            'Inventory management system',
            'Sales analytics dashboard'
        ]
    },
    {
        title: 'Personal Blog',
        description: 'Content management system for personal blogging',
        technology: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        code: 'https://github.com/shahnisarg96/personal-blog',
        demo: 'https://nisargshah.dev',
        details: [
            'Markdown content support',
            'SEO optimized pages',
            'Responsive design for all devices'
        ]
    },
    {
        title: 'Zevo Health Admin',
        description: 'Admin panel for health and fitness application',
        technology: ['Laravel', 'PHP', 'Redis', 'FCM'],
        code: 'https://github.com/shahnisarg96/zevo-health-admin',
        details: [
            'User management system',
            'Real-time notifications',
            'Data analytics dashboard'
        ]
    },
    {
        title: 'Zevo Connect',
        description: 'Employee wellbeing tracking platform',
        technology: ['Laravel', 'PHP', 'JavaScript', 'Chart.js'],
        code: 'https://github.com/shahnisarg96/zevo-connect',
        details: [
            'Health metric tracking',
            'Team performance analytics',
            'Customizable reports'
        ]
    },
    {
        title: 'Kharidi',
        description: 'E-commerce platform with full shopping flow',
        technology: ['Laravel', 'PHP', 'Stripe', 'MySQL'],
        code: 'https://github.com/shahnisarg96/kharidi',
        details: [
            'Product catalog with filters',
            'Shopping cart functionality',
            'Secure payment processing'
        ]
    },
    {
        title: 'Admin Panel Framework',
        description: 'Reusable admin panel for multiple applications',
        technology: ['Laravel', 'Vue.js', 'REST API', 'JWT'],
        code: 'https://github.com/shahnisarg96/admin-panel-framework',
        details: [
            'Role-based access control',
            'Modular architecture',
            'API documentation with Swagger'
        ]
    },
    {
        title: 'Portfolio 2025',
        description: 'Modern developer portfolio with 3D animations',
        technology: ['React', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
        code: 'https://github.com/shahnisarg96/portfolio-2025',
        demo: 'https://nisargshah.dev',
        details: [
            'Interactive 3D background',
            'Theme switching (light/dark)',
            'Performance optimized with lazy loading'
        ]
    },
    {
        title: 'AI Chatbot',
        description: 'LLM-powered chatbot with document retrieval',
        technology: ['Python', 'LangChain', 'Next.js', 'Pinecone'],
        code: 'https://github.com/shahnisarg96/ai-chatbot',
        details: [
            'Context-aware responses',
            'Document Q&A functionality',
            'Conversation history'
        ]
    }
];

export default projects;