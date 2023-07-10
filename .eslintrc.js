module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:jsdoc/recommended',
      'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      '@typescript-eslint',
      'import',
      'jsdoc',
    ],
    rules: {
      // Aquí puedes agregar o modificar las reglas de ESLint según tus necesidades
    },
    overrides: [
      {
        files: ['*.component.html'],
        parser: '@angular-eslint/template-parser',
        plugins: ['@angular-eslint/template'],
      },
    ],
  };
  