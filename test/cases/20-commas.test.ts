import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript?tab=readme-ov-file#commas
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
      expectedError: 'comma-style', // TODO: should use @stylistic/comma-style
    },
    {
      // 20.2
      code: outdent`
        const hero = {
          firstName: 'Dana',
          lastName: 'Scully'
        };
      `,
      expectedError: '@stylistic/comma-dangle',
    },
    {
      // 20.2
      code: outdent`
        const heroes = [
          'Batman',
          'Superman'
        ];
      `,
      expectedError: '@stylistic/comma-dangle',
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
      expectedError: '@stylistic/comma-dangle',
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
      expectedError: '@stylistic/comma-dangle',
    },
  ],
);
