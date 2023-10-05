const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');

const loginPage = client.page.login_po();
const adminSideMenu = client.page.adminSideMenu_po();
const contentManagementPage = client.page.contentManagement_po();

Then(/^I should navigated to Manage Site Contents pages$/, async () => {
  await contentManagementPage.verifyContentManagementPage();
});

Given(/^I am on the Manage Site Contents page$/, async () => {
  await loginPage.verifyHomePage();
  await loginPage.enterLoginCredentials();
  await loginPage.clickLoginButton();
  await loginPage.verifyLogin();
  await loginPage.clickAdminButton();
  await loginPage.verifyAdminDashboard();
  await adminSideMenu.clickContentManagementTab();
  await adminSideMenu.clickCustomPagesLink();
  await contentManagementPage.verifyContentManagementPage();
});

When(
  /^I search for a custom page "([^"]*)" and click Edit button$/,
  async (page) => {
    await contentManagementPage.searchPage(page);
    await contentManagementPage.clickEditButton();
  }
);

Then(/^I should navigated to edit custom page$/, async () => {
  await contentManagementPage.verifyEditContentPage();
});

When(/^I add content grid by clicking Add Container button$/, async () => {
  await contentManagementPage.clickAddContainerButton();
});

When(/^I add New Column by clicking New Column button$/, async () => {
  await contentManagementPage.clickAddNewColumnButton();
});

Then(/^I should see the new Column pop up window$/, async () => {
  await contentManagementPage.verifyNewColumnPopWindow();
});

When(/^I select Available column size and click Apply button$/, async () => {
  await contentManagementPage.selectAvailableColumnSize();
  await contentManagementPage.searchAvailableColumnSize();
  await contentManagementPage.clickApplyButton();
});

Then(/^I should see New Column added successfully$/, async () => {
  await contentManagementPage.verifyAction();
});

When(/^I click on the Responsive content grid Delete button$/, async () => {
  await contentManagementPage.clickDeleteRow();
});

When(
  /^I click Delete button on the delete container confirmation pop up window$/,
  async () => {
    await contentManagementPage.clickDeleteConfirmation();
  }
);

Then(/^I should see your container has been deleted message$/, async () => {
  await contentManagementPage.verifyAction();
});

Then(/^I should navigated to the Manage Default Dealer pages$/, async () => {
  await contentManagementPage.verifyDealerManagementPage();
});

Given(/^I am on the Manage default dealer page$/, async () => {
  await loginPage.verifyHomePage();
  await loginPage.enterLoginCredentials();
  await loginPage.clickLoginButton();
  await loginPage.verifyLogin();
  await loginPage.clickAdminButton();
  await loginPage.verifyAdminDashboard();
  await adminSideMenu.clickContentManagementTab();
  await adminSideMenu.clickDefaultPagesLink();
  await contentManagementPage.verifyDealerManagementPage();
});

When(/^I click Edit button on the "([^"]*)" link$/, async (pages) => {
  await contentManagementPage.clickEditPages(pages);
});

Then(/^I should navigate to manage site content page$/, async () => {
  await contentManagementPage.verifyContentManagementPage();
});

When(/^I click Add Container button$/, async () => {
  await contentManagementPage.clickContainer();
});

When(/^I click Add Container button on Category Page$/, async () => {
  await contentManagementPage.clickContainerCategory();
});

Then(/^I should see grid msg "([^"]*)"$/, async (msg) => {
  await contentManagementPage.verifyGridMsg(msg);
});

When(/^I click on the Edit Content link$/, async () => {
  await contentManagementPage.clickEditContent();
});

Then(/^I click Apply button on the warning pop up window$/, async () => {
  await contentManagementPage.clickApplyButtons();
});

Then(
  /^I click Apply button on the warning pop up window and close pop up$/,
  async () => {
    await contentManagementPage.clickApplyButtons();
    await contentManagementPage.closePopup();
  }
);

When(/^I click on the Account link$/, async () => {
  await contentManagementPage.clickAccountMenu();
});

Then(/^I should see User Account Grid applied$/, async () => {
  await contentManagementPage.verifyAccountGridHomePage();
});

When(/^I click Delete button on the container grid$/, async () => {
  await contentManagementPage.clickDeleteContainer();
});

Then(/^I should see Delete container pop up window$/, async () => {
  await contentManagementPage.verifyNewColumnPopWindow();
});

When(/^I click on the container pop up Delete button$/, async () => {
  await contentManagementPage.clickDeletePoP();
});

When(
  /^I click Action button and click Edit column on the Product Image Module$/,
  async () => {
    await contentManagementPage.clickActionBtn();
  }
);

When(
  /^I update Column Title and Column Size in the Column Settings page$/,
  async () => {
    await contentManagementPage.EnterColumnSettingDetails();
  }
);

Then(/^I select "([^"]*)" from the Content list$/, async (content) => {
  await contentManagementPage.selectContentFromList(content);
});

When(
  /^I select Available column size "([^"]*)" and "([^"]*)" from the New Column list$/,
  async (size, type) => {
    await contentManagementPage.selectContentTypeColumn(size, type);
  }
);

When(/^I click edit button on the "([^"]*)"$/, async (module) => {
  await contentManagementPage.clickEditProductDetails(module);
});

When(
  /^I enable display settings on the Product Detail Module pop up$/,
  async () => {
    await contentManagementPage.clickTitleSection('on');
    await contentManagementPage.clickSecondaryDesc('on');
    await contentManagementPage.clickQuantityInput('on');
    await contentManagementPage.clickUomText('on');
    await contentManagementPage.clickAddToCart('on');
    await contentManagementPage.clickStockStatus('on');
    await contentManagementPage.clickPriceSection('on');
    await contentManagementPage.clickModelPopUpApplyBtn();
  }
);
Then(/^I should see Details have been updated successfully$/, async () => {
  await contentManagementPage.verifyAction();
});

Then(
  /^I should verify product Image and Product Details grid module in product detail page$/,
  async () => {
    await contentManagementPage.verifyProductImageGrid();
    await contentManagementPage.verifyProductTitle();
    await contentManagementPage.verifyProductPrice();
    await contentManagementPage.verifyProductStockStatus();
    await contentManagementPage.verifyProductAddToCartBtn();
  }
);

When(
  /^I click Enable legacy Header button and click Apply button$/,
  async () => {
    await contentManagementPage.clickEnablelegacyHeader('off');
  }
);

Then(/^I should verify the Category Menu Grid at header$/, async () => {
  await contentManagementPage.verifyCategoryGrid();
});

When(/^I click Apply button on the Edit Content pop up$/, async () => {
  await contentManagementPage.clickApplyButton();
});

When(/^I delete the added container at the header grid$/, async () => {
  await contentManagementPage.clickAdminMenu();
  await loginPage.verifyAdminDashboard();
  await adminSideMenu.clickContentManagementTab();
  await adminSideMenu.clickDefaultPagesLink();
  await contentManagementPage.verifyDealerManagementPage();
  await contentManagementPage.clickEditContentPage();
  await contentManagementPage.clickDeleteContainer();
  await contentManagementPage.clickDeletePoP();
});

Then(
  /^I should see the container deleted successfully at header module$/,
  async () => {
    await contentManagementPage.verifyAction();
  }
);

When(
  /^I click disable display settings on the Category Product listing Module pop up$/,
  async () => {
    await contentManagementPage.clicktabLine();
    await contentManagementPage.disableProductTab('Stock Count', 'off');
    await contentManagementPage.disableProductTab('Product Tab 1', 'off');
    await contentManagementPage.disableProductTab('Product Tab 2', 'off');
    await contentManagementPage.disableProductTab('Product Tab 3', 'off');
    await contentManagementPage.disableProductTab('Product Tab 4', 'off');
    await contentManagementPage.disableProductTab('Product Tab 5', 'off');
    await contentManagementPage.disableProductTab('Warehouse Quantity', 'off');
    await contentManagementPage.disableProductTab(
      'Product Secondary Des',
      'off'
    );
    await contentManagementPage.clickModelPopUpApplyBtn();
  }
);

When(/^I click on WebStore button in the admin dashboard$/, async () => {
  await loginPage.clickWebStoreButtononAdminPanel();
});

Then(/^I should verify all Category Grid Module$/, async () => {
  await contentManagementPage.verifyCategoryTitleMiscModule();
  await contentManagementPage.verifyCategoryBreadcrumbsMiscModule();
  await contentManagementPage.verifyCategoryDisplayMiscModule();
  await contentManagementPage.verifyCategorySortByMiscModule();
  await contentManagementPage.verifyCategoryResultMiscModule();
  await contentManagementPage.verifyCategoryFilterGrid();
  await contentManagementPage.verifyCategoryProductDesc();
  await contentManagementPage.verifyCategoryProductPrice();
});

When(/^I delete the added container at the category grid$/, async () => {
  await loginPage.clickAdminButton();
  await loginPage.verifyAdminDashboard();
  await adminSideMenu.clickContentManagementTab();
  await adminSideMenu.clickDefaultPagesLink();
  await contentManagementPage.verifyDealerManagementPage();
  await contentManagementPage.clickPageEdit();
  await contentManagementPage.clickDeleteContainer();
  await contentManagementPage.clickDeletePoP();
});

When(/^I click Apply button on the Edit Content$/, async () => {
  await contentManagementPage.clickPopUpApply();
});

Then(/^I update the Cart Action Buttons Module settings pop up$/, async () => {
  await contentManagementPage.updateActionButtonsSettings(
    'Continue Shopping',
    'off'
  );
  await contentManagementPage.updateActionButtonsSettings(
    'Update Shopping Cart',
    'off'
  );
  await contentManagementPage.updateActionButtonsSettings(
    'Proceed to Checkout',
    'off'
  );
  await contentManagementPage.clickPopUpApply();
  await contentManagementPage.scrollTop();
});

When(/^I enter "([^"]*)" and click Apply$/, async (title) => {
  await contentManagementPage.EnterPageTitle(title);
});

When(
  /^I click Apply button and I should see details updated successfully$/,
  async () => {
    await contentManagementPage.ApplyPopUp();
  }
);
When(
  /^I update the settings on the Sage 300 Cart summary pop up Module$/,
  async () => {
    await contentManagementPage.EnableShipmentTotal();
    await contentManagementPage.clickEditCartSummary();

    await contentManagementPage.updateCartSummarySettings(
      'Backorder Total',
      'off'
    );
    await contentManagementPage.updateCartSummarySettings(
      'Preorder Total',
      'off'
    );
    await contentManagementPage.updateCartSummarySettings('Subtotal', 'off');
    await contentManagementPage.updateCartSummarySettings('Sales Tax', 'off');
    await contentManagementPage.updateCartSummarySettings(
      'Shipping Estimate',
      'off'
    );
    await contentManagementPage.updateCartSummarySettings('Grand Total', 'off');
    await contentManagementPage.updateCartSummarySettings(
      'Proceed to Checkout Button',
      'off'
    );
    await contentManagementPage.updateCartSummarySettings(
      'Paypal Express Button',
      'off'
    );
    await contentManagementPage.clickPopUpApply();
  }
);

When(/^I click Add Container button on the header grid page$/, async () => {
  await contentManagementPage.clickAddContainer();
});

Then(
  /^I update the settings on the X3 Cart summary pop up Module$/,
  async () => {
    await contentManagementPage.EnableShipmentTotal();
    await contentManagementPage.clickEditCartSummary();

    await contentManagementPage.updateCartSummarySettings(
      'Backorder Total',
      'off'
    );
    await contentManagementPage.updateCartSummarySettings(
      'Preorder Total',
      'off'
    );
    await contentManagementPage.updateCartSummarySettings(
      'Shipment Total',
      'off'
    );
    await contentManagementPage.updateCartSummarySettings('Subtotal', 'off');
    await contentManagementPage.updateCartSummarySettings(
      'Shipping Estimate',
      'off'
    );
    await contentManagementPage.updateCartSummarySettings('Grand Total', 'off');
    await contentManagementPage.updateCartSummarySettings('GST', 'off');
    await contentManagementPage.updateCartSummarySettings(
      'Proceed to Checkout Button',
      'off'
    );
    await contentManagementPage.updateCartSummarySettings(
      'Paypal Express Button',
      'off'
    );
    await contentManagementPage.clickPopUpApply();
  }
);
