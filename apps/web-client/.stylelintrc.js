module.exports = {
  root: true,
  plugins: [
    "stylelint-scss"
  ],
  extends: 'stylelint-config-standard',
  rules: {
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['if', 'else'],
      },
    ],
    'declaration-empty-line-before': null,
    'at-rule-semicolon-space-before': 'never',
    'rule-empty-line-before': null,
    'selector-list-comma-newline-after': null,
  },
};
