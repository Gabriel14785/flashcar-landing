<template>
  <section class="py-24 md:py-32 px-6 bg-gradient-to-b from-[#0f0f0f] to-[#111111] relative overflow-hidden">
    <div class="absolute inset-0">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-600/[0.06] rounded-full blur-3xl"></div>
    </div>
    <div class="max-w-3xl mx-auto text-center relative">
      <div :class="[revealed ? 'scroll-reveal is-visible' : 'scroll-reveal']">
        <span class="section-label block mb-4">Não perca tempo</span>
        <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight tracking-tight">
          Agende seu serviço
          <br />
          <span class="gradient-text">hoje mesmo</span>
        </h2>
        <p class="text-gray-500 mb-10 text-sm">
          Agende agora e garanta atenção especial para o seu veículo. Vagas limitadas.
        </p>
        <a
          href="#contato"
          class="btn-premium inline-flex items-center gap-3 text-white font-bold text-base py-4 px-12 rounded-xl"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
          Fale conosco agora
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const revealed = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { revealed.value = true; observer.disconnect() } })
  }, { threshold: 0.3 })
  const section = document.querySelector('section')
  if (section) observer.observe(section)
})
</script>