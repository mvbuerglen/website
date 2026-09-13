import { readMarkdownFile } from "@mastrojs/markdown";
import { html, htmlToResponse } from "@mastrojs/mastro";
import { Anlaesse } from "#components/Anlaesse.ts";
import { Layout } from "#components/Layout.ts";

export const GET = async (_req: Request) => {
  const { content, meta } = await readMarkdownFile<{ title?: string; bild?: string[] }>(
    "content/pages/index.md",
  );
  return htmlToResponse(
    Layout({
      title: meta.title,
      bild: meta.bild,
      children: html`
        <article class="prose">${content}</article>
        ${Anlaesse({ mode: "all", count: 4 })}
      `,
    }),
  );
};
