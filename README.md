<!-- ![tailwind-nextjs-banner](/public/static/images/twitter-card.png) -->

# Gabriela Taylor | Full Stack Software Engineer

### Tailwind Nextjs Starter Template

This personal engineering portfolio site is based off of the attached [Next.js](https://nextjs.org/) & [Tailwind CSS](https://tailwindcss.com/) blogging starter template. Version 2 of the template is based on Next App directory with [React Server Component](https://nextjs.org/docs/getting-started/react-essentials#server-components) and uses [Contentlayer](https://www.contentlayer.dev/) to manage markdown content.

Check out the [template repository & documentation](https://github.com/timlrx/tailwind-nextjs-starter-blog/network/) for more information.

## Motivation

I wanted a place to show off the projects I've worked on to-date, and to record and share my SWE journey with the world-- and I wanted to get it up and running quickly. I thought [Timothy Lin's](https://github.com/timlrx/) started template looked great, so I grabbed a copy and modified it to house my personal site, resume, and what I'm currently up to.

This repository is currently deployed to Netlify, and you can check it out [here](https://gabrielataylor.dev).

## Features

- Next.js with Typescript
- [Contentlayer](https://www.contentlayer.dev/) to manage content logic
- Easy styling customization with [Tailwind 3.0](https://tailwindcss.com/blog/tailwindcss-v3) and primary color attribute
- [MDX - write JSX in markdown documents!](https://mdxjs.com/)
- Near perfect lighthouse score - [Lighthouse report](https://www.webpagetest.org/result/230805_BiDcBQ_4H7)
- Lightweight, 85kB first load JS
- Mobile-friendly view
- Light and dark theme
- Font optimization with [next/font](https://nextjs.org/docs/app/api-reference/components/font)
- Integration with [pliny](https://github.com/timlrx/pliny) that provides:
  - Multiple analytics options including [Umami](https://umami.is/), [Plausible](https://plausible.io/), [Simple Analytics](https://simpleanalytics.com/), Posthog and Google Analytics
  - Comments via [Giscus](https://github.com/laymonage/giscus), [Utterances](https://github.com/utterance/utterances) or Disqus
  - Newsletter API and component with support for Mailchimp, Buttondown, Convertkit, Klaviyo, Revue, and Emailoctopus
  - Command palette search with [Kbar](https://github.com/timc1/kbar) or Algolia
- Server-side syntax highlighting with line numbers and line highlighting via [rehype-prism-plus](https://github.com/timlrx/rehype-prism-plus)
- Math display supported via [KaTeX](https://katex.org/)
- Citation and bibliography support via [rehype-citation](https://github.com/timlrx/rehype-citation)
- Automatic image optimization via [next/image](https://nextjs.org/docs/basic-features/image-optimization)
- Support for tags - each unique tag will be its own page
- Support for multiple authors
- 3 different blog layouts
- 2 different blog listing layouts
- Support for nested routing of blog posts
- Projects page
- Preconfigured security headers
- SEO friendly with RSS feed, sitemaps and more!

## Quick Start Guide

1. Clone the repo

```bash
yarn
```

2. Personalize `siteMetadata.js` (site related information)
3. Modify the content security policy in `next.config.js` if you want to use
   other analytics provider or a commenting solution other than giscus.
4. Personalize `authors/default.md` (main author)
5. Modify `projectsData.js`
6. Modify `headerNavLinks.js` to customize navigation links
7. Deploy on Vercel or Netlify

## Grab a Copy

You can choose to fork this repository or the original starter template. To create a copy of this repo, [create a fork here](https://github.com/gbmyt/portfolio/fork), and then clone the new copy down to your local machine.

To clone the starter template, try the following:

```bash
npx degit 'timlrx/tailwind-nextjs-starter-blog'
```

## Development

First, install project dependencies

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Edit the layout in `app` or content in `data`. With live reloading, the pages auto-updates as you edit them.

## Deploy

**Vercel**

The easiest way to deploy the template is to deploy on [Vercel](https://vercel.com). Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

**Netlify**

[Netlify](https://www.netlify.com/)’s Next.js runtime configures enables key Next.js functionality on your website without the need for additional configurations. Netlify generates serverless functions that will handle Next.js functionalities such as server-side rendered (SSR) pages, incremental static regeneration (ISR), `next/images`, etc.

See [Next.js on Netlify](https://docs.netlify.com/integrations/frameworks/next-js/overview/#next-js-runtime) for suggested configuration values and more details.

**Static hosting services / GitHub Pages / S3 / Firebase etc.**

1. Add `output: 'export'` in `next.config.js`. See [static exports documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports#configuration) for more information.
2. Comment out `headers()` from `next.config.js`.
3. Change `components/Image.tsx` to use a standard `<img>` tag instead of `next/image`:

   ```ts
   /* eslint-disable jsx-a11y/alt-text */
   /* eslint-disable @next/next/no-img-element */
   import NextImage, { ImageProps } from 'next/image'

   // @ts-ignore
   const Image = ({ ...rest }: ImageProps) => <img {...rest} />

   export default Image
   ```

   Alternatively, to continue using `next/image`, you can use an alternative image optimization provider such as Imgix, Cloudinary or Akamai. See [image optimization documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports#image-optimization) for more details.

4. Remove `api` folder and components which call the server-side function such as the Newsletter component. Not technically required and the site will build successfully, but the APIs cannot be used as they are server-side functions.
5. Run `yarn build`. The generated static content is in the `out` folder.
6. Deploy the `out` folder to your hosting service of choice or run `npx serve out` to view the website locally.

## Contributing

Fork and clone the repo or the blog starter template down to your local machine per the installation instructions above, install required dependencies and then start the development server with `yarn dev`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result and make changes.

Once you're happy with your changes, please submit a PR with a detailed description of the changes you've made.

## Bug reports

If you discover any bugs, feel free to create an issue on GitHub. Please add as much information as possible to help us in fixing the potential bug. We also encourage you to help even more by forking and submitting a pull request.

[Submit an Issue](https://github.com/gbmyt/portfolio/issues)

## License

- [MIT](https://github.com/gbmyt/portfolio/blob/main/LICENSE) © 2023 [Gabriela Taylor](https://www.gabrielataylor.dev)
- [MIT](https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/main/LICENSE) © 2021 [Timothy Lin](https://www.timlrx.com)
