import ssr from "vite-plugin-ssr/plugin";
import type { UserConfig } from "vite";
import { ExperimentalCompileIncludePlugin } from "compile-include-html";
import vercel from "vite-plugin-vercel";
import vercelSsr from "@magne4000/vite-plugin-vercel-ssr";

export default {
  plugins: [
    ssr({
      includeAssetsImportedByServer: true,
    }),
    vercel(),
    vercelSsr(),
    ExperimentalCompileIncludePlugin(),
  ],
} as UserConfig;
