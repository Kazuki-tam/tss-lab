---
description: Test rule
globs: *.spec.ts, *.test.ts, *.spec.tsx, *.test.tsx
alwaysApply: false
---

# Testing Guidelines

When you are testing this project, please follow these guidelines:

## Testing Stack

- **Test Runner**: Vitest 3.0.5
- **Component Testing**: Testing Library (React)
- **E2E Testing**: Playwright (optional)
- **Assertion**: Vitest built-in assertions

## Directory Structure

```
src/
├── components/
│   ├── Header.tsx
│   └── Header.test.tsx          # Colocated unit test
├── lib/
│   ├── utils.ts
│   └── utils.test.ts            # Utility function tests
├── integrations/
│   └── trpc/
│       ├── router.ts
│       └── router.test.ts       # tRPC router tests
└── hooks/
    ├── use-example.ts
    └── use-example.test.ts      # Custom hook tests
```

## Testing Principles

### General Guidelines

- Write tests that are maintainable, readable, and reliable
- Follow the AAA pattern (Arrange, Act, Assert)
- Use meaningful test descriptions that explain the expected behavior
- Keep tests independent and isolated
- Avoid test interdependencies
- Use appropriate test doubles (mocks, stubs, spies) judiciously

### Unit Tests

- Colocate unit tests with the source files they test (e.g., `utils.test.ts`
  next to `utils.ts`)
- Focus on testing business logic and component behavior
- Test both success and error cases
- Keep test files small and focused
- Use meaningful test data that represents real-world scenarios

### Integration Tests

- Focus on testing component interactions and data flow
- Use realistic test data and scenarios
- Mock external dependencies appropriately
- Test error handling and edge cases

## Testing Specific Features

### Testing React Components

Use Testing Library for component testing:

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { MyComponent } from "./MyComponent";

describe("MyComponent", () => {
  it("should render correctly", () => {
    render(<MyComponent />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("should handle user interaction", async () => {
    const user = userEvent.setup();
    render(<MyComponent />);

    await user.click(screen.getByRole("button"));
    expect(screen.getByText("Clicked")).toBeInTheDocument();
  });
});
```

### Testing tRPC Procedures

Test tRPC router procedures directly:

```tsx
import { describe, expect, it } from "vitest";
import { appRouter } from "./router";

describe("tRPC Router", () => {
  const caller = appRouter.createCaller({});

  it("should return expected data", async () => {
    const result = await caller.hello({ name: "World" });
    expect(result.message).toBe("Hello, World!");
  });

  it("should validate input", async () => {
    await expect(caller.hello({ name: "" })).rejects.toThrow();
  });
});
```

### Testing TanStack Query Hooks

Use `@tanstack/react-query` testing utilities:

```tsx
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { describe, expect, it, vi } from "vitest";

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });

  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useMyQuery", () => {
  it("should fetch data successfully", async () => {
    const { result } = renderHook(() => useMyQuery(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toBeDefined();
  });
});
```

### Testing TanStack Form

Test form logic and validation:

```tsx
import { act, renderHook } from "@testing-library/react";
import { useForm } from "@tanstack/react-form";
import { describe, expect, it } from "vitest";

describe("Form validation", () => {
  it("should validate required fields", async () => {
    const { result } = renderHook(() =>
      useForm({
        defaultValues: { email: "" },
        onSubmit: vi.fn(),
      })
    );

    await act(async () => {
      await result.current.handleSubmit();
    });

    expect(result.current.state.isValid).toBe(false);
  });
});
```

### Testing Utility Functions

Test pure utility functions:

```tsx
import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn utility", () => {
  it("should merge class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("should handle conditional classes", () => {
    expect(cn("foo", false && "bar", "baz")).toBe("foo baz");
  });

  it("should merge tailwind classes correctly", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });
});
```

## Best Practices

### Test Data Management

- Use fixtures for common test data
- Keep test data realistic but minimal
- Use typed test data to catch type-related issues early

### Mocking

- Mock tRPC client for component tests
- Mock fetch/API calls using `vi.mock()` or MSW
- Keep mocks simple and focused

```tsx
import { vi } from "vitest";

// Mock tRPC client
vi.mock("@/integrations/trpc/react", () => ({
  useTRPCClient: () => ({
    hello: {
      queryOptions: vi.fn(() => ({
        queryKey: ["hello"],
        queryFn: () => Promise.resolve({ message: "Hello" }),
      })),
    },
  }),
}));
```

### Naming Conventions

- Use descriptive test names that explain the behavior
- Follow the pattern: `describe('Component/Feature')`,
  `it('should do something')`
- Use meaningful names for test utilities and helpers

### Code Quality

- Keep tests fast and efficient
- Parallelize test execution when possible
- Minimize unnecessary setup and teardown
- Regular review and cleanup of tests

## Running Tests

```bash
# Run all tests
bun run test

# Run tests in watch mode
bun run test --watch

# Run tests with coverage
bun run test --coverage

# Run specific test file
bun run test src/lib/utils.test.ts
```

## Testing with SSR

When testing components that use TanStack Start SSR features:

- Use `vi.mock()` to mock server-only imports
- Test client-side behavior separately from server rendering
- Consider using `@testing-library/react`'s `renderToString` for SSR testing

## Code Coverage

- Aim for meaningful coverage, not 100%
- Focus on critical business logic
- Use coverage reports to identify untested edge cases

```bash
# Generate coverage report
bun run test --coverage
```
