import React from 'react';
import { BiSolidUserCircle } from 'react-icons/bi';

const commentsData = [
  {
    name: 'Mazhar Solkar',
    text: 'Lorem ipsum dolor sit amet consectetur.',
    replies: [
      {
        name: 'Mazhar Solkar',
        text: 'Lorem ipsum dolor sit amet consectetur.',
        replies: [
          {
            name: 'Mazhar Solkar',
            text: 'Lorem ipsum dolor sit amet consectetur.',
            replies: [],
          },
          {
            name: 'Mazhar Solkar',
            text: 'Lorem ipsum dolor sit amet consectetur.',
            replies: [],
          },
        ],
      },
      {
        name: 'Mazhar Solkar',
        text: 'Lorem ipsum dolor sit amet consectetur.',
        replies: [],
      },
    ],
  },
  {
    name: 'Mazhar Solkar',
    text: 'Lorem ipsum dolor sit amet consectetur.',
    replies: [],
  },
  {
    name: 'Mazhar Solkar',
    text: 'Lorem ipsum dolor sit amet consectetur.',
    replies: [],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className='pl-5 border border-1-black ml-5'>
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className='px-3 bg-gray-200 rounded-lg p-1 flex flex-col my-2'>
      <div className='flex items-center'>
        <BiSolidUserCircle size={45} className='mr-2' />
        <div>
          <p className='font-bold'>{name}</p>
          <p className=''>{text}</p>
        </div>
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className='m-2 p-5'>
      <h1 className='font-bold'>Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
