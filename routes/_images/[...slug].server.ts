import { getParams, readDir } from "@mastrojs/mastro";
import sharp from "sharp";
import { sizes } from "#src/images.ts";

const baseDir = "content/images";

export const GET = async (req: Request) => {
  const { slug } = getParams(req);
  const [size, name] = slug?.split("/") ?? [];
  if (!size || !name || !(size in sizes)) {
    return new Response(null, { status: 404 });
  }
  const pickedSize = sizes[size as keyof typeof sizes];
  const origName = name.replace(/\.webp$/, "");
  const img = await sharp(`${baseDir}/${origName}`)
    .resize({
      width: pickedSize.width,
      height: pickedSize.height,
    })
    .webp()
    .toUint8Array();
  return new Response(img.data as Uint8Array<ArrayBuffer>, {
    status: 200,
    headers: {
      "Content-Type": "image/webp",
    },
  });
};

export const getStaticPaths = async () => {
  const files = await readDir(baseDir);
  return files.flatMap((f) => {
    const m = f.toLowerCase().match(/^(.*)\.(jpg|jpeg|png|webp)$/);
    if (!m) {
      return [];
    }
    return Object.keys(sizes).map((s) => `/_images/${s}/${m[0]}.webp`);
  });
};
