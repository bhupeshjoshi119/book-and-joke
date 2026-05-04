# 😂 Jokes & 📚 Books

A React app that fetches and displays random jokes and tech books using the [FreeAPI](https://freeapi.app) public API. Clean dark UI with card-based layout.

---

## ✨ Features

- 🎲 **Random Joke** — fetches a single random joke on every page load
- 🔬 **Science Jokes** — displays 10 science-themed jokes in a responsive grid
- 📖 **Tech Books** — shows top tech books with titles and descriptions
- ⚠️ **Error Boundary** — gracefully handles component-level errors
- 💅 **Dark Theme UI** — modern card layout with hover effects and loading states

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| [React 19](https://react.dev) | UI library |
| [Vite](https://vitejs.dev) | Build tool & dev server |
| [FreeAPI](https://freeapi.app) | Public REST API (jokes + books) |
| CSS Custom Properties | Theming & styling |

---

## 📁 Project Structure

```
src/
├── App.jsx                  # Root component, layout & sections
├── main.jsx                 # Entry point
├── index.css                # Global styles & dark theme
└── components/
    ├── ReactJokes.jsx        # Fetches 10 science jokes
    ├── GetRandomJoke.jsx     # Fetches 1 random joke
    ├── GetBooks.jsx          # Fetches tech books list
    ├── MapContent.jsx        # Renders jokes grid
    ├── MapJoke.jsx           # Renders featured random joke card
    ├── MapBook.jsx           # Renders books grid
    └── ErrorBoundary.jsx     # Catches render errors
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>=18`
- [pnpm](https://pnpm.io) (or npm/yarn)

### Install & Run

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

---

## 🌐 API Endpoints Used

| Data | Endpoint |
|------|----------|
| Random Joke | `GET /api/v1/public/randomjokes/joke/random` |
| Science Jokes (10) | `GET /api/v1/public/randomjokes?limit=10&query=science` |
| Tech Books (10) | `GET /api/v1/public/books?page=1&limit=10&query=tech` |

All endpoints are from [https://api.freeapi.app](https://api.freeapi.app) — no API key required.

---

## 📸 UI Overview

- **Header** — gradient title with tagline
- **Featured Joke** — large card with quote styling and pink accent
- **Jokes Grid** — responsive auto-fill grid, purple hover glow
- **Books Grid** — responsive auto-fill grid, blue hover glow
- **Loading States** — animated spinner while data fetches
- **Error State** — friendly message if something breaks

---

#chaicode project
