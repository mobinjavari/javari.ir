<template>
  <div class="cursor-dot hidden md:block" ref="cursorDot"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const cursorDot = ref<HTMLElement | null>(null);
let currentX = 0;
let currentY = 0;
let targetX = 0;
let targetY = 0;

const animate = () => {
  if (cursorDot.value) {
    // افزایش سرعت با تغییر ضریب از 0.2 به 0.4
    currentX += (targetX - currentX) * 0.4;
    currentY += (targetY - currentY) * 0.4;

    cursorDot.value.style.transform = `translate(${currentX}px, ${currentY}px)`;
    requestAnimationFrame(animate);
  }
};

const updateCursor = (e: MouseEvent) => {
  // موقعیت نوک کرسر (با کمی آفست)
  targetX = e.clientX + 3;
  targetY = e.clientY + 3;
};

onMounted(() => {
  document.addEventListener("mousemove", updateCursor);
  animate();
});

onUnmounted(() => {
  document.removeEventListener("mousemove", updateCursor);
});
</script>

<style scoped>
.cursor-dot {
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  background-color: #2563eb;
  box-shadow: 0 0 10px rgba(37, 99, 235, 0.5);
  border-radius: 50%;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: transform 0.08s ease;
}

/* افکت هاور روی لینک‌ها */
/* :global(a:hover) ~ .cursor-dot {
  transform: scale(1.5);
  background-color: #3b82f6;
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.6);
} */

/* افکت کلیک */
/* :global(body:active) .cursor-dot {
  transform: scale(0.8);
  background-color: #1d4ed8;
} */

/* Hide default cursor on desktop only */
@media (min-width: 768px) {
  * {
    cursor: none !important;
  }
}
</style>
