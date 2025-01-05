<template>
  <div
    class="bg-gh-light-bg dark:bg-gh-dark-bg text-gh-light-text dark:text-gh-dark-text font-mono"
  >
    <MetaTags />
    <!-- Infrastructure Background -->
    <div class="fixed inset-0 infrastructure-bg opacity-[0.03]"></div>

    <!-- Main Container -->
    <div class="relative min-h-screen">
      <main>
        <CustomCursor />
        <LoadingSpinner />
        <RouterView />
        <BackToTop />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import BackToTop from "@/components/common/BackToTop.vue";
import LoadingSpinner from "@/components/common/loading/LoadingSpinner.vue";
import CustomCursor from "@/components/common/CustomCursor.vue";
import { useThemeStore } from "@/stores/theme";
import MetaTags from "@/components/common/MetaTags.vue";

// Initialize theme on app start
const themeStore = useThemeStore();

onMounted(() => {
  // Remove preload class after initial page load
  document.documentElement.classList.add("preload");
  setTimeout(() => {
    document.documentElement.classList.remove("preload");
  }, 200);

  // Apply saved theme
  const savedTheme = localStorage.theme;
  if (savedTheme) {
    themeStore.updateTheme(savedTheme);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    themeStore.updateTheme("dark");
  }
});
</script>
