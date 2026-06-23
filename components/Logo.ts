import { html } from "@mastrojs/mastro";

const title = "Musikverein Bürglen";

export const Logo = () =>
  html`<a class="logo" href="/">
    <img src="/logo.svg" alt="${title}" />
    <span>${title}</span>
  </a>`;
