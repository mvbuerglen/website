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
    width: {
      "8xl": "96rem",
    },
    maxWidth: {
      "8xl": "96rem",
    },
    boxShadow: {
      DEFAULT: "var(--un-shadow-inset) 0 2px 16px 4px rgb(0 0 0 / 0.1)",
      sm: "var(--un-shadow-inset) 0 2px 16px -2px rgb(0 0 0 / 0.1)",
    },
  },
  rules: [
    [
      /^wide-container$/,
      (_, { theme }) => ({
        width: `min(${theme.width?.["6xl"]}, calc(100vw - 2 * ${theme.spacing?.DEFAULT}))`,
        "margin-inline": "auto",
      }),
    ],
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
    [
      /^wide-image$/,
      (_, { theme }) => ({
        "max-width": `min(${theme.width?.["8xl"]}, 100%)`,
        width: "auto",
        height: "auto",
        "margin-inline": "auto",
        "object-fit": "contain",
      }),
    ],
  ],
  shortcuts: {
    heading: "font-light uppercase font-stretch-semi-condensed",
    "overlay-link": "after:absolute after:content-empty after:inset-0 after:z-1",
  },
});
