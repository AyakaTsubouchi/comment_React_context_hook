import React, { useState, useContext } from 'react';
import { CommentContext } from './CommentContext';
import '../css/style.css';

const AddComment = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [body, setBody] = useState();
  const [comments, setComments] = useContext(CommentContext);

  const handleOnChange = (e) => {
    if (e.target.id === 'name') {
      setName(e.target.value);
    } else if (e.target.id === 'email') {
      setEmail(e.target.value);
    } else if (e.target.id === 'body') {
      setBody(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([{ name, email, body }, ...comments]);
    console.log(comments);
    setName('');
    setEmail('');
    setBody('');
  };

  return (
    <>
      <div className="ui container">
        <form className="ui form">
          <div className="field">
            <textarea
              onChange={handleOnChange}
              value={body}
              id="body"
              placeholder="comment"
              rows="2"></textarea>
          </div>
          <div className="field">
            <div className="field">
              <input
                type="text"
                onChange={handleOnChange}
                value={name}
                id="name"
                placeholder="name"
              />
              <input
                onChange={handleOnChange}
                value={email}
                id="email"
                type="text"
                placeholder="email"
              />
            </div>
          </div>

          <button className="ui button" onClick={handleSubmit}>
            POST
          </button>
        </form>
      </div>
    </>
  );
};
export default AddComment;
