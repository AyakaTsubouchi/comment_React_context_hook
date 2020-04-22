import React, { useEffect } from 'react';
import Movies from './Movies';
import axios from 'axios';

import Comment from './comment/Comment';
import { CommentProvider } from './comment/CommentContext';

export default function App() {
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
      console.log(res.data);
    });
  }, []);
  const defaultComments = () => {
    axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div>
      <Movies />
      <CommentProvider>
        <Comment />
      </CommentProvider>
    </div>
  );
}
