import Link from "next/link";
import { post1 } from "@/components/blogs/p1";
import { post2 } from "@/components/blogs/p2";
import { post3 } from "@/components/blogs/p3";
import AdBanner from "@/components/AdBanner"; // 引入广告组件


const blogPosts = [post1, post2, post3];

export default function BlogListPage() {
  return (
    <>
      <head>
        <title>Hexa Sort Blog - Latest News, Tips & Updates</title>
        <meta 
          name="description" 
          content="Welcome to the Hexa Sort Blog. Explore the latest updates, tips, and strategies for the Hexa Sort puzzle game." 
        />
        <link 
          rel="canonical" 
          href="https://www.hexasortlevel.com/blogs" 
        />
        <meta 
          property="og:title" 
          content="Hexa Sort Blog - Latest News, Tips & Updates" 
        />
        <meta 
          property="og:description" 
          content="Welcome to the Hexa Sort Blog. Explore the latest updates, tips, and strategies for the Hexa Sort puzzle game." 
        />
        <meta 
          property="og:url" 
          content="https://www.hexasortlevel.com/blogs" 
        />
        <meta 
          property="og:image" 
          content="https://www.hexasortlevel.com/assets/hexasort-blog-thumbnail.jpg" 
        />
      </head>

      <div className="min-h-screen bg-[#f0f4f8] py-12">
        <div className="max-w-4xl mx-auto px-4">

          {/* 插入广告组件 */}
          <AdBanner />
          
          <h1 className="text-3xl font-bold text-blue-600 mb-8">Hexa Sort Blog</h1>

          <div className="space-y-8">
            {blogPosts.map(post => (
              <Link 
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="block bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h2 className="text-2xl font-bold text-blue-600 mb-2">{post.title}</h2>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="font-medium mr-4">{post.author}</span>
                  <span className="mr-4">•</span>
                  <span className="mr-4">{post.date}</span>
                  <span>•</span>
                  <span className="ml-4">{post.readTime}</span>
                </div>
                <p className="text-gray-700 line-clamp-3">
                  {post.content.replace(/<[^>]*>/g, '').substring(0, 200)}...
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
