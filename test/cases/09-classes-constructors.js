const outdent = require('outdent');
const runTests = require('../utils/runner');

/**
 * https://github.com/airbnb/javascript?tab=readme-ov-file#classes--constructors
 */
runTests(
  'classes-constructors',
  ['base', 'react'],
  [
    {
      // 9.5
      code: outdent`
        class Jedi {
          constructor() {}

          getName() {
              return this.name;
          }
        }
      `,
      expectedError: '@typescript-eslint/no-useless-constructor',
    },
    {
      // 9.6
      code: outdent`
        class Foo {
          bar() { return 1; }
          bar() { return 2; }
        }
      `,
      expectedError: 'no-dupe-class-members',
      skip: true, // covered by typescript
    },
    {
      // 9.7
      code: outdent`
        class Foo {
          bar() {
            console.log('bar');
          }
        }
      `,
      expectedError: '@typescript-eslint/class-methods-use-this',
    },
  ],
);
