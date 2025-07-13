# Harvest Moon - Autumn Wedding Template

A cozy, seasonal wedding website template featuring rustic charm, warm autumn colors, and romantic fall vibes. Perfect for couples planning an autumn wedding celebration.

## Features

### 🍂 Design & Aesthetics
- **Autumn Color Palette**: Burnt orange, mustard, maple red, cream, rustic brown, sage
- **Typography**: Vintage serif with handwritten accents + clean sans-serif body
- **Animations**: Falling leaves, moonrise fade-in, soft parallax scrolling
- **Theme Toggle**: "Golden Hour" / "Bonfire Night" (light/dark mode)

### 💕 Core Pages
- **Home**: Hero section with countdown timer and autumn field backdrop
- **Our Story**: Love timeline with seasonal quotes and journal entries
- **Details**: Wedding information styled like a vintage farm invite
- **Gallery**: Full-width warm-tone gallery with filter toggles
- **RSVP**: "Will you join our harvest?" with pie flavor selector
- **Registry**: "Cozy Wishlist" with icon cards and honeymoon fund
- **Guestbook**: "Leave a Blessing on the Wind" with message collection

### 🛠 Technical Features
- **React 18** with modern hooks and context
- **Tailwind CSS** for responsive, utility-first styling
- **Framer Motion** for smooth animations and transitions
- **React Router** for seamless navigation
- **Supabase** integration for data management
- **Responsive Design** - mobile-first approach
- **Dark/Light Mode** with persistent preferences

### 🎨 Special Effects
- Falling leaves animation
- Glass morphism effects
- Parallax scrolling backgrounds
- Hover animations and micro-interactions
- Sparkle effects on form submissions
- Pressed flower textures

## Quick Start

1. **Clone and Install**
   ```bash
   git clone [repository-url]
   cd harvest-moon-wedding
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env
   # Edit .env with your Supabase credentials
   ```

3. **Supabase Database Setup**
   Create these tables in your Supabase project:

   ```sql
   -- RSVPs table
   CREATE TABLE rsvps (
     id SERIAL PRIMARY KEY,
     name TEXT NOT NULL,
     email TEXT NOT NULL,
     phone TEXT,
     attending TEXT NOT NULL,
     plus_one TEXT,
     plus_one_name TEXT,
     pie_flavor TEXT,
     dietary_restrictions TEXT,
     message TEXT,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Guestbook entries table
   CREATE TABLE guestbook_entries (
     id SERIAL PRIMARY KEY,
     name TEXT NOT NULL,
     message TEXT NOT NULL,
     location TEXT,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

4. **Start Development**
   ```bash
   npm run dev
   ```

## Customization

### 🎨 Colors & Branding
Edit `tailwind.config.js` to customize the harvest color palette:
```javascript
colors: {
  harvest: {
    orange: '#D2691E',
    mustard: '#FFDB58',
    maple: '#B22222',
    cream: '#F5F5DC',
    brown: '#8B4513',
    sage: '#87A96B'
  }
}
```

### 💑 Wedding Information
Update wedding details in `src/contexts/WeddingContext.jsx`:
```javascript
const [weddingData, setWeddingData] = useState({
  couple: {
    partner1: 'Your Name',
    partner2: 'Partner Name',
    story: 'Your love story...'
  },
  ceremony: {
    date: '2024-10-15',
    time: '4:00 PM',
    venue: 'Your Venue',
    address: 'Your Address'
  }
});
```

### 🖼 Images
Replace stock images with your own photos:
- Update image URLs in component files
- Use high-quality images (1920x1080 recommended)
- Optimize images for web performance

## Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set up environment variables in Netlify dashboard

### Vercel
1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Traditional Hosting
1. Run `npm run build`
2. Upload the `dist` folder to your web server
3. Configure your server to serve the SPA correctly

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Lazy loading for images
- Code splitting for optimal bundle size
- Optimized animations with Framer Motion
- Responsive images with proper sizing
- Efficient CSS with Tailwind's purge

## License

This template is created by **Mrake Agency** for couples planning their autumn wedding celebration. 

---

**Harvest Moon** – An Autumn Wedding Template by Mrake Agency

*Celebrate love with the warmth of autumn leaves and the magic of golden hour light.*