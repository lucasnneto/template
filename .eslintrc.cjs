module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    NodeJS: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential",
    "prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "vue"],
  rules: {
    "no-console": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "vue/multi-word-component-names": "off",
  },
};
