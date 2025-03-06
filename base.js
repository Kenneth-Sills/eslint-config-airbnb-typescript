const { FlatCompat } = require('@eslint/eslintrc');
const sharedFlat = require('./lib/shared-flat');

const compat = new FlatCompat();

module.exports = {
  extends: ['./lib/shared.js'].map((path) => require.resolve(path)),
};

const configs = {
  base: [...compat.extends('eslint-config-airbnb-base'), ...sharedFlat],
};

// Make configs non-enumerable to keep legacy eslintrc compatibility
Object.defineProperty(module.exports, 'configs', {
  value: configs,
  configurable: true,
  enumerable: false,
  writable: true,
});
