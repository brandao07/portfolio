import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteMeta } from '../data/site';

export async function GET(context: { site: URL | undefined }) {
  const base = import.meta.env.BASE_URL;
  const posts = (await getCollection('blog', ({ data }) => data.draft !== true)).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf(),
  );

  return rss({
    title: `${siteMeta.displayName} | Writing`,
    description: 'Backend engineering notes, research updates, and portfolio build decisions.',
    site: context.site ?? 'https://brandao07.github.io',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `${base}blog/${post.id}/`,
      categories: post.data.tags,
    })),
  });
}
