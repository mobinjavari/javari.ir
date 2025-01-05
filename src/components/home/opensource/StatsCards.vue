<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
    <template v-if="!isLoading">
      <!-- Contribution Stats -->
      <div
        class="group relative bg-gh-light-canvas dark:bg-gh-dark-canvas p-6 rounded-xl border border-gh-light-border dark:border-gh-dark-border hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
      >
        <!-- Background Glow -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
        ></div>

        <div class="relative">
          <!-- Header -->
          <div class="flex items-start justify-between">
            <div>
              <h3
                class="text-blue-500 dark:text-blue-400 font-semibold tracking-wide"
              >
                Contributions
              </h3>
              <p
                class="mt-2 text-3xl font-bold text-gh-light-text dark:text-gh-dark-text group-hover:text-blue-500 transition-colors"
              >
                {{ stats.contributions }}+
              </p>
            </div>
            <svg
              class="w-6 h-6 text-blue-500 dark:text-blue-400 transition-transform group-hover:scale-110 group-hover:rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>

          <!-- Description -->
          <p class="mt-2 text-sm text-gh-light-muted dark:text-gh-dark-muted">
            Total contributions on GitHub
          </p>
        </div>
      </div>

      <!-- Repositories -->
      <div
        class="group relative bg-gh-light-canvas dark:bg-gh-dark-canvas p-6 rounded-xl border border-gh-light-border dark:border-gh-dark-border hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
      >
        <!-- Background Glow -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
        ></div>

        <div class="relative">
          <div class="flex items-start justify-between">
            <div>
              <h3
                class="text-blue-500 dark:text-blue-400 font-semibold tracking-wide"
              >
                Repositories
              </h3>
              <p
                class="mt-2 text-3xl font-bold text-gh-light-text dark:text-gh-dark-text group-hover:text-blue-500 transition-colors"
              >
                {{ stats.repos }}+
              </p>
            </div>
            <svg
              class="w-6 h-6 text-blue-500 dark:text-blue-400 transition-transform group-hover:scale-110 group-hover:rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </div>
          <p class="mt-2 text-sm text-gh-light-muted dark:text-gh-dark-muted">
            Public repositories on GitHub
          </p>
        </div>
      </div>

      <!-- Stars -->
      <div
        class="group relative bg-gh-light-canvas dark:bg-gh-dark-canvas p-6 rounded-xl border border-gh-light-border dark:border-gh-dark-border hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
      >
        <!-- Background Glow -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
        ></div>

        <div class="relative">
          <div class="flex items-start justify-between">
            <div>
              <h3
                class="text-blue-500 dark:text-blue-400 font-semibold tracking-wide"
              >
                Stars Earned
              </h3>
              <p
                class="mt-2 text-3xl font-bold text-gh-light-text dark:text-gh-dark-text group-hover:text-blue-500 transition-colors"
              >
                {{ stats.stars }}+
              </p>
            </div>
            <svg
              class="w-6 h-6 text-blue-500 dark:text-blue-400 transition-transform group-hover:scale-110 group-hover:rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </div>
          <p class="mt-2 text-sm text-gh-light-muted dark:text-gh-dark-muted">
            Stars on public repositories
          </p>
        </div>
      </div>
    </template>

    <!-- Loading State -->
    <template v-else>
      <div
        v-for="i in 3"
        :key="i"
        class="bg-gh-light-canvas dark:bg-gh-dark-canvas p-6 rounded-lg border border-gh-light-border dark:border-gh-dark-border"
      >
        <div class="space-y-3">
          <SkeletonLoader class="h-6 w-24" />
          <SkeletonLoader class="h-8 w-16" />
          <SkeletonLoader class="h-4 w-32" />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import SkeletonLoader from "@/components/common/loading/SkeletonLoader.vue";

defineProps<{
  stats: {
    stars: number;
    repos: number;
    contributions: number;
  };
  isLoading: boolean;
}>();
</script>
