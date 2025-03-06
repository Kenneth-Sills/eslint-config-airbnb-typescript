const { FlatCompat } = require('@eslint/eslintrc');
const sharedFlat = require('./lib/shared-flat');
const reactFlat = require('./lib/react-flat');
const reactConfig = require('./lib/react');

const compat = new FlatCompat();

// This file adds some React specific settings. Not using React? Use base.js instead.
module.exports = {
  extends: ['./lib/shared'].map((path) => require.resolve(path)),
  ...reactConfig,
};

const configs = {
  react: [...compat.extends('eslint-config-airbnb'), ...sharedFlat, reactFlat],
};

// Make configs non-enumerable to keep legacy eslintrc compatibility
Object.defineProperty(module.exports, 'configs', {
  value: configs,
  configurable: true,
  enumerable: false,
  writable: true,
});
