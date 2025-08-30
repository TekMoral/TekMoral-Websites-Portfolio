# TekMoral Website

A modern, professional website for TekMoral - a digital solutions company specializing in AI-ready websites, web applications, and digital transformation services for SMEs, schools, and startups in Lagos, Nigeria.

## 🚀 Features

- **Modern Design**: Dark theme with professional gradients and animations
- **Mobile-First**: Responsive design optimized for all devices
- **Performance Optimized**: Built with Astro for lightning-fast loading
- **SEO Ready**: Comprehensive meta tags, structured data, and sitemap
- **Form Handling**: Netlify Forms integration for contact and booking
- **WhatsApp Integration**: Direct messaging functionality
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠 Tech Stack

- **Framework**: [Astro](https://astro.build/) v5.13.4
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4.1.12
- **Deployment**: [Netlify](https://netlify.com/) with SSR adapter
- **Analytics**: [Plausible](https://plausible.io/)
- **Forms**: Netlify Forms with spam protection

## 📁 Project Structure

```
tekmoral-astro/
├── public/
│   ├── favicon.svg
│   ├── logo.png
│   └── robots.txt
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro          # Homepage
│   │   ├── services.astro       # Services overview
│   │   ├── school-solutions.astro # Education solutions
│   │   ├── work.astro           # Portfolio/case studies
│   │   ├── blog.astro           # Insights & testimonials
│   │   ├── contact.astro        # Contact form
│   │   ├── book-a-call.astro    # WhatsApp booking
│   │   └── 404.astro            # Error page
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── netlify.toml
├── package.json
└── tailwind.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tekmoral-astro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:4321
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

### Netlify Deployment

1. **Connect Repository**: Link your Git repository to Netlify
2. **Build Settings**: 
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Environment Variables**: None required for basic functionality
4. **Deploy**: Automatic deployment on git push

### Manual Deployment

```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 📧 Form Configuration

### Contact Form
- **Handler**: Netlify Forms
- **Spam Protection**: Honeypot field included
- **Notifications**: Configure in Netlify dashboard

### WhatsApp Integration
- **Business Number**: Configured in Layout.astro
- **Fallback Handling**: Multiple options for blocked popups

## 🎨 Customization

### Colors & Branding
- Primary colors defined in Tailwind config
- Logo: Replace `/public/logo.png`
- Favicon: Replace `/public/favicon.svg`

### Content Updates
- **Services**: Edit `src/pages/services.astro`
- **School Solutions**: Edit `src/pages/school-solutions.astro`
- **Contact Info**: Update in `src/layouts/Layout.astro`

### SEO Configuration
- **Site URL**: Update in `astro.config.mjs`
- **Meta Tags**: Each page has custom title/description
- **Structured Data**: Configured in Layout.astro

## 📊 Analytics

- **Plausible Analytics**: Configured for www.tekmoral.com
- **Privacy-Focused**: No cookies, GDPR compliant
- **Lightweight**: Minimal performance impact

## 🔧 Configuration Files

### `astro.config.mjs`
- Site URL configuration
- Netlify adapter setup
- Sitemap generation
- Integration settings

### `netlify.toml`
- Build configuration
- Redirect rules
- Security headers
- Caching policies

### `tailwind.config.js`
- Custom color palette
- Typography settings
- Component utilities

## 🚨 Important Notes

### Before Deployment
- [ ] Update site URL in `astro.config.mjs`
- [ ] Configure Netlify Forms notifications
- [ ] Test WhatsApp integration
- [ ] Verify all links and forms
- [ ] Check mobile responsiveness

### Performance Optimizations
- Images are optimized for web
- CSS is purged and minified
- JavaScript is minimal and efficient
- Caching headers configured

### Security Features
- Content Security Policy headers
- XSS protection enabled
- Referrer policy configured
- Permissions policy set

## 📱 Contact Integration

### WhatsApp Business
- **Number**: +234-816-346-8669
- **Integration**: Direct messaging from website
- **Fallback**: Multiple options for accessibility

### Social Links
- **GitHub**: https://github.com/TekMOral
- **Facebook**: https://www.facebook.com/adewale.gabriel.905580

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   - Check Node.js version (18+ required)
   - Clear node_modules and reinstall
   - Verify all imports are correct

2. **Form Not Working**
   - Ensure Netlify Forms is enabled
   - Check form name attributes
   - Verify honeypot field is present

3. **WhatsApp Not Opening**
   - Check business number format
   - Test on different devices/browsers
   - Verify fallback links work

## 📄 License

This project is proprietary software for TekMoral. All rights reserved.

## 🤝 Support

For technical support or questions:
- **Email**: Contact through website form
- **WhatsApp**: +234-816-346-8669
- **Location**: Lagos, Nigeria

---