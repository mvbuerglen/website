# Development

The website is developed with [Astro](https://astro.build/) framework and requires a Node.js runtime.
[UnoCSS](https://unocss.dev) is used for CSS styles, which makes it familiar to Tailwind users.

## Prerequisites

1. Recent [Node.js](https://nodejs.org) LTS runtime.
2. [PNPM](https://pnpm.io/) package manager.

Alternatively, this repo provides a pre-configured development environment with [Nix](https://nixos.org) and [Devenv](https://devenv.sh/).

## Commands

Run all commands in terminal:

| Command        | Aktion                                 |
| :------------- | :------------------------------------- |
| `pnpm install` | Install dependencies                   |
| `pnpm dev`     | Start local server at `localhost:4321` |
| `pnpm check`   | Check source code for errors           |

## CI/CD

The project is setup on [GitHub](https://github.com/mvbuerglen/website) in its own organization.
Netlify will automatically deploy code from the `main` branch.
Dependabot is setup to update depencies once a week.

TODO: Trigger deployment daily to ensure correct rendering of past and upcoming concerts

## Resources

Check out detailed documentation for [Astro framework](https://docs.astro.build) and [UnoCSS](https://unocss.dev/guide/).
