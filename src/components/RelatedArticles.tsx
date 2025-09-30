import Link from "next/link";

// 定义 BlogPost 类型
interface BlogPost {
  slug: string;
  title: string;
  description?: string;
  content: string;
}

export default function RelatedArticles({
  postSlug,
  blogPosts
}: {
  postSlug: string;
  blogPosts: BlogPost[]; // 使用定义的 BlogPost 类型
}) {
  // 过滤掉当前文章
  const relatedPosts = blogPosts.filter(post => post.slug !== postSlug);
  
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {relatedPosts.map(post => (
          <Link 
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{post.title}</h3>
            <p className="text-gray-600 line-clamp-3">
              {post.content.replace(/<[^>]*>/g, '').substring(0, 150)}...
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
