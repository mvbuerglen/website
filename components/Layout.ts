import { type Html, html } from "@mastrojs/mastro";
import { Carousel } from "./Carousel.ts";
import { Logo } from "./Logo.ts";

interface Props {
  title?: string | undefined;
  bild?: string[] | undefined;
  children: Html;
}

export const Layout = ({
  title = "Musikverein Bürglen",
  bild = ["/content/images/winterkonzert-2023.jpg"],
  children,
}: Props) =>
  html`<!doctype html>
    <html lang="de-CH">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>${title}</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <header class="wide-container">
          ${Logo()}
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/anlaesse/">Anlässe</a></li>
              <li><a href="/probeplan/">Probeplan</a></li>
              <li><a href="/verein/">Verein</a></li>
              <li><a href="/kontakt/">Kontakt</a></li>
            </ul>
          </nav>
        </header>
        ${Carousel({
          // image from Markdown can be an empty string:
          images: bild.filter((s) => s.length),
        })}
        <main class="wide-container">${children}</main>
        <footer class="filled-container invert-colors">
          <section>
            <h3>Musikverein Bürglen</h3>
            <p>6463 Bürglen UR</p>
            <p>E-Mail: <a href="mailto:mvb@mv-buerglen.ch">mvb@mv-buerglen.ch</a></p>
          </section>
          <section>
            <nav>
              <ul>
                <li><a href="/kontakt/">Kontakt</a></li>
                <li><a href="/impressum/">Impressum</a></li>
              </ul>
            </nav>
          </section>
        </footer>
      </body>
    </html>`;
