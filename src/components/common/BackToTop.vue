<template>
  <transition
    enter-active-class="transition-all duration-300"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <button v-show="showButton"
            @click="scrollToTop"
            class="fixed bottom-8 right-8 z-50 p-3 rounded-xl bg-gh-light-canvas dark:bg-gh-dark-canvas border border-gh-light-border dark:border-gh-dark-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      <svg class="w-5 h-5 text-gh-light-muted dark:text-gh-dark-muted group-hover:text-blue-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const checkScroll = () => {
  showButton.value = window.scrollY > 500
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>
