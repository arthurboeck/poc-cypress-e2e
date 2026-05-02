import globals from 'globals';
import pluginCypress from 'eslint-plugin-cypress';
import pluginJs from '@eslint/js';
import pluginMocha from 'eslint-plugin-mocha';

export default [
  pluginJs.configs.recommended,
  pluginMocha.configs.recommended,
  {
    ignores: ['cypress.config.js', 'cypress/plugins/index.js'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...pluginCypress.configs.globals.languageOptions.globals,
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
