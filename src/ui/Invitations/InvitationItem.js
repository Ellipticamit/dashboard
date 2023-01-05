import RoundedImage from '../../components/RoundedImage';

const InvitationItem = () => {
  return (
    <div className='bg-light-200 p-2 md:p-3 flex items-center space-x-4 rounded-md'>
      <RoundedImage classes='w-9 h-9 border border-black' imgsrc='admin.jpeg' />
      <div className='flex-1 text-sm'>
        <span className='text-orange-50'>John Smith</span> have invited you to
        become his family member.
      </div>
      <div className='flex items-center space-x-2 text-white font-semibold text-2xl'>
        <div className='bg-success-dark w-8 h-8 md:w-9 md:h-9 rounded-md flex items-center justify-center cursor-pointer'>
          <div className=''>
            <img src='/correct.svg' alt='' />
          </div>
        </div>
        <div className='bg-red-500 w-8 h-8 md:w-9 md:h-9 rounded-md flex items-center justify-center cursor-pointer'>
          <div>
            <img src='/close2.svg' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationItem;
