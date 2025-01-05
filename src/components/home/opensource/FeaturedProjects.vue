<template>
  <div>
    <!-- Title with Lines -->
    <div class="flex items-center justify-center mb-6">
      <div
        class="flex-grow my-10 h-[1px] bg-gh-light-border/80 dark:bg-gh-dark-border/80"
      ></div>
      <h3
        class="px-4 text-xl font-semibold text-gh-light-accent dark:text-gh-dark-accent font-mono"
      >
        Featured Projects
      </h3>
      <div
        class="flex-grow h-[1px] bg-gh-light-border/80 dark:bg-gh-dark-border/80"
      ></div>
    </div>

    <!-- Content -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <template v-if="!isLoading && repos.length > 0">
        <a
          v-for="repo in repos"
          :key="repo.name"
          :href="repo.url"
          target="_blank"
          class="group block p-6 bg-gh-light-canvas dark:bg-gh-dark-canvas rounded-xl border border-gh-light-border dark:border-gh-dark-border hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div class="flex items-center justify-between mb-4">
            <h4
              class="text-lg font-semibold text-gh-light-accent dark:text-gh-dark-accent group-hover:text-blue-500 transition-colors"
            >
              {{ repo.name }}
            </h4>
            <div
              class="flex items-center gap-4 text-gh-light-muted dark:text-gh-dark-muted"
            >
              <div class="flex items-center gap-1.5">
                <svg
                  class="w-4 h-4 transition-colors group-hover:text-yellow-500"
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
                <span class="font-medium">{{ repo.stargazerCount }}</span>
              </div>
              <div class="flex items-center gap-1.5">
                <svg
                  class="w-4 h-4 transition-colors group-hover:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"
                  />
                </svg>
                <span class="font-medium">{{ repo.forkCount }}</span>
              </div>
            </div>
          </div>
          <p
            class="text-gh-light-muted dark:text-gh-dark-muted text-sm mb-4 line-clamp-2"
          >
            {{ repo.description || "No description provided" }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="lang in repo.languages.nodes"
              :key="lang.name"
              class="px-2.5 py-1 text-xs font-medium rounded-full bg-gh-light-border/30 dark:bg-gh-dark-border/30 text-gh-light-accent dark:text-gh-dark-accent"
            >
              {{ lang.name }}
            </span>
          </div>
          <div
            class="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity -z-10"
          ></div>
        </a>
      </template>
      <template v-if="isLoading">
        <div
          v-for="i in 6"
          :key="i"
          class="bg-gh-light-canvas dark:bg-gh-dark-canvas p-6 rounded-lg border border-gh-light-border dark:border-gh-dark-border"
        >
          <div class="space-y-4">
            <div class="flex justify-between">
              <SkeletonLoader class="h-6 w-32" />
              <div class="flex gap-3">
                <SkeletonLoader class="h-4 w-12" />
                <SkeletonLoader class="h-4 w-12" />
              </div>
            </div>
            <SkeletonLoader class="h-4 w-full" />
            <div class="flex gap-2">
              <SkeletonLoader class="h-6 w-16" />
              <SkeletonLoader class="h-6 w-16" />
              <SkeletonLoader class="h-6 w-16" />
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PinnedRepo } from "@/services/github";
import SkeletonLoader from "@/components/common/loading/SkeletonLoader.vue";

defineProps<{
  repos: PinnedRepo[];
  isLoading: boolean;
}>();
</script>
