<template>
  <div
    class="min-h-screen flex items-center justify-center px-4 bg-gh-light-bg dark:bg-gh-dark-bg"
  >
    <div class="text-center space-y-8">
      <!-- 404 Number with Gradient -->
      <div class="relative">
        <h1
          class="text-9xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 text-transparent bg-clip-text drop-shadow-2xl"
        >
          404
        </h1>
        <div
          class="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-blue-600/20 -z-10 animate-pulse"
        ></div>
        <!-- Additional Glow Effect -->
        <div
          class="absolute -inset-1 blur-2xl bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-blue-600/10 -z-20 scale-150 animate-glow"
        ></div>
      </div>

      <!-- Error Message -->
      <div class="space-y-4">
        <h2
          class="text-2xl font-semibold text-gh-light-fg dark:text-gh-dark-fg"
        >
          Page not found
        </h2>
        <p class="text-gh-light-muted dark:text-gh-dark-muted max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. Perhaps you've
          mistyped the URL or the page has been moved.
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center justify-center space-x-4 pt-4">
        <router-link
          to="/"
          class="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-blue-500/20 dark:shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
        >
          Go Home
        </router-link>
        <button
          @click="$router.go(-1)"
          class="px-6 py-2.5 rounded-lg bg-gh-light-canvas dark:bg-gh-dark-canvas text-gh-light-fg dark:text-gh-dark-fg border border-gh-light-border dark:border-gh-dark-border hover:bg-gh-light-bg dark:hover:bg-gh-dark-bg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
        >
          Go Back
        </button>
      </div>
    </div>
  </div>
</template>
