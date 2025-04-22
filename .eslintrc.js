module.exports = {
  extends: ['eslint-config-airbnb-base', './base.js', 'prettier', 'eslint-config-prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['test/temp'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.config.*', 'test/**/*'] },
    ],
  },
};
