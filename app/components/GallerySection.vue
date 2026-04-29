<template>
  <section id="galeria" class="py-24 md:py-32 px-6 bg-[#111111] relative overflow-hidden">
    <div class="section-divider absolute top-0 left-0 right-0"></div>
    <div class="max-w-6xl mx-auto relative">
      <div :class="['text-center mb-14', revealed ? 'scroll-reveal is-visible' : 'scroll-reveal']">
        <span class="section-label block mb-4">Nossos trabalhos</span>
        <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Galeria de <span class="gradient-text">Trabalhos</span>
        </h2>
        <p class="text-gray-500 max-w-md mx-auto text-sm">
          Resultados reais dos nossos serviços. Cada detalhe é tratado com máxima dedicação.
        </p>
      </div>

      <div :class="['grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4', revealed ? 'reveal-stagger is-visible' : 'reveal-stagger']">
        <div
          v-for="item in galleryItems"
          :key="item.id"
          class="group relative overflow-hidden rounded-2xl cursor-pointer"
          @click="openLightbox(item)"
        >
          <img
            :src="item.imagem"
            :alt="item.titulo"
            class="w-full h-64 object-cover gallery-img"
            loading="lazy"
          />
          <div class="gallery-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5">
            <div>
              <span class="inline-block bg-red-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 backdrop-blur-sm">
                {{ item.categoria }}
              </span>
              <p class="text-white font-semibold text-sm">{{ item.titulo }}</p>
              <p class="text-white/60 text-xs">{{ item.descricao }}</p>
            </div>
          </div>
        </div>
      </div>

      <Transition enter-active-class="modal-backdrop-enter-active" leave-active-class="transition-all duration-200">
        <div
          v-if="lightboxItem"
          class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6"
          @click.self="closeLightbox"
        >
          <button @click="closeLightbox" class="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <div class="max-w-4xl w-full modal-enter-active">
            <img :src="lightboxItem.imagem" :alt="lightboxItem.titulo" class="w-full max-h-[75vh] object-contain rounded-2xl" />
            <div class="mt-5 text-center">
              <p class="text-white text-xl font-semibold">{{ lightboxItem.titulo }}</p>
              <p class="text-gray-400 mt-1 text-sm">{{ lightboxItem.descricao }}</p>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
const revealed = ref(false)
const lightboxItem = ref<{ id: number; titulo: string; descricao: string; categoria: string; imagem: string } | null>(null)

const galleryItems = [
  { id: 1, titulo: 'Restauração Completa', descricao: 'Antes e depois de recuperação total da lataria', categoria: 'Funilaria', imagem: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80' },
  { id: 2, titulo: 'Pintura Personalizada', descricao: 'Pintura completa com cores personalizadas', categoria: 'Pintura', imagem: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80' },
  { id: 3, titulo: 'Recuperação de Para-Lama', descricao: 'Troca e recuperação de para-lama dianteiro', categoria: 'Funilaria', imagem: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80' },
  { id: 4, titulo: 'Polimento Industrial', descricao: 'Polimento de alta performance em pintura', categoria: 'Estética', imagem: 'https://images.unsplash.com/photo-1603584173870-7f23f2851ce9?w=800&q=80' },
  { id: 5, titulo: 'Montadora de Motor', descricao: 'Reparo mecânico completo', categoria: 'Mecânica', imagem: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80' },
  { id: 6, titulo: 'Revisão Geral', descricao: 'Revisão preventiva completa', categoria: 'Revisão', imagem: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80' }
]

function openLightbox(item: typeof galleryItems[0]) { lightboxItem.value = item }
function closeLightbox() { lightboxItem.value = null }

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { revealed.value = true; observer.disconnect() } })
  }, { threshold: 0.2 })
  const section = document.getElementById('galeria')
  if (section) observer.observe(section)
})
</script>