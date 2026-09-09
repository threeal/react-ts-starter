import eslintReact from "@eslint-react/eslint-plugin";
import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
  globalIgnores(["dist"]),
  js.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  eslintReact.configs["strict-type-checked"],
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
);
