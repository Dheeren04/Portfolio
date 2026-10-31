# Harshitha A — Personal Portfolio Website

A modern, high-performance, accessible, and editorial portfolio website crafted for **Harshitha A**, Information Science and Engineering student at Nagarjuna College of Engineering and Technology, Bengaluru.

Built with **Vite, React 19, TypeScript, Tailwind CSS, Framer Motion**, and **Lucide Icons**.

---

## ✨ Features

- **Editorial & Minimal Design:** Calm atmosphere, balanced whitespace, Instrument Serif / Fraunces headings, and Inter UI typography with a curated soft indigo accent (`#6366F1`).
- **Full Dark / Light Mode Support:**
  - Automatic system preference detection (`prefers-color-scheme`).
  - Persistent preference stored in `localStorage`.
  - Zero Flash of Unstyled Content (FOUC).
  - Smooth 300ms transition with an animated sun/moon icon morph.
- **Cinematic Opening Screen Animation:**
  - 2.5–3s intro sequence with horizontal accent line draw.
  - Staggered letter-by-letter reveal of **Harshitha A**.
  - Animated progress counter (0–100%) and upward curtain slide.
  - Played once per session (`sessionStorage`), click or Esc to skip, with full `prefers-reduced-motion` compliance.
- **Interactive Sticky Glassmorphic Navbar:**
  - Active section tracking indicator.
  - Quick access to About, Resume, Projects, Certifications, Contact, and Theme Toggle.
  - Animated mobile drawer menu.
  - Thin accent scroll progress bar at the very top.
- **Single-Source Data Architecture (`src/data/content.ts`):**
  - All text, credentials, stats, links, and contact details are centralized in one file. No need to touch component files to update content.
- **Interactive Resume Viewer:**
  - Education timeline and categorized technical skills chips.
  - "View Resume" modal preview with embedded PDF viewer.
  - "Download Resume" direct PDF download.
- **Project Cards:**
  - Responsive 2-column layout with hover lift and soft glow.
  - Tags and conditional GitHub / Live Demo links.
- **Contact Hub:**
  - One-click copy buttons for Email and Phone with live toast feedback.
  - Prominent "Connect on LinkedIn" action button.
  - Validated contact form with mailto fallback and easy hooks for Formspree or EmailJS.
- **SEO & Performance Optimized:**
  - Semantic HTML5, metadata tags, Open Graph, Twitter cards, custom SVG favicon, `robots.txt`, and `sitemap.xml`.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended, tested on Node v24)
- npm (or pnpm / yarn)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Customize & Edit

All personal content is stored in:
📂 **`src/data/content.ts`**

Look for `// EDITABLE:` comments throughout the file:

### 1. Update Profile Information & Social Links
Open `src/data/content.ts` and modify the `personal` object:
```typescript
personal: {
  name: "Harshitha A",
  headline: "Hi, I'm Harshitha.",
  email: "harshitha6569@gmail.com",
  phoneDisplay: "+91 8073516569",
  linkedinUrl: "https://www.linkedin.com/in/harshitha-a-19b110374",
  // EDITABLE: Add your GitHub profile URL below:
  githubUrl: "https://github.com/your-username",
  ...
}
```
*(Note: If `githubUrl` is empty `""`, the GitHub icon automatically hides without breaking layout.)*

### 2. Replace Profile Photo
Place your image in:
📁 `public/assets/profile.png`
*(Or place any image file in `public/assets/` and update `profileImage: "/assets/your-photo.png"` in `src/data/content.ts`).*

### 3. Replace Resume PDF
Place your updated resume file in:
📁 `public/assets/Harshitha_A_Resume.pdf`
*(Or update `resumePdf: "/assets/your-resume.pdf"` in `src/data/content.ts`).*

### 4. Add or Edit Projects
Add objects to the `projects` array in `src/data/content.ts`:
```typescript
{
  id: "new-project",
  title: "Project Name",
  subtitle: "Category / Subtitle",
  description: "Description of what you built and the problem it solved.",
  tags: ["Python", "MySQL", "Algorithms"],
  // EDITABLE: Links (leave empty if not applicable)
  githubUrl: "https://github.com/your-username/project-repo",
  liveUrl: "https://project-demo.com",
  highlights: [
    "Key achievement or architectural detail",
    "Performance metric or algorithm used",
  ],
}
```

### 5. Add or Edit Certifications
Add objects to the `certifications` array in `src/data/content.ts`:
```typescript
{
  id: "certification-id",
  title: "Certification Title",
  issuer: "Issuing Organization",
  date: "Month Year",
  badge: "Issuer Tag",
  description: "Brief overview of topics mastered.",
  credentialUrl: "https://credential-link.com", // EDITABLE: Paste verification link or leave empty
}
```

### 6. Connect Contact Form to Formspree or EmailJS
In `src/sections/ContactSection.tsx`, locate the `handleSubmit` function where you can plug in your Formspree endpoint or EmailJS service.

---

## 🌐 Deployment

### Deploy to Vercel
1. Push this repository to GitHub.
2. Sign in to [Vercel](https://vercel.com).
3. Click **Add New Project** and import your repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **Deploy**.

### Deploy to Netlify
1. Push this repository to GitHub.
2. Sign in to [Netlify](https://netlify.com).
3. Click **Add new site** > **Import an existing project**.
4. Set Build command to: `npm run build`
5. Set Publish directory to: `dist`
6. Click **Deploy Site**.

---

## 📄 License
Created for Harshitha A. Personal portfolio and portfolio template rights reserved.
