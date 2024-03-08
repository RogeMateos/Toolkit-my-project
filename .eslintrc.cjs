module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true, // Agregado para definir variables de CommonJS
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {},
};
