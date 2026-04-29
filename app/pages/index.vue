<template>
  <main class="bg-[#0f0f0f] text-white min-h-screen pt-16">
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <DifferentialsSection />
    <GallerySection />
    <TrustBadges />
    <TestimonialsSection />
    <FaqSection />
    <CtaSection />
    <ContactSection />
  </main>
</template>

<script setup lang="ts">
useScrollAnimation()

useHead({
  title: 'FlashCar | Funilaria e Pintura Profissional',
  meta: [
    {
      name: 'description',
      content: 'FlashCar — Seu carro novo de novo em tempo recorde. Funilaria, pintura, mecânica e muito mais com rapidez, qualidade e preço justo.'
    },
    { property: 'og:title', content: 'FlashCar | Funilaria e Pintura Profissional' },
    { property: 'og:description', content: 'Seu carro novo de novo em tempo recorde. Funilaria, pintura, mecânica e muito mais com rapidez, qualidade e preço justo.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://flashcar.com.br' },
    { property: 'og:image', content: 'https://images.unsplash.com/photo-1619405399517-d7fce0f15410?w=1200&q=80' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'FlashCar | Funilaria e Pintura Profissional' },
    { name: 'twitter:description', content: 'Seu carro novo de novo em tempo recorde. Funilaria, pintura, mecânica e muito mais.' }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
  ]
})
</script>