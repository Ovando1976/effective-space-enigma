import React from 'react';

const Post = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>By {post.author} on {post.date}</p>
    </div>
  );
};

export default Post;
