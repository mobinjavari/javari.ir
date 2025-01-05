<template>
  <transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 -translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-2"
  >
    <div
      v-if="isOpen"
      class="md:hidden border-t border-gh-light-border dark:border-gh-dark-border"
    >
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4 bg-gh-light-bg/95 dark:bg-gh-dark-bg/95 backdrop-blur-md">
        <a
          v-for="link in navigationLinks"
          :key="link.name"
          :href="link.href"
          @click.prevent="smoothScroll(link.href)"
          class="block py-2 text-sm hover:text-blue-500 transition-colors"
        >
          {{ link.name }}
        </a>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { smoothScroll } from "@/utils/smoothScroll";

interface NavLink {
  name: string;
  href: string;
}

defineProps<{
  isOpen: boolean;
  navigationLinks: NavLink[];
}>();
</script>
