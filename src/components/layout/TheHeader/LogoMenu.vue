<template>
  <div class="flex items-center space-x-6">
    <div class="relative">
      <button
        @click.stop="toggleLogoMenu"
        class="w-8 h-8 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold hover:opacity-90 transition-opacity"
      >
        MJ
      </button>

      <!-- Logo Popup Menu -->
      <div
        v-show="isLogoMenuOpen"
        v-click-outside="closeLogo"
        class="absolute left-0 mt-2 w-56 rounded-xl bg-gh-light-canvas dark:bg-gh-dark-canvas backdrop-blur-3xl border border-gh-light-border/60 dark:border-gh-dark-border/40 shadow-xl"
      >
        <div class="bg-gradient-to-br from-blue-500/10 to-cyan-400/10 p-2 rounded-xl">
          <router-link
            v-for="item in menuItems"
            :key="item.name"
            :to="item.path"
            class="flex items-center space-x-3 px-4 py-2.5 text-sm rounded-lg hover:bg-gray-400/20 dark:hover:bg-gray-700/30 text-gray-800 dark:text-gray-200"
          >
            <svg
              class="w-5 h-5"
              :class="item.color"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="item.icon"
              />
            </svg>
            <span class="group-hover:translate-x-1 transition-transform">{{ item.name }}</span>
          </router-link>

          <div
            v-if="menuItems.length > 0"
            class="my-2 border-t border-gh-light-border/60 dark:border-gh-dark-border/60"
          ></div>

          <a
            href="https://github.com/mobinjavari"
            target="_blank"
            class="flex items-center space-x-3 px-4 py-2.5 text-sm rounded-lg hover:bg-gray-400/20 dark:hover:bg-gray-700/30 text-gray-800 dark:text-gray-200"
          >
            <GithubIcon class="w-5 h-5" />
            <span class="group-hover:translate-x-1 transition-transform">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GithubIcon from "@/components/common/icons/GithubIcon.vue";

interface MenuItem {
  name: string;
  path: string;
  icon: string;
  color: string;
}

interface CustomHTMLElement extends HTMLElement {
  clickOutsideEvent?: (event: Event) => void;
}

defineProps<{
  menuItems: MenuItem[];
}>();

const isLogoMenuOpen = ref(false);

const toggleLogoMenu = () => {
  isLogoMenuOpen.value = !isLogoMenuOpen.value;
};

const closeLogo = () => {
  isLogoMenuOpen.value = false;
};

// Custom directive for handling clicks outside
const vClickOutside = {
  mounted(el: CustomHTMLElement, binding: { value: () => void }) {
    el.clickOutsideEvent = (event: Event) => {
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value();
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted(el: CustomHTMLElement) {
    if (el.clickOutsideEvent) {
      document.removeEventListener("click", el.clickOutsideEvent);
    }
  },
};
</script>

<style scoped>
/* انیمیشن منو */
.absolute {
  animation: slideIn 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Smooth transition for menu visibility */
.absolute {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.glass-effect {
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
}
</style>
