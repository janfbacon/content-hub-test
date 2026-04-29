---
title: Optimizing Images in Astro
description: Learn how to use Astro's built-in Image component for automatic image optimization
pubDate: 2024-03-05
author: Sarah Johnson
tags: ['tech', 'performance', 'astro']
image: /images/blog/images.jpg
---

# Optimizing Images in Astro

Images are often the largest assets on a website, and optimizing them is crucial for performance. Astro's built-in `<Image />` component makes this process seamless.

## The Astro Image Component

Astro provides an `<Image />` component that automatically:

- Generates multiple image formats (WebP, AVIF)
- Creates responsive image sizes
- Lazy loads images by default
- Provides proper aspect ratios
- Optimizes file sizes

## Basic Usage

```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/my-image.jpg';
---

<Image src={myImage} alt="Description" />
```

## Advanced Features

### Responsive Images

```astro
<Image 
  src={myImage} 
  alt="Description"
  widths={[400, 800, 1200]}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### Custom Formats

The Image component automatically serves modern formats like WebP and AVIF to browsers that support them, falling back to the original format when needed.

## Best Practices

1. Always provide descriptive alt text
2. Use appropriate image dimensions
3. Consider using the `loading="lazy"` attribute for below-the-fold images
4. Optimize source images before importing

With Astro's Image component, you get professional image optimization without the hassle!
