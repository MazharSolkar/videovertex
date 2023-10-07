import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillYoutube, AiOutlineSearch } from 'react-icons/ai';
import { BiSolidUserCircle } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { useEffect, useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/SearchSlice';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  // ===================Cache================

  /**
   * searchCache = {
   *    "iphone": ["iphone 11","iphone 14"]
   * }
   * searchQuery = iphone
   */

  // ===================Cache================

  const getSearchSuggestions = async () => {
    // console.log('API Call : ', searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  useEffect(() => {
    // Make an api call after evey key press
    //  But if the difference between 2 API calls is <200ms
    //  Decline the API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className='grid grid-flow-col shadow-lg p-5 m-2 place-items-center sticky top-0 bg-white z-10'>
      <div className='flex col-span-1'>
        <GiHamburgerMenu
          className='h-8 w-8 hover:cursor-pointer'
          onClick={toggleMenuHandler}
        />
        <div className='flex items-center justify-center'>
          <AiFillYoutube className='h-8 w-8 ml-4 text-red-600 mr-2' />{' '}
          <span className='font-bold text-xl'>YouTube</span>
        </div>
      </div>
      <div className='col-span-10'>
        <div className=''>
          <input
            className='border border-gray-400 col-span-10 p-2 rounded-l-full w-96'
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className='border border-gray-400 rounded-r-full p-2 bg-gray-100'>
            <AiOutlineSearch size={20} className='inline-block' />
          </button>
        </div>
        <div className='fixed py-2 px-4  bg-white w-96 shadow-lg rounded-lg border border-gray-100'>
          <ul>
            {showSuggestions &&
              suggestions.map((s) => (
                <li
                  key={s}
                  className='flex items-center py-2 shadow-sm hover:bg-gray-200'>
                  <AiOutlineSearch size={20} className='inline-block mr-2' />
                  {s}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className='col-span-1'>
        <BiSolidUserCircle className='h-8 w-8' />
      </div>
    </div>
  );
};

export default Head;
