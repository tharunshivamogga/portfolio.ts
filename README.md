# Modern Full-Stack Engineer Portfolio

A modern, high-performance developer portfolio built with **React 19**, **Vite 8**, **TypeScript**, and **Tailwind CSS**. Designed specifically for software engineers, full-stack developers, and technical professionals.

---

## 🚀 Features

- **Interactive Developer Terminal**: Fully functional pseudo-terminal with command execution (`help`, `skills`, `projects`, `stats`, `hire`, `clear`).
- **Dark / Light Mode**: Smooth theme switcher with automatic preference persistence in `localStorage`.
- **Dynamic Projects Showcase**: Filter projects by category (*Full-Stack*, *Backend & APIs*, *Frontend / UI*) with live demo links and technical metrics.
- **Skills Matrix**: Categorized tech stack breakdown (Frontend, Backend & Systems, Databases & Storage, DevOps & Cloud).
- **Work History Timeline**: Career progression with measurable impact and tool tags.
- **Interactive Contact Section**: Direct contact form and one-click copy email button with toast notification.
- **Zero-Config GitHub Pages Deployment**: Fully automated GitHub Actions workflow included.

---

## 🛠️ Quick Start

### 1. Run Locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Build for Production
```bash
npm run build
```

---

## ✏️ How to Personalize Your Content

All data is centralized in a single typed configuration file:
👉 **[`src/data/portfolioData.ts`](./src/data/portfolioData.ts)**

Simply open that file to update:
- Your name, role, bio, and location
- Social profile links (GitHub, LinkedIn, Twitter/X, Email)
- Highlight stats (Years of experience, completed projects, etc.)
- Skills and proficiency levels
- Featured projects, live links, and descriptions
- Work experience and career milestones
- Terminal commands & answers

---

## 🌐 How to Keep It Live on GitHub Pages (100% Free)

### Method 1: Automatic Deployment via GitHub Actions (Recommended)

1. Create a new repository on [GitHub](https://github.com/new) (e.g. `portfolio` or `<your-username>.github.io`).
2. In your terminal, link your local repository and push:
   ```bash
   git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/<YOUR-REPO-NAME>.git
   git branch -M main
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** → **Pages** (under Code and automation in the left sidebar).
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. That's it! Every time you `git push`, your portfolio will automatically build and publish live to:
   ```
   https://<YOUR-GITHUB-USERNAME>.github.io/<YOUR-REPO-NAME>/
   ```

---

### Method 2: One-Command CLI Deployment

If you prefer deploying directly via npm:
```bash
npm run deploy
```
*(This builds the project and pushes the `dist` folder to your repo's `gh-pages` branch).*

---

## 🚀 Alternative Free Live Hosting Options

- **Vercel**: Import your GitHub repository on [vercel.com](https://vercel.com) for instant automatic deployments.
- **Netlify**: Connect your GitHub repository on [netlify.com](https://netlify.com) with publish directory set to `dist`.
