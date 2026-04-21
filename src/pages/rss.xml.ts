import rss from '@astrojs/rss';
import { getBlogPosts } from '../data/blog';
import { siteMeta } from '../data/site';
import { toSitePath } from '../lib/site-paths';

export async function GET(context: { site: URL | undefined }) {
  const posts = await getBlogPosts(false);

  return rss({
    title: `${siteMeta.displayName} | Writing`,
    description: 'Backend engineering notes, research updates, and portfolio build decisions.',
    site: context.site ?? 'https://brandao07.github.io',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: toSitePath(`/blog/${post.id}/`),
      categories: post.data.tags,
    })),
  });
}
