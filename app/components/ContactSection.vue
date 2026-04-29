<template>
  <section id="contato" class="py-24 md:py-32 px-6 bg-[#111111] relative overflow-hidden">
    <div class="absolute inset-0 section-divider top-0 left-0 right-0"></div>
    <div class="max-w-6xl mx-auto relative">
      <div :class="['text-center mb-14', revealed ? 'scroll-reveal is-visible' : 'scroll-reveal']">
        <span class="section-label block mb-4">Fale conosco</span>
        <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Entre em <span class="gradient-text">contato</span>
        </h2>
        <p class="text-gray-500 max-w-md mx-auto text-sm">
          Solicite seu orçamento sem compromisso.
        </p>
      </div>

      <Transition
        enter-active-class="transition-all duration-500"
        enter-from-class="opacity-0 translate-y-8"
        enter-to-class="opacity-100 translate-y-0"
      >
        <div v-if="submitted" class="max-w-2xl mx-auto text-center py-16 glass-card rounded-2xl">
          <div class="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-2">Mensagem enviada!</h3>
          <p class="text-gray-400 mb-8 text-sm">Recebemos sua mensagem e entraremos em contato em breve.</p>
          <button @click="resetForm" class="btn-premium-outline text-white font-semibold py-3 px-8 rounded-xl">
            Enviar nova mensagem
          </button>
        </div>

        <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="glass-card rounded-2xl p-8">
            <h3 class="text-base font-bold text-white mb-6 tracking-tight">Envie sua mensagem</h3>
            <form @submit.prevent="enviarFormulario" class="space-y-4">
              <div>
                <label for="nome" class="block text-gray-400 text-xs mb-1.5 font-medium">Nome *</label>
                <input id="nome" v-model="form.nome" type="text" required placeholder="Seu nome completo" :class="['input-premium w-full', errors.nome ? 'has-error' : '']" />
                <p v-if="errors.nome" class="text-red-400 text-xs mt-1">{{ errors.nome }}</p>
              </div>
              <div>
                <label for="telefone" class="block text-gray-400 text-xs mb-1.5 font-medium">Telefone *</label>
                <input id="telefone" v-model="form.telefone" type="tel" required placeholder="(00) 00000-0000" :class="['input-premium w-full', errors.telefone ? 'has-error' : '']" />
                <p v-if="errors.telefone" class="text-red-400 text-xs mt-1">{{ errors.telefone }}</p>
              </div>
              <div>
                <label for="email" class="block text-gray-400 text-xs mb-1.5 font-medium">E-mail (opcional)</label>
                <input id="email" v-model="form.email" type="email" placeholder="seu@email.com" class="input-premium w-full" />
              </div>
              <div>
                <label for="servico" class="block text-gray-400 text-xs mb-1.5 font-medium">Serviço desejado</label>
                <select id="servico" v-model="form.servico" class="input-premium w-full">
                  <option value="">Selecione um serviço</option>
                  <option value="funilaria">Funilaria</option>
                  <option value="pintura">Pintura</option>
                  <option value="mecanica">Mecânica</option>
                  <option value="revisao">Revisão</option>
                  <option value="estetica">Estética</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div>
                <label for="mensagem" class="block text-gray-400 text-xs mb-1.5 font-medium">Mensagem *</label>
                <textarea id="mensagem" v-model="form.mensagem" rows="4" required placeholder="Descreva o serviço que você precisa..." :class="['input-premium w-full resize-none', errors.mensagem ? 'has-error' : '']"></textarea>
                <p v-if="errors.mensagem" class="text-red-400 text-xs mt-1">{{ errors.mensagem }}</p>
              </div>
              <button type="submit" :disabled="isSubmitting" :class="['w-full text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg', isSubmitting ? 'bg-gray-700 cursor-not-allowed opacity-50' : 'btn-premium']">
                {{ isSubmitting ? 'Enviando...' : 'Enviar mensagem' }}
              </button>
            </form>
          </div>

          <div class="flex flex-col justify-center gap-5">
            <div class="glass-card rounded-2xl p-7">
              <div class="flex items-center gap-4 mb-5">
                <div class="icon-wrap w-12 h-12 flex items-center justify-center">
                  <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-gray-500 text-xs mb-0.5">Telefone</p>
                  <p class="text-white font-semibold text-base">(11) 99999-8888</p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="icon-wrap w-12 h-12 flex items-center justify-center">
                  <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-gray-500 text-xs mb-0.5">Horário</p>
                  <p class="text-white font-semibold">Seg - Sex: 08h - 18h</p>
                </div>
              </div>
            </div>

            <a href="https://wa.me/5511999998888?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento" target="_blank" class="btn-whatsapp-premium flex items-center justify-center gap-3 text-base font-bold py-5 rounded-2xl">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.879-.874-1.475-1.961-1.648-2.294-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
const revealed = ref(false)
const submitted = ref(false)
const isSubmitting = ref(false)

const form = reactive({ nome: '', telefone: '', email: '', servico: '', mensagem: '' })
const errors = reactive({ nome: '', telefone: '', mensagem: '' })

function validatePhone(phone: string) {
  const cleaned = phone.replace(/\D/g, '')
  return cleaned.length >= 10 && cleaned.length <= 11
}

function validateForm(): boolean {
  errors.nome = ''
  errors.telefone = ''
  errors.mensagem = ''
  let valid = true
  if (!form.nome.trim() || form.nome.trim().length < 3) { errors.nome = 'Informe seu nome completo'; valid = false }
  if (!validatePhone(form.telefone)) { errors.telefone = 'Informe um telefone válido'; valid = false }
  if (!form.mensagem.trim() || form.mensagem.trim().length < 10) { errors.mensagem = 'Descreva sua mensagem'; valid = false }
  return valid
}

async function enviarFormulario() {
  if (!validateForm()) return
  isSubmitting.value = true
  await new Promise(r => setTimeout(r, 1500))
  console.log('Formulário:', { ...form })
  isSubmitting.value = false
  submitted.value = true
}

function resetForm() {
  submitted.value = false
  Object.assign(form, { nome: '', telefone: '', email: '', servico: '', mensagem: '' })
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { revealed.value = true; observer.disconnect() } })
  }, { threshold: 0.2 })
  const section = document.getElementById('contato')
  if (section) observer.observe(section)
})
</script>