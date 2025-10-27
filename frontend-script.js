// Frontend Developer Student Portfolio JavaScript

// i18n Translations
const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact'
        },
        hero: {
            status: 'Available for opportunities',
            greeting: "Hey there! I'm",
            role1: 'Full Stack Developer',
            role2: 'Data Analyst',
            tagline: 'Building intelligent web solutions with data-driven insights',
            description: "Specialized in creating scalable web applications and transforming complex data into actionable insights. Proficient in modern web technologies and data analysis tools, with a passion for building efficient, data-driven solutions.",
            tech_stack: 'Tech Stack:',
            stats: {
                projects: 'Projects',
                experience: 'Years Experience',
                technologies: 'Technologies'
            },
            cta: {
                work: 'View Projects',
                contact: "Let's Talk"
            },
            download_cv: 'Download CV'
        },
        scroll: {
            down: 'Scroll down'
        },
        about: {
            title: 'About Me',
            heading: 'Business, Data, and Web — Connected',
            p1: "I'm a third-year Business Information Systems student at the Higher School of Digital Economy (ESEN), passionate about how technology transforms business strategy and operations. I enjoy building data-driven, innovative, and user-centered solutions that connect the worlds of business and IT.",
            p2: "Beyond my studies, I work as a Financial Officer at Joker ESEN, managing budgets and tracking performance to support strategic growth. I've also designed and developed three fully dynamic web projects using PHP, MySQL, and JavaScript, blending technical efficiency with real business logic.",
            focus: {
                title: '🎯 Current Focus',
                item1: 'Data analytics and visualization with Power BI',
                item2: 'Backend-integrated web apps with PHP & MySQL',
                item3: 'Clean architecture and reusable UI components',
                item4: 'SQL performance and database design',
                item5: 'Version control workflows with GitHub'
            },
            stats: {
                learning: 'Years Learning',
                projects: 'Projects Built',
                hours: 'Hours Coding',
                tech: 'Technologies'
            }
        },
        skills: {
            title: 'Skills & Technologies',
            subtitle: 'The tools and technologies I use to bring ideas to life',
            frontend: 'Frontend Development',
            backend: 'Backend Development',
            analytics: 'Data Analytics',
            tools: 'Tools & Version Control',
            soft: 'Soft Skills'
        },
        projects: {
            title: 'Featured Projects',
            subtitle: 'A selection of dynamic, database-backed projects built with PHP, MySQL, and JavaScript',
            inventory_title: 'Business Inventory System',
            inventory_desc: 'Full-stack inventory management with PHP & MySQL. Features product catalog, stock tracking, role-based access, and sales reporting.',
            invoicing_title: 'Client Invoicing Portal',
            invoicing_desc: 'Secure invoicing system with PDF invoice generation, client dashboards, and payment status tracking.',
            analytics_title: 'Sales Analytics Dashboard',
            analytics_desc: 'Interactive sales analytics with charts, filters, ETL from CSV/SQL, and export features.'
        },
        contact: {
            title: "Let's Connect",
            subtitle: "I'm always open to discussing new opportunities and collaborations",
            get_in_touch: 'Get In Touch',
            intro: "As a frontend developer student, I'm eager to learn from experienced developers and contribute to meaningful projects. Whether you have internship opportunities, mentorship, or just want to chat about web development, I'd love to hear from you!",
            form_title: 'Send Me a Message',
            form: {
                name: 'Your Name',
                email: 'Your Email',
                subject: 'Subject',
                message: 'Your Message',
                submit: 'Send Message'
            },
            download_cv: 'Download CV',
            cta_text: "Let's build something great together 🚀"
        }
    },
    fr: {
        nav: {
            home: 'Accueil',
            about: 'À Propos',
            skills: 'Compétences',
            projects: 'Projets',
            contact: 'Contact'
        },
        hero: {
            status: 'Disponible pour des opportunités',
            greeting: 'Salut ! Je suis',
            role1: 'Développeur Full Stack',
            role2: 'Analyste de Données',
            tagline: 'Création de solutions web intelligentes avec des analyses basées sur les données',
            description: "Spécialisé dans la création d'applications web évolutives et la transformation de données complexes en informations exploitables. Compétent dans les technologies web modernes et les outils d'analyse de données, avec une passion pour la création de solutions efficaces et basées sur les données.",
            tech_stack: 'Technologies :',
            stats: {
                projects: 'Projets',
                experience: 'Années d\'expérience',
                technologies: 'Technologies'
            },
            cta: {
                work: 'Voir Mes Projets',
                contact: 'Discutons'
            },
            download_cv: 'Télécharger le CV'
        },
        scroll: {
            down: 'Défiler vers le bas'
        },
        about: {
            title: 'À Propos de Moi',
            heading: 'Business, Données et Web — Connectés',
            p1: "Je suis étudiant en troisième année de Systèmes d'Information d'Entreprise à l'École Supérieure de l'Économie Numérique (ESEN), passionné par la façon dont la technologie transforme la stratégie et les opérations commerciales. J'aime construire des solutions innovantes, axées sur les données et centrées sur l'utilisateur qui connectent les mondes du business et de l'IT.",
            p2: "Au-delà de mes études, je travaille comme Responsable Financier au Joker ESEN, gérant les budgets et suivant les performances pour soutenir la croissance stratégique. J'ai également conçu et développé trois projets web entièrement dynamiques utilisant PHP, MySQL et JavaScript, alliant efficacité technique et logique métier réelle.",
            focus: {
                title: '🎯 Focus Actuel',
                item1: "Analytique de données et visualisation avec Power BI",
                item2: 'Applications web intégrées backend avec PHP & MySQL',
                item3: 'Architecture propre et composants UI réutilisables',
                item4: 'Performance SQL et conception de bases de données',
                item5: 'Flux de contrôle de version avec GitHub'
            },
            stats: {
                learning: 'Années d\'apprentissage',
                projects: 'Projets réalisés',
                hours: 'Heures de code',
                tech: 'Technologies'
            }
        },
        skills: {
            title: 'Compétences & Technologies',
            subtitle: 'Les outils et technologies que j\'utilise pour donner vie aux idées',
            frontend: 'Développement Frontend',
            backend: 'Développement Backend',
            analytics: 'Analyse de Données',
            tools: 'Outils & Contrôle de Version',
            soft: 'Compétences Douces'
        },
        projects: {
            title: 'Projets En Vedette',
            subtitle: 'Une sélection de projets dynamiques avec bases de données construits avec PHP, MySQL et JavaScript',
            inventory_title: 'Système de Gestion des Stocks',
            inventory_desc: "Gestion des stocks complète avec PHP & MySQL. Catalogue produit, suivi des stocks, accès basé sur les rôles et rapports de ventes.",
            invoicing_title: "Portail de Facturation Client",
            invoicing_desc: "Système de facturation sécurisé avec génération de PDF, tableaux de bord clients et suivi des paiements.",
            analytics_title: "Tableau de Bord d'Analyse des Ventes",
            analytics_desc: "Tableau interactif agrégeant les ventes avec graphiques, filtres et exportation de données."
        },
        contact: {
            title: 'Connectons-nous',
            subtitle: "Je suis toujours ouvert à discuter de nouvelles opportunités et collaborations",
            get_in_touch: 'Entrer en Contact',
            intro: "En tant qu'étudiant développeur frontend, je suis impatient d'apprendre auprès de développeurs expérimentés et de contribuer à des projets significatifs. Que vous ayez des opportunités de stage, de mentorat ou que vous souhaitiez simplement discuter du développement web, j'aimerais vous entendre !",
            form_title: 'Envoyez-moi un Message',
            form: {
                name: 'Votre Nom',
                email: 'Votre Email',
                subject: 'Sujet',
                message: 'Votre Message',
                submit: 'Envoyer le Message'
            },
            download_cv: 'Télécharger le CV',
            cta_text: 'Construisons quelque chose de génial ensemble 🚀'
        }
    }
};

let currentLang = localStorage.getItem('preferred-lang') || 'en';
let currentTheme = localStorage.getItem('preferred-theme') || 'dark';

// Apply saved preferences on load
document.addEventListener('DOMContentLoaded', function() {
    // Apply theme
    if (currentTheme === 'light') {
        document.body.classList.add('light-theme');
        const themeIcon = document.querySelector('#theme-toggle i');
        if (themeIcon) themeIcon.className = 'fas fa-sun';
    }
    
    // Apply language
    applyLanguage(currentLang);
    
    // Initialize AOS - DISABLED
    // if (typeof AOS !== 'undefined') {
    //     AOS.init({
    //         duration: 1000,
    //         easing: 'ease-out-cubic',
    //         once: true,
    //         offset: 50,
    //         delay: 100
    //     });
    // }

    // Navigation functionality
    initNavigation();
    
    // Language switcher
    initLanguageSwitcher();
    
    // Theme toggle
    initThemeToggle();
    
    // Typing animation
    initTypingAnimation();
    
    // Stats counter animation
    initStatsCounter();
    
    // Skills progress bars
    initSkillsBars();
    
    // Form handling
    initContactForm();
    
    // Scroll effects
    initScrollEffects();
    
    // Theme and interactions
    initInteractions();
});

// Navigation
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Typing Animation
function initTypingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    // Initialize with current language texts
    if (!window.currentTypingTexts) {
        updateTypingTexts(currentLang);
    }
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeText() {
        const texts = window.currentTypingTexts || [
            'Business Information Systems Student',
            'Web Developer (PHP · JS)',
            'Data & Analytics Enthusiast',
            'Financial Officer @ Joker ESEN'
        ];
        
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => {
                isDeleting = true;
                typeSpeed = 50;
            }, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }

        setTimeout(typeText, typeSpeed);
    }

    // Start the typing animation
    setTimeout(typeText, 1000);
}

// Stats Counter Animation
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    
    const observerOptions = {
        threshold: 0.7,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const count = parseInt(target.getAttribute('data-count'));
                animateCounter(target, count);
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => {
        observer.observe(stat);
    });

    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 60; // 60 frames for 1 second at 60fps
        const duration = 2000; // 2 seconds
        const stepTime = duration / 60;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, stepTime);
    }
}

// Skills Progress Bars
function initSkillsBars() {
    const skillBars = document.querySelectorAll('.skill-progress[data-width]');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('data-width');
                
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 200);
                
                observer.unobserve(progressBar);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        bar.style.width = '0%';
        observer.observe(bar);
    });
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const subject = formData.get('subject').trim();
        const message = formData.get('message').trim();

        // Basic validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        // Simulate form submission
        const submitBtn = form.querySelector('.submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnIcon = submitBtn.querySelector('.btn-icon');
        
        // Show loading state
        submitBtn.disabled = true;
        btnText.textContent = 'Sending...';
        btnIcon.className = 'fas fa-spinner fa-spin btn-icon';
        
        // Simulate API call
        setTimeout(() => {
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            form.reset();
            
            // Reset button
            btnText.textContent = 'Message Sent!';
            btnIcon.className = 'fas fa-check btn-icon';
            
            setTimeout(() => {
                submitBtn.disabled = false;
                btnText.textContent = 'Send Message';
                btnIcon.className = 'fas fa-paper-plane btn-icon';
            }, 2000);
        }, 2000);
    });

    // Form field animations
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        if (input) {
            input.addEventListener('focus', function() {
                group.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (!input.value) {
                    group.classList.remove('focused');
                }
            });
        }
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">
                ${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}
            </span>
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'rgba(16, 185, 129, 0.9)' : 
                    type === 'error' ? 'rgba(239, 68, 68, 0.9)' : 
                    'rgba(37, 99, 235, 0.9)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.75rem;
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 400px;
        word-wrap: break-word;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', function() {
        closeNotification(notification);
    });
    
    // Style notification content
    const content = notification.querySelector('.notification-content');
    content.style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.75rem;
    `;
    
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0.8;
        transition: opacity 0.2s;
        margin-left: auto;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    // Auto close after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            closeNotification(notification);
        }
    }, 5000);
}

function closeNotification(notification) {
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => {
        if (document.body.contains(notification)) {
            document.body.removeChild(notification);
        }
    }, 300);
}

// Scroll Effects
function initScrollEffects() {
    // Parallax effect for floating elements - DISABLED
    // const floatingElements = document.querySelectorAll('.floating-element');
    
    // window.addEventListener('scroll', function() {
    //     const scrolled = window.pageYOffset;
    //     const rate = scrolled * -0.5;
        
    //     floatingElements.forEach((element, index) => {
    //         const speed = 0.3 + (index * 0.1);
    //         element.style.transform = `translateY(${scrolled * speed}px)`;
    //     });
    // });

    // Hide scroll indicator when scrolling
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        window.addEventListener('scroll', function() {
            const opacity = Math.max(1 - (window.pageYOffset / 300), 0);
            scrollIndicator.style.opacity = opacity;
        });
    }
}

// Interactive Elements
function initInteractions() {
    // Project cards hover effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Tool items hover effects
    const toolItems = document.querySelectorAll('.tool-item');
    toolItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Social links hover effects
    const socialLinks = document.querySelectorAll('.social-icon, .social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Button interactions
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = '';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Code window interaction
    const codeWindow = document.querySelector('.code-window');
    if (codeWindow) {
        codeWindow.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.2)';
        });
        
        codeWindow.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '';
        });
    }
}

// Utility function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Performance optimization: Throttle scroll events
function throttle(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Use throttled scroll for better performance
const throttledScroll = throttle(function() {
    // Any scroll-based animations that need throttling
}, 16); // ~60fps

window.addEventListener('scroll', throttledScroll);

// Loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger any load-specific animations
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }
});

// Keyboard navigation accessibility
document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger?.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu?.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    }
});

// Console welcome message for developers
console.log(`
🚀 Welcome to Youssef's Frontend Portfolio!

This portfolio is built with:
• Vanilla HTML, CSS, and JavaScript
• AOS (Animate On Scroll) library
• Modern CSS features (Grid, Flexbox, Custom Properties)
• Responsive design principles
• Accessibility best practices

Feel free to explore the code and get in touch!
GitHub: https://github.com/youssef-dev
`);

// Language Switcher
function initLanguageSwitcher() {
    const langBtns = document.querySelectorAll('.lang-btn');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            
            // Update active state
            langBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Apply language
            applyLanguage(lang);
            
            // Save preference
            localStorage.setItem('preferred-lang', lang);
            currentLang = lang;
        });
    });
}

function applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations[lang], key);
        
        if (translation) {
            // Preserve HTML tags like <strong>
            if (el.innerHTML.includes('<strong>')) {
                el.innerHTML = translation;
            } else {
                el.textContent = translation;
            }
        }
    });
    
    // Update typing animation texts
    updateTypingTexts(lang);
    
    // Apply RTL for Arabic
    if (lang === 'ar') {
        document.body.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.body.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', lang);
    }
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}

function updateTypingTexts(lang) {
    const typingTexts = {
        en: [
            'Business Information Systems Student',
            'Web Developer (PHP · JS)',
            'Data & Analytics Enthusiast',
            'Financial Officer @ Joker ESEN'
        ],
        fr: [
            "Étudiant en Systèmes d'Information",
            'Développeur Web (PHP · JS)',
            'Passionné de Données & Analytics',
            'Responsable Financier @ Joker ESEN'
        ]
    };
    
    // Store texts for typing animation
    window.currentTypingTexts = typingTexts[lang];
}

// Theme Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const isLight = document.body.classList.toggle('light-theme');
            const icon = this.querySelector('i');
            
            if (isLight) {
                icon.className = 'fas fa-sun';
                localStorage.setItem('preferred-theme', 'light');
                currentTheme = 'light';
            } else {
                icon.className = 'fas fa-moon';
                localStorage.setItem('preferred-theme', 'dark');
                currentTheme = 'dark';
            }
        });
    }
}

// Project Modal Functionality
const projectData = {
    inventory: {
        title: 'Business Inventory System',
        status: 'Completed',
        description: 'A comprehensive full-stack inventory management system built with PHP and MySQL. This application streamlines business operations with an intuitive product catalog, real-time stock tracking, role-based access control for different user permissions, and detailed sales reporting. Designed specifically for small to medium-sized businesses to efficiently manage their inventory workflow and gain insights into their stock levels and sales patterns.',
        features: [
            'Real-time product catalog with search and filtering',
            'Automated stock level tracking and low-stock alerts',
            'Role-based access control (Admin, Manager, Staff)',
            'Comprehensive sales reporting and analytics',
            'Invoice generation and order management',
            'Multi-user support with activity logging',
            'Responsive design for mobile and tablet access'
        ],
        technologies: [
            { icon: 'fab fa-php', name: 'PHP' },
            { icon: 'fas fa-database', name: 'MySQL' },
            { icon: 'fab fa-js', name: 'JavaScript' },
            { icon: 'fab fa-bootstrap', name: 'Bootstrap' },
            { icon: 'fas fa-server', name: 'Apache' }
        ],
        youtubeId: 'NDiumteygb8', // YouTube video ID for demo
        liveLink: 'https://inventory-demo.example.com',
        githubLink: 'https://github.com/youssef-dev/inventory-system'
    },
    invoicing: {
        title: 'Client Invoicing Portal',
        status: 'Completed',
        description: 'A secure and professional invoicing system designed for freelancers and small businesses. Features automatic PDF invoice generation, personalized client dashboards for viewing invoice history, payment status tracking, and seamless integration capabilities with popular payment gateways. The system maintains complete financial records and provides both clients and administrators with real-time payment status updates.',
        features: [
            'Automated PDF invoice generation with TCPDF',
            'Secure client login and personalized dashboards',
            'Real-time payment status tracking',
            'Email notifications for invoices and payments',
            'Payment gateway integration (Stripe/PayPal ready)',
            'Invoice history and financial reports',
            'Recurring invoice scheduling',
            'Client and project management'
        ],
        technologies: [
            { icon: 'fab fa-php', name: 'PHP' },
            { icon: 'fas fa-database', name: 'MySQL' },
            { icon: 'fas fa-file-pdf', name: 'TCPDF' },
            { icon: 'fab fa-js', name: 'jQuery' },
            { icon: 'fas fa-lock', name: 'Security' }
        ],
        video: 'assets/videos/invoicing-demo.mp4',
        liveLink: 'https://invoicing-demo.example.com',
        githubLink: 'https://github.com/youssef-dev/invoicing-portal'
    },
    analytics: {
        title: 'Sales Analytics Dashboard',
        status: 'Completed',
        description: 'An interactive business intelligence dashboard that transforms raw sales data into actionable insights. Built with Chart.js and Power BI integration, this system performs ETL operations on CSV and SQL data sources, presents beautiful visualizations with interactive charts and graphs, and enables data export for further analysis. Perfect for business analysts and managers who need to make data-driven decisions.',
        features: [
            'Interactive charts and graphs with Chart.js',
            'Real-time data visualization and updates',
            'Advanced filtering by date, product, region',
            'ETL pipeline for CSV and SQL data sources',
            'Power BI integration for advanced analytics',
            'Export reports in PDF, Excel, and CSV formats',
            'Customizable KPI dashboards',
            'Trend analysis and forecasting'
        ],
        technologies: [
            { icon: 'fab fa-php', name: 'PHP' },
            { icon: 'fas fa-database', name: 'MySQL' },
            { icon: 'fas fa-chart-line', name: 'Chart.js' },
            { icon: 'fas fa-chart-pie', name: 'Power BI' },
            { icon: 'fab fa-js', name: 'JavaScript' }
        ],
        video: 'assets/videos/analytics-demo.mp4',
        liveLink: 'https://analytics-demo.example.com',
        githubLink: 'https://github.com/youssef-dev/sales-analytics'
    }
};

function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const modalOverlay = modal.querySelector('.modal-overlay');
    const modalClose = modal.querySelector('.modal-close');
    const viewDetailsBtns = document.querySelectorAll('.view-details-btn');
    
    // Open modal
    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.dataset.project;
            openModal(projectId);
        });
    });
    
    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Clear video container to stop playback (important for YouTube iframes)
        const videoContainer = document.getElementById('modalVideoContainer');
        if (videoContainer) {
            videoContainer.innerHTML = '';
        }
    }
    
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    function openModal(projectId) {
        const project = projectData[projectId];
        if (!project) return;
        
        // Populate modal content
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalStatus').innerHTML = `<i class="fas fa-check-circle"></i> ${project.status}`;
        document.getElementById('modalDescription').textContent = project.description;
        
        // Set video or YouTube iframe (LAZY LOADING)
        const videoContainer = document.getElementById('modalVideoContainer');
        if (project.youtubeId) {
            // YouTube iframe with lazy loading
            videoContainer.innerHTML = `
                <iframe 
                    width="100%" 
                    height="400" 
                    src="https://www.youtube.com/embed/${project.youtubeId}" 
                    title="${project.title} Demo" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen
                    loading="lazy">
                </iframe>
            `;
        } else if (project.video) {
            // Local video with lazy loading
            videoContainer.innerHTML = `
                <video controls preload="none" poster="assets/projects/${projectId}.png" style="width: 100%;">
                    <source src="${project.video}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
        } else {
            // Fallback image if no video
            videoContainer.innerHTML = `
                <img src="assets/projects/${projectId}.svg" alt="${project.title}" style="width: 100%; border-radius: 8px;">
            `;
        }
        
        // Populate features
        const featuresList = document.getElementById('modalFeatures');
        featuresList.innerHTML = project.features.map(feature => 
            `<li>${feature}</li>`
        ).join('');
        
        // Populate technologies
        const techStack = document.getElementById('modalTechStack');
        techStack.innerHTML = project.technologies.map(tech => 
            `<span class="tech-badge"><i class="${tech.icon}"></i> ${tech.name}</span>`
        ).join('');
        
        // Set links
        document.getElementById('modalLiveLink').href = project.liveLink;
        document.getElementById('modalGithubLink').href = project.githubLink;
        
        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Initialize modal when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectModal);
} else {
    initProjectModal();
}

// ===== HORIZONTAL SCROLLING INITIALIZED =====
// Portfolio now uses horizontal scrolling (left-right)

document.addEventListener('DOMContentLoaded', function () {
    console.log('✨ Horizontal scrolling initialized');

    const main = document.querySelector('main');
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');
    
    // Header blur effect on horizontal scroll
    const updateHeaderEffect = () => {
        if (!navbar || !main) return;
        
        const scrolled = main.scrollLeft;
        const blurAmount = Math.min(scrolled / 300, 1);
        const bgOpacity = Math.min(0.95, 0.5 + blurAmount * 0.45);
        
        navbar.style.backdropFilter = `blur(${blurAmount * 15}px)`;
        navbar.style.background = `rgba(10, 14, 39, ${bgOpacity})`;
        
        if (scrolled > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    
    // Parallax hero effect (horizontal)
    const updateHeroParallax = () => {
        if (!hero || !main) return;
        
        const scrolled = main.scrollLeft;
        const parallaxAmount = scrolled * 0.4;
        
        hero.style.transform = `translateX(${parallaxAmount * -0.3}px)`;
    };
    
    // Highlight text on scroll
    const highlightOnScroll = () => {
        const highlights = document.querySelectorAll('.highlight-on-scroll');
        
        highlights.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isInView = rect.left < window.innerWidth * 0.7 && rect.right > 0;
            
            if (isInView) {
                element.classList.add('highlighted');
            } else {
                element.classList.remove('highlighted');
            }
        });
    };
    
    // Section visibility tracking (horizontal)
    const updateSectionVisibility = () => {
        document.querySelectorAll('section').forEach(section => {
            const rect = section.getBoundingClientRect();
            const percentInView = Math.min(100, Math.max(0, 
                100 - (Math.abs(rect.left) / window.innerWidth) * 100
            ));
            
            section.setAttribute('data-visibility', percentInView.toFixed(0));
        });
    };
    
    // Scroll progress tracker (horizontal)
    const updateScrollProgress = () => {
        if (!main) return;
        const totalScroll = main.scrollWidth - window.innerWidth;
        const progress = (main.scrollLeft / totalScroll) * 100;
        document.documentElement.style.setProperty('--scroll-progress', progress + '%');
    };
    
    // Main scroll listener - detect horizontal scroll
    main.addEventListener('scroll', () => {
        updateHeaderEffect();
        updateHeroParallax();
        highlightOnScroll();
        updateSectionVisibility();
        updateScrollProgress();
        
        // Update active nav link based on horizontal scroll
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isActive = rect.left > -100 && rect.left < window.innerWidth - 100;
            
            document.querySelectorAll('.nav-link').forEach(link => {
                if (link.getAttribute('href') === '#' + section.id) {
                    link.classList.toggle('active', isActive);
                }
            });
        });
    }, { passive: true });
    
    // ===== CUSTOM EASING FUNCTIONS FOR SMOOTH SCROLLING =====
    const easingFunctions = {
        linear: (t) => t,
        easeIn: (t) => t * t,
        easeOut: (t) => 1 - (1 - t) * (1 - t),
        easeInOut: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
        easeInCubic: (t) => t * t * t,
        easeOutCubic: (t) => 1 - Math.pow(1 - t, 3),
        easeInOutCubic: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
        easeInQuart: (t) => t * t * t * t,
        easeOutQuart: (t) => 1 - Math.pow(1 - t, 4),
        easeInOutQuart: (t) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2,
        easeInQuint: (t) => t * t * t * t * t,
        easeOutQuint: (t) => 1 - Math.pow(1 - t, 5),
        easeInOutQuint: (t) => t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2,
        easeOutExpo: (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
        easeInExpo: (t) => t === 0 ? 0 : Math.pow(2, 10 * t - 10),
        easeInOutExpo: (t) => t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2,
        easeOutElastic: (t) => {
            const c5 = (2 * Math.PI) / 4.5;
            return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c5) + 1;
        },
        easeOutBounce: (t) => {
            const n1 = 7.5625, d1 = 2.75;
            if (t < 1 / d1) return n1 * t * t;
            if (t < 2 / d1) return n1 * (t -= 1.5 / d1) * t + 0.75;
            if (t < 2.5 / d1) return n1 * (t -= 2.25 / d1) * t + 0.9375;
            return n1 * (t -= 2.625 / d1) * t + 0.984375;
        }
    };
    
    // Smooth scrolling with easing
    let isScrolling = false;
    const smoothScroll = (targetX, duration = 800, easing = 'easeOutCubic') => {
        if (isScrolling) return;
        isScrolling = true;
        
        const startX = main.scrollLeft;
        const distance = targetX - startX;
        const startTime = performance.now();
        const easeFn = easingFunctions[easing] || easingFunctions.easeOutCubic;
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = easeFn(progress);
            
            main.scrollLeft = startX + distance * easeProgress;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                isScrolling = false;
            }
        };
        
        requestAnimationFrame(animate);
    };
    
    // Mouse wheel scroll with easing acceleration
    main.addEventListener('wheel', (e) => {
        if (isScrolling) {
            e.preventDefault();
            return;
        }
        
        e.preventDefault();
        
        // Calculate scroll amount based on delta magnitude (acceleration curve)
        const deltaY = e.deltaY;
        const deltaX = e.deltaX;
        
        // Use easeOut for natural deceleration feel
        const scrollFactor = Math.min(Math.abs(deltaY) / 100, 1);
        const easeMultiplier = easingFunctions.easeOut(scrollFactor);
        const scrollAmount = 300 * easeMultiplier;
        
        // Detect if user is scrolling vertically or horizontally
        if (Math.abs(deltaY) > Math.abs(deltaX)) {
            // Vertical wheel = horizontal scroll with easing
            const direction = deltaY > 0 ? 1 : -1;
            smoothScroll(main.scrollLeft + direction * scrollAmount, 600, 'easeOutCubic');
        } else if (Math.abs(deltaX) > 0) {
            // Horizontal wheel = horizontal scroll with easing
            const direction = deltaX > 0 ? 1 : -1;
            smoothScroll(main.scrollLeft + direction * scrollAmount, 600, 'easeOutCubic');
        }
    }, { passive: false });
    
    // Keyboard arrow keys for horizontal navigation with easing
    window.addEventListener('keydown', (e) => {
        if (!main || isScrolling) return;
        
        const scrollDistance = window.innerWidth * 0.8;
        
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            smoothScroll(main.scrollLeft + scrollDistance, 700, 'easeOutQuart');
        }
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            smoothScroll(main.scrollLeft - scrollDistance, 700, 'easeOutQuart');
        }
    });
    
    // Click nav links for horizontal scroll with easing
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            if (isScrolling) return;
            
            const href = a.getAttribute('href');
            if (!href || href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target && main) {
                const scrollLeft = target.offsetLeft - window.innerWidth / 2 + target.offsetWidth / 2;
                smoothScroll(scrollLeft, 900, 'easeInOutCubic');
            }
        });
    });
    
    // Initial setup
    updateHeaderEffect();
    highlightOnScroll();
    updateSectionVisibility();
    
    console.log('✅ Horizontal scrolling ready — use arrow keys or scroll horizontally');
});