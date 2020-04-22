import React from 'react';
import AddComment from './AddComment';
import CommentList from './CommentList';
import CommentNav from './CommentNav';

const Comment = () => {
  return (
    <>
      <CommentNav />
      <AddComment />
      <CommentList />
    </>
  );
};

export default Comment;
