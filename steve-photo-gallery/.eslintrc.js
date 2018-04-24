const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    jest: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      'jsx': true
    }
  },
  rules: {
    /* Indentation */
    'no-mixed-spaces-and-tabs': ERROR,
    'indent': [ERROR, ERROR],
    /* Variable names */
    'camelcase': ERROR,
    /* Language constructs */
    'curly': ERROR,
    'eqeqeq': [ERROR, 'smart'],
    'func-style': [ERROR, 'expression'],
    /* Semicolons */
    'semi': ERROR,
    'no-extra-semi': ERROR,
    /* Padding & additional whitespace (perferred but optional) */
    'brace-style': [ERROR, '1tbs', { 'allowSingleLine': true }],
    'semi-spacing': WARN,
    'key-spacing': WARN,
    'block-spacing': WARN,
    'comma-spacing': WARN,
    'no-multi-spaces': WARN,
    'space-before-blocks': WARN,
    'keyword-spacing': [WARN, { 'before': true, 'after': true }],
    'space-infix-ops': WARN,
    /* Variable declaration */
    'one-var': [WARN, { 'uninitialized': 'always', 'initialized': 'never' }],
    /* Minuta */
    'comma-style': [ERROR, 'last'],
    'quotes': [WARN, 'single']
  }
};