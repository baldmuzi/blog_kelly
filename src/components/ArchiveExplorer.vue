<script setup lang="ts">
import { computed, ref, watch } from 'vue'

interface Article {
  slug: string
  title: string
  description: string
  category: string
  tags: string[]
  dateLabel: string
  dateISO: string
  readingTime: number
}

const props = defineProps<{
  posts: Article[]
  categories: string[]
  tags: string[]
  blogPath: string
  pageSize?: number
}>()

const pageSize = props.pageSize ?? 7
const selectedCategory = ref('全部')
const currentPage = ref(1)

const categoryCounts = computed(() => {
  const counts = new Map<string, number>()
  for (const post of props.posts) counts.set(post.category, (counts.get(post.category) ?? 0) + 1)
  return counts
})

const filteredPosts = computed(() =>
  selectedCategory.value === '全部' ? props.posts : props.posts.filter((post) => post.category === selectedCategory.value),
)

const totalPages = computed(() => Math.max(1, Math.ceil(filteredPosts.value.length / pageSize)))

const pagedPosts = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredPosts.value.slice(start, start + pageSize)
})

watch(selectedCategory, () => { currentPage.value = 1 })

function selectCategory(category: string) {
  selectedCategory.value = category
}

function goToPage(page: number) {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
}
</script>

<template>
  <div class="archive-layout">
    <aside class="archive-sidebar bento-card">
      <div class="archive-sidebar__section">
        <p class="eyebrow">分类</p>
        <ul class="category-list">
          <li>
            <button type="button" :class="['category-list__item', { 'is-active': selectedCategory === '全部' }]" @click="selectCategory('全部')">
              <span>全部</span><span class="category-list__count">{{ posts.length }}</span>
            </button>
          </li>
          <li v-for="category in categories" :key="category">
            <button type="button" :class="['category-list__item', { 'is-active': selectedCategory === category }]" @click="selectCategory(category)">
              <span>{{ category }}</span><span class="category-list__count">{{ categoryCounts.get(category) ?? 0 }}</span>
            </button>
          </li>
        </ul>
      </div>
      <div v-if="tags.length" class="archive-sidebar__section">
        <p class="eyebrow">常用标签</p>
        <div class="tag-index__items">
          <span v-for="tag in tags" :key="tag">#{{ tag }}</span>
        </div>
      </div>
    </aside>

    <div class="archive-main">
      <ol v-if="pagedPosts.length" class="article-list">
        <li v-for="post in pagedPosts" :key="post.slug" class="article-row">
          <a class="article-row__link" :href="`${blogPath}/${post.slug}`">
            <div class="article-row__meta">
              <time :datetime="post.dateISO">{{ post.dateLabel }}</time>
              <span class="article-row__category">{{ post.category }}</span>
            </div>
            <div class="article-row__body">
              <h3>{{ post.title }}</h3>
              <p>{{ post.description }}</p>
            </div>
            <div class="article-row__foot">
              <span class="article-row__tags">{{ post.tags.map((tag) => `#${tag}`).join(' ') }}</span>
              <span class="article-row__reading">{{ post.readingTime }} 分钟阅读</span>
            </div>
          </a>
        </li>
      </ol>
      <p v-else class="empty-state">这个分类下还没有文章。</p>

      <nav v-if="totalPages > 1" class="pagination" aria-label="文章分页">
        <button type="button" class="pagination__nav" :disabled="currentPage === 1" @click="goToPage(currentPage - 1)">← 上一页</button>
        <button
          v-for="page in totalPages"
          :key="page"
          type="button"
          class="pagination__page"
          :class="{ 'is-active': page === currentPage }"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>
        <button type="button" class="pagination__nav" :disabled="currentPage === totalPages" @click="goToPage(currentPage + 1)">下一页 →</button>
      </nav>
    </div>
  </div>
</template>
