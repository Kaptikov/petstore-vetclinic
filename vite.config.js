import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import alias from '@rollup/plugin-alias'

// https://vitejs.dev/config/
export default defineConfig({
  //plugins: [vue()],
  base: './',
  build: {
    modulePreload: false,
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        assetFileNames: ({ name }) => {
          if (/\.css$/.test(name ?? '')) {
            return 'styles/[name].css'
          }
          return 'assets/[name].[extname]'
        },
      },
    },
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/base/variables.scss";`,
      },
    },
  },
  plugins: [
    vue(),
    // vue({
    //   template: {
    //     preprocessOptions: {
    //       plugins: [vuePugPlugin],
    //     },
    //   },
    // }),
    alias({
      entries: [
        {
          find: '@',
          replacement: resolve(process.cwd(), './src'),
        },
      ],
    }),
  ],
  server: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5095/',
      },
    },
    port: 8080,
  },
})

// 5172

// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   base: './',
//   css: {
//     devSourcemap: true,
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@import "./src/assets/styles/base/variables.scss";`,
//       },
//     },
//   },
// })

// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })
