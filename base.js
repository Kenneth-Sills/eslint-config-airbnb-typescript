module.exports = {
  extends: ['./lib/shared.js'].map((path) => require.resolve(path)),
};
