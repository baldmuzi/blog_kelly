<script setup lang="ts">
import { onMounted, ref } from 'vue'

const dark = ref(false)

function applyTheme(value: boolean) {
  dark.value = value
  document.documentElement.classList.toggle('dark', value)
  localStorage.setItem('blog_ljx-theme', value ? 'dark' : 'light')
}

onMounted(() => {
  applyTheme(localStorage.getItem('blog_ljx-theme') === 'dark')
})
</script>

<template>
  <button
    type="button"
    class="border border-ink px-3 py-1 text-xs font-medium tracking-wide hover:bg-ink hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
    :aria-pressed="dark"
    @click="applyTheme(!dark)"
  >
    {{ dark ? '浅色' : '深色' }}
  </button>
</template>
