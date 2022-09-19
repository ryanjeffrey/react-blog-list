import React, { useEffect, useState } from 'react';
import { getBlogs } from '../../../services/blogs';
import BlogCard from '../../BlogCard/BlogCard';

export default function Main() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getBlogs();
      setBlogs(data);
    }
    fetchData();
  }, []);
  return (
    <main>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </main>
  );
}
