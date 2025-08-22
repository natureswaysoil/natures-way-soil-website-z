import next from "eslint-config-next";
import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["node_modules", ".next", "dist"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    extends: [
      js.configs.recommended,
      ...next(), // Next.js recommended rules
    ],
    rules: {
      // Example custom rules (safe defaults)
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "@next/next/no-img-element": "off", // Allow <img> tags
    },
  },
];
