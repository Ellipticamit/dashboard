import Layout from './layout';
import Activities from './ui/Activities';
import BankAccount from './ui/BankAccount';
import BillingAddress from './ui/BillingAddress';
import MobileUI from './ui/MobileUI';
import Family from './ui/Family';
import UserDetails from './ui/UserDetails';
import Invitations from './ui/Invitations';

import { memberData, inputData, activityData } from './utils/const';

function App() {
  return (
    <Layout>
      <MobileUI />
      <div className='hidden md:flex py-12 px-3 container'>
        <div className='w-full grid grid-cols-6 grid-rows-3 gap-3 md:grid-cols-12 md:grid-rows-3 lg:grid-rows-4 lg:gap-4'>
          <div className='col-span-7 rounded-md h-full lg:col-span-9 lg:order-1 lg:row-span-1'>
            <UserDetails data={inputData} />
          </div>
          <div className='col-span-5 h-full lg:col-span-3 lg:order-2 lg:row-span-2'>
            <Family data={memberData} title='Family' />
          </div>
          <div className='col-span-6 h-full lg:col-span-6 lg:order-3 lg:row-span-1'>
            <BankAccount />
          </div>
          <div className='col-span-6 md:h-full lg:col-span-6 lg:order-5 lg:row-span-2'>
            <BillingAddress />
          </div>
          <div className='col-span-6 md:h-full overflow-hidden lg:order-4 lg:col-span-3 lg:row-span-3'>
            <Activities data={activityData} />
          </div>
          <div className='col-span-6 md:h-full overflow-hidden lg:col-span-3 lg:order-6 lg:row-span-2'>
            <Invitations />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
