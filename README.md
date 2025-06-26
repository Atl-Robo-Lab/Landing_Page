# 🤖 ATLROBOLAB Landing Page

A modern, responsive landing page for ATLROBOLAB - empowering the next generation with cutting-edge robotics, AI technology, and innovative learning experiences.

![ATLROBOLAB](https://img.shields.io/badge/ATLROBOLAB-Robotics%20%26%20AI-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.0.0-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.10-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Overview

ATLROBOLAB is a comprehensive educational technology solution provider specializing in:

- **STEM Labs** - Complete laboratory setups for Science, Technology, Engineering, and Mathematics
- **Tinkering Labs** - Hands-on maker spaces for creative learning
- **AI Labs** - Artificial Intelligence and Machine Learning environments
- **AR/VR Labs** - Immersive learning experiences with Augmented and Virtual Reality
- **IoT Solutions** - Internet of Things implementations for smart learning environments

### 🎯 Impact
- **500+** Schools equipped with our solutions
- **50,000+** Students impacted globally
- **15+** Countries served worldwide

## ✨ Features

### 🎨 Modern Design
- Clean, professional UI with smooth animations
- Responsive design that works on all devices
- Modern gradient backgrounds and glassmorphism effects
- Optimized for performance and accessibility

### 🚀 Interactive Components
- **Hero Section** - Compelling introduction with call-to-action
- **Who We Are** - Company introduction and mission
- **Offerings Section** - Detailed service descriptions
- **Statistics** - Live impact metrics and achievements
- **Solutions** - Comprehensive product showcase
- **Culture Section** - Company values and team insights
- **Contact Form** - Easy communication channel

### 🔧 Technical Features
- Fast loading with Vite build system
- Smooth animations with Framer Motion
- Modern routing with React Router
- Component-based architecture
- ESLint for code quality
- Production-ready build pipeline

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.1.0** - Latest React with concurrent features
- **React DOM 19.1.0** - Optimized DOM manipulation
- **React Router DOM 7.6.2** - Client-side routing

### Styling & UI
- **Tailwind CSS 4.1.10** - Utility-first CSS framework
- **Framer Motion 12.19.1** - Advanced animations and interactions

### Build Tools
- **Vite 7.0.0** - Lightning-fast build tool and dev server
- **@vitejs/plugin-react 4.5.2** - Official React plugin for Vite

### Development Tools
- **ESLint 9.29.0** - Code linting and formatting
- **TypeScript support** - Type definitions for React
- **PropTypes** - Runtime type checking for React props

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:Atl-Robo-Lab/Landing_Page.git
   cd Landing_Page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready application |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 📁 Project Structure

```
atlrobolab/
├── public/                 # Static assets
│   └── vite.svg           # Vite logo
├── src/
│   ├── components/        # Reusable components
│   │   ├── common/        # Common components
│   │   │   ├── AppRouter.jsx      # Main routing component
│   │   │   ├── Header.jsx         # Navigation header
│   │   │   ├── Footer.jsx         # Site footer
│   │   │   ├── HeroSection.jsx    # Hero banner
│   │   │   ├── WhoWeAreSection.jsx
│   │   │   ├── OfferingsSection.jsx
│   │   │   ├── StatisticsSection.jsx
│   │   │   ├── SolutionSection.jsx
│   │   │   ├── CultureSection.jsx
│   │   │   ├── PageTransition.jsx # Page animations
│   │   │   └── index.js           # Component exports
│   │   └── ui/            # UI components
│   │       ├── Button.jsx         # Reusable button
│   │       ├── Card.jsx           # Card component
│   │       ├── Input.jsx          # Form input
│   │       ├── Badge.jsx          # Badge component
│   │       └── index.js           # UI exports
│   ├── layouts/           # Layout components
│   │   ├── MainLayout.jsx         # Main app layout
│   │   ├── BlankLayout.jsx        # Minimal layout
│   │   └── index.js               # Layout exports
│   ├── pages/             # Page components
│   │   ├── Home.jsx               # Homepage
│   │   ├── About.jsx              # About page
│   │   ├── Products.jsx           # Products page
│   │   ├── Contact.jsx            # Contact page
│   │   ├── NotFound.jsx           # 404 page
│   │   └── index.js               # Page exports
│   ├── assets/            # Static assets
│   │   └── logo.svg               # Company logo
│   ├── App.jsx            # Root component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── README.md              # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradients (#3B82F6 to #4F46E5)
- **Secondary**: Purple to Pink gradients (#7C3AED to #EC4899)
- **Accent**: Teal and Cyan (#14B8A6 to #06B6D4)
- **Neutral**: Gray scale (#F8FAFC to #0F172A)

### Typography
- **Headings**: Bold, modern sans-serif
- **Body**: Light, readable sans-serif
- **Sizes**: Responsive scaling from mobile to desktop

### Components
- **Buttons**: Gradient backgrounds with hover effects
- **Cards**: Glass morphism with subtle shadows
- **Animations**: Smooth transitions with Framer Motion

## 🚀 Deployment

### Building for Production

1. **Create production build**
   ```bash
   npm run build
   ```

2. **Preview build locally**
   ```bash
   npm run preview
   ```

### Deployment Options

#### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

#### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

#### GitHub Pages
```bash
npm run build
# Use GitHub Actions to deploy dist/ folder
```

## 🤝 Contributing

We welcome contributions to improve the ATLROBOLAB landing page!

### Development Guidelines

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run linting**
   ```bash
   npm run lint
   ```
5. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
6. **Push to branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Code Style
- Follow ESLint configuration
- Use meaningful component and variable names
- Add PropTypes for component props
- Write clean, readable code with comments

## 📞 Contact & Support

### Get in Touch
- **Website**: [ATLROBOLAB](https://atlrobolab.com)
- **Email**: info@atlrobolab.com
- **Demo Booking**: Available through contact form

### Business Inquiries
- School partnerships
- Bulk equipment orders
- Custom lab setups
- Training and workshops

## 📄 License

This project is proprietary software owned by ATLROBOLAB. All rights reserved.

---

## 🎯 Next Steps

### Planned Features
- [ ] Blog integration
- [ ] Case studies section
- [ ] Interactive product demos
- [ ] Multi-language support
- [ ] SEO optimization
- [ ] Performance monitoring

### Known Issues
- None currently reported

---

**Built with ❤️ by the ATLROBOLAB Team**

*Empowering the next generation with cutting-edge robotics, AI technology, and innovative learning experiences.*
