import React from 'react';

const VideoCard = ({ info }) => {
  //   console.log('VIDEO CARD : ', info);
  if (!info) {
    return (
      <h1 className='w-full bg-green-500 flex items-center justify-center'>
        please wait
      </h1>
    );
  }
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
      <img className='rounded-lg' src={thumbnails.medium.url} alt='THUMBNAIL' />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className='p-1 m-1 border border-red-900'>
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
