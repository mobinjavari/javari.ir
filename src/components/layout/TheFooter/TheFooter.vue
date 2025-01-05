<template>
  <footer
    class="mt-14 py-3 border-t border-gh-light-border dark:border-gh-dark-border"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-center">
        <span
          class="text-sm text-gh-light-muted dark:text-gh-dark-muted flex items-center gap-1.5"
        >
          <svg class="w-3.5 h-3.5" viewBox="0 0 512 512" fill="currentColor">
            <path
              d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 448c-110.532 0-200-89.451-200-200 0-110.531 89.451-200 200-200 110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200zm107.351-101.064c-9.614 9.712-45.53 41.396-104.065 41.396-82.43 0-140.484-61.425-140.484-141.567 0-79.152 60.275-139.401 139.762-139.401 55.531 0 88.738 26.62 97.593 34.779a11.965 11.965 0 0 1 1.936 15.322l-18.155 28.113c-3.841 5.95-11.966 7.282-17.499 2.921-8.595-6.776-31.814-22.538-61.708-22.538-48.303 0-77.916 35.33-77.916 80.082 0 41.589 26.888 83.692 78.277 83.692 32.657 0 56.843-19.039 65.726-27.225 5.27-4.857 13.596-4.039 17.82 1.738l19.865 27.17a11.947 11.947 0 0 1-1.152 15.518z"
            />
          </svg>
          {{ new Date().getFullYear() }} -
          <a href="https://javari.ir">Javari</a>
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
