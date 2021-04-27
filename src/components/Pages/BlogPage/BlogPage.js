import React from "react";
import { Link } from "react-router-dom";
import "./BlogPage.css";
import { posts } from "../../Molecules/BlogData";

function PrintBlogPosts() {
  return posts.map((post) => {
    return (
      <article key={post.id} className="post-wrapper" aria-label={post.alt}>
        <h2>{post.title}</h2>
        <h4>{post.date}</h4>
        <div className="post-img-wrapper">
          <img
            src={post.img}
            alt={post.alt}
            role={post.role}
            aria-label={post.ariaLabel}
          />
        </div>
        <article key={post.id} className="post-text-wrapper">
          {post.body}
        </article>
      </article>
    );
  });
}

function BlogPage() {
  return (
    <>
      <div className="blogpage-wrapper">
        <Link to="/" style={{ color: "black" }}>
          <h3>← Back Home</h3>
        </Link>
        <div className="posts-wrapper">
          <PrintBlogPosts />
        </div>
        <Link to="/" style={{ color: "black" }}>
          <h3>← Back Home</h3>
        </Link>
      </div>
    </>
  );
}

export default BlogPage;
