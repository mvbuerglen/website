import type { ImageMetadata } from "astro";

const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/*.{jpeg,jpg,png,gif}",
);

export async function getImage(src: string): Promise<ImageMetadata> {
  const imageGetter = images[src];
  if (!imageGetter) {
    throw new Error(`Image ${src} not found.`);
  }
  const { default: image } = await imageGetter();
  return image;
}
