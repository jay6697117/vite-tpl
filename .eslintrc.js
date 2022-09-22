module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  extends: ['plugin:vue/vue3-recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      // 'error',
      'off',
      {
        semi: true,
        singleQuote: true,
        arrowParens: 'avoid',
        endOfLine: 'lf',
        useTabs: false,
        tabWidth: 2,
        printWidth: 120,
        trailingComma: 'none',
        bracketSpacing: true,
        jsxSingleQuote: true,
        jsxBracketSameLine: true,
        htmlWhitespaceSensitivity: 'ignore'
      }
    ]
  }
};
