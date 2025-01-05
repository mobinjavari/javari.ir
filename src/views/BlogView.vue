<template>
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="text-center space-y-6">
      <!-- Coming Soon Text -->
      <h1
        class="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 text-transparent bg-clip-text"
      >
        Coming Soon
      </h1>

      <!-- Description -->
      <p
        class="text-lg sm:text-xl text-gh-light-muted dark:text-gh-dark-muted max-w-md mx-auto"
      >
        We're working on something awesome! Stay tuned for updates.
      </p>

      <!-- Back Button -->
      <div class="pt-8">
        <router-link
          to="/"
          class="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
        >
          <svg
            class="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
