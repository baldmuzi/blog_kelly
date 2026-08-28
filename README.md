# blog_ljx

一个由 Astro 构建的静态个人博客，页面使用 Astro，交互组件使用 Vue，样式使用 Tailwind CSS。

## 本地开发

```bash
npm install
npm run dev
```

## 构建与预览

```bash
npm run build
npm run preview
```

文章放在 `src/content/blog/`，使用 Markdown 编写。每篇文章需要 `title`、`description`、`pubDate` 和 `tags` frontmatter。

## GitHub Pages

工作流位于 `.github/workflows/deploy.yml`。推送到 `main` 或 `master` 后会使用 Node.js 和 npm 安装依赖、运行 Astro 静态构建，并部署 `dist/`。

首次部署前，在 GitHub 仓库 **Settings → Pages → Build and deployment** 中选择 **GitHub Actions**。项目页地址会根据 `GITHUB_REPOSITORY` 自动使用 `/<仓库名>/` 路径；仓库名保持为 `blog_ljx` 即可。
