import useDropdown from '../hooks/useDropdown';

const DropdownMenu = ({ item }) => {
  const [ref, value] = useDropdown();
  return (
    <li ref={ref} className='relative w-40 py-3 cursor-pointer'>
      <div className='hover:text-orange-50'>{item.name}</div>
      {value && (
        <ul className='absolute top-12 left-0 bg-white w-40 rounded-md text-black drop-shadow-lg overflow-hidden '>
          {item?.submenu.map((mitem) => (
            <li
              key={mitem.name}
              className='p-3 px-4 font-semibold text-sm hover:bg-orange-50 hover:text-white '>
              {mitem.name}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default DropdownMenu;
