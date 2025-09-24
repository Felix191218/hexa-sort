import { FC } from 'react';

interface BlogPostContentProps {
  content: string;
}

const BlogPostContent: FC<BlogPostContentProps> = ({ content }) => (
  <div
    className="prose prose-lg max-w-none text-amber-700"
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

export default BlogPostContent;
