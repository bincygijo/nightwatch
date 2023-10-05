/* eslint-disable no-loop-func */
/* eslint-disable complexity */
/* eslint-disable no-useless-escape */
/* eslint-disable no-await-in-loop */
const { client } = require('nightwatch-api');

const {
  quantity,
  cartPageValues,
  addToCartValues,
  CONSOLE_COLORS,
} = require('../../helper/constants/constants');

const elements = {
  searchCode: {
    selector: '//input[@id="search"]',
    locateStrategy: 'xpath',
  },
  searchX3Code: {
    selector: '(//input[@id="search"])[2]',
    locateStrategy: 'xpath',
  },
  searchIcon: {
    selector: '//div[@class="form-search"]/button',
    locateStrategy: 'xpath',
  },
  pName: {
    selector: '//div[@class="product-name"]/h1',
    locateStrategy: 'xpath',
  },
  addToC: {
    selector: '//button[@name="Add to Cart"]',
    locateStrategy: 'xpath',
  },
  qty: {
    selector: '//input[@title="Qty"]',
    locateStrategy: 'xpath',
  },
  pStatusSage300: {
    selector: '//span[@class="v-center qohConBody"]',
    locateStrategy: 'xpath',
  },
  pStatusX3: {
    selector: '//div[@class="product-type-data"]/p/span',
    locateStrategy: 'xpath',
  },
  price: {
    selector: '//div[@class="regular-price"]/span',
    locateStrategy: 'xpath',
  },
  enableFractionQty: {
    selector:
      '//label[contains(text(),"Allow Fractional Quantities")]//following::label[@class="bootstrap-switch-label"][1]',
    locateStrategy: 'xpath',
  },
  specifyFractionqtyDecimal: {
    selector: '//input[@id="allow_fractional_quantities_value"]',
    locateStrategy: 'xpath',
  },
  enableNegativeQty: {
    selector:
      '//label[contains(text(),"Allow Negative Quantity Levels")]//following::label[@class="bootstrap-switch-label"][1]',
    locateStrategy: 'xpath',
  },
  enableOrdering: {
    selector:
      '//label[contains(text(),"Enable Ordering")]//following::label[@class="bootstrap-switch-label"][1]',
    locateStrategy: 'xpath',
  },
  enableBkOrdering: {
    selector:
      '//label[contains(text(),"Enable Back Ordering")]//following::label[@class="bootstrap-switch-label"][1]',
    locateStrategy: 'xpath',
  },
  enableGuestOrdering: {
    selector:
      '//label[contains(text(),"Enable Guest Ordering")]//following::label[@class="bootstrap-switch-label"][1]',
    locateStrategy: 'xpath',
  },
  displayInStockOFF: {
    selector:
      '//label[contains(text(),"Display products on Back order as")]//following::label[@class="bootstrap-switch-label"][1]',
    locateStrategy: 'xpath',
  },
  hideOutOfStock: {
    selector:
      '//label[contains(text(),"Hide Out of Stock Items")]//following::label[@class="bootstrap-switch-label"][1]',
    locateStrategy: 'xpath',
  },
  outOfStockDisableAddtoCart: {
    selector:
      '//label[contains(text(),"Hide Add to Cart for Out of Stock Items")]//following::label[@class="bootstrap-switch-label"][1]',
    locateStrategy: 'xpath',
  },
  toastSuccessMsg: {
    selector: '//div[@class="toast-message"]',
    locateStrategy: 'xpath',
  },
  variantOptions: {
    selector: '//div[@class="swatches-con list"]/a[2]',
    locateStrategy: 'xpath',
  },
  CloseSuccessMsg: {
    selector:
      '//div[@id="toast-container"]//button[@class="toast-close-button"]',
    locateStrategy: 'xpath',
  },
  ClosePopUpMsgCatPage: {
    selector:
      '//div[contains(@class,"main-container")]//div[1][@id="messages_product_view"]//ul[@class="messages"]/li/a',
    locateStrategy: 'xpath',
  },
  ClosePopUpMsg: {
    selector:
      '//div[@class="details-main-container"]//div[1][@id="messages_product_view"]//ul[@class="messages"]/li/a',
    locateStrategy: 'xpath',
  },
  inputQuantity: {
    selector:
      '//div[@class="qty-wrapper v-center"]/input[@class="qty-box input-text qty" and @name = "qty"]',
    locateStrategy: 'xpath',
  },
  btnAddToCart: {
    selector:
      '//button[@type="button" and (contains(@class,"add-cart-button"))]',
    locateStrategy: 'xpath',
  },

  cartP: {
    selector: '//div[@class="dropdown-toggle cover left-hand opener"]/div/a',
    locateStrategy: 'xpath',
  },
  emptyCart: {
    selector:
      '//a[@class="btn-remove btn-remove2" and @title="Remove All Items"]',
    locateStrategy: 'xpath',
  },
  yourTotal: {
    selector: '//tr[@class="grand-total-row"]//span',
    locateStrategy: 'xpath',
  },
  cartSubTotal: {
    selector:
      '//table[@id="shopping-cart-totals-table"]//tr[contains(.,"Subtotal")]/td/span',
    locateStrategy: 'xpath',
  },
  preOrderTotal: {
    selector:
      '//table[@id="shopping-cart-totals-table"]//td[contains(text(),"Preorder Total")]/following-sibling::td/span',
    locateStrategy: 'xpath',
  },
  backOrderTotal: {
    selector:
      '//table[@id="shopping-cart-totals-table"]//td[contains(text(),"Backorder Total")]/following-sibling::td/span',
    locateStrategy: 'xpath',
  },
  TaxTotalXpath: {
    selector:
      '//table[@id="shopping-cart-totals-table"]//td[contains(text(),"Tax")]/following-sibling::td/span',
    locateStrategy: 'xpath',
  },
  shippingEstimateTotal: {
    selector:
      '//table[@id="shopping-cart-totals-table"]//td[contains(text(),"Shipping Estimate")]/following-sibling::td/span',
    locateStrategy: 'xpath',
  },
  customComment: {
    selector: '//input[@id="custom_comment_c2"]',
    locateStrategy: 'xpath',
  },
  regularPrice: {
    selector: '//span[@id="regular-price"]',
    locateStrategy: 'xpath',
  },
  specialPrice: {
    selector: '//span[@id="now-price"]',
    locateStrategy: 'xpath',
  },
  cartIconSage300: {
    selector: '//i[@class="fa fa-shopping-cart"]',
    locateStrategy: 'xpath',
  },
  cartIconX3: {
    selector:
      '//div[@id="mini-cart"]//span[contains(@class, "fa fa-shopping-cart")]',
    locateStrategy: 'xpath',
  },
  cartPageLoaded: {
    selector:
      '//div[contains(@class,"page-title")]//h1[contains(.,"Shopping Cart")]',
    locateStrategy: 'xpath',
  },
  promotionValue: {
    selector: '//td[descendant::span[contains(.,"Promo Details")]]',
    locateStrategy: 'xpath',
  },
  closeButton: {
    selector: '//div[@class="details-main-container"]//i[@class="fa fa-times"]',
    localStrategy: 'xpath',
  },
};

let shippingEstimateTotal = 0;
let promotionType = '';
let expectedTotal = 0;

const commands = [
  {
    async searchProCode(code) {
      const X3SearchXpath = '(//input[@id="search"])[2]';

      await this.api.element('xpath', X3SearchXpath, (visible) => {
        if (visible.status !== -1) {
          this.setField('@searchX3Code', code);
        } else {
          this.setField('@searchCode', code);
        }
      });

      await this.api.pause(500);
    },

    async clickSearchIcon() {
      // const X3SearchButtonPath = '(//div[@class="form-search"]/button)[1]';

      client.keys([client.Keys.ENTER]);

      /* await this.api.element('xpath', X3SearchButtonPath, visible => {
        if (visible.status !== -1) {
          console.log('X3 Search - hit Enter button');
          client.keys([client.Keys.ENTER]);
        } else {
          this.clickVisibleElement('@searchIcon');
        }
      }); */

      await this.api.pause(2000);
    },
    async clickProduct(prodDesc) {
      const productName = {
        selector: `//h2[@class="product-name"]/a[contains(@title,'${prodDesc}')]`,
        locateStrategy: 'xpath',
      };

      await this.waitUntilVisibleElement(productName);
      await this.clickVisibleElement(productName);
    },
    async verifyProductName() {
      await this.waitUntilVisibleElement('@pName');
      await this.getText('@pName', async (result) => {
        const successMessage = result.value;
        this.checkElementTextContains('@pName', successMessage);
        console.log('Success -> Product Name is', successMessage);
      });
    },
    async clickAddToCart() {
      await this.waitUntilVisibleElement('@addToC');
      await this.api.pause(500);
      await this.clickVisibleElement('@addToC');
    },

    async addtoCart(qty) {
      await this.waitUntilVisibleElement('@inputQuantity');
      await this.clickVisibleElement('@inputQuantity');
      await this.clearValue('@inputQuantity');
      await this.api.pause(1000);
      await this.setField('@inputQuantity', qty);
      await this.api.pause(500);
      await this.clickVisibleElement('@btnAddToCart');
      await this.api.pause(500);
    },

    async VerifyPopUpMessage(msg, popUpType = 'other') {
      let path =
        '//form//div[1][@id="messages_product_view"]//ul[@class="messages"]/li/span';
      if (popUpType === 'registration') {
        path =
          '//div[1][@id="messages_product_view"]//ul[@class="messages"]/li/span//p';
        console.log(' Its registration verification');
      }

      const popupMsg = {
        selector: `${path}`,
        locateStrategy: 'xpath',
      };

      await this.waitUntilVisibleElement(popupMsg);

      await this.getText(popupMsg, async (result) => {
        this.checkElementTextContains(popupMsg, msg);
        console.log(
          CONSOLE_COLORS.cyan,
          `Actual Pop Up Message is -> ${result.value}`
        );
        console.log(
          CONSOLE_COLORS.pink,
          `Expected Pop Up Message is -> ${msg}`
        );
      });

      if (popUpType === 'registration') {
        await this.api.pause(5000);
      } else {
        try {
          await this.clickVisibleElement('@ClosePopUpMsg');
          await this.api.pause(50);
        } catch (Error) {
          console.log(
            Error,
            'It was not easy to close the pop up but thats ok ... '
          );
          await this.api.pause(1000);
        }
      }
    },

    async viewCart() {
      const X3CartIconExist =
        '//div[@id="mini-cart"]//span[contains(@class, "fa fa-shopping-cart")]';

      this.api.execute('scrollTo(0,0)');
      await this.api.element('xpath', X3CartIconExist, (visible) => {
        if (visible.status !== -1) {
          this.clickVisibleElement('@cartIconX3');
        } else {
          this.clickVisibleElement('@cartIconSage300');
        }
      });

      await this.waitUntilVisibleElement('@cartPageLoaded'); // to allow cart page to load fully before
    },

    async enterQty() {
      await this.clickVisibleElement('@qty');
      await this.api.pause(200);
      await this.clearField('@qty');
      await this.api.pause(200);
      await this.setField('@qty', quantity.qty);
      console.log('Quantity set - ', quantity.qty);
      await this.api.pause(200);
    },
    async verifyProductStatus() {
      const Sage300Status = '//span[@class="v-center qohConBody"]';
      await this.api.pause(1000);

      await this.api.element('xpath', Sage300Status, (visible) => {
        if (visible.status !== -1) {
          this.getText('@pStatusSage300', (result) => {
            console.log('Product Status is ->', result.value);
          });
        } else {
          this.getText('@pStatusX3', (result) => {
            console.log('Product Status is ->', result.value);
          });
        }
      });
    },
    async verifyPrice() {
      const specialPriceExists = '//span[@id="now-price"]';
      await this.api.pause(1000);

      await this.api.element('xpath', specialPriceExists, (visible) => {
        if (visible.status !== -1) {
          this.getText('@specialPrice', (result) => {
            this.checkElementTextContains('@specialPrice', result.value);
            console.log('Special Price ->', result.value);
          });
        } else {
          this.getText('@price', (result) => {
            this.checkElementTextContains('@price', result.value);
            console.log('Price ->', result.value);
          });
        }
      });
    },

    async verifySettingsSaved(msg) {
      await this.waitUntilVisibleElement('@toastSuccessMsg');
      await this.checkElementTextContains('@toastSuccessMsg', msg);
      await this.api.pause(500);
      await this.clickVisibleElement('@CloseSuccessMsg');
      await this.api.pause(1000);
    },

    async verifyAddToCartButton(state) {
      const btnAddToCart = {
        selector: `//button[contains(.,'${state}')]`,
        locateStrategy: 'xpath',
      };
      await this.api.element('xpath', btnAddToCart, (visible) => {
        if (visible.status !== -1) {
          console.log(
            'Success - As expected  Add to cart button is shown on product page'
          );
        } else {
          console.log(
            'Success - As expected  Add to cart button is not available'
          );
        }
      });
    },

    async verifyBackorderTotals(prodName) {
      const TotalOrderQty = {
        selector: `//span[contains(text(),'${prodName}')]/parent::a/parent::h2/parent::td/following-sibling::td/input[@id='qty_0']`,
        locateStrategy: 'xpath',
      };

      const AvailablQty = {
        selector: `//span[contains(text(),'${prodName}')]/parent::a/parent::h2/parent::td/following-sibling::td[@id='avail_0']`,
        locateStrategy: 'xpath',
      };

      const backOrderQty = {
        selector: `//span[contains(text(),'${prodName}')]/parent::a/parent::h2/parent::td//following-sibling::td[@id="bo_0"]`,
        locateStrategy: 'xpath',
      };

      const backOrderUnitPrice = {
        selector: `//span[contains(text(),'${prodName}')]/parent::a/parent::h2/parent::td//following-sibling::td[@class="col-unit-price a-right"]//span[@class="price"]`,
        locateStrategy: 'xpath',
      };

      const backOrderTotalXpath = {
        selector: `//div[@id="cart_back_order"]//td[contains(text(),"${prodName}")]//following-sibling::td/span[contains(text(),"Total")]//following-sibling::span[@class="cart-price"]`,
        locateStrategy: 'xpath',
      };

      let backOrderQtyCart;
      let backOrderUnitPriceCart;
      let backOrderTotalCart;
      let bkOrderTotalExpected;
      let TotalQtyOrderedCart;
      let AvailablQtyCart;

      await this.waitUntilVisibleElement(TotalOrderQty);
      await this.getValue(TotalOrderQty, async (qty) => {
        TotalQtyOrderedCart = qty.value;
      });

      await this.waitUntilVisibleElement(AvailablQty);
      await this.getText(AvailablQty, async (qty) => {
        AvailablQtyCart = qty.value;
      });

      await this.waitUntilVisibleElement(backOrderQty);
      await this.getText(backOrderQty, async (qty) => {
        const qtyNum = qty.value.match(/\d+/g)[0];
        backOrderQtyCart = qtyNum;
      });

      await this.waitUntilVisibleElement(backOrderUnitPrice);
      await this.getText(backOrderUnitPrice, async (unitPrice) => {
        backOrderUnitPriceCart = unitPrice.value;
      });
      await this.waitUntilVisibleElement(backOrderTotalXpath);
      await this.getText(backOrderTotalXpath, async (Total) => {
        backOrderTotalCart = Total.value;
      });

      // removing currency sign US,$, "," and convert to Number from string.
      backOrderTotalCart = Number(
        backOrderTotalCart.replace(/\,/g, '').match(/\,?\d+\.\d+/g)[0]
      );

      const bkOrderQtyExpected =
        Number(TotalQtyOrderedCart) - Number(AvailablQtyCart);

      bkOrderTotalExpected =
        bkOrderQtyExpected *
        Number(
          backOrderUnitPriceCart.replace(/\,/g, '').match(/\,?\d+\.\d+/g)[0]
        );

      // rounding calculated total to two digits precision
      bkOrderTotalExpected = Math.round(bkOrderTotalExpected * 100) / 100;
      cartPageValues.calcBackOrderTotal = bkOrderTotalExpected;

      if (bkOrderQtyExpected === Number(backOrderQtyCart)) {
        console.log(
          `Success ->  Expected Backorder qty ${bkOrderQtyExpected} is matching with Cart Backorder qty ${backOrderQtyCart}`
        );
      } else {
        throw new Error(
          `Failure ->  Expected Backorder qty ${bkOrderQtyExpected} is NOT matching with Cart Backorder qty ${backOrderQtyCart}`
        );
      }

      if (bkOrderTotalExpected === Number(backOrderTotalCart)) {
        console.log(
          `Success ->  Expected Backorder Total ${bkOrderTotalExpected} is matching with Cart Backorder Total ${backOrderTotalCart}`
        );
      } else {
        throw new Error(
          `Failure ->  Expected Backorder Total ${bkOrderTotalExpected} is NOT matching with Cart Backorder Total ${backOrderTotalCart}`
        );
      }
    },
    async verifyBackOrder(prodName) {
      const backOrderGrid = `//div[@class="page-content"]//div[@id="cart_back_order"]//td[contains(text(),'${prodName}')]`;

      await this.api.element('xpath', backOrderGrid, async (visible) => {
        if (visible.status !== -1) {
          console.log(`Success -> ${prodName} is backorderd as expected`);
        } else {
          throw new Error(
            `Failure --> ${prodName} is not back ordered as expected`
          );
        }
      });
    },

    async verifyPreOrder(prodName) {
      const preOrderGrid = `//div[@class="page-content"]//div[@id="cart_pre_order"]//td[contains(text(),'${prodName}')]`;

      await this.api.element('xpath', preOrderGrid, async (visible) => {
        if (visible.status !== -1) {
          console.log(`Success -> ${prodName} is preordered as expected`);
        } else {
          throw new Error(
            `Failure --> ${prodName} is not back preordered as expected`
          );
        }
      });
    },

    async verifyPreorderTotals(prodName) {
      const preOrderQty = {
        selector: `//span[contains(text(),'${prodName}')]/parent::a/parent::h2/parent::td/following-sibling::td[@id='avail_0']`,
        locateStrategy: 'xpath',
      };

      const preOrderUnitPrice = {
        selector: `//span[contains(text(),'${prodName}')]/parent::a/parent::h2/parent::td//following-sibling::td[@class="col-unit-price a-right"]//span[@class="price"]`,
        locateStrategy: 'xpath',
      };

      const preOrderTotalXpath = {
        selector: `//div[@id="cart_pre_order"]//td[contains(text(),"${prodName}")]//following-sibling::td/span[contains(text(),"Total")]//following-sibling::span[@class="cart-price"]`,
        locateStrategy: 'xpath',
      };

      let preOrderQtyCart;
      let preOrderUnitPriceCart;
      let preOrderTotalCart;
      let preOrderTotalExpected;

      await this.waitUntilVisibleElement(preOrderQty);
      await this.getText(preOrderQty, async (qty) => {
        const qtyNum = qty.value.match(/\d+/g)[0];
        preOrderQtyCart = qtyNum;
      });

      await this.waitUntilVisibleElement(preOrderUnitPrice);
      await this.getText(preOrderUnitPrice, async (unitPrice) => {
        preOrderUnitPriceCart = unitPrice.value;
      });
      await this.waitUntilVisibleElement(preOrderTotalXpath);
      await this.getText(preOrderTotalXpath, async (Total) => {
        preOrderTotalCart = Total.value;
      });

      // removing currency sign US,$, "," and convert to Number from string.
      preOrderTotalCart = Number(
        preOrderTotalCart.replace(/\,/g, '').match(/\,?\d+\.\d+/g)[0]
      );

      const preOrderQtyExpected = 1;

      preOrderTotalExpected =
        Number(preOrderQtyExpected) *
        Number(
          preOrderUnitPriceCart.replace(/\,/g, '').match(/\,?\d+\.\d+/g)[0]
        );

      // rounding calculated total to two digits precision
      preOrderTotalExpected = Math.round(preOrderTotalExpected * 100) / 100;
      cartPageValues.calcPreOrderTotal = preOrderTotalExpected;

      if (preOrderQtyExpected === Number(preOrderQtyCart)) {
        console.log(
          `Success ->  Expected preorder qty ${preOrderQtyExpected} is matching with Cart preorder qty ${preOrderQtyCart}`
        );
      } else {
        throw new Error(
          `Failure ->  Expected preorder qty ${preOrderQtyExpected} is NOT matching with Cart preorder qty ${preOrderQtyCart}`
        );
      }

      if (Number(preOrderTotalExpected) === Number(preOrderTotalCart)) {
        console.log(
          `Success ->  Expected preorder Total ${preOrderTotalExpected} is matching with Cart preorder Total ${preOrderTotalCart}`
        );
      } else {
        throw new Error(
          `Failure ->  Expected preorder Total ${preOrderTotalExpected} is NOT matching with Cart preorder Total ${preOrderTotalCart}`
        );
      }
    },

    async verifyWarehouseAllocation(prodName, data) {
      const noOfWarehouses = data[0].length / 2;
      for (let index = 0; index < noOfWarehouses; index += 1) {
        const qty = {
          selector: `//tr[@class="item-row first last odd"]//td//td[contains(text(),'${data[1][index]}')]//following-sibling::td[1]`,
          locateStrategy: 'xpath',
        };
        await this.api.pause(1000);
        await this.getText(qty, async (result) => {
          const QtyAllocated = result.value;

          if (QtyAllocated === data[1][index + noOfWarehouses]) {
            console.log(
              `Success ->  For ${prodName} - Warehouse - ${
                data[1][index]
              } has CORRECT allocation ${data[1][index + noOfWarehouses]}`
            );
          } else {
            throw new Error(
              `Failure -> For ${prodName} - Warehouse - ${
                data[1][index]
              } has INCORRECT allocation - ${QtyAllocated} , expected allocation - ${
                data[1][index + noOfWarehouses]
              }`
            );
          }
        });
      }
    },

    async clickVariantOptions() {
      await this.waitUntilVisibleElement('@variantOptions');
      await this.clickVisibleElement('@variantOptions');
      await this.api.pause(3000);
    },

    async clickTwoVariantOptions(NoOfOptions) {
      for (let index = 1; index <= NoOfOptions; index += 1) {
        const varOption = {
          selector: `//dd[${index}]/div/a[1]`,
          locateStrategy: 'xpath',
        };
        await this.api.pause(1500);
        await this.clickVisibleElement(varOption);
        await this.api.pause(1000);
      }
    },

    async clickCategory(category) {
      const Sage300categoryName = {
        selector: `//nav[contains(@class,"nav-container")]//span[text()='${category}']`,
        locateStrategy: 'xpath',
      };

      this.clickVisibleElement(Sage300categoryName);
      await this.api.pause(2000);
    },

    async verifyCategorypage(catName) {
      const cateTitle = {
        selector: `//div[contains(@class,'main-container')]//h1[contains(.,'${catName}')]`,
        locateStrategy: 'xpath',
      };
      await this.api.pause(1000);
      await this.waitUntilVisibleElement(cateTitle);
      await this.getText(cateTitle, async (result) => {
        const cateMsg = result.value;
        this.checkElementTextContains(cateTitle, cateMsg);
        console.log('Category Title ->', `${cateMsg}`);
      });
    },

    async verifyAndAddUOMtoCart(noOfUOMs, UOMs, qty) {
      for (let index = 0; index < noOfUOMs; index += 1) {
        const UOMOption = {
          selector: `//div[@id="unit-messure-wrapper"]/select/option[contains(text(),"${UOMs[0][index]}")]`,
          locateStrategy: 'xpath',
        };
        await this.waitUntilVisibleElement(UOMOption);
        await this.clickVisibleElement(UOMOption);
        await this.api.pause(2000);
        await this.verifyPriceUOM(UOMs[0][index + 4]);
        await this.verifyStockUOM(UOMs[0][index + 8]);
        await this.addtoCart(qty);
      }
    },

    async AddUOMtoCart(noOfUOMs, UOMs, qty) {
      for (let index = 0; index < noOfUOMs; index += 1) {
        const UOMOption = {
          selector: `//div[@id="unit-messure-wrapper"]/select/option[contains(text(),"${UOMs[0][index]}")]`,
          locateStrategy: 'xpath',
        };
        await this.api.pause(1000);
        await this.waitUntilVisibleElement(UOMOption);
        await this.clickVisibleElement(UOMOption);
        await this.api.pause(2000);
        await this.addtoCart(qty);
      }
    },

    async verifyPriceUOM(expectedPrice) {
      await this.waitUntilVisibleElement('@regularPrice');
      await this.getText('@regularPrice', async (result) => {
        const actualPrice = result.value;

        if (actualPrice === expectedPrice) {
          console.log(
            `Success -> Price ${actualPrice} on product page match expected price ${expectedPrice}`
          );
        } else {
          throw new Error(
            `Failure -> Price ${actualPrice} on product page does NOT match expected price ${expectedPrice}`
          );
        }
      });
    },

    async verifyStockUOM(expectedStock) {
      await this.waitUntilVisibleElement('@pStatusSage300');
      await this.getText('@pStatusSage300', async (result) => {
        const actualStock = result.value;
        if (actualStock === expectedStock) {
          console.log(
            `Success -> Stock ${actualStock} on product page match expected stock level ${expectedStock}`
          );
        } else {
          throw new Error(
            `Failure -> Stock ${actualStock} on product page does NOT match expected stock level ${expectedStock}`
          );
        }
      });
    },

    async verifyCartSummary(dataTable, prodName = '') {
      // prodName defaulted to spaces for handling scenario when all products are sent thru datatable and not individually
      const TaxTotalElement =
        '//table[@id="shopping-cart-totals-table"]//td[contains(text(),"Tax")]/following-sibling::td/span';
      const shippingEstimateXPath =
        '//table[@id="shopping-cart-totals-table"]//td[contains(text(),"Shipping Estimate")]/following-sibling::td/span';
      const shippingSavingExist =
        '//tbody//td/span[@class="xm-shipping-saving-amount"]';
      const promotionFlatExists =
        '//td[descendant::span[contains(.,"Promo Details")] and contains(.,"$")]';

      let cartTotal = 0;
      let cartSubTotal = 0;
      let promotion = 0.0;
      // re-initialise these variables to make sure there is no carry over from previous scenario
      expectedTotal = 0;
      cartPageValues.calcRunningSubTotal = 0;
      cartPageValues.calcBackOrderTotal = 0;
      cartPageValues.calcPreOrderTotal = 0;
      cartPageValues.CartStateTaxRate = 0;
      cartPageValues.CartCountyTaxRate = 0;
      cartPageValues.cartTaxTotal = 0;
      cartPageValues.qtyBackorder = 0;
      shippingEstimateTotal = 0;
      promotionType = '';

      const promptionBuyXGetYFreeExists =
        '//td[descendant::span[contains(.,"Promo Description")] and contains(.,"Buy X get Y free")]';

      const promotionPercentageExists =
        '//td[descendant::span[contains(.,"Promo Details")] and contains(.,"%")]';

      await this.api.element('xpath', promotionPercentageExists, (visible) => {
        if (visible.status !== -1) {
          promotionType = 'percentage';
          this.waitUntilVisibleElement('@promotionValue');
          this.getText('@promotionValue', async (result) => {
            promotion = Number(
              result.value.replace(/\,/g, '').match(/\d+\.?\d+/g)
            );

            console.log(
              CONSOLE_COLORS.pink,
              'Information -> Percentage Discount Price Revision -',
              result.value
            );
          });
        }
      });

      cartPageValues.noOfProductsInCart = dataTable[0].length;

      cartPageValues.LineItemTotalArray.fill(0);

      for (let index = 0; index < dataTable[0].length; index += 1) {
        if (prodName !== '') {
          // handling different UOMs
          cartPageValues.LineItemTotalArray[index] =
            await this.getLineItemTotal(
              prodName,
              'Normal Order',
              promotion,
              dataTable[0][index]
            );
          cartPageValues.calcRunningSubTotal +=
            cartPageValues.LineItemTotalArray[index];
        } else {
          // handling normal products
          cartPageValues.LineItemTotalArray[index] =
            await this.getLineItemTotal(
              dataTable[1][index],
              dataTable[2][index],
              promotion
            );
          cartPageValues.calcRunningSubTotal +=
            cartPageValues.LineItemTotalArray[index];
        }
      }

      await this.api.element(
        'xpath',
        promptionBuyXGetYFreeExists,
        (visible) => {
          if (visible.status !== -1) {
            promotionType = 'Buy X Get Y';
            console.log(
              CONSOLE_COLORS.pink,
              'Information -> One page Percentage Discount Price Revision -',
              promotionType
            );
            cartPageValues.noOfProductsInCart += 1;
          }
        }
      );

      await this.api.element('xpath', promotionFlatExists, (visible) => {
        if (visible.status !== -1) {
          promotionType = 'flat';
          this.waitUntilVisibleElement('@promotionValue');
          this.getText('@promotionValue', async (result) => {
            cartPageValues.calcRunningSubTotal -= Number(
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

      await this.waitUntilVisibleElement('@yourTotal');
      await this.getText('@yourTotal', async (result) => {
        cartTotal = Number(
          result.value.replace(/\,/g, '').match(/\,?\d+\.\d+/g)[0]
        );
      });

      await this.waitUntilVisibleElement('@cartSubTotal');
      await this.getText('@cartSubTotal', async (result) => {
        cartSubTotal = Number(
          result.value.replace(/\,/g, '').match(/\,?\d+\.\d+/g)[0]
        );
      });

      await this.api.element('xpath', TaxTotalElement, (visible) => {
        if (visible.status !== -1) {
          this.getText('@TaxTotalXpath', async (result) => {
            cartPageValues.cartTaxTotal = Number(
              result.value.replace(/\,/g, '').match(/\,?\d+\.\d+/g)[0]
            );
          });
        }
      });

      await this.api.element('xpath', shippingEstimateXPath, (visible) => {
        if (visible.status !== -1) {
          this.getText('@shippingEstimateTotal', async (result) => {
            shippingEstimateTotal = Number(
              result.value.replace(/\,/g, '').match(/\,?\d+\.\d+/g)[0]
            );
          });
        }
      });

      await this.api.element('xpath', shippingSavingExist, (visible) => {
        if (visible.status !== -1) {
          console.log(
            CONSOLE_COLORS.pink,
            'This order is eligible for free shipping, hence shipping estimate is 0'
          );
          shippingEstimateTotal = 0;
        }
      });

      cartPageValues.calcRunningSubTotal = parseFloat(
        cartPageValues.calcRunningSubTotal.toFixed(2)
      );

      console.log(
        CONSOLE_COLORS.BGCyan,
        '********************* Cart Summary ********************'
      );

      console.log(
        CONSOLE_COLORS.pink,
        'Calculated - Pre-Order -',
        cartPageValues.calcPreOrderTotal,
        ' Cart Subtotal - ',
        cartPageValues.calcRunningSubTotal,
        ' Back Order -',
        cartPageValues.calcBackOrderTotal,
        '; Actuals - Cart sub-Total - ',
        cartSubTotal,
        ' Cart Tax -',
        cartPageValues.cartTaxTotal,
        ' Shipping Estimate - ',
        shippingEstimateTotal
      );

      expectedTotal =
        cartPageValues.calcRunningSubTotal +
        shippingEstimateTotal +
        cartPageValues.cartTaxTotal;

      expectedTotal = parseFloat(expectedTotal.toFixed(2));

      if (cartPageValues.calcRunningSubTotal === cartSubTotal) {
        console.log(
          `Success -> Cart SubTotal ${cartSubTotal} is matching with expected sub total ${cartPageValues.calcRunningSubTotal}`
        );
      } else {
        throw new Error(
          `Failure -> Cart SubTotal ${cartSubTotal} is NOT matching with expected sub total ${cartPageValues.calcRunningSubTotal}`
        );
      }

      if (expectedTotal === cartTotal) {
        console.log(
          `Success -> Cart Total ${cartTotal} is matching with expected total ${expectedTotal}`
        );
      } else {
        throw new Error(
          `Failure -> Cart Total ${cartTotal} is NOT matching with expected total ${expectedTotal}`
        );
      }
    },

    async getLineItemTotal(prodName, orderType, promotion, UOM = 'E') {
      const qtyTotal = {
        selector: `//table[@id="shopping-cart-table"]//tr[descendant::span[text()='${prodName}']]//td[contains(.,'${UOM}')]//following-sibling::td/input[@id="qty_0"]`,
        locateStrategy: 'xpath',
      };

      const unitPrice = {
        selector: `//table[@id="shopping-cart-table"]//tr[descendant::span[text()='${prodName}']]//td[contains(.,'${UOM}')]//following-sibling::td/span[@id="0_unitprice"]/span`,
        locateStrategy: 'xpath',
      };

      const total = {
        selector: `//table[@id="shopping-cart-table"]//tr[descendant::span[text()='${prodName}']]//td[contains(.,'${UOM}')]//following-sibling::td//span[@id="0_price"]`,
        locateStrategy: 'xpath',
      };

      let qtyCart;
      let unitPCart;
      let actualLineItemTotal = 0;
      let expectedLineItemTotal = 0;

      await this.waitUntilVisibleElement(qtyTotal);
      await this.getValue(qtyTotal, async (result) => {
        qtyCart = result.value;
      });

      console.log(
        CONSOLE_COLORS.BGCyan,
        `********* Cart Line item Level Checks - ${prodName} *********`
      );
      console.log('Quantity in Cart for this line item - ', qtyCart);

      await this.waitUntilVisibleElement(unitPrice);
      await this.getText(unitPrice, async (result) => {
        unitPCart = result.value;
      });

      await this.waitUntilVisibleElement(total);
      await this.getText(total, async (result) => {
        actualLineItemTotal = result.value;
      });

      actualLineItemTotal = Number(
        actualLineItemTotal.replace(/\,/g, '').match(/\,?\d+\.\d+/g)[0]
      );

      expectedLineItemTotal =
        Number(qtyCart) *
        Number(unitPCart.replace(/\,/g, '').match(/\,?\d+\.\d+/g)[0]);

      if (promotionType === 'percentage') {
        expectedLineItemTotal -= (expectedLineItemTotal * promotion) / 100;
      }

      expectedLineItemTotal = parseFloat(expectedLineItemTotal.toFixed(2));

      if (actualLineItemTotal === expectedLineItemTotal) {
        console.log(
          `Success -> Line item total ${actualLineItemTotal} is matching with expected unit price * quantity - promo -> ${expectedLineItemTotal}`
        );
      } else {
        throw new Error(
          `Failure --> Line item total ${actualLineItemTotal} is NOT matching with expected unit price * quantity - promo -> ${expectedLineItemTotal}`
        );
      }

      if (orderType === 'Backorder') {
        await this.verifyBackOrder(prodName);
        await this.verifyBackorderTotals(prodName);
        cartPageValues.qtyBackorder += 1;
      }

      if (orderType === 'Preorder') {
        await this.verifyPreOrder(prodName);
        await this.verifyPreorderTotals(prodName);
      }

      return Number(expectedLineItemTotal);
    },

    // This function has to be called only after verify price totals as there are some dependencies on verifyCartSummary function
    async verifyTax(stateTaxRt, countyTaxRt) {
      let calculatedTax = 0;
      let stateTaxAmt = 0;
      let countyTaxAmt = 0;
      let shippingTax = 0;

      // to be used in checkout later
      cartPageValues.CartStateTaxRate = parseFloat(stateTaxRt).toFixed(2);
      cartPageValues.CartCountyTaxRate = parseFloat(countyTaxRt).toFixed(2);

      // if its flat promotion, then tax is based on subtotal else its calcualted on line item total and then added
      if (promotionType === 'flat') {
        stateTaxAmt = parseFloat(
          ((stateTaxRt * cartPageValues.calcRunningSubTotal) / 100).toFixed(2)
        );

        countyTaxAmt = parseFloat(
          ((countyTaxRt * cartPageValues.calcRunningSubTotal) / 100).toFixed(2)
        );
      }

      if (promotionType === '' || promotionType === 'percentage') {
        for (
          let index = 0;
          index < cartPageValues.noOfProductsInCart;
          index += 1
        ) {
          stateTaxAmt += parseFloat(
            (
              (stateTaxRt * cartPageValues.LineItemTotalArray[index]) /
              100
            ).toFixed(2)
          );

          countyTaxAmt += parseFloat(
            (
              (countyTaxRt * cartPageValues.LineItemTotalArray[index]) /
              100
            ).toFixed(2)
          );
        }
      }

      if (promotionType === 'Buy X Get Y') {
        for (
          let index = 0;
          index < cartPageValues.noOfProductsInCart - 1;
          index += 1
        ) {
          stateTaxAmt += parseFloat(
            (
              (stateTaxRt * cartPageValues.LineItemTotalArray[index]) /
              100
            ).toFixed(2)
          );

          countyTaxAmt += parseFloat(
            (
              (countyTaxRt * cartPageValues.LineItemTotalArray[index]) /
              100
            ).toFixed(2)
          );
        }
      }

      shippingTax = parseFloat(
        ((stateTaxRt * shippingEstimateTotal) / 100).toFixed(2)
      );

      shippingTax += parseFloat(
        ((countyTaxRt * shippingEstimateTotal) / 100).toFixed(2)
      );

      console.log(
        CONSOLE_COLORS.pink,
        'Actuals - Cart Tax -',
        cartPageValues.cartTaxTotal,
        'Shipping Estimate Total -',
        shippingEstimateTotal,
        '; Calculated - Cart SubTotal -',
        cartPageValues.calcRunningSubTotal,
        'State Tax - ',
        stateTaxAmt,
        'County Tax - ',
        countyTaxAmt,
        'Shipping Tax Total -',
        shippingTax
      );

      calculatedTax = stateTaxAmt + countyTaxAmt + shippingTax;
      calculatedTax = parseFloat(calculatedTax.toFixed(2));

      if (cartPageValues.cartTaxTotal === calculatedTax) {
        console.log(
          `Success -> Cart Tax ${cartPageValues.cartTaxTotal} is matching with expected tax ${calculatedTax}`
        );
      } else {
        await this.clickVisibleElement('@emptyCart');
        throw new Error(
          `Failure -> Cart Tax ${cartPageValues.cartTaxTotal} is NOT matching with expected tax ${calculatedTax}`
        );
      }
    },

    async addMultipleProductCart(data) {
      let productName = '';
      let selectTitle = '';

      for (let index = 0; index < data[0].length; index += 1) {
        if (
          data[2][index] === 'Normal Order' ||
          data[2][index] === 'Backorder'
        ) {
          selectTitle = 'Add to Cart';
        } else {
          selectTitle = 'Pre Order';
        }

        productName = {
          selector: `//h2[@class="product-name"]/a[@title='${data[1][index]}']//following::div[@class="actions clearer add-cart-wrapper"][1]/button[@title="${selectTitle}"]`,
          locateStrategy: 'xpath',
        };

        this.clickVisibleElement(productName);
        this.api.pause(1500);
      }

      // await this.api.pause(100);
      try {
        await this.clickVisibleElement('@ClosePopUpMsgCatPage');
        await this.api.pause(200);
      } catch (Error) {
        console.log('It was not easy to close the pop up but thats ok ... ');
        await this.api.pause(3000);
      }
    },

    async addtoCartLoadTest(noOfItems) {
      let noOfProducts = 0;
      let noOfItemsPerPage = 0;

      const selectNoPerPage = {
        selector: '//select[@name="per_page"]//option[last()]',
        locateStrategy: 'xpath',
      };

      const nextPage = {
        selector: '(//div[@class="pager"]//li[@class="next"]/a)[1]',
        locateStrategy: 'xpath',
      };

      addToCartValues.loadTestData.fill(0);
      addToCartValues.loadTestData.push([]);
      addToCartValues.loadTestData.push([]);
      addToCartValues.loadTestData.push([]);

      await this.clickVisibleElement(selectNoPerPage);

      await this.getText(selectNoPerPage, async (result) => {
        noOfItemsPerPage = Number(result.value);
        console.log('no of items per page is - ', noOfItemsPerPage);
      });

      for (let index = 1; index <= noOfItems; index += 1) {
        // if (Number.isInteger(index / noOfItemsPerPage)) {
        if (index === 99) {
          await this.api.execute('scrollTo(0,0)');
          await this.waitUntilVisibleElement(nextPage);
          await this.clickVisibleElement(nextPage);
          index = 1;
        }

        const addToCartButton = {
          selector: `(//span/span[contains(.,"Add to Cart")])[${index}]`,
          locateStrategy: 'xpath',
        };

        const productName = {
          selector: `(//div[@class="module-category-product-listing" and descendant::span[contains(.,"Add to Cart")]]//h2[@class="product-name"])[${index}]`,
          locateStrategy: 'xpath',
        };

        await this.getText(productName, async (result) => {
          addToCartValues.loadTestData[0][noOfProducts] = 'Product Name';
          addToCartValues.loadTestData[1][noOfProducts] = result.value;
          addToCartValues.loadTestData[2][noOfProducts] = 'Normal Order';
        });

        noOfProducts += 1;

        await this.clickVisibleElement(addToCartButton);
        await this.api.pause(200);
      }
    },

    async AddCommentToProduct() {
      await this.clickVisibleElement('@customComment');
      await this.api.pause(200);
      await this.setField('@customComment', 'XMECOM-6202');
      await this.api.pause(200);
    },

    async clearAllCartBeforeSearch() {
      const Sage300CartIcon = '//i[@class="fa fa-shopping-cart"]';
      const btnCartNotEmpty = `//a[@class="btn-remove btn-remove2" and @title="Remove All Items"]`;

      await this.api.element('xpath', Sage300CartIcon, (visible) => {
        if (visible.status !== -1) {
          this.waitUntilVisibleElement('@cartIconSage300');
          this.clickVisibleElement('@cartIconSage300');
        } else {
          this.waitUntilVisibleElement('@cartIconX3');
          this.clickVisibleElement('@cartIconX3');
        }
      });

      await this.api.pause(5000);

      await this.api.element('xpath', btnCartNotEmpty, (visible) => {
        if (visible.status !== -1) {
          this.clickVisibleElement('@emptyCart');
          console.log('Cart is cleared now');
          this.api.pause(2000);
        } else {
          console.log('Cart is already Empty');
        }
      });
    },
  },
];

module.exports = {
  elements,
  commands,
};
