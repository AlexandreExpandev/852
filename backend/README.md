# TDD Consulting API

Backend API for the TDD Consulting website, providing endpoints for services, projects, testimonials, company information, and contact form submissions.

## Features

- RESTful API architecture
- TypeScript for type safety
- Express.js for HTTP server
- JWT authentication for protected routes
- Zod for request validation
- Structured error handling
- Logging with Winston
- Email notifications for contact form submissions

## Project Structure

```
src/
├── api/                    # API controllers
│   ├── external/           # Public endpoints
│   │   └── public/         # Publicly accessible routes
│   └── internal/           # Protected endpoints
├── config/                 # Application configuration
├── instances/              # Service instances
├── middleware/             # Express middleware
├── routes/                 # Route definitions
├── services/               # Business logic
│   ├── testimonial/        # Testimonial service
│   ├── service/            # Service offerings
│   ├── project/            # Portfolio projects
│   ├── company/            # Company information
│   └── contact/            # Contact form handling
├── utils/                  # Utility functions
└── server.ts              # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Copy `.env.example` to `.env` and configure environment variables
4. Start the development server:
   ```
   npm run dev
   ```

## API Endpoints

### Public Endpoints

- `GET /api/external/services` - List all services
- `GET /api/external/services/:id` - Get service details
- `GET /api/external/projects` - List all portfolio projects
- `GET /api/external/projects/:id` - Get project details
- `GET /api/external/testimonials` - List all testimonials
- `GET /api/external/company` - Get company information
- `POST /api/external/contact` - Submit contact form

### Protected Endpoints (require authentication)

- `GET/POST/PUT/DELETE /api/internal/services` - Manage services
- `GET/POST/PUT/DELETE /api/internal/projects` - Manage projects
- `GET/POST/PUT/DELETE /api/internal/testimonials` - Manage testimonials
- `GET/PUT /api/internal/company` - Manage company information
- `GET/PUT/DELETE /api/internal/contacts` - Manage contact submissions

## Development

### Build

```
npm run build
```

### Run Tests

```
npm test
```

### Linting

```
npm run lint
```

## Deployment

The application can be deployed to any Node.js hosting environment. For production deployment:

1. Build the application: `npm run build`
2. Set production environment variables
3. Start the server: `npm start`
