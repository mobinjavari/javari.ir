<template>
  <button
    @click="toggleTheme"
    class="ripple p-2 rounded-lg hover:bg-gh-light-canvas dark:hover:bg-gh-dark-canvas transition-colors text-gh-light-accent dark:text-gh-dark-accent"
    :title="currentThemeLabel"
  >
    <transition name="theme-switch" mode="out-in">
      <component :is="currentIcon" class="w-5 h-5" :key="themeStore.theme" />
    </transition>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useThemeStore } from "@/stores/theme";
import SunIcon from "@/components/common/icons/SunIcon.vue";
import MoonIcon from "@/components/common/icons/MoonIcon.vue";
import ComputerIcon from "@/components/common/icons/ComputerIcon.vue";

const themeStore = useThemeStore();

const themeOptions = [
  { value: "light", label: "Light Mode", icon: SunIcon },
  { value: "dark", label: "Dark Mode", icon: MoonIcon },
  { value: "system", label: "System Theme", icon: ComputerIcon },
];

const currentThemeIndex = computed(() =>
  themeOptions.findIndex((option) => option.value === themeStore.theme)
);

const currentIcon = computed(() => themeOptions[currentThemeIndex.value].icon);
const currentThemeLabel = computed(
  () => themeOptions[currentThemeIndex.value].label
);

const toggleTheme = () => {
  const currentTheme = themeStore.theme;
  if (currentTheme === 'light') {
    themeStore.updateTheme('dark');
  } else if (currentTheme === 'dark') {
    themeStore.updateTheme('system');
  } else {
    themeStore.updateTheme('light');
  }
};
</script>
<style scoped>
.theme-icon-enter-active,
.theme-icon-leave-active {
  transition: all 0.3s ease;
}

.theme-icon-enter-from {
  opacity: 0;
  transform: rotate(-180deg) scale(0.5);
}

.theme-icon-leave-to {
  opacity: 0;
  transform: rotate(180deg) scale(0.5);
}
</style>
