import outdent from 'outdent';
import { runTests } from '../utils/runner';

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
      // Airbnb's example doesn't get caught by the rule
      code: outdent`
          Object.assign({}, {foo: 'bar'});
        `,
      expectedError: 'prefer-object-spread',
    },
  ],
);
