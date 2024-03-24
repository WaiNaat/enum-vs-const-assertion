import typescript from '@rollup/plugin-typescript';

const makeConfig = (input, outputDir, isTypeScript) =>({
  input,
  output: {
    dir: outputDir,
    generatedCode: 'es2015',
  },
  plugins: isTypeScript 
    ? [
      typescript({
        compilerOptions: {
          strict: true,
          target: 'ES6',
          outDir: 'rollup/ts-to-bundled-js',
          removeComments: true,
          skipLibCheck: true,
        },
      }),
    ] : undefined,
});

export default [
  makeConfig('src/using.ts', 'rollup/ts-to-bundled-js', true),
  makeConfig('src/not-using.ts', 'rollup/ts-to-bundled-js', true),
  makeConfig('src/export-outside.ts', 'rollup/ts-to-bundled-js', true),
  makeConfig('ts-to-js/using.js', 'rollup/js-to-bundled-js', false),
  makeConfig('ts-to-js/not-using.js', 'rollup/js-to-bundled-js', false),
  makeConfig('ts-to-js/export-outside.js', 'rollup/js-to-bundled-js', false),
];
