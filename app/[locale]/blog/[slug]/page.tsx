import { unstable_setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPostBySlug, markdownToHtml } from '@/lib/blog';
import { BlogPostingSchema } from '@/components/seo/structured-data';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = getPostBySlug(slug);

    return {
      title: post.title,
      description: post.description,
      keywords: post.keywords,
      openGraph: {
        title: post.title,
        description: post.description,
        type: 'article',
        publishedTime: post.date,
        authors: [post.author],
        images: post.image ? [{ url: post.image }] : undefined,
      },
    };
  } catch {
    return {
      title: 'Post Not Found',
    };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  unstable_setRequestLocale(locale);

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const htmlContent = await markdownToHtml(post.content);

  return (
    <>
      <BlogPostingSchema
        post={{
          title: post.title,
          description: post.description,
          url: `https://zedigital.tech/${locale}/blog/${slug}`,
          datePublished: post.date,
          dateModified: post.date,
          image: post.image,
          author: post.author,
        }}
      />

      <div className="min-h-screen bg-tech-white">
        {/* Header Spacer */}
        <div className="h-16" />

        {/* Blog Post */}
        <article className="section-container py-20">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              href={`/${locale}/blog`}
              className="text-sm text-blue-primary uppercase tracking-wider hover:underline mb-8 inline-block"
            >
              ← Back to Blog
            </Link>

            {/* Post Header */}
            <header className="mb-12">
              <time className="text-sm text-tech-grey-400 uppercase tracking-wider">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <h1 className="text-5xl font-light tracking-tight text-tech-dark mt-4 mb-6">
                {post.title}
              </h1>
              <p className="text-xl text-tech-grey-500 font-light mb-6">
                {post.description}
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-tech-grey-400">By {post.author}</span>
                <span className="text-tech-grey-300">•</span>
                <div className="flex gap-2">
                  {post.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="text-blue-primary uppercase tracking-wider"
                    >
                      #{keyword}
                    </span>
                  ))}
                </div>
              </div>
            </header>

            {/* Post Content */}
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-light prose-headings:tracking-tight prose-headings:text-tech-dark
                prose-p:text-tech-grey-600 prose-p:font-light prose-p:leading-relaxed
                prose-a:text-blue-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-tech-dark prose-strong:font-medium
                prose-code:text-tech-dark prose-code:bg-tech-grey-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                prose-pre:bg-tech-grey-900 prose-pre:text-tech-white
                prose-ul:text-tech-grey-600 prose-ol:text-tech-grey-600
                prose-li:marker:text-blue-primary
                prose-blockquote:border-l-blue-primary prose-blockquote:text-tech-grey-600 prose-blockquote:font-light
              "
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-tech-grey-200">
              <Link
                href={`/${locale}/blog`}
                className="text-sm text-blue-primary uppercase tracking-wider hover:underline"
              >
                ← Back to all posts
              </Link>
            </footer>
          </div>
        </article>
      </div>
    </>
  );
}
