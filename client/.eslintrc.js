module.exports = {
   env: {
      node: true,
      es6: true,
      browser: true,
      commonjs: true,
      es2021: true,
   },
   extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
   overrides: [
      {
         env: {
            node: true,
         },
         files: ['.eslintrc.{js,cjs}'],
         parserOptions: {
            sourceType: 'script',
         },
      },
   ],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 'latest',
   },
   plugins: ['@typescript-eslint'],
   rules: {
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/ban-ts-comment': 0,
   },
};
