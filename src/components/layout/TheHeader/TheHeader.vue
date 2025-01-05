<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gh-light-bg/80 dark:bg-gh-dark-bg/80 border-b border-gh-light-border dark:border-gh-dark-border"
  >
    <!-- Progress Bar -->
    <div class="h-0.5">
      <div
        class="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-150"
        :style="{ width: `${scrollProgress}%` }"
      ></div>
    </div>

    <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo Menu -->
        <LogoMenu :menu-items="menuItems" />

        <!-- Navigation Links -->
        <HeaderNav :navigation-links="navigationLinks" />

        <!-- Right Side Actions -->
        <div class="flex items-center space-x-4">
          <ThemeToggle />
          <MobileMenuButton :is-open="isMenuOpen" @toggle="isMenuOpen = !isMenuOpen" />
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <MobileMenu :is-open="isMenuOpen" :navigation-links="navigationLinks" />
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import HeaderNav from "./HeaderNav.vue";
import ThemeToggle from "./ThemeToggle.vue";
import LogoMenu from "./LogoMenu.vue";
import MobileMenu from "./MobileMenu.vue";
import MobileMenuButton from "./MobileMenuButton.vue";

interface NavLink {
  name: string;
  href: string;
}

defineProps<{
  navigationLinks: NavLink[];
}>();

const isMenuOpen = ref(false);
const scrollProgress = ref(0);

const updateScrollProgress = () => {
  const winScroll = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.value = (winScroll / height) * 100;
};

onMounted(() => {
  window.addEventListener("scroll", updateScrollProgress);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateScrollProgress);
});

const menuItems = [
  {
    name: "Blog",
    path: "/blog",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
    color: "text-blue-500/90 dark:text-blue-400",
  },
];
</script>

