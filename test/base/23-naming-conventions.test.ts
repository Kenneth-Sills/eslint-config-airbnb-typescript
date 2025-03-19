import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/blob/master/README.md#naming-conventions
 */
runTests(
  'naming-conventions',
  ['base', 'react'],
  [
    {
      // 23.1
      code: outdent`
        function q() {
          // ...
        }`,
      ruleName: 'id-length',
      skipReason: 'Removed in airbnb-base', // https://github.com/airbnb/javascript/pull/569
    },
    {
      // 23.2
      code: outdent`
        const OBJEcttsssss = {};
        const this_is_my_object = {};
        function c() {}
      `,
      ruleName: '@typescript-eslint/naming-convention',
    },
    {
      // 23.3
      code: outdent`
        function user(options) {
          this.name = options.name;
        }

        const bad = new user({
          name: 'nope',
        });
      `,
      ruleName: 'new-cap',
    },
    {
      // 23.4
      code: outdent`
        this.__firstName__ = 'Panda';
        this.firstName_ = 'Panda';
        this._firstName = 'Panda';
      `,
      ruleName: 'no-underscore-dangle',
    },
  ],
);
