import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: {
    using: './src/using.ts',
    'not-using': './src/not-using.ts',
    'export-outside': './src/export-outside.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'webpack'),
  },
  mode: 'production',
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
