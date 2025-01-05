<template>
  <div class="hidden md:flex items-center space-x-6">
    <a v-for="link in navigationLinks"
       :key="link.name"
       @click.prevent="smoothScroll(link.href)"
       :href="link.href"
       class="relative px-4 py-2 text-sm font-medium text-gh-light-muted dark:text-gh-dark-muted hover:text-blue-500 transition-all duration-300 group">
      <span class="relative z-10">{{ link.name }}</span>
      <!-- Hover Background Effect -->
      <span class="absolute inset-0 bg-gh-light-canvas dark:bg-gh-dark-canvas rounded-lg scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></span>
      <!-- Hover Border Effect -->
      <span class="absolute inset-0 border border-gh-light-border dark:border-gh-dark-border rounded-lg scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { smoothScroll } from "@/utils/smoothScroll";

interface NavLink {
  name: string;
  href: string;
}

defineProps<{
  navigationLinks: NavLink[];
}>();
</script>
