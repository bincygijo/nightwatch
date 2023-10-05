const { cartPageValues } = require('../../helper/constants/constants');

const elements = {
  productPriceCartWidget: {
    selector: `//i[@class="fa fa-shopping-cart"]//following::span[1]/span[@class="cart-price-total exist-cart "]`,
    locateStrategy: 'xpath',
  },
};

const commands = [
  {
    async verifyCartWidget() {
      let actualCartWidgetTotal = 0;
      const expectedCartWidgetTotal = cartPageValues.calcRunningSubTotal;

      await this.waitUntilVisibleElement('@productPriceCartWidget');
      await this.getText('@productPriceCartWidget', async (result) => {
        actualCartWidgetTotal = Number(
          result.value.replace(/,/g, '').match(/\d+\.?\d+/g)
        );
      });

      if (actualCartWidgetTotal === expectedCartWidgetTotal) {
        console.log(
          `Success -> Cart Widget item total ${actualCartWidgetTotal} is matching with expected unit price * quantity-> ${expectedCartWidgetTotal} in the cart page`
        );
      } else {
        throw new Error(
          `Failure --> Cart Widget item total ${actualCartWidgetTotal} is NOT matching with expected unit price * quantity-> ${expectedCartWidgetTotal} in the cart page`
        );
      }
    },
  },
];

module.exports = {
  elements,
  commands,
};
