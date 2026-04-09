---
title: Vies longues
---

<script setup>
import { data as pages } from './vies-longues.data.ts'
import { useRouter } from 'vitepress'

const router = useRouter()
console.log(pages)
</script>

# Vies longues

<div class="summary">
  <div
    v-for="p in pages"
    :key="p.url"
    class="summary-item"
    @click="router.go(p.url)"
  >
    <span class="title">{{ p.frontmatter.title ?? p.url }}</span>
    <span v-if="p.frontmatter.description" class="desc">{{ p.frontmatter.description }}</span>
  </div>
</div>

<style>
.summary { display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1rem; }
.summary-item { display: flex; flex-direction: column; padding: 1rem; border: 1px solid var(--vp-c-divider); border-radius: 8px; cursor: pointer; }
.summary-item:hover { border-color: var(--vp-c-brand); }
.title { font-weight: 600; color: var(--vp-c-brand); }
.desc { font-size: 0.9em; color: var(--vp-c-text-2); margin-top: 0.25rem; }
</style>
