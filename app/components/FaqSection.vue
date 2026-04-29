<template>
  <section id="faq" class="py-24 md:py-32 px-6 bg-[#0f0f0f] relative overflow-hidden">
    <div class="section-divider absolute top-0 left-0 right-0"></div>
    <div class="max-w-3xl mx-auto relative">
      <div :class="['text-center mb-14', revealed ? 'scroll-reveal is-visible' : 'scroll-reveal']">
        <span class="section-label block mb-4">Tire suas dúvidas</span>
        <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Perguntas <span class="gradient-text">Frequentes</span>
        </h2>
      </div>

      <div class="space-y-3">
        <div
          v-for="(faq, i) in faqs"
          :key="i"
          class="glass-card rounded-xl overflow-hidden faq-item"
        >
          <button
            @click="toggleFaq(i)"
            class="w-full flex items-center justify-between p-6 text-left"
          >
            <span class="text-white font-semibold text-sm pr-4">{{ faq.pergunta }}</span>
            <svg
              class="w-5 h-5 text-red-500 accordion-icon flex-shrink-0"
              :class="openIndex === i ? 'rotate-180' : ''"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div :class="['accordion-content', openIndex === i ? 'open' : '']">
            <p class="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
              {{ faq.resposta }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const revealed = ref(false)
const openIndex = ref<number | null>(null)

const faqs = [
  { pergunta: 'Quanto tempo leva para pintar um carro?', resposta: 'O tempo varia conforme a extensão do serviço. Para pintura parcial, o prazo é de 3 a 5 dias úteis. Para pintura completa, pode levar de 7 a 15 dias úteis.' },
  { pergunta: 'Vocês dão garantia no serviço?', resposta: 'Sim! Oferecemos garantia de 12 meses nos serviços de funilaria e pintura realizados. A garantia cobre defeitos de acabamento e adesão da tinta, desde que o veículo não sofra novos impactos.' },
  { pergunta: 'Posso deixar o carro enquanto o serviço é feito?', resposta: 'Com certeza! Você pode deixar o veículo em nossa oficina e buscar quando o serviço estiver pronto. Oferecemos serviço de transporte com agendamento prévio.' },
  { pergunta: 'Vocês atendem todos os modelos de carro?', resposta: 'Sim! Nossa equipe é especializada em todas as marcas e modelos, nacionais e importados. Trabalhamos com populares, SUVs, picapes e carros de luxo.' },
  { pergunta: 'Como funciona o orçamento?', resposta: 'O orçamento é gratuito e sem compromisso. Nossa equipe avalia pessoalmente o veículo. O resultado é enviado em até 24 horas com detalhamento completo dos serviços.' }
]

function toggleFaq(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { revealed.value = true; observer.disconnect() } })
  }, { threshold: 0.2 })
  const section = document.getElementById('faq')
  if (section) observer.observe(section)
})
</script>