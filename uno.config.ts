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
      primary: theme.colors?.cyan!,
    },
  },
  rules: [
    [
      /^filled-container$/,
      (_, { theme }) => ({
        width: "100%",
        /**
         * Filled container needs to have full width, but adjust horizontal padding to maintain
         * content at max width of 6xl (72rem) minus default spacing. It also should have at least
         * default spacing (1rem) as horizontal padding.
         */
        "padding-inline": `max(${theme.spacing?.DEFAULT}, calc((100% - ${theme.width?.["6xl"]}) / 2 + ${theme.spacing?.DEFAULT}))`,
      }),
    ],
  ],
  shortcuts: {
    "wide-container": "w-full max-w-6xl mx-auto px-4",
    heading: "font-light uppercase font-stretch-semi-condensed",
  },
});
