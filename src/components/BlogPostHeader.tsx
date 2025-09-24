import { FC } from 'react';

interface BlogPostHeaderProps {
  title: string;
  author: string;
  date: string;
  readTime: string;
}

const BlogPostHeader: FC<BlogPostHeaderProps> = ({ title, author, date, readTime }) => (
  <header className="bg-white rounded-xl shadow-md p-8 mb-8">
    <h1 className="text-4xl font-bold text-blue-600 mb-4">{title}</h1>
    <div className="flex items-center text-amber-700">
      <span className="mr-4">{author}</span>
      <span className="mr-4">•</span>
      <span className="mr-4">{date}</span>
      <span>•</span>
      <span className="ml-4">{readTime}</span>
    </div>
  </header>
);

export default BlogPostHeader;
