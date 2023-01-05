import Button from '../../components/Button';
import FamilyCard from './FamilyCard';

const Family = ({ data, title }) => {
  return (
    <div className='bg-light-100 p-3 h-full rounded-md overflow-hidden md:px-2'>
      <div className='flex items-center justify-between md:mb-4'>
        <h2 className='text-lg md:text-base'>{title}</h2>
        <div className='flex items-center space-x-5 md:space-x-3'>
          <div className=''>
            <img
              src='/search.svg'
              alt=''
              className='md:w-4 md:h-4 lg:w-5 lg:h-5'
            />
          </div>
          <div className='w-24 h-8'>
            <Button text='Add New' color='success' />
          </div>
        </div>
      </div>
      <div className='flex flex-col space-y-2 mt-6 md:mt-3 overflow-y-scroll max-h-80 pb-8 lg:max-h-[360px]'>
        {data?.map((mitem, index) => (
          <FamilyCard key={index} item={mitem} />
        ))}
      </div>
    </div>
  );
};

export default Family;
