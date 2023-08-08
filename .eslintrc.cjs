/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-airbnb-with-typescript',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        ".eslintrc.{js,cjs}"
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint",
    "vue"
  ],
  rules: {}
}
