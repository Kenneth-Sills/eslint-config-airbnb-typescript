import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/blob/master/README.md#modules
 */
runTests(
  'modules',
  ['base', 'react'],
  [
    {
      // 10.4
      code: outdent`
        import foo from 'foo';
        import { named1, named2 } from 'foo';
      `,
      ruleName: 'import/no-duplicates', // airbnb docs list no-duplicate-imports incorrectly
    },
    {
      // 10.5
      code: outdent`
        let foo = 3;
        export { foo };
      `,
      ruleName: 'import/no-mutable-exports',
    },
    {
      // 10.6
      code: 'export function foo() {}',
      ruleName: 'import/prefer-default-export',
    },
    {
      // 10.7
      code: outdent`
        import foo from 'foo';
        foo.init();
        import bar from 'bar';
      `,
      ruleName: 'import/first',
    },
    {
      // 10.8
      code: `import {longNameA, longNameB, longNameC, longNameD, longNameE} from 'path';`,
      ruleName: 'object-curly-newline', // TODO: should use @stylistic/object-curly-newline
    },
    {
      // 10.9
      code: outdent`
        import fooSass from 'css!sass!foo.scss';
        import barCss from 'style!css!bar.css';
      `,
      ruleName: 'import/no-webpack-loader-syntax',
    },
    {
      // 10.10
      code: outdent`
        import foo from './foo.js';
        import bar from './bar.jsx';
        import baz from './baz/index.jsx';
      `,
      ruleName: 'import/extensions',
    },
  ],
);
