const {
  loginCredentials,
  CONSOLE_COLORS,
} = require('../../helper/constants/constants');

const elements = {
  login: '.link-login',
  loginX3: {
    selector: '//div[contains(@class,"item-user-links")]//a[@title="Login"]',
    locateStrategy: 'xpath',
  },
  emailAddress: 'input[id="email"]',
  password: 'input[id="pass"]',
  loginButton: 'button[id="send2"]',
  welcomeMsg: {
    selector: '//p[@class="welcome-msg"]',
    locateStrategy: 'xpath',
  },
  welcomeUser: '.welcome-msg-user',
  admin: '.link-admin',
  X3AdminButton: {
    selector: '(//header[@id="header"]//a[@class="link-admin"])[1]',
    locateStrategy: 'xpath',
  },
  dashboard: '.page-title',
  logout: '.link-logout',
  logoutX3: {
    selector: '//div[contains(@class,"top-links")]//a[@title="Log Out"]',
    locateStrategy: 'xpath',
  },
  WebStoreButton: {
    selector: '//li[@class="dropdown"]/a[@class="dropdown-toggle"]',
    locateStrategy: 'xpath',
  },
  closeToastMessage: {
    selector:
      '//div[@id="toast-container"]//button[@class="toast-close-button"]',
    locateStrategy: 'xpath',
  },
  userName: {
    selector: '//div[@class="page"]//span[@class="userName"]',
    locateStrategy: 'xpath',
  },
};

const commands = [
  {
    async verifyHomePage() {
      /* await this.api.pause(2000);
         await this.getText('@welcomeMsg', async result => {
      const text = result.value;
      await console.log(text);
      this.waitUntilVisibleElement('@welcomeMsg');
    }); */
    },

    async enterLoginCredentials() {
      await this.clickVisibleElement('@login');
      await console.log(CONSOLE_COLORS.BGblue, 'Web Store login Page');

      await this.clickVisibleElement('@password');
      await this.setField('@emailAddress', loginCredentials.automationTestUser);
      await this.setField('@password', loginCredentials.automationPassword);
    },

    async enterB2CLoginCredentials(uNamePwd) {
      console.log(CONSOLE_COLORS.BGblue, 'B2C login');
      await this.clickVisibleElement('@login');

      await this.clickVisibleElement('@password');
      await this.setField('@emailAddress', uNamePwd[1][1]);
      await this.setField('@password', uNamePwd[1][2]);
    },

    async clickLoginButton() {
      await this.api.pause(1000);
      await this.clickVisibleElement('@loginButton');
    },
    async clickAdminButton() {
      const X3AdminButton =
        '(//header[@id="header"]//a[@class="link-admin"])[1]';
      await this.api.pause(1000);
      await this.api.element('xpath', X3AdminButton, (visible) => {
        if (visible.status !== -1) {
          this.clickVisibleElement('@X3AdminButton');
          this.api.pause(1000);
        } else {
          this.clickVisibleElement('@admin');
        }
      });
    },
    async verifyLogin() {
      await this.api.pause(1000);
      await this.waitUntilVisibleElement('@userName');
      await this.getText('@userName', async (result) => {
        console.log(
          CONSOLE_COLORS.BGblue,
          `The Customer Name is - ${result.value}`
        );
      });
    },

    async verifyB2CLogin(uNamePwd) {
      await this.api.pause(1000);

      try {
        await this.assert.containsText(
          '@welcomeMsg',
          uNamePwd[1][0],
          'Error Occurred'
        );
        console.log(`Success -> ${uNamePwd[1][0]} is logged in successfully`);
      } catch (error) {
        throw new Error(
          `Login error -> ${uNamePwd[1][0]} is NOT logged in successfully`
        );
      }
    },

    async verifyAdminDashboard() {
      await this.api.pause(500);
      await this.waitUntilVisibleElement('@dashboard');
      await this.getText('@dashboard', async (result) => {
        const text = result.value;
        console.log(text);
      });
      await console.log(`Success -> Dashboard has been loaded successfully`);
    },
    async clickWebStoreButtononAdminPanel() {
      const closeToastMessageXpath =
        '//div[@id="toast-container"]//button[@class="toast-close-button"]';

      await this.api.element(
        'xpath',
        closeToastMessageXpath,
        async (visible) => {
          if (visible.status !== -1) {
            this.clickVisibleElement('@closeToastMessage');
          }
        }
      );

      await this.api.pause(2000);
      await this.clickVisibleElement('@WebStoreButton');
      await this.waitUntilVisibleElement('@userName');
      await this.getText('@userName', async (result) => {
        console.log(
          CONSOLE_COLORS.BGblue,
          `The Customer Name is - ${result.value}`
        );
      });
    },
    async clickLogout() {
      const X3LogoutXpath =
        '//div[contains(@class,"top-links")]//a[@title="Log Out"]';

      await this.api.element('xpath', X3LogoutXpath, (visible) => {
        if (visible.status !== -1) {
          this.clickVisibleElement('@logoutX3');
        } else {
          this.clickVisibleElement('@logout');
        }
      });
    },
  },
];

module.exports = {
  elements,
  commands,
};
