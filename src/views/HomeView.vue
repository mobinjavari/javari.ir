<template>
  <TheHeader :navigation-links="navigationLinks" />
  <HomeLayout />
  <TheFooter />
</template>

<script setup lang="ts">
import TheHeader from "@/components/layout/TheHeader/TheHeader.vue";
import TheFooter from "@/components/layout/TheFooter/TheFooter.vue";
import HomeLayout from "@/components/home/HomeLayout.vue";

const navigationLinks = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Open Source",
    href: "#opensource",
  },
  {
    name: "Social",
    href: "#social",
  },
];
</script>
