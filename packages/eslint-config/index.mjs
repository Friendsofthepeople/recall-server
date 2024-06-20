import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: {
      "@stylistic/js" : stylisticJs
    },
    rules: {
      '@stylistic/js/max-len': [
            'error',
            {
                code: 240
            }
        ],
        'no-console': 'off',
        '@stylistic/js/semi': [
            'error',
            'always'
        ],
        '@stylistic/js/quotes': [
            'warn',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ],
    }
  },
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["**/node_modules/**", "eslint.config.*", "jest.config.mjs"],
  }

];
