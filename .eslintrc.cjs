module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    '@nuxt/eslint-config'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'vue'
  ],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    indent: ['error', 2],
    'object-curly-spacing': ['error', 'always']
  }
};