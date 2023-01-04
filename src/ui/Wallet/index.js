import WalletCard from './WalletCard';

const walletData = [
  {
    title: '**** **** **** 5697',
    subtitle: 'Expires 09/27',
    imgsrc: 'master.png',
  },
  {
    title: '**** **** **** 5697',
    subtitle: 'Expires 09/27',
    imgsrc: 'visa.png',
  },
  {
    title: '**********5697',
    subtitle: 'Peter Moscone',
    imgsrc: 'house.png',
  },
];

const Wallet = () => {
  return (
    <div className='flex flex-col space-y-3'>
      {walletData.map((item, index) => (
        <WalletCard key={index} item={item} />
      ))}
    </div>
  );
};

export default Wallet;
