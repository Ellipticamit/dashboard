import Input from '../../components/input';
import AdminDetails from '../../components/AdminDetails';
import Button from '../../components/Button';

const UserDetails = ({ mobile = true, data, desktopData = [] }) => {
  const getGrid = (name) => {
    let classes = '';
    if (name === 'first_name' || name === 'last_name' || name === 'phone') {
      classes = 'md:col-span-2';
    } else {
      classes = 'md:col-span-3';
    }
    return classes;
  };

  return (
    <div className='bg-light-100 p-3 px-4 rounded-md flex flex-col justify-around h-full lg:flex-row lg:space-x-2'>
      <AdminDetails />
      <div className='-mt-8 grid grid-cols-2 gap-4 overflow-hidden md:grid-cols-6 lg:hidden '>
        {data?.map((item) => (
          <div key={item.label} className={`${getGrid(item.name)}`}>
            <Input label={item.label} name={item.name} value={item?.value} />
          </div>
        ))}
      </div>
      <div className='hidden lg:flex flex-1 border-l border-l-slate-200 p-5 py-10'>
        <div className='w-full grid grid-cols-2 gap-4 gap-y-1 justify-center'>
          {desktopData?.map((item, index) => (
            <div key={item.label} className='self-center'>
              <Input
                label={item.label}
                name={item.name}
                row={true}
                index={index}
                value={item?.value}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='w-44 h-10 mt-6 md:hidden'>
        <Button text='Edit Profile' />
      </div>
      <div className='hidden md:flex items-center space-x-3 md:mt-6 lg:flex-col lg:space-y-2 lg:space-x-0 lg:mt-8 '>
        <div className='w-28 h-8 lg:w-36'>
          <Button text='Save' color='success' classes='!text-xs' />
        </div>
        <div className='w-40 h-8 lg:w-36'>
          <Button text='Change Password' classes='!text-xs' />
        </div>
        <div className='w-28 h-8 lg:w-36'>
          <Button text='Leave Family' color='danger' classes='!text-xs' />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
