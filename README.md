# 4x6Labels - Homepage Redesign

A modern, animation-rich e-commerce landing page built with React, Vite, Tailwind CSS, and Framer Motion. Optimized for static deployment on Vercel.

## 🎨 Features

- **Hero Section** with smooth scroll animations and gradient text effects
- **Smooth Animations** using Framer Motion throughout
- **Responsive Design** with Tailwind CSS v4
- **Reusable Components** for scalability
- **Accessible UI** with Radix UI primitives
- **3D Graphics** with React Three Fiber
- **Type-Safe** with TypeScript
- **Modern Stack** - React 19, Vite 7, Tailwind CSS v4

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run check
```

## 🌐 Deployment on Vercel

### Via Vercel Dashboard

1. Import your GitHub repository in Vercel
2. Configure build settings:
   - **Framework Preset:** Vite
   - **Root Directory:** `/`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Deploy

### Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

The project is configured with `vercel.json` for proper SPA routing.

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout.jsx          # Main layout wrapper
│   ├── Navbar.jsx          # Top navigation with dropdowns
│   ├── Footer.jsx          # Site footer
│   ├── Hero.jsx            # Hero section with parallax
│   ├── MarqueeBanner.jsx   # Infinite scrolling banner
│   ├── TrustedBy.jsx       # Company logos carousel
│   ├── ProductCard.jsx     # Product display card
│   ├── ProductCarousel.jsx # Scrollable product list
│   ├── FeatureCard.jsx     # Feature highlight card
│   ├── LabelTypeCards.jsx  # Label type selection
│   ├── FAQ.jsx             # Accordion FAQ section
│   └── CTASection.jsx      # Call-to-action section
├── pages/
│   └── Home.jsx            # Home page assembly
├── styles/
│   └── index.css           # Global styles
├── App.jsx                 # App root
└── main.jsx                # Entry point
```

## 🎯 Key Components

### Hero Section
- Mouse-tracking parallax effect on 3D label mockup
- Floating validation badges with independent parallax
- Animated entrance with Framer Motion
- Responsive typography scaling from mobile to desktop

### Navigation
- Radix UI Navigation Menu for accessible dropdowns
- Sticky header with utility bar
- Mobile-responsive with hamburger menu
- Search bar and cart integration

### Product Carousel
- Horizontal scroll with snap points
- Hover animations on product cards
- Custom navigation controls
- Lazy loading support

### Feature Cards
- Scroll-triggered staggered animations
- Hover effects with expanding underlines
- Animated background blobs
- Icon animations

### Label Type Cards
- Background color transitions (light to blue)
- Smooth hover state changes
- Content color animations
- Decorative blur effects

### FAQ Section
- Radix UI Accordion for accessibility
- Smooth expand/collapse animations
- Two-column layout with sticky heading
- Plus/minus icon transitions

### CTA Section
- Giant stroke text effect
- Background color transition on hover
- Animated decorative blobs
- Trust indicators with stats

## 🎨 Design System

### Colors
- **Primary**: Blue (blue-400 to blue-600)
- **Neutrals**: Slate (slate-50 to slate-950)
- **Accents**: Green (success), Red (alerts), Teal (gradients)

### Typography
- **Headings**: Montserrat (font-heading)
- **Body**: Inter (font-sans)
- **Scales**: From 9px eyebrows to 10rem hero text

### Animations
- **Entrance**: Fade + slide with Framer Motion
- **Parallax**: Mouse-tracking transforms
- **Hover**: Scale, translate, color transitions
- **Continuous**: CSS keyframe loops (marquee, pulse)

## 🔧 Technologies

- **React 18.3** - UI library
- **Vite 6** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 11** - Animation library
- **Radix UI** - Accessible component primitives
  - Navigation Menu
  - Accordion
- **Lucide React** - Icon library

## 📱 Responsive Breakpoints

- `sm`: 640px - Minor adjustments
- `md`: 768px - Two-column layouts
- `lg`: 1024px - Desktop view, three/four columns
- `xl`: 1280px - Wider search, more spacing

## 🎭 Animation Details

### Hero Parallax
```javascript
// Mouse position normalized to -1 to 1
const labelTransform = {
  x: mousePosition.x * 20,
  y: mousePosition.y * 20,
  rotateY: mousePosition.x * 5,
  rotateX: -mousePosition.y * 5,
}
```

### Marquee Effect
```javascript
animate={{
  x: ['0%', '-50%'],
}}
transition={{
  duration: 30,
  repeat: Infinity,
  ease: 'linear',
}}
```

### Color Transitions
```javascript
animate={{
  backgroundColor: isHovered ? '#2563eb' : '#0f172a'
}}
transition={{ 
  duration: 0.7, 
  ease: 'easeInOut' 
}}
```

## 🚧 Future Enhancements

- [ ] Add shopping cart functionality
- [ ] Implement product search
- [ ] Add user authentication
- [ ] Connect to backend API
- [ ] Add product filtering
- [ ] Implement wishlist feature
- [ ] Add customer reviews section
- [ ] Optimize images with Next.js Image
- [ ] Add analytics integration
- [ ] Implement A/B testing

## 📝 Notes

- No Three.js/WebGL used - all effects are CSS transforms + Framer Motion
- Mobile-first responsive design approach
- Accessibility features with Radix UI
- Performance optimized with lazy loading
- SEO-friendly semantic HTML structure

## 🤝 Development Guidelines

1. **Component Structure**: Keep components small and focused
2. **Animations**: Use Framer Motion for complex animations, CSS for simple transitions
3. **Styling**: Use Tailwind utilities, create custom classes only when necessary
4. **Accessibility**: Always include ARIA labels and keyboard navigation
5. **Performance**: Lazy load images, virtualize long lists, memoize expensive calculations

## 📄 License

MIT

---

Built with ❤️ for the 4x6Labels redesign contest