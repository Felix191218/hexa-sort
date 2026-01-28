// src/app/blogs/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { post1 } from '@/components/blogs/p1';
import { post2 } from '@/components/blogs/p2';
import { post3 } from '@/components/blogs/p3';
import BlogPostHeader from '@/components/BlogPostHeader';
import BlogPostContent from '@/components/BlogPostContent';
import RelatedArticles from '@/components/RelatedArticles';
import AdBanner from "@/components/AdBanner"; // 引入广告组件


// 将所有博客文章合并到一个数组
const blogPosts = [post1, post2, post3];

// 调试函数：打印所有文章的slug
function debugSlugs() {
  console.log("Available slugs:");
  blogPosts.forEach(post => {
    console.log(`- ${post.slug}`);
  });
}

// 动态页面组件
export default function BlogPost({ params }: { params: { slug: string } }) {
  // 解码URL中的slug（处理特殊字符和空格）
  const decodedSlug = decodeURIComponent(params.slug);
  
  // 查找匹配的文章（不区分大小写和连字符格式）
  const post = blogPosts.find(p => 
    p.slug.toLowerCase().replace(/\s+/g, '-') === decodedSlug.toLowerCase().replace(/\s+/g, '-')
  );

  // 如果没有找到对应的文章，返回 404 页面
  if (!post) {
    debugSlugs(); // 打印可用的slug用于调试
    console.log("Requested slug:", decodedSlug);
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f0f4f8] py-12">
      <div className="max-w-4xl mx-auto px-4">
        <BlogPostHeader 
          title={post.title} 
          author={post.author} 
          date={post.date} 
          readTime={post.readTime} 
        />

        {/* 插入广告组件 */}
        <AdBanner />
        
        <BlogPostContent content={post.content} />
        <RelatedArticles postSlug={post.slug} blogPosts={blogPosts} />
      </div>
    </div>
  );
}

// 生成静态路径
export async function generateStaticParams() {
  // 确保 blogPosts 不为空
  if (!blogPosts || blogPosts.length === 0) {
    throw new Error("没有找到博客文章");
  }

  // 生成所有动态路径
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// 根据动态 slug 生成元数据（SEO）
export async function generateMetadata({ params }: { params: { slug: string } }) {
  // 检查 slug 是否存在
  if (!params.slug) {
    console.error("Slug not found in params");
    return {
      title: "Post Not Found",
      description: "Sorry, we couldn't find the post you were looking for.",
    };
  }

  // 解码URL中的slug
  const decodedSlug = decodeURIComponent(params.slug);

  // 查找匹配的文章
  const post = blogPosts.find((p) => p.slug === decodedSlug);

  // 如果没有找到文章，返回 404 页面元数据
  if (!post) {
    return {
      title: "Post Not Found",
      description: "Sorry, we couldn't find the post you were looking for.",
    };
  }

  // 如果找到文章，返回 SEO 数据
  return {
    title: `${post.title}`,
    description: post.description 
    ? post.description 
    : post.content.replace(/<[^>]*>/g, '').substring(0, 160),
  };
}
