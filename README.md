# Hornet Outdoors & Tactical

A modern e-commerce website for outdoor and tactical gear, built with React and Vite.

## Features

- Modern, responsive design with dark theme and tactical aesthetics
- Multi-page navigation with React Router
- Product category browsing
- Contact form
- Mobile-friendly interface
- Optimized for GitHub Pages deployment

## Tech Stack

- React 19
- Vite 7
- React Router 6
- CSS Variables for theming
- GitHub Actions for CI/CD

## Development

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/hornet-outdoors-and-tactical.git
cd hornet-outdoors-and-tactical

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

This will start the development server at `http://localhost:5173/hornet-outdoors-and-tactical/`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch, thanks to the GitHub Actions workflow in `.github/workflows/deploy.yml`.

## Project Structure

```
/
├── public/              # Static files
│   └── 404.html         # GitHub Pages SPA redirect
├── src/
│   ├── components/      # Reusable UI components
│   ├── layouts/         # Page layout components
│   ├── pages/           # Page components
│   ├── App.jsx          # Main application with routes
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
└── package.json         # Project dependencies and scripts
```

## License

All rights reserved  Hornet Outdoors & Tactical