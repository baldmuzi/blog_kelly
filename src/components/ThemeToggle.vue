<script setup lang="ts">
import { onMounted, ref } from 'vue'
const dark = ref(false)
function applyTheme(value: boolean) { dark.value = value; document.documentElement.classList.toggle('dark', value); localStorage.setItem('blog_ljx-theme', value ? 'dark' : 'light') }
onMounted(() => applyTheme(localStorage.getItem('blog_ljx-theme') === 'dark'))
</script>
<template><button type="button" class="theme-toggle" :aria-pressed="dark" :aria-label="dark ? '切换为浅色模式' : '切换为深色模式'" @click="applyTheme(!dark)">{{ dark ? '浅色' : '深色' }}</button></template>
<style scoped>
.theme-toggle { border: 1px solid var(--line); border-radius: 7px; background: var(--card); color: var(--ink); cursor: pointer; padding: 7px 9px; font-size: .75rem; transition: border-color .18s ease, color .18s ease; }
.theme-toggle:hover { border-color: var(--accent); color: var(--accent); }
</style>
