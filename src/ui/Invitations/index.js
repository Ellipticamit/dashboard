import clsx from 'clsx';
import { useState } from 'react';
import InvitationItem from './InvitationItem';

const inviteData = [...Array(6).keys()];

const Invitations = ({ tab = false }) => {
  const [active, setActive] = useState('received');
  return (
    <div className='p-3 h-full md:bg-light-100'>
      <div className='flex items-center justify-between mb-8 md:mb-5'>
        <h1 className='font-semibold'>Invitations</h1>
        <div className='rounded-full bg-light-400  flex items-center text-xs -space-x-1'>
          <div
            className={clsx('relative p-2 px-4 rounded-full', {
              'bg-orange-50 text-white': active === 'sent',
            })}
            onClick={() => setActive('sent')}>
            Sent (16)
            {active === 'sent' && (
              <span className='absolute -bottom-2 left-8 border-solid border-t-orange-50 border-t-8 border-x-transparent border-x-8 border-b-0 '></span>
            )}
          </div>
          <div
            className={clsx('relative p-2 px-4 rounded-full', {
              'bg-orange-50 text-white': active === 'received',
            })}
            onClick={() => setActive('received')}>
            Received (25)
            {active === 'received' && (
              <span className='absolute -bottom-2 left-11 border-solid border-t-orange-50 border-t-8 border-x-transparent border-x-8 border-b-0 '></span>
            )}
          </div>
        </div>
      </div>
      <div className='flex flex-col space-y-2 pb-5 overflow-y-scroll max-h-80 md:pb-16 lg:max-h-[360px] lg:pb-2'>
        {inviteData.map((item, index) => (
          <InvitationItem key={index} />
        ))}
      </div>
    </div>
  );
};

export default Invitations;
