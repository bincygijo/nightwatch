const { client } = require('nightwatch-api');

const { CONSOLE_COLORS } = require('../../helper/constants/constants');

const elements = {
  pageTitle: '.page-title',
  searchBox: {
    selector: '//input[@name="columns[1][search][value]"]',
    locateStrategy: 'xpath',
  },
  warehouseInputField: {
    selector:
      '//label[text()="Warehouse Restriction"]//following::input[@class="select2-search__field" and @type="search"][1]',
    locateStrategy: 'xpath',
  },
  searchResult: {
    selector:
      '//li[@class="select2-results__option select2-results__option--highlighted"]',
    locateStrategy: 'xpath',
  },
  applyButton: {
    selector: '//button[@class="btn green submit" and @type="submit"]',
    locateStrategy: 'xpath',
  },
  warehouse: {
    selector: '//label[text()="Warehouse Restriction"]//following::ul[1]/li[1]',
    locateStrategy: 'xpath',
  },
  removeWarehouse: {
    selector:
      '//label[text()="Warehouse Restriction"]//following::ul[1]/li[1]/span[@class="select2-selection__choice__remove"][1]',
    locateStrategy: 'xpath',
  },
  toasterMessage: '.toast-message',
  searchProduct: 'input[name="columns[0][search][value]"]',
  closeToastMessage: {
    selector:
      '//div[@id="toast-container"]//button[@class="toast-close-button"]',
    locateStrategy: 'xpath',
  },
  generalSettings: {
    selector: '//div/h3[text()="General Settings"]',
    locateStrategy: 'xpath',
  },
  saveButton: {
    selector: '//table[@id="variantDatatable"]/tbody/tr/td[3]/span/a[1]',
    locateStrategy: 'xpath',
  },
  buttonSave: {
    selector: '//button[@name="submit_details"]',
    locateStrategy: 'xpath',
  },
  clickDashboard: {
    selector: '//span[text()="Dashboard"]',
    locateStrategy: 'xpath',
  },
  clickInclusionTextBox: {
    selector: '//label[text()="Inclusion"]//following::input[1]',
    locateStrategy: 'xpath',
  },
  clickExclusionTextBox: {
    selector: '//label[text()="Exclusion"]//following::input[1]',
    locateStrategy: 'xpath',
  },
};

const commands = [
  {
    async verifyPage() {
      await this.waitUntilVisibleElement('@pageTitle');
      await this.getText('@pageTitle', async (result) => {
        const pageTitleText = result.value;
        this.checkElementTextContains('@pageTitle', pageTitleText);
        console.log(
          'Success ->',
          `${pageTitleText} Products page is displayed successfully`
        );
      });
    },

    async searchEditProductCode(code) {
      const productCode = {
        selector: `//table[@id="datatable"]/tbody/tr//td[2][contains(.,'${code}')]//following::td[6]/a`,
        locateStrategy: 'xpath',
      };
      await this.api.pause(5000);
      await this.clickVisibleElement('@searchBox');
      await this.setField('@searchBox', code);
      await this.api.pause(3000);
      await this.clickVisibleElement(productCode);
      await this.api.pause(5000);
    },

    async verifyProductSettingsPage() {
      await this.waitUntilVisibleElement('@generalSettings');
      await this.getText('@generalSettings', async (result) => {
        const generalSettingsText = result.value;
        this.checkElementTextContains('@generalSettings', generalSettingsText);
        console.log(
          'Success ->',
          `${generalSettingsText} page is displayed successfully`
        );
      });
      await this.api.pause(5000);
    },

    async addWarehouse(wCode) {
      await this.clickVisibleElement('@warehouseInputField');
      await this.api.pause(1000);
      await this.setField('@warehouseInputField', wCode);
      await this.api.pause(3000);
      await this.clickVisibleElement('@searchResult');
    },
    async clickApply() {
      await this.api.execute('scrollTo(1000,0)');
      await this.api.pause(1000);
      await this.clickVisibleElement('@applyButton');
      await this.api.pause(1000);
    },
    async verifyAction() {
      await this.api.pause(3000);
      await this.waitUntilVisibleElement('@toasterMessage');
      await this.getText('@toasterMessage', async (result) => {
        const successMessage = result.value;
        this.checkElementTextContains('@toasterMessage', successMessage);
        console.log(
          CONSOLE_COLORS.cyan,
          `Actual Pop Up Message is -> ${successMessage}`
        );
      });
      await this.clickVisibleElement('@closeToastMessage');
      await this.api.pause(3000);
    },

    async RemoveAddedWarehouse() {
      await this.api.pause(1000);
      await this.waitUntilVisibleElement('@removeWarehouse');
      await this.clickVisibleElement('@removeWarehouse');
      await this.api.execute('scrollTo(1000,0)');
      await this.clickVisibleElement('@applyButton');
      await this.api.pause(3000);
    },
    async verifyVariantProductsPage() {
      await this.api.pause(1000);
      await this.waitUntilVisibleElement('@pageTitle');
      await this.getText('@pageTitle', async (result) => {
        const variantText = result.value;
        this.checkElementTextContains('@pageTitle', variantText);
        console.log(
          'Success ->',
          `${variantText} page has been loaded successfully`
        );
      });
    },

    async clickSave() {
      await this.api.pause(3000);
      await this.waitUntilVisibleElement('@buttonSave');
      await this.clickVisibleElement('@buttonSave');
    },

    async clickSaveButton() {
      await this.clickVisibleElement('@saveButton');
      await this.api.pause(5000);
    },

    async clickDashboardLink() {
      this.api.pause(1000);
      this.clickVisibleElement('@clickDashboard');
    },

    async verifyProductCode(pCode) {
      const productCode = {
        selector: `//div[@class="product-name"]//h1[contains(.,'${pCode}')]`,
        locateStrategy: 'xpath',
      };
      await this.api.pause(1000);
      await this.waitUntilVisibleElement(productCode);
      await this.getText(productCode, async (result) => {
        const pCodeMsg = result.value;
        this.checkElementTextContains(productCode, pCodeMsg);
        console.log('Product Code ->', `${pCodeMsg}`);
      });
    },

    async verifyProductPrice(expectedPrice) {
      let proPrice;
      const productPrice = {
        selector: `//div[@class="regular-price"]`,
        locateStrategy: 'xpath',
      };

      await this.waitUntilVisibleElement(productPrice);
      await this.getText(productPrice, async (result) => {
        proPrice = result.value;
        console.log('Product Price is ->', proPrice);
      });

      if (expectedPrice === proPrice) {
        console.log(
          `Success -> Product price ${proPrice} is matching with expected Price ${expectedPrice}`
        );
      } else {
        throw new Error(
          `Failure -> Product price ${proPrice} is NOT matching with expected Price ${expectedPrice}`
        );
      }
    },

    async applyInclusionCustomer(customer) {
      const enableInclusion = `//span[contains(.,"Inclusion")]//following::div[1]/span[@class="checked"]`;
      const clickCheckbox = {
        selector: `//span[contains(.,"Inclusion")]//following::div[1]/span`,
        locateStrategy: 'xpath',
      };

      await this.api.execute('scrollTo(0,2500)');
      await this.api.pause(2000);
      await this.clickVisibleElement('@clickInclusionTextBox');
      await this.setField('@clickInclusionTextBox', customer);
      await this.api.pause(2000);
      await client.keys([client.Keys.ENTER]);
      await this.api.pause(3000);
      await this.api.element('xpath', enableInclusion, (visible) => {
        if (visible.status !== -1) {
          console.log(`Custom field Inclusion is already enabled`);
          this.api.pause(500);
        } else {
          this.clickVisibleElement(clickCheckbox);
          this.api.pause(500);
        }
      });
      await this.api.execute('scrollTo(1500,0)');
      await this.clickVisibleElement('@applyButton');
      await this.waitUntilVisibleElement('@closeToastMessage');
      await this.clickVisibleElement('@closeToastMessage');
      await this.api.pause(1000);
      await this.clickVisibleElement('@clickDashboard');
    },

    async verifyInclusionMessage(msg) {
      const searchMsg = {
        selector: `//div[@class="note-msg empty-catalog"]/h3[contains(.,'${msg}')]`,
        locateStrategy: 'xpath',
      };
      await this.api.pause(1000);
      await this.waitUntilVisibleElement(searchMsg);
      await this.getText(searchMsg, async (result) => {
        const pMsg = result.value;
        this.checkElementTextContains(searchMsg, pMsg);
        console.log('Product Message ->', `${pMsg}`);
      });
    },

    async verifyProductNameAfterInclusion(pName) {
      const productN = {
        selector: `//h2[@class="product-name"]/a[contains(.,'${pName}')]`,
        locateStrategy: 'xpath',
      };
      await this.api.pause(1000);
      await this.waitUntilVisibleElement(productN);
      await this.getText(productN, async (result) => {
        const proName = result.value;
        this.checkElementTextContains(productN, proName);
        console.log('Product Name is ->', `${proName}`);
      });
    },

    async applyExclusionCustomer(customer) {
      const enableExclusion = `//span[contains(.,"Exclusion")]//following::div[1]/span[@class="checked"]`;
      const clickCheckbox = {
        selector: `//span[contains(.,"Exclusion")]//following::div[1]/span`,
        locateStrategy: 'xpath',
      };

      await this.api.execute('scrollTo(0,2500)');
      await this.api.pause(2000);
      await this.clickVisibleElement('@clickExclusionTextBox');
      await this.setField('@clickExclusionTextBox', customer);
      await this.api.pause(2000);
      await client.keys([client.Keys.ENTER]);
      await this.api.pause(3000);
      await this.api.element('xpath', enableExclusion, (visible) => {
        if (visible.status !== -1) {
          console.log(`Custom field Exclusion is already enabled`);
          this.api.pause(500);
        } else {
          this.clickVisibleElement(clickCheckbox);
          this.api.pause(500);
        }
      });
      await this.api.execute('scrollTo(1500,0)');
      await this.clickVisibleElement('@applyButton');
      await this.waitUntilVisibleElement('@closeToastMessage');
      await this.clickVisibleElement('@closeToastMessage');
      await this.api.pause(1000);
      await this.clickVisibleElement('@clickDashboard');
    },
  },
];

module.exports = {
  elements,
  commands,
};
