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
  },
  {
    label: 'Last Name',
    name: 'last_name',
  },
];

export const inputMobileData = [
  ...name,
  {
    label: 'Phone',
    name: 'phone',
  },
  {
    label: 'Graducation Year',
    name: 'grad_year',
  },
];

export const inputData = [
  ...inputMobileData,
  {
    label: 'DOB',
    name: 'dateofbirth',
  },
];

export const addressData = [
  ...name,
  {
    name: 'address',
    label: 'Address Line 1',
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
