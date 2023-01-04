import Input from '../../components/input';
import AdminDetails from '../../components/AdminDetails';
import Button from '../../components/Button';

const UserDetails = ({ mobile = true, data }) => {
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
    <div className='bg-light-100 p-3 px-4 rounded-md overflow-hidden flex flex-col justify-around h-full lg:flex-row lg:space-x-2'>
      <AdminDetails />
      <div className='-mt-8 grid grid-cols-2 gap-4 overflow-hidden md:grid-cols-6 lg:px-6 lg:mt-0 lg:gap-2 lg:border-l lg:border-l-slate-300 '>
        {data?.map((item) => (
          <div
            key={item.label}
            className={`${getGrid(
              item.name
            )} lg:col-span-3 overflow-hidden lg:h-10`}>
            <Input label={item.label} name={item.name} row={true} />
          </div>
        ))}
      </div>
      <div className='w-44 h-10 mt-6 md:hidden'>
        <Button text='Edit Profile' />
      </div>
      <div className='hidden md:flex items-center space-x-3 md:mt-6 lg:flex-col lg:space-y-2 lg:space-x-0 lg:mt-8 '>
        <div className='w-28 h-9 lg:w-32'>
          <Button text='Save' color='success' classes='!text-xs' />
        </div>
        <div className='w-40 h-9 lg:w-32'>
          <Button text='Change Password' classes='!text-xs' />
        </div>
        <div className='w-28 h-9 lg:w-32'>
          <Button text='Leave Family' color='danger' classes='!text-xs' />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
