module.exports =  {
    env: { node: true, es6: true },
    parserOptions: {
      ecmaVersion: 2020
    },
    overrides: [
      {
        files: ["**/*.ts"],
        parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
        plugins: ["@typescript-eslint"],
        extends:  [
          'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        ],
        env: {
          node: true
        },
        parserOptions:  {
          project: ['./tsconfig.json' ]
        },
        rules:  {
          "@typescript-eslint/camelcase": "off",
          "quotes": "off",
          "@typescript-eslint/quotes": ["error", "single"],
          "semi": "off",
          "@typescript-eslint/semi": ["error"],
          "brace-style": "off",
          "@typescript-eslint/brace-style": ["error", "1tbs", { "allowSingleLine": true }],
          "indent": "off",
          "@typescript-eslint/indent": ["error", 2],
          "object-curly-spacing": ["error", "always"],
          "@typescript-eslint/no-unused-vars": "error",
          "no-console": "error",
          "comma-spacing": "error",
          "quote-props": ["error", "as-needed"],
          "@typescript-eslint/no-var-requires": "off",
          "@typescript-eslint/explicit-function-return-type": "off"
        }
      }
    ]
  };