<template>
  <section class="py-24 md:py-32 px-6 bg-[#111111] relative overflow-hidden">
    <div class="absolute inset-0">
      <div class="absolute top-1/3 right-0 w-80 h-80 bg-red-600/[0.04] rounded-full blur-3xl deco-circle"></div>
      <div class="absolute bottom-1/3 left-0 w-60 h-60 bg-rose-600/[0.04] rounded-full blur-3xl deco-circle" style="animation-delay: -4s"></div>
    </div>
    <div class="max-w-6xl mx-auto relative">
      <div ref="headerEl" :class="['text-center mb-14', revealed ? 'scroll-reveal is-visible' : 'scroll-reveal']">
        <span class="section-label block mb-4">Confiança e credibilidade</span>
        <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          <span class="gradient-text">Números</span> que falam por nós
        </h2>
      </div>

      <div :class="['grid grid-cols-2 lg:grid-cols-4 gap-4', revealed ? 'reveal-stagger is-visible' : 'reveal-stagger']">
        <div
          v-for="(badge, i) in badges"
          :key="badge.titulo"
          class="glass-card badge-stat rounded-2xl p-6 md:p-8 text-center"
        >
          <component :is="badge.icone" class="w-8 h-8 text-red-500 mx-auto mb-4" />
          <p class="text-2xl md:text-3xl font-extrabold text-white mb-1 tracking-tight">
            {{ displayValues[i] }}{{ badge.sufixo }}
          </p>
          <p class="text-gray-500 text-xs">{{ badge.titulo }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FireIcon } from '@heroicons/vue/24/outline'
import { ShieldCheckIcon, StarIcon } from '@heroicons/vue/24/solid'

const revealed = ref(false)
const displayValues = ref(['0', '0', '0', '0'])

const badges = [
  { icone: FireIcon, numero: 15, sufixo: '+', titulo: 'Anos de Experiência' },
  { icone: ShieldCheckIcon, numero: 2500, sufixo: '+', titulo: 'Carros Atendidos' },
  { icone: StarIcon, numero: 98, sufixo: '%', titulo: 'Clientes Satisfeitos' },
  { icone: StarIcon, numero: 4.9, sufixo: '', titulo: 'Nota no Google' }
]

function animateCounter(index: number, target: number, decimals: boolean) {
  const duration = 2500
  const steps = 75
  const increment = target / steps
  let current = 0
  let step = 0

  const timer = setInterval(() => {
    step++
    current = Math.min(increment * step, target)
    if (decimals) {
      displayValues.value[index] = current.toFixed(1)
    } else if (target >= 100) {
      displayValues.value[index] = Math.round(current).toLocaleString('pt-BR')
    } else {
      displayValues.value[index] = Math.round(current).toString()
    }
    if (step >= steps) {
      clearInterval(timer)
      displayValues.value[index] = decimals ? target.toFixed(1) : (target >= 100 ? target.toLocaleString('pt-BR') : target.toString())
    }
  }, duration / steps)
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        revealed.value = true
        setTimeout(() => {
          badges.forEach((b, i) => animateCounter(i, b.numero, b.numero % 1 !== 0))
        }, 300)
        observer.disconnect()
      }
    })
  }, { threshold: 0.25 })

  const section = document.querySelector('section')
  if (section) observer.observe(section)
})
</script>