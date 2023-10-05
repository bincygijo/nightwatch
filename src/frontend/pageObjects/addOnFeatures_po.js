/* eslint-disable no-await-in-loop */

const { CONSOLE_COLORS } = require('../../helper/constants/constants');

const elements = {
  pageTitle: '.page-title',
  heading: {
    selector: '//h1',
    locateStrategy: 'xpath',
  },
  btnShipTo: {
    selector:
      '//label[text()="Customer Ship-to Custom Fields"]//following::label[@class="bootstrap-switch-label"][1]',
    locateStrategy: 'xpath',
  },
  btnApply: {
    selector: '//form[@id="myform"]//input[@value="Apply"]',
    locateStrategy: 'xpath',
  },
  btnAddNewCustomField: {
    selector:
      '//div[@class="pull-right"]//following::a[@class="btn green export"]',
    locateStrategy: 'xpath',
  },
  titleText: {
    selector: '//input[@name="name"]',
    locateStrategy: 'xpath',
  },
  custdescription: {
    selector: '//input[@name="description"]',
    locateStrategy: 'xpath',
  },
  btnBlue: {
    selector: '//input[@class="btn blue"]',
    locateStrategy: 'xpath',
  },
  btnBlueSearch: {
    selector: '//button[@class="btn blue" and @type="submit"]',
    locateStrategy: 'xpath',
  },
  btnGreenSubmit: {
    selector: '//button[@class="btn submit green"]',
    locateStrategy: 'xpath',
  },
  btnProductSearch: {
    selector: '//button[@class="button button-search" and @title="Search"]',
    locateStrategy: 'xpath',
  },
  txtSearch: {
    selector: '//input[@type="search"]',
    locateStrategy: 'xpath',
  },
  txtSearchLocation: {
    selector: '(//table[@id="datatable"]//input[@type="text"])[1]',
    locateStrategy: 'xpath',
  },
  Location: {
    selector:
      '//table[@class="table table-striped table-bordered table-hover dataTable no-footer"]//following::a[text()="Locations"]',
    locateStrategy: 'xpath',
  },
  toasterMessage: '.toast-message',
  closeToastMessage: {
    selector:
      '//div[@id="toast-container"]//button[@class="toast-close-button"]',
    locateStrategy: 'xpath',
  },
  editLocPath: {
    selector: '//a[contains(@class, "yellow-stripe")]',
    locateStrategy: 'xpath',
  },
  setWarehouse: {
    selector: '//input[@class="select2-search__field"]',
    locateStrategy: 'xpath',
  },
  selHighlightedValue: {
    selector:
      '//li[@class="select2-results__option select2-results__option--highlighted"]',
    locateStrategy: 'xpath',
  },
  btnUpdateCustomFields: {
    selector: '//input[@class="btn green" and @value="Update Custom Fields"]',
    locateStrategy: 'xpath',
  },
  CustomerListingsMenu: {
    selector:
      '//span[text()="Sage Accounts"]//following::a[contains(text(),"Customer Listings")]',
    locateStrategy: 'xpath',
  },
  searchBox: {
    selector: '//input[@class="input-text ajax-search-flyout" and @name="q"]',
    locateStrategy: 'xpath',
  },
  btnShipToCart: {
    selector: '//div[@class="ship-to"]/a',
    locateStrategy: 'xpath',
  },
  clkShipToAddress: {
    selector: '//div[@class="ship-to"]/a',
    locateStrategy: 'xpath',
  },
  btnCloseShipTo: {
    selector:
      '//div[@id="cart-ship-to-change-address"]//div[@class="modal-body"]/span[@class="fa fa-times-circle"]',
    locateStrategy: 'xpath',
  },
  btnRemoveAllItems: {
    selector:
      '//a[@class="btn-remove btn-remove2" and @title="Remove All Items"]',
    locateStrategy: 'xpath',
  },
};

const commands = [
  {
    async verifyPageLoading() {
      /* await this.waitUntilVisibleElement('@heading');
    await this.getText('@heading', async result => {
      const text = result.value;
      this.checkElementTextContains('@heading', text);
      console.log(`Success -> ${text} page has been loaded successfully`);
    }); */
    },
    async clickCustomShipToButton() {
      await this.api.pause(2000);
      const btnShipToClicked =
        '//label[text()="Customer Ship-to Custom Fields"]//following-sibling::div/div[contains(@class,"bootstrap-switch-off")]';
      await this.api.element('xpath', btnShipToClicked, (visible) => {
        if (visible.status !== -1) {
          console.log(
            'Action --> Custom ship-to setting is off, turning it ON now'
          );
          this.waitUntilVisibleElement('@btnShipTo');
          this.clickVisibleElement('@btnShipTo');
          this.api.pause(2000);
        }
      });
    },

    async clickButtonApply() {
      await this.api.execute('scrollTo(0,0)');
      await this.api.pause(100);
      await this.waitForElementVisible('@btnApply');
      await this.clickVisibleElement('@btnApply');
      await this.api.pause(1000);
    },

    async verifyCustomSettingSavedPage(successMsg) {
      await this.waitUntilVisibleElement('@toasterMessage');
      await this.getText('@toasterMessage', async () => {
        this.checkElementTextContains('@toasterMessage', successMsg);
      });
      await this.waitUntilVisibleElement('@closeToastMessage');
      await this.clickVisibleElement('@closeToastMessage');
    },

    async verifyCustomFieldsCreated(message) {
      console.log(message);
    },

    async clickVerifyNewCustomFields(data) {
      for (let index = 0; index < data[0].length; index += 1) {
        await this.clickAddNewCustomFields(data[0][index]);
        await this.api.pause(4000);
      }
    },

    async clickAddNewCustomFields(warehouse) {
      const warehouseType = warehouse.substr(0, warehouse.indexOf(' '));
      const warehousePath = "//td[2][text() = '".concat(`${warehouse}']`);
      const selectWarehouse = {
        selector: `//select[@class="select2-nosearch form-control select2-hidden-accessible"]/option[contains(text(),"${warehouseType}")]`,
        locateStrategy: 'xpath',
      };
      const deleteWarehouse = {
        selector: `//td[2][text() = '${warehouse}']//following-sibling::td//a[2]`,
        locateStrategy: 'xpath',
      };

      await this.api.element('xpath', warehousePath, async (visible) => {
        if (visible.status !== -1) {
          console.log(
            `${warehouse} custom field already exists, deleting and re-creating now`
          );
          this.clickVisibleElement(deleteWarehouse);
          this.api.pause(1000);
          this.click('@btnGreenSubmit');
        }
      });

      await this.clickVisibleElement('@btnAddNewCustomField');
      await this.api.pause(500);
      await this.clickVisibleElement('@titleText');
      await this.setField('@titleText', `Automation  ${warehouse}`);
      await this.api.pause(500);
      await this.setField('@custdescription', `${warehouse} Desc`);
      await this.api.pause(500);
      await this.clickVisibleElement(selectWarehouse);
      await this.api.pause(500);
      await this.clickVisibleElement('@btnBlue');
      await this.api.pause(1000);
    },

    async clickSearchCustomer(customerDetail) {
      await this.clickVisibleElement('@txtSearch');
      await this.api.pause(1000);
      await this.setField('@txtSearch', customerDetail);
      await this.api.pause(500);
      console.log(`Searching ${customerDetail} Customer in database`);
      await this.api.pause(1500);
    },

    async verifyCustomerFound(customerDetail) {
      const txtSearchPath = `//td[contains(text(),"${customerDetail}")]`;
      await this.api.element('xpath', txtSearchPath, async (visible) => {
        if (visible.status !== -1) {
          console.log(`Found customer ->  ${customerDetail} thru Search`);
        } else {
          throw new Error(
            `Could not find customer -> ${customerDetail} thru Search`
          );
        }
      });
    },

    async verifyLocationFound(locationDetail) {
      const txtSearchPath = `//td[1][text()="${locationDetail}"]`;
      await this.api.element('xpath', txtSearchPath, async (visible) => {
        if (visible.status !== -1) {
          console.log(
            `Success -> Found location -> ${locationDetail} thru Search`
          );
        } else {
          console.log(
            CONSOLE_COLORS.red,
            `Error -> Could not find location -> ${locationDetail} thru Search, trying again..`
          );
          await this.searchLocation(locationDetail);
        }
      });
    },

    async clickLocations() {
      await this.waitUntilVisibleElement('@Location');
      await this.clickVisibleElement('@Location');
      await this.api.pause(1000);
    },

    async searchLocation(locationDetail) {
      await this.api.pause(1000);
      await this.waitUntilVisibleElement('@txtSearchLocation');
      await this.clickVisibleElement('@txtSearchLocation');
      await this.api.pause(500);
      await this.setField('@txtSearchLocation', locationDetail);
      await this.api.pause(2500);
    },

    async editLocation(locationDetail) {
      console.log(`Editing location -> ${locationDetail}`);
      await this.clickVisibleElement('@editLocPath');
      await this.api.pause(500);
    },

    async setWarehouse(warehouse) {
      for (let index = 1; index <= warehouse[0].length; index += 1) {
        const clkWarehouse = {
          selector: `//div[@class="portlet box grey"]//div[@class="form-group"][${index}]//span[contains(@id,"select2-custom_")]`,
          locateStrategy: 'xpath',
        };

        await this.waitForElementVisible(clkWarehouse);
        await this.clickVisibleElement(clkWarehouse);
        await this.api.pause(500);
        await this.waitUntilVisibleElement('@setWarehouse');
        await this.clickVisibleElement('@setWarehouse');
        await this.setField('@setWarehouse', warehouse[1][index - 1]);
        await this.api.pause(2000);
        await this.clickVisibleElement('@selHighlightedValue');
        await this.api.pause(750);
      }

      await this.api.pause(1000);
    },

    async updateCustomFields() {
      await this.clickVisibleElement('@btnUpdateCustomFields');
      await this.api.pause(1500);
    },

    async clickCustomerListingsMenu() {
      await this.clickVisibleElement('@CustomerListingsMenu');
      await this.api.pause(2000);
    },

    async checkShiptoAddress(shipToAddress) {
      const chkShipToAddress = {
        selector: `//div[@class='ship-to']/a[contains(.,'${shipToAddress}')]`,
        locateStrategy: 'xpath',
      };
      const selectShipToAddress = {
        selector: `//div[@id="cart-ship-to-change-address"]//label[contains(.,'${shipToAddress}')]//preceding::input[1]`,
        locateStrategy: 'xpath',
      };
      // click on shipping-to link
      await this.waitUntilVisibleElement('@btnShipToCart');
      await this.clickVisibleElement('@btnShipToCart');
      await this.api.pause(3000);

      // verify if shipping address as set in constant file if not click/set correct address
      await this.api.element('xpath', chkShipToAddress, (visible) => {
        if (visible.status !== -1) {
          console.log(
            `Current shipping address is ${shipToAddress} no need to change`
          );
          this.clickVisibleElement('@btnCloseShipTo');
          this.api.pause(2000);
        } else {
          console.log(
            `Shipping address needs to be updated to ${shipToAddress}`
          );
          this.clickVisibleElement(selectShipToAddress);
          this.api.pause(5000);
        }
      });
    },
    async verifyWarehouseOrderOnCartPage(ItemWarehouse) {
      for (let index = 1; index < ItemWarehouse[0].length; index += 1) {
        const actualWarehouse = {
          selector: `//tr[@class="item-row first last odd" and @data-itemno='${ItemWarehouse[1][0]}']//tbody/tr[${index}]/td[1]`,
          locateStrategy: 'xpath',
        };

        await this.checkElementTextContains(
          actualWarehouse,
          ItemWarehouse[1][index]
        );
      }

      await this.clearCartOnCartPage();
    },
    async clearCartOnCartPage() {
      // clear cart before exiting this check
      await this.clickVisibleElement('@btnRemoveAllItems');
      await this.api.pause(1000);
    },
  },
];

module.exports = {
  elements,
  commands,
};
