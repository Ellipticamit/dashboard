export const memberData = [
  {
    imgsrc: 'admin.jpeg',
    name: 'John Smith',
    admin: true,
  },
  {
    imgsrc: 'admin.jpeg',
    name: 'John Smith',
    admin: false,
  },
  {
    imgsrc: 'admin.jpeg',
    name: 'John Smith',
    admin: false,
  },
  {
    imgsrc: 'admin.jpeg',
    name: 'John Smith',
    admin: false,
  },
  {
    imgsrc: 'admin.jpeg',
    name: 'John Smith',
    admin: false,
  },
  {
    imgsrc: 'admin.jpeg',
    name: 'John Smith',
    admin: false,
  },
  {
    imgsrc: 'admin.jpeg',
    name: 'John Smith',
    admin: false,
  },
  {
    imgsrc: 'admin.jpeg',
    name: 'John Smith',
    admin: false,
  },
  {
    imgsrc: 'admin.jpeg',
    name: 'John Smith',
    admin: false,
  },
];

export const memberMobileData = [
  {
    imgsrc: 'admin.jpeg',
    name: 'John Smith',
    admin: true,
  },
  {
    imgsrc: 'admin.jpeg',
    name: 'John Smith',
    admin: false,
  },
  {
    imgsrc: 'admin.jpeg',
    name: 'John Smith',
    admin: false,
  },
];

const name = [
  {
    label: 'First Name',
    name: 'first_name',
    value: 'John',
  },
  {
    label: 'Last Name',
    name: 'last_name',
    value: 'Smith',
  },
];

export const inputMobileData = [
  ...name,
  {
    label: 'Phone',
    name: 'phone',
    value: '+1(324) 123 123',
  },
  {
    label: 'Graducation Year',
    name: 'grad_year',
    value: '2000',
  },
];

export const inputData = [
  ...inputMobileData,
  {
    label: 'DOB',
    name: 'dateofbirth',
    value: '08/03/1990',
  },
];

export const addressData = [
  ...name,
  {
    name: 'address',
    label: 'Address Line 1',
    value: '123 freedline streets',
  },
  {
    name: 'address2',
    label: 'Address Line 2',
  },
  {
    name: 'country',
    label: 'Country',
  },
  {
    name: 'state',
    label: 'State/Provision/Region',
    value: '',
  },
  {
    name: 'city',
    label: 'City',
  },
  {
    name: 'zipcode',
    label: 'Zip Code',
  },
];

export const activityMobileData = [
  {
    heading: 'Leslie Alexendar updated her ',
    highlight: 'Account Type',
    subheading: '5 October 11:36 AM',
  },
  {
    heading: 'John Smith removes Mark Flexie from ',
    highlight: 'Family Member',
    subheading: '3 October 2:45 AM',
  },
  {
    heading: 'Leslie Alexendar updated her ',
    highlight: 'Account Type',
    subheading: '5 October 11:36 AM',
  },
  {
    heading: 'John Smith removes Mark Flexie from ',
    highlight: 'Family Member',
    subheading: '3 October 2:45 AM',
  },
];

export const activityData = [...activityMobileData, ...activityMobileData];

export const inputDesktopData = [
  name[0],
  { name: 'phone', label: 'Phone', value: '+1(324) 123 123' },
  name[1],
  { name: 'grad', label: 'Graduation Year', value: '2000' },
  { name: 'email', label: 'Email', value: 'johnsmith@yahoo.com' },
  { name: 'dob', label: 'Date of Birth', value: '08/03/1990' },
];
