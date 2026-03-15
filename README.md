# Spai's Creative Portfolio

A modern, responsive portfolio website showcasing Flutter development expertise, AI/ML integration, and creative problem-solving. Features the Rabbit Health Monitoring app as the hero project.

## 🌟 Features

- **Modern Design**: Clean, professional layout with green/blue gradient theme
- **Fully Responsive**: Works beautifully on desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth animations, hover effects, and scroll-triggered reveals
- **Performance Optimized**: Fast loading, lightweight CSS/JS, lazy loading support
- **Accessibility**: Semantic HTML, proper contrast ratios, keyboard navigation
- **SEO Ready**: Meta tags, proper heading hierarchy, structured content

## 📋 Pages Included

### Home Page (`index.html`)
- **Hero Section**: Eye-catching introduction with animated gradient background
- **About Section**: Professional bio with achievement highlights
- **Featured Project**: Detailed showcase of Rabbit Health Monitoring app
- **Projects Gallery**: 6 project cards showing diverse work
- **Skills Section**: Tech stack organized by category (Mobile, AI/ML, Backend, Tools)
- **Contact Section**: Contact information and message form

### Case Study Page (`projects/rabbit-app/index.html`)
- Comprehensive project overview
- Problem statement and solution architecture
- Detailed feature breakdown
- Technical implementation highlights
- Challenges and solutions
- Results and impact
- Future enhancements

## 🎨 Design System

### Colors
- **Primary Green**: `#06a342` - Main brand color
- **Secondary Teal**: `#4ecdc4` - Accent color
- **Accent Red**: `#ff6b6b` - Highlights
- **Dark**: `#1a1a1a` - Text and backgrounds
- **Light**: `#f8f9fa` - Light backgrounds

### Typography
- **Headings**: Segoe UI, Bold (700-800)
- **Body**: Segoe UI, Regular (400-500)
- **Responsive sizing** with mobile-first approach

## 🚀 Deployment to GitHub Pages

### Option 1: Using GitHub Pages (Recommended)

1. **Create a GitHub Repository**
   ```bash
   # If using custom domain
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to Repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose branch: `main`
   - Choose folder: `/ (root)`
   - Click Save

3. **Your site will be live at**: `https://yourusername.github.io/portfolio/`

### Option 2: Using GitHub Pages with Custom Domain

1. Follow steps 1-2 above
2. **Add Custom Domain**
   - Go to Settings → Pages
   - Under "Custom domain", enter your domain name
   - Create a `CNAME` file in the repository root with your domain
   - Update DNS records with GitHub's IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

### Option 3: Using `<username>.github.io` for Site Root

1. Create a new repository named `<yourusername>.github.io`
2. Push portfolio files to root:
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io.git
   # Copy portfolio files into this directory
   cd yourusername.github.io
   git add .
   git commit -m "Deploy portfolio"
   git push
   ```
3. Your site will be live at: `https://yourusername.github.io/`

## 🔧 Customization Guide

### Update Personal Information

1. **Contact Email** - Update in:
   - `index.html` line ~350 (Contact Section)
   - `index.html` line ~365 (Footer)
   - `js/script.js` line ~162 (Form handler)

2. **Social Links** - Update in:
   - `index.html` lines ~320-330 (Contact section)
   - Social media profiles (LinkedIn, GitHub, etc.)

3. **Project Links** - Update in:
   - `index.html` line ~240 (Featured project GitHub link)
   - Replace with your actual GitHub username

### Customize Colors

Edit `:root` variables in `css/styles.css`:
```css
:root {
    --primary: #06a342;        /* Change primary color */
    --secondary: #4ecdc4;      /* Change secondary color */
    --accent: #ff6b6b;         /* Change accent color */
    /* ... other variables ... */
}
```

### Add/Remove Projects

In `index.html`, find the "projects-grid" section and add/modify project cards:
```html
<div class="project-card">
    <div class="project-card-image">
        <!-- Project visual -->
    </div>
    <div class="project-card-content">
        <h3>Project Title</h3>
        <p>Project description</p>
        <!-- ... -->
    </div>
</div>
```

### Update Skills

Edit the "skills" section in `index.html` to add/remove technologies:
```html
<div class="skill-item">
    <span class="skill-icon">📱</span>
    <span>Technology Name</span>
</div>
```

## 📁 File Structure

```
portfolio/
├── index.html                    # Main homepage
├── css/
│   └── styles.css               # All styles
├── js/
│   └── script.js                # Interactive features
├── projects/
│   └── rabbit-app/
│       └── index.html           # Rabbit app case study
├── images/                      # (Optional) Project images
└── README.md                    # This file
```

## ⚙️ Features Explained

### Navigation
- Sticky navbar with smooth scroll to sections
- Mobile hamburger menu with smooth animations
- Active link highlighting as you scroll

### Hero Section
- Animated gradient blobs
- Emoji avatar with gradient background
- Dual CTA buttons (View Work / Get In Touch)
- Smooth scroll on button click

### Projects Section
- Responsive grid (3 cols → 2 cols → 1 col)
- Hover effects with lift animation
- Tech tags for each project
- Links to project pages

### Contact Form
- Client-side validation
- Success/error notifications
- Opens user's email client preset with subject/message
- Smooth form interactions

### Animations
- Scroll reveal animations for cards
- Hover effects on interactive elements
- Smooth page transitions
- Blob animation in hero section

## 🎯 Optimization Tips

1. **Image Optimization**
   - Use WebP format with PNG fallback
   - Compress images with TinyPNG or similar
   - Use appropriate sizes for different devices

2. **Performance**
   - CSS and JS are minified
   - Use CSS Grid and Flexbox (better browser support)
   - Lazy load images if needed
   - Test with Lighthouse in DevTools

3. **SEO**
   - Update meta description in `<head>`
   - Add structured data (Schema.org)
   - Create sitemap.xml for larger portfolios
   - Update social media tags for sharing

4. **Accessibility**
   - All images have alt text (generated via emoji)
   - Proper color contrast ratios
   - Keyboard navigation works
   - Form labels associated with inputs

## 🧪 Testing

Before deploying, test:

- [ ] **Responsive Design**: Test on Chrome DevTools (mobile, tablet, desktop)
- [ ] **Cross-browser**: Test on Chrome, Firefox, Safari, Edge
- [ ] **Links**: All internal and external links work
- [ ] **Form**: Contact form validation and email link work
- [ ] **Performance**: Run Lighthouse audit
- [ ] **Mobile**: Test on actual mobile devices
- [ ] **Accessibility**: Check with WAVE extension

## 📝 Tips for Your Portfolio

1. **Keep it Updated**: Regularly update projects and add new work
2. **Tell Stories**: Each project should tell a story (problem → solution → results)
3. **Show Your Personality**: Let your unique perspective shine through
4. **Include Metrics**: "60% faster than X" or "Used by 1000+ users"
5. **Code Highlighting**: Include interesting code snippets or architecture diagrams
6. **Professional Photos**: Consider professional headshots for avatar
7. **Regular Commits**: Show development history on GitHub (helps recruiters)
8. **Blog/Articles**: (Optional) Add blog section for technical articles

## 🔗 Important Links

- [GitHub Pages Documentation](https://pages.github.com/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [SEO Starter Guide](https://developers.google.com/search/docs)

## 📞 Support & Customization

For more advanced customization:
- Change fonts: Search for "Segoe UI" in CSS and replace
- Add dark mode: Create separate CSS variables and add toggle button
- Add animations: Extend keyframe animations in CSS
- Add components: Follow existing HTML patterns

## 📄 License

This portfolio template is free to use and modify. Feel free to make it your own!

---

**Last Updated**: March 14, 2026

**Built with**: HTML5, CSS3, JavaScript (Vanilla)

**Deployed to**: GitHub Pages

Happy coding! 🚀
