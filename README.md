# Nisarg Shah – React Portfolio

A modern, interactive developer portfolio built with React, Vite, Tailwind CSS, and DaisyUI. This portfolio showcases professional experience, projects, skills, certifications, and education in a visually engaging and responsive single-page application.

---

## 🚀 Features

- **Animated Intro:**  
  Eye-catching animated introduction with rotating titles and social/contact links.
- **About Me:**  
  Brief professional summary and current focus areas.
- **Experience Timeline:**  
  Vertical timeline of professional roles with highlights and tech stack.
- **Projects Showcase:**  
  Interactive cards with expandable details, technology badges, and links to code/demo.
- **Skills Matrix:**  
  Top skills and categorized technology grid with icons.
- **Certificates Gallery:**  
  Clickable certificate images with popup previews.
- **Education Timeline:**  
  Academic history with degree, school, and period.
- **Contact Section:**  
  Quick links for email, phone, GitHub, LinkedIn, Twitter, and Microsoft Teams.
- **Responsive Design:**  
  Mobile-first layout, adaptive navigation, and smooth scrolling.
- **Dark/Light Theme:**  
  DaisyUI theme support (auto-detects system preference, toggle available).
- **Performance:**  
  Built with Vite for instant HMR and optimized builds.
- **Accessibility:**  
  Keyboard navigation, semantic HTML, and accessible interactive elements.

---

## 🛠️ Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [React Icons](https://react-icons.github.io/react-icons/)
- [ESLint](https://eslint.org/)

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── img/                # Profile, certificates, experience logos
│   │   ├── certificates/
│   │   └── experience/
│   └── pdf/                # Resume PDF
├── src/
│   ├── components/         # All UI sections (About, Projects, Skills, etc.)
│   ├── data/               # Data files (projects, skills, experience, etc.)
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## ⚙️ Setup & Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/shahnisarg96/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app will run at [http://localhost:5173](http://localhost:5173) by default.

4. **Build for production:**
   ```sh
   npm run build
   ```

---

## 🧩 Customization

- **Profile & Content:**  
  Update your details in `src/data/` (`projects.js`, `experience.js`, `education.js`, `certificates.js`, `contactDetails.jsx`, `skills.jsx`).
- **Profile Image:**  
  Replace `public/img/nisarg.jpg` with your own.
- **Resume:**  
  Replace `public/pdf/nisarg_2025.pdf` with your PDF resume.
- **Theme:**  
  DaisyUI themes can be customized in your Tailwind config.

---

## 📝 Notes

- This project is for personal/professional portfolio use.
- All data is static and easily editable in the `src/data/` folder.
- No backend or form submission is included (contact links use mailto/tel/social).
- Fully open source and deployable on Vercel, Netlify, GitHub Pages, etc.

---

## 📚 References

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [DaisyUI Documentation](https://daisyui.com/)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

## 👨‍💻 Author

**Nisarg Shah**  
[Portfolio](https://shahnisarg96.github.io/portfolio/) | 
[GitHub](https://github.com/shahnisarg96) | 
[LinkedIn](https://linkedin.com/in/shahnisarg96)

---

Give a ⭐️ if you found this project