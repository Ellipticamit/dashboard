import { useState } from 'react';
import RoundedImage from './RoundedImage';
import Location from '../icons/Location';
import clsx from 'clsx';
import Camera from '../icons/Camera';

const AdminDetails = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='flex items-center space-x-6 px-2 mb-16 lg:space-x-4 lg:px-1 lg:mb-0 lg:w-72'>
      <div className='relative' onClick={() => setShowMenu(!showMenu)}>
        <RoundedImage
          classes={clsx('w-20 h-20 border border-black lg:w-16 lg:h-16', {
            'border-orange-50': showMenu,
          })}
          imgsrc='admin.jpeg'
        />
        <div className='absolute -right-1 -bottom-1'>
          <div
            className={clsx(
              'bg-white rounded-full overflow-hidden w-6 h-6 flex items-center justify-center text-slate-400 border border-slate-400 p-1',
              {
                '!border-orange-50 !text-orange-50': showMenu,
              }
            )}>
            <Camera />
          </div>
        </div>
        {showMenu && (
          <div className='absolute top-[96px] md:top-[88px] lg:top-[72px]  left-0 z-50 drop-shadow-md'>
            <ul className='flex flex-col w-28 bg-primary-100 text-white text-xs rounded-md font-semibold overflow-hidden'>
              <li className='p-2 px-4 bg-orange-50 cursor-pointer'>
                Upload New
              </li>
              <li className='p-2 px-4 hover:bg-orange-50 cursor-pointer'>
                Remove
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className=''>
        <h1 className='text-3xl lg:text-xl'>John Smith</h1>
        <div className='flex items-start space-x-1'>
          <div className='w-[12px] h-[10px]'>
            <Location />
          </div>
          <div>
            <h4 className='text-xs lg:text-xs'>Main St. Farmington, CA 123</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDetails;
