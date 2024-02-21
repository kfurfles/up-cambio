/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: 'none',
  bracketSpacing: true,
  singleAttributePerLine: true,
  bracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'crlf',
  plugins: [
    'prettier-plugin-astro',
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss' // must be last
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ],
  importOrder: ['<TYPES>', '<TYPES>^[.]', '', '<THIRD_PARTY_MODULES>', '', '^[@]/', '', '^[.]']
};
