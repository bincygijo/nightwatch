const { client } = require('nightwatch-api');

const { CONSOLE_COLORS } = require('../../helper/constants/constants');

const accountMenuPage = client.page.accountMenu_po();

const elements = {
  pageTitle: {
    selector: '//div[@class="page-title"]/h1',
    locateStrategy: 'xpath',
  },
  orderPgUnitPrice: {
    selector: '//td[5]//span[@class="cart-price"]//span[@class="price"]',
    locateStrategy: 'xpath',
  },
  invoicePgUnitPrice: {
    selector: '//tbody//tr[1]//td[7]//span[@class="price"]',
    locateStrategy: 'xpath',
  },
  btnUpdate: {
    selector: '//input[@class="btn green"]',
    locateStrategy: 'xpath',
  },
  CloseSuccessMsg: {
    selector:
      '//div[@id="toast-container"]//button[@class="toast-close-button"]',
    locateStrategy: 'xpath',
  },
};

const commands = [
  {
    async clickUpdateButton() {
      await this.api.execute('scrollTo(0,0)');
      await this.waitUntilVisibleElement('@btnUpdate');
      await this.clickVisibleElement('@btnUpdate');
      await this.api.pause(1000);
    },
    async updateFeatureSetting(settings, display) {
      const displaySettings = {
        selector: `//label[contains(.,'${settings}')]/parent::div//div/label[contains(@class,"bootstrap-switch-label")]`,
        locateStrategy: 'xpath',
      };
      // const btnAllowAddToCartForZeroPricedItemsON = `//div[@class="col-md-6 col-sm-12"][2]//following::label[contains(.,'${settings}')]//following::div[contains(@class,'bootstrap-switch-${display}')][1]`;
      const btnFeatureSettingON = `//label[contains(.,'${settings}')]/parent::div//div[contains(@class,"bootstrap-switch-${display}")]`;
      console.log(btnFeatureSettingON);
      await this.api.execute('scrollTo(0,0)');
      await this.api.pause(500);
      await this.api.element('xpath', btnFeatureSettingON, (visible) => {
        if (visible.status !== -1) {
          console.log(CONSOLE_COLORS.pink, `${settings} is already ${display}`);
          this.api.execute('scrollTo(1500,0)');
        } else {
          console.log(
            CONSOLE_COLORS.pink,
            `${settings} is turned "${display}"`
          );
          this.clickVisibleElement(displaySettings);
          this.api.pause(500);
          this.api.execute('scrollTo(1500,0)');
        }
      });
    },

    async clickAllowFractionQty(state) {
      const btnAllowFractionQtyON = `//input[@id="allow_fractional_quantities"]/parent::div/parent::div[contains(@class,"bootstrap-switch-${state}")]`;
      await this.api.element('xpath', btnAllowFractionQtyON, (visible) => {
        if (visible.status !== -1) {
          console.log(`Allow fractional quantity is already ${state}`);
        } else if (state === 'on') {
          this.clickVisibleElement('@enableFractionQty');
          this.api.pause(200);
          this.clickVisibleElement('@specifyFractionqtyDecimal');
          this.clearField('@specifyFractionqtyDecimal');
          this.setField('@specifyFractionqtyDecimal', 4);
        } else {
          this.clickVisibleElement('@enableFractionQty');
          this.api.pause(200);
        }
      });
    },

    async verifyPayOpenInvoice(option, display) {
      const OpenInvoiceExist = `//div//a//span[contains(.,"${option}")]`;

      // expected to see open invoice link
      await this.api.element('xpath', OpenInvoiceExist, async (visible) => {
        if (visible.status !== -1 && display === 'is') {
          console.log(
            'Success--> As expected Pay Open Invoice option is available'
          );
        }

        if (visible.status === -1 && display === 'is') {
          throw new Error(
            CONSOLE_COLORS.red,
            'Failure--> Pay Open Invoice option is not available when it expected to be available'
          );
        }
      });

      // not expected to see Pay open invoice
      await this.api.element('xpath', OpenInvoiceExist, async (visible) => {
        if (visible.status === -1 && display === 'is NOT') {
          console.log(
            'Success--> As expected, Pay Open Invoice option is NOT available'
          );
        }

        if (visible.status !== -1 && display === 'is NOT') {
          throw new Error(
            CONSOLE_COLORS.red,
            'Failure--> Pay Open Invoice option is available when it was not expected to be available'
          );
        }
      });
    },

    async verifyPageLoaded(Title) {
      await this.api.pause(500);
      await this.waitUntilVisibleElement('@pageTitle');
      await this.getText('@pageTitle', async (result) => {
        const pageTitleText = result.value;
        this.checkElementTextContains('@pageTitle', pageTitleText);
        console.log(
          'Success ->',
          `${Title} Products page is displayed successfully`
        );
      });
    },

    async setElementValue(elementName, noOfDecimals) {
      const noOfDecimalsElem = {
        selector: `//input[@id='${elementName}']`,
        locateStrategy: 'xpath',
      };

      await this.api.pause(200);
      await this.waitUntilVisibleElement(noOfDecimalsElem);
      await this.clickVisibleElement(noOfDecimalsElem);
      await this.clearField(noOfDecimalsElem);
      await this.setField(noOfDecimalsElem, noOfDecimals);
      await this.api.pause(500);
    },

    async verifyUnitPriceDecimals(pgname, noOfDecimals) {
      const unitPriceonInvoice =
        '//tbody//span[contains(.,"Unit Price")]/following-sibling::span[contains(text(), "$")]';
      switch (pgname) {
        case 'Order Details':
          await accountMenuPage.clickFirstOrder();
          await this.getText('@orderPgUnitPrice', async (result) => {
            const unitPriceDecimals = result.value
              .toString()
              .split('.')[1].length;
            if (Number(noOfDecimals) !== Number(unitPriceDecimals)) {
              console.log(
                CONSOLE_COLORS.BGred,
                'Error -> No of decimals shown on unit price does not match setting, instead found length = ',
                unitPriceDecimals
              );
              throw new Error('<===== Error as above ===>');
            }
          });
          break;
        case 'Invoice':
          await this.api.elements(
            'xpath',
            unitPriceonInvoice,
            async (elemArray) => {
              elemArray.value.forEach((elem) => {
                client.elementIdText(elem.ELEMENT, (result) => {
                  const unitPriceDecimals = result.value
                    .toString()
                    .split('.')[1].length;
                  if (Number(noOfDecimals) !== Number(unitPriceDecimals)) {
                    console.log(
                      CONSOLE_COLORS.BGred,
                      'Error -> No of decimals shown on unit price does not match setting, instead found length = ',
                      unitPriceDecimals,
                      elem.value
                    );
                    throw new Error('<===== Error as above ===>');
                  }
                });
              });
            }
          );

          break;
        default:
          console.log(
            CONSOLE_COLORS.yellow,
            `${pgname} page is not recognized`
          );
      }
    },
  },
];

module.exports = {
  elements,
  commands,
};
