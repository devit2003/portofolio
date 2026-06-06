# Devit Saputra — AI Engineer Portfolio

A modern, interactive, responsive portfolio website for an AI/ML Engineer. Built with React + Vite, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Dark / Light Mode** — persisted in localStorage
- **Animated Hero** with tsParticles, typing animation, floating AI icons
- **Smooth scroll navigation** with active section tracking
- **Loading screen** with animated progress
- **Scroll progress indicator**
- **Custom cursor** with lag effect (desktop)
- **Back-to-top button**
- All sections: Hero, About, Skills, Projects, Experience, Statistics, Certificates, Contact, Footer
- Responsive for desktop, tablet, and mobile
- SEO meta tags + Open Graph + Structured Data

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Statistics.jsx
│   ├── Certificates.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── LoadingScreen.jsx
├── data/
│   ├── projects.js
│   ├── skills.js
│   └── certificates.js
├── hooks/
│   ├── useTheme.js
│   └── useScrollProgress.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Customization

1. **Personal info** — Update name, bio, links in `Hero.jsx` and `Footer.jsx`
2. **Projects** — Edit `src/data/projects.js`
3. **Skills** — Edit `src/data/skills.js`
4. **Certificates** — Edit `src/data/certificates.js`
5. **Experience** — Edit the `experiences` array in `Experience.jsx`
6. **Profile photo** — Replace the Unsplash URL in `Hero.jsx` with your photo
7. **Colors** — Adjust CSS variables in `index.css`

## 🌐 Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

Or connect your GitHub repo to Vercel for automatic deployments.

## 🛠️ Tech Stack

- React 18 + Vite
- Tailwind CSS 3
- Framer Motion 11
- tsParticles
- React Type Animation
- React CountUp
- React Icons
- React Intersection Observer
