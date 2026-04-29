<template>
  <section id="servicos" class="py-24 md:py-32 px-6 bg-[#0f0f0f] relative overflow-hidden">
    <div class="section-divider absolute top-0 left-0 right-0"></div>
    <div class="max-w-6xl mx-auto relative">
      <div ref="headerEl" :class="['text-center mb-16', revealed ? 'scroll-reveal is-visible' : 'scroll-reveal']">
        <span class="section-label block mb-4">O que fazemos</span>
        <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Nossos <span class="gradient-text">Serviços</span>
        </h2>
        <p class="text-gray-400 max-w-lg mx-auto text-sm">
          Soluções completas para deixar seu veículo em perfeito estado.
        </p>
      </div>

      <div ref="gridEl" :class="['grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4', revealed ? 'reveal-stagger is-visible' : 'reveal-stagger']">
        <div
          v-for="(servico, i) in servicos"
          :key="servico.titulo"
          class="glass-card rounded-2xl p-6 text-center card-shine cursor-pointer"
        >
          <div class="icon-wrap w-14 h-14 flex items-center justify-center mx-auto mb-5">
            <component :is="servico.icone" class="w-6 h-6 text-red-500" />
          </div>
          <h3 class="text-sm font-bold text-white mb-2 tracking-tight">{{ servico.titulo }}</h3>
          <p class="text-gray-500 text-xs leading-relaxed">{{ servico.descricao }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { WrenchIcon, PaintBrushIcon, WrenchScrewdriverIcon, ClipboardDocumentCheckIcon } from '@heroicons/vue/24/outline'
import { SparklesIcon } from '@heroicons/vue/24/solid'

const revealed = ref(false)

const servicos = [
  { icone: WrenchIcon, titulo: 'Funilaria', descricao: 'Restauração de latarias e recuperação de estruturas.' },
  { icone: PaintBrushIcon, titulo: 'Pintura', descricao: 'Aplicação de tintas de alta performance.' },
  { icone: WrenchScrewdriverIcon, titulo: 'Mecânica', descricao: 'Reparos mecânicos completos.' },
  { icone: ClipboardDocumentCheckIcon, titulo: 'Revisão', descricao: 'Revisão preventiva completa.' },
  { icone: SparklesIcon, titulo: 'Estética', descricao: 'Limpeza profunda e polimento.' }
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { revealed.value = true; observer.disconnect() } })
  }, { threshold: 0.2 })
  const el = document.getElementById('servicos')
  if (el) observer.observe(el)
})
</script>