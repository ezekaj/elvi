import { unstable_setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);

  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-tech-white">
      {/* Header Spacer */}
      <div className="h-16" />

      {/* Blog Header */}
      <section className="section-container py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-light tracking-tight text-tech-dark mb-6">
            Blog
          </h1>
          <p className="text-xl text-tech-grey-500 font-light">
            Insights on AI, software development, and digital innovation
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-container pb-32">
        <div className="max-w-4xl space-y-12">
          {posts.length === 0 ? (
            <p className="text-tech-grey-500">No blog posts yet. Check back soon!</p>
          ) : (
            posts.map((post) => (
              <article
                key={post.slug}
                className="border-b border-tech-grey-200 pb-12 last:border-0"
              >
                <Link href={`/${locale}/blog/${post.slug}`} className="group block">
                  <time className="text-sm text-tech-grey-400 uppercase tracking-wider">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <h2 className="text-3xl font-light tracking-tight text-tech-dark mt-4 mb-4 group-hover:text-blue-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-lg text-tech-grey-500 font-light mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-tech-grey-400">By {post.author}</span>
                    <span className="text-tech-grey-300">•</span>
                    <div className="flex gap-2">
                      {post.keywords.slice(0, 3).map((keyword) => (
                        <span
                          key={keyword}
                          className="text-blue-primary uppercase tracking-wider"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-blue-primary uppercase tracking-wider group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </Link>
              </article>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
