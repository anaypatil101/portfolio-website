import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on AI, software engineering, and the things I'm building.",
};

const BLUR_FADE_DELAY = 0.04;

function readingTime(source: string): string {
  const words = source.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="grid-background">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="mb-10">
          <h1 className="font-bold text-4xl tracking-tight mb-2">Writing</h1>
          <p className="text-muted-foreground text-sm">
            Thoughts on AI, engineering, and the things I&apos;m building.
          </p>
        </div>
      </BlurFade>

      <div className="flex flex-col gap-4">
        {posts
          .sort((a, b) =>
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
              ? -1
              : 1
          )
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <article className="relative rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-foreground/20 hover:shadow-md hover:-translate-y-0.5">
                  {/* Top row: date + read time */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-muted-foreground">
                      {formatDate(post.metadata.publishedAt)}
                    </span>
                    <span className="text-muted-foreground/40 text-xs">·</span>
                    <span className="text-xs text-muted-foreground">
                      {readingTime(post.source)}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-semibold text-base leading-snug mb-2 group-hover:underline underline-offset-2 decoration-1">
                    {post.metadata.title}
                  </h2>

                  {/* Summary */}
                  {post.metadata.summary && (
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {post.metadata.summary}
                    </p>
                  )}

                  {/* Read more arrow */}
                  <div className="mt-4 flex items-center gap-1 text-xs font-medium text-foreground/60 group-hover:text-foreground transition-colors duration-200">
                    <span>Read article</span>
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </article>
              </Link>
            </BlurFade>
          ))}
      </div>
    </section>
  );
}
