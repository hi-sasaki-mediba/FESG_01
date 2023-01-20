module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'prettier',
    // https://github.com/prettier/eslint-config-prettier#installation
    // Then, add "prettier" to the "extends" array in your .eslintrc.* file. Make sure to put it last, so it gets the chance to override other configs.
    // 上記の通り、一番最後に追加する
    // これ以降に追加するconfigは他の設定と衝突する可能性がある
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {},
};
