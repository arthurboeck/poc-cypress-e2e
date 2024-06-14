import globals from "globals";
import pluginCypress from 'eslint-plugin-cypress/flat';
import pluginJs from "@eslint/js";
import pluginMocha from 'eslint-plugin-mocha';

export default [
    pluginJs.configs.all,
    pluginCypress.configs.globals,
    pluginMocha.configs.flat.all,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            }
        }
    }
];