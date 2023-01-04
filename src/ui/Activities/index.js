import Button from '../../components/Button';
import ActivitiesItem from './ActivitesItem';

const Activities = ({ data }) => {
  return (
    <div className='flex flex-col space-y-1 h-full md:bg-light-100 md:p-3 md:space-y-6'>
      <div className='hidden md:flex items-center justify-between'>
        <h1 className='text-base'>Activities </h1>
        <div className='w-20 h-8'>
          <Button text='View All' color='success' />
        </div>
      </div>
      <div className='overflow-y-scroll max-h-80 lg:max-h-fit'>
        {data?.map((item, index) => (
          <ActivitiesItem
            item={item}
            key={index}
            islast={data?.length - 1 !== index}
          />
        ))}
      </div>
    </div>
  );
};

export default Activities;
