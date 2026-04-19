# My Portfolio

Hi, I’m Phann Chanthariroza. This is my personal portfolio built with SvelteKit to showcase my projects, skills, tools, and contact details. It includes a multilingual intro screen, a polished home page, and a simple GitHub Actions CI workflow.

## Features

- SvelteKit + Vite app
- English, Japanese, and Khmer intro copy
- Custom intro screen with animation
- Skills, projects, process, services, education, and contact sections
- Dark and light theme toggle
- Playwright end-to-end test setup
- ESLint, Prettier, and cspell configured
- GitHub Actions CI workflow

## Tech Stack

- SvelteKit
- Vite
- pnpm
- ESLint
- Prettier
- Playwright
- cspell

## Scripts

```bash
pnpm run dev
pnpm run build
pnpm run preview
pnpm run check
pnpm run lint
pnpm run format
pnpm run spell
pnpm run e2e
```

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Start the development server:

```bash
pnpm run dev
```

3. Open the local URL shown in the terminal.

## Project Structure

- `src/routes/+page.svelte` - main portfolio page
- `static/assets/` - images and downloadable files
- `.github/workflows/ci.yml` - GitHub Actions CI workflow

## CI

The repository includes a simple CI workflow that runs on push and pull request. It installs dependencies, runs Svelte checks, and builds the project.

## Contact

If you want to reach me, update the contact details in the portfolio page with your preferred links and email address. You can also replace this section with your real GitHub, email, or social profiles when you’re ready.
