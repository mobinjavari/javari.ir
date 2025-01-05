<template>
  <button
    @click="$emit('toggle')"
    class="md:hidden relative w-8 h-8 rounded-lg hover:bg-gh-light-canvas dark:hover:bg-gh-dark-canvas transition-colors"
  >
    <div
      class="absolute inset-0 flex items-center justify-center transition-transform duration-200"
      :class="{ 'rotate-90 scale-0': isOpen }"
    >
      <div class="w-5 h-4 flex flex-col justify-between">
        <span class="w-full h-0.5 bg-current"></span>
        <span class="w-full h-0.5 bg-current"></span>
        <span class="w-full h-0.5 bg-current"></span>
      </div>
    </div>
    <div
      class="absolute inset-0 flex items-center justify-center transition-transform duration-200"
      :class="{ '-rotate-90 scale-0': !isOpen }"
    >
      <svg
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  isOpen: boolean;
}>();

defineEmits<{
  (e: 'toggle'): void;
}>();
</script>
