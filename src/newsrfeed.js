import React, { useState, useEffect } from 'react';
import { Card, Divider } from 'antd';
import axios from 'axios';

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/posts').then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Card key={post.id}>
          <p>{post.content}</p>
          {post.imageUrl && <img src={post.imageUrl} alt="Post" />}
        </Card>
      ))}
    </div>
  );
};

export default NewsFeed;
