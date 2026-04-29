import type { Config } from 'tailwindcss'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default <Config>{
  content: [
    path.resolve(__dirname, './app/components/**/*.{js,vue,ts}'),
    path.resolve(__dirname, './app/layouts/**/*.vue'),
    path.resolve(__dirname, './app/pages/**/*.vue'),
    path.resolve(__dirname, './app/plugins/**/*.{js,ts}'),
    path.resolve(__dirname, './app/app.vue'),
    path.resolve(__dirname, './app/error.vue')
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e11d48',
        dark: '#0f0f0f',
        darker: '#111111'
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif'
        ]
      }
    }
  },
  plugins: []
}