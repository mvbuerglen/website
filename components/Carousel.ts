import { html } from "@mastrojs/mastro";
import { aspectRatio, sizes } from "#src/images.ts";

interface Props {
  // Image URLs.
  images: string[];
  // Auto-rotation interval in seconds.
  interval?: number;
}

interface ImageProps {
  src: string;
  alt?: string;
  // Full height will cover its container.
  // Auto height will retain image aspect ratio.
  height?: "auto" | "full";
}

function imagePath(src: string, size: keyof typeof sizes = "large"): string {
  const slug = src.toLowerCase().replace(/\/content\/images\//, "");
  return `/_images/${size}/${slug}.webp`;
}

export const CoverImage = ({ src, alt = "", height }: ImageProps) => {
  const hClass = height === "full" ? "h-full" : "h-auto";
  const srcSmall = imagePath(src, "small");
  const srcMedium = imagePath(src, "medium");
  const srcLarge = imagePath(src, "large");
  return html`<img
    src="${srcLarge}"
    srcset="
      ${srcSmall} ${sizes.small.width}w,
      ${srcMedium} ${sizes.medium.width}w,
      ${srcLarge} ${sizes.large.width}w"
    alt="${alt}"
    class="wide-image ${hClass}"
    loading="lazy"
    decoding="async"
    width="${sizes.large.width}"
    height="${sizes.large.height}"
  />`;
};

export const Carousel = async ({ images, interval = 5 }: Props) => {
  if (!images.length) {
    return [];
  }

  if (images.length === 1 && images[0]) {
    return CoverImage({ src: images[0] });
  }

  return html`<div class="carousel wide-image" data-interval="${interval}">
      <ul class="items no-scrollbar">
        ${images.map(
          (image) =>
            html`<li class="wide-image" style="aspect-ratio: ${aspectRatio}">
              ${CoverImage({ src: image, height: "full" })}
            </li>`,
        )}
      </ul>
    </div>
    <script type="module" src="/carousel.client.js"></script>`;
};
