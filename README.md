# mv-buerglen.ch

[![Netlify Status](https://api.netlify.com/api/v1/badges/2bcc59f9-d4ff-46e5-83a6-894c63c83034/deploy-status?branch=main)](https://app.netlify.com/sites/mvbuerglen/deploys)

Website of Musikverein Bürglen.

## Architecture

Previous website was built with WordPress and required PHP hosting to operate.
For a small website which gets updated 2 times a year, a full-blown CMS server is an overkill.

The new version is a simple static HTML site built with [Astro](https://astro.build/) framework and hosted on Netlify under its free starter plan.
However, since website content editors are not programmers, [Decap CMS](https://decapcms.org/) is used to edit page sources directly on GitHub.
Decap is a React single-page app that authenticates users via Netlify and GitHub OAuth integration and commits updates directly to GitHub.

One potential for improvement in this architecture is handling of images.
Images are stored in `src/assets/images` and checked into Git.
With current and expected number of pages and images it is an acceptible tradeoff.
However, if size and number of images grows significantly, it may be advisable to employ one of the digital asset management platforms that Decap supports.
Unfortunately, Decap [doesn't support Git LFS](https://github.com/decaporg/decap-cms/issues/1206) on GitHub at the moment.

## Development

The website is developed with [Astro](https://astro.build/) framework and requires a Node.js runtime.
See [DEVELOPMENT](DEVELOPMENT.md) for details.

## Deployment

The website is deployed to [Netlify platform](https://netlify.com/) as a static website.
See [DEPLOYMENT](DEPLOYMENT.md) for details.

## Content Management

The website uses [Decap CMS](https://decapcms.org/) for user-friendly content editing from GitHub.
See [BEDIENUNG](BEDIENUNG.md) (in German) for details.

## LICENSE

This website is made pro bono by [Farbit GmbH](https://farbit.org) for Musikverein Bürglen.
The source code of the website is in public domain and licensed under terms of [Unlicense](LICENSE) or [0BSD](LICENSE-0BSD) (at user's choice).
Copyright to the website content (`/src/pages`, `/src/content` etc.) and images (`/src/assets`) are owned by Musikverein Bürglen and licensed under terms of [CC BY 4.0](LICENSE-CC-BY).
