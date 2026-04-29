<template>
  <section id="depoimentos" class="py-24 md:py-32 px-6 bg-[#0f0f0f] relative overflow-hidden">
    <div class="section-divider absolute top-0 left-0 right-0"></div>
    <div class="max-w-6xl mx-auto relative">
      <div :class="['text-center mb-14', revealed ? 'scroll-reveal is-visible' : 'scroll-reveal']">
        <span class="section-label block mb-4">Depoimentos reais</span>
        <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          O que dizem nossos <span class="gradient-text">clientes</span>
        </h2>
        <p class="text-gray-500 max-w-md mx-auto text-sm">
          A confiança dos nossos clientes é o nosso maior reconhecimento.
        </p>
      </div>

      <div :class="['grid grid-cols-1 md:grid-cols-3 gap-5', revealed ? 'reveal-stagger is-visible' : 'reveal-stagger']">
        <div
          v-for="depoimento in depoimentos"
          :key="depoimento.nome"
          class="glass-card testimonial-card rounded-2xl p-7 card-shine"
        >
          <div class="flex gap-1 mb-5">
            <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="i <= depoimento.nota ? 'text-yellow-400' : 'text-gray-700'" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l.07.224a.25.25 0 00.167.137l.236.017c.387.058.54.533.27.836l-.19.224a.25.25 0 00-.071.205l.057.272a.48.48 0 00.265.277l.223.044c.39.077.555.508.195.768l.03.163a1 1 0 01-.097.908l-.154.23a.25.25 0 00.05.25l.23.05a1 1 0 01.388.651l.058.235a.25.25 0 00.235.167h.236c.303 0 .558.243.27.446l-.172.224a.25.25 0 000 .25l.172.224c.288.203-.033.446-.27.446h-.236a.25.25 0 00-.235.167l-.058.235a1 1 0 01-.388.651l-.23.05a.25.25 0 00-.05.25l-.154.23a1 1 0 01-.908.097l-.163.03c-.27.03-.468.198-.195.768l.044.223a.48.48 0 00.265.277l.057.272a.25.25 0 00.071.205l.19.224c.27.303.117.778-.27.836l-.236.017a.25.25 0 00-.167.137l-.07.224z"/>
            </svg>
          </div>
          <p class="text-gray-300 text-sm leading-relaxed mb-6 italic">
            "{{ depoimento.comentario }}"
          </p>
          <div class="flex items-center gap-3 pt-4 border-t border-white/5">
            <div class="w-10 h-10 bg-gradient-to-br from-red-700 to-rose-700 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-red-900/20">
              {{ depoimento.nome.charAt(0) }}
            </div>
            <div>
              <span class="text-white font-semibold text-sm block">{{ depoimento.nome }}</span>
              <span class="text-gray-600 text-xs">{{ depoimento.cidade }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const revealed = ref(false)

const depoimentos = [
  { nome: 'Carlos Eduardo Silva', comentario: 'Levei o carro para dar uma pane e o resultado superou todas as expectativas. O acabamento ficou perfeito, prazo cumprido e o preço muito justo. Recomendo a FlashCar para todos.', nota: 5, cidade: 'São Paulo, SP' },
  { nome: 'Fernanda Oliveira', comentario: 'Atendimento excepcional! Fui recebida com atenção total, me explicaram cada etapa do serviço. Meu carro ficou impecável e ainda ganhei dicas de manutenção.', nota: 5, cidade: 'Campinas, SP' },
  { nome: 'Ricardo Mendes', comentario: 'Experiência nota dez. Profissionais sérios que cumprem o que combinam. Meu veículo estava amassado e hoje está como novo. FlashCar merece todas as estrelas!', nota: 5, cidade: 'Santos, SP' }
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { revealed.value = true; observer.disconnect() } })
  }, { threshold: 0.2 })
  const section = document.getElementById('depoimentos')
  if (section) observer.observe(section)
})
</script>