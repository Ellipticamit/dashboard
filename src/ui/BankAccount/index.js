import WalletCard from '../Wallet/WalletCard';

const data = [
  {
    title: '**** **** **** 5697',
    subtitle: 'Expires 09/27',
    imgsrc: 'master.png',
  },
  {
    title: '**** **** **** 5697',
    subtitle: 'Expires 09/27',
    imgsrc: 'master.png',
  },
];

const BankAccount = () => {
  return (
    <div className='rounded-md h-full bg-light-100 p-3'>
      <h1 className='text-base'>Bank Accounts</h1>
      <div className='mt-4 flex flex-col space-y-3 lg:flex-row lg:space-y-0 lg:space-x-3'>
        {data.map((item, index) => (
          <div key={index} className='w-[245px]'>
            <WalletCard item={item} btn={false} bgwhite={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankAccount;
