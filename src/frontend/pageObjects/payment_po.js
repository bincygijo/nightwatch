// const { PublicUserCredentials } = require('../../helper/constants/constants');

const elements = {
  system: {
    selector: '//span[text()="System"]',
    locateStrategy: 'xpath',
  },
  paymentSettings: {
    selector: '//span[text()="Payment Settings"]',
    locateStrategy: 'xpath',
  },
  paymentMethods: {
    selector: '//span[text()="Payment Settings"]//following::ul[1]/li[4]',
    locateStrategy: 'xpath',
  },

  verifyPaymentPage: {
    selector: '//small[text()="Payments Portal Management"]',
    locateStrategy: 'xpath',
  },
  applyButton: {
    selector: '//input[@value="Apply"]',
    locateStrategy: 'xpath',
  },
  paymentPageTitle: {
    selector: '//small[text()="BEANSTREAM Account Settings for Beanstream"]',
    locateStrategy: 'xpath',
  },
  beanstreamDefault: {
    selector: '//span[@class="help-block"]',
    locateStrategy: 'xpath',
  },
  successMessageApplyButton: {
    selector: '//p[text()="Payment Methods successfully updated."]',
    locateStrategy: 'xpath',
  },
  editPage: {
    selector: '//small[text()="BEANSTREAM Account Details & Settings"]',
    locateStrategy: 'xpath',
  },
  currency1: {
    selector: '//select[@name="currency"]',
    locateStrategy: 'xpath',
  },
  updateSuccess: {
    selector:
      '//p[text()="Your Beanstream Payment details have been updated."]',
    locateStrategy: 'xpath',
  },
  radioButtonb2bBeanstream:
    '#sample_3.table.table-striped.td-bordered.table-hover tr:nth-of-type(8) .radio',
  editBeanstreamButton: '#sample_3 > tbody > tr:nth-child(8) > td > span > a',
  addTerminalButton: 'a[id="addTerminalButton"]',
  beanstreamRow: 'tr.even td:nth-of-type(2)',
  successMessageTerminal: '.toast-message',
  clickButtonEdit:
    '#datatable > tbody > tr.even > td:nth-child(4) > a.btn.default.btn-xs.yellow-stripe',
  currencySelect: '.select2-search__field',
  currencyResult: '.select2-results',
  currency: '.select2-selection__rendered',
  apply: 'input.btn.green',
  backButton: 'a.btn.default',
  delete: 'a.btn.default.btn-xs.red-stripe.delete-terminal',
  modelTitle: '.modal-body',
  deletePopUp: 'button.btn.submit.red',
};

const commands = [
  {
    async verifyPaymentPage() {
      await this.waitUntilVisibleElement('@verifyPaymentPage');
      await this.getText('@verifyPaymentPage', async (result) => {
        const text = result.value;
        console.log(text);
      });
    },
    async clickRadioButton() {
      if (
        (await this.expect.element('@radioButtonb2bBeanstream').to.not.be
          .selected) === true
      ) {
        await this.waitUntilVisibleElement('@radioButtonb2bBeanstream');
        await this.clickVisibleElement('@radioButtonb2bBeanstream');
        await this.api.pause(1000);
        await this.clickVisibleElement('@applyButton');
        await this.api.pause(7000);
      } else {
        await console.log('Beanstream option is already selected');
      }
    },
    async verifySuccessMessageApplyButton() {
      await this.waitUntilVisibleElement('@successMessageApplyButton');
      await this.getText('@successMessageApplyButton', async (result) => {
        const text = result.value;
        await console.log(text);
        await this.api.pause(1000);
        await this.waitUntilVisibleElement('@successMessageApplyButton');
      });
    },

    async clickEditBeanstream() {
      await this.waitUntilVisibleElement('@editBeanstreamButton');
      await this.clickVisibleElement('@editBeanstreamButton');
    },

    async verifyAddTerminalPage() {
      await this.getText('@paymentPageTitle', async (result) => {
        const text = result.value;
        await console.log(text);
      });
    },

    async verifyBeanstreamAccountName() {
      await this.waitUntilVisibleElement('@beanstreamDefault');
      await this.getText('@beanstreamDefault', async (result) => {
        const text = result.value;
        await console.log(`Beanstream is ${text}`);
        await this.api.pause(1000);
        await this.waitUntilVisibleElement('@beanstreamDefault');
      });
    },

    async clickAddTerminalButton() {
      await this.waitUntilVisibleElement('@addTerminalButton');
      await this.api.pause(1000);
      await this.clickVisibleElement('@addTerminalButton');
    },

    async verifyTerminalSuccessMessage() {
      await this.checkElementPresent('@successMessageTerminal');
      await this.getText('@successMessageTerminal', async (result) => {
        const text = result.value;
        await console.log(text);
        await this.waitUntilVisibleElement('@successMessageTerminal');
        await this.api.pause(3000);
      });
    },

    async clickButtonEdit() {
      await this.api.refresh();
      await this.api.pause(1000);
      await this.waitUntilVisibleElement('@clickButtonEdit');
      await this.clickVisibleElement('@clickButtonEdit');
    },

    async verifyEditBeanstreamPage() {
      await this.waitUntilVisibleElement('@editPage');
      await this.getText('@editPage', async (result) => {
        const text = result.value;
        await console.log(text);
        await this.api.pause(1000);
        await this.waitUntilVisibleElement('@editPage');
      });
    },

    async clickCurrency() {
      await this.waitUntilVisibleElement('@currency');
      await this.api.pause(1000);
      await this.clickVisibleElement('@currency');
      await this.setField('@currencySelect', 'Australian Dollars (AUD)');
      await this.clickVisibleElement('@currencyResult');
      await this.api.pause(2000);
    },

    async clickApplyButton() {
      await this.clickVisibleElement('@apply');
    },

    async verifyUpdateSuccess() {
      await this.checkElementPresent('@updateSuccess');
      await this.getText('@updateSuccess', async (result) => {
        const text = result.value;
        await console.log(text);
        await this.waitUntilVisibleElement('@updateSuccess');
        await this.api.pause(5000);
      });
    },

    async clickBackButton() {
      await this.clickVisibleElement('@backButton');
      await this.api.pause(2000);
    },

    async clickDelete() {
      await this.clickVisibleElement('@delete');
      await this.api.pause(2000);
    },

    async verifyModelTitle() {
      await this.waitUntilVisibleElement('@modelTitle');
      await this.getText('@modelTitle', async (result) => {
        const text = result.value;
        await console.log(text);
        await this.api.pause(1000);
        await this.waitUntilVisibleElement('@modelTitle');
      });
    },

    async deleteTerminal() {
      await this.clickVisibleElement('@deletePopUp');
      await this.api.pause(2000);
      await this.api.refresh();
    },
  },
];

module.exports = {
  elements,
  commands,
};
