const tsEslintPlugin = require('@typescript-eslint/eslint-plugin');
const parserBase = require('@typescript-eslint/parser');
const stylistic = require('@stylistic/eslint-plugin');
const eslintPluginImport = require('eslint-plugin-import');

const {
  settings: sharedSettings,
  rules: sharedRules,
  overrides: sharedOverrides,
} = require('./shared');

module.exports = [
  {
    name: 'airbnb-typescript',
    languageOptions: {
      parser: {
        meta: parserBase.meta,
        parseForESLint: parserBase.parseForESLint,
      },
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tsEslintPlugin,
      '@stylistic': stylistic,
      import: eslintPluginImport,
    },
    settings: sharedSettings,
    rules: sharedRules,
  },
  {
    name: 'airbnb-typescript-ts-overrides',
    ...sharedOverrides[0],
  },
];
