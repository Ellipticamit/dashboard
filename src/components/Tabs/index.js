import { useState } from 'react';
import Family from '../../ui/Family';
import UserDetails from '../../ui/UserDetails';
import Wallet from '../../ui/Wallet';
import Activities from '../../ui/Activities';
import Invitations from '../../ui/Invitations';
import TabItem from './TabItem';
import {
  memberMobileData,
  inputMobileData,
  activityMobileData,
} from '../../utils/const';

const tabsData = ['Profile', 'Wallet', 'Activities', 'Invitations'];

const Tabs = ({ data }) => {
  const [currentTab, setCurrentTab] = useState('Profile');

  const getTabContent = () => {
    let tabContent = '';
    switch (currentTab) {
      case 'Profile':
        tabContent = (
          <div className='flex flex-col space-y-4'>
            <Family data={memberMobileData} title='My Family' />
            <UserDetails data={inputMobileData} />
          </div>
        );
        break;
      case 'Wallet':
        tabContent = (
          <div className='px-3'>
            <Wallet />
          </div>
        );
        break;
      case 'Activities':
        tabContent = <Activities data={activityMobileData} />;
        break;
      case 'Invitations':
        tabContent = <Invitations />;
        break;
      default:
        tabContent = null;
    }

    return tabContent;
  };

  return (
    <div className='mt-6'>
      <ul className='border-b flex items-center justify-between'>
        {tabsData.map((item, index) => (
          <TabItem
            title={item}
            current={currentTab}
            handletabclick={setCurrentTab}
            key={index}
          />
        ))}
      </ul>
      <div className='pt-5'>{getTabContent()}</div>
    </div>
  );
};

export default Tabs;
