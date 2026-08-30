import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

const isProd = process.env.NODE_ENV === 'production';

export default {
  input: 'src/bom-local-card.ts',
  output: {
    file: 'custom_components/bom_local/www/bom-local-card.js',
    format: 'es',
    sourcemap: !isProd,
  },
  onwarn(warning, warn) {
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }
    warn(warning);
  },
  plugins: [
    resolve({
      browser: true,
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: false,
    }),
    isProd && terser({
      format: {
        comments: false,
      },
    }),
  ],
  // Dependencies are bundled (not external) so the card works in HA
  // HA doesn't provide lit or custom-card-helpers globally
};






