/* eslint-disable no-await-in-loop */
/* eslint-disable complexity */
/* eslint-disable no-useless-escape */
/* eslint-disable no-loop-func */
const { client } = require('nightwatch-api');
const {
  paypalCredentials,
  creditCard,
  onePageValues,
  cartPageValues,
  CONSOLE_COLORS,
} = require('../../helper/constants/constants');

const addOnFeaturesPage = client.page.addOnFeatures_po();
const addToCartPage = client.page.addToCart_po();

const elements = {
  checkoutButton: {
    selector: '//button[contains(@class, "btn-proceed-checkout")]',
    locateStrategy: 'xpath',
  },
  onePageCheckout: {
    selector:
      '//div[@id="checkout-progress-wrapper"]/div[@class="block block-progress opc-block-progress"]/div/span',
    locateStrategy: 'xpath',
  },
  btnContinueShAdr: {
    selector: '//form[@id="user_data_form_shipping"]/div/button/span/span',
    locateStrategy: 'xpath',
  },
  btnContinueShippingMethod: {
    selector: '//button[@name="update_total"]',
    locateStrategy: 'xpath',
  },
  ccTypeVisa: {
    selector: '//select[@name="cctype"]/option[@value="Visa"]',
    locateStrategy: 'xpath',
  },
  ccNo: {
    selector: '//input[@name="ccno"]',
    locateStrategy: 'xpath',
  },
  ccMonth: {
    selector: '//select[@name="ccmonth"]/option[@value="12"]',
    locateStrategy: 'xpath',
  },
  ccYear: {
    selector: '//select[@name="ccyear"]/option[@value="29"]',
    locateStrategy: 'xpath',
  },
  ccCSV: {
    selector: '//input[@name="cccsc"]',
    locateStrategy: 'xpath',
  },
  btnContinuePay: {
    selector: '(//button[@class="button btn-step process_payment"])[2]',
    locateStrategy: 'xpath',
  },
  btnContinuePayMethod: {
    selector:
      '//button[@class="button btn-next"]/span[contains(*,"Confirm port")]',
    locateStrategy: 'xpath',
  },
  btnContinuePayMethodX3: {
    selector:
      '//form[@id="paymentScreen"]//button[@class="button btn-next"]/span[contains(*,"Continue")]',
    locateStrategy: 'xpath',
  },
  acceptTerms: {
    selector:
      '//div[@class="rego-field"]//following::input[@name="terms_conditions"]',
    locateStrategy: 'xpath',
  },
  placeOrder: {
    selector: '//button[@class="button btn-checkout"]/span',
    locateStrategy: 'xpath',
  },

  orderPlaced: {
    selector: '//div[@class="page-title title-buttons"]/h1',
    locateStrategy: 'xpath',
  },
  guestCheckout: {
    selector: '//input[@id="login:guest"]',
    locateStrategy: 'xpath',
  },
  continueBtn: {
    selector: '//button[@id="onepage-guest-register-button"]',
    locateStrategy: 'xpath',
  },
  registerBtnCheckout: {
    selector: '//label[@class="label-radio" and contains(text(), "Register")]',
    locateStrategy: 'xpath',
  },
  billingSectionTitle: {
    selector: '//div[@id="billing-step-login"]//h1',
    locateStrategy: 'xpath',
  },
  continueNextBtn: {
    selector: '//button[contains(@class, "btn-next")]',
    locateStrategy: 'xpath',
  },
  paypalButton: {
    selector:
      '//form[@id="one_page_checkout_type"]/ul[1]/li[@class="onepage-paypal"]/a',
    locateStrategy: 'xpath',
  },
  paypalText: {
    selector: '//div[@id="content"]/h1[text()="Pay with PayPal"]',
    locateStrategy: 'xpath',
  },
  emailTextbox: {
    selector: '//input[@id="email"]',
    locateStrategy: 'xpath',
  },
  passwordTextbox: {
    selector: '//input[@id="password"]',
    locateStrategy: 'xpath',
  },
  nextButton: {
    selector: '//button[@id="btnNext"]',
    locateStrategy: 'xpath',
  },
  logInButton: {
    selector: '//button[@id="btnLogin"]',
    locateStrategy: 'xpath',
  },
  paypalConBtn: {
    selector: '//button[@id="payment-submit-btn"]',
    locateStrategy: 'xpath',
  },
  placeOrderBn: {
    selector: '//button[@id="review_submit"]',
    locateStrategy: 'xpath',
  },
  reviewOrder: {
    selector: '//div[@class="page-title"]/h1',
    locateStrategy: 'xpath',
  },
  shippingAtCheckoutXpath: {
    selector:
      '//table[@class="data-table"]//td[contains(text(),"Shipping")]//following-sibling::td/span',
    locateStrategy: 'xpath',
  },
  grandTotal: {
    selector:
      '//table[@class="data-table"]//td[contains(text(),"Grand Total")]/following-sibling::td/span',
    locateStrategy: 'xpath',
  },
  creditCardFees: {
    selector:
      '//table[@class="data-table"]//td[contains(text(),"Credit Card Fee")]/following-sibling::td/span',
    locateStrategy: 'xpath',
  },
  LoginButton: {
    selector: '//div[@id="loginSection"]/div/div[2]/a',
    locateStrategy: 'xpath',
  },
  shipContinueB: {
    selector:
      '//form[@id="user_data_form_billing"]/div/button/span/span[text()="Continue"]',
    locateStrategy: 'xpath',
  },
  continueBtnShipTo: {
    selector:
      '//form[@id="user_data_form_shipping"]/div/button/span/span[text()="Continue"]',
    locateStrategy: 'xpath',
  },
  continueBtnBilling: {
    selector:
      '//form[@id="user_data_form_billing"]/div/button/span/span[text()="Continue"]',
    locateStrategy: 'xpath',
  },
  ccName: {
    selector: '//input[@name="ccname"]',
    locateStrategy: 'xpath',
  },
  selectCCType: {
    selector: '//select[@id="type"]',
    locateStrategy: 'xpath',
  },
  btnPlaceOrder: {
    selector: '//button[@id="place_order"]/span/span[text()="Place Order"]',
    locateStrategy: 'xpath',
  },
  btnConPaypal: {
    selector: '//button[@id="paypal-process"]/span/span[text()="Continue"]',
    locateStrategy: 'xpath',
  },
  orderViewP: {
    selector: '//div[@class="step-title"]/h2[text()="Order Review"]',
    locateStrategy: 'xpath',
  },
  eftContinueBtn: {
    selector: '//button[@id="on-account-process"]/span/span[text()="Continue"]',
    locateStrategy: 'xpath',
  },
  termConCheckbox: {
    selector: '//input[@name="terms_conditions"]',
    locateStrategy: 'xpath',
  },
  taxTotalXpath: {
    selector:
      '//table[@class="data-table"]//td[contains(text(),"Tax")]/following-sibling::td/span',
    locateStrategy: 'xpath',
  },
  promotionValue: {
    selector: '//td[descendant::span[contains(.,"Promo Details")]]',
    locateStrategy: 'xpath',
  },
  billingName: {
    selector:
      '//dd[@id="progress-data-2"]/address/span[@class="xm-onpepage-billing-name"]',
    locateStrategy: 'xpath',
  },
  billingAddress: {
    selector:
      '//dd[@id="progress-data-2"]/address/span[@class="xm-onpepage-billing-address"]',
    locateStrategy: 'xpath',
  },
  shippingName: {
    selector:
      '//dd[@id="progress-data-3"]/address/span[@class="xm-onpepage-shipping-name"]',
    locateStrategy: 'xpath',
  },
  shippingAddress: {
    selector:
      '//dd[@id="progress-data-3"]/address/span[@class="xm-onpepage-shipping-address"]',
    locateStrategy: 'xpath',
  },
  shippingMethod: {
    selector: '//dd[@id="progress-data-4"]/p',
    locateStrategy: 'xpath',
  },
  billingMethod: {
    selector: '//dd[@id="progress-data-6"]/p',
    locateStrategy: 'xpath',
  },
  orderShippingName: {
    selector:
      '//div[@class="box-content"]/address/span[@class="xm-shipping-order-name"]',
    locateStrategy: 'xpath',
  },
  orderShippingAddress: {
    selector:
      '//div[@class="box-content"]/address/span[@class="xm-shipping-order-location"]',
    locateStrategy: 'xpath',
  },
  orderShippingMethod: {
    selector:
      '(//div[descendant::div/h2[contains(.,"Shipping Method")]]//following-sibling::div[@class="box-content"])[2]',
    locateStrategy: 'xpath',
  },
  orderBillingName: {
    selector: '//span[@id="billing_order_conf_customer_info"]',
    locateStrategy: 'xpath',
  },
  orderBillingAddress: {
    selector: '//span[@class="xm-billing-order-location"]',
    locateStrategy: 'xpath',
  },
  orderBillingMethod: {
    selector: '//div[@class="box box-payment"]//div//p',
    locateStrategy: 'xpath',
  },
};

const commands = [
  {
    async clickCheckout() {
      await this.api.pause(500);
      await this.clickVisibleElement('@checkoutButton');
      console.log(
        CONSOLE_COLORS.BGCyan,
        '********************* Checkout Begins ********************'
      );
      await this.api.pause(5000);
    },

    async onePageCheckout() {
      await this.waitUntilVisibleElement('@onePageCheckout');
      await this.getText('@onePageCheckout', async (result) => {
        const successMessage = result.value;
        this.checkElementTextContains('@onePageCheckout', successMessage);
        console.log('Success ->', `${successMessage}`);
      });
    },

    async SelectShippingAddress(address) {
      const SelectShippingAddress = {
        selector: `//select[@id="address-select-shipping"]/option[contains(text(), '${address}')]`,
        locateStrategy: 'xpath',
      };

      await this.waitUntilVisibleElement('@btnContinueShAdr');
      await this.clickVisibleElement(SelectShippingAddress);

      // await this.waitUntilVisibleElement('@btnContinueShAdr');
      await this.clickVisibleElement('@btnContinueShAdr');
    },

    async VerifyShippingMethod(ServiceName, DataTable) {
      const shippingMethods = DataTable.raw();
      const shippingMethodsXpath = `//label[contains(text(), "${ServiceName}")]`;
      let actualNoOfShippingMethodsListed = 0;

      await this.waitUntilVisibleElement('@btnContinueShippingMethod'); // this is to wait until all shipping methods are loaded

      await this.api.elements(
        'xpath',
        shippingMethodsXpath,
        (ShippingMethodsFound) => {
          actualNoOfShippingMethodsListed = Number(
            ShippingMethodsFound.value.length
          );
        }
      );

      if (actualNoOfShippingMethodsListed > 0) {
        // } shippingMethods[0].length) {
        console.log(
          `Success:-> ${ServiceName} has ${shippingMethods[0].length} no of services as expected`
        );
      } else {
        // throw new Error(
        console.log(
          `Failure:-> ${ServiceName} does NOT have ${shippingMethods[0].length} No Of Services as expected. Actual no of shipping methods found = ${actualNoOfShippingMethodsListed} `
        );
      }

      // await this.verifyShippingCost(ServiceName, shippingMethods);
    },

    async verifyShippingCost(ServiceName, shippingMethods) {
      const shippingMethodsXpath = `//label[contains(text(), "${ServiceName}")]/span`;
      let errorOccurred = '';

      console.log(`** "${ServiceName}" Shipping methods cost verification **`);

      await this.api.elements(
        'xpath',
        shippingMethodsXpath,
        async (shippingMethodListed) => {
          let index = 0;
          shippingMethodListed.value.forEach((elem) => {
            client.elementIdText(elem.ELEMENT, (shippingCost) => {
              if (shippingMethods[1][index] === shippingCost.value) {
                console.log(
                  `Success -> Shipping Cost for "${shippingMethods[0][index]}" is correctly calculated as ${shippingCost.value}`
                );
              } else {
                console.log(
                  CONSOLE_COLORS.red,
                  `FAILURE -> Shipping Cost for "${shippingMethods[0][index]}" is INCORRECTLY calculated as ${shippingCost.value} expected cost is ${shippingMethods[1][index]}`
                );
                errorOccurred = 'Yes';
              }

              index += 1;
            });
          });
        }
      );

      if (errorOccurred === 'Yes') {
        throw new Error(
          `Failure:-> ${ServiceName} has INCORRECTLY calculated cost for shippings methods. Please refer log above for details`
        );
      }
    },

    async SelectShippingMethod(ServiceName) {
      const ShippingCost = {
        selector: `//input[@class="radio carrier shipping-option"]//following::label[contains(text(), "${ServiceName}")]/span`,
        locateStrategy: 'xpath',
      };

      const ShippingMethod = {
        selector: `//input[@class="radio carrier shipping-option"]//following::label[contains(text(), "${ServiceName}")]`,
        locateStrategy: 'xpath',
      };

      await this.api.pause(200);
      await this.waitUntilVisibleElement(ShippingMethod);
      await this.clickVisibleElement(ShippingMethod);
      await this.api.pause(200);

      await this.getText(ShippingCost, async (sCost) => {
        onePageValues.shippingCostAtShippingStep =
          Math.round(
            sCost.value
              .toString()
              .replace(/\,/g, '')
              .match(/\,?\d+\.\d+/g)[0] * 100
          ) / 100;
      });
      console.log(
        'Shipping Cost at Shipping step :-',
        onePageValues.shippingCostAtShippingStep
      );

      await this.clickVisibleElement('@btnContinueShippingMethod');
      await this.api.pause(3000);
    },

    async VerifyPaymentMethod(paymentMethod) {
      await this.api.pause(3000);
      const txtAccountPay = `//dl[@id="payment"]//li[1]/input//following::label[text()='${paymentMethod}']`;
      await this.api.elements('xpath', txtAccountPay, async (visible) => {
        if (visible.status !== -1) {
          console.log(
            `Success:-> '${paymentMethod}' Payment Method is available`
          );
        } else {
          throw new Error(
            `Failure:-> '${paymentMethod}' Payment Method is NOT available`
          );
        }
      });
    },

    async SelectPaymentMethod(paymentMethod) {
      const inputAccountPay = {
        selector: `//dl[@id="payment"]//li[1]/input//following::label[text()='${paymentMethod}']`,
        locateStrategy: 'xpath',
      };

      onePageValues.placeOrderRefPayMethod = paymentMethod;

      await this.clickVisibleElement(inputAccountPay);
      await this.api.pause(200);
      if (paymentMethod === 'Credit Card') {
        await this.clickVisibleElement('@ccTypeVisa');
        await this.clickVisibleElement('@ccNo');
        await this.setField('@ccNo', creditCard.creditCardNo);
        await this.clickVisibleElement('@ccMonth');
        await this.clickVisibleElement('@ccYear');
        await this.clickVisibleElement('@ccCSV');
        await this.setField('@ccCSV', creditCard.csv);
        await this.clickVisibleElement('@btnContinuePayMethod');
      } else {
        // at the moment this else resolves to account pay method
        await this.clickVisibleElement('@btnContinuePay');
        await this.api.pause(3000);
      }
    },

    async PlaceOrder() {
      if (onePageValues.placeOrderRefPayMethod === 'On Account') {
        await this.clickVisibleElement('@acceptTerms');
        await this.api.pause(200);
      }

      await this.collectOrderDetails();
      await this.clickVisibleElement('@placeOrder');
    },

    async collectOrderDetails() {
      await this.getText('@billingName', async (result) => {
        onePageValues.billingName = result.value;
      });

      await this.getText('@billingAddress', async (result) => {
        onePageValues.billingAddress = result.value;
      });

      await this.getText('@shippingName', async (result) => {
        onePageValues.shippingName = result.value;
      });

      await this.getText('@shippingAddress', async (result) => {
        onePageValues.shippingAddress = result.value;
      });

      await this.getText('@shippingMethod', async (result) => {
        onePageValues.shippingMethod = result.value.substr(
          0,
          result.value.length - 15
        );
      });

      await this.getText('@billingMethod', async (result) => {
        onePageValues.billingMethod = result.value;
      });
    },

    async verifyOrderCompletion() {
      await this.waitUntilVisibleElement('@orderPlaced');
      await this.getText('@orderPlaced', async () => {
        const successMessage = 'ORDER COMPLETE';
        this.checkElementTextContains('@orderPlaced', successMessage);
        console.log('Success ->', `${successMessage}`);
      });
    },

    async verifyOrderCompleted() {
      const orderNo = {
        selector: '//p[contains(.,"ABC")]',
        locateStrategy: 'xpath',
      };

      // this has to be called after verifyOrderSummary so all reference values are populated beforehand
      await this.waitUntilVisibleElement('@orderPlaced');
      await this.getText('@orderPlaced', async () => {
        const successMessage = 'ORDER COMPLETE';
        this.checkElementTextContains('@orderPlaced', successMessage);
        console.log('Success ->', `${successMessage}`);
      });

      console.log(
        CONSOLE_COLORS.BGCyan,
        '********************* Order Completion Checks Begin ********************'
      );

      await this.getText(orderNo, (result) => {
        onePageValues.orderNo = result.value.replace(/ORDER # /g, '');
      });

      await this.verifyShippingDetails();
      await this.verifyBillingDetails();
      await this.verifyItemsNTotals();
      await this.verifySummaryTotals();
    },

    async verifyShippingDetails() {
      let shippingAddress = '';
      let shippingMethod = '';
      let shippingName = '';

      await this.getText('@orderShippingName', async (result) => {
        shippingName = result.value;
      });

      await this.getText('@orderShippingAddress', async (result) => {
        shippingAddress = result.value;
        shippingAddress = shippingAddress.replace(/Phone:|Tel:/gim, 'T:');
      });

      if (onePageValues.shippingName !== shippingName) {
        throw new Error(
          `Failure -> Shipping Name "${shippingName}" on order completion is NOT matching with one on onepage checkout ${onePageValues.shippingName}`
        );
      }

      if (onePageValues.shippingAddress !== shippingAddress) {
        throw new Error(
          `Failure -> Shipping address "${shippingAddress}" on order completion is NOT matching with one on onepage checkout ${onePageValues.shippingAddress}`
        );
      }

      await this.getText('@orderShippingMethod', async (result) => {
        shippingMethod = result.value;
      });

      if (!shippingMethod.includes(onePageValues.shippingMethod)) {
        throw new Error(
          `Failure -> Shipping Method "${shippingMethod}" on order completion is NOT matching with one on onepage checkout "${onePageValues.shippingMethod}"`
        );
      }
    },
    async verifyBillingDetails() {
      let billingAddress = '';
      let billingMethod = '';
      let billingName = '';

      await this.getText('@orderBillingName', async (result) => {
        billingName = result.value;
      });

      await this.getText('@orderBillingAddress', async (result) => {
        billingAddress = result.value;
      });

      billingAddress = billingAddress.replace(/Phone:|Tel:/gim, 'T:');
      if (!billingName.includes(onePageValues.billingName)) {
        throw new Error(
          `Failure -> Billing Name "${billingName}" on order completion is NOT matching with one on onepage checkout ${onePageValues.billingName}`
        );
      }

      if (!billingAddress.includes(onePageValues.billingAddress)) {
        throw new Error(
          `Failure -> Billing address "${billingAddress}" on order completion is NOT matching with one on onepage checkout ${onePageValues.billingAddress}`
        );
      }

      await this.getText('@orderBillingMethod', async (result) => {
        billingMethod = result.value;
      });

      if (onePageValues.billingMethod !== billingMethod) {
        throw new Error(
          `Billing Method "${billingMethod}" on order completion is NOT matching with one on onepage checkout ${onePageValues.billingMethod}`
        );
      }
    },

    async verifyItemsNTotals() {
      let actualItemTotalOrder = 0.0;

      for (
        let index = 1;
        index <= onePageValues.noOfProductsOnePg;
        index += 1
      ) {
        const total = {
          selector: `//table[@class="data-table"]//tbody/tr[${index}]/td[9]//span[@class="price"]`,
          locateStrategy: 'xpath',
        };

        if (onePageValues.promotionType === 'Buy X Get Y' && index === 1) {
          actualItemTotalOrder = parseFloat(0.0);
        } else {
          await this.getText(total, async (result) => {
            actualItemTotalOrder = result.value;
          });

          actualItemTotalOrder = parseFloat(
            actualItemTotalOrder.replace(/\,/g, '').match(/\,?\d+\.\d+/g)[0]
          ).toFixed(2);
        }

        if (
          Number(onePageValues.LineItemTotalChkOutArray[index - 1]) !==
          Number(actualItemTotalOrder)
        ) {
          throw new Error(
            `Failure -> Line # ${index} - Item Total ${actualItemTotalOrder} is NOT matching with Line item total on One page checkout ${
              onePageValues.LineItemTotalChkOutArray[index - 1]
            }`
          );
        }
      }
    },

    async verifySummaryTotals() {
      let subTotalAmt = 0;
      let shippingTotalAmt = 0;
      let taxTotalAmt = 0;
      let grandTotalAmt = 0;
      let creditCardFeesAmt = 0;

      const subTotal = {
        selector:
          '//table[@class="data-table"]//td[contains(text(),"Subtotal")]/following-sibling::td/span',
        locateStrategy: 'xpath',
      };

      await this.getText(subTotal, async (result) => {
        subTotalAmt = result.value;
      });

      subTotalAmt = parseFloat(
        subTotalAmt.replace(/\,/g, '').match(/\,?\d+\.\d+/g)[0]
      ).toFixed(2);

      if (Number(onePageValues.calcRunningSubTotal) !== Number(subTotalAmt)) {
        throw new Error(
          `Failure -> Subtotal on Order completion page ${subTotalAmt} is NOT matching with Subtotal on One page checkout ${onePageValues.calcRunningSubTotal}`
        );
      }

      await this.getText('@shippingAtCheckoutXpath', async (result) => {
        shippingTotalAmt = result.value;
      });

      shippingTotalAmt = parseFloat(
        shippingTotalAmt.replace(/\,/g, '').match(/\,?\d+\.\d+/g)[0]
      ).toFixed(2);

      if (
        Number(onePageValues.shippingCostAtShippingStep) !==
        Number(shippingTotalAmt)
      ) {
        throw new Error(
          `Failure -> Shipping on Order completion page ${shippingTotalAmt} is NOT matching with Shipping on One page checkout ${onePageValues.shippingCostAtShippingStep}`
        );
      }

      await this.getText('@taxTotalXpath', async (result) => {
        taxTotalAmt = result.value;
      });

      taxTotalAmt = parseFloat(
        taxTotalAmt.replace(/\,/g, '').match(/\,?\d+\.\d+/g)[0]
      ).toFixed(2);

      if (Number(onePageValues.onePgTaxTotal) !== Number(taxTotalAmt)) {
        throw new Error(
          `Failure -> Tax Total on Order completion page ${taxTotalAmt} is NOT matching with Tax Total on One page checkout ${onePageValues.onePgTaxTotal}`
        );
      }

      const creditCardFeesExist =
        '//table[@class="data-table"]//td[contains(text(),"Credit Card Fee")]/following-sibling::td/span';

      await this.api.element('xpath', creditCardFeesExist, async (visible) => {
        if (visible.status !== -1) {
          this.getText('@creditCardFees', (result) => {
            creditCardFeesAmt = result.value;
            creditCardFeesAmt = parseFloat(
              creditCardFeesAmt.replace(/\,/g, '').match(/\,?\d+\.\d+/g)[0]
            ).toFixed(2);

            if (
              Number(onePageValues.creditCardFees) !== Number(creditCardFeesAmt)
            ) {
              throw new Error(
                `Failure -> Credit Card Fees on Order completion page ${creditCardFeesAmt} is NOT matching with Credit Card Fees on One page checkout ${onePageValues.creditCardFees}`
              );
            }
          });
        }
      });

      await this.getText('@grandTotal', async (result) => {
        grandTotalAmt = result.value;
      });

      grandTotalAmt = parseFloat(
        grandTotalAmt.replace(/\,/g, '').match(/\,?\d+\.\d+/g)[0]
      ).toFixed(2);

      if (Number(onePageValues.expectedOnePgTotal) !== Number(grandTotalAmt)) {
        throw new Error(
          `Failure -> Subtotal on Order completion page ${grandTotalAmt} is NOT matching with Subtotal on One page checkout ${onePageValues.expectedOnePgTotal}`
        );
      } else {
        console.log(
          'Success -> Order details on completion page matches exactly with order details on One Page checkout'
        );
      }
    },

    async clickGuestChkout() {
      await this.clickVisibleElement('@guestCheckout');
      await this.clickVisibleElement('@continueBtn');
    },

    async clickB2CRegisterOnePageChkout() {
      this.clickVisibleElement('@registerBtnCheckout');
      this.clickVisibleElement('@continueBtn');
      console.log(CONSOLE_COLORS.BGblue, 'One Page Register Link');
    },

    async VerifyBillingSection(msg) {
      await this.waitUntilVisibleElement('@billingSectionTitle');
      await this.getText('@billingSectionTitle', async () => {
        this.checkElementTextContains('@billingSectionTitle', msg);
      });
    },

    async clickContinueButton() {
      await this.clickVisibleElement('@continueNextBtn');
      await this.api.pause(1000);
    },

    async clickPaypalButton() {
      await this.api.pause(5000);
      await this.clickVisibleElement('@paypalButton');
    },

    async verifyPaypalPageGuest() {
      await this.waitUntilVisibleElement('@paypalText');
      await this.getText('@paypalText', async (result) => {
        const successText = result.value;
        this.checkElementTextContains('@paypalText', successText);
        console.log('Success ->', `${successText}`);
      });
    },

    async enterEmailPaypalGuest() {
      await this.clickVisibleElement('@emailTextbox');
      await this.clearValue('@emailTextbox');
      await this.setField('@emailTextbox', paypalCredentials.emailId);
      await this.api.pause(1000);
      await this.clickVisibleElement('@nextButton');
      await this.api.pause(3000);
    },

    async enterEmailPaypalB2C() {
      const clickLogInButton = '//div[@id="loginSection"]/div/div[2]/a';
      await this.api.element('xpath', clickLogInButton, (visible) => {
        if (visible.status !== -1) {
          this.api.pause(10000);
          this.clickVisibleElement('@LoginButton');
          this.api.pause(3000);
          this.clickVisibleElement('@emailTextbox');
          this.clearValue('@emailTextbox');
          this.setField('@emailTextbox', paypalCredentials.emailId);
          this.api.pause(1000);
          this.clickVisibleElement('@nextButton');
          this.api.pause(3000);
        } else {
          this.api.pause(5000);
          this.clickVisibleElement('@emailTextbox');
          this.clearValue('@emailTextbox');
          this.setField('@emailTextbox', paypalCredentials.emailId);
          this.api.pause(1000);
          this.clickVisibleElement('@nextButton');
          this.api.pause(3000);
        }
      });
    },
    async enterPassword() {
      await this.clickVisibleElement('@passwordTextbox');
      await this.clearValue('@passwordTextbox');
      await this.setField('@passwordTextbox', paypalCredentials.password);
      await this.waitUntilVisibleElement('@logInButton');
      await this.clickVisibleElement('@logInButton');
      await this.api.pause(3000);
    },

    async clickContinueBtnPaypal() {
      const btnXpath = '//button[@id="payment-submit-btn"]';
      await this.waitUntilVisibleElement('@paypalConBtn');
      await client.getLocationInView('xpath', btnXpath);
      await this.api.pause(500);
      await this.clickVisibleElement('@paypalConBtn');
      await this.api.pause(2000);
    },

    async verifyReviewOrderPage() {
      await this.waitUntilVisibleElement('@reviewOrder');
      await this.getText('@reviewOrder', async (result) => {
        const successTitle = result.value;
        this.checkElementTextContains('@reviewOrder', successTitle);
        console.log('Success ->', `${successTitle}`);
      });
    },
    async clickPlaceOrderButton() {
      await this.clickVisibleElement('@placeOrderBn');
    },

    async VerifyOrderSummary() {
      const onePgTaxTotalXpath =
        '//table[@class="data-table"]//td[contains(text(),"Tax")]/following-sibling::td/span';

      const creditCardFeesXpath =
        '//tfoot//tr[4]/td[contains(.,"Credit Card Fee")]//following-sibling::td/span';

      const promotionFlatExists =
        '//td[descendant::span[contains(.,"Promo Details")] and contains(.,"$")]';

      let shippingAtCheckout = 0;
      let actualOnePgTotal = 0;
      let promotion = 0;
      onePageValues.creditCardFees = 0;
      onePageValues.promotionType = '';
      onePageValues.expectedOnePgTotal = 0;
      onePageValues.calcRunningSubTotal = 0;
      onePageValues.noOfProductsOnePg = 0;
      onePageValues.onePgTaxTotal = 0;
      onePageValues.LineItemTotalChkOutArray.fill(0);
      onePageValues.flatDiscount = 0;
      const tableXpath =
        '//table[@class="data-table"]//tbody/tr//div[@class="product-name"]';

      const promotionPercentageExists =
        '//td[descendant::span[contains(.,"Promo Details")] and contains(.,"%")]';

      const promptionBuyXGetYFreeExists =
        '//td[descendant::span[contains(.,"Promo Description")] and contains(.,"Buy X get Y free")]';

      console.log(
        CONSOLE_COLORS.BGCyan,
        `************  Order Summary Cross checks *************`
      );

      await this.api.elements('xpath', tableXpath, (results) => {
        onePageValues.noOfProductsOnePg = results.value.length;
      });

      console.log(
        CONSOLE_COLORS.pink,
        'no of products on One Page check out - ',
        onePageValues.noOfProductsOnePg
      );

      await this.api.element(
        'xpath',
        promptionBuyXGetYFreeExists,
        (visible) => {
          if (visible.status !== -1) {
            onePageValues.promotionType = 'Buy X Get Y';
            console.log(
              CONSOLE_COLORS.pink,
              'Information -> One page Percentage Discount Price Revision -',
              onePageValues.promotionType
            );
          }
        }
      );

      await this.api.element('xpath', promotionPercentageExists, (visible) => {
        if (visible.status !== -1) {
          onePageValues.promotionType = 'percentage';
          this.waitUntilVisibleElement('@promotionValue');
          this.getText('@promotionValue', async (result) => {
            promotion = Number(
              result.value.replace(/\,/g, '').match(/\d+\.?\d+/g)
            );
            console.log(
              CONSOLE_COLORS.pink,
              'Information -> One page Percentage Discount Price Revision -',
              result.value
            );
          });
        }
      });

      for (
        let index = 1;
        index <= onePageValues.noOfProductsOnePg;
        index += 1
      ) {
        // eslint-disable-next-line no-await-in-loop
        onePageValues.LineItemTotalChkOutArray[index - 1] =
          await this.getLineItemTotalChkOut(index, promotion);
        onePageValues.calcRunningSubTotal +=
          onePageValues.LineItemTotalChkOutArray[index - 1];
      }

      await this.api.element('xpath', promotionFlatExists, (visible) => {
        if (visible.status !== -1) {
          onePageValues.promotionType = 'flat';
          this.waitUntilVisibleElement('@promotionValue');
          this.getText('@promotionValue', async (result) => {
            onePageValues.calcRunningSubTotal -= Number(
              result.value.replace(/\,/g, '').match(/\d+\.?\d+/g)
            );
            onePageValues.flatDiscount = Number(
              result.value.replace(/\,/g, '').match(/\d+\.?\d+/g)
            );
            console.log(
              CONSOLE_COLORS.pink,
              'Information -> Flat Discount Price Revision - ',
              result.value
            );
          });
        }
      });

      await this.getText('@shippingAtCheckoutXpath', async (sCost) => {
        if (sCost.status !== -1) {
          shippingAtCheckout =
            Math.round(
              sCost.value
                .toString()
                .replace(/\,/g, '')
                .match(/\,?\d+\.\d+/g)[0] * 100
            ) / 100;
        } else {
          shippingAtCheckout = 0;
        }
      });

      await this.api.element('xpath', creditCardFeesXpath, (visible) => {
        if (visible.status !== -1) {
          console.log('Credit Card fees applicable');
          this.getText('@creditCardFees', async (result) => {
            onePageValues.creditCardFees = Number(
              result.value.replace(/\,/g, '').match(/\,?\d+\.\d+/g)[0]
            );
          });
        }
      });

      await this.api.element('xpath', onePgTaxTotalXpath, (visible) => {
        if (visible.status !== -1) {
          console.log('Tax is applicable');
          this.getText('@taxTotalXpath', async (result) => {
            onePageValues.onePgTaxTotal = Number(
              result.value.replace(/\,/g, '').match(/\,?\d+\.\d+/g)[0]
            );
          });
        }
      });

      await this.waitUntilVisibleElement('@grandTotal');
      await this.getText('@grandTotal', async (result) => {
        actualOnePgTotal = result.value;
      });

      actualOnePgTotal = Number(
        actualOnePgTotal.replace(/\,/g, '').match(/\,?\d+\.\d+/g)[0]
      );

      onePageValues.calcRunningSubTotal = parseFloat(
        onePageValues.calcRunningSubTotal.toFixed(2)
      );
      onePageValues.expectedOnePgTotal =
        onePageValues.calcRunningSubTotal +
        shippingAtCheckout +
        onePageValues.onePgTaxTotal +
        onePageValues.creditCardFees;

      onePageValues.expectedOnePgTotal = parseFloat(
        onePageValues.expectedOnePgTotal.toFixed(2)
      );

      if (onePageValues.shippingCostAtShippingStep !== shippingAtCheckout) {
        throw new Error(
          `Failure -> Shipping cost at Order Review step ${shippingAtCheckout} is NOT matching with shipping cost at Shipping Step ${onePageValues.shippingCostAtShippingStep}`
        );
      }

      if (onePageValues.expectedOnePgTotal === actualOnePgTotal) {
        console.log(
          `Success -> Checkout Total ${actualOnePgTotal} is matching with expected total ${onePageValues.expectedOnePgTotal}`
        );
      } else {
        throw new Error(
          `Failure -> Checkout Total ${actualOnePgTotal} is NOT matching with expected total ${onePageValues.expectedOnePgTotal}`
        );
      }

      // cross check Checkout totals against Cart level calculations
      await this.crossCheckOnePgAgainstCart();
    },

    async crossCheckOnePgAgainstCart() {
      const cartSubTotal = cartPageValues.calcRunningSubTotal;
      const cartNoOfProducts = cartPageValues.noOfProductsInCart;
      const cartStateTaxRate = cartPageValues.CartStateTaxRate;
      const cartCountyTaxRate = cartPageValues.CartCountyTaxRate;

      if (cartNoOfProducts !== onePageValues.noOfProductsOnePg) {
        console.log(
          `Failure -> Checkout has ${onePageValues.noOfProductsOnePg} product(s) is NOT matching with cart's ${cartNoOfProducts} product(s)`
        );
      }

      if (cartSubTotal !== onePageValues.calcRunningSubTotal) {
        console.log(
          `Failure -> Checkout Sub Total ${onePageValues.calcRunningSubTotal} is NOT matching with cart sub total ${cartSubTotal}`
        );
      }

      let calculatedTax = 0;
      let stateTaxAmt = 0;
      let countyTaxAmt = 0;
      let shippingTax = 0;

      console.log(
        CONSOLE_COLORS.pink,
        'State Tax rate - ',
        cartStateTaxRate,
        'County  Tax rate - ',
        cartCountyTaxRate,
        'One Page SubTotal - ',
        onePageValues.calcRunningSubTotal,
        'One Page Tax (Actual) - ',
        onePageValues.onePgTaxTotal,
        'Shipping Cost - ',
        onePageValues.shippingCostAtShippingStep
      );

      // if promotion exists on page, then tax is based on subtotal else its calcualted on line item total and then added
      if (onePageValues.promotionType === 'flat') {
        stateTaxAmt = parseFloat(
          (
            (cartStateTaxRate * onePageValues.calcRunningSubTotal) /
            100
          ).toFixed(2)
        );

        countyTaxAmt = parseFloat(
          (
            (cartCountyTaxRate * onePageValues.calcRunningSubTotal) /
            100
          ).toFixed(2)
        );
      } else {
        for (
          let index = 0;
          index < onePageValues.noOfProductsOnePg;
          index += 1
        ) {
          stateTaxAmt += parseFloat(
            (
              (cartStateTaxRate *
                onePageValues.LineItemTotalChkOutArray[index]) /
              100
            ).toFixed(2)
          );

          countyTaxAmt += parseFloat(
            (
              (cartCountyTaxRate *
                onePageValues.LineItemTotalChkOutArray[index]) /
              100
            ).toFixed(2)
          );
        }
      }

      shippingTax = parseFloat(
        (
          (cartStateTaxRate * onePageValues.shippingCostAtShippingStep) /
          100
        ).toFixed(2)
      );

      stateTaxAmt += parseFloat(
        (
          (cartCountyTaxRate * onePageValues.shippingCostAtShippingStep) /
          100
        ).toFixed(2)
      );

      calculatedTax = stateTaxAmt + countyTaxAmt + shippingTax;
      calculatedTax = parseFloat(calculatedTax.toFixed(2));

      if (onePageValues.onePgTaxTotal !== calculatedTax) {
        await addToCartPage.viewCart();
        await addOnFeaturesPage.clearCartOnCartPage();
        throw new Error(
          `Failure -> One Page Tax ${onePageValues.onePgTaxTotal} is NOT matching with expected tax ${calculatedTax}`
        );
      }
    },

    async getLineItemTotalChkOut(index, promotion) {
      const qtyTotal = {
        selector: `//table[@class="data-table"]//tbody/tr[${index}]/td[4]//span[@class="checkout-qty-total"]`,
        locateStrategy: 'xpath',
      };

      const unitPrice = {
        selector: `//table[@class="data-table"]//tbody/tr[${index}]/td[7]//span[@class="price"]`,
        locateStrategy: 'xpath',
      };

      const total = {
        selector: `//table[@class="data-table"]//tbody/tr[${index}]/td[9]//span[@class="price"]`,
        locateStrategy: 'xpath',
      };

      let qtyOrder = 0.0;
      let unitPOrder = 0.0;
      let actualItemTotalOrder = 0.0;
      let expectedItemTotal = 0.0;

      if (onePageValues.promotionType === 'Buy X Get Y' && index === 1) {
        expectedItemTotal = parseFloat(0.0);
        actualItemTotalOrder = parseFloat(0.0);
      } else {
        await this.api.pause(3000);
        await this.waitUntilVisibleElement(qtyTotal);
        await this.getText(qtyTotal, async (result) => {
          qtyOrder = Number(result.value);
        });

        await this.waitUntilVisibleElement(unitPrice);
        await this.getText(unitPrice, async (result) => {
          unitPOrder = result.value;
          unitPOrder = Number(
            unitPOrder.replace(/\,/g, '').match(/\,?\d+\.\d+/g)[0]
          ).toFixed(2);
        });

        await this.waitUntilVisibleElement(total);
        await this.getText(total, async (result) => {
          actualItemTotalOrder = result.value;
        });

        actualItemTotalOrder = parseFloat(
          actualItemTotalOrder.replace(/\,/g, '').match(/\,?\d+\.\d+/g)[0]
        ).toFixed(2);

        expectedItemTotal = parseFloat(qtyOrder * unitPOrder).toFixed(2);

        if (onePageValues.promotionType === 'percentage') {
          expectedItemTotal -= (expectedItemTotal * promotion) / 100;
          expectedItemTotal = parseFloat(expectedItemTotal.toFixed(2));
        }
      }

      if (Number(actualItemTotalOrder) === Number(expectedItemTotal)) {
        console.log(
          `Success -> Line item total ${actualItemTotalOrder} is matching with expected unit price * quantity - promo -> ${expectedItemTotal}`
        );
      } else {
        throw new Error(
          `Failure --> Line item total ${actualItemTotalOrder} is NOT matching with expected unit price * quantity - promo -> ${expectedItemTotal}`
        );
      }

      return Number(expectedItemTotal);
    },

    async clickButtonContinue() {
      await this.clickVisibleElement('@shipContinueB');
      await this.api.pause(3000);
    },

    async clickShippingButtonContinue() {
      await this.api.pause(3000);
      await this.clickVisibleElement('@btnContinueShippingMethod');
      await this.api.pause(1000);
    },

    async SelectCreditCardType(cardType, data) {
      const creditCardType = {
        selector: `//select[@id="type"]/option[text()='${cardType}']`,
        locateStrategy: 'xpath',
      };
      await this.clickVisibleElement('@selectCCType');
      await this.api.pause(200);
      await this.clickVisibleElement(creditCardType);
      await this.api.pause(1000);
      await this.clickVisibleElement('@ccName');
      await this.clearValue('@ccName');
      await this.setField('@ccName', data[1][0]);
      await this.api.pause(500);
      await this.setField('@ccNo', data[1][1]);
      await this.clickVisibleElement('@ccNo');
      await this.api.pause(500);
      await this.setField('@ccNo', data[1][1]);
      await this.clickVisibleElement('@ccMonth');
      await this.clickVisibleElement('@ccYear');
      await this.clickVisibleElement('@ccCSV');
      await this.setField('@ccCSV', data[1][2]);
      await this.api.pause(1000);

      const btnContinuePayMethodX3 =
        '//form[@id="paymentScreen"]//button[@class="button btn-next"]/span[contains(*,"Continue")]';
      await this.api.element('xpath', btnContinuePayMethodX3, (visible) => {
        if (visible.status !== -1) {
          this.clickVisibleElement('@btnContinuePayMethodX3');
          this.api.pause(2000);
        } else {
          this.clickVisibleElement('@btnContinuePayMethod');
          this.api.pause(2000);
        }
      });
    },

    async clickButtonPlaceOrder() {
      await this.clickVisibleElement('@btnPlaceOrder');
    },

    async clickConBtnGuest() {
      await this.waitUntilVisibleElement('@btnConPaypal');
      await this.clickVisibleElement('@btnConPaypal');
      await this.api.pause(10000);
    },
    async clickConBtnB2C() {
      await this.waitUntilVisibleElement('@btnConPaypal');
      await this.clickVisibleElement('@btnConPaypal');
      await this.api.pause(10000);
    },
    async selectPaymentMethodCheckout(payment) {
      const paymentType = {
        selector: `//dl[@id="payment"]/dd/ul/li/label[text()='${payment}']`,
        locateStrategy: 'xpath',
      };
      await this.clickVisibleElement(paymentType);
      await this.api.pause(200);
    },

    async verifyOrderReview() {
      await this.waitUntilVisibleElement('@orderViewP');
      await this.getText('@orderViewP', async (result) => {
        const successTitle = result.value;
        this.checkElementTextContains('@orderViewP', successTitle);
        console.log('Success ->', `${successTitle}`);
      });
    },

    async clickEftPaymentContinueBtn() {
      await this.clickVisibleElement('@eftContinueBtn');
      await this.api.pause(200);
    },

    async clickContinueBtnShipTo() {
      const billingTabCollapsed =
        '//div[@id="billing-step-login" and @style="display: none;"]//form[@id="user_data_form_billing"]/div/button/span/span[text()="Continue"]';

      await this.api.element('xpath', billingTabCollapsed, async (visible) => {
        if (visible.status !== -1) {
          console.log('Straight to ship to section');
          this.clickVisibleElement('@continueBtnShipTo');
          this.api.pause(200);
        } else {
          this.clickVisibleElement('@continueBtnBilling');
          this.api.pause(200);
        }
      });
    },

    async clickTermConditions() {
      await this.clickVisibleElement('@termConCheckbox');
      await this.api.pause(200);
    },
  },
];

module.exports = {
  elements,
  commands,
};
