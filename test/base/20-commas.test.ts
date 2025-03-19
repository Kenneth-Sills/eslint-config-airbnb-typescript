import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/blob/master/README.md#commas
 */
runTests(
  'commas',
  ['base', 'react'],
  [
    {
      // 20.1
      code: outdent`
        const story = [
            once
          , upon
          , aTime
        ];
      `,
      ruleName: 'comma-style', // TODO: should use @stylistic/comma-style
    },
    {
      // 20.2
      code: outdent`
        const hero = {
          firstName: 'Dana',
          lastName: 'Scully'
        };
      `,
      ruleName: '@stylistic/comma-dangle',
    },
    {
      // 20.2
      code: outdent`
        const heroes = [
          'Batman',
          'Superman'
        ];
      `,
      ruleName: '@stylistic/comma-dangle',
    },
    {
      // 20.2
      code: outdent`
        function createHero(
          firstName,
          lastName,
          inventorOf
        ) {
          // does nothing
        }
      `,
      ruleName: '@stylistic/comma-dangle',
    },
    {
      // 20.2
      code: outdent`
        createHero(
          firstName,
          lastName,
          inventorOf
        );
      `,
      ruleName: '@stylistic/comma-dangle',
    },
  ],
);
