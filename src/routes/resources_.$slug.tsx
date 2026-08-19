import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { posts } from "@/data/site";
import roofImg from "@/assets/blog-roof.webp";
import constructionImg from "@/assets/blog-construction.webp";
import aboutImg from "@/assets/about-inspector.webp";

const postImages: Record<string, string> = {
  roof: roofImg,
  construction: constructionImg,
  inspector: aboutImg,
};

export const Route = createFileRoute("/resources_/$slug")({
  component: BlogPost,
});

function BlogPost() {
  const { slug } = Route.useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-background px-4">
        <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
        <Link to="/resources" className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Resources
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Article Hero */}
      <section 
        className="relative min-h-[40vh] py-24 px-4 flex flex-col items-center justify-center text-center bg-cover bg-center" 
        style={{ backgroundImage: `url(${postImages[post.image]})` }}
      >
        <div className="absolute inset-0 bg-slate-950/85" />
        <div className="relative z-10 mt-16 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-xs mb-6">
            <span className="bg-primary px-3 py-1 font-semibold text-white uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-gray-300">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">{post.title}</h1>
        </div>
      </section>

      {/* Article Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <Link to="/resources" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to all articles
        </Link>
        
        <div className="prose prose-slate lg:prose-lg max-w-none text-foreground/80">
          <p className="lead text-xl font-medium text-slate-800 mb-8 border-l-4 border-primary pl-4">
            {post.excerpt}
          </p>
          
          {post.content?.map((paragraph, idx) => (
            <p key={idx} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {posts
              .filter((p) => p.slug !== slug)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  to={`/resources/${relatedPost.slug}`}
                  className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
                      {relatedPost.category}
                    </span>
                    <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h4>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read Article <ArrowRight className="size-4" />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}
