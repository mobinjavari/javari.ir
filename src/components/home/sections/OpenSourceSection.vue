<template>
  <section id="opensource" class="py-12">
    <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative mb-10">
        <!-- Background Line -->
        <div class="absolute inset-0 flex items-center">
          <div
            class="w-full border-t border-gh-light-border dark:border-gh-dark-border"
          ></div>
        </div>

        <!-- Title -->
        <div class="relative flex items-center">
          <span
            class="pr-3 text-blue-500 font-mono bg-gh-light-bg dark:bg-gh-dark-bg"
            >~/</span
          >
          <h2 class="text-2xl font-bold pr-6 bg-gh-light-bg dark:bg-gh-dark-bg">
            Open Source
          </h2>
        </div>
      </div>

      <div class="space-y-12">
        <StatsCards :stats="stats" :is-loading="isLoading" />
        <FeaturedProjects :repos="pinnedRepos" :is-loading="isLoading" />
        <LanguageStats :languages="languageStats" :is-loading="isLoading" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  fetchGitHubStats,
  fetchPinnedRepos,
  fetchLanguageStats,
} from "@/services/github";
import type { PinnedRepo, LanguageStat } from "@/services/github";
import StatsCards from "../opensource/StatsCards.vue";
import FeaturedProjects from "../opensource/FeaturedProjects.vue";
import LanguageStats from "../opensource/LanguageStats.vue";

const isLoading = ref(true);
const stats = ref({ stars: 0, repos: 0, contributions: 0 });
const pinnedRepos = ref<PinnedRepo[]>([]);
const languageStats = ref<LanguageStat[]>([]);

onMounted(async () => {
  try {
    const [statsData, reposData, langsData] = await Promise.all([
      fetchGitHubStats(),
      fetchPinnedRepos(),
      fetchLanguageStats(),
    ]);

    stats.value = statsData;
    pinnedRepos.value = reposData;
    languageStats.value = langsData;
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
  } finally {
    isLoading.value = false;
  }
});
</script>
