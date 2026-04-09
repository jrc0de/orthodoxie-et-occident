import { createContentLoader } from "vitepress";

export default createContentLoader("/synaxaire/vies-longues/*.md", {
  transform(data) {
    return data.sort((a, b) =>
      (a.frontmatter.title ?? a.url).localeCompare(b.frontmatter.title ?? b.url),
    );
  },
});
