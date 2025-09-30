# TDD Consulting - Frontend

This is the frontend application for the TDD Consulting institutional website, built with Next.js, React, TypeScript, and Tailwind CSS.

## Architecture

The project follows a domain-driven, modular architecture to ensure scalability and maintainability. Key principles include:

- **Next.js App Router**: For optimized rendering and routing.
- **Domain-Driven Structure**: Code is organized by business domains (e.g., services, projects, testimonials) in the `src/domain` directory.
- **Core Module**: A `src/core` directory contains shared, reusable components, hooks, and utilities.
- **Service Layer**: All API interactions are abstracted into a service layer within each domain, keeping components clean and focused on the UI.
- **Type Safety**: End-to-end type safety with TypeScript, with types defined per domain.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Installation

1.  **Clone the repository**

2.  **Navigate to the frontend directory**:
    ```bash
    cd frontend
    ```

3.  **Install dependencies**:
    ```bash
    npm install
    ```

4.  **Set up environment variables**:
    Copy the `.env.local.example` file to `.env.local` and configure the variables. The `NEXT_PUBLIC_API_BASE_URL` should point to your running backend instance.
    ```bash
    cp .env.local.example .env.local
    ```

5.  **Run the development server**:
    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:3000`.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Lints the codebase.

## Folder Structure

```
src/
├── app/              # Next.js App Router (Pages & Layouts)
├── core/             # Shared logic, components, hooks, etc.
│   ├── components/   # Generic UI components (Button, Card)
│   ├── contexts/     # Global contexts (Theme)
│   ├── hooks/        # Generic hooks (useApiMutation)
│   ├── lib/          # Library configurations (api client, query client)
│   └── types/        # Global types
└── domain/           # Business domains
    ├── service/      # Example: Service domain
    │   ├── _module.ts  # Domain manifest
    │   ├── components/ # Domain-specific components
    │   ├── hooks/      # Domain-specific hooks
    │   ├── services/   # Domain-specific API services
    │   └── types/      # Domain-specific types
    └── ...           # Other domains (project, testimonial, etc.)
```
