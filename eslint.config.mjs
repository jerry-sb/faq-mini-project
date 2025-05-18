import { FlatCompat } from "@eslint/eslintrc";
import pluginImport from "eslint-plugin-import";
import pluginPrettier from "eslint-plugin-prettier";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import { dirname } from "path";
import { fileURLToPath } from "url";

import prettierConfig from "./prettier.config.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
   baseDirectory: __dirname,
});

export default [
   ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
   {
      plugins: {
         import: pluginImport,
         prettier: pluginPrettier,
         "simple-import-sort": pluginSimpleImportSort,
      },
      rules: {
         "simple-import-sort/imports": "error",
         "simple-import-sort/exports": "error",

         "sort-imports": [
            "off",
            {
               ignoreCase: false,
               ignoreDeclarationSort: true,
               ignoreMemberSort: false,
            },
         ],
         "prettier/prettier": ["error", prettierConfig],
      },
   },
];
