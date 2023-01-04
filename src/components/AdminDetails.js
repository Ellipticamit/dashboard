import RoundedImage from './RoundedImage';
import Location from '../icons/Location';

const AdminDetails = () => {
  return (
    <div className='flex items-center space-x-6 px-2 mb-16 lg:space-x-4 lg:px-1 lg:mb-0 lg:w-80'>
      <div className='relative'>
        <RoundedImage
          classes='w-20 h-20 border border-black lg:w-16 lg:h-16'
          imgsrc='admin.jpeg'
        />
        <div className='absolute -right-1 -bottom-1'>
          <RoundedImage
            classes='w-8 h-8 bg-slate-200 flex items-center justify-center'
            imgsrc='camera.svg'
          />
        </div>
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
