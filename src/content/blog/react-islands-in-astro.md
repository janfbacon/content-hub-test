---
title: Using React Islands in Astro
description: Learn how to add interactive React components to your static Astro site
pubDate: 2024-03-20
author: Mike Chen
tags: ['tech', 'react', 'astro', 'islands']
image: /images/blog/react.jpg
---

# Using React Islands in Astro

One of Astro's most powerful features is the ability to use React (or any framework) components as "islands" of interactivity within a static site.

## What are Islands?

Islands are interactive components that are hydrated on the client side, while the rest of your page remains static. This gives you:

- **Minimal JavaScript**: Only load JS for components that need it
- **Framework Flexibility**: Mix and match different frameworks
- **Performance**: Static HTML for everything else

## Client Directives

Astro provides several client directives to control when and how components hydrate:

- `client:load` - Hydrates immediately when the page loads
- `client:idle` - Hydrates when the browser is idle
- `client:visible` - Hydrates when the component becomes visible
- `client:media` - Hydrates based on a media query

## Example: Live Search Component

```astro
---
import LiveSearch from '../components/LiveSearch';
---

<LiveSearch client:load />
```

This component will hydrate immediately when the page loads, making it interactive right away.

## Best Practices

1. Use `client:visible` for below-the-fold components
2. Use `client:idle` for non-critical interactivity
3. Only use `client:load` when immediate interactivity is required
4. Keep islands small and focused

The Islands Architecture lets you build fast, interactive sites without sacrificing performance!
