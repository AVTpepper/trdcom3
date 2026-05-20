# Kommærsj – TRD Commercial Hub

A sophisticated, multi-page business website for Kommærsj, a commercial consultancy firm in Trondheim. Features premium design inspired by luxury brands, responsive mobile experience, integrated email functionality, and comprehensive service showcase.

---

## Purpose

Kommærsj is a commercial consulting firm dedicated to unlocking commercial potential in Norwegian businesses. This website serves as the primary digital presence to:

- **Showcase Services**: Present four core offerings (Kommærsj Development, 1-to-1 Mentoring, TRD Commercial Hub, Kommærsj for Hire)
- **Build Credibility**: Display client testimonials, team expertise, and company mission
- **Generate Leads**: Capture client inquiries through an integrated contact form
- **Establish Brand**: Communicate premium positioning through luxury design language
- **Improve Accessibility**: Provide information about services, team, and contact methods across all device types

---

## Planning (User Stories)

### Client Personas & Stories

**1. Potential Client (Business Owner)**
- *Story*: "As a business owner looking to improve commercial performance, I want to quickly understand Kommærsj's services and see testimonials so I can decide if they're right for my company."
- *Acceptance Criteria*: 
  - Solutions page clearly outlines 4 services
  - Reviews page displays authentic client testimonials
  - Contact form is easily accessible from every page

**2. Curious Business Professional**
- *Story*: "As a professional interested in mentoring, I want to learn about 1-to-1 mentoring programs and see who the coaches are."
- *Acceptance Criteria*:
  - Dedicated mentoring page with program details
  - Team member bios with expertise tags
  - Clear CTA to inquire about programs

**3. Mobile User (On-the-go)**
- *Story*: "As a mobile user, I want to quickly find contact information and access the website smoothly without confusing hover effects."
- *Acceptance Criteria*:
  - All pages fully responsive
  - Contact info accessible in footer and contact page
  - No hover-based interactions that break on touch devices

**4. Social Media Follower**
- *Story*: "As someone interested in the company, I want to find their social media profiles easily."
- *Acceptance Criteria*:
  - LinkedIn and Instagram links in footer on all pages
  - Links point to actual company accounts

---

## User Experience Design

### Information Architecture

```
Home (Index)
├── Hero with video background
├── Services overview
├── About section with stats
├── Testimonials carousel
└── CTA to contact

Solutions
├── Hero section
├── 4 detailed service pages
└── CTA section

Reviews
├── Horizontal scrolling testimonials
└── Social proof stats

Contact
├── Contact form (EmailJS integration)
├── Contact details (email, phone, location)
└── Social links

About (Om Oss)
├── Company mission & vision
├── Team members with expertise
├── Company values
└── CTA section

Service Details
├── Kommærsj Development
├── 1-to-1 Mentoring
├── TRD Commercial Hub
└── Kommærsj for Hire
```

### Design Principles

- **Luxury Brand Language**: Gold accents (#d4af37), black backgrounds, premium typography
- **Consistency**: Unified color scheme, typography, spacing across all pages
- **Accessibility**: Proper contrast, semantic HTML, ARIA labels where needed
- **Mobile-First**: Touch-friendly interactions, hidden hover effects on mobile
- **Performance**: Optimized images, efficient CSS, conditional video loading

### Key UX Features

1. **Logo Intro Animation**: 3.5-second branding animation on first visit
2. **Smooth Scrolling**: Anchor links use smooth scroll behavior
3. **Hover Effects (Desktop Only)**: Cards lift, gold accents appear, overlays slide
4. **Mobile Menu**: Responsive hamburger with overlay
5. **Back-to-Top Button**: Appears after scrolling
6. **Carousel Controls**: Manual navigation + auto-scroll for testimonials
7. **Form Validation**: Real-time feedback on contact form inputs

---

## Features

### Core Features

**1. Multi-Page Website**
- 9 HTML pages covering all business needs
- Consistent navigation across all pages
- Mobile-responsive menu system

**2. Services Showcase**
- 4 detailed service pages with hero sections
- Feature cards with hover effects on desktop
- CTA buttons for inquiries

**3. Team Showcase**
- Team member bios on "About" page
- Profile images with hover effects
- Expertise tags for each team member

**4. Testimonials/Reviews**
- Horizontal scrolling carousel on Reviews page
- Large testimonial cards with ratings
- Auto-scroll with manual controls

**5. Contact System**
- EmailJS-powered contact form
- Sends inquiries to: jonas.lounissi@gmail.com
- Real-time form validation
- Success/error notifications

**6. Social Media Integration**
- LinkedIn: https://www.linkedin.com/company/trdcom/
- Instagram: https://www.instagram.com/trdcommercialhub/
- Social links on all pages (footer)

**7. Favicon**
- Custom company favicon (K logo)
- Displays in browser tabs and bookmarks

**8. Mobile Optimization**
- Fully responsive breakpoints (mobile, tablet, desktop)
- Touch-friendly interface
- Video background hidden on mobile (performance)
- Hover effects disabled on mobile (prevents UX confusion)

---

## Testing

### Manual Testing Performed

**Desktop Testing**
- ✅ All hover effects working on service cards, buttons, contact items
- ✅ Video background loads and autoplays
- ✅ Contact form submits successfully via EmailJS
- ✅ Testimonial carousel scrolls and auto-loops
- ✅ Navigation links smooth scroll to sections
- ✅ All pages responsive at 1920x1080, 1440x900

**Mobile Testing (Android Samsung)**
- ✅ Play button no longer appears on video (video hidden on mobile)
- ✅ All content readable without zoom
- ✅ Touch menu opens/closes smoothly
- ✅ No hover effect confusion on cards
- ✅ Contact form accessible and submittable
- ✅ Images load properly

**Mobile Testing (iOS iPhone)**
- ✅ Video behavior consistent with Android
- ✅ Touch interactions work smoothly
- ✅ Responsive layout maintains design integrity

**Form Testing**
- ✅ Contact form validates required fields
- ✅ Email sends successfully
- ✅ Notification appears on submit
- ✅ Form resets after submission

**Cross-Browser**
- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari (iOS)
- ✅ Chrome (Android)

### Known Issues
- None currently reported

---

## Technologies Used

### Frontend Stack

**HTML**
- Semantic HTML5 structure
- Accessibility features (ARIA labels, alt text)
- Meta tags for SEO and viewport

**CSS**
- CSS3 Grid and Flexbox layouts
- CSS Variables for theming
- Media queries for responsive design
- CSS animations and transitions
- Gradient backgrounds
- Custom scrollbar styling

**JavaScript (Vanilla)**
- DOM manipulation
- Event listeners (scroll, click, form submit)
- Session storage for intro animation
- Intersection Observer for scroll animations
- EmailJS integration for form handling

### External Libraries & Services

**EmailJS**
- Version: 3.11.0
- Purpose: Email form submissions
- Service ID: `gmail`
- Template ID: `rosie`
- Public Key: `SP5IayKp_7eOD2lfU`

**Google Fonts**
- Cinzel (headings)
- Nunito Sans (body text)

**Font Awesome** (If used)
- Social media icons

### File Structure

```
TRDCOM/
├── index.html
├── contact.html
├── solutions.html
├── reviews.html
├── om-oss.html
├── kommaersj-utvikling.html
├── kommaersj-for-hire.html
├── mentoring.html
├── trd-commercial-hub.html
├── README.md
├── CNAME (GitHub Pages)
├── assets/
│   ├── css/
│   │   ├── main.css (2568 lines)
│   │   └── responsive.css
│   ├── js/
│   │   └── main.js (424 lines)
│   ├── images/
│   │   ├── content/
│   │   ├── logos/
│   │   │   ├── favicon-kommersj.png
│   │   │   └── transparent-header-logo.png
│   │   └── team/
│   └── videos/
│       ├── hero-background.mp4
│       └── hero-background.webm
└── used-classes.txt
```

### CSS Architecture

- **CSS Variables**: Centralized theming with --main-gold, --ferrari-black, etc.
- **BEM-inspired**: Clear class naming conventions
- **Responsive**: Mobile-first approach with desktop enhancements
- **Animations**: Keyframes for smooth transitions and effects

### JavaScript Organization

- **Modular Functions**: Each feature (navigation, forms, animations) has dedicated functions
- **Event Delegation**: Efficient event listener usage
- **Conditional Logic**: Media query checks for mobile-specific behavior

---

## Deployment

### Current Deployment

**Platform**: GitHub Pages  
**Domain**: Custom domain via CNAME file  
**Repository**: Private/public Git repository

### Deployment Steps

1. **Push to Repository**
   ```powershell
   git add .
   git commit -m "Update: [description]"
   git push origin master
   ```

2. **GitHub Pages Activation**
   - Ensure CNAME file is in root with custom domain
   - GitHub Actions auto-deploys on push to master

3. **Domain Configuration**
   - DNS records point to GitHub Pages servers
   - CNAME file ensures routing to custom domain

4. **Deployment Verification**
   - Visit deployed URL
   - Verify all pages load correctly
   - Test contact form email delivery
   - Check mobile responsiveness

### Environment Variables

- EmailJS credentials stored in `main.js` (public key is safe to expose)
- Contact email: `jonas.lounissi@gmail.com` (hardcoded in form)

### Performance Considerations

- Video background hidden on mobile (reduces bandwidth)
- CSS and JS minified in production
- Images optimized for web
- Favicon cached by browsers

---

## How AI is Used

### AI Tools in Development

**GitHub Copilot**
- Code generation for JavaScript functions
- CSS utility classes and responsive breakpoints
- HTML boilerplate and semantic structure suggestions
- Git commit message suggestions

**Design & Planning**
- Conceptualizing luxury brand design language
- UX flow planning and user story development
- Responsive design breakpoint planning
- Accessibility guidelines research

### AI Assistance Provided

1. **Code Generation**
   - Form handling and validation logic
   - Scroll animation triggers
   - Mobile menu functionality

2. **Optimization**
   - CSS refactoring for performance
   - JavaScript efficiency improvements
   - Responsive design refinements

3. **Problem Solving**
   - Debugging mobile video playback issues
   - EmailJS integration troubleshooting
   - Hover effect conflicts on touch devices

4. **Documentation**
   - README file structure and content
   - Code comments and explanations
   - User story formatting

### Manual Work

- **Design Direction**: All brand decisions, color schemes, and luxury aesthetic
- **Content Creation**: Service descriptions, team bios, testimonials
- **Testing**: Manual QA across devices and browsers
- **Customization**: Project-specific configurations and tweaks

---

## Quick Start

### Local Development

```powershell
# Clone repository
git clone [repo-url]
cd TRDCOM

# Start local server
python -m http.server 8000

# Open browser
http://localhost:8000
```

### Update Content

1. Edit HTML files directly for page content
2. Modify `assets/css/main.css` for styling
3. Update `assets/js/main.js` for functionality
4. Test locally before pushing

### Update EmailJS Credentials

If changes needed, edit in `assets/js/main.js` line ~150:
```javascript
emailjs.send(
    'gmail',              // Service ID
    'rosie',             // Template ID
    { ... }              // Form data
);
```

---

## License

© 2025 Kommærsj – TRD Commercial Hub. All rights reserved.

---

**Last Updated**: February 16, 2026  
**Status**: Production Ready
