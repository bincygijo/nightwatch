const environmentVariable = {
  frontEndBaseURL:
    process.env.envname === 'int'
      ? 'https://uifunctionalteststore-s300.int-mysagstore.com/en_US/user/logout'
      : 'https://carpenter-int.int-mysagestore.com/user/logout',
  baseBackendURL: process.env.envname === '' ? '' : '',
};

const loginCredentials = {
  automationTestUser: 'testautomation@xmdevelopments.com',
  automationPassword: 'Test1234',
};
const adminWelcomeUserName = {
  userName: 'Welcome automation user',
};
const searchCredentials = {
  searchUsername: 'bincy@gmail.com',
};

const assumeCustomer = {
  userName: 'bincy gijo',
  searchEmail: 'bincy7@gmail.com',
  password: 'Test1234',
};

const cartonDetails = {
  cartonName: 'TestAutomation',
  cartonLength: '20',
  cartonWidth: '10',
  cartonHeight: '50',
  cartonVolume: '21',
};
const columnSize = {
  searchColumnSize: '6',
};

const searchContent = {
  content: 'Account Menu',
};

const quantity = {
  qty: '1',
};
const paypalCredentials = {
  emailId: 'testin_1334710645_per@xmdevelopments.com',
  password: '334710578',
};
const creditCard = {
  creditCardNo: '41111111111111111',
  csv: '123',
};

const onePageValues = {
  LineItemTotalChkOutArray: [],
};
const cartPageValues = {
  LineItemTotalArray: [],
};
const addToCartValues = {
  loadTestData: [],
};

const CONSOLE_COLORS = {
  // bright colors includes resetting colors after printing that one line where it is used.
  blue: '\x1b[1m\x1b[34m%s\x1b[0m',
  green: '\x1b[1m\x1b[32m%s\x1b[0m',
  red: '\x1b[1m\x1b[31m%s\x1b[0m',
  white: '\x1b[1m\x1b[37m%s\x1b[0m',
  yellow: '\x1b[1m\x1b[33m%s\x1b[0m',
  pink: '\x1b[1m\x1b[35m%s\x1b[0m',
  cyan: '\x1b[1m\x1b[36m%s\x1b[0m',
  BGblue: '\x1b[1m\x1b[44m%s\x1b[0m',
  BGred: '\x1b[1m\x1b[41m%s\x1b[0m',
  BGCyan: '\x1b[1m\x1b[46m%s\x1b[0m',
};

module.exports = {
  loginCredentials,
  environmentVariable,
  searchCredentials,
  assumeCustomer,
  cartonDetails,
  adminWelcomeUserName,
  columnSize,
  searchContent,
  quantity,
  paypalCredentials,
  creditCard,
  onePageValues,
  cartPageValues,
  addToCartValues,
  waitForConditionTimeout: 120000,
  waitForConditionPollInterval: 50,
  abortOnFailure: true,
  CONSOLE_COLORS,
};
