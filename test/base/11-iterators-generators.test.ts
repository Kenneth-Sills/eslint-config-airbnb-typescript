import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/blob/master/README.md#iterators-and-generators
 */
runTests(
  'iterators-generators',
  ['base', 'react'],
  [
    {
      // 11.1
      code: outdent`
        const numbers = [1, 2, 3, 4, 5];
        let sum = 0;
        for (let num of numbers) {
          sum += num;
        }
        sum === 15;
      `,
      ruleName: 'no-restricted-syntax',
    },
    {
      // 11.1
      // No airbnb example for this rule
      code: outdent`
        Foo.prototype.__iterator__ = function() {
            return new FooIterator(this);
        }
      `,
      ruleName: 'no-iterator',
    },
    {
      // 11.3
      code: outdent`
        function * foo() {
          return true;
        }
      `,
      ruleName: 'generator-star-spacing', // TODO: should use @stylistic/generator-star-spacing
    },
  ],
);
