import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/tree/master/react#quotes
 */
runTests(
  'quotes',
  ['react'],
  [
    {
      code: `<Foo bar='bar' />`,
      ruleName: 'jsx-quotes', // TODO: should use @stylistic/jsx-quotes
    },
  ],
);
