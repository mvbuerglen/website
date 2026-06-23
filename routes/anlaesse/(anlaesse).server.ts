import { htmlToResponse } from "@mastrojs/mastro";
import { Anlaesse } from "#components/Anlaesse.ts";
import { Layout } from "#components/Layout.ts";

export const GET = async (_req: Request) => {
  return htmlToResponse(
    Layout({
      title: "Anlässe",
      children: [
        Anlaesse({ mode: "upcoming", title: "Nächste Anlässe" }),
        Anlaesse({ mode: "past", title: "Vergangene Anlässe" }),
      ],
    }),
  );
};
