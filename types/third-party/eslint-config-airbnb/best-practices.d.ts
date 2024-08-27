declare module 'eslint-config-airbnb-base/rules/best-practices' {
  const config: {
    rules: {
      readonly 'accessor-pairs': 'off';
      readonly 'array-callback-return': readonly [
        'error',
        {
          readonly allowImplicit: true;
        },
      ];
      readonly 'block-scoped-var': 'error';
      readonly complexity: readonly ['off', 20];
      readonly 'class-methods-use-this': readonly [
        { foo: 'bar' },
        {
          readonly exceptMethods: readonly [];
        },
      ];
      readonly 'consistent-return': 'error';
      readonly curly: readonly ['error', 'multi-line'];
      readonly 'default-case': readonly [
        'error',
        {
          readonly commentPattern: '^no default$';
        },
      ];
      readonly 'default-case-last': 'error';
      readonly 'default-param-last': 'error';
      readonly 'dot-notation': readonly [
        'error',
        {
          readonly allowKeywords: true;
        },
      ];
      readonly 'dot-location': readonly ['error', 'property'];
      readonly eqeqeq: readonly [
        'error',
        'always',
        {
          readonly null: 'ignore';
        },
      ];
      readonly 'grouped-accessor-pairs': 'error';
      readonly 'guard-for-in': 'error';
      readonly 'max-classes-per-file': readonly ['error', 1];
      readonly 'no-alert': 'warn';
      readonly 'no-caller': 'error';
      readonly 'no-case-declarations': 'error';
      readonly 'no-constructor-return': 'error';
      readonly 'no-div-regex': 'off';
      readonly 'no-else-return': readonly [
        'error',
        {
          readonly allowElseIf: false;
        },
      ];
      readonly 'no-empty-function': readonly [
        'error',
        {
          readonly allow: readonly ['arrowFunctions', 'functions', 'methods'];
        },
      ];
      readonly 'no-empty-pattern': 'error';
      readonly 'no-empty-static-block': 'off';
      readonly 'no-eq-null': 'off';
      readonly 'no-eval': 'error';
      readonly 'no-extend-native': 'error';
      readonly 'no-extra-bind': 'error';
      readonly 'no-extra-label': 'error';
      readonly 'no-fallthrough': 'error';
      readonly 'no-floating-decimal': 'error';
      readonly 'no-global-assign': readonly [
        'error',
        {
          readonly exceptions: readonly [];
        },
      ];
      readonly 'no-native-reassign': 'off';
      readonly 'no-implicit-coercion': readonly [
        'off',
        {
          readonly boolean: false;
          readonly number: true;
          readonly string: true;
          readonly allow: readonly [];
        },
      ];
      readonly 'no-implicit-globals': 'off';
      readonly 'no-implied-eval': 'error';
      readonly 'no-invalid-this': 'off';
      readonly 'no-iterator': 'error';
      readonly 'no-labels': readonly [
        'error',
        {
          readonly allowLoop: false;
          readonly allowSwitch: false;
        },
      ];
      readonly 'no-lone-blocks': 'error';
      readonly 'no-loop-func': 'error';
      readonly 'no-magic-numbers': readonly [
        'off',
        {
          readonly ignore: readonly [];
          readonly ignoreArrayIndexes: true;
          readonly enforceConst: true;
          readonly detectObjects: false;
        },
      ];
      readonly 'no-multi-spaces': readonly [
        'error',
        {
          readonly ignoreEOLComments: false;
        },
      ];
      readonly 'no-multi-str': 'error';
      readonly 'no-new': 'error';
      readonly 'no-new-func': 'error';
      readonly 'no-new-wrappers': 'error';
      readonly 'no-nonoctal-decimal-escape': 'error';
      readonly 'no-object-constructor': 'off';
      readonly 'no-octal': 'error';
      readonly 'no-octal-escape': 'error';
      readonly 'no-param-reassign': readonly [
        'error',
        {
          readonly props: true;
          readonly ignorePropertyModificationsFor: readonly [
            'acc',
            'accumulator',
            'e',
            'ctx',
            'context',
            'req',
            'request',
            'res',
            'response',
            '$scope',
            'staticContext',
          ];
        },
      ];
      readonly 'no-proto': 'error';
      readonly 'no-redeclare': 'error';
      readonly 'no-restricted-properties': readonly [
        'error',
        {
          readonly object: 'arguments';
          readonly property: 'callee';
          readonly message: 'arguments.callee is deprecated';
        },
        {
          readonly object: 'global';
          readonly property: 'isFinite';
          readonly message: 'Please use Number.isFinite instead';
        },
        {
          readonly object: 'self';
          readonly property: 'isFinite';
          readonly message: 'Please use Number.isFinite instead';
        },
        {
          readonly object: 'window';
          readonly property: 'isFinite';
          readonly message: 'Please use Number.isFinite instead';
        },
        {
          readonly object: 'global';
          readonly property: 'isNaN';
          readonly message: 'Please use Number.isNaN instead';
        },
        {
          readonly object: 'self';
          readonly property: 'isNaN';
          readonly message: 'Please use Number.isNaN instead';
        },
        {
          readonly object: 'window';
          readonly property: 'isNaN';
          readonly message: 'Please use Number.isNaN instead';
        },
        {
          readonly property: '__defineGetter__';
          readonly message: 'Please use Object.defineProperty instead.';
        },
        {
          readonly property: '__defineSetter__';
          readonly message: 'Please use Object.defineProperty instead.';
        },
        {
          readonly object: 'Math';
          readonly property: 'pow';
          readonly message: 'Use the exponentiation operator (**) instead.';
        },
      ];
      readonly 'no-return-assign': readonly ['error', 'always'];
      readonly 'no-return-await': 'error';
      readonly 'no-script-url': 'error';
      readonly 'no-self-assign': readonly [
        'error',
        {
          readonly props: true;
        },
      ];
      readonly 'no-self-compare': 'error';
      readonly 'no-sequences': 'error';
      readonly 'no-throw-literal': 'error';
      readonly 'no-unmodified-loop-condition': 'off';
      readonly 'no-unused-expressions': readonly [
        'error',
        {
          readonly allowShortCircuit: false;
          readonly allowTernary: false;
          readonly allowTaggedTemplates: false;
        },
      ];
      readonly 'no-unused-labels': 'error';
      readonly 'no-useless-call': 'off';
      readonly 'no-useless-catch': 'error';
      readonly 'no-useless-concat': 'error';
      readonly 'no-useless-escape': 'error';
      readonly 'no-useless-return': 'error';
      readonly 'no-void': 'error';
      readonly 'no-warning-comments': readonly [
        'off',
        {
          readonly terms: readonly ['todo', 'fixme', 'xxx'];
          readonly location: 'start';
        },
      ];
      readonly 'no-with': 'error';
      readonly 'prefer-promise-reject-errors': readonly [
        'error',
        {
          readonly allowEmptyReject: true;
        },
      ];
      readonly 'prefer-named-capture-group': 'off';
      readonly 'prefer-object-has-own': 'off';
      readonly 'prefer-regex-literals': readonly [
        'error',
        {
          readonly disallowRedundantWrapping: true;
        },
      ];
      readonly radix: 'error';
      readonly 'require-await': 'off';
      readonly 'require-unicode-regexp': 'off';
      readonly 'vars-on-top': 'error';
      readonly 'wrap-iife': readonly [
        'error',
        'outside',
        {
          readonly functionPrototypeMethods: false;
        },
      ];
      readonly yoda: 'error';
    };
  };

  export = config;
}
