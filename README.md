# Astronotion starter site

Opinionated starter site ("theme") to get you up and running with an [Astro](https://astro.build) site + [Notion](https://www.notion.so/) content.

- Uses [Astronotion](https://github.com/ekafyi/astronotion) to fetch, transform, and render data from Notion with Astro components
- Fast, accessible, and SEO-friendly
  - Sitemap, metadata, web manifest 
  - Semantic HTML markup
  - Lazy loaded images
  - A+ Lighthouse score
- Multiple customizable colour modes with Tailwind and daisyUI
- Markdown examples provided for non-Notion use cases

Currently only available in SSG.


## Quick start

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Fekafyi%2Fastronotion-starter-ssg%2Ftree%2Fmain) [![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ekafyi/astronotion-starter-ssg)

Or [create a new repo](https://github.com/ekafyi/astronotion-starter-ssg/generate) from this template.


## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

You may also use `yarn` or `pnpm` instead of `npm`.


## Configure

1) Edit the config file for basic site content/data

https://github.com/ekafyi/astronotion-starter-ssg/blob/main/src/configs/an-starter-config.mjs

2) Replace the static assets with your own (presumably non-feline) branding assets

https://github.com/ekafyi/astronotion-starter-ssg/tree/main/public

What to modify:
- favicon.ico
- manifest.json
- images/branding/icon-192x192.png
- images/branding/icon-512x512.png

3) Replace the sample Notion page ids

⚠️ Make sure the Notion page is shared to public

### Example for standalone page

https://github.com/ekafyi/astronotion-starter-ssg/blob/main/src/pages/kitchen-sink-notion.astro#L8

Notion source page: https://ekafyi-playground.notion.site/Plants-1cf6f82effc24ad4aea5a50f88198a7b

### Example for collection ("parent" and "child") pages

- https://github.com/ekafyi/astronotion-starter-ssg/blob/main/src/pages/journal/index.astro#L9
- https://github.com/ekafyi/astronotion-starter-ssg/blob/main/src/pages/journal/%5B...fullSlug%5D.astro#L10

Notion source page: https://ekafyi-playground.notion.site/2ba80ec3d84d46479f23ec15ba5e39b0


## Deploy

Run the `build` command (see "Commands" above) and deploy your `dist` directory to your hosting service.

If you use Netlify or Vercel, you can:
- run the deploy command from the CLI: `netlify deploy` or `vercel deploy --prebuilt`, and/or...
- trigger automatic deployment when you push to your connected repository
