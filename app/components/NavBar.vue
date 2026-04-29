<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled
        ? 'glass shadow-2xl shadow-black/20 py-3'
        : 'bg-transparent py-5'
    ]"
  >
    <div class="max-w-6xl mx-auto px-6 flex items-center justify-between">
      <a href="#inicio" class="flex items-center gap-2.5 group">
        <svg class="w-9 h-9 text-red-500 transition-all duration-300 group-hover:text-red-400 group-hover:scale-105" viewBox="0 0 32 32" fill="none">
          <path d="M16 2L4 10V22L16 30L28 22V10L16 2Z" fill="currentColor" opacity="0.3"/>
          <path d="M16 6L8 12V20L16 26L24 20V12L16 6Z" fill="currentColor" opacity="0.5"/>
          <path d="M16 10L12 13V17L16 20L20 17V13L16 10Z" fill="currentColor"/>
        </svg>
        <span class="text-xl font-extrabold text-white tracking-tight">
          Flash<span class="gradient-text">Car</span>
        </span>
      </a>

      <nav class="hidden lg:flex items-center gap-1">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="nav-link px-4 py-2 text-sm font-medium text-white/60 hover:text-white rounded-lg"
        >
          {{ link.label }}
        </a>
        <a
          href="#contato"
          class="ml-3 btn-premium text-white text-sm font-bold px-6 py-2.5 rounded-xl"
        >
          Solicitar orçamento
        </a>
      </nav>

      <button
        @click="mobileMenuOpen = !mobileMenuOpen"
        :class="[
          'lg:hidden p-2 rounded-lg transition-all duration-300',
          mobileMenuOpen ? 'text-white bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'
        ]"
        aria-label="Menu"
      >
        <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <Transition
      enter-active-class="transition-all duration-400 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden glass border-t border-white/5"
      >
        <nav class="flex flex-col px-6 py-5 gap-1">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            @click="mobileMenuOpen = false"
            class="nav-link px-4 py-3 text-white/70 hover:text-white rounded-lg font-medium text-sm"
          >
            {{ link.label }}
          </a>
          <a
            href="#contato"
            @click="mobileMenuOpen = false"
            class="mt-3 btn-premium text-white text-center font-bold py-3.5 px-6 rounded-xl"
          >
            Solicitar orçamento
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' }
]

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 40
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>