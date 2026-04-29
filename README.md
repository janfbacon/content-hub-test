# Hyper-Fast Content & Portfolio Hub

A modern content and portfolio hub built with **Astro 4+** using the unique Islands Architecture. This app demonstrates how to mix static content with interactive components for optimal performance.

## Features

### ✅ Content Collections
- Uses Astro's `getCollection` API to manage blog posts
- Markdown-based content with frontmatter schema validation
- Automatic type generation for type-safe content

### ✅ Framework Islands
- React component for live search functionality
- Uses `client:load` directive for immediate hydration
- Demonstrates Astro's Islands Architecture pattern

### ✅ Dynamic Tag Pages
- Automatically generates pages for every unique tag using `getStaticPaths()`
- Tag pages are statically generated at build time
- Accessible via `/blog/tags/[tag]` routes

### ✅ Image Optimization
- Portfolio gallery page with optimized images
- Ready to use Astro's built-in `<Image />` component
- Responsive image handling

### ✅ Interactive Contact Form
- React-based contact form component
- Client-side interactivity with form validation
- Demonstrates island hydration

## Project Structure

```
/
├── src/
│   ├── content/
│   │   ├── blog/              # Blog posts (Markdown)
│   │   └── config.ts          # Content collection schema
│   ├── components/
│   │   ├── BlogCard.astro     # Blog post card component
│   │   ├── LiveSearch.tsx     # React search component (island)
│   │   └── Contact.tsx        # React contact form (island)
│   ├── layouts/
│   │   └── Layout.astro      # Main layout with navigation
│   └── pages/
│       ├── index.astro        # Homepage
│       ├── blog/
│       │   ├── index.astro   # Blog listing page
│       │   ├── [slug].astro  # Individual blog post
│       │   └── tags/
│       │       └── [tag].astro # Dynamic tag pages
│       ├── portfolio.astro   # Portfolio gallery
│       └── contact.astro     # Contact page
└── public/                    # Static assets
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Build

Build for production:

```bash
npm run build
```

The static site will be generated in the `dist/` directory.

### Preview

Preview the production build:

```bash
npm run preview
```

## Key Astro Features Demonstrated

1. **Content Collections**: Blog posts are managed in `src/content/blog/` with a schema defined in `src/content/config.ts`

2. **Islands Architecture**: 
   - `LiveSearch` component uses `client:load` for immediate interactivity
   - `Contact` component demonstrates form handling in an island

3. **Dynamic Routes**: 
   - Blog posts: `/blog/[slug]`
   - Tag pages: `/blog/tags/[tag]` (generated via `getStaticPaths()`)

4. **Image Optimization**: Portfolio page is set up to use Astro's `<Image />` component

## Adding New Blog Posts

1. Create a new Markdown file in `src/content/blog/`
2. Add frontmatter following the schema:
   ```markdown
   ---
   title: Your Post Title
   description: A brief description
   pubDate: 2024-01-15
   author: Your Name
   tags: ['tag1', 'tag2']
   image: /images/blog/image.jpg (optional)
   ---
   ```
3. The post will automatically appear in the blog listing and tag pages

## Technologies Used

- **Astro 4+** - The web framework
- **React** - For interactive components
- **TypeScript** - For type safety
- **Markdown/MDX** - For content

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro Islands Architecture](https://docs.astro.build/en/concepts/islands/)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Astro Image Component](https://docs.astro.build/en/guides/images/)

## License

MIT
