---
description: Project rule
globs:
alwaysApply: true
---

# TSS-Lab Project Conventions

## Technology Stack

- **Package Manager**: Bun
- **Framework**: TanStack Start 1.132.0 with TanStack Router
- **Language**: TypeScript 5.7.2
- **Runtime**: React 19.2.3, React DOM 19.2.3
- **Routing**: TanStack Router 1.132.0
- **API Layer**: tRPC 11.4.3
- **Server State**: TanStack Query 5.66.5
- **Form Management**: TanStack Form 1.0.0
- **Form Validation**: Zod 4.1.11
- **UI Components**: shadcn/ui with Radix UI
- **Styling**: Tailwind CSS 4.0.6
- **Styling Utilities**: class-variance-authority 0.7.1, clsx 2.1.1,
  tailwind-merge 3.0.2
- **Icons**: lucide-react 0.544.0
- **Build Tool**: Vite 7.3.0
- **Linting & Formatting**: Biome 2.2.4
- **Testing**: Vitest 4.0.16, Testing Library

## Code Style and Structure

### General Principles

- Write concise, technical TypeScript code with accurate examples
- Use functional and declarative programming patterns; avoid classes
- Prefer iteration and modularization over code duplication
- Use descriptive variable names with auxiliary verbs (e.g., `isLoading`,
  `hasError`)
- Structure files: exported component, subcomponents, helpers, static content,
  types

### File Organization

- Use lowercase with dashes for directories (e.g., `components/auth-user`)
- Group related components in feature-based directories
- Keep route files organized by feature in the `routes` directory
- Separate integrations in dedicated directories under `integrations/`

### Directory Structure

```
src/
|
+-- routes/           # TanStack Router file-based routes
|   |
|   +-- __root.tsx    # Root layout component
|   +-- index.tsx     # Home page
|   +-- api.trpc.$.tsx # tRPC API handler
|   +-- feature-name/
|       +-- index.tsx
|       +-- $id.tsx   # Dynamic route
|
+-- components/       # Cross-cutting UI components
|   +-- ui/           # shadcn/ui components
|
+-- integrations/     # Third-party integrations
|   +-- tanstack-query/
|   +-- trpc/
|
+-- lib/              # Shared library code and utilities
|
+-- hooks/            # Cross-cutting, reusable hooks
|
+-- types/            # Shared type definitions
|
+-- styles.css        # Global styles and CSS variables
+-- router.tsx        # Router configuration
+-- env.ts            # Environment variables with validation
```

### TypeScript Usage

- Use TypeScript for all code; prefer `type` over `interface` for type
  definitions
- Avoid enums; use const maps instead
- Use functional components with TypeScript types
- Define strict types for API requests and responses
- Use Zod schemas for validation and type inference
- Use `satisfies` operator for type validation

### Syntax and Formatting

- Use the `function` keyword for pure functions
- Avoid unnecessary curly braces in conditionals; use concise syntax for simple
  statements
- Use declarative JSX
- Follow Biome formatting rules
- Use **tabs** for indentation
- Use **double quotes** for strings as configured in Biome
- Organize imports automatically

### File Naming Conventions

- React components: `PascalCase.tsx` (e.g., `Header.tsx`)
- Routes: `lowercase.tsx` or `kebab-case.tsx` (e.g., `index.tsx`,
  `api.trpc.$.tsx`)
- Utilities: `camelCase.ts` (e.g., `utils.ts`)
- Types: `camelCase.ts` or `PascalCase.ts` (e.g., `api.ts`)
- UI components: Place in `src/components/ui/`

### Import Aliases

- Use `@/*` alias for imports from `src/` directory
- Example: `import { cn } from "@/lib/utils"`

## UI and Styling

- Use shadcn/ui, Radix UI, and Tailwind CSS for components and styling
- Implement responsive design with Tailwind CSS; use a mobile-first approach
- Maintain consistent spacing and color schemes
- Use Tailwind's utility classes instead of custom CSS when possible
- Extract common UI patterns into reusable components

### Tailwind CSS Syntax

- Use `bg-linear-to-*` instead of `bg-gradient-to-*`
- Use `shrink-0` instead of `flex-shrink-0`
- Use `grow` instead of `flex-grow`

### shadcn/ui Configuration

- Style: `new-york`
- Base color: `zinc`
- CSS variables: enabled
- Icon library: `lucide`

### Accessibility

- Use semantic HTML elements
- Include proper ARIA attributes via Radix UI
- Ensure keyboard navigation support
- Maintain sufficient color contrast

## Performance Optimization

- Leverage SSR with TanStack Start for initial page loads
- Wrap components in Suspense with fallback for async operations
- Use dynamic loading for non-critical components
- Optimize images: use WebP format, include size data, implement lazy loading
- Implement proper caching strategies for API routes

### Form Handling

- Use TanStack Form for managing form state and validation
- Integrate Zod schemas with TanStack Form for type-safe form validation
- Implement form error handling consistently across the application
- Create reusable form components for common patterns

## tRPC Integration

### API Routes

- Define tRPC routers in `src/integrations/trpc/router.ts`
- Use `publicProcedure` for public endpoints
- Create `protectedProcedure` for authenticated endpoints
- Validate all inputs with Zod schemas
- Keep procedures focused and single-purpose

### Router Organization

- Group related procedures into sub-routers using `createTRPCRouter`
- Use descriptive names for procedures (e.g., `todos.list`, `todos.create`)
- Implement proper error handling with tRPC error codes

### Client Usage

- Use tRPC hooks via `@/integrations/trpc/react`
- Leverage TanStack Query integration for caching and state management
- Use `useSuspenseQuery` for SSR-compatible data fetching

### API Security

- Validate all input with Zod schemas
- Sanitize data to prevent injection attacks
- Implement proper error handling and avoid exposing sensitive information
- Use environment variables for secrets

## Key Conventions

- Optimize Web Vitals (LCP, CLS, FID)
- Favor server components and SSR where possible
- Use `createServerFn` for server-only operations
- Follow TanStack Router docs for Data Fetching, Rendering, and Routing
- Use Biome for consistent code formatting and linting
- Implement proper hydration strategies for SSR
- Cache server responses appropriately
- Handle loading and error states gracefully
