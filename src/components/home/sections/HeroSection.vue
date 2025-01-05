<template>
  <section id="about" class="pt-44 pb-16 relative overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative z-10 max-w-4xl mx-auto">
        <!-- Hero Section -->
        <div class="text-center mb-16">
          <h1
            class="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
          >
            {{ config.name }}
          </h1>
          <p
            class="mt-6 text-lg sm:text-xl text-gh-light-muted dark:text-gh-dark-muted"
          >
            {{ config.about }}
          </p>
        </div>

        <!-- Key Areas Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(area, index) in keyAreas"
            :key="area.title"
            class="group relative bg-gh-light-canvas dark:bg-gh-dark-canvas p-6 rounded-xl border border-gh-light-border dark:border-gh-dark-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            :style="{ 'animation-delay': `${index * 200}ms` }"
          >
            <!-- Gradient Border on Hover -->
            <div
              class="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            ></div>

            <!-- Content -->
            <div class="relative">
              <div
                class="text-gh-light-accent dark:text-gh-dark-accent mb-3 group-hover:text-blue-500 transition-colors"
              >
                {{ area.title }}
              </div>
              <div
                class="text-sm text-gh-light-muted dark:text-gh-dark-muted group-hover:text-gh-light-text dark:group-hover:text-gh-dark-text transition-colors"
              >
                {{ area.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import siteConfig from '@/config/site.config';

const config = siteConfig;

interface KeyArea {
  title: string;
  description: string;
}

const keyAreas: KeyArea[] = [
  {
    title: "Open Source",
    description: "Contributing to and creating open source projects",
  },
  {
    title: "Web Development",
    description: "Building modern and responsive web applications",
  },
  {
    title: "Problem Solving",
    description: "Finding elegant solutions to complex problems",
  },
];
</script>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>
