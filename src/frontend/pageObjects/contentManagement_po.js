const { client } = require('nightwatch-api');
const {
  columnSize,
  CONSOLE_COLORS,
} = require('../../helper/constants/constants');

const elements = {
  pageTitle: '.page-title',
  searchBox: '#contents-search',
  toasterMessage: '.toast-message',
  closeToastMessage: {
    selector:
      '//div[@id="toast-container"]//button[@class="toast-close-button"]',
    locateStrategy: 'xpath',
  },
  deleteButton: '.btn.submit',
  modelTitle: '.modal-title',
  defaultTitle: {
    selector: '//ul[@class="page-breadcrumb breadcrumb"]/li[2]/a',
    locateStrategy: 'xpath',
  },
  editButton: {
    selector:
      '//a[text()="Automation"]//following::div[@class="custom-actions"]/a/i',
    locateStrategy: 'xpath',
  },
  editContent: {
    selector: '//a[text()="Edit Custom Page"]',
    locateStrategy: 'xpath',
  },
  addContainerButton: {
    selector: '//button[@class="row-action btn btn-default btn-sm "]',
    locateStrategy: 'xpath',
  },
  deleteRowButton: {
    selector: '//button[contains(.,"Delete")]',
    locateStrategy: 'xpath',
  },
  addNewColumnButton: {
    selector: '//button[contains(.,"New Column")]',
    locateStrategy: 'xpath',
  },
  addNewColumnButtonCategory: {
    selector: '//div[@id="nav-grid"]//button[contains(.,"New Column")]',
    locateStrategy: 'xpath',
  },
  selectColumnSize: {
    selector:
      '//form[@id="modal-form"]/div[@class="modal-body"]/div/div[1]/label//following::div[1]',
    locateStrategy: 'xpath',
  },
  searchColumnSize: {
    selector: '//input[@class="select2-search__field"]',
    locateStrategy: 'xpath',
  },
  applyButton: {
    selector: '//input[@class="btn blue submit"]',
    locateStrategy: 'xpath',
  },
  clickSelectedSize: {
    selector: '//select[@name="col_class"]/option[@value="6"]',
    locateStrategy: 'xpath',
  },
  clickUserAccountBtn: {
    selector: '//a[text()="User Account"]//following::div[1]',
    locateStrategy: 'xpath',
  },
  clickContainerBtn: {
    selector:
      '//div[@data-content-type!="category"]//button[@class="row-action btn btn-default btn-sm "]',
    locateStrategy: 'xpath',
  },
  clickEditCont: {
    selector:
      '//h4[contains(.,"Content Module")]/a[@data-content-action="edit"]',
    locateStrategy: 'xpath',
  },
  clickContent: {
    selector:
      '//form[@id="modal-form"]/div[@class="modal-header"]/h4/div[@class="pull-right"]',
    locateStrategy: 'xpath',
  },
  clickAccountMenu: {
    selector: '//select[@name="content_type"]/option[@value="account_menu"]',
    locateStrategy: 'xpath',
  },
  clickApply: {
    selector: '//button[text()="Apply"]',
    locateStrategy: 'xpath',
  },
  modalApply: {
    selector:
      '//form[@id="modal-form"]/div[@class="modal-footer"]/input[@value="Apply"]',
    locateStrategy: 'xpath',
  },
  accountLink: {
    selector: '//ul[@class="links"]/li[3]/a',
    locateStrategy: 'xpath',
  },
  accountLinkX3: {
    selector: '(//ul[@class="links"])[2]/li[3]/a',
    locateStrategy: 'xpath',
  },

  orderAccount: {
    selector:
      '//div[@class="block-content"]/ul/li[@class="my-account-account_menu_orders current "]',
    locateStrategy: 'xpath',
  },
  clickDelete: {
    selector:
      '//div[contains(@class,"btn-group btn-group-sm")]//button[contains(.,"Delete")]',
    locateStrategy: 'xpath',
  },
  clickDeleteCategory: {
    selector:
      '//div[@class="tab-pane active"]//div[contains(@class,"btn-group btn-group-sm")]//button[contains(.,"Delete")]',
    locateStrategy: 'xpath',
  },
  deleteContainerPop: {
    selector: '//div[@class="modal-footer"]/button[2]',
    locateStrategy: 'xpath',
  },
  titlePop: {
    selector: '//div[@class="modal-footer"]/button[2]',
    locateStrategy: 'xpath',
  },
  actionsBtn: {
    selector: '//div[@class="btn-group"]/a',
    locateStrategy: 'xpath',
  },
  editColumn: {
    selector: '//ul[@class="dropdown-menu pull-right"]/li[1]',
    locateStrategy: 'xpath',
  },
  columnTitle: {
    selector: '//form[@id="modal-form"]//input[@name="col_title"]',
    locateStrategy: 'xpath',
  },
  productColumnSize: {
    selector:
      '//form[@id="modal-form"]/div[@class="modal-body"]//label[text()="Column Size"]//following::div[1]',
    locateStrategy: 'xpath',
  },
  clickColumnType: {
    selector:
      '//form[@id="modal-form"]/div[@class="modal-body"]//label[text()="Column Type"]//following::div[@class="col-md-7"]',
    locateStrategy: 'xpath',
  },
  clcikAvailableColumn: {
    selector: '//label[text()="Available column Size"]//following::select[1]',
    locateStrategy: 'xpath',
  },
  newColumnApplyBtn: {
    selector:
      '//form[@id="modal-form"]/div[@class="modal-footer"]/input[@value="Apply"]',
    locateStrategy: 'xpath',
  },
  editProductDetails: {
    selector: '//h4[contains(text(),"Product details Module")]/a',
    locateStrategy: 'xpath',
  },
  showTitle: {
    selector:
      '//form[@id="modal-form"]//div[@class="form-body"]/table/tbody//tr/td[contains(.,"Title")]//following::div[contains(@class,"bootstrap-switch-off")][1]',
    locateStrategy: 'xpath',
  },
  showSecondaryDesc: {
    selector:
      '//form[@id="modal-form"]//div[@class="form-body"]/table/tbody//tr/td[contains(.,"Secondary")]//following::div[contains(@class,"bootstrap-switch-off")][1]',
    locateStrategy: 'xpath',
  },
  showQtyInputField: {
    selector:
      '//form[@id="modal-form"]//div[@class="form-body"]/table/tbody//tr/td[contains(.,"Quantity Input Field")]//following::div[contains(@class,"bootstrap-switch-off")][1]',
    locateStrategy: 'xpath',
  },

  showUomTitle: {
    selector:
      '//form[@id="modal-form"]//div[@class="form-body"]/table/tbody//tr/td[contains(.,"UoM Text")]//following::div[contains(@class,"bootstrap-switch-off")][1]',
    locateStrategy: 'xpath',
  },
  showAddToCart: {
    selector:
      '//form[@id="modal-form"]//div[@class="form-body"]/table/tbody//tr/td[contains(.,"Add To Cart")]//following::div[contains(@class,"bootstrap-switch-off")][1]',
    locateStrategy: 'xpath',
  },
  showQtyInCart: {
    selector:
      '//form[@id="modal-form"]//div[@class="form-body"]/table/tbody//tr/td[contains(.,"Quantity in Cart")]//following::div[contains(@class,"bootstrap-switch-off")][1]',
    locateStrategy: 'xpath',
  },

  showStockStatus: {
    selector:
      '//form[@id="modal-form"]//div[@class="form-body"]/table/tbody//tr/td[contains(.,"Stock Status")]//following::div[contains(@class,"bootstrap-switch-off")][1]',
    locateStrategy: 'xpath',
  },
  showPrice: {
    selector:
      '//form[@id="modal-form"]//div[@class="form-body"]/table/tbody//tr/td[contains(.,"Price Section")]//following::div[contains(@class,"bootstrap-switch-off")][1]',
    locateStrategy: 'xpath',
  },
  productImg: {
    selector: '//span[contains(.,"Image Title")]',
    locateStrategy: 'xpath',
  },
  productName: {
    selector: '//div[@class="product-name"]/h1',
    locateStrategy: 'xpath',
  },
  productStockStatus: {
    selector: '//span[contains(@class,"stock-in-text")]',
    locateStrategy: 'xpath',
  },
  productPrice: {
    selector: '//span[@id="regular-price"]',
    locateStrategy: 'xpath',
  },
  productAddToCart: {
    selector: '//span[text()="Add to Cart"]',
    locateStrategy: 'xpath',
  },
  showLegacyHeader: {
    selector:
      '//div[@class="form-body"]//following::label[@class="bootstrap-switch-label"]',
    locateStrategy: 'xpath',
  },
  LegacyHeader: {
    selector:
      '//div[@class="form-body"]//following::div[contains(@class,"bootstrap-switch-off")]',
    locateStrategy: 'xpath',
  },
  applyEditDefaultPageBtn: {
    selector: '//div[@class="pull-right"]//input[@value="Apply"]',
    locateStrategy: 'xpath',
  },
  categoryName: {
    selector: '//ul[@id="nav"]//li/a/span[contains(.,"Standard Products")]',
    locateStrategy: 'xpath',
  },
  adminBtn: {
    selector: '//li/a[contains(.,"Admin")]',
    locateStrategy: 'xpath',
  },
  contentP: {
    selector: '//a[text()="Header"]//following::div[1]',
    locateStrategy: 'xpath',
  },
  X3adminBtn: {
    selector: '(//li/a[contains(.,"Admin")])[3]',
    locateStrategy: 'xpath',
  },
  categoryTitleGrid: {
    selector: '//h1[contains(.,"Standard Products")]',
    locateStrategy: 'xpath',
  },
  displayGrid: {
    selector: '//div[@class="view-mode"]/label[text()="View as:"]',
    locateStrategy: 'xpath',
  },
  sortGrid: {
    selector: '//div[@class="sort-by"]/label[text()="Sort By"]',
    locateStrategy: 'xpath',
  },
  resultGrid: {
    selector: '//p[@class="amount amount-total"]',
    locateStrategy: 'xpath',
  },
  breadcrumbsGrid: {
    selector: '//ul[@id="breadcrumbs"]//li[1]/a/span',
    locateStrategy: 'xpath',
  },
  filterGrid: {
    selector: '//span[contains(.,"Filter Results")]',
    locateStrategy: 'xpath',
  },
  producrDescGrid: {
    selector: '//a[@title="Fluorescent Desk Lamp"]',
    locateStrategy: 'xpath',
  },
  priceGrid: {
    selector: '//span[@id="product-priceA11030"]/span',
    locateStrategy: 'xpath',
  },
  lineTab: {
    selector: '//form[@id="modal-form"]//div[@class="tabbable"]/ul/li[3]',
    locateStrategy: 'xpath',
  },
  EditBtn: {
    selector: '//a[text()="Category"]//following::div[1]',
    locateStrategy: 'xpath',
  },
  titleShoCart: {
    selector: '//form[@id="modal-form"]//input[@id="contents"]',
    locateStrategy: 'xpath',
  },
  textEntry: {
    selector: '//html/body[@contenteditable="true"]',
    locateStrategy: 'xpath',
  },
  shipmentTotal: {
    selector:
      '(//form[@id="modal-form"]//div[@class="form-body"]//following::tbody[1]/tr/td[contains(text(),"Shipment Total")])[1]//following::div[contains(@class,"bootstrap-switch-off")][1]',
    locateStrategy: 'xpath',
  },
  editCartSummary: {
    selector: '//h4[contains(text(),"Cart summary Module")]/a',
    locateStrategy: 'xpath',
  },
  cartSummaryActionBtn: {
    selector:
      '//div[@class=" portlet box blue-xm" and descendant::h4[contains(.,"Cart summary Module")]]//div[@class="btn-group"]/a',
    locateStrategy: 'xpath',
  },
  editColumCartSummary: {
    selector:
      '//div[@class=" portlet box blue-xm" and descendant::h4[contains(.,"Cart summary Module")]]//ul[@class="dropdown-menu pull-right"]/li[1]',
    locateStrategy: 'xpath',
  },
  clickPosition: {
    selector:
      '//form[@id="modal-form"]/div[@class="modal-body"]//label[text()="Positioning"]//following::div[1]',
    locateStrategy: 'xpath',
  },
  clickPositionSelected: {
    selector: '//select[@name="col_position"]/option[@value="right"]',
    locateStrategy: 'xpath',
  },
};

const commands = [
  {
    async verifyContentManagementPage() {
      await this.api.pause(3000);
      await this.waitUntilVisibleElement('@pageTitle');
      await this.getText('@pageTitle', async (result) => {
        const text = result.value;
        this.checkElementTextContains('@pageTitle', text);
        console.log('Success ->', `${text} page has been loaded successfully`);
      });
    },

    async searchPage(page) {
      await this.waitUntilVisibleElement('@pageTitle');
      await this.waitUntilVisibleElement('@searchBox');
      await this.setField('@searchBox', page);
    },

    async clickEditButton() {
      await this.waitUntilVisibleElement('@editButton');
      await this.clickVisibleElement('@editButton');
    },

    async verifyEditContentPage() {
      await this.waitUntilVisibleElement('@editContent');
      await this.getText('@editContent', async (result) => {
        const editPage = result.value;
        this.checkElementTextContains('@editContent', editPage);
        console.log('Success ->', `${editPage} has been loaded successfully`);
      });
    },

    async clickAddContainerButton() {
      const Sage300CustomPageDeleteBtn = '//button[contains(.,"Delete")]';
      await this.api.pause(1000);
      await this.api.element(
        'xpath',
        Sage300CustomPageDeleteBtn,
        async (visible) => {
          if (visible.status !== -1) {
            this.clickVisibleElement('@deleteRowButton');
            this.api.pause(3000);
            this.clickVisibleElement('@deleteButton');
            this.clickVisibleElement('@closeToastMessage');
            this.api.pause(1000);
            this.waitUntilVisibleElement('@addContainerButton');
            this.clickVisibleElement('@addContainerButton');
          } else {
            this.waitUntilVisibleElement('@addContainerButton');
            this.clickVisibleElement('@addContainerButton');
            this.api.pause(2000);
          }
        }
      );
    },

    async clickAddContainer() {
      const Sage300DeleteBtn =
        '//div[@class="btn-group btn-group-sm"]//button[contains(.,"Delete")]';

      await this.api.element('xpath', Sage300DeleteBtn, async (visible) => {
        if (visible.status !== -1) {
          this.api.execute('scrollTo(0,500)');
          this.clickVisibleElement('@clickDelete');
          this.api.pause(2000);
          this.clickVisibleElement('@deleteContainerPop');
          this.clickVisibleElement('@closeToastMessage');
          this.api.pause(1000);
          this.api.execute('scrollTo(0,500)');
          this.waitUntilVisibleElement('@clickContainerBtn');
          this.clickVisibleElement('@clickContainerBtn');
        } else {
          this.api.pause(2000);
          this.api.execute('scrollTo(0,500)');
          this.waitUntilVisibleElement('@clickContainerBtn');
          this.clickVisibleElement('@clickContainerBtn');
          this.api.pause(2000);
        }
      });
    },

    async clickAddNewColumnButton() {
      await this.api.pause(2000);
      await this.api.execute('scrollTo(0,300)');
      await this.waitUntilVisibleElement('@addNewColumnButton');
      await this.clickVisibleElement('@addNewColumnButton');
    },

    async deleteColumn(moduleType) {
      const ActionBtn = {
        selector: `//div[@id="tab_mega"]//div[contains(@class,'blue-xm') and descendant::h4[contains(.,'${moduleType}')]]//div[@class="portlet-title"]//div[@class="actions"]//a[contains(.,'Actions')]`,
        locateStrategy: 'xpath',
      };

      const DeleteBtn = {
        selector: `//div[@id="tab_mega"]//div[contains(@class,'blue-xm') and descendant::h4[contains(.,'${moduleType}')]]//div[@class="portlet-title"]//div[@class="actions"]//ul//li/a[contains(.,'Delete Column')]`,
        locateStrategy: 'xpath',
      };

      await this.api.clickVisibleElement(ActionBtn);
      await this.waitUntilVisibleElement(DeleteBtn);
      await this.api.clickVisibleElement(DeleteBtn);
      await this.waitUntilVisibleElement('@deleteContainerPop');
      await this.clickVisibleElement('@deleteContainerPop');
      await this.api.pause(6000);
    },

    async clickAddNewColumnButtonCategory() {
      await this.api.pause(500);
      await this.api.execute('scrollTo(0,300)');
      await this.waitUntilVisibleElement('@addNewColumnButtonCategory');
      await this.api.pause(2000);
      await this.clickVisibleElement('@addNewColumnButtonCategory');
      await this.api.pause(4000);
      await this.waitUntilVisibleElement('@closeToastMessage');
      await this.clickVisibleElement('@closeToastMessage');
    },

    async verifyNewColumnPopWindow() {
      await this.waitUntilVisibleElement('@modelTitle');
      await this.getText('@modelTitle', async (result) => {
        const popupMessage = result.value;
        this.checkElementTextContains('@modelTitle', popupMessage);
        console.log('Success ->', `${popupMessage}`);
      });
    },

    async selectAvailableColumnSize() {
      await this.waitUntilVisibleElement('@selectColumnSize');
      await this.clickVisibleElement('@selectColumnSize');
      await this.api.pause(200);
    },

    async searchAvailableColumnSize() {
      await this.waitUntilVisibleElement('@searchColumnSize');
      await this.clickVisibleElement('@searchColumnSize');
      await this.setField('@searchColumnSize', columnSize.searchColumnSize);
      await this.waitUntilVisibleElement('@clickSelectedSize');
      await this.clickVisibleElement('@clickSelectedSize');
      await this.api.pause(200);
    },

    async clickApplyButton() {
      await this.waitUntilVisibleElement('@applyButton');
      await this.clickVisibleElement('@applyButton');
      await this.api.pause(3000);
    },

    async verifyGridMsg(msg) {
      await this.api.pause(1000);
      await this.waitUntilVisibleElement('@toasterMessage');
      await this.getText('@toasterMessage', async (result) => {
        this.checkElementTextContains('@toasterMessage', msg);
        console.log('Success ->', `${result.value}`);
      });
      await this.waitUntilVisibleElement('@closeToastMessage');
      await this.clickVisibleElement('@closeToastMessage');
      await this.api.pause(1500);
    },

    async verifyAction() {
      await this.waitUntilVisibleElement('@toasterMessage');
      await this.getText('@toasterMessage', async (result) => {
        const addColumnMessage = result.value;
        this.checkElementTextContains('@toasterMessage', addColumnMessage);
        console.log('Success ->', `${addColumnMessage}`);
      });
      await this.waitUntilVisibleElement('@closeToastMessage');
      await this.clickVisibleElement('@closeToastMessage');

      await this.api.refresh();
      await this.api.pause(1000);
    },

    async verifyProductDetailsSettings(msg) {
      await this.checkElementTextContains('@toasterMessage', msg);
      await this.clickVisibleElement('@toasterMessage');
    },

    async clickDeleteRow() {
      await this.waitUntilVisibleElement('@deleteRowButton');
      await this.clickVisibleElement('@deleteRowButton');
    },

    async clickDeleteConfirmation() {
      await this.waitUntilVisibleElement('@deleteButton');
      await this.clickVisibleElement('@deleteButton');
    },

    async verifyDealerManagementPage() {
      await this.waitUntilVisibleElement('@defaultTitle');
      await this.getText('@defaultTitle', async (result) => {
        const text = result.value;
        this.checkElementTextContains('@defaultTitle', text);
        console.log('Success ->', `${text} page has been loaded successfully`);
      });
    },

    async clickEditPages(pages) {
      const contentPage = {
        selector: `//a[text()='${pages}']//following::div[1]`,
        locateStrategy: 'xpath',
      };
      await this.api.pause(5000);
      await this.clickVisibleElement(contentPage);
    },

    async clickContainer() {
      const Sage300DeleteBtn =
        '//div[@class="btn-group btn-group-sm"]//button[contains(.,"Delete")]';
      await this.api.element('xpath', Sage300DeleteBtn, async (visible) => {
        if (visible.status !== -1) {
          this.api.execute('scrollTo(0,500)');
          this.clickVisibleElement('@clickDelete');
          this.waitUntilVisibleElement('@deleteContainerPop');
          this.clickVisibleElement('@deleteContainerPop');
          this.clickVisibleElement('@closeToastMessage');
          this.api.pause(1000);
          this.api.execute('scrollTo(200,100)');
          this.waitUntilVisibleElement('@clickContainerBtn');
          this.clickVisibleElement('@clickContainerBtn');
        } else {
          this.api.execute('scrollTo(200,100)');
          this.waitUntilVisibleElement('@clickContainerBtn');
          this.clickVisibleElement('@clickContainerBtn');
          this.api.pause(2000);
        }
      });
    },

    async clickContainerCategory() {
      const existingContainer =
        '//div[@id = "nav-grid"]//div[@class="portlet-title"]//div[contains(@class,"btn-group btn-group-sm")]//button[contains(.,"Delete")]';
      await this.api.element('xpath', existingContainer, async (visible) => {
        if (visible.status !== -1) {
          this.api.execute('scrollTo(0,500)');
          this.clickVisibleElement('@clickDeleteCategory');
          this.api.pause(1000);
          this.waitUntilVisibleElement('@deleteContainerPop');
          this.clickVisibleElement('@deleteContainerPop');
          this.clickVisibleElement('@closeToastMessage');
          this.api.pause(1000);
          this.api.execute('scrollTo(200,100)');
          this.waitUntilVisibleElement('@clickContainerBtn');
          this.clickVisibleElement('@clickContainerBtn');
        } else {
          this.api.execute('scrollTo(200,100)');
          this.waitUntilVisibleElement('@clickContainerBtn');
          this.clickVisibleElement('@clickContainerBtn');
          this.api.pause(2000);
        }
      });
    },

    async clickEditContent() {
      await this.waitUntilVisibleElement('@clickEditCont');
      await this.clickVisibleElement('@clickEditCont');
      await this.api.pause(2000);
    },
    async selectContentFromList(contentType) {
      await this.api.pause(3000);
      await this.clickVisibleElement('@clickContent');
      await this.api.pause(1000);
      await this.waitUntilVisibleElement('@searchColumnSize');
      await this.setField('@searchColumnSize', contentType);
      await client.keys([client.Keys.ENTER]);
      await this.api.pause(2000);
    },

    async selectContentTypeColumn(size, Type) {
      await this.api.pause(3000);
      await this.clickVisibleElement('@selectColumnSize');
      await this.waitUntilVisibleElement('@searchColumnSize');
      await this.clickVisibleElement('@searchColumnSize');
      await this.setField('@searchColumnSize', size);
      await this.api.pause(200);
      await client.keys([client.Keys.ENTER]);
      await this.api.pause(2000);
      await this.waitUntilVisibleElement('@clickColumnType');
      await this.clickVisibleElement('@clickColumnType');
      await this.waitUntilVisibleElement('@searchColumnSize');
      await this.setField('@searchColumnSize', Type);
      await this.api.pause(200);
      await client.keys([client.Keys.ENTER]);
      await this.api.pause(200);
      await this.clickVisibleElement('@newColumnApplyBtn');
      await this.api.pause(1000);
    },

    async clickApplyButtons() {
      await this.api.pause(2000);
      await this.clickVisibleElement('@clickApply');
      await this.api.pause(3000);
      await this.clickVisibleElement('@modalApply');
    },

    async closePopup() {
      await this.waitUntilVisibleElement('@closeToastMessage');
      await this.clickVisibleElement('@closeToastMessage');
    },

    async clickAccountMenu() {
      const accountLinkX3 = '(//ul[@class="links"])[2]/li[3]/a';

      await this.api.element('xpath', accountLinkX3, (visible) => {
        if (visible.status !== -1) {
          this.clickVisibleElement('@accountLinkX3');
          console.log(CONSOLE_COLORS.pink, 'Account Link');
        } else {
          this.clickVisibleElement('@accountLink');
          console.log(CONSOLE_COLORS.pink, 'Account Link');
        }
      });
    },

    async verifyAccountGridHomePage() {
      await this.waitUntilVisibleElement('@orderAccount');
      await this.getText('@orderAccount', async (result) => {
        const text = result.value;
        this.checkElementTextContains('@orderAccount', text);
        console.log('Success ->', `${text} page has been loaded successfully`);
      });
    },

    async clickDeleteContainer() {
      await this.api.pause(1000);
      await this.waitUntilVisibleElement('@clickDelete');
      await this.clickVisibleElement('@clickDelete');
    },

    async clickDeletePoP() {
      await this.waitUntilVisibleElement('@deleteContainerPop');
      await this.clickVisibleElement('@deleteContainerPop');
    },
    async clickActionBtn() {
      await this.api.pause(1000);
      await this.clickVisibleElement('@actionsBtn');
      await this.api.pause(1000);
      await this.clickVisibleElement('@editColumn');
    },
    async EnterColumnSettingDetails() {
      await this.clickVisibleElement('@columnTitle');
      await this.setField('@columnTitle', 'Image Title');
      await this.api.pause(1000);
      await this.clickVisibleElement('@productColumnSize');
      await this.waitUntilVisibleElement('@searchColumnSize');
      await this.setField('@searchColumnSize', columnSize.searchColumnSize);
      await this.waitUntilVisibleElement('@clickSelectedSize');
      await this.clickVisibleElement('@clickSelectedSize');
      await this.waitUntilVisibleElement('@modalApply');
      await this.clickVisibleElement('@modalApply');
    },
    async clickEditProductDetails(module) {
      const moduleType = {
        selector: `//h4[contains(text(),'${module}')]/a`,
        locateStrategy: 'xpath',
      };
      await this.api.pause(3000);
      await this.waitUntilVisibleElement(moduleType);
      await this.clickVisibleElement(moduleType);
      await this.api.pause(5000);
    },

    async clickEditProductDetailsCategory(module) {
      const moduleType = {
        selector: `//h4[@class="clearfix" and contains(text(),'${module}')]/a`,
        locateStrategy: 'xpath',
      };
      await this.waitUntilVisibleElement(moduleType);
      await this.clickVisibleElement(moduleType);
      await this.api.pause(3000);
    },

    async clickTitleSection(display) {
      const btnEnableTitle = `//form[@id="modal-form"]//div[@class="form-body"]/table/tbody//tr/td[contains(.,'Title')]//following::div[contains(@class,'bootstrap-switch-${display}')][1]`;
      await this.api.element('xpath', btnEnableTitle, (visible) => {
        if (visible.status !== -1) {
          console.log(`Enable Title button is already ${display}`);
        } else {
          this.clickVisibleElement('@showTitle');
          this.api.pause(200);
        }
      });
    },

    async clickSecondaryDesc(display) {
      const btnEnableDesc = `//form[@id="modal-form"]//div[@class="form-body"]/table/tbody//tr/td[contains(.,'Secondary')]//following::div[contains(@class,'bootstrap-switch-${display}')][1]`;
      await this.api.element('xpath', btnEnableDesc, (visible) => {
        if (visible.status !== -1) {
          console.log(`Enable Description button is already ${display}`);
        } else {
          this.clickVisibleElement('@showSecondaryDesc');
          this.api.pause(200);
        }
      });
    },
    async clickQuantityInput(display) {
      const btnEnableQty = `//form[@id="modal-form"]//div[@class="form-body"]/table/tbody//tr/td[contains(.,'Quantity Input Field')]//following::div[contains(@class,'bootstrap-switch-${display}')][1]`;
      await this.api.element('xpath', btnEnableQty, (visible) => {
        if (visible.status !== -1) {
          console.log(`Enable Quantity Input button is already ${display}`);
        } else {
          this.clickVisibleElement('@showQtyInputField');
          this.api.pause(200);
        }
      });
    },
    async clickUomText(display) {
      const btnEnableUom = `//form[@id="modal-form"]//div[@class="form-body"]/table/tbody//tr/td[contains(.,'UoM Text')]//following::div[contains(@class,'bootstrap-switch-${display}')][1]`;
      await this.api.element('xpath', btnEnableUom, (visible) => {
        if (visible.status !== -1) {
          console.log(`Enable Uom Text button is already ${display}`);
        } else {
          this.clickVisibleElement('@showUomTitle');
          this.api.pause(200);
        }
      });
    },

    async clickAddToCart(display) {
      const btnEnableAddToCart = `//form[@id="modal-form"]//div[@class="form-body"]/table/tbody//tr/td[contains(.,'Add To Cart')]//following::div[contains(@class,'bootstrap-switch-${display}')][1]`;
      await this.api.element('xpath', btnEnableAddToCart, (visible) => {
        if (visible.status !== -1) {
          console.log(`Enable Add to cart button is already ${display}`);
        } else {
          this.clickVisibleElement('@showAddToCart');
          this.api.pause(200);
        }
      });
    },
    async clickQtyInCart(display) {
      const btnEnableQtyCart = `//form[@id="modal-form"]//div[@class="form-body"]/table/tbody//tr/td[contains(.,'Quantity in Cart')]//following::div[contains(@class,'bootstrap-switch-${display}')][1]`;
      await this.api.element('xpath', btnEnableQtyCart, (visible) => {
        if (visible.status !== -1) {
          console.log(`Enable Quantity in Cart button is already ${display}`);
        } else {
          this.clickVisibleElement('@showQtyInCart');
          this.api.pause(200);
        }
      });
    },

    async clickStockStatus(display) {
      const btnEnableStock = `//form[@id="modal-form"]//div[@class="form-body"]/table/tbody//tr/td[contains(.,'Stock Status')]//following::div[contains(@class,'bootstrap-switch-${display}')][1]`;
      await this.api.element('xpath', btnEnableStock, (visible) => {
        if (visible.status !== -1) {
          console.log(`Enable Stock Status button is already ${display}`);
        } else {
          this.clickVisibleElement('@showStockStatus');
          this.api.pause(200);
        }
      });
    },
    async clickPriceSection(display) {
      const btnEnablePrice = `//form[@id="modal-form"]//div[@class="form-body"]/table/tbody//tr/td[contains(.,'Price Section')]//following::div[contains(@class,'bootstrap-switch-${display}')][1]`;
      await this.api.element('xpath', btnEnablePrice, (visible) => {
        if (visible.status !== -1) {
          console.log(`Enable Price button is already ${display}`);
        } else {
          this.clickVisibleElement('@showPrice');
          this.api.pause(200);
        }
      });
    },

    async clickModelPopUpApplyBtn() {
      await this.clickVisibleElement('@modalApply');
      await this.waitUntilVisibleElement('@closeToastMessage');
      await this.clickVisibleElement('@closeToastMessage');
    },

    async verifyProductImageGrid() {
      await this.api.pause(1000);
      await this.waitUntilVisibleElement('@productImg');
      await this.getText('@productImg', async (result) => {
        const pImageTitle = result.value;
        this.checkElementTextContains('@productImg', pImageTitle);
        console.log(
          'Success -> Product',
          `${pImageTitle} verified successfully`
        );
      });
    },

    async verifyProductTitle() {
      await this.waitUntilVisibleElement('@productName');
      await this.getText('@productName', async (result) => {
        const pName = result.value;
        this.checkElementTextContains('@productName', pName);
        console.log(
          'Success -> Product Title',
          `${pName} verified successfully`
        );
      });
    },
    async verifyProductStockStatus() {
      await this.waitUntilVisibleElement('@productStockStatus');
      await this.getText('@productStockStatus', async (result) => {
        const pStock = result.value;
        this.checkElementTextContains('@productStockStatus', pStock);
        console.log(
          'Success -> Product Status',
          `${pStock} verified successfully`
        );
      });
    },
    async verifyProductPrice() {
      await this.waitUntilVisibleElement('@productPrice');
      await this.getText('@productPrice', async (result) => {
        const pPrice = result.value;
        this.checkElementTextContains('@productPrice', pPrice);
        console.log(
          'Success -> Product Price',
          `${pPrice} verified successfully`
        );
      });
    },

    async verifyProductAddToCartBtn() {
      await this.waitUntilVisibleElement('@productAddToCart');
      await this.getText('@productAddToCart', async (result) => {
        const addToCart = result.value;
        this.checkElementTextContains('@productAddToCart', addToCart);
        console.log(
          'Success -> Product',
          `${addToCart} button verified successfully`
        );
      });
    },

    async clickEnablelegacyHeader(display) {
      const btnEnablelegacyHeader = `//div[@class="form-body"]//following::div[contains(@class,'bootstrap-switch-${display}')]`;
      await this.api.element('xpath', btnEnablelegacyHeader, (visible) => {
        if (visible.status !== -1) {
          this.api.pause(6000);
          this.clickVisibleElement('@LegacyHeader');
          this.api.pause(2000);
          this.api.execute('scrollTo(0,0)');
          this.clickVisibleElement('@applyEditDefaultPageBtn');
          this.api.pause(1000);
        } else {
          this.clickVisibleElement('@showLegacyHeader');
          this.api.pause(500);
          this.api.execute('scrollTo(0,0)');
          this.clickVisibleElement('@applyEditDefaultPageBtn');
          this.api.pause(1000);
        }
      });
    },

    async verifyCategoryGrid() {
      await this.api.pause(2000);
      await this.waitUntilVisibleElement('@categoryName');
      await this.getText('@categoryName', async (result) => {
        const categoryN = result.value;
        this.checkElementTextContains('@categoryName', categoryN);
        console.log(
          'Success -> Category Name',
          `${categoryN} verified successfully`
        );
      });
    },

    async clickAdminMenu() {
      const X3AdminGrid = '(//li/a[contains(.,"Admin")])[3]';

      await this.api.element('xpath', X3AdminGrid, (visible) => {
        if (visible.status !== -1) {
          this.clickVisibleElement('@X3adminBtn');
          this.api.pause(500);
        } else {
          this.api.pause(500);
          this.clickVisibleElement('@adminBtn');
        }
      });
    },

    async clickEditContentPage() {
      await this.api.pause(500);
      await this.clickVisibleElement('@contentP');
    },

    async clicktabLine() {
      await this.api.pause(500);
      await this.clickVisibleElement('@lineTab');
      await this.api.pause(1000);
    },
    async disableProductTab(tabType, display) {
      const productTab = `//form[@id="modal-form"]//div[@class="form-body"]/h3[text()="Line"]//following::tbody[1]/tr/td[contains(.,'${tabType}')]//following::div[contains(@class,'bootstrap-switch-${display}')][1]`;

      const showTab = {
        selector: `//form[@id="modal-form"]//div[@class="form-body"]/h3[text()="Line"]//following::tbody[1]/tr/td[contains(.,'${tabType}')]//following::div[contains(@class,'bootstrap-switch-on')][1]`,
        locateStrategy: 'xpath',
      };
      await this.api.element('xpath', productTab, async (visible) => {
        if (visible.status !== -1) {
          this.api.pause(200);
          this.clickVisibleElement(showTab);
          this.api.pause(500);
        } else {
          console.log(`${tabType} is already ${display}`);
        }
      });
    },

    async verifyCategoryTitleMiscModule() {
      await this.waitUntilVisibleElement('@categoryTitleGrid');
      await this.getText('@categoryTitleGrid', async (result) => {
        const CatName = result.value;
        this.checkElementTextContains('@categoryTitleGrid', CatName);
        console.log(
          'Success -> Category Title',
          `${CatName} verified successfully`
        );
      });
    },
    async verifyCategoryBreadcrumbsMiscModule() {
      await this.waitUntilVisibleElement('@breadcrumbsGrid');
      await this.getText('@breadcrumbsGrid', async (result) => {
        const breadcrumbs = result.value;
        this.checkElementTextContains('@breadcrumbsGrid', breadcrumbs);
        console.log(
          'Success -> Breadcrumbs',
          `${breadcrumbs} verified successfully`
        );
      });
    },

    async verifyCategoryDisplayMiscModule() {
      await this.waitUntilVisibleElement('@displayGrid');
      await this.getText('@displayGrid', async (result) => {
        const displayMode = result.value;
        this.checkElementTextContains('@displayGrid', displayMode);
        console.log(
          'Success -> Display Mode',
          `${displayMode} verified successfully`
        );
      });
    },

    async verifyCategorySortByMiscModule() {
      await this.waitUntilVisibleElement('@sortGrid');
      await this.getText('@sortGrid', async (result) => {
        const sortG = result.value;
        this.checkElementTextContains('@sortGrid', sortG);
        console.log('Success -> Sort ', `${sortG} verified successfully`);
      });
    },

    async verifyCategoryResultMiscModule() {
      await this.waitUntilVisibleElement('@resultGrid');
      await this.getText('@resultGrid', async (result) => {
        const resultG = result.value;
        this.checkElementTextContains('@resultGrid', resultG);
        console.log(
          'Success -> Result Grid ',
          `${resultG} verified successfully`
        );
      });
    },
    async verifyCategoryFilterGrid() {
      await this.api.pause(500);
      await this.waitUntilVisibleElement('@filterGrid');
      await this.getText('@filterGrid', async (result) => {
        const filterG = result.value;
        this.checkElementTextContains('@filterGrid', filterG);
        console.log(
          'Success -> Category Filter Grid ',
          `${filterG} verified successfully`
        );
      });
    },

    async verifyCategoryProductDesc() {
      await this.api.pause(500);
      await this.waitUntilVisibleElement('@producrDescGrid');
      await this.getText('@producrDescGrid', async (result) => {
        const productDescG = result.value;
        this.checkElementTextContains('@producrDescGrid', productDescG);
        console.log(
          'Success -> Product Desc Grid ',
          `${productDescG} verified successfully`
        );
      });
    },

    async verifyCategoryProductPrice() {
      await this.api.pause(2000);
      await this.waitUntilVisibleElement('@priceGrid');
      await this.getText('@priceGrid', async (result) => {
        const productPrice = result.value;
        this.checkElementTextContains('@priceGrid', productPrice);
        console.log(
          'Success -> Product Price ',
          `${productPrice} verified successfully`
        );
      });
    },

    async clickPageEdit() {
      await this.api.pause(500);
      await this.clickVisibleElement('@EditBtn');
    },

    async clickPopUpApply() {
      await this.waitUntilVisibleElement('@applyButton');
      await this.clickVisibleElement('@applyButton');
      await this.api.pause(2000);
      // await this.api.refresh();
    },

    async updateActionButtonsSettings(module, display) {
      const actionModule = `//form[@id="modal-form"]//div[@class="form-body"]//following::tbody[1]/tr/td[contains(.,'${module}')]//following::div[contains(@class,'bootstrap-switch-${display}')][1]`;

      const displayTab = {
        selector: `//form[@id="modal-form"]//div[@class="form-body"]//following::tbody[1]/tr/td[contains(.,'${module}')]//following::div[contains(@class,'bootstrap-switch-off')][1]`,
        locateStrategy: 'xpath',
      };
      await this.api.element('xpath', actionModule, async (visible) => {
        if (visible.status !== -1) {
          this.api.pause(200);
          this.clickVisibleElement(displayTab);
          this.api.pause(500);
        } else {
          console.log(`${module} is already ${displayTab}`);
        }
      });
    },

    async EnterPageTitle(titleCart) {
      await this.api.pause(500);
      await this.clickVisibleElement('@clickApply');
      await this.api.pause(1000);
      await this.clickVisibleElement('@titleShoCart');
      await this.setField('@titleShoCart', titleCart);
      await this.api.pause(1000);
      await this.clickVisibleElement('@modalApply');
    },

    async ApplyPopUp() {
      await this.clickVisibleElement('@applyButton');
      await this.api.pause(1000);
      await this.api.refresh();
      await this.api.pause(3000);
      await this.api.execute('scrollTo(300,10)');
    },

    async EnableShipmentTotal() {
      await this.api.pause(1000);
      await this.clickVisibleElement('@shipmentTotal');
      await this.api.pause(500);
      await this.clickVisibleElement('@modalApply');
      await this.waitUntilVisibleElement('@closeToastMessage');
      await this.clickVisibleElement('@closeToastMessage');
      await this.api.pause(1000);
    },
    async clickEditCartSummary() {
      await this.api.execute('scrollTo(0,1000)');
      await this.api.pause(1000);
      await this.clickVisibleElement('@editCartSummary');
      await this.api.pause(2000);
    },

    async updateCartSummarySettings(module, display) {
      const cartModule = `//form[@id="modal-form"]//div[@class="form-body"]//following::tbody[1]/tr/td[contains(.,'${module}')]//following::div[contains(@class,'bootstrap-switch-${display}')][1]`;

      const enableTab = {
        selector: `//form[@id="modal-form"]//div[@class="form-body"]//following::tbody[1]/tr/td[contains(.,'${module}')]//following::div[contains(@class,'bootstrap-switch-off')][1]`,
        locateStrategy: 'xpath',
      };
      await this.api.element('xpath', cartModule, async (visible) => {
        if (visible.status !== -1) {
          this.api.pause(1000);
          this.clickVisibleElement(enableTab);
          this.api.pause(1500);
        } else {
          console.log(`${module} is already ${enableTab}`);
        }
      });
    },

    async updateCartSummaryPosition() {
      await this.api.pause(1000);
      await this.clickVisibleElement('@cartSummaryActionBtn');
      await this.api.pause(1000);
      await this.clickVisibleElement('@editColumCartSummary');
      await this.api.pause(1000);
      await this.clickVisibleElement('@clickPosition');
      await this.waitUntilVisibleElement('@searchColumnSize');
      await this.setField('@searchColumnSize', 'Align Right');
      await this.api.pause(2000);
      await this.clickVisibleElement('@clickPositionSelected');
      await this.api.pause(3000);
      await this.clickVisibleElement('@modalApply');
      await this.waitUntilVisibleElement('@closeToastMessage');
      await this.clickVisibleElement('@closeToastMessage');
    },

    async scrollTop() {
      await this.api.execute('scrollTo(500,0)');
    },
  },
];

module.exports = {
  elements,
  commands,
};
