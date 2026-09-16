import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'

const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? 'owner/blog_ljx').split('/')
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true'

export default defineConfig({
  output: 'static',
  site: isGitHubPagesBuild ? `https://${owner}.github.io/${repository}/` : undefined,
  base: isGitHubPagesBuild ? `/${repository}` : '',
  integrations: [vue(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
})