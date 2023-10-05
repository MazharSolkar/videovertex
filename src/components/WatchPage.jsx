import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
  //   const params = useParams();  //since we have serach parameter in route not normal parameter, we can't use useParams hook (it will return empty object)
  //   console.log(params);

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  console.log(searchParams.get('v'));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div>
      <iframe
        width='1200'
        height='600'
        src='https://www.youtube.com/embed/hXzcyx9V0xw?si=eXvWwY7HLIxnCyOg'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen></iframe>
    </div>
  );
};

export default WatchPage;
