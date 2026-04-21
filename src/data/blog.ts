import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

const dateFormatter = new Intl.DateTimeFormat('en', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

const sortPosts = (posts: BlogPost[]) =>
  [...posts].sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

export const getBlogPosts = async (includeDrafts = !import.meta.env.PROD) => {
  const posts = await getCollection('blog', ({ data }) => (includeDrafts ? true : data.draft !== true));

  return sortPosts(posts);
};

export const getSortedBlogTags = (posts: BlogPost[]) => {
  const tagCounts = posts.reduce<Map<string, number>>((acc, post) => {
    for (const tag of post.data.tags) {
      acc.set(tag, (acc.get(tag) ?? 0) + 1);
    }

    return acc;
  }, new Map());

  return [...tagCounts.entries()].sort((a, b) => {
    if (b[1] === a[1]) {
      return a[0].localeCompare(b[0]);
    }

    return b[1] - a[1];
  });
};

export const formatBlogDate = (value: Date) => dateFormatter.format(value);
