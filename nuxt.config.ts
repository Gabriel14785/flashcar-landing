export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'FlashCar | Funilaria e Pintura Profissional',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'FlashCar — Seu carro novo de novo em tempo recorde. Funilaria, pintura, mecânica e muito mais com rapidez, qualidade e preço justo.' },
        { name: 'keywords', content: 'funilaria, pintura automotiva, mecânica, revisão, estética, São Paulo, FlashCar' },
        { name: 'author', content: 'FlashCar' },
        { property: 'og:title', content: 'FlashCar | Funilaria e Pintura Profissional' },
        { property: 'og:description', content: 'Seu carro novo de novo em tempo recorde. Funilaria, pintura, mecânica e muito mais com rapidez, qualidade e preço justo.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://flashcar.com.br' },
        { property: 'og:image', content: 'https://images.unsplash.com/photo-1619405399517-d7fce0f15410?w=1200&q=80' },
        { property: 'og:locale', content: 'pt_BR' },
        { property: 'og:site_name', content: 'FlashCar' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'FlashCar | Funilaria e Pintura Profissional' },
        { name: 'twitter:description', content: 'Seu carro novo de novo em tempo recorde.' },
        { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1619405399517-d7fce0f15410?w=1200&q=80' },
        { name: 'theme-color', content: '#0f0f0f' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' }
      ]
    }
  }
})