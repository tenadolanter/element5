import { resolve } from 'path'
export default () =>  {
  return {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.js'),
        name: 'element5',
        fileName: 'element5',
        formats: ['es', 'umd', 'iife'],
      },
      outDir: "lib",
    },
  }
}