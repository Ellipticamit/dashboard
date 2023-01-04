import clsx from 'clsx';

const TabItem = ({ title, current, handletabclick }) => {
  const isActive = title === current ? true : false;
  return (
    <li
      className={clsx(
        'relative flex flex-col justify-between rounded-md p-2 px-3',
        {
          'text-orange-50': isActive,
        }
      )}
      onClick={() => handletabclick(title)}>
      <span>{title}</span>
      {isActive && (
        <span className='absolute -bottom-1 left-0 w-full h-1 bg-orange-50 rounded-md mt-2'></span>
      )}
    </li>
  );
};

export default TabItem;
