import globals from 'globals';
import pluginCypress from 'eslint-plugin-cypress/flat';
import pluginJs from '@eslint/js';
import pluginMocha from 'eslint-plugin-mocha';

export default [
  pluginJs.configs.recommended,
  pluginCypress.configs.globals,
  pluginMocha.configs.flat.recommended,
  {
    ignores: ['cypress.config.js', 'cypress/plugins/index.js'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    rules: {
      'func-names': ['off'],
      'mocha/no-hooks': 'off',
      'prefer-arrow-callback': 'off',
    },
  },
];
