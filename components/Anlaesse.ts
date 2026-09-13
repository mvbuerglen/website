import { type Md, readMarkdownFiles } from "@mastrojs/markdown";
import { html } from "@mastrojs/mastro";
import { formatDate, formatTime } from "#src/time.ts";

interface Props {
  mode: "all" | "upcoming" | "past";
  title?: string;
  count?: number;
}

export type AnlassMeta = {
  title?: string;
  bild?: string[];
  datum: string;
  ort: string;
};

type AnlassItem = Md<AnlassMeta> & { path: string; slug: string };

export const Anlass = ({ item }: { item: AnlassItem }) => {
  const localDate = new Date(item.meta.datum);
  return html`<article class="card">
    <p class="subtitle">
      <time datetime=${localDate.toISOString()}>${formatDate(localDate)}</time>
    </p>
    <a href=${`/anlaesse/${item.slug}`} class="overlay-link">
      <h3>${item.meta.title}</h3>
    </a>
    <p>
      <time datetime=${localDate.toISOString()}>${formatTime(localDate)}</time> in ${item.meta.ort}
    </p>
  </article>`;
};

export const Anlaesse = async ({ title = "Anlässe", mode, count }: Props) => {
  const now = new Date().toISOString();
  const items = await readMarkdownFiles<AnlassMeta>("content/anlaesse/*.md");
  const cards = items
    .filter(
      (item) =>
        (mode === "upcoming" && item.meta.datum > now) ||
        (mode === "past" && item.meta.datum < now) ||
        mode === "all",
    )
    .sort((a, b) => -a.meta.datum.localeCompare(b.meta.datum))
    .slice(0, count)
    .map((item) => Anlass({ item }));

  return html`<h2>${title}</h2>
    <section class="anlaesse">${cards}</section>`;
};
