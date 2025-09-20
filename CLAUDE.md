# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 application for Hacktoberfest showcasing open source projects from the JavaScript Cebu community. It uses Contentlayer for MDX content management, Logto for authentication, and Upstash Redis for data storage.

## Development Commands

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build production version
pnpm build

# Start production server
pnpm start

# Format and lint code
pnpm fmt
```

## Architecture

### Core Technologies
- **Framework**: Next.js 14 with App Router
- **Content**: Contentlayer for MDX content management
- **Authentication**: Logto integration for admin features
- **Database**: Upstash Redis for project submissions and view counts
- **Styling**: Tailwind CSS with custom theme
- **Code Quality**: Rome for linting and formatting

### Key Directories
- `/app` - Next.js App Router pages and API routes
- `/content/projects` - MDX files for project showcases organized by year
- `/app/components` - Reusable React components
- `/app/api` - API endpoints for project submission and admin functionality

### Content Structure
Projects are stored as MDX files in `/content/projects/{year}/` with frontmatter fields:
- `title`, `description` (required)
- `published`, `date`, `url`, `repository`, `image` (optional)

### Authentication & Admin
- Admin panel at `/admin` protected by Logto authentication
- Admin emails configured via `ADMIN_EMAILS` environment variable
- Project submission system with moderation workflow

### Environment Variables
Required environment variables (see `.env.example`):
- `UPSTASH_REDIS_REST_URL` - Redis database URL
- `UPSTASH_REDIS_REST_TOKEN` - Redis authentication token
- `LOGTO_APP_SECRET` - Logto application secret
- `LOGTO_BASE_URL` - Base URL for authentication callbacks
- `ADMIN_EMAILS` - Comma-separated list of admin email addresses
- `NEXT_PUBLIC_BEAM_TOKEN` - Analytics token (optional)

### Key Features
- **Project Showcase**: Dynamic routing for project pages with view tracking
- **Project Submission**: User submission form with Redis storage
- **Admin Moderation**: Review and approve submitted projects
- **MDX Support**: Rich content with syntax highlighting and auto-linking
- **Analytics**: Custom analytics integration via Beam