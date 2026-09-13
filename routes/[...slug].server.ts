import { serveMarkdownFolder } from "@mastrojs/markdown";
import { html, htmlToResponse } from "@mastrojs/mastro";
import { Layout } from "#components/Layout.ts";

export const { GET, getStaticPaths } = serveMarkdownFolder<{ title?: string; bild?: string[] }>(
  {
    folder: "content/pages",
    parse: {
      allowDangerousHtml: true,
    },
  },
  ({ content, meta }, _req) => {
    return htmlToResponse(
      Layout({
        title: meta.title,
        bild: meta.bild,
        children: html`<article class="prose">${content}</article>`,
      }),
    );
  },
);
