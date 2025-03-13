const outdent = require('outdent');
const runTests = require('../utils/runner');

/**
 * https://github.com/airbnb/javascript?tab=readme-ov-file#objects
 */
runTests(
  'objects',
  ['base', 'react'],
  [
    {
      // 3.1
      code: 'const item = new Object();',
      expectedError: 'no-new-object',
    },
    {
      // 3.3
      code: outdent`
          const atom = {
            value: 1,

            addValue: function (value) {
              return atom.value + value;
            },
          };
        `,
      expectedError: 'object-shorthand',
    },
    {
      // 3.4
      code: outdent`
          const lukeSkywalker = 'Luke Skywalker';
          const obj = {
            lukeSkywalker: lukeSkywalker,
          };
        `,
      expectedError: 'object-shorthand',
    },
    {
      // 3.6
      code: outdent`
          const bad = {
            'foo': 3,
            'bar': 4,
            'data-blah': 5,
          };
        `,
      expectedError: 'quote-props',
    },
    {
      // 3.7
      code: outdent`
            object.hasOwnProperty(key);
        `,
      expectedError: 'no-prototype-builtins',
    },
    {
      // 3.8
      code: outdent`
          const original = { a: 1, b: 2 };
          const copy = Object.assign(original, { c: 3 });
          delete copy.a;
        `,
      expectedError: 'prefer-object-spread',
      skip: true,
    },
  ],
);
