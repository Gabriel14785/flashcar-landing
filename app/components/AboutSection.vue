<template>
  <section id="sobre" class="py-24 md:py-32 px-6 bg-[#111111] relative overflow-hidden">
    <div class="absolute inset-0">
      <div class="absolute top-1/2 left-0 w-96 h-96 bg-red-600/[0.04] rounded-full blur-3xl deco-circle"></div>
      <div class="absolute bottom-0 right-0 w-64 h-64 bg-rose-600/[0.04] rounded-full blur-3xl deco-circle" style="animation-delay: -3s"></div>
    </div>
    <div class="max-w-4xl mx-auto relative text-center">
      <div :class="['mb-8', revealed ? 'scroll-reveal is-visible' : 'scroll-reveal']">
        <span class="section-label block mb-4">Sobre nós</span>
        <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-10 tracking-tight">
          Sobre a <span class="gradient-text">FlashCar</span>
        </h2>
        <div class="glass-card rounded-2xl p-8 md:p-10 text-left">
          <p class="text-gray-300 text-base leading-relaxed">
            Com mais de 15 anos de atuação no mercado automotivo, a FlashCar se tornou referência em funilaria e pintura na região. Nossa equipe é formada por profissionais especializados, certificados e apaixonados pelo que fazem. Utilizamos equipamentos de última geração e tintas de alta performance para garantir um acabamento impecável. Trabalhamos com transparência, comprometimento e respeito ao prazo combinado, porque sabemos que seu tempo importa. Cada veículo que entra em nossa oficina recebe atenção individualizada e o mesmo cuidado que daríamos ao nosso próprio carro. Na FlashCar, a satisfação do cliente é o nosso maior orgulho.
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <div v-for="stat in stats" :key="stat.label" class="glass rounded-xl px-6 py-4">
              <p class="text-2xl font-extrabold gradient-text mb-1">{{ stat.value }}</p>
              <p class="text-gray-500 text-xs">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const revealed = ref(false)
const stats = [
  { value: '15+', label: 'Anos' },
  { value: '2.500+', label: 'Carros' },
  { value: '98%', label: 'Satisfação' },
  { value: '4.9★', label: 'Google' }
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { revealed.value = true; observer.disconnect() } })
  }, { threshold: 0.2 })
  const section = document.getElementById('sobre')
  if (section) observer.observe(section)
})
</script>