<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useHead } from "@vueuse/head";
import siteConfig from "@/config/site.config";

const route = useRoute();

const title = computed(() => {
  const pageTitle = route.meta.title as string;
  return pageTitle
    ? siteConfig.title.template.replace("%s", pageTitle)
    : siteConfig.title.default;
});

const description = computed(
  () => (route.meta.description as string) || siteConfig.description
);

const url = computed(() => `${siteConfig.url}${route.path}`);

// Update head meta tags
useHead({
  title,
  meta: [
    // Basic Meta Tags
    { name: "description", content: description },
    { name: "keywords", content: siteConfig.meta.keywords.join(", ") },
    { name: "author", content: siteConfig.meta.author },
    { name: "robots", content: siteConfig.meta.robots },
    { name: "googlebot", content: siteConfig.meta.googlebot },

    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: siteConfig.image.url },
    { property: "og:image:width", content: String(siteConfig.image.width) },
    { property: "og:image:height", content: String(siteConfig.image.height) },
    { property: "og:image:alt", content: siteConfig.image.alt },
    { property: "og:locale", content: siteConfig.locale },
    { property: "og:site_name", content: siteConfig.name },

    // Theme Color
    { name: "theme-color", content: siteConfig.themeColor },

    // Mobile
    { name: "format-detection", content: "telephone=no" },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "default" },
  ],
  link: [
    { rel: "canonical", href: url },
    { rel: "icon", href: "/favicon.ico" },
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
  ],
});
</script>

<template>
  <div></div>
</template>
