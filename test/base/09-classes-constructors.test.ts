import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/blob/master/README.md#classes--constructors
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
      ruleName: '@typescript-eslint/no-useless-constructor',
    },
    {
      // 9.6
      code: outdent`
        class Foo {
          bar() { return 1; }
          bar() { return 2; }
        }
      `,
      ruleName: 'no-dupe-class-members',
      skipReason: 'covered by typescript',
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
      ruleName: '@typescript-eslint/class-methods-use-this',
    },
  ],
);
