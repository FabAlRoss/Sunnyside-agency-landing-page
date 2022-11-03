module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    mocha: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/base',
    'plugin:vue/recommended',
    'airbnb-base',
  ],
  plugins: [
    'vue',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 13,
  },
  rules: {
    'no-alert': 'off',
    'linebreak-style': ['error', 'windows'],
    'no-console': 'off',
    'function-paren-newline': ['error', 'multiline'],
    'consistent-return': 'error',
    'max-len': 'off',
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', // for reduce accumulators
        'accumulator', // for reduce accumulators
        'e', // for e.returnvalue
        'ctx', // for Koa routing
        'context', // for Koa routing
        'req', // for Express requests
        'request', // for Express requests
        'res', // for Express responses
        'response', // for Express responses
        '$scope', // for Angular 1 scopes
        'staticContext', // for ReactRouter context
        'state',
      ],
    }],
  },
};
