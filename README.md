# Bkahf Exports

Modern, responsive B2B single-page website for **Bkahf Exports** (Bogor, Indonesia), specializing in premium coconut shell briquettes, coconut derivatives, and agricultural commodities for global wholesale and distributor markets.

## Tech Stack

- **React 18** (Vite)
- **Tailwind CSS** (Custom industrial charcoal + warm amber/gold palette)
- **Lucide React** (Modern industrial iconography)

## Getting Started Locally

1. Navigate to the project directory:
   ```bash
   cd bkahf-exports
   ```

2. Install dependencies (already installed if in this workspace):
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build locally:
   ```bash
   npm run preview
   ```

## Deploying to Vercel

### Option 1: Vercel CLI
If you have the Vercel CLI installed:
```bash
npm i -g vercel
vercel
```
Follow the interactive prompts to link and deploy.

### Option 2: Git Repository (Recommended)
1. Push this directory to your GitHub / GitLab account:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for Bkahf Exports static website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Import the repository in the Vercel dashboard.
3. Vercel will automatically detect Vite and use `npm run build` with the `dist` output directory.

## Project Structure

```
bkahf-exports/
├── public/
│   └── favicon.svg           # Industrial logo favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky header with text logo and mobile drawer
│   │   ├── Hero.jsx          # Hero section with cargo/agricultural background overlay
│   │   ├── About.jsx         # About Bkahf Exports and location overview
│   │   ├── Products.jsx      # Product cards (Briquettes, Derivatives, Custom OEM)
│   │   ├── WhyChooseUs.jsx   # Direct from source, QC, and logistics pillars
│   │   ├── Contact.jsx       # Interactive inquiry form & contact details
│   │   └── Footer.jsx        # Footer with navigation and copyright
│   ├── App.jsx               # Main application layout & floating WhatsApp action
│   ├── index.css             # Tailwind directives & custom scrollbars
│   └── main.jsx              # Application entry point
├── index.html                # HTML template with metadata and Inter font
├── package.json              # Project dependencies and build scripts
├── tailwind.config.js        # Industrial charcoal and amber/gold theme configuration
├── vercel.json               # Vercel deployment configuration
└── vite.config.js            # Vite bundler configuration
```
