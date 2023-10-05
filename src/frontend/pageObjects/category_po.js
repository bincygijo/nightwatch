/* eslint-disable complexity */
/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
const { client } = require('nightwatch-api');

const { CONSOLE_COLORS } = require('../../helper/constants/constants');

const productsPage = client.page.product_po();
const adminSideMenu = client.page.adminSideMenu_po();
const addToCartPage = client.page.addToCart_po();
const loginPage = client.page.login_po();
const contentManagementPage = client.page.contentManagement_po();

const elements = {
  categoryItemPopup: {
    selector:
      '//div[@id="categories-tree"]//a[contains(.,"Standard Products")]//following::div[1]',
    locateStrategy: 'xpath',
  },
  totalEntries: {
    selector: '//form[@id="modal-form"]//div[@id="assigned-items-table_info"]',
    locateStrategy: 'xpath',
  },
  closeBtn: {
    selector: '//div[@class="modal-footer"]/button[text()="Close"]',
    locateStrategy: 'xpath',
  },
  totalResult: {
    selector:
      '//div[@class="page"]//div/p[contains(@class,"amount amount-total")]',
    locateStrategy: 'xpath',
  },
  clickViewNoOfProducts: {
    selector:
      '//div[@class="table-container"]//select[@name="assigned-items-table_length"]/option[last()]',
    locateStrategy: 'xpath',
  },
  clickPerPageProduct: {
    selector: '//div[@class="page"]//select[@name="per_page"]/option[last()]',
    locateStrategy: 'xpath',
  },
  pageTitle: '.page-title',
  searchItem: {
    selector:
      '//table[@id="available-items-table"]//tr[@class="filter"]//input[@type="text"]',
    locateStrategy: 'xpath',
  },
  assignItem: {
    selector:
      '//table[@id="available-items-table"]//td//a[@data-action="assign"]',
    locateStrategy: 'xpath',
  },
  createTopParentCat: {
    selector: '//div[@id="categories-tree"]//button[@data-action="create"]',
    locateStrategy: 'xpath',
  },
  btnDelete: {
    selector:
      '//div[@class="row"]//span[@class="tree-action"]/button[@data-action="delete"]',
    locateStrategy: 'xpath',
  },
  btnConfirmDeleteCategory: {
    selector: '//div[@class="modal-footer"]/button[@class="btn submit red"]',
    locateStrategy: 'xpath',
  },
  btnSave: {
    selector: '//button[@class="btn green submit"]',
    locateStrategy: 'xpath',
  },
  btnBack: {
    selector: '//a[@class="btn default" and contains(.,"Back")]',
    locateStrategy: 'xpath',
  },
  btnApply: {
    selector: '//input[@class="btn green"]',
    locateStrategy: 'xpath',
  },
  btnApplyCatalog: {
    selector: '//button[contains(@class,"btn green")]',
    locateStrategy: 'xpath',
  },
  btnAddNewKey: {
    selector: '//a[@class="btn green"]',
    locateStrategy: 'xpath',
  },
  heading3: {
    selector: '//h3[@class="form-section"]',
    locateStrategy: 'xpath',
  },
  txtFilterBy: {
    selector: '(//div[@class="row"]//div[@class="col-md-6"]//input)[1]',
    locateStrategy: 'xpath',
  },
  txtTitle: {
    selector: '(//div[@class="row"]//div[@class="col-md-6"]//input)[2]',
    locateStrategy: 'xpath',
  },
  btnAdd: {
    selector: '//div/button[@class="btn blue"]',
    locateStrategy: 'xpath',
  },
  btnDeleteAllKeys: {
    selector: '//a[@class="btn delete-all-btn green"]',
    locateStrategy: 'xpath',
  },
  btnDeleteKeysConfirm: {
    selector: '//div[@class="modal-footer"]//button[@class="btn submit green"]',
    locateStrategy: 'xpath',
  },
  toastMsg: {
    selector: '//div[@class="toast-message"]',
    locateStrategy: 'xpath',
  },
  CloseSuccessMsg: {
    selector:
      '//div[@id="toast-container"]//button[@class="toast-close-button"]',
    locateStrategy: 'xpath',
  },
  ProductPage: {
    selector: '//div[@class="table-scrollable"]//table/tbody/tr[last()]',
    locateStrategy: 'xpath',
  },
  numberOfProductsPerPage: {
    selector:
      '//div[contains(@class,"form-group") and descendant::label[contains(.,"Number of products to display per page")]]//div/input',
    locateStrategy: 'xpath',
  },
  DropDownPerPageProduct: {
    selector: '//div[@class="page"]//select[@name="per_page"]',
    locateStrategy: 'xpath',
  },
  nextPage: {
    selector: '(//div[@class="pager"]//li/a[contains(.,">")])[1]',
    locateStrategy: 'xpath',
  },
  GridView: {
    selector:
      '//div[@id="top"]//div[@class="view-mode-option"]/a[@class="grid"]',
    locateStrategy: 'xpath',
  },
  ListView: {
    selector:
      '//div[@id="top"]//div[@class="view-mode-option"]/a[@class="list"]',
    locateStrategy: 'xpath',
  },
  LineView: {
    selector: '//div[@id="top"]//div[@class="view-mode-option"][3]/a',
    locateStrategy: 'xpath',
  },
  breadCrumb: {
    selector:
      '//div[@class="form-body" and descendant::label[contains(.,"Nav Menu")]]//input[@name="name"]',
    locateStrategy: 'xpath',
  },
  permaLink: {
    selector:
      '//div[@class="form-body" and descendant::label[contains(.,"Permalink")]]//input[@name="url"]',
    locateStrategy: 'xpath',
  },
  columnCountSubCategoriesText: {
    selector: '//input[@class="select2-search__field"]',
    locateStrategy: 'xpath',
  },
  selectColumnCountSubCategory: {
    selector: '//body/span[contains(@class,"select2-container")]//ul/li',
    locateStrategy: 'xpath',
  },
  newColumnApplyBtn: {
    selector:
      '//form[@id="modal-form"]/div[@class="modal-footer"]/input[@value="Apply"]',
    locateStrategy: 'xpath',
  },
  itemAssignTextBox: {
    selector: '//div[@id="itemsAvailableDatatable_wrapper"]//tr//input',
    locateStrategy: 'xpath',
  },
  clickAssignItem: {
    selector:
      '//div[@id="itemsAvailableDatatable_wrapper"]//td/a[contains(@class,"assign-item")]',
    locateStrategy: 'xpath',
  },
  hotDealsTitle: {
    selector:
      '//div[@class="modal-body"]//input[@type="text" and @name="title"]',
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
};
const itemNameArray = [];
const itemCodeArray = [];
const itemNameListing = [];
let StatusMessages = [];
let permaLinkRef = '';
let breadCrumbRef = '';
let checkError = 'No Error';
let checkColumnCount = '';

const commands = [
  {
    async clickCategoryItemPopup(category) {
      const categoryItemPopup = {
        selector: `//div[@id="categories-tree"]//a[contains(.,'${category}')]//following::div[1]`,
        locateStrategy: 'xpath',
      };
      await this.clickVisibleElement(categoryItemPopup);
      await this.api.pause(4000);
      await this.clickVisibleElement('@clickViewNoOfProducts');
      await this.api.pause(1000);
    },

    async HoverCategory(catName) {
      const category = {
        selector: `//div[@id="root-wrapper"]//span[text()='${catName}']`,
        locateStrategy: 'xpath',
      };

      await this.api.pause(1000);
      await client.getLocation(category, async (location) => {
        client.moveToElement(category, location.value.x, location.value.y);
      });

      await this.api.pause(1000);
    },

    // eslint-disable-next-line complexity
    async ConfigureMegaMenu(MegaMenuOption, dataTable) {
      const settings = dataTable.raw();

      if (MegaMenuOption === 'Contents') {
        if (settings[0][0] === 'off') {
          await contentManagementPage.deleteColumn('Content Module');
        }
      }

      if (MegaMenuOption === 'Sub Categories') {
        if (settings[1][0] === 'on') {
          await this.api.execute('scrollTo(0,300)');
          await contentManagementPage.clickAddNewColumnButtonCategory();
          await contentManagementPage.selectContentTypeColumn(
            4,
            MegaMenuOption
          );
          await contentManagementPage.clickEditProductDetailsCategory(
            'Sub categories'
          );
          await this.updateSubCategories(settings);
          await this.api.pause(1000);
          await this.clickVisibleElement('@newColumnApplyBtn');
          await this.waitUntilVisibleElement('@CloseSuccessMsg');
          await this.clickVisibleElement('@CloseSuccessMsg');
          await this.api.pause(1000);
        }
      }

      if (MegaMenuOption === 'Hot Deals') {
        // follow sub categories module and create a column, edit it hot deal and configure options under hot deal
        if (settings[1][0] === 'on') {
          await this.api.execute('scrollTo(0,300)');
          await contentManagementPage.clickAddNewColumnButtonCategory();
          await contentManagementPage.selectContentTypeColumn(
            8,
            MegaMenuOption
          );
          await contentManagementPage.clickEditProductDetailsCategory(
            'Hot deals'
          );
          await this.updateHotDeals(settings);
          await this.api.pause(1000);
          await this.clickVisibleElement('@newColumnApplyBtn');
          await this.waitUntilVisibleElement('@CloseSuccessMsg');
          await this.clickVisibleElement('@CloseSuccessMsg');
          await this.api.pause(1000);
        }
      }
    },

    async updateSubCategories(settings) {
      await this.clickSubCategoryElement('display_images', settings[1][1]);
      await this.clickSubCategoryElement('display_titles', settings[1][2]);
      await this.clickSubCategoryElement('hide_sub_sub_cat', settings[1][3]);
      await this.clickSubCategoryElement('masonry', settings[1][4]);
      await this.UpdateMaxDisplayCount(
        'Sub Categories Column count',
        settings[1][5]
      );
    },

    async updateHotDeals(settings) {
      await this.clickVisibleElement('@hotDealsTitle');
      await this.setField('@hotDealsTitle', 'Hot deals');
      await this.api.pause(500);
      await this.UpdateHotDealsButton('add_to_cart', settings[1][1]);
      await this.UpdateHotDealsButton('slider', settings[1][2]);
      await this.UpdateMaxDisplayCount(
        'Desktop Max Display Items',
        settings[1][3]
      );
      await this.assignItems(settings);
      await this.api.pause(2000);
    },

    async clickSubCategoryElement(elementId, state) {
      const displayElement = `//div[@class="modal-body"]//input[@id="${elementId}" and @checked="checked"]`;
      const clickElement = {
        selector: `//div[@class="modal-body"]//input[@id="${elementId}"]`,
        locateStrategy: 'xpath',
      };

      if (state === 'checked') {
        await this.api.element('xpath', displayElement, async (visible) => {
          if (visible.status !== -1) {
            console.log(
              `No Action -> Sub Categories -> ${elementId} is already checked`
            );
          } else {
            console.log(
              `Action -> Sub Categories -> ${elementId} is NOW checked`
            );
            this.clickVisibleElement(clickElement);
          }
        });
      }

      if (state === 'unChecked') {
        await this.api.element('xpath', displayElement, async (visible) => {
          if (visible.status !== -1) {
            console.log(
              `Action -> Sub Categories -> ${elementId} is NOW un-checked`
            );
            this.clickVisibleElement(clickElement);
          } else {
            console.log(
              `No Action -> Sub Categories -> ${elementId} is already un-checked`
            );
          }
        });
      }
    },

    async UpdateHotDealsButton(elementId, state) {
      const btnClicked = `//label[@for='${elementId}']//following-sibling::div//div[contains(@class,"bootstrap-switch-${state}")]`;

      const btnHotDeal = {
        selector: `//label[@for='${elementId}']//following::label[@class="bootstrap-switch-label"][1]`,
        locateStrategy: 'xpath',
      };

      await this.api.element('xpath', btnClicked, (visible) => {
        if (visible.status !== -1) {
          console.log(
            `No Action -> The button for "${elementId}" is already "${state}`
          );
        } else {
          console.log(
            `Action -> The button for "${elementId}" is now turned "${state}`
          );
          this.waitUntilVisibleElement(btnHotDeal);
          this.clickVisibleElement(btnHotDeal);
          this.api.pause(1000);
        }
      });
    },

    async UpdateMaxDisplayCount(module, count) {
      const columnCountSubCategories = {
        selector: `//div[@class="modal-body"]//div[contains(@class, "form-group") and descendant::label[contains(.,"${module}")]]//span[@class="select2-selection__arrow"]`,
        locateStrategy: 'xpath',
      };

      await this.clickVisibleElement(columnCountSubCategories);
      await this.clickVisibleElement('@columnCountSubCategoriesText');
      await this.setField('@columnCountSubCategoriesText', count);
      await this.api.pause(1000);
      await this.clickVisibleElement('@selectColumnCountSubCategory');
      await this.api.pause(500);
    },

    async assignItems(settings) {
      for (let index = 4; index < settings[1].length; index += 1) {
        await this.clickVisibleElement('@itemAssignTextBox');
        await this.clearField('@itemAssignTextBox');
        console.log(
          `**** Assigning "${settings[1][index]}" item to Hot Deals Module ***`
        );
        await this.setField('@itemAssignTextBox', settings[1][index]);
        await this.api.pause(2000);
        await this.clickVisibleElement('@clickAssignItem');
        await this.clickVisibleElement('@CloseSuccessMsg');
      }
    },

    async VerifyMegaMenu(catName, MegaMenuOption, dataTable) {
      const settings = dataTable.raw();

      if (MegaMenuOption === 'Contents') {
        await this.verifyContentModule(catName, settings[0][0]);
      }

      if (MegaMenuOption === 'Sub Categories') {
        await this.verifySubCategoriesModule(catName, settings);
        if (settings[1][0] === 'on') {
          await this.verifyThumbNail(catName, settings[1][1]);
          await this.verifyDisplayTitles(catName, settings[1][2]);
          await this.VerifyNestedCategories(catName, settings[1][3]);
          await this.verifyMasonary(catName, settings[1][4]);
          await this.verifyColumnCountSubCategories(catName, settings[1][5]);
        }
      }

      if (MegaMenuOption === 'Hot Deals') {
        await this.verifyHotDealsModule(catName, settings);
      }
    },

    async verifyContentModule(catName, state) {
      let contentModule = '';

      if (state === 'on') {
        contentModule = `//li[descendant::span[contains(.,'${catName}')]]/div/div/div/div[1][contains(.,'')]`;
      } else {
        contentModule = `//li[descendant::span[contains(.,'${catName}')]]/div/div/div/div[1][contains(.,'') and not(div)]]`;
      }

      if (state === 'on') {
        this.api.element('xpath', contentModule, async (visible) => {
          if (visible.status !== -1) {
            console.log(
              'Success -> Mega Menu showed content module successfully'
            );
          } else {
            console.log(
              CONSOLE_COLORS.red,
              'Failure -> Mega Menu is NOT showing content module successfully'
            );
            checkError = 'Error Occurred';
          }
        });
      } else {
        this.api.element('xpath', contentModule, async (visible) => {
          if (visible.value.length > 0) {
            console.log(
              CONSOLE_COLORS.red,
              'Failure -> Mega Menu - is showing content module AGAINST expection'
            );
            checkError = 'Error Occurred';
          } else {
            console.log(
              'Success -> as expected, Mega Menu is not showing content module'
            );
          }
        });
      }
    },

    async verifySubCategoriesModule(catName, settings) {
      const subCategoryMenu = `//li[descendant::span[contains(.,'${catName}')]]//div[contains(@class,"module-sub-categories")]`;

      if (settings[1][0] === 'on') {
        this.api.elements('xpath', subCategoryMenu, async (visible) => {
          if (visible.status !== -1) {
            console.log(
              'Success -> Mega Menu showed subCategories module successfully'
            );
          } else {
            console.log(
              CONSOLE_COLORS.red,
              'Failure -> Mega Menu is NOT showing subCategories module successfully'
            );
            checkError = 'Error Occurred';
          }
        });
      } else {
        this.api.elements('xpath', subCategoryMenu, async (visible) => {
          if (visible.value.length > 0) {
            console.log(
              CONSOLE_COLORS.red,
              'Failure -> Mega Menu is showing subCategories module AGAINST expection'
            );
            checkError = 'Error Occurred';
          } else {
            console.log(
              'Success -> as expected, Mega Menu is not showing subCategories module'
            );
          }
        });
      }
    },

    async verifyHotDealsModule(catName, settings) {
      const HotDealsModule = `//li[descendant::span[contains(.,'${catName}')]]//div/h3/span[contains(.,'Hot deals')]`;
      if (settings[1][0] === 'on') {
        await this.api.elements('xpath', HotDealsModule, async (visible) => {
          if (visible.status !== -1) {
            console.log('Success -> Hot Deals module showed successfully');
            await this.verifyHotDealsAddToCart(catName, settings[1][1]);
            await this.verifyHotDealsSlider(catName, settings[1][2]);
            await this.verifyHotDealsItemsAssigned(catName, settings);
          } else {
            console.log(
              CONSOLE_COLORS.red,
              'Failure -> Hot Deals module is NOT shown successfully'
            );
            checkError = 'Error Occurred';
          }
        });
      } else {
        await this.api.elements('xpath', HotDealsModule, async (visible) => {
          if (visible.value.length > 0) {
            console.log(
              CONSOLE_COLORS.red,
              'Failure -> Hot Deals Module - is shown AGAINST expection'
            );
            checkError = 'Error Occurred';
          } else {
            console.log(
              'Success -> as expected, Hot Deals Module is not shown'
            );
          }
        });
      }
    },

    async verifyThumbNail(catName, state) {
      const ThumbNailExists = `//header[@id="header" and descendant::span[contains(.,'${catName}')]]//div[contains(@class,"module-sub-categories-img")]`;

      if (state === 'checked') {
        checkColumnCount = 'Yes';
        await this.api.elements('xpath', ThumbNailExists, async (visible) => {
          if (visible.status !== -1) {
            console.log(
              'Success -> Mega Menu - Sub Categories showed ThumbNails successfully'
            );
          } else {
            console.log(
              CONSOLE_COLORS.red,
              'Failure -> Mega Menu - Sub Categories is NOT showing - thumb nails AGAINST expection'
            );
            checkError = 'Error Occurred';
          }
        });
      } else {
        await this.api.elements('xpath', ThumbNailExists, async (visible) => {
          if (visible.value.length > 0) {
            console.log(
              CONSOLE_COLORS.red,
              'Failure -> Mega Menu - Sub Categories showed ThumbNails AGAINST expections'
            );
            checkError = 'Error Occurred';
          } else {
            console.log(
              'Success -> as expected, Mega Menu - Sub Categories is not showing - thumb nails'
            );
          }
        });
      }
    },

    async verifyDisplayTitles(catName, state) {
      const subCategoryTitleExist = `//header[@id="header"]//ul//li[descendant::span[contains(.,'${catName}')]]//li[contains(@class,"parent")]/a/span`;

      if (state === 'checked') {
        checkColumnCount = 'Yes';
        await this.api.elements(
          'xpath',
          subCategoryTitleExist,
          async (visible) => {
            if (visible.status !== -1) {
              console.log(
                'Success -> Mega Menu - Sub Categories showed Category Titles successfully'
              );
            } else {
              console.log(
                CONSOLE_COLORS.red,
                'Failure -> Mega Menu - Sub Categories is NOT showing Category Titles AGAINST expection'
              );
              checkError = 'Error Occurred';
            }
          }
        );
      } else {
        await this.api.elements(
          'xpath',
          subCategoryTitleExist,
          async (visible) => {
            if (visible.value.length > 0) {
              console.log(
                CONSOLE_COLORS.red,
                'Failure -> Mega Menu - Sub Categories showed Category Titles AGAINST expections'
              );
              checkError = 'Error Occurred';
            } else {
              console.log(
                'Success -> as expected, Mega Menu - Sub Categories is not showing Category Titles'
              );
            }
          }
        );
      }
    },

    async VerifyNestedCategories(catName, state) {
      const nestCategoriesExist = `//header[@id="header" and descendant::span[contains(.,'${catName}')]]//div[contains(@class,"nav-item")]/ul`;

      if (state === 'checked') {
        await this.api.element(
          'xpath',
          nestCategoriesExist,
          async (visible) => {
            if (visible.value.length > 0) {
              console.log(
                CONSOLE_COLORS.red,
                'Failure -> Mega Menu - Sub Categories is NOT hiding nested categories AGAINST expection'
              );
              checkError = 'Error Occurred';
            } else {
              console.log(
                'Success -> Mega Menu - Sub Categories hiding Nested categories successfully'
              );
            }
          }
        );
      } else {
        await this.api.element(
          'xpath',
          nestCategoriesExist,
          async (visible) => {
            if (visible.status !== -1) {
              console.log(
                'Success -> as expected, Mega Menu - Sub Categories is not hiding nested categories'
              );
            } else {
              console.log(
                CONSOLE_COLORS.red,
                'Failure -> Mega Menu - Sub Categories hiding nested categories AGAINST expections'
              );
              checkError = 'Error Occurred';
            }
          }
        );
      }
    },

    async verifyMasonary(catName, state) {
      const masonaryExists = `//header[@id="header" and descendant::span[contains(.,'${catName}')]]//div[contains(@class,"nav-item")]/div[@class="nav-item"]`;

      if (state === 'checked') {
        await this.api.elements('xpath', masonaryExists, async (visible) => {
          if (visible.status !== -1) {
            console.log(
              'Success -> Mega Menu - Sub Categories showed Masonary successfully'
            );
          } else {
            console.log(
              CONSOLE_COLORS.red,
              'Failure -> Mega Menu - Sub Categories is not showing Masonary AGAINST expection'
            );
            checkError = 'Error Occurred';
          }
        });
      } else {
        await this.api.elements('xpath', masonaryExists, async (visible) => {
          if (visible.value.length > 0) {
            console.log(
              CONSOLE_COLORS.red,
              'Failure -> Mega Menu - Sub Categories showed Masonary AGAINST expections'
            );
            checkError = 'Error Occurred';
          } else {
            console.log(
              'Success -> as expected, Mega Menu - Sub Categories is not showing Masonary'
            );
          }
        });
      }
    },

    async verifyColumnCountSubCategories(catName, count) {
      // below is hard coded as "grid12-5col nav-item" needs change if feature file is changed for any reason.
      const subcategoriesPerLine = `//header[@id="header" and descendant::span[contains(.,'${catName}')]]//div[contains(@class,"grid12-5col nav-item")]`;

      if (checkColumnCount === 'Yes') {
        await this.api.elements(
          'xpath',
          subcategoriesPerLine,
          async (visible) => {
            if (visible.value.length >= count) {
              console.log(
                `Success -> Mega Menu - Sub Categories showed correct column count ${visible.value.length} successfully`
              );
            } else {
              console.log(
                CONSOLE_COLORS.red,
                `Failure -> Mega Menu - Sub Categories is showing ${visible.value.length} columns, expected count is ${count}`
              );
              checkError = 'Error Occurred';
            }
          }
        );
        checkColumnCount = ''; // reset this variable
      }
    },

    async verifyHotDealsItemsAssigned(catName, settings) {
      if (settings[1][2] === 'on') {
        this.verifyHotDealsItemAssignedSlider(catName, settings);
        this.VerifyMaxDisplayItems(catName, settings);
      } else {
        this.verifyHotDealsItemAssignedNoSlider(catName, settings);
      }
    },

    async verifyHotDealsItemAssignedSlider(catName, settings) {
      const itemsAssigned = `//header[@id="header" and descendant::span[contains(.,'${catName}')]]//div[@class="owl-stage-outer"]/div[@class="owl-stage hovered"]/div[not(contains(@class,"owl-item cloned"))]//span[@class="item-code"]`;

      this.api.elements('xpath', itemsAssigned, async (elemArray) => {
        if (settings[1].length - 4 !== elemArray.value.length) {
          console.log(
            CONSOLE_COLORS.red,
            `Failure -> Hot Deals shows ${
              elemArray.value.length
            } and is expected to show ${settings[1].length - 4}`
          );
          checkError = 'Error Occurred';
        }
      });
    },

    async verifyHotDealsItemAssignedNoSlider(catName, settings) {
      const itemsAssigned = `//header[@id="header" and descendant::span[contains(.,'${catName}')]]//div[@class="item"]//span[@class='item-code']`;

      this.api.elements('xpath', itemsAssigned, async (elemArray) => {
        if (settings[1].length - 4 !== elemArray.value.length) {
          console.log(
            CONSOLE_COLORS.red,
            `Failure -> Hot Deals shows ${
              elemArray.value.length
            } and is expected to show ${settings[1].length - 4}`
          );
          checkError = 'Error Occurred';
        }
      });
    },

    async VerifyMaxDisplayItems(catName, settings) {
      const MaxDisplayedItems = `//header[@id="header" and descendant::span[contains(.,'${catName}')]]//div[@class="owl-stage-outer"]/div[@class="owl-stage hovered"]/div[contains(@class,"owl-item active")]//span[@class="item-code"]`;
      const clickSliderNext = {
        selector: '//div[@class="owl-controls"]/div[@class="owl-next"]',
        locateStrategy: 'xpath',
      };

      await this.clickVisibleElement(clickSliderNext);

      await this.api.elements('xpath', MaxDisplayedItems, async (elemArray) => {
        if (Number(settings[1][3]) >= elemArray.value.length) {
          console.log(
            `Success -> As expected Hot Deals Slider shows ${elemArray.value.length}`
          );
        } else {
          console.log(
            CONSOLE_COLORS.red,
            `Failure -> Hot Deals Slider shows ${
              elemArray.value.length
            } items and is expected to show min ${settings[1][3] - 1} items`
          );
          checkError = 'Error Occurred';
        }
      });
    },

    async verifyHotDealsSlider(catName, state) {
      const sliderExists = `//header[@id="header" and descendant::span[contains(.,'${catName}')]]//div[contains(@class,"owl-controls")]`;

      if (state === 'on') {
        this.api.elements('xpath', sliderExists, async (visible) => {
          if (visible.status !== -1) {
            console.log('Success -> Hot Deals showed Slider successfully');
          } else {
            console.log(
              CONSOLE_COLORS.red,
              'Failure -> As Expected, Hot Deals is not showing Slider'
            );
            checkError = 'Error Occurred';
          }
        });
      } else {
        this.api.elements('xpath', sliderExists, async (visible) => {
          if (visible.value.length > 0) {
            console.log(
              CONSOLE_COLORS.red,
              'Failure -> Hot Deals showed Slider AGAINST expections'
            );
            checkError = 'Error Occurred';
          } else {
            console.log(
              'Success -> as expected, Hot Deals is not showing Slider Button'
            );
          }
        });
      }
    },

    async verifyHotDealsAddToCart(catName, state) {
      const AddToCartExists = `//header[@id="header" and descendant::span[contains(.,'${catName}')]]//button[@type="button"]//span[contains(text(),'Add to Cart')]`;

      if (state === 'on') {
        this.api.elements('xpath', AddToCartExists, async (visible) => {
          if (visible.status !== -1) {
            console.log(
              'Success -> Hot Deals showed Add To Cart Button successfully'
            );
          } else {
            console.log(
              CONSOLE_COLORS.red,
              'Failure -> As Expected, Hot Deals is not showing Add To Cart'
            );
            checkError = 'Error Occurred';
          }
        });
      } else {
        this.api.elements('xpath', AddToCartExists, async (visible) => {
          if (visible.value.length > 0) {
            console.log(
              CONSOLE_COLORS.red,
              'Failure -> Hot Deals showed Add To Cart Button AGAINST expections'
            );
            checkError = 'Error Occurred';
          } else {
            console.log(
              'Success -> as expected, Hot Deals  is not showing Add To Cart Button'
            );
          }
        });
      }
    },

    async DeleteMegaMenu(catName) {
      await loginPage.clickAdminButton();
      await loginPage.verifyAdminDashboard();
      await adminSideMenu.clickCatalogTab();
      await adminSideMenu.clickCategoryLink();
      await this.clickButton(catName, 'Edit');
      await this.clickTab('Responsive Mega Menu Settings');
      await this.api.execute('scrollTo(0,500)');
      await this.clickVisibleElement('@clickDeleteCategory');
      await this.waitUntilVisibleElement('@deleteContainerPop');
      await this.clickVisibleElement('@deleteContainerPop');
      await this.api.pause(6000);
      await this.ClickApplyButton();
    },

    async verifyCategoryCount() {
      const itemName = '//tbody[@class="ui-sortable"]/tr/td[3]/strong/a';
      const itemCode = '//tbody[@class="ui-sortable"]/tr/td[3]/a';

      await this.api.elements('xpath', itemName, async (elemArray) => {
        let index = 0;
        elemArray.value.forEach((elem) => {
          client.elementIdText(elem.ELEMENT, (itemNameValue) => {
            itemNameArray[index] = itemNameValue.value;
            index += 1;
          });
        });
      });

      await this.api.elements('xpath', itemCode, async (elemArray) => {
        let index = 0;
        elemArray.value.forEach((elem) => {
          client.elementIdText(elem.ELEMENT, (itemCodeValue) => {
            itemCodeArray[index] = itemCodeValue.value;
            index += 1;
          });
        });
      });
    },

    async changeSortMethod(sortMethod) {
      const clickSortBy = {
        selector: `//div[@class="page"]//select[@name="sort_by"]/option[text()="${sortMethod}"]`,
        locateStrategy: 'xpath',
      };
      await this.waitUntilVisibleElement(clickSortBy);
      await this.clickVisibleElement(clickSortBy);
      await this.api.pause(2000);
      await this.clickVisibleElement('@clickPerPageProduct');
      await this.api.pause(1000);
    },

    async clickCloseButton() {
      await this.clickVisibleElement('@closeBtn');
      await this.api.pause(2000);
    },

    async verifyCategoryOnFrontEnd(sortObject, sortMethod) {
      await this.verifyTotalNoOfProducts();
      await this.verifySortOrder(sortObject, sortMethod);
    },

    async verifyTotalNoOfProducts() {
      await this.waitUntilVisibleElement('@totalResult');
      await this.getText('@totalResult', async (result) => {
        const strRs = result.value;
        const totalResult = strRs.match(/\d+/g);
        this.checkElementTextContains('@totalResult', totalResult[0]);
        console.log(CONSOLE_COLORS.pink, 'TotalResult ->', `${totalResult[0]}`);

        if (itemNameArray.length === Number(totalResult[0])) {
          console.log(
            'Success -> Total number of products assigned to category in admin and front end are matching'
          );
        } else {
          throw new Error(
            `Failure ->  Total number of products assigned to category ${itemNameArray.length} in admin is NOT matching with front end count ${totalResult[0]}`
          );
        }
      });
    },

    // eslint-disable-next-line complexity
    async verifySortOrder(sortObject, sortMethod) {
      console.log('Entering Sorting method', sortMethod, sortObject);
      if (sortMethod === 'Default') {
        await this.verifyProductNameSorting(sortObject, sortMethod);
      }

      if (sortMethod === 'A-Z') {
        await itemNameArray.sort();
        await this.verifyProductNameSorting(sortObject, sortMethod);
      }

      if (sortMethod === 'Z-A') {
        await itemNameArray.reverse();
        await this.verifyProductNameSorting(sortObject, sortMethod);
      }

      if (sortMethod === 'Item Code A-Z') {
        await itemCodeArray.sort();
        await this.verifyItemCodeSorting(sortObject, sortMethod);
      }

      if (sortMethod === 'Item Code Z-A') {
        await itemCodeArray.reverse();
        await this.verifyItemCodeSorting(sortObject, sortMethod);
      }
    },

    async verifyProductNameSorting(sortObject, sortMethod) {
      const listedProductNames =
        '//div[@class="category-products"]//h2[@class="product-name"]/a';

      console.log(
        CONSOLE_COLORS.BGCyan,
        `*********************  Verifying if ${sortObject} are in ${sortMethod} order ********************* `
      );
      await this.api.elements(
        'xpath',
        listedProductNames,
        async (elemArray) => {
          let index = 0;
          elemArray.value.forEach((elem) => {
            client.elementIdText(elem.ELEMENT, (itemNameValue) => {
              if (
                itemNameArray[index].toLowerCase() ===
                itemNameValue.value.toLowerCase()
              ) {
                console.log(
                  `Success -> ${itemNameValue.value} is found at No ${
                    index + 1
                  } position, as expected in ${sortMethod} sort method for ${sortObject}`
                );
              } else {
                console.log('Item Name Array ->', itemNameArray);
                throw new Error(
                  `Failure -> At No ${index + 1} position, Expected Product "${
                    itemNameArray[index]
                  }" but found "${
                    itemNameValue.value
                  }" unlike ${sortMethod} sort method for ${sortObject}`
                );
              }

              index += 1;
            });
          });
        }
      );
    },

    async verifyItemCodeSorting(sortObject, sortMethod) {
      const listedItemCodes = `//div[@class="category-products"]//span[@class="item-code"]`;

      console.log(
        CONSOLE_COLORS.BGCyan,
        `********************* Verifying if ${sortObject} are in ${sortMethod} order ********************* `
      );
      await this.api.elements('xpath', listedItemCodes, async (elemArray) => {
        let index = 0;
        elemArray.value.forEach((elem) => {
          client.elementIdText(elem.ELEMENT, (itemCodeValue) => {
            if (
              itemCodeArray[index]
                .toLowerCase()
                .replace(/[^a-zA-Z0-9]/g, '') ===
              itemCodeValue.value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') // replace and lower case is used to handle formatted codes
            ) {
              console.log(
                `Success -> ${itemCodeValue.value} is found at No ${
                  index + 1
                } position, as in admin panel Category Item Assignment`
              );
            } else {
              console.log('Item Name Array ->', itemCodeArray);
              throw new Error(
                `Failure -> At No ${index + 1} position, Expected Product "${
                  itemCodeArray[index]
                }" but found "${itemCodeValue.value}"`
              );
            }

            index += 1;
          });
        });
      });
    },
    async verifyMenuPage(catPageTitle) {
      await this.checkElementTextContains('@pageTitle', catPageTitle);
      console.log(
        `Success -> ${catPageTitle} page has been loaded successfully`
      );
    },

    async clickButton(parentCat = '', action = '') {
      const createChildCat = {
        selector: `//ul[@class="jstree-children"]/li[@role="treeitem"]/a[contains(.,'${parentCat}')]//following-sibling::div/button[1]`,
        locateStrategy: 'xpath',
      };

      const editCat = {
        selector: `//div[@id="categories-tree"]//li//li[descendant::a[contains(.,'${parentCat}')]]//a[contains(.,'Edit')]`,
        locateStrategy: 'xpath',
      };

      const categoryExists = `//ul[@class="jstree-children"]//a[contains(text(),"${parentCat}")]`;

      // await this.api.execute('scrollTo(900,400)');

      if (action === 'Create') {
        if (parentCat === '') {
          // this is to create top level parent category
          await this.waitUntilVisibleElement('@createTopParentCat');
          await this.clickVisibleElement('@createTopParentCat');
        } else {
          // create child category
          await this.clickVisibleElement(createChildCat);
        }
      }

      if (action === 'Edit') {
        // editing any category
        await this.clickVisibleElement(editCat);
      }

      if (action === 'Delete') {
        // delete any category it it exists
        await this.api.element('xpath', categoryExists, async (exists) => {
          if (exists.status !== -1) {
            await this.searchNSelectCat(parentCat);
            await this.DeleteCategory();
          }
        });
      }

      await this.api.pause(1000);
    },

    async clickTab(tabName) {
      const tabXpath = {
        selector: `//div[@class="portlet"]//li/a[text() ='${tabName}']`,
        locateStrategy: 'xpath',
      };
      await this.waitUntilVisibleElement(tabXpath);
      await this.api.pause(2000);
      try {
        await this.clickVisibleElement(tabXpath);
        await this.api.pause(1000);
      } catch (Error) {
        // try again after waiting again if first attempt fails
        await this.api.pause(3000);
        await this.clickVisibleElement(tabXpath);
        await this.api.pause(1000);
      }
    },

    async verifyTab(tabName) {
      const tabXpath = `//div[@class="portlet"]//li[@class="active"]/a[text() ='${tabName}']`;
      await this.api.element('xpath', tabXpath, async (visible) => {
        if (visible.status !== -1) {
          console.log(`Success -> "${tabName}" is active now`);
        } else {
          throw new Error(`Failure -> "${tabName}" is still NOT active`);
        }
      });
    },

    async updateCatalogSettings(dataTable) {
      let btnXPath = '';
      let btnChangeXpath = '';
      const settings = dataTable.raw();

      for (let index = 0; index < settings[0].length - 2; index += 1) {
        btnXPath = `//div[contains(@class,"form-group") and descendant::label[contains(.,'${settings[0][index]}')]]//div/div[contains(@class,'bootstrap-switch-${settings[1][index]}')]`;

        btnChangeXpath = {
          selector: `//div[contains(@class,"form-group") and descendant::label[contains(.,'${settings[0][index]}')]]//div/label[@class="bootstrap-switch-label"]`,
          locateStrategy: 'xpath',
        };

        // eslint-disable-next-line no-loop-func
        await this.api.element('xpath', btnXPath, async (visible) => {
          if (visible.status !== -1) {
            console.log(
              `Success -> "${settings[0][index]}" button is already ${settings[1][index]}`
            );
          } else {
            this.clickVisibleElement(btnChangeXpath);
            this.api.pause(500);
            console.log(
              `Success -> "${settings[0][index]}" button is turned ${settings[1][index]}`
            );
          }
        });
      }

      await this.getValue('@permaLink', async (result) => {
        permaLinkRef = result.value;
      });

      await this.getValue('@breadCrumb', async (result) => {
        breadCrumbRef = result.value;
      });

      await this.ClickApplyButton();
    },

    async ClickApplyButton() {
      await this.api.execute('scrollTo(1000,0)');
      await this.waitUntilVisibleElement('@btnApplyCatalog');
      await this.clickVisibleElement('@btnApplyCatalog');
      await this.api.pause(1000);
    },

    async updateCatalogFilterSettings(dataTable) {
      let btnXPath = '';
      let btnChangeXpath = '';
      let orderInput = '';
      const settings = dataTable.raw();

      for (let index = 0; index < settings[0].length; index += 1) {
        btnXPath = `//div[@class="tab-pane active"]//div[contains(@class, "form-group") and descendant::label[contains(.,'${settings[0][index]}')]]//div[@class='checker']//span[@class='${settings[1][index]}']`;

        orderInput = {
          selector: `//div[@class="tab-pane active"]//div[contains(@class, "form-group") and descendant::label[contains(.,'${settings[0][index]}')]]//input[@class="formOrdering"]`,
          locateStrategy: 'xpath',
        };

        btnChangeXpath = {
          selector: `//div[@class="tab-pane active"]//div[contains(@class, "form-group") and descendant::label[contains(.,'${settings[0][index]}')]]//div[@class='checker'][1]//span`,
          locateStrategy: 'xpath',
        };

        // eslint-disable-next-line no-loop-func
        await this.api.element('xpath', btnXPath, async (visible) => {
          if (visible.status !== -1) {
            console.log(
              `Success -> "${settings[0][index]}" button is already "${settings[1][index]}"`
            );
          } else {
            this.clickVisibleElement(btnChangeXpath);
            this.api.pause(500);
            this.clearField(orderInput);
            this.setField(orderInput, index);
            this.api.pause(500);
            console.log(
              `Success -> "${settings[0][index]}" button is now ${settings[1][index]}`
            );
          }
        });
      }

      await this.ClickApplyButton();
    },

    async verifyCatalogSettings(dataTable) {
      const settings = dataTable.raw();

      await this.verifyDisplayMenu(settings[1][0], settings[1][1], 0);
      await this.verifySideFilter(settings[0][2], settings[1][2], 1);
      await this.verifyProductList(settings[0][3], settings[1][3], 2);
      await this.verifyPermaLink(settings[0][4], settings[1][4], 3);
      await this.verifyBreadCrumb(settings[0][5], settings[1][5], 4);

      console.log(
        CONSOLE_COLORS.BGCyan,
        '************ Category Setting Messages *******************'
      );

      for (let index = 0; index < StatusMessages.length; index += 1) {
        console.log(CONSOLE_COLORS.pink, StatusMessages[index]);
      }

      console.log(
        CONSOLE_COLORS.BGCyan,
        '*********** End of Category Setting Messages *************'
      );
    },

    async verifyCatalogFilterSettings(dataTable) {
      let btnXPath = '';
      let textXpath = '';
      const settings = dataTable.raw();

      console.log(
        CONSOLE_COLORS.BGCyan,
        '************** Category Filter Messages *****************'
      );
      for (let index = 0; index < settings[0].length; index += 1) {
        btnXPath = `//div[contains(@class,"product-search-container")]//dt[contains(.,'${settings[0][index]}')]`;

        textXpath = {
          selector: `//div[contains(@class,"product-search-container")]//dt[${
            index + 1
          }]`,
          locateStrategy: 'xpath',
        };

        await this.api.element('xpath', btnXPath, async (visible) => {
          if (visible.status !== -1 && settings[1][index] === 'checked') {
            console.log(
              `Success -> Category Filter "${settings[0][index]}" is displayed as expected`
            );

            this.getText(textXpath, (result) => {
              if (result.value === settings[0][index]) {
                console.log(
                  `Success -> Category Filter "${
                    settings[0][index]
                  }" is displayed in order ${index + 1} as expected`
                );
              } else {
                console.log(
                  CONSOLE_COLORS.red,
                  `Failure -> Category Filter "${settings[0][index]}" is NOT displayed in order ${index} as expected`
                );
                checkError = 'Error Occurred';
              }
            });
          }

          if (visible.status === -1 && settings[1][index] === 'checked') {
            console.log(
              CONSOLE_COLORS.red,
              `Failure -> Category Filter "${settings[0][index]}" is NOT displayed as expected`
            );
            checkError = 'Error Occurred';
          }

          if (visible.status !== -1 && settings[1][index] === 'UnChecked') {
            console.log(
              CONSOLE_COLORS.red,
              `Failure -> Category Filter "${settings[0][index]}" is displayed as against expection`
            );
            checkError = 'Error Occurred';
          }

          if (visible.status === -1 && settings[1][index] === 'UnChecked') {
            console.log(
              `Success -> Category Filter "${settings[0][index]}" is not displayed, as expected`
            );
          }
        });
      }

      console.log(
        CONSOLE_COLORS.BGCyan,
        '************ End of Category Filter Messages ************'
      );
    },

    async throwError() {
      console.log('Error status:- ', checkError);
      StatusMessages = [];
      if (checkError === 'Error Occurred') {
        checkError = 'No Error';
        throw new Error(
          'Failure -> One or more error occured. Please see details above'
        );
      }
    },

    async verifySideFilter(Setting, ReferenceState, index) {
      let sideFilterDisplayed = '';
      const FilterExists =
        '//div[@id="root-wrapper"]//div[contains(@class,"sidebar-filter")]//span[contains(.,"Filter Results")]';

      await this.api.element('xpath', FilterExists, async (visible) => {
        if (visible.status !== -1) {
          sideFilterDisplayed = 'on';
        } else {
          sideFilterDisplayed = 'off';
        }
      });

      return this.populateMessage(
        Setting,
        ReferenceState,
        sideFilterDisplayed,
        index
      );
    },

    async verifyProductList(Setting, ReferenceState, index) {
      let ProductListDisplayed = '';
      const ProductListExists =
        '//div[@class="category-products"]//ul[contains(@class,"category-products-listing")]';

      await this.api.element('xpath', ProductListExists, async (visible) => {
        if (visible.status !== -1) {
          ProductListDisplayed = 'on';
        } else {
          ProductListDisplayed = 'off';
        }
      });

      return this.populateMessage(
        Setting,
        ReferenceState,
        ProductListDisplayed,
        index
      );
    },

    async populateMessage(Setting, referenceValue, actualValue, index) {
      if (referenceValue === actualValue) {
        StatusMessages[
          index
        ] = `Success -> "${Setting}" is expected to be displayed "${referenceValue}" and is displayed ${actualValue}`;
      } else {
        StatusMessages[
          index
        ] = `Failure -> "${Setting}" is expected to display "${referenceValue}" and actually displayed "${actualValue}"`;
        checkError = 'Error Occurred';
      }

      return checkError;
    },

    async verifyDisplayMenu(catName, state, index) {
      let CategoryExists = '';
      let categoryDisplayed = '';
      CategoryExists = `//div[@id="root-wrapper"]//span[text()='${catName}']`;
      await this.api.element('xpath', CategoryExists, async (visible) => {
        if (visible.status !== -1) {
          categoryDisplayed = 'on';
          addToCartPage.clickCategory(catName);
        } else {
          categoryDisplayed = 'off';
        }
      });

      await this.api.pause(1000);
      return this.populateMessage(
        `Category "${catName}"`,
        state,
        categoryDisplayed,
        index
      );
    },

    async verifyPermaLink(xpathText, state) {
      if (state === 'on') {
        await client.url(async (siteURL) => {
          const permaLinkText = siteURL.value.match(permaLinkRef);
          if (String(permaLinkText) === permaLinkRef) {
            StatusMessages[3] = `Success -> ${xpathText} is successfully verified as "${permaLinkRef}"`;
          } else {
            StatusMessages[3] = `Failure -> ${xpathText}text "${permaLinkText}" is NOT matching reference Permalink "${permaLinkRef}"`;
            checkError = 'Error Occurred';
          }
        });
      }

      return checkError;
    },

    async verifyBreadCrumb(xpathText, state) {
      const breadCrumbXpath = `//div[contains(@class,"breadcrumbs")]//li/a[contains(.,'${breadCrumbRef}')]`;
      if (state === 'on') {
        await this.api.element('xpath', breadCrumbXpath, async (visible) => {
          if (visible.status !== -1) {
            StatusMessages[4] = `Success -> ${xpathText} is successfully verified as "${breadCrumbRef}"`;
          } else {
            checkError = 'Error Occurred';
            StatusMessages[4] = `Failure -> ${xpathText} is NOT matching reference BreadCrumb "${breadCrumbRef}"`;
          }
        });
      }

      return checkError;
    },

    async createNewCategory(catName) {
      await client.keys(catName);
      await client.keys([client.Keys.RETURN]);
      // await this.api.pause(1000);
    },

    async findAndAssignProducts(catName, productTable) {
      const selectCategory = {
        selector: `//ul[@class="jstree-children"]//a[contains(text(),"${catName}")]`,
        locateStrategy: 'xpath',
      };

      await this.waitUntilVisibleElement(selectCategory);
      await this.clickVisibleElement(selectCategory);
      console.log(
        CONSOLE_COLORS.pink,
        `********'${catName}' - Category Item Assignment ********`
      );

      for (let index = 0; index < productTable[0].length; index += 1) {
        await this.clickVisibleElement('@searchItem');
        await this.clearField('@searchItem');
        await this.setField('@searchItem', productTable[0][index]);
        await this.api.pause(1500);
        await this.clickVisibleElement('@assignItem');
        await this.api.pause(500);
        await this.waitUntilVisibleElement('@CloseSuccessMsg');
        await this.clickVisibleElement('@CloseSuccessMsg');
        console.log(
          `Success -> Successfully assigned item '${productTable[0][index]}' to category '${catName}'`
        );
        await this.waitUntilVisibleElement('@CloseSuccessMsg');
        await this.clickVisibleElement('@CloseSuccessMsg');
      }

      await this.api.pause(5000);
    },

    async verifyItemsAssigned(catName, count) {
      const selectCategory = `//ul[@class="jstree-children"]//a[contains(text(),"${catName}")]//following-sibling::div/a[contains(.,'${count} items')]`;

      await this.api.pause(1500);
      await this.api.element('xpath', selectCategory, (visible) => {
        if (visible.status !== -1) {
          console.log(
            `Category ${catName} has ${count} items CORRECTLY assigned`
          );
        } else {
          throw new Error(
            `Category ${catName} has INCORRECT  number of items assigned`
          );
        }
      });
    },

    async searchNSelectCat(catName) {
      const selectCategory = {
        selector: `//div[@class="row"]//ul[@class="jstree-children"]//a[contains(text(),"${catName}")]/i[contains(@class,"checkbox")]`,
        locateStrategy: 'xpath',
      };

      this.clickVisibleElement(selectCategory);
      this.api.pause(1000);
    },

    async DeleteCategory() {
      this.api.execute('scrollTo(0,0)');
      this.clickVisibleElement('@btnDelete');
      this.api.pause(1000);
      this.clickVisibleElement('@btnConfirmDeleteCategory');
      this.api.pause(2000);
    },

    async VerifyCreateCategory(msg) {
      await this.api.pause(3000);
      await this.waitUntilVisibleElement('@toastMsg');
      await this.getText('@toastMsg', async (result) => {
        const successMessage = result.value;
        this.checkElementTextContains('@toastMsg', msg);
        console.log(
          CONSOLE_COLORS.cyan,
          `Actual Pop Up Message is -> ${successMessage}`
        );
        console.log(
          CONSOLE_COLORS.pink,
          `Expected Pop Up Message is -> ${msg}`
        );
      });
      await this.waitUntilVisibleElement('@CloseSuccessMsg');
      await this.clickVisibleElement('@CloseSuccessMsg');
    },

    async VerifyCategoryListing(catName, productTableData) {
      const listedItemCodes = `//div[@class="page"]//div[@class="category-products"]//span[@class="item-code"]`;
      const productTable = productTableData.raw();

      await this.api.pause(5000);
      await this.api.elements('xpath', listedItemCodes, async (elemArray) => {
        let index = 0;
        elemArray.value.forEach((elem) => {
          client.elementIdText(elem.ELEMENT, (itemNameValue) => {
            itemNameListing[index] = itemNameValue.value;
            index += 1;
          });
        });
      });

      itemNameListing.sort();
      productTable[0].sort();

      // verify the listing count
      if (itemNameListing.length === productTable[0].length) {
        console.log(
          `Success -> Category "${catName}" has got ${itemNameListing.length} number of products assigned as expected.`
        );
      } else {
        throw new Error(
          `Failure -> Category "${catName}" has got ${itemNameListing.length} number of products assigned However expected ${productTable[0].length}.`
        );
      }

      // verify product names individually
      console.log(
        CONSOLE_COLORS.BGCyan,
        `*********************  Verifying products under Category "${catName}"  ********************* `
      );

      for (let index = 0; index < productTable[0].length; index += 1) {
        if (itemNameListing[index] === productTable[0][index]) {
          console.log(
            `Success -> Category "${catName}" has correctly got " ${itemNameListing[index]}" products assigned as expected.`
          );
        } else {
          throw new Error(
            `Failure -> Expected Product ${productTable[0][index]} however found '${itemNameListing[index]} under '${catName}' Category listing`
          );
        }
      }
    },

    async VerifyDeleteCategory(msg) {
      console.log(msg);
    },

    async createCustomFilter(filterType, filterName) {
      const customFilter = {
        selector: `(//td[contains(text(),'${filterType}')]/following-sibling::td[1]/div[contains(@class,"bootstrap-switch-off")])[1]`,
        locateStrategy: 'xpath',
      };

      const FilterName = {
        selector: `//td[contains(text(),'${filterType}')]/following-sibling::td[1]/div[contains(@class,"bootstrap-switch-on")]/parent::td/following-sibling::td/input[@value="${filterType}" or @value="${filterName}"]`,
        locateStrategy: 'xpath',
      };
      await this.clickVisibleElement(customFilter); // enable custom filter
      await this.api.pause(200);
      await this.clearField(FilterName);
      await this.setField(FilterName, filterName); // name the filter
      await this.api.pause(200);
      await this.api.execute('scrollTo(0,0)');
      await this.clickVisibleElement('@btnApply');
    },

    async clickManageKeys(filterName) {
      const manageFilterKeys = {
        selector: `//div[@class="form-body"]//td[descendant::input[@value="${filterName}"]]//following-sibling::td/div/a`,
        locateStrategy: 'xpath',
      };
      await this.api.pause(1000);
      await this.clickVisibleElement(manageFilterKeys);
      await this.api.pause(1500);
    },

    async verifyHeading3(heading) {
      await this.checkElementTextContains('@heading3', heading);
    },

    async CreateFilterKeys(keysTable) {
      const keysTableArray = keysTable.raw();
      for (let index = 1; index <= keysTable.rows().length; index += 1) {
        await this.clickVisibleElement('@btnAddNewKey');
        await this.api.pause(1000);
        await this.setField('@txtFilterBy', keysTableArray[index][0]);
        await this.setField('@txtTitle', keysTableArray[index][1]);
        await this.clickVisibleElement('@btnAdd');
        await this.api.pause(1000);
      }
    },

    async UpdateProductsWithFilterKeys(filterName, ProductTable) {
      const updateFilter = {
        selector: `//label[contains(.,"${filterName}")]//following-sibling::div//input[@type="search"]`,
        locateStrategy: 'xpath',
      };

      const productPageFullyLoaded =
        '//a[contains(text(),"View Stock Levels")]';
      const ProductTableArray = ProductTable.raw();
      for (
        let KeyRowIndex = 0;
        KeyRowIndex <= ProductTable.rows().length;
        KeyRowIndex += 1
      ) {
        for (
          let ProductIndex = 1;
          ProductIndex < ProductTableArray[0].length;
          ProductIndex += 1
        ) {
          await this.api.pause(6500); // this is required when we iterate to second product onwards to wait for page to load...
          await productsPage.searchEditProductCode(
            ProductTableArray[KeyRowIndex][ProductIndex]
          );
          await this.waitUntilVisibleElement(updateFilter);
          await this.clickVisibleElement(updateFilter);
          await client.keys([ProductTableArray[KeyRowIndex][0]]);
          await this.api.pause(2000);
          await client.keys([client.Keys.RETURN]);
          await this.api.pause(1500);
          console.log(
            `Updated Product ${ProductTableArray[KeyRowIndex][ProductIndex]} with key ${ProductTableArray[KeyRowIndex][0]}`
          );
          await this.api.execute('scrollTo(0,0)');
          await this.api.pause(500);
          await this.clickVisibleElement('@btnSave');
          await this.clickVisibleElement('@CloseSuccessMsg');
          await this.api.pause(2000);
          await this.api.isEnabled(
            'xpath',
            productPageFullyLoaded,
            async (result) => {
              if (result.status !== -1) {
                console.log(result.value);
              }

              adminSideMenu.clickProductsLink();
            }
          );
        }
      }

      await this.api.pause(3000);
    },

    async VerifyFilterProductsOnFrontEnd(filterName, ProductTable) {
      let ProductXpath = '';
      const FilterXpath = `//div[@class="page"]//div[contains(@class,"sidebar in-sidebar sidebar-filter")]//dt[contains(.,'${filterName}')]`;
      let filterKey = '';

      await this.api.pause(2000);
      await this.api.element(
        'xpath',
        FilterXpath,
        (FilterVisibleOnFrontEnd) => {
          if (FilterVisibleOnFrontEnd.status !== -1) {
            console.log(
              `Success -> Filter ${filterName} is found on search results on Front End`
            );
          } else {
            throw new Error(
              `Failure -> Filter ${filterName} is NOT found on search results on Front End`
            );
          }
        }
      );

      const ProductTableArray = ProductTable.raw();
      for (
        let KeyRowIndex = 0;
        KeyRowIndex <= ProductTable.rows().length;
        KeyRowIndex += 1
      ) {
        filterKey = {
          selector: `//div[@class="page"]//div[contains(@class,"sidebar in-sidebar sidebar-filter")]//a[contains(.,'${ProductTableArray[KeyRowIndex][0]}')]`,
          locateStrategy: 'xpath',
        };
        await this.clickVisibleElement(filterKey);
        await this.api.pause(3000);

        for (
          let ProductIndex = 1;
          ProductIndex < ProductTableArray[0].length;
          ProductIndex += 1
        ) {
          ProductXpath = `//span[@class="item-code" and contains(.,'${ProductTableArray[KeyRowIndex][ProductIndex]}')]`;

          await this.api.element('xpath', ProductXpath, async (visible) => {
            if (visible.status !== -1) {
              console.log(
                `Success -> Product ${ProductTableArray[KeyRowIndex][ProductIndex]} is found under filter ${filterName} --> ${ProductTableArray[KeyRowIndex][0]} `
              );
            } else {
              throw new Error(
                `Failure -> Product ${ProductTableArray[KeyRowIndex][ProductIndex]} is NOT found under filter ${filterName} --> ${ProductTableArray[KeyRowIndex][0]} `
              );
            }
          });
        }
      }
    },

    async deleteAllKeys() {
      await this.clickVisibleElement('@btnDeleteAllKeys');
      await this.api.pause(1500);
      await this.clickVisibleElement('@btnDeleteKeysConfirm');
      await this.api.pause(1000);
      await this.clickVisibleElement('@btnBack');
      await this.api.pause(1500);
    },

    async disableFilter(filterName) {
      const CustomFilter = {
        selector: `//td[following-sibling::td//input[@value="${filterName}"]][2]//div/label[@class="bootstrap-switch-label"]`,
        locateStrategy: 'xpath',
      };

      await this.clickVisibleElement(CustomFilter);
      await this.api.pause(200);
      await this.api.execute('scrollTo(0,0)');
      await this.clickVisibleElement('@btnApply');
    },

    async UpdateSiteSettings(settingTable) {
      const settingValues = settingTable.raw();
      const numberOfProductsPerLine = {
        selector: `//div[contains(@class,"form-group") and descendant::label[contains(.,"Number of products to display per line on full resolution")]]/div/select/option[@value="${settingValues[1][1]}"]`,
        locateStrategy: 'xpath',
      };
      await this.clickVisibleElement(numberOfProductsPerLine);
      await this.api.pause(500);
      // await this.clickVisibleElement('@numberOfProductsPerPage');
      await this.clearField('@numberOfProductsPerPage');
      await this.setField('@numberOfProductsPerPage', settingValues[1][0]);
      await this.api.pause(1000);
      await this.clickVisibleElement('@CloseSuccessMsg');
      await this.api.execute('scrollTo(1000,0)');
      await this.clickVisibleElement('@btnApply');
      await this.api.pause(1000);
    },

    async VerifySiteSettings(settingTable) {
      let NextPageExist = false;
      const noOfDataElements = {
        selector: '//div[@id="top"]//ul[@id="listing-ul"]',
        locateStrategy: 'xpath',
      };

      const settingValues = settingTable.raw();
      const pageNext = '(//div[@class="pager"]//li/a[contains(.,">")])[1]';

      // site default view is line view so no need to click
      console.log(
        CONSOLE_COLORS.BGCyan,
        '************* Verifying Line View *****************'
      );
      await this.verifyNoOfProducts(settingValues);

      await this.clickVisibleElement('@GridView');
      await this.api.pause(1000);
      console.log(
        CONSOLE_COLORS.BGCyan,
        '************* Verifying Grid View *****************'
      );
      await this.verifyNoOfProducts(settingValues);
      await client.getAttribute(
        noOfDataElements,
        'data-items-per-line',
        async (result) => {
          if (result.value === settingValues[1][1]) {
            console.log(
              `Success -> No of Products displayed per line ${result.value} matches with site settings`
            );
          } else {
            throw new Error(
              `Failure -> No of Products displayed per line ${result.value} does NOT match with site setting value ${settingValues[1][1]}`
            );
          }
        }
      );

      await this.clickVisibleElement('@ListView');
      await this.api.pause(1000);
      console.log(
        CONSOLE_COLORS.BGCyan,
        '************* Verifying List View *****************'
      );
      await this.verifyNoOfProducts(settingValues);

      await this.api.elements('xpath', pageNext, async (visible) => {
        if (visible.status !== -1) {
          NextPageExist = true;
        }
      });

      if (NextPageExist) {
        await this.clickVisibleElement('@nextPage');
        console.log(
          CONSOLE_COLORS.BGCyan,
          '-----******** Verifying Next Page ************-----'
        );
        await this.verifyNoOfProducts(settingValues);
        await this.clickVisibleElement('@GridView');
        await this.api.pause(1000);
        console.log(
          CONSOLE_COLORS.BGCyan,
          '************* Verifying Grid View *****************'
        );
        await this.verifyNoOfProducts(settingValues);
        await this.clickVisibleElement('@LineView');
        await this.api.pause(1000);
        console.log(
          CONSOLE_COLORS.BGCyan,
          '************* Verifying Line View *****************'
        );
        await this.verifyNoOfProducts(settingValues);
      }
    },

    async verifyNoOfProducts(settingValues) {
      const productArray = '//div[@class="page"]//div//h2//a';
      let noOfProductPerPage = 0;
      await this.getValue('@DropDownPerPageProduct', (result) => {
        noOfProductPerPage = result.value;
      });

      if (noOfProductPerPage === settingValues[1][0]) {
        console.log(
          `Success -> No Of products per page is ${noOfProductPerPage} as per site settings and it matches with front end dropdown value `
        );
      } else {
        throw new Error(
          ` Failure -> Site Settings -> No of products per page ${noOfProductPerPage} does NOT match front end dropdown value ${settingValues[1][0]}`
        );
      }

      await this.api.elements('xpath', productArray, async (elemArray) => {
        if (elemArray.value.length <= Number(settingValues[1][0])) {
          console.log(
            `Success -> No Of products displayed per page is ${elemArray.value.length} and matches Site Settings as expected `
          );
        } else {
          throw new Error(
            `Failure  -> No Of products displayed per page is ${elemArray.value.length} and does NOT match Site Settings ${settingValues[1][0]} as expected `
          );
        }
      });
    },
  },
];

module.exports = {
  elements,
  commands,
};
