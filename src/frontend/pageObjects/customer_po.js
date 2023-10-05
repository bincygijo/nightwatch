const { client } = require('nightwatch-api');
const {
  searchCredentials,
  CONSOLE_COLORS,
} = require('../../helper/constants/constants');

const elements = {
  firstName: '#firstname',
  lastName: '#lastname',
  email: '#email',
  emailChkout: {
    selector: '//div[@class="address-form"]//input[@id="email"]',
    locateStrategy: 'xpath',
  },
  email_conf: {
    selector:
      '//div[contains(@class,"main container")]//input[@id="email_conf"]',
    locateStrategy: 'xpath',
  },
  password: '#password',
  confirmPassword: '#confirm_password',
  country: '#select2-country-container',
  countrySelect: '.select2-search__field',
  countryResult: '.select2-results',
  address1: '#address1',
  city: '#city',
  zip: '#zip',
  contactName: '#contact_name',
  apply: '.btn.green',
  usersDataTable: '#datatable',
  deleteUser: '.btn-xs.red-stripe',
  deleteButton: 'button.btn.submit.red',
  newPublicUsers: '.btn.green:nth-child(2)',
  searchTextBox: 'input.form-control',
  toaster: '#toast-container',
  toasterMessage: '.toast-message',
  emailAddress: {
    selector: '//input[@title="Email Address"]',
    locateStrategy: 'xpath',
  },
  closeToastMessage: {
    selector:
      '//div[@id="toast-container"]//button[@class="toast-close-button"]',
    locateStrategy: 'xpath',
  },
  pageTitle: '.page-title',
  deleteB2BButton: {
    selector: '//a[@data-modal-title="Delete User"]',
    locateStrategy: 'xpath',
  },
  deleteB2Bconfirm: {
    selector: '//button[@class="btn submit red"]',
    locateStrategy: 'xpath',
  },
  newUserButton: {
    selector: '//div[@class="table-toolbar"]/a[text()="New User"]',
    locateStrategy: 'xpath',
  },
  activePastUsers: {
    selector: '//a[text()="Activate"]',
    locateStrategy: 'xpath',
  },
  username: {
    selector: '//table[@id="datatable"]/thead/tr[2]/td[1]/input[1]',
    locateStrategy: 'xpath',
  },
  editPastUsers: {
    selector: '//table[@id="datatable"]/tbody/tr/td[6]/a',
    locateStrategy: 'xpath',
  },
  deleteUserButton: {
    selector:
      '//table[@id="datatable"]/tbody/tr/td[text()="bincy@gmail.com"]/following::td[7]/a[2]',
    locateStrategy: 'xpath',
  },
  customers: {
    selector: '//ul[@class="page-breadcrumb breadcrumb"]/li[2]/a',
    locateStrategy: 'xpath',
  },
  pastUsers: {
    selector: '//a[text()="Past Users"]',
    locateStrategy: 'xpath',
  },
  clkUserTypeDropDown: {
    selector:
      '//label[text()="Select Group"]//following::span[@class="select2-selection__arrow"][1]',
    locateStrategy: 'xpath',
  },
  clkUserTypeDropDownX3: {
    selector: '//label[contains(.,"Select Group")]//following::span[1]',
    locateStrategy: 'xpath',
  },
  pwarehouseDropDown: {
    selector:
      '//label[text()="Primary Warehouse "]//following::span[@class="select2-selection__arrow"][1]',
    locateStrategy: 'xpath',
  },
  uNameInput: {
    selector: '//label[text()="User Name "]//following::input[@type="text"][1]',
    locateStrategy: 'xpath',
  },
  pwdInput: {
    selector:
      '//label[text()="Password "]//following::input[@type="password"][1]',
    locateStrategy: 'xpath',
  },
  cnfPwdInput: {
    selector:
      '//label[text()="Confirm Password "]//following::input[@type="password"][1]',
    locateStrategy: 'xpath',
  },
  emailInput: {
    selector:
      '//label[text()="Email Address "]//following::input[@type="text"][1]',
    locateStrategy: 'xpath',
  },
  fnameInput: {
    selector:
      '//label[text()="First Name "]//following::input[@type="text"][1]',
    locateStrategy: 'xpath',
  },
  lnameInput: {
    selector: '//label[text()="Last Name "]//following::input[@type="text"][1]',
    locateStrategy: 'xpath',
  },
  phoneInput: {
    selector: '//label[text()="Phone "]//following::input[@type="text"][1]',
    locateStrategy: 'xpath',
  },
  inputField: {
    selector: '//input[@class="select2-search__field"]',
    locateStrategy: 'xpath',
  },
  inputCustomerDetails: {
    selector: '//tr[2]/td[1][@class="undefined"]/input[@type="text"]',
    locateStrategy: 'xpath',
  },
  btnSelectCustomer: {
    selector: '//button[@class="btn default btn-xs yellow-stripe"]',
    locateStrategy: 'xpath',
  },
  selectDropDown: {
    selector:
      '//li[@class="select2-results__option select2-results__option--highlighted"]',
    locateStrategy: 'xpath',
  },
  btnContinue: {
    selector: '//input[@class="btn blue"]',
    locateStrategy: 'xpath',
  },
  continueCheckoutBtn: {
    selector:
      '//button[contains(@class,"btn-next")]/span/span[contains(.,"Continue")]',
    locateStrategy: 'xpath',
  },
  btnContinueShippingMethod: {
    selector: '//button[@name="update_total"]',
    locateStrategy: 'xpath',
  },
  selectGroupType: {
    selector:
      '//li[@class="select2-results__option select2-results__option--highlighted"]',
    locateStrategy: 'xpath',
  },
  selectGroupTypeX3: {
    selector: '//select[@id="group"]/option[@value="6"]',
    locateStrategy: 'xpath',
  },
  angleUp: {
    selector: '//i[@class="fa fa-angle-up"]',
    locateStrategy: 'xpath',
  },

  postcode: {
    selector: '//input[@name="zip"]',
    locateStrategy: 'xpath',
  },
  emailBox: {
    selector: '//tr[@role="row"]/td[1]/input[@type="text"]',
    locateStrategy: 'xpath',
  },
  first_name: '#first_name',
  last_name: '#last_name',
  passwd: '#passwd',
  passwd_conf: '#passwd_conf',
  submitBtn: {
    selector: '//button[@class="button"]/span/span',
    locateStrategy: 'xpath',
  },
  registerBtn: {
    selector: '//ul[@class="links"]/li[@id="li_link_register"]/a',
    locateStrategy: 'xpath',
  },
  switchX3Customer: {
    selector:
      '(//small[@class="userSwitch"]/a[contains(.,"switch customer")])[2]',
    locateStrategy: 'xpath',
  },
  switchCustomer: {
    selector: '//small[@class="userSwitch"]/a[contains(.,"switch customer")]',
    locateStrategy: 'xpath',
  },
  SwitchARCustomer: {
    selector: '//table[@id="customers_datatable"]/thead[1]/tr[2]/td[1]/input',
    locateStrategy: 'xpath',
  },
  SwitchOnlineCustomer: {
    selector: '//table[@id="users_datatable"]/thead[1]/tr[2]/td[1]/input',
    locateStrategy: 'xpath',
  },
  SwitchARSelectButton: {
    selector:
      '//div[@class="table-scrollable"]//a[contains(@class,"change_customer")]',
    locateStrategy: 'xpath',
  },
  SwitchOnlineSelectButton: {
    selector:
      '//div[@class="table-scrollable"]//a[contains(@class,"assume_user")]',
    locateStrategy: 'xpath',
  },
  logoutButton: {
    selector: '(//ul[@class="links"])/li[@class="first"]/a',
    locateStrategy: 'xpath',
  },
};

const commands = [
  {
    async clickPublicUserButton() {
      await this.waitUntilVisibleElement('@newPublicUsers');
      await this.clickVisibleElement('@newPublicUsers');
      await this.api.pause(1000);
    },

    async clickNewUserButton() {
      await this.clickVisibleElement('@newUserButton');
      await this.api.pause(1000);
    },

    async selectGroup(custGrp) {
      await this.waitUntilVisibleElement('@clkUserTypeDropDown');
      await this.clickVisibleElement('@clkUserTypeDropDown');
      await this.api.pause(500);
      await this.setField('@inputField', custGrp);
      await this.api.pause(2000);
      await this.clickVisibleElement('@selectGroupType');
      await this.api.pause(1000);
      await this.clickVisibleElement('@btnContinue');
      await this.api.pause(1000);
    },

    async selectCustomer(customer) {
      await this.waitUntilVisibleElement('@inputCustomerDetails');
      await this.clickVisibleElement('@inputCustomerDetails');
      await this.api.pause(500);
      await this.setField('@inputCustomerDetails', customer);
      await this.api.pause(2000);
      await this.clickVisibleElement('@btnSelectCustomer');
      await this.api.pause(1000);
    },

    async B2BUserSetup(data) {
      await this.clickVisibleElement('@pwarehouseDropDown');
      await this.setField('@inputField', data[1][0]);
      await this.api.pause(1000);
      await this.clickVisibleElement('@selectDropDown');
      await this.api.pause(1000);

      await this.clickVisibleElement('@uNameInput');
      await this.setField('@uNameInput', data[1][1]);
      await this.api.pause(500);

      await this.clickVisibleElement('@pwdInput');
      await this.setField('@pwdInput', data[1][2]);
      await this.api.pause(500);

      await this.clickVisibleElement('@cnfPwdInput');
      await this.setField('@cnfPwdInput', data[1][3]);
      await this.api.pause(500);

      await this.clickVisibleElement('@emailInput');
      await this.setField('@emailInput', data[1][4]);
      await this.api.pause(500);

      await this.clickVisibleElement('@fnameInput');
      await this.setField('@fnameInput', data[1][5]);
      await this.api.pause(500);

      await this.clickVisibleElement('@lnameInput');
      await this.setField('@lnameInput', data[1][6]);
      await this.api.pause(500);

      await this.clickVisibleElement('@phoneInput');
      await this.setField('@phoneInput', data[1][7]);
      await this.api.pause(500);

      await this.clickVisibleElement('@btnContinue');
    },

    async verifyAction() {
      await this.api.pause(1000);
      await this.waitUntilVisibleElement('@toasterMessage');
      await this.getText('@toasterMessage', async (result) => {
        const SuccessMessage = result.value;
        this.checkElementTextContains('@toasterMessage', SuccessMessage);
        console.log('Success ->', SuccessMessage);
      });
      await this.waitUntilVisibleElement('@closeToastMessage');
      await this.clickVisibleElement('@closeToastMessage');
    },

    async verifyActionNoWait() {
      await this.waitUntilVisibleElement('@toasterMessage');
      await this.getText('@toasterMessage', async (result) => {
        const SuccessMessage = result.value;
        this.checkElementTextContains('@toasterMessage', SuccessMessage);
        console.log('Success ->', SuccessMessage);
      });
      await this.waitUntilVisibleElement('@closeToastMessage');
      await this.clickVisibleElement('@closeToastMessage');
    },

    async deleteB2BUser(email) {
      await this.api.pause(3000);
      await this.waitUntilVisibleElement('@inputCustomerDetails');
      await this.clickVisibleElement('@inputCustomerDetails');
      await this.setField('@inputCustomerDetails', email);
      await this.api.pause(2000);
      await this.clickVisibleElement('@deleteB2BButton');
      await this.api.pause(1000);
      await this.clickVisibleElement('@deleteB2Bconfirm');
      await this.api.pause(1000);
    },

    async enterPersonalInformation(data) {
      const stateValue = {
        selector: `//select[@id="user_state"]/option[@value='${data[1][6]}']`,
        locateStrategy: 'xpath',
      };
      await this.setField('@firstName', data[1][0]);
      await this.setField('@lastName', data[1][1]);
      await this.setField('@email', data[1][2]);
      await this.setField('@password', data[1][3]);
      await this.setField('@confirmPassword', data[1][4]);
      await this.clickVisibleElement('@country');
      await this.setField('@countrySelect', data[1][5]);
      await this.api.pause(3000);
      await this.clickVisibleElement('@countryResult');
      await this.api.pause(3000);
      await this.clickVisibleElement(stateValue);
      await this.api.pause(200);
      await this.setField('@address1', data[1][7]);
      await this.setField('@city', data[1][8]);
      await this.setField('@postcode', data[1][9]);
    },

    async clickApplyButton() {
      await this.api.execute('scrollTo(0,100)');
      await this.clickVisibleElement('@apply');
      await this.waitUntilVisibleElement('@closeToastMessage');
      await this.clickVisibleElement('@closeToastMessage');
      await this.api.pause(1000);
    },

    async verifyUserCreation(data) {
      await this.waitUntilVisibleElement('@usersDataTable');
      await this.checkElementTextContains('@usersDataTable', data[1][2]);
      console.log(
        'Success ->',
        `${data[1][2]} user has been created successfully`
      );
      await this.api.pause(3000);
    },

    async deleteUser() {
      await this.checkElementPresent('@usersDataTable');
      await this.api.refresh();
      await this.checkElementPresent('@usersDataTable');
      await this.waitUntilVisibleElement('@deleteUser');
      await this.clickVisibleElement('@deleteUser');
      await this.api.pause(2000);
      await this.clickVisibleElement('@deleteButton');
      await this.api.pause(5000);
    },

    async clickPastUsers() {
      await this.clickVisibleElement('@pastUsers');
      await this.api.pause(3000);
    },

    async enterSearchDetails() {
      await this.api.pause(2000);
      await this.waitUntilVisibleElement('@searchTextBox');
      await this.setField('@searchTextBox', searchCredentials.searchUsername);
      await this.api.pause(2000);
    },

    async clickEditPastUsers() {
      await this.api.pause(3000);
      await this.waitUntilVisibleElement('@editPastUsers');
      await this.clickVisibleElement('@editPastUsers');
    },

    async clickActivePastUsers() {
      await this.clickVisibleElement('@activePastUsers');
      await this.api.pause(5000);
    },

    async clickCustomersLink() {
      await this.api.pause(5000);
      await this.clickVisibleElement('@customers');
    },

    async searchByUsername() {
      await this.waitUntilVisibleElement('@username');
      await this.api.pause(2000);
      await this.setField('@username', searchCredentials.searchUsername);
    },

    async deleteActiveCustomer() {
      await this.clickVisibleElement('@deleteUserButton');
      await this.api.pause(2000);
      await this.clickVisibleElement('@deleteButton');
      await this.api.pause(5000);
    },

    async deleteSuccessMessage() {
      console.log(
        'User ->',
        `${searchCredentials.searchUsername} has been deleted`
      );
    },

    async verifyActiveCustomerPage() {
      await this.waitUntilVisibleElement('@pageTitle');
      await this.getText('@pageTitle', async (result) => {
        const text = result.value;
        this.checkElementTextContains('@pageTitle', text);
        console.log('Success ->', `${text} page loaded successfully`);
      });
    },

    async verifyEditUserPage() {
      await this.api.pause(5000);
      await this.waitUntilVisibleElement('@pageTitle');
      this.getText('@pageTitle', async (result) => {
        const editUser = result.value;
        this.checkElementTextContains('@pageTitle', editUser);
        console.log(
          'Success ->',
          `${editUser} page has been loaded successfully`
        );
      });
    },
    async searchByEmail(emailID) {
      await this.waitUntilVisibleElement('@username');
      await this.api.pause(2000);
      await this.setField('@username', emailID);
    },
    async clickAssume(emailID) {
      const assumeButton = {
        selector: `//table[@id="datatable"]/tbody/tr/td[text()="${emailID}"]/following::td/a[3]`,
        locateStrategy: 'xpath',
      };
      await this.api.pause(3000);
      await this.clickVisibleElement(assumeButton);
      await this.api.pause(5000);
    },

    async verifyEmailIDExists(emailID) {
      const emailIdElement = `//tbody/tr[1][@role="row"]/td[1][contains(text(),'${emailID}')]`;

      await this.setField('@emailBox', emailID);
      await this.api.pause(1000);

      await this.api.element('xpath', emailIdElement, (visible) => {
        if (visible.status !== -1) {
          this.clickVisibleElement('@deleteUser');
          this.api.pause(2000);
          this.clickVisibleElement('@deleteButton');
          this.api.pause(2000);
          console.log('Email ID already exists, deleting it');
        } else {
          console.log('Email id does NOT exist already');
        }
      });
    },

    async clickRegister(userType) {
      const registerSage300 = `//div[@class="page-content"]/p[contains(text(), "${userType}")]/a`;
      const userTypeBtn = {
        selector: `//div[@class="page-content"]/p[contains(text(), "${userType}")]/a`,
        locateStrategy: 'xpath',
      };

      await this.clickVisibleElement('@registerBtn');
      await this.api.pause(1000);
      await this.api.element('xpath', registerSage300, (visible) => {
        if (visible.status !== -1) {
          this.clickVisibleElement(userTypeBtn);
          console.log(CONSOLE_COLORS.BGblue, 'Sage 300 Register Link');
        } else {
          console.log(CONSOLE_COLORS.BGblue, 'x3 Register Link');
        }
      });
    },

    async RegisterUser(userType, data, PageDetails) {
      const countryDropDown = {
        selector: `//select[@id='country']/option[text()='${data[1][6]}']`,
        locateStrategy: 'xpath',
      };
      const StateDropDown = {
        selector: `//select[@id='state']/option[contains(text(),'${data[1][7]}')]`,
        locateStrategy: 'xpath',
      };

      await this.clickVisibleElement('@first_name');
      await this.setField('@first_name', data[1][0]);
      await this.api.pause(100);

      await this.clickVisibleElement('@last_name');
      await this.setField('@last_name', data[1][1]);
      await this.api.pause(100);

      await this.clickVisibleElement('@emailAddress');
      await this.setField('@emailAddress', data[1][2]);
      await this.api.pause(100);

      if (userType === 'Public') {
        await this.clickVisibleElement('@email_conf');
        await this.setField('@email_conf', data[1][2]);
        await this.api.pause(100);
      }

      await this.clickVisibleElement('@passwd');
      await this.setField('@passwd', data[1][3]);
      await this.api.pause(100);

      await this.clickVisibleElement('@passwd_conf');
      await this.setField('@passwd_conf', data[1][3]);
      await this.api.pause(100);

      await this.clickVisibleElement('@address1');
      await this.setField('@address1', data[1][4]);
      await this.api.pause(100);

      await this.clickVisibleElement('@city');
      await this.setField('@city', data[1][5]);
      await this.api.pause(100);

      await this.clickVisibleElement(countryDropDown);
      await this.api.pause(100);

      await this.clickVisibleElement(StateDropDown);
      await this.api.pause(100);

      if (PageDetails === 'ONE-PAGE CHKOUT') {
        console.log('Continued - One Page Checkout Post Registration');
        await this.clickVisibleElement('@continueCheckoutBtn');
        await this.api.pause(2000);
      } else {
        console.log('Submitted - Home Page registration');
        await this.clickVisibleElement('@submitBtn');
      }
    },

    async BillingAddress(data) {
      const countryDropDown = {
        selector: `//select[@id='country']/option[@value='${data[1][5]}']`,
        locateStrategy: 'xpath',
      };
      const StateDropDown = {
        selector: `//select[@id='state']/option[contains(text(),'${data[1][6]}')]`,
        locateStrategy: 'xpath',
      };

      await this.clickVisibleElement('@first_name');
      await this.setField('@first_name', data[1][0]);
      await this.api.pause(100);

      await this.clickVisibleElement('@last_name');
      await this.setField('@last_name', data[1][1]);
      await this.api.pause(100);

      await this.clickVisibleElement('@emailChkout');
      await this.setField('@emailChkout', data[1][2]);
      await this.api.pause(100);

      await this.api.element('css selector', '#email_conf', async (visible) => {
        if (visible.status !== -1) {
          console.log('email confirmation being done');
          this.clickVisibleElement('@email_conf');
          this.setField('@email_conf', data[1][2]);
          this.api.pause(100);
        }
      });

      await this.clickVisibleElement('@address1');
      await this.setField('@address1', data[1][3]);
      await this.api.pause(100);

      await this.clickVisibleElement('@city');
      await this.setField('@city', data[1][4]);
      await this.api.pause(100);

      await this.clickVisibleElement('@zip');
      await this.setField('@zip', data[1][7]);
      await this.api.pause(100);

      await this.clickVisibleElement(countryDropDown);
      await this.api.pause(100);

      await this.clickVisibleElement(StateDropDown);
      await this.api.pause(100);
    },

    async checkNSwitchCustomer(custType, custName) {
      const custAlreadySelected = `//header[@class="header-container"]//span[contains(.,"${custName}")]`;
      await this.api.pause(5000);
      await this.api.element('xpath', custAlreadySelected, async (visible) => {
        if (visible.status !== -1) {
          console.log(`Customer ${custName} is already selected`);
        } else {
          this.clickVisibleElement('@switchCustomer');
          if (custType === 'B2B') {
            this.SwitchB2BCustomer(custName);
          } else {
            this.SwitchB2CCustomer(custName);
          }

          console.log(`Customer is now switched to ${custName}`);
        }
      });
    },

    async SwitchB2BCustomer(custName) {
      const arCustomerTab = {
        selector: '//a[contains(.,"SAGE A/R CUSTOMER ACCOUNTS")]',
        locateStrategy: 'xpath',
      };

      await client.frame(0, async () => {
        this.clickVisibleElement(arCustomerTab);
        this.api.pause(5000);
        this.clickVisibleElement('@SwitchARCustomer');
        this.setField('@SwitchARCustomer', custName);
        this.api.pause(2000);
        this.clickVisibleElement('@SwitchARSelectButton');
        this.api.pause(2000);
      });
    },

    async SwitchB2CCustomer(custName) {
      const PublicCustomerTab = {
        selector: '//a[contains(.,"ONLINE CUSTOMER ACCOUNTS")]',
        locateStrategy: 'xpath',
      };

      await client.frame(0, async () => {
        this.clickVisibleElement(PublicCustomerTab);
        this.api.pause(5000);
        this.clickVisibleElement('@SwitchOnlineCustomer');
        this.setField('@SwitchOnlineCustomer', custName);
        this.api.pause(2000);
        this.clickVisibleElement('@SwitchOnlineSelectButton');
        this.api.pause(2000);
      });
    },

    async selectGroupX3() {
      // await this.waitUntilVisibleElement('@clkUserTypeDropDownX3');
      await this.clickVisibleElement('@clkUserTypeDropDownX3');
      await this.api.pause(1000);
      await this.clickVisibleElement('@selectGroupTypeX3');
      await this.api.pause(1000);
      await this.clickVisibleElement('@angleUp');
      await this.clickVisibleElement('@btnContinue');
      await this.api.pause(1000);
    },

    async clickLogOutButton() {
      // await this.waitUntilVisibleElement('@btnContinueShippingMethod');
      await this.api.refresh();
      await this.api.pause(2000);
      await this.clickVisibleElement('@logoutButton');
    },
  },
];

module.exports = {
  elements,
  commands,
};
