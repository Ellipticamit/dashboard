import Tabs from '../components/Tabs';

const MobileUI = () => {
  return (
    <div className='container mx-auto py-4 px-3 md:hidden'>
      <div className='flex items-center justify-between'>
        <h1 className='font-semibold text-lg'> My Account</h1>
        <div className=''>
          <img src='/dot.svg' alt='' />
        </div>
      </div>
      <Tabs />
    </div>
  );
};

export default MobileUI;
