# Gravity Team Website

A modern, responsive website for Gravity Team's cryptocurrency market making services, built with React TypeScript frontend and Express TypeScript backend.

## 🚀 Features

- **Modern React Frontend**: Built with TypeScript, Vite, and Tailwind CSS
- **Express Backend**: RESTful API with TypeScript
- **Responsive Design**: Mobile-first design with smooth animations
- **Interactive Components**: Framer Motion animations and scroll-triggered effects
- **Contact Form**: Functional contact form with validation
- **API Integration**: Frontend communicates with backend for dynamic content
- **Glass Morphism UI**: Modern glass-effect styling
- **Dark Theme**: Professional dark theme with gradient accents

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Axios** for API requests
- **React Intersection Observer** for scroll animations

### Backend
- **Express.js** with TypeScript
- **CORS** for cross-origin requests
- **Helmet** for security headers
- **Nodemon** for development hot reload

## 📦 Project Structure

```
gravity-team-website/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── nodemon.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   └── vite.config.ts
├── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gravity-team-website
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install backend dependencies
   cd backend && npm install
   
   # Install frontend dependencies
   cd ../frontend && npm install
   ```

3. **Environment Setup**
   ```bash
   # Copy environment file in backend
   cd backend
   cp .env.example .env
   ```

4. **Start Development Servers**
   ```bash
   # From root directory - starts both frontend and backend
   npm run dev
   
   # Or start individually:
   # Backend (runs on http://localhost:5000)
   npm run dev:backend
   
   # Frontend (runs on http://localhost:3000)
   npm run dev:frontend
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000` to view the website

## 🔧 Available Scripts

### Root Directory
- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build both frontend and backend for production
- `npm start` - Start the production server

### Frontend
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start production server
- `npm run type-check` - Check TypeScript types

## 🌐 API Endpoints

- `GET /health` - Health check endpoint
- `GET /api/team-stats` - Get team statistics
- `GET /api/partners` - Get partners information
- `GET /api/company-info` - Get company information
- `POST /api/contact` - Submit contact form

## 🎨 Sections

1. **Hero Section** - Main landing with animated call-to-action
2. **About Team** - Statistics and team information with data from API
3. **Crypto Market Making** - Service offerings with interactive visuals
4. **Partners** - Partner logos and information
5. **Company Info** - Testimonials and achievements
6. **Join Team** - Recruitment section with benefits
7. **Contact** - Contact form and information
8. **Footer** - Links and additional information

## 🔒 Environment Variables

### Backend (.env)
```bash
PORT=5000
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

## 🚢 Production Deployment

### Build for Production
```bash
npm run build
```

### Deploy Backend
The backend will be compiled to `/backend/dist/` directory. You can deploy this along with the `package.json` to any Node.js hosting service.

### Deploy Frontend
The frontend will be built to `/frontend/dist/` directory. This can be deployed to any static hosting service like Vercel, Netlify, or AWS S3.

### Environment Setup for Production
Make sure to update the environment variables for production:
- Set `NODE_ENV=production`
- Update `FRONTEND_URL` to your production frontend URL
- Update API endpoints in frontend if different

## 🎯 Key Components

- **LoadingSpinner** - Animated loading screen
- **Header** - Navigation with mobile menu
- **Hero** - Animated landing section
- **AboutTeam** - Statistics with API integration
- **CryptoMarketMaking** - Services showcase
- **Partners** - Partner display with API data
- **CompanyInfo** - Company testimonials
- **JoinTeam** - Careers section
- **Contact** - Contact form with validation
- **Footer** - Site footer with links

## 🎨 Styling

The project uses Tailwind CSS with custom configurations:
- Custom color palette with primary blues and purples
- Glass morphism effects
- Custom animations (float, pulse-glow)
- Responsive design breakpoints
- Dark theme optimized

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Responsive grid layouts
- **Desktop**: Full-width layouts with animations
- **Large Screens**: Optimized for 4K displays

## 🔧 Development Tips

1. **Hot Reload**: Both frontend and backend support hot reload during development
2. **Type Safety**: Full TypeScript support with strict type checking
3. **API Proxy**: Vite proxies `/api` requests to the backend during development
4. **Component Structure**: Each component is self-contained with its own animations
5. **Error Handling**: Graceful error handling with fallback data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email contact@gravityteam.io or join our community channels.

---

**Built with ❤️ by the Gravity Team**
