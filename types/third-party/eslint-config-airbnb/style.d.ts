declare module 'eslint-config-airbnb-base/rules/style' {
  const config: {
    readonly rules: {
      readonly 'array-bracket-newline': readonly ['off', 'consistent'];
      readonly 'array-element-newline': readonly [
        'off',
        {
          readonly multiline: true;
          readonly minItems: 3;
        },
      ];
      readonly 'array-bracket-spacing': readonly ['error', 'never'];
      readonly 'block-spacing': readonly ['error', 'always'];
      readonly 'brace-style': readonly [
        'error',
        '1tbs',
        {
          readonly allowSingleLine: true;
        },
      ];
      readonly camelcase: readonly [
        'error',
        {
          readonly properties: 'never';
          readonly ignoreDestructuring: false;
        },
      ];
      readonly 'capitalized-comments': readonly [
        'off',
        'never',
        {
          readonly line: {
            readonly ignorePattern: '.*';
            readonly ignoreInlineComments: true;
            readonly ignoreConsecutiveComments: true;
          };
          readonly block: {
            readonly ignorePattern: '.*';
            readonly ignoreInlineComments: true;
            readonly ignoreConsecutiveComments: true;
          };
        },
      ];
      readonly 'comma-dangle': readonly [
        'error',
        {
          readonly arrays: 'always-multiline';
          readonly objects: 'always-multiline';
          readonly imports: 'always-multiline';
          readonly exports: 'always-multiline';
          readonly functions: 'always-multiline';
        },
      ];
      readonly 'comma-spacing': readonly [
        'error',
        {
          readonly before: false;
          readonly after: true;
        },
      ];
      readonly 'comma-style': readonly [
        'error',
        'last',
        {
          readonly exceptions: {
            readonly ArrayExpression: false;
            readonly ArrayPattern: false;
            readonly ArrowFunctionExpression: false;
            readonly CallExpression: false;
            readonly FunctionDeclaration: false;
            readonly FunctionExpression: false;
            readonly ImportDeclaration: false;
            readonly ObjectExpression: false;
            readonly ObjectPattern: false;
            readonly VariableDeclaration: false;
            readonly NewExpression: false;
          };
        },
      ];
      readonly 'computed-property-spacing': readonly ['error', 'never'];
      readonly 'consistent-this': 'off';
      readonly 'eol-last': readonly ['error', 'always'];
      readonly 'function-call-argument-newline': readonly ['error', 'consistent'];
      readonly 'func-call-spacing': readonly ['error', 'never'];
      readonly 'func-name-matching': readonly [
        'off',
        'always',
        {
          readonly includeCommonJSModuleExports: false;
          readonly considerPropertyDescriptor: true;
        },
      ];
      readonly 'func-names': 'warn';
      readonly 'func-style': readonly ['off', 'expression'];
      readonly 'function-paren-newline': readonly ['error', 'multiline-arguments'];
      readonly 'id-denylist': 'off';
      readonly 'id-length': 'off';
      readonly 'id-match': 'off';
      readonly 'implicit-arrow-linebreak': readonly ['error', 'beside'];
      readonly indent: readonly [
        'error',
        2,
        {
          readonly SwitchCase: 1;
          readonly VariableDeclarator: 1;
          readonly outerIIFEBody: 1;
          readonly FunctionDeclaration: {
            readonly parameters: 1;
            readonly body: 1;
          };
          readonly FunctionExpression: {
            readonly parameters: 1;
            readonly body: 1;
          };
          readonly CallExpression: {
            readonly arguments: 1;
          };
          readonly ArrayExpression: 1;
          readonly ObjectExpression: 1;
          readonly ImportDeclaration: 1;
          readonly flatTernaryExpressions: false;
          readonly ignoredNodes: readonly [
            'JSXElement',
            'JSXElement > *',
            'JSXAttribute',
            'JSXIdentifier',
            'JSXNamespacedName',
            'JSXMemberExpression',
            'JSXSpreadAttribute',
            'JSXExpressionContainer',
            'JSXOpeningElement',
            'JSXClosingElement',
            'JSXFragment',
            'JSXOpeningFragment',
            'JSXClosingFragment',
            'JSXText',
            'JSXEmptyExpression',
            'JSXSpreadChild',
          ];
          readonly ignoreComments: false;
        },
      ];
      readonly 'jsx-quotes': readonly ['off', 'prefer-double'];
      readonly 'key-spacing': readonly [
        'error',
        {
          readonly beforeColon: false;
          readonly afterColon: true;
        },
      ];
      readonly 'keyword-spacing': readonly [
        'error',
        {
          readonly before: true;
          readonly after: true;
          readonly overrides: {
            readonly return: {
              readonly after: true;
            };
            readonly throw: {
              readonly after: true;
            };
            readonly case: {
              readonly after: true;
            };
          };
        },
      ];
      readonly 'line-comment-position': readonly [
        'off',
        {
          readonly position: 'above';
          readonly ignorePattern: '';
          readonly applyDefaultPatterns: true;
        },
      ];
      readonly 'linebreak-style': readonly ['error', 'unix'];
      readonly 'lines-between-class-members': readonly [
        'error',
        'always',
        {
          readonly exceptAfterSingleLine: false;
        },
      ];
      readonly 'lines-around-comment': 'off';
      readonly 'lines-around-directive': readonly [
        'error',
        {
          readonly before: 'always';
          readonly after: 'always';
        },
      ];
      readonly 'logical-assignment-operators': readonly [
        'off',
        'always',
        {
          readonly enforceForIfStatements: true;
        },
      ];
      readonly 'max-depth': readonly ['off', 4];
      readonly 'max-len': readonly [
        'error',
        100,
        2,
        {
          readonly ignoreUrls: true;
          readonly ignoreComments: false;
          readonly ignoreRegExpLiterals: true;
          readonly ignoreStrings: true;
          readonly ignoreTemplateLiterals: true;
        },
      ];
      readonly 'max-lines': readonly [
        'off',
        {
          readonly max: 300;
          readonly skipBlankLines: true;
          readonly skipComments: true;
        },
      ];
      readonly 'max-lines-per-function': readonly [
        'off',
        {
          readonly max: 50;
          readonly skipBlankLines: true;
          readonly skipComments: true;
          readonly IIFEs: true;
        },
      ];
      readonly 'max-nested-callbacks': 'off';
      readonly 'max-params': readonly ['off', 3];
      readonly 'max-statements': readonly ['off', 10];
      readonly 'max-statements-per-line': readonly [
        'off',
        {
          readonly max: 1;
        },
      ];
      readonly 'multiline-comment-style': readonly ['off', 'starred-block'];
      readonly 'multiline-ternary': readonly ['off', 'never'];
      readonly 'new-cap': readonly [
        'error',
        {
          readonly newIsCap: true;
          readonly newIsCapExceptions: readonly [];
          readonly capIsNew: false;
          readonly capIsNewExceptions: readonly [
            'Immutable.Map',
            'Immutable.Set',
            'Immutable.List',
          ];
        },
      ];
      readonly 'new-parens': 'error';
      readonly 'newline-after-var': 'off';
      readonly 'newline-before-return': 'off';
      readonly 'newline-per-chained-call': readonly [
        'error',
        {
          readonly ignoreChainWithDepth: 4;
        },
      ];
      readonly 'no-array-constructor': 'error';
      readonly 'no-bitwise': 'error';
      readonly 'no-continue': 'error';
      readonly 'no-inline-comments': 'off';
      readonly 'no-lonely-if': 'error';
      readonly 'no-mixed-operators': readonly [
        'error',
        {
          readonly groups: readonly [
            readonly ['%', '**'],
            readonly ['%', '+'],
            readonly ['%', '-'],
            readonly ['%', '*'],
            readonly ['%', '/'],
            readonly ['/', '*'],
            readonly ['&', '|', '<<', '>>', '>>>'],
            readonly ['==', '!=', '===', '!=='],
            readonly ['&&', '||'],
          ];
          readonly allowSamePrecedence: false;
        },
      ];
      readonly 'no-mixed-spaces-and-tabs': 'error';
      readonly 'no-multi-assign': readonly ['error'];
      readonly 'no-multiple-empty-lines': readonly [
        'error',
        {
          readonly max: 1;
          readonly maxBOF: 0;
          readonly maxEOF: 0;
        },
      ];
      readonly 'no-negated-condition': 'off';
      readonly 'no-nested-ternary': 'error';
      readonly 'no-new-object': 'error';
      readonly 'no-plusplus': 'error';
      readonly 'no-restricted-syntax': readonly [
        'error',
        {
          readonly selector: 'ForInStatement';
          readonly message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.';
        },
        {
          readonly selector: 'ForOfStatement';
          readonly message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.';
        },
        {
          readonly selector: 'LabeledStatement';
          readonly message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.';
        },
        {
          readonly selector: 'WithStatement';
          readonly message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.';
        },
      ];
      readonly 'no-spaced-func': 'off';
      readonly 'no-tabs': 'error';
      readonly 'no-ternary': 'off';
      readonly 'no-trailing-spaces': readonly [
        'error',
        {
          readonly skipBlankLines: false;
          readonly ignoreComments: false;
        },
      ];
      readonly 'no-underscore-dangle': readonly [
        'error',
        {
          readonly allow: readonly [];
          readonly allowAfterThis: false;
          readonly allowAfterSuper: false;
          readonly enforceInMethodNames: true;
        },
      ];
      readonly 'no-unneeded-ternary': readonly [
        'error',
        {
          readonly defaultAssignment: false;
        },
      ];
      readonly 'no-whitespace-before-property': 'error';
      readonly 'nonblock-statement-body-position': readonly [
        'error',
        'beside',
        {
          readonly overrides: {};
        },
      ];
      readonly 'object-curly-spacing': readonly ['error', 'always'];
      readonly 'object-curly-newline': readonly [
        'error',
        {
          readonly ObjectExpression: {
            readonly minProperties: 4;
            readonly multiline: true;
            readonly consistent: true;
          };
          readonly ObjectPattern: {
            readonly minProperties: 4;
            readonly multiline: true;
            readonly consistent: true;
          };
          readonly ImportDeclaration: {
            readonly minProperties: 4;
            readonly multiline: true;
            readonly consistent: true;
          };
          readonly ExportDeclaration: {
            readonly minProperties: 4;
            readonly multiline: true;
            readonly consistent: true;
          };
        },
      ];
      readonly 'object-property-newline': readonly [
        'error',
        {
          readonly allowAllPropertiesOnSameLine: true;
        },
      ];
      readonly 'one-var': readonly ['error', 'never'];
      readonly 'one-var-declaration-per-line': readonly ['error', 'always'];
      readonly 'operator-assignment': readonly ['error', 'always'];
      readonly 'operator-linebreak': readonly [
        'error',
        'before',
        {
          readonly overrides: {
            readonly '=': 'none';
          };
        },
      ];
      readonly 'padded-blocks': readonly [
        'error',
        {
          readonly blocks: 'never';
          readonly classes: 'never';
          readonly switches: 'never';
        },
        {
          readonly allowSingleLineBlocks: true;
        },
      ];
      readonly 'padding-line-between-statements': 'off';
      readonly 'prefer-exponentiation-operator': 'error';
      readonly 'prefer-object-spread': 'error';
      readonly 'quote-props': readonly [
        'error',
        'as-needed',
        {
          readonly keywords: false;
          readonly unnecessary: true;
          readonly numbers: false;
        },
      ];
      readonly quotes: readonly [
        'error',
        'single',
        {
          readonly avoidEscape: true;
        },
      ];
      readonly 'require-jsdoc': 'off';
      readonly semi: readonly ['error', 'always'];
      readonly 'semi-spacing': readonly [
        'error',
        {
          readonly before: false;
          readonly after: true;
        },
      ];
      readonly 'semi-style': readonly ['error', 'last'];
      readonly 'sort-keys': readonly [
        'off',
        'asc',
        {
          readonly caseSensitive: false;
          readonly natural: true;
        },
      ];
      readonly 'sort-vars': 'off';
      readonly 'space-before-blocks': 'error';
      readonly 'space-before-function-paren': readonly [
        'error',
        {
          readonly anonymous: 'always';
          readonly named: 'never';
          readonly asyncArrow: 'always';
        },
      ];
      readonly 'space-in-parens': readonly ['error', 'never'];
      readonly 'space-infix-ops': 'error';
      readonly 'space-unary-ops': readonly [
        'error',
        {
          readonly words: true;
          readonly nonwords: false;
          readonly overrides: {};
        },
      ];
      readonly 'spaced-comment': readonly [
        'error',
        'always',
        {
          readonly line: {
            readonly exceptions: readonly ['-', '+'];
            readonly markers: readonly ['=', '!', '/'];
          };
          readonly block: {
            readonly exceptions: readonly ['-', '+'];
            readonly markers: readonly ['=', '!', ':', '::'];
            readonly balanced: true;
          };
        },
      ];
      readonly 'switch-colon-spacing': readonly [
        'error',
        {
          readonly after: true;
          readonly before: false;
        },
      ];
      readonly 'template-tag-spacing': readonly ['error', 'never'];
      readonly 'unicode-bom': readonly ['error', 'never'];
      readonly 'wrap-regex': 'off';
    };
  };

  export = config;
}
