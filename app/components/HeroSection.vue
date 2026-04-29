<template>
  <section id="inicio" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div ref="bgLayer" class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1619405399517-d7fce0f15410?w=1920&q=80"
        alt="Automóvel restaurado na FlashCar"
        class="w-full h-full object-cover hero-bg-premium"
        loading="eager"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30"></div>
      <div class="absolute inset-0 hero-gradient bg-gradient-to-br from-red-950/40 via-transparent to-transparent"></div>
    </div>
    <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <div ref="tagline" :class="['overflow-hidden mb-6', heroRevealed ? 'hero-reveal-1 visible' : 'hero-reveal-1']">
        <span class="section-label tracking-widest uppercase">
          Referência em Funilaria e Pintura
        </span>
      </div>

      <div ref="titleEl" :class="['overflow-hidden mb-6', heroRevealed ? 'hero-reveal-2 visible' : 'hero-reveal-2']">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
          Seu carro novo de novo
          <br class="hidden md:block" />
          <span class="gradient-text">em tempo recorde</span>
        </h1>
      </div>

      <div ref="subtitleEl" :class="['overflow-hidden mb-10 max-w-2xl mx-auto', heroRevealed ? 'hero-reveal-3 visible' : 'hero-reveal-3']">
        <p class="text-base md:text-lg text-white/70 leading-relaxed">
          Rapidez na entrega, qualidade no serviço e preço justo. A FlashCar combina experiência e tecnologia para devolver o brilho ao seu veículo.
        </p>
      </div>

      <div ref="ctaEl" :class="['flex flex-col sm:flex-row items-center justify-center gap-4', heroRevealed ? 'hero-reveal-4 visible' : 'hero-reveal-4']">
        <a href="#contato" class="btn-premium text-white font-bold text-base py-4 px-10 rounded-xl">
          Solicitar orçamento
        </a>
        <a href="#galeria" class="btn-premium-outline text-white font-semibold text-sm py-3.5 px-8 rounded-xl">
          Ver trabalhos
        </a>
      </div>
    </div>

    <div ref="scrollInd" :class="['absolute bottom-10 left-1/2 -translate-x-1/2', heroRevealed ? 'hero-reveal-4 visible' : 'hero-reveal-4']">
      <div class="flex flex-col items-center gap-2 text-white/40">
        <span class="text-xs tracking-widest uppercase">Role para descobrir</span>
        <svg class="w-5 h-5 scroll-indicator" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const heroRevealed = ref(false)

onMounted(() => {
  setTimeout(() => {
    heroRevealed.value = true
  }, 200)

  const handleScroll = () => {
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>