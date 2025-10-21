# Youssef's Portfolio - Business Information Systems Student

A modern, multilingual portfolio website showcasing my journey as a Business Information Systems student at ESEN (École Supérieure d'Économie Numérique).

## 🌟 Features

### Multilingual Support (i18n)
- **English** - Default language
- **French (Français)** - Full French translation
- **Arabic (العربية)** - Complete Arabic translation with RTL (Right-to-Left) support

Language preferences are saved to your browser's local storage and persist across sessions.

### Theme Toggle
- **Dark Mode** - Default dark theme with vibrant gradients
- **Light Mode** - Clean light theme with professional aesthetics

Theme preferences are automatically saved and restored on your next visit.

### Responsive Design
- Fully responsive across all devices (desktop, tablet, mobile)
- Optimized breakpoints: 1024px, 900px, 768px, 640px, 480px
- Mobile-friendly navigation with hamburger menu

### Interactive Elements
- Animated typing effect showing roles and expertise
- Smooth scroll animations
- Dynamic statistics counter
- Skill progress bars
- Form validation with notifications

## 📋 Sections

1. **Hero Section** - Introduction with animated typing text
2. **Experience & Leadership** - 6 key roles:
   - Business Information Systems Student @ ESEN
   - Financial Officer @ Joker ESEN
   - Web Developer (PHP, MySQL, JavaScript)
   - Founding Member @ BIL IAD & TUNIVISAN IAD
   - Scouts Leadership (4 years)
   - TE-COMM 2024 Organizer
3. **About** - Background, education, and current focus
4. **Skills** - Technical expertise organized by category:
   - Databases (PostgreSQL, MySQL, SQL)
   - Data Analytics (Power BI, Excel, Python)
   - Web Development (PHP, JavaScript, HTML/CSS)
   - Version Control (Git, GitHub)
5. **Projects** - Featured web development projects
6. **Contact** - Get in touch form with validation

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox
- **Vanilla JavaScript** - No frameworks, pure JS
- **Font Awesome 6.4.0** - Icons
- **Google Fonts** - Inter & JetBrains Mono
- **AOS Library** - Scroll animations (currently disabled)

## 🌐 Language Switcher Implementation

The portfolio uses a custom i18n (internationalization) system:

```javascript
// Language structure
translations = {
    en: { nav: {...}, hero: {...}, about: {...}, ... },
    fr: { nav: {...}, hero: {...}, about: {...}, ... },
    ar: { nav: {...}, hero: {...}, about: {...}, ... }
}
```

- All translatable text elements have `data-i18n` attributes
- Language switching updates all text dynamically
- Arabic automatically applies RTL (Right-to-Left) layout
- Typing animation texts change based on selected language

## 🎨 Theme System

CSS custom properties enable seamless theme switching:

```css
/* Dark Theme (Default) */
--bg-primary: #0a0a0f;
--text-primary: #ffffff;
--accent-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Light Theme */
--bg-primary: #f5f7fa;
--text-primary: #1a1a2e;
--accent-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Toggle between themes with the moon/sun icon in the navigation bar.

## 📱 Responsive Features

- **Desktop (1024px+)**: Full layout with 3-column experience grid
- **Tablet (768px-1024px)**: 2-column grid, adjusted spacing
- **Mobile (< 768px)**: Single column layout, hamburger menu

## 🚀 Performance

- Lightweight vanilla JavaScript (no frameworks)
- Optimized CSS with custom properties
- Minimal external dependencies
- Local storage for fast preference loading

## 📞 Contact Information

- **Email**: [Your email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]

## 📄 License

© 2024 Youssef. All rights reserved.

---

**Built with ❤️ for the Business Information Systems community at ESEN**
