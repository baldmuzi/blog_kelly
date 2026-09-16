import { useMemo, useState } from 'react'

export interface HomeArticle {
  slug: string
  title: string
  description: string
  category: string
  tags: string[]
  dateLabel: string
  dateISO: string
  readingTime: number
}

interface Props {
  posts: HomeArticle[]
  categories: string[]
  blogPath: string
}

export default function HomeArticles({ posts, categories, blogPath }: Props) {
  const [active, setActive] = useState('全部')
  const tabs = ['全部', ...categories]
  const filtered = useMemo(
    () => (active === '全部' ? posts : posts.filter((post) => post.category === active)),
    [active, posts],
  )

  return (
    <>
      <section className="section-heading" aria-labelledby="category-title">
        <div>
          <p className="eyebrow">文章分类</p>
          <h2 id="category-title" className="sr-only">按分类筛选</h2>
        </div>
      </section>
      <div className="category-tabs" role="tablist" aria-label="按分类筛选文章">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={active === tab}
            className={`category-tab${active === tab ? ' is-active' : ''}`}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <section className="section-heading" aria-labelledby="latest-title">
        <div>
          <p className="eyebrow">最新内容</p>
          <h2 id="latest-title">最近发布</h2>
        </div>
        <a className="text-link" href={blogPath}>
          查看全部文章 <span aria-hidden="true">→</span>
        </a>
      </section>

      {filtered.length ? (
        <ol className="article-list">
          {filtered.slice(0, 5).map((post) => (
            <li key={post.slug} className="article-row">
              <a className="article-row__link" href={`${blogPath}/${post.slug}`}>
                <div className="article-row__meta">
                  <time dateTime={post.dateISO}>{post.dateLabel}</time>
                  <span className="article-row__category">{post.category}</span>
                </div>
                <div className="article-row__body">
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                </div>
                <div className="article-row__foot">
                  <span className="article-row__tags">{post.tags.map((tag) => `#${tag}`).join(' ')}</span>
                  <span className="article-row__reading">{post.readingTime} 分钟阅读</span>
                </div>
              </a>
            </li>
          ))}
        </ol>
      ) : (
        <p className="empty-state">这个分类下还没有文章。</p>
      )}
    </>
  )
}
