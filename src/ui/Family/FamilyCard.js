import clsx from 'clsx';
import RoundedImage from '../../components/RoundedImage';

const FamilyCard = ({ item }) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-between rounded-md py-2 p-2 md:py-3 bg-light-200 font-semibold',
        {
          '!bg-orange-50 text-white': item?.admin,
        }
      )}>
      <div className='flex items-center space-x-4 md:space-x-2'>
        <RoundedImage classes='w-8 h-8' imgsrc={item.imgsrc} />
        <div className='md:text-xs'>{item.name}</div>
      </div>

      <div>
        {item.admin ? (
          <div className='flex items-center space-x-3 md:space-x-2'>
            <div className='uppercase bg-white py-1 px-4 text-black rounded-sm text-sm md:text-xs'>
              Admin
            </div>
            <div className='bg-white p-[4px] md:p-[2px] rounded-sm'>
              <img src='/users.svg' alt='' />
            </div>
          </div>
        ) : (
          <div className='py-1 px-2 rounded-md bg-light-300 uppercase text-sm md:text-xs'>
            Member
          </div>
        )}
      </div>
    </div>
  );
};

export default FamilyCard;
