import { useState } from 'react';
import clsx from 'clsx';

const MenuItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };

  return (
    <li
      className={clsx('cursor-pointer flex flex-col hover:text-orange-50', {
        'text-orange-50': open,
      })}>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-3'>
          <div>{item.icon}</div>
          <div>{item.name}</div>
        </div>
        {item?.submenu && (
          <div className='rotate-180' onClick={handleMenuClick}>
            <img src='up.svg' alt='' />
          </div>
        )}
      </div>
      {item?.submenu && open && (
        <ul className='relative pl-8 mt-2 space-y-2 before:absolute before:block before:w-[2px] before:bg-orange-50 before:h-full before:left-2 before:-top-4'>
          {item.submenu.map((mitem) => (
            <li
              className='relative pl-2 text-white hover:text-orange-50 py-1 before:absolute before:w-5 before:h-[2px] before:bg-orange-50 before:top-1/2 before:-left-6'
              key={mitem?.name}>
              {mitem?.name}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
