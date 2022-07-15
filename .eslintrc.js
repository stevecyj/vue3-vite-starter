module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-undef': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['default', 'index'],
      },
    ],
  },
};
