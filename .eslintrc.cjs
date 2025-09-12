module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2024: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:astro/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: 'module',
      },
      rules: {},
    },
  ],
  plugins: ['@typescript-eslint', 'astro'],
  rules: {
    // Project-preferred rules
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'prefer-const': 'warn',
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.ts', '.astro'] },
    },
  },
  globals: {
    Bun: 'readonly',
    fetch: 'readonly',
    Headers: 'readonly',
    Request: 'readonly',
    Response: 'readonly',
    WebSocket: 'readonly',
  },
};
