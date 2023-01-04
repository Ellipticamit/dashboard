import clsx from 'clsx';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import Input from '../../components/input';

import { addressData } from '../../utils/const';

const BillingAddress = () => {
  const getGrid = (name) => {
    let grid = '';
    if (
      name === 'country' ||
      name === 'state' ||
      name === 'city' ||
      name === 'zipcode'
    ) {
      grid = 'md:col-span-2 lg:col-span-1';
    } else if (name === 'address') {
      grid = 'md:!col-span-4 lg:!col-span-2';
    } else {
      grid = 'col-span-2 lg:col-span-2';
    }
    return grid;
  };

  return (
    <div className='p-3 h-full bg-light-100 flex flex-col justify-between lg:py-5'>
      <div className='flex items-center justify-between mb-3'>
        <h1 className='text-base'>Billing Address</h1>
      </div>
      <div className='my-2 lg:py-3'>
        <div className=''>
          <Checkbox label='Same as Home Address' />
        </div>
      </div>
      <div className='grid grid-cols-4 gap-4 mt-5 lg:px-3'>
        {addressData.map((item, index) => {
          return (
            <div
              key={index}
              className={clsx(`${getGrid(item.name)}`, {
                'hidden lg:block': item.name === 'address2',
              })}>
              <Input label={item.label} name={item.name} />
            </div>
          );
        })}
      </div>
      <div className='hidden lg:flex items-end justify-end w-full mt-12'>
        <div className='w-32 h-9'>
          <Button classes='md:text-xs' text='Edit Details' />
        </div>
      </div>
    </div>
  );
};

export default BillingAddress;
