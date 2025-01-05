<template>
  <section
    id="social"
    class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
  >
    <!-- Title with Line -->
    <div class="relative mb-12">
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
          Connect With Me
        </h2>
      </div>
    </div>

    <!-- Social Grid -->
    <div class="flex flex-wrap justify-center gap-6">
      <a
        v-for="social in socials"
        :key="social.name"
        :href="social.url"
        target="_blank"
        class="group relative overflow-hidden rounded-xl transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl min-w-[280px]"
      >
        <!-- Background -->
        <div
          :class="[
            'absolute inset-0 transition-all duration-500',
            `bg-gradient-to-br ${social.gradient}`,
            'group-hover:scale-110',
          ]"
        ></div>

        <!-- Content -->
        <div
          class="relative p-6 flex flex-col items-center justify-center min-h-[140px]"
        >
          <component
            :is="social.icon"
            class="w-8 h-8 text-white transition-all duration-300 group-hover:scale-110"
          />
          <span
            class="mt-3 text-white text-sm font-medium tracking-wide opacity-90 group-hover:opacity-100"
          >
            {{ social.label }}
          </span>
        </div>

        <!-- Glow Effect -->
        <div
          class="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        >
          <div
            class="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white to-transparent"
          ></div>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import GithubIcon from "@/components/common/icons/GithubIcon.vue";
import GitlabIcon from "@/components/common/icons/GitlabIcon.vue";
import TelegramIcon from "@/components/common/icons/TelegramIcon.vue";
import BlueSkyIcon from "@/components/common/icons/BlueSkyIcon.vue";
import YouTubeIcon from "@/components/common/icons/YouTubeIcon.vue";
import WebsiteIcon from "@/components/common/icons/WebsiteIcon.vue";
import EmailIcon from "@/components/common/icons/EmailIcon.vue";
import type { Component } from "vue";

interface Social {
  name: string;
  label: string;
  url: string;
  icon: Component;
  gradient: string;
}

const socials: Social[] = [
  {
    name: "github",
    label: "GitHub",
    url: "https://github.com/mobinjavari",
    icon: GithubIcon,
    gradient: "from-[#90a4ae] via-[#546e7a] to-[#37474f] bg-[215deg]",
  },
  {
    name: "telegram",
    label: "Telegram",
    url: "https://t.me/mobinjavari",
    icon: TelegramIcon,
    gradient: "from-[#4FC3F7] via-[#29B6F6] to-[#0277BD] bg-[215deg]",
  },
  {
    name: "bluesky",
    label: "BlueSky",
    url: "https://bsky.app/profile/javari.ir",
    icon: BlueSkyIcon,
    gradient: "from-[#59B9FF] to-[#0A7AFF] bg-[215deg]",
  },
  {
    name: "youtube",
    label: "YouTube",
    url: "https://youtube.com/@mobinjavari",
    icon: YouTubeIcon,
    gradient: "from-[#EF9A9A] to-[#C62828] bg-[215deg]",
  },
  {
    name: "email",
    label: "Email",
    url: "mailto:me@javari.ir",
    icon: EmailIcon,
    gradient: "from-[#4CAF50] via-[#43A047] to-[#388E3C] bg-[215deg]",
  },
  {
    name: "gitlab",
    label: "GitLab",
    url: "https://gitlab.com/mobinjavari",
    icon: GitlabIcon,
    gradient: "from-[#FC6D26] via-[#E24329] to-[#FCA326] bg-[215deg]",
  },
  {
    name: "website",
    label: "Website",
    url: "https://javari.ir",
    icon: WebsiteIcon,
    gradient: "from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] bg-[215deg]",
  },
];
</script>
