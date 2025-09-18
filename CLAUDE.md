# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Ridge Marketing's website built with Gatsby.js, sourcing content from a headless WordPress backend via GraphQL. The site uses a flexible layout system with modular components for different page sections.

## Key Technologies
- **Gatsby.js 5.x**: Static site generator with React
- **WordPress**: Headless CMS via GraphQL (`gatsby-source-wordpress`)
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **SendGrid**: Email API for contact forms
- **React**: Component library with hooks and context
- **Framer Motion**: Animation library

## Development Commands

```bash
# Start development server
npm run develop
# or
npm start

# Build for production
npm run build

# Serve production build locally  
npm run serve

# Clean Gatsby cache
npm run clean
```

## Architecture

### Flexible Layout System
The site uses a modular layout system centered around `FlexibleLayouts.js`:
- **Layout Registration**: All layout components are registered in `src/layouts/layoutIndex.js`
- **Dynamic Rendering**: `FlexibleLayouts.js` dynamically renders layouts based on WordPress field data
- **Layout Components**: Individual layout files in `src/layouts/layouts/` (40+ components like `TwoColImageText`, `ProjectBlocks`, etc.)

### Template Structure
- `src/templates/`: Page templates for different content types
  - `page.js`: Standard pages with flexible layouts
  - `post.js`: Blog posts  
  - `project.js`: Portfolio projects
  - `service.js`: Service pages
  - `lander.js`: Landing pages

### WordPress Integration
- **GraphQL Endpoint**: Configured in `gatsby-config.js` (`WPGRAPHQL_URL_PROD` environment variable)
- **Content Types**: Pages, Posts, Projects, Services, Landers
- **SEO**: Yoast SEO integration for meta tags and structured data
- **Media**: Images processed through Gatsby's image optimization

### Theme System
- **Theme Context**: Global theme state in `src/static/theme.js` and `Layout.js`
- **Dynamic Colors**: Accent colors can be changed per page/section
- **Header Styling**: Dynamic header background colors based on page content

### Tailwind Configuration
Custom design system defined in `tailwind.config.js`:
- **Colors**: Ridge Marketing brand colors (`rm-green`, `rm-aqua`, etc.)
- **Typography**: Custom font sizes and line heights
- **Screens**: Custom breakpoints including `xlz` (1366px)
- **Safelist**: Extensive safelist for dynamic classes

## Key Patterns

### Layout Component Structure
Each layout component follows this pattern:
```javascript
// Receives layoutData prop with layoutContent and layoutSettings
const LayoutComponent = ({ layoutData }) => {
  const { layoutContent, layoutSettings } = layoutData;
  // Component logic
}

// GraphQL fragments for different content types (Page, Service, Project, Lander)
export const layoutQuery = graphql`
  fragment LayoutComponentPage on WpPage { ... }
  fragment LayoutComponentService on WpService { ... }
  // etc.
`
```

### Form Handling
- **API Routes**: Contact forms use Gatsby API routes in `src/api/`
- **SendGrid Integration**: Email sending via SendGrid API
- **Form Libraries**: Uses Formik and React Hook Form
- **Spam Protection**: Basic spam filtering in email handlers

### Image Handling  
- **Gatsby Image**: Uses `gatsby-plugin-image` for optimized images
- **WordPress Media**: Images sourced from WordPress with local optimization
- **Responsive Images**: Multiple breakpoint support

## File Structure Notes

- **Components**: Reusable components in `src/components/`
- **Global Components**: Site-wide components in `src/components/global/`
- **Templates**: Page templates in `src/templates/`
- **API**: Serverless functions in `src/api/`
- **Static Assets**: Static files in `src/static/`

## WordPress Content Management

The site pulls content from WordPress via GraphQL. Content is structured using:
- **Flexible Layouts**: WordPress ACF flexible content fields
- **Custom Post Types**: Projects, Services, Landers
- **SEO Fields**: Yoast SEO plugin integration
- **Media Library**: WordPress media with Gatsby image processing

## Environment Configuration

Required environment variables:
- `WPGRAPHQL_URL_PROD`: WordPress GraphQL endpoint
- `SENDGRID_API_KEY`: SendGrid API key for email functionality

## Development Notes

- **Page Generation**: Dynamic page creation in `gatsby-node.js` based on WordPress content
- **Redirects**: URL redirects managed via `src/static/redirects.json`
- **Sitemap**: Automated sitemap generation with WordPress content
- **Google Analytics**: GTM integration configured in `gatsby-config.js`