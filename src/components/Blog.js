import React from 'react';

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <h2>Blog</h2>
      <p>Welcome to my blog where I explain math concepts in an easy-to-understand manner using the Feynman Technique!</p>
      <ul>
        <li><a href="#">Understanding Higher Categories</a></li>
        <li><a href="#">Motivic Homotopy Theory: A Primer</a></li>
        {/* You can add more blog posts here */}
      </ul>
    </section>
  );
}

export default Blog;
