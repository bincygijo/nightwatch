/* eslint-disable no-useless-escape */
const { client } = require('nightwatch-api');

const elements = {
  title: '.page-title',
  createNew: '.btn.green',
  promoCode: '#promo_code',
  description: 'textarea[name="desc"]',
  discountAmount: 'input[name="dpa"]',
  amount: 'input[name="discount_amount"]',
  applyButton: 'input[id="btn-apply"]',
  toaster: '#toast-container',
  toasterMessage: '.toast-message',
  closeToastMessage: {
    selector:
      '//div[@id="toast-container"]//button[@class="toast-close-button"]',
    locateStrategy: 'xpath',
  },
  searchPromoCode: 'input[name="columns[0][search][value]"]',
  confirmButton: '.btn.submit.green',
  backButton: {
    selector: '//div[@class="pull-right"]/a[1]',
    locateStrategy: 'xpath',
  },
  searchPromo: {
    selector: '//table[@id="datatable"]/thead/tr[2]/td[1]/input',
    locateStrategy: 'xpath',
  },
  deleteButton: {
    selector: '//table[@id="datatable"]/tbody/tr[1]/td[11]/a[2]',
    locateStrategy: 'xpath',
  },
  dealerButton: {
    selector: '//a[text()="Create New Promo Code"]',
    locateStrategy: 'xpath',
  },
  scope: {
    selector: '//label[text()="Dealer"]',
    locateStrategy: 'xpath',
  },
  enterPromo: {
    selector: '//input[@id="promo"]',
    locateStrategy: 'xpath',
  },
  applyCoupon: {
    selector: '//button[@id="submit_promo"]',
    locateStrategy: 'xpath',
  },
  popMsg: {
    selector: '//div[@class="swal-text"]',
    locateStrategy: 'xpath',
  },
  buttonOK: {
    selector: '//div[@class="swal-text"]//following::div[2]/button',
    locateStrategy: 'xpath',
  },
  activePromo: {
    selector: '//button[@title="Active Promotions"]',
    locateStrategy: 'xpath',
  },
  promoDelete: {
    selector: '//td/a[@title="Remove Promo"]',
    locateStrategy: 'xpath',
  },
  buyXTextbox: {
    selector: '//div[@id="buyx1_tagsinput"]//input',
    locateStrategy: 'xpath',
  },
  buyYTextbox: {
    selector: '//div[@id="gety1_tagsinput"]//input',
    locateStrategy: 'xpath',
  },
  sMethod: {
    selector:
      '//label[contains(.,"Shipping Method")]//following::span[@id="select2-shipping_method-container"]',
    locateStrategy: 'xpath',
  },
  enableFreeShipping: {
    selector: `//label[contains(.,"Enable")]//following::div[@class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-id-free_shipping bootstrap-switch-off"]`,
    locateStrategy: 'xpath',
  },
  clickShipping: {
    selector:
      '//label[contains(.,"Shipping Method")]//following::select//option[contains(text(),"XM Shipping Carrier")]',
    locateStrategy: 'xpath',
  },
};

const commands = [
  {
    async verifyPublicPromoPage() {
      await this.waitUntilVisibleElement('@title');
      await this.getText('@title', async (result) => {
        const text = result.value;
        this.checkElementTextContains('@title', text);
        console.log('Success ->', `${text} page has been loaded successfully`);
      });
    },
    async clickNewPublicPromo() {
      await this.api.pause(1000);
      await this.waitUntilVisibleElement('@createNew');
      await this.clickVisibleElement('@createNew');
      await this.api.pause(4000);
    },
    async enterPromotionDetails(promo, data) {
      const promoDiscountRadio = {
        selector: `//label[contains(.,'${promo}')]/div[@id="uniform-dt2"]`,
        locateStrategy: 'xpath',
      };
      const promoDiscountBuy = {
        selector: `//label[contains(.,'${promo}')]/div[@id="uniform-dt4"]`,
        locateStrategy: 'xpath',
      };
      const enableBtn = `//label[text()="Enable"]//following-sibling::div/div[contains(@class,"bootstrap-switch-${data[1][3]}")]`;
      const clickFreeShipping = {
        selector: `//label[text()="Enable"]//following::label[@class="bootstrap-switch-label"][1]`,
        locateStrategy: 'xpath',
      };

      await this.clearField('@promoCode');
      // const code = Math.floor(Math.random() * 100);
      await this.setField('@promoCode', data[1][0]);
      await this.api.pause(2000);
      await this.setField('@description', data[1][1]);
      await this.clickVisibleElement('@scope');
      await this.api.pause(1000);
      if (promo === 'Amount') {
        this.clickVisibleElement(promoDiscountRadio);
        await this.api.pause(1000);
        await this.clearField('@amount');
        await this.setField('@amount', data[1][2]);
        await this.api.element('xpath', enableBtn, (visible) => {
          if (visible.status !== -1) {
            console.log(`Free shipping already on`);
            this.api.pause(500);
          } else {
            this.clickVisibleElement(clickFreeShipping);
            this.clickVisibleElement('@sMethod');
            this.api.pause(500);
            this.clickVisibleElement('@clickShipping');
            this.api.pause(500);
          }
        });
      } else if (promo === 'Buy X get Y free') {
        this.clickVisibleElement(promoDiscountBuy);
        await this.api.pause(500);
        await this.clickVisibleElement('@buyXTextbox');
        await this.setField('@buyXTextbox', data[1][2]);
        client.keys([client.Keys.ENTER]);
        await this.api.pause(500);
        await this.clickVisibleElement('@buyYTextbox');
        await this.setField('@buyYTextbox', data[1][3]);
        client.keys([client.Keys.ENTER]);
        await this.api.pause(500);
      } else {
        await this.api.pause(1000);
        await this.clearField('@discountAmount');
        await this.setField('@discountAmount', data[1][2]);
        await this.api.pause(4000);
        await this.api.element('xpath', enableBtn, (visible) => {
          if (visible.status !== -1) {
            console.log(`Free shipping already on`);
            this.api.pause(500);
          } else {
            this.clickVisibleElement(clickFreeShipping);
            this.clickVisibleElement('@sMethod');
            this.api.pause(500);
            this.clickVisibleElement('@clickShipping');
            this.api.pause(500);
          }
        });
      }
    },
    async clickApplyButton() {
      await this.api.execute('scrollTo(0,0)');
      await this.clickVisibleElement('@applyButton');
    },
    async clickConfirmButton() {
      await this.clickVisibleElement('@confirmButton');
      await this.api.pause(4000);
    },
    async clickBackButton() {
      await this.api.pause(4000);
      await this.clickVisibleElement('@backButton');
    },

    async deletePublicPromo(data) {
      await this.api.pause(2000);
      await this.waitUntilVisibleElement('@searchPromoCode');
      await this.api.pause(2000);
      await this.setField('@searchPromoCode', data[1][0]);
      await this.api.pause(5000);
      await this.clickVisibleElement('@deleteButton');
    },

    async verifyDealerPromoPage() {
      await this.waitUntilVisibleElement('@title');
      await this.getText('@title', async (result) => {
        const messageDealer = result.value;
        this.checkElementTextContains('@title', messageDealer);
        console.log(
          'Success ->',
          `${messageDealer} page has been loaded successfully`
        );
      });
    },
    async clickNewDealerPromo() {
      await this.clickVisibleElement('@dealerButton');
    },
    async enterDealerPromo(data) {
      await this.clearField('@promoCode');
      await this.setField('@promoCode', data[1][0]);
      await this.setField('@description', data[1][1]);
      await this.clearField('@discountAmount');
      await this.setField('@discountAmount', data[1][2]);
      await this.api.pause(3000);
    },

    async verifyAction() {
      this.waitUntilVisibleElement('@toasterMessage');
      this.getText('@toasterMessage', async (result) => {
        const welcomeSuccessMessage = result.value;
        this.checkElementTextContains('@toasterMessage', welcomeSuccessMessage);
        console.log('Success ->', `${welcomeSuccessMessage}`);
      });
      await this.waitUntilVisibleElement('@closeToastMessage');
      await this.clickVisibleElement('@closeToastMessage');
    },

    async deleteDealerPromotion(data) {
      await this.api.pause(3000);
      await this.waitUntilVisibleElement('@searchPromoCode');
      await this.api.pause(2000);
      await this.setField('@searchPromoCode', data[1][0]);
      await this.api.pause(4000);
      await this.waitUntilVisibleElement('@deleteButton');
      await this.clickVisibleElement('@deleteButton');
    },
    async clickScopeDealer() {
      await this.api.pause(2000);
      await this.waitUntilVisibleElement('@scope');
      await this.clickVisibleElement('@scope');
    },

    async enterPromotion(pgName, data) {
      console.log(`Applied promotion "${data[1][0]}" on "${pgName}" page`);
      await this.api.pause(1000);
      await this.waitUntilVisibleElement('@enterPromo');
      await this.api.pause(2000);
      await this.setField('@enterPromo', data[1][0]);
      await this.api.pause(2000);
      await this.waitUntilVisibleElement('@applyCoupon');
      await this.clickVisibleElement('@applyCoupon');
      await this.api.pause(3000);
    },

    async verifySuccessPromotion(pgName, expectedMsg) {
      await this.waitUntilVisibleElement('@popMsg');
      await this.getText('@popMsg', async (result) => {
        const actualMsg = result.value;
        this.checkElementTextContains('@popMsg', expectedMsg);
        if (actualMsg === expectedMsg) {
          console.log(
            `Success ->  Expected message "${expectedMsg}" is matching with actual message "${actualMsg}" on page ${pgName}`
          );
        } else {
          throw new Error(
            `Failure ->  Expected message "${expectedMsg}" is NOT matching with actual message "${actualMsg}" on page ${pgName}`
          );
        }
      });
    },

    async clickButtonOk() {
      this.waitUntilVisibleElement('@buttonOK');
      this.clickVisibleElement('@buttonOK');
      await this.api.pause(2000);
    },

    async clickDeletePromoCart() {
      // await this.waitUntilVisibleElement('@promoDelete');
      await this.clickVisibleElement('@promoDelete');
      await this.api.pause(5000);
    },

    async verifyPromotionDiscount(data) {
      let shipmentTotalCart;
      let expectedPromoDiscount;
      let actualPromotionDiscount;
      let promotionApplied;
      await this.api.pause(2000);

      const backorderExists = '//div[@id="cart_back_order"]';

      const ShipmentTotal = {
        selector: `//table[@id="shopping-cart-totals-table"]/tbody//tr/td[contains(.,"Shipment Total")]//following::td[1]/span`,
        locateStrategy: 'xpath',
      };

      const Subtotal = {
        selector: `//table[@id="shopping-cart-totals-table"]/tbody//tr/td[contains(.,"Subtotal")]//following::td[1]/span`,
        locateStrategy: 'xpath',
      };

      const backOrderTotalXpath = {
        selector:
          '//div[@id="cart_back_order"]//td[@class="price col-total a-center"]//span[@class="cart-price"]',
        locateStrategy: 'xpath',
      };

      await this.waitUntilVisibleElement(ShipmentTotal);
      await this.getText(ShipmentTotal, async (Total) => {
        shipmentTotalCart = Total.value;
      });

      // removing currency sign US,$, "," and convert to Number from string.
      shipmentTotalCart = Number(
        shipmentTotalCart.replace(/\,/g, '').match(/\,?\d+\.\d+/g)
      );

      await this.api.element('xpath', backorderExists, async (visible) => {
        if (visible.status !== -1 && Number(shipmentTotalCart) === 0) {
          this.api.getText(backOrderTotalXpath, async (backorderTotal) => {
            shipmentTotalCart = Number(
              backorderTotal.value.replace(/\,/g, '').match(/\,?\d+\.\d+/g)
            );
            console.log('backorder total ', backorderTotal);
          });
        }
      });

      await this.waitUntilVisibleElement(Subtotal);
      await this.getText(Subtotal, async (Total) => {
        actualPromotionDiscount = Total.value;
      });

      // removing currency sign US,$, "," and convert to Number from string.
      actualPromotionDiscount = Number(
        actualPromotionDiscount.replace(/\,/g, '').match(/\,?\d+\.\d+/g)
      );

      await this.api.execute('scrollTo(50,300)');

      if (data[1][0] === 'percentage') {
        promotionApplied = (shipmentTotalCart * data[1][1]) / 100;
        expectedPromoDiscount = shipmentTotalCart - promotionApplied;
      } else if (data[1][0] === 'flat') {
        expectedPromoDiscount = shipmentTotalCart - data[1][1];
      } else {
        expectedPromoDiscount = actualPromotionDiscount;
      }

      await this.api.pause(5000);

      if (actualPromotionDiscount === expectedPromoDiscount) {
        console.log(
          `Success -> Promotion discount price ${actualPromotionDiscount} on cart page match expected discount price ${expectedPromoDiscount}`
        );
      } else {
        throw new Error(
          `Failure -> Promotion discount price ${actualPromotionDiscount} on cart page does NOT match expected discount price ${expectedPromoDiscount}`
        );
      }
    },
    async checkPromoCodeExists(PromoCode) {
      const PromoCodeExists =
        '//table[@id="datatable"]/tbody/tr[1]/td[11]/a[2]';
      await this.api.pause(2000);
      await this.waitUntilVisibleElement('@searchPromoCode');
      await this.api.pause(2000);
      await this.setField('@searchPromoCode', PromoCode[1][0]);
      await this.api.pause(5000);
      await this.api.element('xpath', PromoCodeExists, (visible) => {
        if (visible.status !== -1) {
          console.log('Promo code already exists');
          this.waitUntilVisibleElement('@deleteButton');
          this.clickVisibleElement('@deleteButton');
          this.api.pause(1000);
          this.clickVisibleElement('@createNew');
        } else {
          console.log('Promo code not exists');
          this.clickVisibleElement('@createNew');
        }
      });
    },

    async verifyFreeShippingPromoShippingPage(ExpectedPromo) {
      const freeShippingCode = {
        selector: `//dt[contains(.,"XM Shipping Carrier")]//following::label`,
        locateStrategy: 'xpath',
      };
      await this.waitUntilVisibleElement(freeShippingCode);
      await this.getText(freeShippingCode, async (result) => {
        const actualMsg = result.value;
        this.checkElementTextContains(freeShippingCode, ExpectedPromo);
        if (actualMsg === ExpectedPromo) {
          console.log(
            `Success ->  Expected message "${ExpectedPromo}" is matching with actual message "${actualMsg}"`
          );
        } else {
          throw new Error(
            `Failure ->  Expected message "${ExpectedPromo}" is NOT matching with actual message "${actualMsg}"`
          );
        }
      });
    },

    async createPromoUnlimited(promo, data) {
      const promoDiscountRadio = {
        selector: `//label[contains(.,'${promo}')]/div[@id="uniform-dt2"]`,
        locateStrategy: 'xpath',
      };
      const promoDiscountBuy = {
        selector: `//label[contains(.,'${promo}')]/div[@id="uniform-dt4"]`,
        locateStrategy: 'xpath',
      };
      const enableUnlimitedUsage = `//label[text()="Unlimited Usage"]//following-sibling::div/div[contains(@class,"bootstrap-switch-${data[1][3]}")]`;
      const clickUnlimited = {
        selector: `//label[text()="Unlimited Usage"]//following::label[@class="bootstrap-switch-label"][1]`,
        locateStrategy: 'xpath',
      };
      const usageTimes = {
        selector: `//input[@id="usage"]`,
        locateStrategy: 'xpath',
      };

      await this.clearField('@promoCode');
      // const code = Math.floor(Math.random() * 100);
      await this.setField('@promoCode', data[1][0]);
      await this.api.pause(2000);
      await this.setField('@description', data[1][1]);
      await this.clickVisibleElement('@scope');
      await this.api.pause(1000);
      if (promo === 'Amount') {
        this.clickVisibleElement(promoDiscountRadio);
        await this.api.pause(1000);
        await this.clearField('@amount');
        await this.setField('@amount', data[1][2]);
        await this.api.element('xpath', enableUnlimitedUsage, (visible) => {
          if (visible.status !== -1) {
            console.log(`Unlimited Usage is already on`);
            this.api.pause(500);
          } else {
            this.clickVisibleElement(clickUnlimited);
            this.api.pause(500);
            this.setField(usageTimes, data[1][4]);
            this.api.pause(500);
          }
        });
      } else if (promo === 'Buy X get Y free') {
        this.clickVisibleElement(promoDiscountBuy);
        await this.api.pause(500);
        await this.clickVisibleElement('@buyXTextbox');
        await this.setField('@buyXTextbox', data[1][2]);
        client.keys([client.Keys.ENTER]);
        await this.api.pause(500);
        await this.clickVisibleElement('@buyYTextbox');
        await this.setField('@buyYTextbox', data[1][3]);
        client.keys([client.Keys.ENTER]);
        await this.api.pause(500);
      } else {
        await this.api.pause(1000);
        await this.clearField('@discountAmount');
        await this.setField('@discountAmount', data[1][2]);
        await this.api.pause(4000);
        await this.api.element('xpath', enableUnlimitedUsage, (visible) => {
          if (visible.status !== -1) {
            console.log(`Unlimited Usage is already on`);
            this.api.pause(500);
          } else {
            this.clickVisibleElement(clickUnlimited);
            this.api.pause(500);
          }
        });
      }
    },
  },
];

module.exports = {
  elements,
  commands,
};
