import { readMarkdownFile, readMarkdownFiles } from "@mastrojs/markdown";
import { getParams, html, htmlToResponse } from "@mastrojs/mastro";
import { Layout } from "#components/Layout.ts";
import { formatDateTime } from "#src/time.ts";

type AnlassMeta = {
  title?: string;
  bild?: string[];
  datum: string;
  ort: string;
};

export const GET = async (req: Request) => {
  const { slug } = getParams(req);
  const { content, meta } = await readMarkdownFile<AnlassMeta>(`content/anlaesse/${slug}.md`);
  const localDate = new Date(meta.datum);
  return htmlToResponse(
    Layout({
      title: meta.title,
      bild: meta.bild,
      children: html`<article class="prose">
        <h2>${meta.title}</h2>
        <p class="location">
          <time datetime=${localDate.toISOString()}>${formatDateTime(localDate)}</time>
          in ${meta.ort}
        </p>
        ${content}
      </article>`,
    }),
  );
};

export const getStaticPaths = async () => {
  const files = await readMarkdownFiles<AnlassMeta>("content/anlaesse/*.md");
  return files.map((f) => `/anlaesse/${f.slug}/`);
};
