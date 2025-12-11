// ESLint flat config for TypeScript (ESLint v9, typescript-eslint v8)
// Docs: https://typescript-eslint.io/getting-started
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['node_modules/**', '.output/**', 'dist/**', '.wrangler/**', '.git/**', '.github/**', 'pnpm-lock.yaml'],
  },
  // Base recommended rules for TS
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    rules: {
      'no-constant-condition': ['error', { checkLoops: false }],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
      ],
    },
  },
);
