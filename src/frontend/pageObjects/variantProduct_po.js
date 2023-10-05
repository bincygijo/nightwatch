const { CONSOLE_COLORS } = require('../../helper/constants/constants');

const elements = {
  pageTitle: '.page-title',
  searchBox: 'input.form-control.form-filter.input-sm',
  editButton: 'a.btn.btn-xs.green-stripe.default',
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
  description: 'input[name="desc"]',
  itemCode: 'input[name="item_code"]',
  toaster: '#toast-container',
  toasterMessage: '.toast-message',
  optionContainer: '#select2-new_option-container',
  searchProduct: 'input[name="columns[0][search][value]"]',
  variantDesc: 'input[name="variants_desc"]',
  addVariantButton: '.btn.green.export',
  optionSearch: {
    selector: '//span[@id="select2-new_option-container"]//following::input',
    locateStrategy: 'xpath',
  },
  closeToastMessage: {
    selector:
      '//div[@id="toast-container"]//button[@class="toast-close-button"]',
    locateStrategy: 'xpath',
  },
  generalSettings: {
    selector: '//div/h3[text()="General Settings"]',
    locateStrategy: 'xpath',
  },
  variantsTab: {
    selector: '//a[text()="Variants"]',
    locateStrategy: 'xpath',
  },
  addOptionButton: {
    selector: '//button[@id="new-option-submit"]',
    locateStrategy: 'xpath',
  },
  linkToVariant: {
    selector:
      '//table[@id="linkItemsDatatable"]/tbody/tr/td/a//following::td/a',
    locateStrategy: 'xpath',
  },
  selectContainer: {
    selector: '//table[@id="variantDatatable"]/tbody/tr/td/a//following::td[1]',
    locateStrategy: 'xpath',
  },
  searchOption: {
    selector: '//span[@class="select2-search select2-search--dropdown"]/input',
    locateStrategy: 'xpath',
  },
  searchOptionResult: {
    selector: '//span[@class="select2-results"]/ul/li[1]',
    locateStrategy: 'xpath',
  },
  saveButton: {
    selector: '//table[@id="variantDatatable"]/tbody/tr/td[3]/span/a[1]',
    locateStrategy: 'xpath',
  },
  priceItem: {
    selector: '//label[contains(.,"Price Itemno")]//following::div[1]/select',
    locateStrategy: 'xpath',
  },
  selectPriceItem: {
    selector:
      '//label[text()="Price Itemno"]//following::div[1]/select/option[3]',
    locateStrategy: 'xpath',
  },
  deleteButton: {
    selector:
      '//table/tbody/tr/td[text()="automationvariant"]//following::a[2]',
    locateStrategy: 'xpath',
  },
  okButton: {
    selector: '//button[text()="OK"]',
    locateStrategy: 'xpath',
  },
  generalTab: {
    selector: '//li/a[text()="General"]',
    locateStrategy: 'xpath',
  },
  buttonSave: {
    selector: '//button[@name="submit_details"]',
    locateStrategy: 'xpath',
  },
  searchVarantProduct: {
    selector: '//input[@name="variants_desc"]',
    locateStrategy: 'xpath',
  },
  deleteVariantP: {
    selector:
      '//table[@id="item_vaiations"]/tbody/tr/td[6]//a[contains(text(),"Delete")]',
    locateStrategy: 'xpath',
  },
  clickOKbutton: {
    selector: '//div[@class="modal-footer"]/button[2]',
    locateStrategy: 'xpath',
  },
  clickDashboard: {
    selector: '//span[text()="Dashboard"]',
    locateStrategy: 'xpath',
  },
  clickDropdown: {
    selector:
      '//div[@id="product-options-wrapper"]//following::div[@class="input-box"]//span/b',
    locateStrategy: 'xpath',
  },
};

const commands = [
  {
    async clickApply() {
      await this.api.execute('scrollTo(1000,0)');
      await this.api.pause(1000);
      await this.clickVisibleElement('@applyButton');
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
    async enterVariantDetails(data) {
      await this.setField('@description', data[1][0]);
      await this.api.pause(1000);
      await this.setField('@itemCode', data[1][1]);
      await this.api.pause(1000);
    },

    async clickSave() {
      await this.api.pause(3000);
      await this.waitUntilVisibleElement('@buttonSave');
      await this.clickVisibleElement('@buttonSave');
    },

    async clickVariantTab() {
      await this.api.pause(5000);
      await this.clickVisibleElement('@variantsTab');
      await this.api.pause(5000);
    },
    async addOptionToVariant(option) {
      await this.clickVisibleElement('@optionContainer');
      await this.setField('@optionSearch', option);
      await this.api.pause(2000);
      await this.clickVisibleElement('@searchResult');
    },
    async clickAddOptionButton() {
      await this.clickVisibleElement('@addOptionButton');
      await this.api.pause(5000);
    },
    async searchProductVariant(pCode) {
      await this.api.pause(2000);
      await this.waitUntilVisibleElement('@searchProduct');
      await this.api.pause(2000);
      await this.setField('@searchProduct', pCode);
    },
    async clickLinkItemVariant() {
      await this.clickVisibleElement('@linkToVariant');
      await this.api.pause(5000);
    },
    async searchVariantOption(cCode) {
      await this.clickVisibleElement('@selectContainer');
      await this.setField('@searchOption', cCode);
      await this.clickVisibleElement('@searchOptionResult');
    },
    async clickSaveButton() {
      await this.clickVisibleElement('@saveButton');
      await this.api.pause(5000);
    },
    async addPriceItem(ItemNo) {
      await this.api.pause(3000);
      const clickPriceItem = {
        selector: `//label[contains(.,"Price Itemno")]//following::div[1]/select/option[@value="${ItemNo}"]`,
        locateStrategy: 'xpath',
      };
      await this.api.pause(3000);
      this.api.execute('scrollTo(0,900)');
      await this.clickVisibleElement('@priceItem');
      await this.api.pause(3000);
      await this.clickVisibleElement(clickPriceItem);
    },
    async searchVariantCode(vProduct) {
      await this.waitUntilVisibleElement('@variantDesc');
      await this.setField('@variantDesc', vProduct);
      await this.api.pause(3000);
    },
    async clickDeleteButton() {
      await this.clickVisibleElement('@deleteButton');
    },

    async clickOkButton() {
      await this.clickVisibleElement('@okButton');
    },
    async clickGeneralTab() {
      await this.api.pause(2000);
      await this.clickVisibleElement('@generalTab');
      await this.api.refresh();
    },
    async checkVariantProductExists(code) {
      const ProductCodeExists = `//table[@id="item_vaiations"]/tbody/tr/td[text()='${code[1][0]}']`;
      await this.api.pause(2000);
      await this.waitUntilVisibleElement('@searchVarantProduct');
      await this.api.pause(2000);
      await this.setField('@searchVarantProduct', code[1][0]);
      await this.api.pause(5000);
      await this.api.element('xpath', ProductCodeExists, (visible) => {
        if (visible.status !== -1) {
          console.log('Variant product already exists');
          this.clickVisibleElement('@deleteVariantP');
          this.api.pause(1000);
          this.clickVisibleElement('@clickOKbutton');
          this.api.pause(3000);
          this.clickVisibleElement('@addVariantButton');
          this.api.pause(3000);
        } else {
          console.log('Variant product does not exist');
          this.clickVisibleElement('@addVariantButton');
          this.api.pause(3000);
        }
      });
    },

    async AddProductsToVariant(data) {
      const productArray = data.raw();
      for (let index = 1; index <= data.rows().length; index += 1) {
        const clickVariantLink = {
          selector: `//table[@id="linkItemsDatatable"]/tbody/tr/td/a//following::td/a[@data-itemno="${productArray[index][0]}"]`,
          locateStrategy: 'xpath',
        };
        const clickVariantOptions = {
          selector: `//table[@id="variantDatatable"]/tbody/tr/td/a[contains(text(),"${productArray[index][0]}")]//following::td[1]`,
          locateStrategy: 'xpath',
        };

        const clickSaveButton = {
          selector: `//table[@id="variantDatatable"]/tbody/tr/td/a[contains(text(),"${productArray[index][0]}")]//following::td[2]/span/a[1]`,
          locateStrategy: 'xpath',
        };
        this.api.pause(2000);
        this.api.execute('scrollTo(0,500)');
        this.clickVisibleElement('@searchProduct');
        this.api.pause(1000);
        this.clearField('@searchProduct');
        this.setField('@searchProduct', productArray[index][0]);
        this.clickVisibleElement(clickVariantLink);
        this.api.pause(3000);
        this.clickVisibleElement(clickVariantOptions);
        this.clickVisibleElement('@searchOption');
        // this.clearField('@selectContainer');
        this.api.pause(1000);
        this.setField('@searchOption', productArray[index][1]);
        this.clickVisibleElement('@searchOptionResult');
        this.api.execute('scrollTo(0,250)');
        this.api.pause(1000);
        this.clickVisibleElement(clickSaveButton);
        this.api.pause(3000);
      }
    },

    async clickDashboardLink() {
      this.api.pause(1000);
      this.clickVisibleElement('@clickDashboard');
    },

    async clickVariantSwatches(swatches) {
      const clickSwatches = {
        selector: `//div[@class="swatches-con list"]/a[@title="${swatches}"]`,
        locateStrategy: 'xpath',
      };
      await this.api.pause(1000);
      await this.clickVisibleElement(clickSwatches);
      await this.api.pause(1000);
    },
    async clickVariantDropdown(dropdown) {
      const clickOption = {
        selector: `//div[@id="product-options-wrapper"]//following::div[@class="input-box"]/select/option[contains(.,"${dropdown}")]`,
        locateStrategy: 'xpath',
      };

      await this.api.pause(1000);

      if (dropdown === 'TestX3') {
        await this.clickVisibleElement('@clickDropdown');
      } else {
        await this.clickVisibleElement('@clickDropdown');
        await this.api.execute('scrollTo(0,550)');
      }

      await this.api.pause(1000);
      await this.clickVisibleElement(clickOption);
      await this.api.pause(1000);
    },

    async matrixOptionAddToVariant(data) {
      await this.clickVisibleElement('@optionContainer');
      await this.setField('@optionSearch', data[0][0]);
      await this.api.pause(2000);
      await this.clickVisibleElement('@searchResult');
      await this.clickVisibleElement('@addOptionButton');
      await this.api.pause(5000);
      await this.clickVisibleElement('@optionContainer');
      await this.setField('@optionSearch', data[0][1]);
      await this.api.pause(2000);
      await this.clickVisibleElement('@searchResult');
      await this.clickVisibleElement('@addOptionButton');
      await this.api.pause(5000);
    },

    async matrixProductsAddToVariant(data) {
      const productArray = data.raw();
      for (let index = 1; index <= data.rows().length; index += 1) {
        const clickVariantLink = {
          selector: `//table[@id="linkItemsDatatable"]/tbody/tr/td/a//following::td/a[@data-itemno="${productArray[index][0]}"]`,
          locateStrategy: 'xpath',
        };
        const clickMatriX = {
          selector: `//table[@id="variantDatatable"]/tbody/tr/td/a[contains(text(),"${productArray[index][0]}")]//following::td[1]`,
          locateStrategy: 'xpath',
        };

        const clickMatrixY = {
          selector: `//table[@id="variantDatatable"]/tbody/tr/td/a[contains(text(),"${productArray[index][0]}")]//following::td[2]`,
          locateStrategy: 'xpath',
        };
        const clickSaveButton = {
          selector: `//table[@id="variantDatatable"]/tbody/tr/td/a[contains(text(),"${productArray[index][0]}")]//following::td[3]/span/a[1]`,
          locateStrategy: 'xpath',
        };
        this.api.pause(2000);
        this.api.execute('scrollTo(0,500)');
        this.clickVisibleElement('@searchProduct');
        this.api.pause(1000);
        this.clearField('@searchProduct');
        this.setField('@searchProduct', productArray[index][0]);
        this.clickVisibleElement(clickVariantLink);
        this.api.pause(3000);
        this.clickVisibleElement(clickMatriX);
        this.clickVisibleElement('@searchOption');
        this.api.pause(1000);
        this.setField('@searchOption', productArray[index][1]);
        this.clickVisibleElement('@searchOptionResult');
        this.api.pause(3000);
        this.clickVisibleElement(clickMatrixY);
        this.clickVisibleElement('@searchOption');
        this.api.pause(1000);
        this.setField('@searchOption', productArray[index][2]);
        this.clickVisibleElement('@searchOptionResult');
        this.api.execute('scrollTo(0,250)');
        this.api.pause(1000);
        this.clickVisibleElement(clickSaveButton);
        this.api.pause(3000);
      }
    },

    async clickVariantMatrix(matrix) {
      const clickMatrix = {
        selector: `//table[contains(@class,"matrix-table")]//tbody/tr[2]/td[1]/b[contains(text(),"${matrix}")]//following::td[1]/input[@type="number"]`,
        locateStrategy: 'xpath',
      };
      this.clickVisibleElement(clickMatrix);
      this.api.pause(1000);
      this.setField(clickMatrix, '1');
      this.api.pause(1000);
    },
  },
];

module.exports = {
  elements,
  commands,
};
