<template>
  <Transition
    enter-active-class="transition-all duration-300"
    enter-from-class="opacity-0 translate-y-4 scale-95"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition-all duration-200"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-4 scale-95"
  >
    <button
      v-show="show"
      @click="scrollToTop"
      aria-label="Voltar ao topo"
      class="back-top fixed bottom-24 right-6 z-50 bg-gradient-to-r from-red-600 to-rose-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 15l7-7 7 7"/>
      </svg>
    </button>
  </Transition>
</template>

<script setup lang="ts">
const show = ref(false)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  const handleScroll = () => { show.value = window.scrollY > 700 }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => { window.removeEventListener('scroll', handleScroll) })
})
</script>