# Overview

This is a college website application for "Riverview College of Arts & Science" built as a full-stack web application. The project demonstrates a modern React-based frontend with an Express.js backend, featuring a professional college website with multiple pages including Home, About, Academics, and Admissions. The application uses a clean, responsive design with shadcn/ui components and implements a complete development setup with TypeScript, Tailwind CSS, and PostgreSQL database integration.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing between pages (Home, About, Academics, Admissions)
- **UI Components**: shadcn/ui component library built on Radix UI primitives for consistent, accessible components
- **Styling**: Tailwind CSS with custom design tokens for college branding (navy, blue, gold color scheme)
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Framework**: Express.js with TypeScript for API development
- **Development Server**: Custom Vite integration for full-stack development experience
- **Route Structure**: Modular route registration system with API prefix (/api)
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Storage Interface**: Abstract storage interface with in-memory implementation for development

## Database Layer
- **ORM**: Drizzle ORM for type-safe database operations and migrations
- **Database**: PostgreSQL configured for production deployment
- **Connection**: Neon Database serverless driver for cloud PostgreSQL
- **Schema Management**: Centralized schema definitions in shared directory with Zod validation
- **Migrations**: Drizzle Kit for database schema migrations and management

## Development Setup
- **Package Management**: npm with lockfile for consistent dependencies
- **TypeScript**: Strict configuration with path mapping for clean imports
- **Code Organization**: Monorepo structure with shared types between client and server
- **Development Tools**: TSX for TypeScript execution, ESBuild for production builds
- **Asset Handling**: Vite plugin for runtime error overlays and development enhancements

## Design System
- **Typography**: Inter font for UI elements, Crimson Text for headings
- **Color Palette**: Custom college-themed colors (navy, blue, gold) with CSS variables
- **Components**: Comprehensive UI component library with consistent styling
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities
- **Accessibility**: ARIA-compliant components through Radix UI primitives

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form with Zod validation
- **Routing**: Wouter for lightweight client-side navigation
- **Backend**: Express.js with TypeScript support and middleware ecosystem

## Database & ORM
- **Database Driver**: @neondatabase/serverless for PostgreSQL connection
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Session Storage**: connect-pg-simple for PostgreSQL session storage

## UI & Styling
- **Component Library**: Radix UI primitives for accessible, headless components
- **Styling**: Tailwind CSS with PostCSS for utility-first styling
- **Icons**: Lucide React for consistent iconography
- **Animations**: Class Variance Authority for component variants

## Development Tools
- **Build Tools**: Vite for development server and build process, ESBuild for production
- **TypeScript**: Full TypeScript support with strict configuration
- **Development Plugins**: Replit-specific plugins for enhanced development experience
- **Utilities**: clsx and tailwind-merge for conditional styling, date-fns for date handling

## State Management & Data Fetching
- **Server State**: TanStack Query for caching, synchronization, and background updates
- **Form Management**: React Hook Form with Hookform Resolvers for validation integration
- **Validation**: Zod for runtime type validation and schema definition