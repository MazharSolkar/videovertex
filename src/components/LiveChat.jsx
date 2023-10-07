import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, generateRandomComment } from '../utils/helper';
// const data =

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState('');
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      //   console.log('API Polling');
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomComment(),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <div className='ml-2 p-2 border-2 border-black w-full h-[550px] bg-slate-200 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div className=''>
          {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className='w-full ml-2 p-2 rounded-b-lg border border-black flex'
        onSubmit={(e) => {
          e.preventDefault();
          //   console.log('LIVE MESSAGE ON SUBMIT', liveMessage);
          dispatch(
            addMessage({
              name: 'Mazhar',
              message: liveMessage,
            })
          );
          setLiveMessage('');
        }}>
        <input
          className='w-96 border border-black px-2'
          type='text'
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className='px-2 mx-2 text-green-200' type='submit'>
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
