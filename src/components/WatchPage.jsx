import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
  //   const params = useParams();  //since we have serach parameter in route not normal parameter, we can't use useParams hook (it will return empty object)
  //   console.log(params);

  const [searchParams, setSearchParams] = useSearchParams();
  //   console.log(searchParams);
  //   console.log(searchParams.get('v'));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className='flex flex-col'>
      <div>
        <iframe
          className='w-[100vw] h-[450px] lg:w-[1100px] lg:h-[550px]'
          src={`https://www.youtube.com/embed/${searchParams.get('v')}`}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen></iframe>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
