// These rules are extracted from a few projects I've worked on
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'node', '@typescript-eslint'],
  extends: ['eslint-config-airbnb-base', 'plugin:prettier/recommended', 'plugin:node/recommended'],
  env: {
    es6: true,
    node: true,
    browser: false,
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      typescript: {}, // Needed to enable `import/no-unresolved` for tsconfig "paths" support
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    node: {
      tryExtensions: ['.js', '.jsx', '.json', '.node', '.ts', '.tsx'],
    },
  },
  rules: {
    'prettier/prettier': 'error',
    curly: ['error', 'all'],
    'no-param-reassign': ['error', { props: false }], // useful for .reduce()
    strict: 0,
    'func-names': [1, 'as-needed'],
    'max-len': [
      2,
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-underscore-dangle': 0,
    // Re-enable ForOfStatement (disabled in eslint-config-airbnb-base)
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    // Node related rules
    'node/no-unpublished-require': 0,
    'node/no-unpublished-import': 0,
    'import/extensions': [
      'error',
      'never',
      {
        json: 'always',
      },
    ],
    // Typescript related rules
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off', // to stay backward-compatible
    'node/no-unsupported-features/es-syntax': 'off', // enable advanced es features as TypeScript is transpiled
    '@typescript-eslint/no-explicit-any': 'error', // discourage disabling types checking (use `eslint-disable-line` if really needed)
    '@typescript-eslint/no-unnecessary-type-assertion': 0, // can create issues by removing non-null assertions when strict mode is not enabled yet, it is also buggy in some cases and breaks typings
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        // enforce `as` casts (the bracket form conflicts with jsx/tsx code)
        assertionStyle: 'as',
        // prevent inline cast when it can be set directly in the variable declaration, as a type declaration offers
        // more type checkings than an inline cast
        objectLiteralTypeAssertions: 'allow-as-parameter',
      },
    ],
    /**
     * Override `no-missing-require` and `no-missing-import`:
     *  - Already covered by `import/no-unresolved`,
     *  - Has an issue with tsconfig "paths": https://github.com/mysticatea/eslint-plugin-node/issues/233
     */
    'node/no-missing-require': 'off',
    'node/no-missing-import': 'off',
    /**
     * Turn off 'prefer-destructuring' as it messes with types declaration
     * Example:
     *   const tagName: string | undefined = options.tagName;
     * Was transformed into:
     *   const { tagName } = options;
     * Which led to types information being removed
     */
    'prefer-destructuring': 'off',
    // Keep functions signatures overload next to each other
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    // Warn about `String` usage instead of `string`
    '@typescript-eslint/ban-types': 'error',
    // Prefer for..of loops than index iterations (when the index is not used)
    '@typescript-eslint/prefer-for-of': 'error',
    // Replace base rules with TypeScript rules
    'no-unused-vars': 'off', // replace eslint no-unused-vars...
    '@typescript-eslint/no-unused-vars': 'error', // ...by the typescript equivalent
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['error'],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
};
