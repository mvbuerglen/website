import { defineConfig, presetWind, presetTypography, transformerDirectives } from "unocss";
import { type Theme, theme } from "unocss/preset-wind";

export default defineConfig<Theme>({
  presets: [
    presetWind({
      dark: "media",
    }),
    presetTypography(),
  ],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      accent1: theme.colors?.green!,
      accent2: theme.colors?.blue!,
    },
  },
  rules: [],
  shortcuts: {},
});
