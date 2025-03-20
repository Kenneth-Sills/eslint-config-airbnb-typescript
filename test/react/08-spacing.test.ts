import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/tree/master/react#spacing
 */
runTests(
  'spacing',
  ['react'],
  [
    {
      code: '<Foo/>',
      ruleName: 'react/jsx-tag-spacing',
    },
    {
      code: '<Foo                 />',
      ruleName: 'no-multi-spaces', // TODO: should use @stylistic/no-multi-spaces
    },
    {
      code: '<Foo bar={ baz } />',
      ruleName: 'react/jsx-curly-spacing',
    },
  ],
);
