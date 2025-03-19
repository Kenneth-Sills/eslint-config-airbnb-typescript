import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript?tab=readme-ov-file#whitespace
 */
runTests(
  'whitespace',
  ['base', 'react'],
  [
    {
      // 19.1
      code: outdent`
        function foo() {
            let name;
        }
      `,
      expectedError: '@stylistic/indent',
    },
    {
      // 19.2
      code: outdent`
        function test(){
          console.log('test');
        }
      `,
      expectedError: '@stylistic/space-before-blocks',
    },
    {
      // 19.3
      code: outdent`
        if(isJedi) {
          fight ();
        }
      `,
      expectedError: '@stylistic/keyword-spacing',
    },
    {
      // 19.4
      code: 'const x=y+5;',
      expectedError: '@stylistic/space-infix-ops',
    },
    {
      // 19.5
      code: outdent`
        import { es6 } from './AirbnbStyleGuide';
        export default es6;
      `,
      expectedError: 'eol-last', // TODO: should use @stylistic/eol-last
    },
    {
      // 19.6
      code: `$('#items').find('.selected').highlight().end().find('.open').updateCount();`,
      expectedError: 'newline-per-chained-call', // TODO: should use @stylistic/newline-per-chained-call
    },
    {
      // 19.6
      // No airbnb example for this rule
      code: 'foo. bar .baz . quz;',
      expectedError: 'no-whitespace-before-property', // TODO: should use @stylistic/no-whitespace-before-property
    },
    {
      // 19.8
      code: outdent`
        function bar() {

          console.log(foo);

        }
      `,
      expectedError: 'padded-blocks', // TODO: should use @stylistic/padded-blocks
    },
    {
      // 19.9
      code: outdent`
        class Person {
          constructor(fullName, email, birthday) {
            this.fullName = fullName;


            this.email = email;


            this.setAge(birthday);
          }


          setAge(birthday) {
            const today = new Date();


            const age = this.getAge(today, birthday);


            this.age = age;
          }


          getAge(today, birthday) {
            return true;
          }
        }
      `,
      expectedError: 'no-multiple-empty-lines', // TODO: should use @stylistic/no-multiple-empty-lines
    },
    {
      // 19.10
      code: outdent`
        function bar( foo ) {
          return foo;
        }
      `,
      expectedError: 'space-in-parens', // TODO: should use @stylistic/space-in-parens
    },
    {
      // 19.11
      code: outdent`
        const foo = [ 1, 2, 3 ];
        console.log(foo[ 0 ]);
      `,
      expectedError: 'array-bracket-spacing', // TODO: should use @stylistic/array-bracket-spacing
    },
    {
      // 19.12
      code: `const foo = {clark: 'kent'};`,
      expectedError: '@stylistic/object-curly-spacing',
    },
    {
      // 19.13
      code: 'const foo = jsonData && jsonData.foo && jsonData.foo.bar && jsonData.foo.bar.baz && jsonData.foo.bar.baz.quux && jsonData.foo.bar.baz.quux.xyzzy;',
      expectedError: 'max-len', // TODO: should use @stylistic/max-len
    },
    {
      // 19.14
      code: outdent`
        function foo() {return true;}
        if (foo) { bar = 0;}
      `,
      expectedError: 'block-spacing', // TODO: should use @stylistic/block-spacing
    },
    {
      // 19.15
      code: 'const foo = 1,bar = 2;',
      expectedError: '@stylistic/comma-spacing',
    },
    {
      // 19.16
      code: 'obj[foo ]',
      expectedError: 'computed-property-spacing', // TODO: should use @stylistic/computed-property-spacing
    },
    {
      // 19.17
      code: 'func ();',
      expectedError: '@stylistic/func-call-spacing',
    },
    {
      // 19.18
      code: 'const obj = { foo : 42 };',
      expectedError: 'key-spacing', // TODO: should use @stylistic/key-spacing
    },
    {
      // 19.19
      // No airbnb example for this rule
      code: 'var foo = 0;     ',
      expectedError: 'no-trailing-spaces', // TODO: should use @stylistic/no-trailing-spaces
    },
    {
      // 19.20
      code: outdent`
        const x = 1;


        const y = 2;
      `,
      expectedError: 'no-multiple-empty-lines', // TODO: should use @stylistic/no-multiple-empty-lines
    },
  ],
);
