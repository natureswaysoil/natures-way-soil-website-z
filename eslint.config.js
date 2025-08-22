import next from "eslint-config-next";
import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["node_modules", ".next", "dist"],
  },
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
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
      ...next()
    ],
    rules: {
      "react/react-in-jsx-scope": "off",
      "@next/next/no-img-element": "off"
    },
  },
];
