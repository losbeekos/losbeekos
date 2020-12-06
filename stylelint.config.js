'use strict';

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-prettier/recommended',
    'stylelint-config-property-sort-order-smacss',
  ],
  plugins: [
    'stylelint-prettier',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-no-unsupported-browser-features',
  ],
  rules: {
    // Other
    'at-rule-no-unknown': null, // Disabled because of stylelint-scss
    'font-weight-notation': 'named-where-possible',
    'shorthand-property-no-redundant-values': true,

    // Quotes
    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'always',
    'selector-attribute-quotes': 'always',
    'string-quotes': 'single',

    // Vendor prefixes
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,

    // Specificity
    'max-nesting-depth': 4,
    'selector-max-compound-selectors': 3,
    'selector-max-specificity': '0,2,2',

    // Selector types, units, properties, functions and words in comments
    'color-named': [
      'never',
      {
        ignore: ['inside-function'],
      },
    ],
    'color-no-hex': true,
    'declaration-no-important': true,
    'declaration-property-unit-allowed-list': {
      'line-height': [''],
    },
    'declaration-property-value-disallowed-list': {
      '/^transition/': ['/all/'],
      '/^background/': ['http:', 'https:'],
      '/^border/': ['none'],
      '/.+/': ['initial'],
    },
    'selector-max-class': 1,
    'selector-max-attribute': 1,
    'selector-max-combinators': 2,
    'selector-max-id': 0,
    'selector-max-pseudo-class': 1,
    'selector-max-type': 1,
    'selector-max-universal': 1,

    // Plugins
    'plugin/declaration-block-no-ignored-properties': true,
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
      },
    ],
  },
};
