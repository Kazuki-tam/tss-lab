# TSS-Lab

A type-safe full-stack starter template built with **TanStack Start** —
integrating TanStack Router, tRPC, TanStack Query, and TanStack Form.

## Tech Stack

| Category                  | Technology               |
| ------------------------- | ------------------------ |
| **Framework**             | TanStack Start           |
| **Routing**               | TanStack Router          |
| **API Layer**             | tRPC                     |
| **Server State**          | TanStack Query           |
| **Form Management**       | TanStack Form            |
| **Validation**            | Zod                      |
| **Runtime**               | React                    |
| **Styling**               | Tailwind CSS             |
| **UI Components**         | shadcn/ui + Radix UI     |
| **Build Tool**            | Vite                     |
| **Package Manager**       | Bun                      |
| **Linting/Formatting**    | Biome                    |
| **Testing**               | Vitest + Testing Library |
| **Environment Variables** | T3Env                    |

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed

### Installation

```bash
bun install
```

### Development

```bash
bun run dev
```

The app will be available at `http://localhost:3000`.

### Build for Production

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

## Project Structure

```
src/
├── config/              # Site configuration
│   └── site.ts          # Site metadata (name, title, description, url)
├── routes/              # TanStack Router file-based routes
│   ├── __root.tsx       # Root layout component
│   ├── index.tsx        # Home page
│   └── api.trpc.$.tsx   # tRPC API handler
├── components/          # Shared UI components
│   └── ui/              # shadcn/ui components
├── integrations/        # Third-party integrations
│   ├── tanstack-query/  # TanStack Query setup
│   └── trpc/            # tRPC client and router
├── lib/                 # Utility functions
├── router.tsx           # Router configuration
├── env.ts               # Environment variables (T3Env)
└── styles.css           # Global styles
```

## Available Scripts

| Script            | Description                           |
| ----------------- | ------------------------------------- |
| `bun run dev`     | Start development server on port 3000 |
| `bun run build`   | Build for production                  |
| `bun run preview` | Preview production build              |
| `bun run test`    | Run tests with Vitest                 |
| `bun run lint`    | Lint code with Biome                  |
| `bun run format`  | Format code with Biome                |
| `bun run check`   | Run Biome check                       |

## Key Features

### File-based Routing

Routes are managed as files in `src/routes/`. TanStack Router automatically
generates route definitions. See
[TanStack Router docs](https://tanstack.com/router/latest/docs/framework/react/guide/file-based-routing)
for details.

### tRPC Integration

Type-safe API endpoints are defined in `src/integrations/trpc/router.ts`. The
tRPC client is available via `src/integrations/trpc/react.ts`. See
[tRPC docs](https://trpc.io/docs) for usage.

### TanStack Query

Pre-configured with SSR support for server state management. See
[TanStack Query docs](https://tanstack.com/query/latest/docs/framework/react/overview)
for usage.

### TanStack Form

Type-safe form handling with Zod validation support. See
[TanStack Form docs](https://tanstack.com/form/latest/docs/overview) for usage.

### shadcn/ui Components

Add components using the shadcn CLI:

```bash
bunx --bun shadcn@latest add button
```

Components are added to `src/components/ui/`.

### Site Configuration

Site metadata (name, title, description, url) is centralized in
`src/config/site.ts` for consistent use across the application.

### Environment Variables

Type-safe environment variables using T3Env. Define variables in `src/env.ts`.

## Testing

```bash
bun run test
```

## Linting & Formatting

This project uses [Biome](https://biomejs.dev/) for linting and formatting:

```bash
bun run lint     # Lint code
bun run format   # Format code
bun run check    # Run all checks
```

## Learn More

- [TanStack Start Documentation](https://tanstack.com/start)
- [TanStack Router Documentation](https://tanstack.com/router)
- [TanStack Query Documentation](https://tanstack.com/query)
- [TanStack Form Documentation](https://tanstack.com/form)
- [tRPC Documentation](https://trpc.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
