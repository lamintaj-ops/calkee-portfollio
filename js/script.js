// ===========================
// Mobile Navigation Toggle
// ===========================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===========================
// Smooth Scroll for Anchor Links
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Only prevent default for valid section links
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Intersection Observer for Animations
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards and elements for animation
document.querySelectorAll('.project-card, .highlight-card, .skill-item, .contact-item').forEach(el => {
    observer.observe(el);
});

// ===========================
// Contact Form Handler
// ===========================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Basic validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        // Check email format
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email', 'error');
            return;
        }

        // Create mailto link
        const mailtoText = `mailto:your.email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

        // Show success message
        showNotification('Message prepared! Opening email client...', 'success');

        // Reset form
        contactForm.reset();

        // Open email client after short delay
        setTimeout(() => {
            window.location.href = mailtoText;
        }, 500);
    });
}

// ===========================
// Utility Functions
// ===========================

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? '#ff6b6b' : type === 'success' ? '#06a342' : '#4ecdc4'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInFromRight 0.3s ease;
        font-weight: 500;
    `;

    document.body.appendChild(notification);

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInFromRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOutToRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    if (!document.querySelector('style[data-notification-style]')) {
        style.setAttribute('data-notification-style', 'true');
        document.head.appendChild(style);
    }

    // Remove notification after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutToRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// ===========================
// Scroll Animations for Elements
// ===========================

const scrollElements = document.querySelectorAll('.about-text, .project-details, .section-subtitle');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElements = () => {
    scrollElements.forEach((element) => {
        if (elementInView(element, 1.25)) {
            element.classList.add('fade-in');
        }
    });
};

window.addEventListener('scroll', displayScrollElements);
displayScrollElements();

// ===========================
// Page Load Performance
// ===========================
// ===========================
// Carousel Slide for Featured Project
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('carouselTrack');
    const slides = Array.from(track.children);
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    let currentIndex = 0;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * slides[0].offsetWidth}px)`;
        slides.forEach((slide, idx) => {
            slide.setAttribute('aria-hidden', idx !== currentIndex);
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });

    updateCarousel();
});

// Lazy loading for images (if any)
if ('IntersectionObserver' in window) {
    const imagesToLoad = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    imagesToLoad.forEach(img => imageObserver.observe(img));
}

// ===========================
// Add visible state stylesheet
// ===========================

const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .project-card,
    .highlight-card,
    .skill-item,
    .contact-item {
        opacity: 0;
        animation: slideInUp 0.6s ease-in-out forwards;
    }

    .project-card.visible,
    .highlight-card.visible,
    .skill-item.visible,
    .contact-item.visible {
        opacity: 1;
    }

    .fade-in {
        animation: fadeIn 0.6s ease-in-out;
    }

    .about-text,
    .project-details,
    .section-subtitle {
        opacity: 0;
        animation: slideInUp 0.8s ease-in-out forwards;
    }

    .about-text.fade-in,
    .project-details.fade-in,
    .section-subtitle.fade-in {
        animation: fadeIn 0.8s ease-in-out forwards;
    }

    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

document.head.appendChild(styleSheet);

// ===========================
// Smooth Page Load
// ===========================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Portfolio page loaded successfully!');
    });
} else {
    console.log('Portfolio page loaded successfully!');
}

// ===========================
// Active Navigation Link Tracking
// ===========================

const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

const track = document.getElementById('carouselTrack');
const slides = Array.from(track.children);
const nextButton = document.getElementById('carouselNext');
const prevButton = document.getElementById('carouselPrev');

let currentIndex = 0;

// ฟังก์ชันสำหรับเลื่อนไปที่สไลด์ที่เลือก
const updateSlide = (index) => {
    track.style.transform = `translateX(-${index * 100}%)`;
};

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(currentIndex);
});

// เพิ่มระบบ Touch Swipe (สำหรับปัดบนมือถือ)
let touchStartX = 0;
let touchEndX = 0;

track.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

track.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchStartX - touchEndX > 50) { // ปัดซ้าย
        currentIndex = (currentIndex + 1) % slides.length;
    } else if (touchEndX - touchStartX > 50) { // ปัดขวา
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    }
    updateSlide(currentIndex);
}

// ===========================
// Console Welcome Message
// ===========================

console.log('%cWelcome to Spai\'s Portfolio!', 'color: #06a342; font-size: 20px; font-weight: bold;');
console.log('%cLooking for a talented Flutter developer? Let\'s work together!', 'color: #4ecdc4; font-size: 14px;');
console.log('%cContact: your.email@example.com', 'color: #6c757d; font-size: 12px;');
