import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/tree/master?tab=readme-ov-file#functions
 */
runTests(
  'functions',
  ['base', 'react'],
  [
    {
      // 7.1
      code: outdent`
        function foo() {
          return true;
        }
      `,
      ruleName: 'func-style',
      skipReason: 'Disabled in airbnb-base', // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js#L101
    },
    {
      // 7.1
      code: outdent`
        const foo = function () {
          return true;
        }
      `,
      ruleName: 'func-names',
    },
    {
      // 7.2
      code: 'const x = function () { return { y: 1 };}();',
      ruleName: 'wrap-iife',
    },
    {
      // 7.3
      code: outdent`
        for (var i = 0; i < 10; i++) {
            funcs[i] = function() {
                return i;
            };
        }
      `,
      ruleName: '@typescript-eslint/no-loop-func',
    },
    {
      // 7.6
      code: outdent`
        function concatenateAll() {
          const args = Array.prototype.slice.call(arguments);
          return args.join('');
        }
      `,
      ruleName: 'prefer-rest-params',
    },
    {
      // 7.9
      code: outdent`
        function handleThings(opts = {}, name) {
          return true;
        }
      `,
      ruleName: '@typescript-eslint/default-param-last',
    },
    {
      // 7.10
      code: `const add = new Function('a', 'b', 'return a + b');`,
      ruleName: '@typescript-eslint/no-implied-eval',
    },
    {
      // 7.11
      code: 'const f = function(){};',
      ruleName: '@stylistic/space-before-function-paren',
    },
    {
      // 7.11
      code: 'const h = function() {};',
      ruleName: '@stylistic/space-before-function-paren',
    },
    {
      // 7.11
      code: 'const g = function (){};',
      ruleName: '@stylistic/space-before-blocks',
    },
    {
      // 7.12
      code: outdent`
        function f1(obj) {
          obj.key = 1;
        }
      `,
      ruleName: 'no-param-reassign',
    },
    {
      // 7.13
      code: outdent`
        function f1(a) {
          a = 1;
          return true;
        }
      `,
      ruleName: 'no-param-reassign',
    },
    {
      // 7.14
      code: outdent`
        const x = [1, 2, 3, 4, 5];
        console.log.apply(console, x);
      `,
      ruleName: 'prefer-spread',
    },
    {
      // 7.15
      code: outdent`
        function foo(bar,
             baz,
             quux) {
          return true;
        }
      `,
      ruleName: 'function-paren-newline',
    },
  ],
);
