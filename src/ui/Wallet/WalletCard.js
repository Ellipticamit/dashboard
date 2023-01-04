import clsx from 'clsx';
import Button from '../../components/Button';

const WalletCard = ({ item, bgwhite = false, btn = true }) => {
  return (
    <div
      className={clsx(
        'flex items-center space-x-3 px-2 py-5 bg-light-100 rounded-md',
        { '!bg-white !space-x-5 !py-3 !px-3': bgwhite }
      )}>
      <div className='w-12 h-10 flex items-center'>
        <img src={item.imgsrc} alt='' />
      </div>
      <div className='flex flex-col flex-1 text-sm'>
        <h3 className='tracking-widest'>{item.title}</h3>
        <h6 className='text-zinc-400'>{item.subtitle}</h6>
      </div>
      {btn && (
        <div className='w-20 h-8'>
          <Button text='Edit' color='success' />
        </div>
      )}
    </div>
  );
};

export default WalletCard;
