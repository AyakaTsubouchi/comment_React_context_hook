import React, { useState, useContext } from 'react';
import { CommentContext } from './CommentContext';

const CommentList = () => {
  const [comments, setComments] = useContext(CommentContext);
  const handleDelete = (e) => {
    setComments(comments.filter((comment) => comment.id !== 2)); //it works
    //setComments(comments.filter((comment) => comment.id !== e.target.id)); //it doesn't work
    console.log(e.target.id); //it returns number
  };

  return comments.map((comment) => {
    const { name, email, body, id } = comment;
    return (
      <div key={id} className="ui container comments">
        <div className="comment">
          <a className="avatar">
            <img src="https://via.placeholder.com/600/771796" />
          </a>
          <div className="content">
            <div className="author">{name}</div>
            <div className="metadata">
              <div className="date">2 days ago</div>
              <div className="rating">
                <i className="star icon"></i>5 Faves
              </div>
              <div className="email">{email}</div>
            </div>
            <p className="text">{body}</p>
            <div className="actions">
              <a id={id} onClick={handleDelete}>
                Delete
              </a>
              <a id={id}>Edit</a>
            </div>
          </div>
          {/* <button id={id} onClick={handleDelete}>
            Delete
          </button>
          <button id={id}>Edit</button> */}
        </div>
      </div>
    );
  });
};
export default CommentList;
