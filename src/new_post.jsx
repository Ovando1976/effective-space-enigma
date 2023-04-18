import React, { useState } from 'react';

const NewPostForm = ({ onCreatePost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleContentChange = (event) => setContent(event.target.value);
  const handleAuthorChange = (event) => setAuthor(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const post = {
      title,
      content,
      author,
      date: new Date().toISOString(),
    };
    onCreatePost(post);
    setTitle('');
    setContent('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} required />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <textarea id="content" value={content} onChange={handleContentChange} required />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input type="text" id="author" value={author} onChange={handleAuthorChange} required />
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default NewPostForm;
