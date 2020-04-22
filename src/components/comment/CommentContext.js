import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CommentContext = createContext();

export const CommentProvider = (props) => {
  const [comments, setComments] = useState(defaultList);
  //const [comments, setComments] = useState([]);
  // useEffect(() => {
  //   defaultComments();
  // }, []);

  // const defaultComments = () => {
  //   axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
  //     console.log(res.data);
  //     setComments([
  //       ...comments,

  //       {
  //         ostId: res.data.ostId,
  //         id: res.data.id,
  //         name: res.data.name,
  //         email: res.data.email,
  //         body: res.data.body,
  //       },
  //     ]);
  //   });
  // };

  return (
    <CommentContext.Provider value={[comments, setComments]}>
      {props.children}
    </CommentContext.Provider>
  );
};
export const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_COMMENT':
      return {
        ...state, //TODO
        comments: state.comments.filter(
          (comment) => comment.id !== action.payload
        ),
      };
    case 'ADD_COMMENT':
      return {
        ...state,
        comments: [action.payload, ...state.comments],
      };
    default:
      return state;
  }
};
export const CommentConsumer = CommentContext.Consumer;

const defaultList = [
  {
    postId: 1,
    id: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body:
      'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
  },
  {
    postId: 1,
    id: 2,
    name: 'quo vero reiciendis velit similique earum',
    email: 'Jayne_Kuhic@sydney.com',
    body:
      'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
  },
  {
    postId: 1,
    id: 3,
    name: 'odio adipisci rerum aut animi',
    email: 'Nikita@garfield.biz',
    body:
      'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
  },
];
