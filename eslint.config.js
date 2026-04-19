import js from '@eslint/js';
import globals from 'globals';
import sveltePlugin from 'eslint-plugin-svelte';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...sveltePlugin.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    rules: {
      'no-unused-vars': 'warn'
    }
  },
  prettierConfig
];
