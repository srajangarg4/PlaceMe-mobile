module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb', 'airbnb/hooks'],
  env: {
    jest: true,
    es6: true,
    browser: true,
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'no-use-before-define': 'off',
    'react/jsx-props-no-spreading': 'off',
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-console': 'off',
    'object-curly-newline': 'off',
  },

};
