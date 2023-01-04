import { useState } from 'react';
import AdminDetails from '../components/AdminDetails';
import RoundedImage from '../components/RoundedImage';
import Calender from '../icons/Calender';
import DropdownMenu from './DropdownMenu';
import MenuItem from './MenuItem';

const mobileMenuData = [
  {
    icon: <Calender />,
    name: 'Menu 1',
    link: '/menu1',
    submenu: [
      {
        name: 'Sub Menu 1',
        link: '/submenu1',
      },
      {
        name: 'Sub Menu 2',
        link: '/submenu2',
      },
      {
        name: 'Sub Menu 3',
        link: '/submenu3',
      },
    ],
  },
  {
    icon: <Calender />,
    name: 'Menu 2',
    link: '/menu 2',
  },
  {
    icon: <Calender />,
    name: 'Menu 3',
    link: '/menu3',
  },
  {
    icon: <Calender />,
    name: 'Logout',
    link: '/logout',
  },
];

const menuData = [
  {
    name: 'Menu 1',
    link: '#',
    submenu: [
      { name: 'My Programs', link: '' },
      { name: 'New Programs', link: '' },
      { name: 'People Invites', link: '' },
      { name: 'Program Requests', link: '' },
    ],
  },
  { name: 'Menu 2', link: '#' },
  { name: 'Menu 3', link: '#' },
];

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <header className='bg-primary-100 p-2 px-3'>
        <div className='container mx-auto flex items-center justify-between h-12 md:h-16'>
          <div className='flex items-center space-x-3'>
            <div
              className='flex flex-col space-y-1 md:space-y-1 cursor-pointer lg:hidden'
              onClick={() => setShowMobileMenu(true)}>
              <span className='w-7 h-1 bg-orange-50 rounded-md'></span>
              <span className='w-7 h-1 bg-orange-50 rounded-md'></span>
              <span className='w-7 h-1 bg-orange-50 rounded-md'></span>
            </div>
            <div>
              <h1 className='text-white font-bold text-xl nd:text-2xl'>LOGO</h1>
            </div>
            <div className='hidden lg:flex items-center'>
              <nav className='ml-60 text-white'>
                <ul className='flex items-center space-x-16'>
                  {menuData.map((item) =>
                    item?.submenu ? (
                      <DropdownMenu item={item} key={item.name} />
                    ) : (
                      <li
                        className='w-40 hover:text-orange-50 cursor-pointer py-3'
                        key={item.name}>
                        {item.name}
                      </li>
                    )
                  )}
                </ul>
              </nav>
            </div>
          </div>
          <div className='flex items-center space-x-5 lg:hidden'>
            <div>
              <img src='/bell.svg' alt='' />
            </div>
            <RoundedImage classes='w-8 h-8' imgsrc='admin.jpeg' />
          </div>
        </div>
      </header>
      {showMobileMenu && (
        <div className='fixed w-full h-full bg-primary-100 top-0 left-0 overflow-y-scroll z-50'>
          <div className='container mx-auto p-4 text-white'>
            <div className='flex items-center justify-between mb-10'>
              <div>
                <h1 className='text-white font-bold text-xl md:text-2xl'>
                  LOGO
                </h1>
              </div>
              <div
                className='bg-white p-3 rounded-md cursor-pointer hover:bg-slate-100'
                onClick={() => setShowMobileMenu(false)}>
                <img src='/close.svg' alt='' />
              </div>
            </div>
            <AdminDetails />
            <nav className='px-5'>
              <ul className='flex flex-col space-y-5'>
                {mobileMenuData.map((item) => (
                  <MenuItem item={item} key={item.name} />
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
