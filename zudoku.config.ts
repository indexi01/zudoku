import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  topNavigation: [
    { id: "docs", label: "Documentation" },
    { id: "api", label: "API Reference" },
  ],
  sidebar: {
    docs: [
      {
        type: "category",
        label: "Overview",
        items: ["docs/introduction", "docs/about"],
      },
    ],
  },
  redirects: [{ from: "/", to: "/docs/introduction" }],
  apis: {
    type: "file",
    input: "./apis/openapi.yaml",
    navigationId: "api",
  },
  docs: {
    files: "/pages/**/*.{md,mdx}",
  },
};

export default config;
