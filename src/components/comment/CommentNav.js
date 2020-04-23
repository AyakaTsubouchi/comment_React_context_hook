import React, { useContext } from 'react';
import { CommentContext } from './CommentContext';

const CommentNav = () => {
  const [comments, setComments] = useContext(CommentContext);
  return (
    <>
      <div className="ui container">
        <h4 className="ui dividing header">{comments.length} comments</h4>
      </div>
    </>
  );
};
export default CommentNav;
