<template>
  <section id="diferenciais" class="py-24 md:py-32 px-6 bg-[#0f0f0f] relative overflow-hidden">
    <div class="absolute inset-0 section-divider top-0 left-0 right-0"></div>
    <div class="max-w-5xl mx-auto relative">
      <div :class="['text-center mb-14', revealed ? 'scroll-reveal is-visible' : 'scroll-reveal']">
        <span class="section-label block mb-4">Por que nos escolher</span>
        <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Por que <span class="gradient-text">escolher a FlashCar</span>
        </h2>
      </div>

      <div :class="['grid grid-cols-1 sm:grid-cols-2 gap-4', revealed ? 'reveal-stagger is-visible' : 'reveal-stagger']">
        <div
          v-for="(dif, i) in diferenciais"
          :key="dif.titulo"
          class="glass-card flex items-start gap-5 rounded-2xl p-6"
        >
          <div class="icon-wrap w-12 h-12 flex items-center justify-center flex-shrink-0">
            <component :is="dif.icone" class="w-5 h-5 text-red-500" />
          </div>
          <div>
            <h3 class="text-sm font-bold text-white mb-1.5 tracking-tight">{{ dif.titulo }}</h3>
            <p class="text-gray-500 text-xs leading-relaxed">{{ dif.descricao }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { BoltIcon, UserGroupIcon, ShieldCheckIcon, CpuChipIcon } from '@heroicons/vue/24/outline'

const revealed = ref(false)

const diferenciais = [
  { icone: BoltIcon, titulo: 'Atendimento Rápido', descricao: 'Resposta ágil e orçamento em até 24 horas. Sua demanda é nossa prioridade.' },
  { icone: UserGroupIcon, titulo: 'Profissionais Especializados', descricao: 'Equipe treinada e certificada com anos de experiência.' },
  { icone: ShieldCheckIcon, titulo: 'Garantia no Serviço', descricao: 'Oferecemos garantia nos serviços realizados para sua total tranquilidade.' },
  { icone: CpuChipIcon, titulo: 'Equipamentos Modernos', descricao: 'Tecnologia de ponta em todas as etapas do trabalho.' }
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { revealed.value = true; observer.disconnect() } })
  }, { threshold: 0.2 })
  const section = document.getElementById('diferenciais')
  if (section) observer.observe(section)
})
</script>