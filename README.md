# cv-k9s

A k9s-inspired interactive CV for DevOps/Cloud Engineers. Navigate your career like you navigate Kubernetes clusters.

**Live Demo:** [cv.fullstack.pw](https://cv.fullstack.pw)

```
▗▄▄▖ ▗▄▄▖  ▗▄▖  ▗▄▄▖
▐▌ ▐▌▐▌ ▐▌▐▌ ▐▌▐▌
▐▛▀▘ ▐▛▀▘ ▐▛▀▜▌ ▝▀▚▖
▐▌   ▐▌   ▐▌ ▐▌▗▄▄▞▘
```

## Concept

Your CV presented as a k9s terminal interface:

| k9s Concept | CV Mapping |
|-------------|------------|
| Namespaces | Companies |
| Pods | Projects/Roles |
| Pod Status | Running (current) / Completed (past) |
| Pod Logs | Achievements |
| Nodes | Skills |
| Node Version | Proficiency level |

## Keyboard Navigation

| Key | Action |
|-----|--------|
| `j` / `↓` | Move down |
| `k` / `↑` | Move up |
| `Enter` / `d` | Describe selected pod |
| `l` | View logs (achievements) |
| `:` | Open command bar |
| `?` | Show help |
| `q` | Show contact info |
| `Esc` | Go back |

## Commands

| Command | Description |
|---------|-------------|
| `:pods` | View work experience |
| `:nodes` | View skills |
| `:help` | Show keyboard shortcuts |
| `:contact` | Show contact information |
| `:secret` | ??? |

## Tech Stack

- React 19 + TypeScript
- Tailwind CSS v4
- Vite
- GitHub Pages

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

To use this for your own CV:

1. Fork this repository
2. Edit `src/data/cv.json` with your information:
   - `profile`: Your name, contact info, certifications
   - `namespaces`: Companies you've worked at
   - `pods`: Projects/roles at each company
   - `nodes`: Your skills
   - `secret`: Your hidden message
3. Update colors in `src/index.css` if desired
4. Deploy to GitHub Pages

## Deployment

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages on push to `main`.

To set up:
1. Go to repository Settings > Pages
2. Set Source to "GitHub Actions"
3. (Optional) Add custom domain

## License

MIT
