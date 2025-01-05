<template>
  <div class="mt-12">
    <!-- Title with Lines -->
    <div class="flex items-center justify-center mb-6">
      <div
        class="flex-grow my-10 h-[1px] bg-gh-light-border/80 dark:bg-gh-dark-border/80"
      ></div>
      <h3
        class="px-4 text-xl font-semibold text-gh-light-accent dark:text-gh-dark-accent font-mono"
      >
        Most Used Languages
      </h3>
      <div
        class="flex-grow h-[1px] bg-gh-light-border/80 dark:bg-gh-dark-border/80"
      ></div>
    </div>

    <!-- Content -->
    <div
      class="group bg-gh-light-canvas dark:bg-gh-dark-canvas p-8 rounded-xl border border-gh-light-border dark:border-gh-dark-border hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg"
    >
      <template v-if="!isLoading">
        <div>
          <!-- Language Bar -->
          <div
            class="h-10 w-full rounded-full overflow-hidden flex shadow-inner bg-gh-light-border/10 dark:bg-gh-dark-border/10"
          >
            <div class="flex w-full">
              <div
                v-for="lang in languages"
                :key="lang.name"
                :style="{
                  width: `${lang.percentage}%`,
                  backgroundColor: lang.color,
                }"
                class="h-full transition-all duration-500 hover:scale-y-110 group-hover:opacity-90"
                :title="`${lang.name} ${lang.percentage.toFixed(1)}%`"
              ></div>
            </div>
          </div>

          <!-- Language Labels -->
          <div
            class="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            <div
              v-for="lang in languages"
              :key="lang.name"
              class="flex items-center gap-3 group/lang"
            >
              <div
                class="w-3 h-3 rounded-full transition-transform group-hover/lang:scale-110"
                :style="{ backgroundColor: lang.color }"
              ></div>
              <div class="flex items-baseline gap-2">
                <span
                  class="text-sm font-medium text-gh-light-text dark:text-gh-dark-text group-hover/lang:text-blue-500 transition-colors"
                >
                  {{ lang.name }}
                </span>
                <span
                  class="text-xs text-gh-light-muted dark:text-gh-dark-muted"
                >
                  {{ lang.percentage.toFixed(1) }}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- Loading State -->
      <template v-else>
        <div class="space-y-8">
          <SkeletonLoader class="h-10 w-full rounded-full" />
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            <div v-for="i in 8" :key="i" class="flex items-center gap-3">
              <SkeletonLoader class="h-3 w-3 rounded-full" />
              <div class="space-y-1">
                <SkeletonLoader class="h-4 w-20" />
                <SkeletonLoader class="h-3 w-12" />
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LanguageStat } from "@/services/github";
import SkeletonLoader from "@/components/common/loading/SkeletonLoader.vue";

defineProps<{
  languages: LanguageStat[];
  isLoading: boolean;
}>();
</script>
