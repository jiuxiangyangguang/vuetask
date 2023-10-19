import vue from 'rollup-plugin-vue'
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser' // 压缩代码
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano' // 压缩css
const overrides = {
  compilerOptions: { declaration: true }, // 生成.d.ts的文件
  exclude: ['tests/**/*.ts', 'tests/**/*.tsx']
}

export default {
  input: './src/index.ts',
  output: [
    {
      file: './dist/my-lib-es.js',
      format: 'es',
      name: 'vuetask'
    },
    {
      file: './dist/my-lib-umd.js',
      format: 'umd',
      name: 'myLib'
    }
  ],
  plugins: [
    resolve({
      extensions: ['.vue', '.js', '.ts']
    }),
    vue(),
    commonjs(),
    typescript({ tsconfigOverride: overrides }),
    postcss({
      plugins: [autoprefixer(), cssnano()],
      extract: 'css/index.css'
    }),
    terser(),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.vue']
    })
  ],
  external: [
    //外部库， 使用'umd'文件时需要先引入这个外部库
    'vue'
  ]
}
