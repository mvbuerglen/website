type ImageSize = { width: number; height: number };

const scale = (size: ImageSize, x: number): ImageSize => ({
  width: Math.floor(size.width / x),
  height: Math.floor(size.height / x),
});

const original: ImageSize = {
  width: 1536,
  height: 725,
};

export const aspectRatio = `${original.width}/${original.height}`;

export const sizes = {
  large: original,
  medium: scale(original, 1.5),
  small: scale(original, 2.4),
} satisfies Record<string, ImageSize>;
