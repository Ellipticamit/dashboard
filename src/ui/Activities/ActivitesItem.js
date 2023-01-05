import clsx from 'clsx';

const ActivitiesItem = ({ item, islast }) => {
  return (
    <div
      className={clsx(
        'relative flex items-start space-x-2 px-3 pb-2 md:px-0 md:pb-3',
        {
          'before:absolute before:w-[1px] before:h-full before:bg-zinc-300 before:z-20 before:left-9 before:top-1 md:before:left-6':
            islast,
        }
      )}>
      <div className='relative z-50 w-12 h-12 border-4 border-white rounded-full md:border-light-100'>
        <div className='w-full h-full bg-light-200 rounded-full flex items-center justify-center'>
          <img src='/users.svg' alt='' />
        </div>
      </div>

      <div className='text-xs flex flex-1 flex-col space-y-1'>
        <div className='text-sm'>
          <span>{item?.heading} </span>
          <span className='text-orange-50'> {item?.highlight}</span>
        </div>
        <div className='text-zinc-400'>{item?.subheading}</div>
      </div>
    </div>
  );
};

export default ActivitiesItem;
