/* eslint-disable no-useless-escape */
/* eslint-disable complexity */
/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */

const {
  onePageValues,
  cartPageValues,
  CONSOLE_COLORS,
} = require('../../helper/constants/constants');

const elements = {
  orderNo: {
    selector: '//div[@class="my-account"]//h1[contains(.,"ABC")]',
    locateStrategy: 'xpath',
  },
  shippingAtCheckoutXpath: {
    selector:
      '//table[@class="data-table"]//td[contains(text(),"Shipping")]//following-sibling::td/span',
    locateStrategy: 'xpath',
  },
  grandTotal: {
    selector:
      '//td[descendant::strong[contains(text(),"Grand Total")]]//following-sibling::td/strong/span',
    locateStrategy: 'xpath',
  },
  creditCardFees: {
    selector:
      '//td[descendant::strong[contains(text(),"Credit Card Fee")]]/following-sibling::td',
    locateStrategy: 'xpath',
  },
  taxTotalXpath: {
    selector: '//td[contains(text(),"Tax")]/following-sibling::td',
    locateStrategy: 'xpath',
  },
  accountMenu: {
    selector: '//div[@class="page"]//li/a[@title="Account"]',
    locateStrategy: 'xpath',
  },
  orderShippingAddress: {
    selector: '//span[@class="xm-account-order-detail-shipping-address"]',
    locateStrategy: 'xpath',
  },
  orderShippingMethod: {
    selector:
      '(//div[descendant::div/h2[contains(.,"Shipping Method")]]//following-sibling::div[@class="box-content"])[2]',
    locateStrategy: 'xpath',
  },
  orderShippingName: {
    selector: '//span[@class="xm-account-order-detail-shipping-name"]',
    locateStrategy: 'xpath',
  },
  orderBillingName: {
    selector: '//span[@class="xm-account-order-detail-billing-custom"]',
    locateStrategy: 'xpath',
  },
  orderBillingAddress: {
    selector: '//span[@class="xm-account-order-detail-billing-address"]',
    locateStrategy: 'xpath',
  },
  orderBillingMethod: {
    selector:
      '//div[@class="box-title" and descendant::h2[contains(.,"Payment Method")]]//following-sibling::div/p',
    locateStrategy: 'xpath',
  },
  backOrdersMenu: {
    selector: '//li[contains(@class,"my-account-account_menu_back_orders")]',
    locateStrategy: 'xpath',
  },
  preOrdersMenu: {
    selector: '//li[contains(@class,"my-account-account_menu_pre_orders")]',
    locateStrategy: 'xpath',
  },
  userName: {
    selector: '//span[@class="userName"]',
    locateStrategy: 'xpath',
  },
  pageTitle: '.page-title',
  clickOpenInvoice: {
    selector: '//a//span/span[contains(.,"Pay Open Invoice")]',
    locateStrategy: 'xpath',
  },
  firstInvoice: {
    selector:
      '(//tbody//span[contains(.,"Invoice Number")]/following-sibling::a)[1]',
    locateStrategy: 'xpath',
  },
};

const commands = [
  {
    async clickAccountMenu() {
      await this.waitUntilVisibleElement('@accountMenu');
      await this.clickVisibleElement('@accountMenu');
      await this.api.pause(5000);
    },

    async clickAccountMenuOption(option) {
      const accountMenuOption = {
        selector: `//div[contains(@class,"main-container")]//li/a[contains(.,"${option}")]`,
        locateStrategy: 'xpath',
      };
      await this.waitUntilVisibleElement(accountMenuOption);
      await this.clickVisibleElement(accountMenuOption);
      await this.api.pause(1000);
    },

    async openFirstInvoice() {
      await this.waitUntilVisibleElement('@clickOpenInvoice');
      await this.clickVisibleElement('@clickOpenInvoice');
      await this.waitUntilVisibleElement('@pageTitle');
      await this.waitUntilVisibleElement('@firstInvoice');
      await this.clickVisibleElement('@firstInvoice');
    },

    async verifyAccountMenuSummary(pgName) {
      // this has to be called after verifyOrderSummary so all reference values are populated beforehand

      console.log(
        CONSOLE_COLORS.BGCyan,
        `********************* Account Menu "${pgName}" - Checks Begin ********************`
      );

      switch (pgName) {
        case 'Orders':
          await this.clickOrderMenu();
          await this.verifyAccountOrderSummary(pgName);
          break;
        case 'Back Orders':
          await this.clickBackOrdersMenu();
          break;
        case 'Pre Orders':
          await this.clickPreOrdersMenu();
          break;
        default:
          console.log(
            ` "${pgName}" This menu is not recognized yet. Implementation pending...`
          );
      }
    },

    async verifyAccountOrderSummary(pgName) {
      let orderAmt = 0;
      let qtyBackordered = 0;
      let qtyOrdered = 0;
      let customerName = '';
      let userName = '';

      const customerNameXpath = {
        selector: `//div[contains(@class,"rt-tr") and descendant::a[contains(.,"${onePageValues.orderNo}")]]//div[@class="rt-td"][4]`,
        locateStrategy: 'xpath',
      };

      const qtyOrder = {
        selector: `//div[contains(@class,"rt-tr") and descendant::a[contains(.,"${onePageValues.orderNo}")]]//div[@class="rt-td"][5]`,
        locateStrategy: 'xpath',
      };

      const qtyBackOrder = {
        selector: `//div[contains(@class,"rt-tr") and descendant::a[contains(.,"${onePageValues.orderNo}")]]//div[@class="rt-td"][6]`,
        locateStrategy: 'xpath',
      };

      const orderValue = {
        selector: `//div[contains(@class,"rt-tr") and descendant::a[contains(.,"${onePageValues.orderNo}")]]//div[@class="rt-td"][7]`,
        locateStrategy: 'xpath',
      };

      await this.api.pause(1000);

      await this.getText(qtyOrder, async (result) => {
        qtyOrdered = Number(result.value);
        if (qtyOrdered !== onePageValues.noOfProductsOnePg) {
          throw new Error(
            `Failure -> Account Menu "${pgName}" Quantity Ordered - ${qtyOrdered} is not matching with one on One Page checkout - ${onePageValues.noOfProductsOnePg}`
          );
        }
      });

      await this.getText(qtyBackOrder, async (result) => {
        qtyBackordered = Number(result.value);
        if (qtyBackordered !== cartPageValues.qtyBackorder) {
          throw new Error(
            `Failure -> Account Menu "${pgName}" Quantity Back Ordered - ${qtyBackordered} is not matching with one on One Page checkout - ${onePageValues.qtyBackordered}`
          );
        }
      });

      await this.getText(orderValue, async (result) => {
        orderAmt = result.value;
        orderAmt = parseFloat(
          orderAmt.replace(/\,/g, '').match(/\,?\d+\.\d+/g)[0]
        ).toFixed(2);
        if (Number(orderAmt) !== Number(onePageValues.expectedOnePgTotal)) {
          throw new Error(
            `Failure -> Account Menu "${pgName}" Order Total - ${orderAmt} is not matching with one on One Page checkout - ${onePageValues.expectedOnePgTotal}`
          );
        }
      });

      await this.getText('@userName', async (result) => {
        userName = result.value;
      });

      await this.getText(customerNameXpath, async (result) => {
        customerName = result.value;
      });

      if (userName !== customerName) {
        throw new Error(
          `Failure -> Account Menu - "${pgName}" summary - User name "${userName}" does not match with Order's Customer name "${customerName}"`
        );
      } else {
        console.log(`Success -> Account Menu - "${pgName}" summary looks good`);
      }
    },

    async verifyAccountMenuDetails(pgName) {
      // this has to be called after verifyOrderSummary so all reference values are populated beforehand

      const orderXpath = `//a[contains(.,"${onePageValues.orderNo}")]`;
      const clickOrder = {
        selector: `//a[contains(.,"${onePageValues.orderNo}")]`,
        locateStrategy: 'xpath',
      };

      const orderPageLoaded = {
        selector: `//div[contains(@class,"page-title")]//h1[contains(text(),"${onePageValues.orderNo}")]`,
        locateStrategy: 'xpath',
      };

      const orderNoTxtBox = {
        selector: '//input[@id="order-list-filter-order-no"]',
        locateStrategy: 'xpath',
      };

      await this.api.element('xpath', orderXpath, async (visible) => {
        if (visible.status !== -1) {
          console.log(
            `Success -> "${onePageValues.orderNo}" is found on Account Menu - "${pgName}" page as expected`
          );
        } else {
          throw new Error(
            `Failure -> Account Menu - "${pgName}" page does not list "${onePageValues.orderNo}"`
          );
        }
      });

      await this.waitUntilVisibleElement(orderNoTxtBox);
      await this.clickVisibleElement(orderNoTxtBox);

      await this.setField(orderNoTxtBox, onePageValues.orderNo);
      await this.api.pause(2000);
      await this.waitUntilVisibleElement(clickOrder);
      await this.clickVisibleElement(clickOrder);
      await this.waitUntilVisibleElement(orderPageLoaded);

      await this.verifyShippingDetails(pgName);
      await this.verifyBillingDetails(pgName);
      await this.verifyItemsNTotals(pgName);
      await this.verifySummaryTotals(pgName);
    },

    async clickOrderMenu() {
      console.log('You are on Orders Menu now');
    },

    async clickFirstOrder() {
      const xpathFirstOrder = {
        selector: `(//div[@class="my-account"]//tr/td/a)[1]`,
        locateStrategy: 'xpath',
      };

      await this.waitUntilVisibleElement(xpathFirstOrder);
      await this.clickVisibleElement(xpathFirstOrder);
      await this.waitUntilVisibleElement('@pageTitle');
    },

    async clickBackOrdersMenu() {
      await this.waitUntilVisibleElement('@backOrdersMenu');
      // await this.api.pause(1000);
      await this.clickVisibleElement('@backOrdersMenu');
      await this.api.pause(2000);
    },

    async clickPreOrdersMenu() {
      await this.waitUntilVisibleElement('@preOrdersMenu');
      // await this.api.pause(1000);
      await this.clickVisibleElement('@preOrdersMenu');
      await this.api.pause(2000);
    },

    async verifyShippingDetails(pgName) {
      let shippingAddress = '';
      let shippingMethod = '';
      let shippingName = '';

      await this.waitUntilVisibleElement('@orderShippingName');
      await this.getText('@orderShippingName', async (result) => {
        shippingName = result.value;
      });

      if (onePageValues.shippingName !== shippingName) {
        throw new Error(
          `Failure -> Shipping Name "${shippingName}" on Account Menu - '${pgName}' is NOT matching with one on onepage checkout ${onePageValues.shippingName}`
        );
      }

      await this.waitUntilVisibleElement('@orderShippingAddress');
      await this.getText('@orderShippingAddress', async (result) => {
        shippingAddress = result.value;
      });

      shippingAddress = shippingAddress.replace(/Phone:|Tel:/gim, 'T:');
      if (onePageValues.shippingAddress !== shippingAddress) {
        throw new Error(
          `Failure -> Shipping address "${shippingAddress}" on Account Menu - '${pgName}' is NOT matching with one on onepage checkout ${onePageValues.shippingAddress}`
        );
      }

      await this.getText('@orderShippingMethod', async (result) => {
        shippingMethod = result.value;
      });

      if (!shippingMethod.includes(onePageValues.shippingMethod)) {
        throw new Error(
          `Failure -> Shipping Method "${shippingMethod}" one Account Menu - '${pgName}' is NOT matching with one on onepage checkout ${onePageValues.shippingMethod}`
        );
      }
    },
    async verifyBillingDetails(pgName) {
      let billingAddress = '';
      let billingMethod = '';
      let billingName = '';

      await this.waitUntilVisibleElement('@orderBillingName');
      await this.getText('@orderBillingName', async (result) => {
        billingName = result.value;
      });

      if (!billingName.includes(onePageValues.billingName)) {
        throw new Error(
          `Failure -> Billing Name "${billingName}" on Account Menu - '${pgName}' is NOT matching with one on onepage checkout ${onePageValues.billingName}`
        );
      }

      await this.waitUntilVisibleElement('@orderBillingAddress');
      await this.getText('@orderBillingAddress', async (result) => {
        billingAddress = result.value;
        billingAddress = billingAddress.replace(/Phone: |Tel:/gim, 'T:');
      });

      if (!billingAddress.includes(onePageValues.billingAddress)) {
        throw new Error(
          `Failure -> Billing address "${billingAddress}" on Account Menu - '${pgName}' is NOT matching with one on onepage checkout "${onePageValues.billingAddress}"`
        );
      }

      await this.waitUntilVisibleElement('@orderBillingMethod');
      await this.getText('@orderBillingMethod', async (result) => {
        billingMethod = result.value;
      });

      if (onePageValues.billingMethod !== billingMethod) {
        throw new Error(
          `Billing Method "${billingMethod}" on Account Menu - '${pgName}' is NOT matching with one on onepage checkout ${onePageValues.billingMethod}`
        );
      }
    },

    async verifyItemsNTotals(pgName) {
      let actualItemTotalOrder = 0.0;

      for (
        let index = 1;
        index <= onePageValues.noOfProductsOnePg;
        index += 1
      ) {
        const total = {
          selector: `(//tr[contains(@id,"order-item-row")]//span[@class="cart-price"]/span)[${
            index * 2
          }]`,
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
            `Failure -> Account Menu - "${pgName}" Line # ${index} - Item Total ${actualItemTotalOrder} is NOT matching with Line item total on One Page Checkout ${
              onePageValues.LineItemTotalChkOutArray[index - 1]
            }`
          );
        }
      }
    },

    async verifySummaryTotals(pgName) {
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

      /* if (onePageValues.promotionType === 'flat') {
      onePageValues.calcRunningSubTotal += onePageValues.flatDiscount;
      } */

      if (Number(onePageValues.calcRunningSubTotal) !== Number(subTotalAmt)) {
        throw new Error(
          `Failure -> Subtotal on Account Menu - '${pgName}' page ${subTotalAmt} is NOT matching with Subtotal on One page checkout ${onePageValues.calcRunningSubTotal}`
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
          `Failure -> Shipping on Account Menu - '${pgName}' page ${shippingTotalAmt} is NOT matching with Shipping on One page checkout ${onePageValues.shippingCostAtShippingStep}`
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
          `Failure -> Tax Total on Account Menu - '${pgName}' page ${taxTotalAmt} is NOT matching with Tax Total on One page checkout ${onePageValues.onePgTaxTotal}`
        );
      }

      const creditCardFeesExist =
        '//td[descendant::strong[contains(text(),"Credit Card Fee")]]/following-sibling::td';

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
                `Failure -> Credit Card Fees on Account Menu - '${pgName}' page ${creditCardFeesAmt} is NOT matching with Credit Card Fees on One page checkout ${onePageValues.creditCardFees}`
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
          `Failure -> Subtotal on Account Menu - '${pgName}' page ${grandTotalAmt} is NOT matching with Subtotal on One page checkout ${onePageValues.expectedOnePgTotal}`
        );
      } else {
        console.log(
          `Success -> Order details on Account Menu - '${pgName}' page matches exactly with order details on One Page checkout`
        );
      }
    },
  },
];

module.exports = {
  elements,
  commands,
};
