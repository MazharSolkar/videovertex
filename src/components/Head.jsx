import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillYoutube, AiOutlineSearch } from 'react-icons/ai';
import { BiSolidUserCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className='grid grid-flow-col shadow-lg p-5 m-2 place-items-center'>
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
      <div className='col-span-10 flex'>
        <input
          type='text'
          className='border border-gray-400 col-span-10 p-2 rounded-l-full w-96'
        />
        <button className='border border-gray-400 rounded-r-full p-2 bg-gray-100'>
          <AiOutlineSearch size={20} />
        </button>
      </div>
      <div className='col-span-1'>
        <BiSolidUserCircle className='h-8 w-8' />
      </div>
    </div>
  );
};

export default Head;
