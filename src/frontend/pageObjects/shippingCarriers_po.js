/* eslint-disable complexity */
/* eslint-disable no-await-in-loop */
const { client } = require('nightwatch-api');

const {
  cartPageValues,
  CONSOLE_COLORS,
} = require('../../helper/constants/constants');

const elements = {
  pageTitle: '.page-title',
  toasterMessage: '.toast-message',
  closeToastMessage: {
    selector:
      '//div[@id="toast-container"]//button[@class="toast-close-button"]',
    locateStrategy: 'xpath',
  },
  selectRestriction: {
    selector:
      '//label[text()="Restriction Type"]//following::span[@id="select2-carrierRestrict-container"]',
    locateStrategy: 'xpath',
  },
  applyBtn: {
    selector: '//input[@value="Apply"]',
    locateStrategy: 'xpath',
  },
  searchRestriction: {
    selector: '//input[@type="search"]',
    locateStrategy: 'xpath',
  },
  successMsg: {
    selector: '//div[@class="success"]/p',
    locateStrategy: 'xpath',
  },
  btnContinueShippingMethod: {
    selector: '//button[@name="update_total"]',
    locateStrategy: 'xpath',
  },
};

let carrierDisplayStatus = '';
let TBCOption = '';
let isHidePriceOn = '';
let isFreeShippingOn = '';
let FixedShippingAmount = '';
let enableCalculation = '';
let additionalCharges = '';
let shippingCostBasis = '';
let freeShippingThreshold = '';
let profitMargin = '';
let carrierName = '';
let continueLoop = 'false';
let checkError = 'No Error';

const commands = [
  {
    async verifyCarrierPage() {
      await this.waitUntilVisibleElement('@pageTitle');
      await this.getText('@pageTitle', async (result) => {
        const pageTitleText = result.value;
        this.checkElementTextContains('@pageTitle', pageTitleText);
        console.log(
          'Success ->',
          `${pageTitleText} Carrier page is displayed successfully`
        );
      });
    },

    async clickEditCarrierName(code) {
      const carrier = {
        selector: `//table[@id="assigned-items-table"]/tbody//tr/td/a[contains(.,'${code}')]//following::td[8]/a`,
        locateStrategy: 'xpath',
      };
      await this.api.pause(2000);
      await this.clickVisibleElement(carrier);
    },

    async selectRestrictionType(type) {
      const restriction = {
        selector: `//label[text()="Restriction Type"]//following::select[@id="carrierRestrict"]//option[text()="${type}"]`,
        locateStrategy: 'xpath',
      };

      const restrictionType = `//label[text()="Restriction Type"]//following::span[@title="${type}"]`;

      await this.api.element('xpath', restrictionType, (visible) => {
        if (visible.status !== -1) {
          console.log(`Restriction type is  -> ${type} `);
        } else {
          this.clickVisibleElement('@selectRestriction');
          this.clickVisibleElement(restriction);
          this.api.pause(3000);
        }
      });
    },

    async selectRestrictionValue(Restrictionvalue) {
      const restrictionValue = `//label[contains(text(),"Restriction Values by Type")]//following::li[contains(@title,"${Restrictionvalue}")]`;

      await this.api.element('xpath', restrictionValue, async (visible) => {
        if (visible.status !== -1) {
          console.log(`Restriction type value is  -> ${Restrictionvalue}`);
        } else {
          this.clickVisibleElement('@searchRestriction');
          this.api.pause(2000);
          this.setField('@searchRestriction', Restrictionvalue);
          this.api.pause(2000);
          client.keys([client.Keys.ENTER]);
          this.api.pause(1000);
        }
      });

      await this.clickVisibleElement('@applyBtn');
      await this.api.pause(1000);
    },

    async updateCarrierCalculationSettings(dataTable) {
      const settingsTypeValues = dataTable.raw();

      await this.api.pause(3000);

      for (let index = 0; index < settingsTypeValues[0].length; index += 1) {
        if (settingsTypeValues[0][index] === 'Input') {
          await this.updateInput(
            settingsTypeValues[1][index],
            settingsTypeValues[2][index]
          );
        }

        if (settingsTypeValues[0][index] === 'Button') {
          await this.updateButton(
            settingsTypeValues[1][index],
            settingsTypeValues[2][index]
          );
        }

        if (settingsTypeValues[0][index] === 'Checkbox-Input') {
          await this.updateCheckBoxInput(
            settingsTypeValues[1][index],
            settingsTypeValues[2][index]
          );
        }

        this.api.execute('scrollTo(500,0)');
        await this.api.pause(1000);
      }

      await this.api.execute('scrollTo(0,0)');
      await this.clickVisibleElement('@applyBtn');
      await this.api.pause(1000);
    },

    async updateInput(settingName, value) {
      const settingValue = {
        selector: `//label[contains(.,"${settingName}")]/following-sibling::div/input`,
        locateStrategy: 'xpath',
      };

      if (value === 'off') {
        await this.clickVisibleElement(settingValue);
        await this.clearField(settingValue);
        await this.api.pause(100);
        await this.setField(settingValue, 0);
        await this.api.pause(300);
      } else {
        await this.clickVisibleElement(settingValue);
        await this.clearField(settingValue);
        await this.api.pause(100);
        await this.setField(settingValue, value);
        await this.api.pause(300);
      }
    },

    async updateButton(settingName, onOff) {
      const btnState = `//label[text()="${settingName}"]//following-sibling::div/div[contains(@class,"bootstrap-switch-${onOff}")]`;

      const clickButton = {
        selector: `//label[text()="${settingName}"]//following::label[@class="bootstrap-switch-label"][1]`,
        locateStrategy: 'xpath',
      };

      await this.api.element('xpath', btnState, (visible) => {
        if (visible.status !== -1) {
          console.log(
            `No Action --> "${settingName}" setting is already ${onOff}`
          );
        } else {
          console.log(
            `Action --> "${settingName}" setting is turned ${onOff} NOW`
          );
          this.waitUntilVisibleElement(clickButton);
          this.clickVisibleElement(clickButton);
          this.api.pause(1500);
        }
      });
    },

    async updateCheckBoxInput(settingName, value) {
      const checkBox = {
        selector: `//label[contains(.,"${settingName}")]//following-sibling::div//div[contains(@class,"checker")]`,
        locateStrategy: 'xpath',
      };

      const InputBox = {
        selector: `//label[contains(.,"${settingName}")]//following::input[@type="text"]`,
        locateStrategy: 'xpath',
      };

      const ExtraInputBox = {
        selector: `//label[contains(.,"Free Shipping for Orders Label")]//following::input[@type="text"][1]`,
        locateStrategy: 'xpath',
      };

      let checkBoxClicked = '';
      let stateChecked = '';

      console.log(
        '*********************Start - Update CheckboxInput**********************'
      );

      checkBoxClicked = `//label[contains(.,"${settingName}")]/following-sibling::div//span[@class="checked"]/input[@type="checkbox"]`;

      if (value !== 'NA' && value !== 'off') {
        stateChecked = 'checked';
      } else {
        stateChecked = 'off';
      }

      await this.api.element('xpath', checkBoxClicked, async (visible) => {
        if (
          (visible.status !== -1 && stateChecked !== 'off') ||
          (visible.status === -1 && stateChecked === 'off')
        ) {
          // element is already clicked or on and we do not expect to turn it off
          // element is already off or not clicked and we want to keep it off
          console.log(
            `No Action --> "${settingName}" setting is already "${stateChecked}"`
          );
        } else {
          // element is not clicked and we want to click it on or element is clicked and we want to turn it off
          console.log(
            CONSOLE_COLORS.pink,
            `Action --> "${settingName}" setting is  "${stateChecked}" now`
          );
          // this.api.pause(5000);
          this.clickVisibleElement(checkBox);
          this.api.pause(1000);
        }
      });

      if (stateChecked === 'checked') {
        await this.waitUntilVisibleElement(InputBox);
        await this.clickVisibleElement(InputBox);
        await this.clearField(InputBox);
        await this.api.pause(100);
        await this.setField(InputBox, value);
        await this.api.pause(100);
      }

      if (settingName === 'Free Shipping for Orders over' && value !== 'off') {
        await this.waitUntilVisibleElement(ExtraInputBox);
        await this.clickVisibleElement(ExtraInputBox);
        await this.clearField(ExtraInputBox);
        await this.api.pause(100);
        await this.setField(
          ExtraInputBox,
          'You have qualified for free shipping as your order is over %1$s'
        );
        await this.api.pause(100);
      }

      console.log(
        '*********************Finish - Update CheckboxInput**********************'
      );
    },

    async verifyCarriersPage(successMsg) {
      await this.api.pause(3000);
      await this.waitUntilVisibleElement('@toasterMessage');
      await this.getText('@toasterMessage', async () => {
        this.checkElementTextContains('@toasterMessage', successMsg);
      });
      await this.waitUntilVisibleElement('@closeToastMessage');
      await this.clickVisibleElement('@closeToastMessage');
    },

    async verifyCarrierCodeShippingPage(code, ExpectedVisibleStatus) {
      const carrierCode = `//dt[contains(.,'${code}')]`;
      let visibility = '';

      await this.waitUntilVisibleElement('@btnContinueShippingMethod'); // this is to wait until all shipping methods are loaded

      await this.api.element('xpath', carrierCode, async (visible) => {
        if (visible.status !== -1) {
          visibility = 'Carrier Shown';
        } else {
          visibility = 'Carrier Not Shown';
        }
      });

      if (visibility === ExpectedVisibleStatus) {
        console.log(
          `Success -> '${code}' successfully complied with visibility condition "${ExpectedVisibleStatus}"`
        );
      } else {
        console.log(
          CONSOLE_COLORS.red,
          `Failure -> Carrier "${code}" failed to comply with expected visibility condition '${ExpectedVisibleStatus}'' `
        );
        checkError = 'errorOccurred';
      }
    },

    async verifyShippingCarrier(dataTable) {
      const shippingReferences = dataTable.raw();
      await this.populateDecisionReferences(shippingReferences);
      await this.waitUntilVisibleElement('@btnContinueShippingMethod'); // this is to wait until all shipping methods are loaded

      console.log(
        CONSOLE_COLORS.BGCyan,
        `*********************  Verifying Shipping configuration for Carrier "${carrierName}" ********************* `
      );

      await this.verifyCarrierCodeShippingPage(
        carrierName,
        carrierDisplayStatus
      );

      if (carrierDisplayStatus === 'Carrier Shown') {
        continueLoop = 'true';
      }

      while (continueLoop === 'true') {
        if (TBCOption !== 'off') {
          console.log('Verification objective --> TBC Option');
          await this.verifyTBC();
          break;
        }

        if (isHidePriceOn !== 'off') {
          console.log('Verification objective --> Hide Price');
          await this.verifyHidePrice();
          break;
        }

        if (isFreeShippingOn !== 'off') {
          console.log('Verification objective --> Free Shipping');
          await this.verifyFreeShipping();
          break;
        }

        if (Number.isNaN(FixedShippingAmount) === true) {
          console.log('Verification objective --> Calculated Shipping');
          await this.CalculatedShippingCost();
          break;
        } else {
          console.log('Verification objective --> Fixed Shipping');
          await this.FixedShippingCost();
          break;
        }
      }

      console.log(
        CONSOLE_COLORS.BGCyan,
        `*********************  Verifying Shipping configuration for Carrier "${carrierName}" ********************* `
      );

      // reset all variables to avoid trouble for next scenario
      carrierDisplayStatus = '';
      TBCOption = '';
      isHidePriceOn = '';
      isFreeShippingOn = '';
      FixedShippingAmount = '';
      enableCalculation = '';
      additionalCharges = '';
      shippingCostBasis = '';
      freeShippingThreshold = '';
      profitMargin = '';
      carrierName = '';
      continueLoop = 'false';

      await this.VerifyError();
    },

    async VerifyError() {
      console.log('Carrier Verification Error Status => ', checkError);

      if (checkError === 'errorOccurred') {
        checkError = 'No Error';
        throw new Error(
          'Failure -> One or more error occured. Please see details above'
        );
      }
    },

    async populateDecisionReferences(shippingReferences) {
      for (let index = 0; index < shippingReferences[0].length; index += 1) {
        switch (shippingReferences[0][index]) {
          case 'Carrier Name':
            carrierName = shippingReferences[1][index];
            break;
          case 'Carrier to be shown':
            carrierDisplayStatus = shippingReferences[1][index];
            break;
          case 'TBC Shipping':
            TBCOption = shippingReferences[1][index];
            break;
          case 'Hide Shipping Price':
            isHidePriceOn = shippingReferences[1][index];
            break;
          case 'Free Shipping':
            isFreeShippingOn = shippingReferences[1][index];
            break;
          case 'Fixed Amount Shipping':
            FixedShippingAmount = Number(shippingReferences[1][index]);
            break;
          case 'Enable calculation amount':
            enableCalculation = shippingReferences[1][index];
            console.log('Enable Calculation Value', enableCalculation);
            break;
          case 'Additional Charges':
            additionalCharges = Number(shippingReferences[1][index]);
            break;
          case 'Shipping Cost Calculated':
            shippingCostBasis = Number(shippingReferences[1][index]);
            break;
          case 'Free Shipping for Orders over':
            freeShippingThreshold = Number(shippingReferences[1][index]);
            break;
          case 'Profit Margin':
            profitMargin = Number(shippingReferences[1][index]);
            break;
          default:
            console.log(
              CONSOLE_COLORS.red,
              `${shippingReferences[0][index]} is not handled yet. Program code needs update or feature file used wrong code for the field. Pls check the PO file for accepted codes`
            );
        }
      }
    },

    async verifyTBC() {
      const tbcXpath = `//dt[contains(.,'${carrierName}')]/following-sibling::dd[1]//span[@class="price" and contains(.,'${TBCOption}')]`;
      await this.api.element('xpath', tbcXpath, (visible) => {
        if (visible.status !== -1) {
          console.log(
            `Success -> "${carrierName}" has successfully shown shipping price as "${TBCOption}"`
          );
        } else {
          console.log(
            CONSOLE_COLORS.red,
            `Failure -> "${carrierName}" has failed to show shipping price as "${TBCOption}"`
          );
          checkError = 'errorOccurred';
        }
      });
    },

    async verifyHidePrice() {
      const hideXpath = `//dt[contains(.,'${carrierName}')]/following-sibling::dd[1]//span[@class="price" and contains(.,'')]`;
      await this.api.element('xpath', hideXpath, (visible) => {
        if (visible.status !== -1) {
          console.log(
            `Success -> '${carrierName}' has succesfully hided shipping price`
          );
        } else {
          console.log(
            CONSOLE_COLORS.red,
            `Failure -> '${carrierName}' has failed TO HIDE shipping price`
          );
          checkError = 'errorOccurred';
        }
      });
    },

    async verifyFreeShipping() {
      let priceSpan = '';
      if (isHidePriceOn === 'off') {
        priceSpan = '0.00';
      }

      const freeshipXpath = `//dt[contains(.,'${carrierName}')]/following-sibling::dd[1]//span[@class="price" and contains(.,'${priceSpan}')]`;

      await this.api.element('xpath', freeshipXpath, (visible) => {
        if (visible.status !== -1) {
          console.log(
            `Success -> '${carrierName}' has successfully shown free shipping "${isFreeShippingOn}"`
          );
        } else {
          console.log(
            CONSOLE_COLORS.red,
            `Failure -> '${carrierName}' has failed to show free shipping "${isFreeShippingOn}"`
          );
          checkError = 'errorOccurred';
        }
      });
    },

    async FixedShippingCost() {
      let priceSpan = '';
      priceSpan = (profitMargin * FixedShippingAmount) / 100;
      priceSpan = parseFloat(priceSpan.toFixed(2)); // rounding to match one page checkout
      priceSpan += FixedShippingAmount + additionalCharges;

      const freeshipXpath = `//dt[contains(.,'${carrierName}')]/following-sibling::dd[1]//span[@class="price" and contains(.,'${priceSpan}')]`;

      await this.api.element('xpath', freeshipXpath, (visible) => {
        if (visible.status !== -1) {
          console.log(
            `Success -> '${carrierName}' has successfully shown Fixed Shipping Amount Cost as "${priceSpan}"`
          );
        } else {
          console.log(
            CONSOLE_COLORS.red,
            `Failure -> '${carrierName}' has failed to show Fixed Shipping Amount Cost "${priceSpan}"`
          );
          checkError = 'errorOccurred';
        }
      });
    },

    async CalculatedShippingCost() {
      let priceSpan = '';
      let cartSubTotal = '';

      cartSubTotal = cartPageValues.calcRunningSubTotal;

      if (Number(cartSubTotal) > freeShippingThreshold) {
        priceSpan = '0.00';
        console.log(
          'Additional Verification objective --> Free shipping over threshold'
        );
        await this.verifyFreeShippingThresholdExceeded();
      } else {
        priceSpan = (shippingCostBasis * cartSubTotal) / 100;
        priceSpan += (profitMargin * priceSpan) / 100 + additionalCharges;
        priceSpan = parseFloat(priceSpan.toFixed(2)); // rounding to match one page checkout
      }

      const calculatedShippingXpath = `//dt[contains(.,'${carrierName}')]/following-sibling::dd[1]//span[@class="price" and contains(.,'$${priceSpan}')]`;

      await this.api.element('xpath', calculatedShippingXpath, (visible) => {
        if (visible.status !== -1) {
          console.log(
            `Success -> '${carrierName}' has successfully shown calculated shipping cost as "${priceSpan}"`
          );
        } else {
          console.log(
            CONSOLE_COLORS.red,
            `Failure -> '${carrierName}' has failed to show calculated shipping cost as "${priceSpan}"`
          );
          checkError = 'errorOccurred';
        }
      });
    },

    async verifyFreeShippingThresholdExceeded() {
      let msg = '';
      let freeShippingThresholdExceeded;

      if (enableCalculation === 'You Saved %1$s') {
        msg = 'You Saved';
        freeShippingThresholdExceeded = {
          selector: '//small[@class="shipping-savings"]',
          locateStrategy: 'xpath',
        };
      } else {
        msg = 'You have qualified for free shipping as your order is over';
        freeShippingThresholdExceeded = {
          selector: '//small[@class="xm-valid-free-shipping-from-amount"]',
          locateStrategy: 'xpath',
        };
      }

      try {
        await this.assert.containsText(
          freeShippingThresholdExceeded,
          msg,
          'Test for Free Shipping'
        );
        console.log(
          `Success -> '${carrierName}' has successfully shown Free shipping threshold text as "${msg}"`
        );
      } catch (error) {
        console.log(
          CONSOLE_COLORS.red,
          `Failure -> '${carrierName}' has failed to show Free shipping threshold text as "${msg}"`
        );
        checkError = 'errorOccurred';
      }
    },
  },
];

module.exports = {
  elements,
  commands,
};
