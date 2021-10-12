// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "eslint-config-prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "eslint-plugin-prettier"],
  rules: {
    "no-console": "warn",
    "react/prop-types": 0,
    "no-nested-ternary": "error",
    "react/display-name": "off",
    "linebreak-style": [
      "error",
      process.platform === "win32" ? "windows" : "unix",
    ],
    "prettier/prettier": [
      "warn",
      {
        doubleQuote: true,
        semi: true,
        endOfLine: "auto",
      },
    ],
  },
};
