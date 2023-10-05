const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');

const { addToCartValues } = require('../../helper/constants/constants');

const loginPage = client.page.login_po();
const addToCartPage = client.page.addToCart_po();
const adminSideMenu = client.page.adminSideMenu_po();
const customerPage = client.page.customer_po();
const addOnFeaturesPage = client.page.addOnFeatures_po();
const CheckoutPage = client.page.checkout_po();

Given(/^I am on the storePHP page$/, async () => {
  await loginPage.verifyHomePage();
  await loginPage.enterLoginCredentials();
  await loginPage.clickLoginButton();
  await loginPage.verifyLogin();
  await addToCartPage.clearAllCartBeforeSearch();
});

When(
  /^I search for the product "([^"]*)" in the search box and click search Icon$/,
  async (code) => {
    await addToCartPage.searchProCode(code);
    await addToCartPage.clickSearchIcon();
  }
);

Then(/^I click on the product "([^"]*)"$/, async (prodDesc) => {
  await addToCartPage.clickProduct(prodDesc);
});

Then(/^I should see the product detail page$/, async () => {
  await addToCartPage.verifyProductName();
});

When(/^I click on Add to Cart button on the product$/, async () => {
  await addToCartPage.clickAddToCart();
});

Given(/^I am on the Home page$/, async () => {
  await loginPage.verifyHomePage();
});

Given(/^I click on WebStore button$/, async () => {
  await loginPage.clickWebStoreButtononAdminPanel();
  await addToCartPage.clearAllCartBeforeSearch();
});

When(
  /^I update quantity as "([^"]*)" and click on Add to Cart button$/,
  async (quantity) => {
    await addToCartPage.addtoCart(quantity);
  }
);

Given(
  /^I am on the admin dashboard and I assume B2C customer "([^"]*)"$/,
  async (emailID) => {
    await loginPage.verifyHomePage();
    await loginPage.enterLoginCredentials();
    await loginPage.clickLoginButton();
    await loginPage.verifyLogin();
    await loginPage.clickAdminButton();
    await loginPage.verifyAdminDashboard();
    await adminSideMenu.clickCustomerButton();
    await adminSideMenu.clickManageCustomerButton();
    await customerPage.verifyActiveCustomerPage();
    await customerPage.searchByEmail(emailID);
    await customerPage.clickAssume(emailID);
    await loginPage.verifyHomePage();
    await addToCartPage.clearAllCartBeforeSearch();
  }
);

When(/^I assume B2C Customer "([^"]*)"$/, async (emailID) => {
  await adminSideMenu.clickCustomerButton();
  await adminSideMenu.clickManageCustomerButton();
  await customerPage.verifyActiveCustomerPage();
  await customerPage.searchByEmail(emailID);
  await customerPage.clickAssume(emailID);
  await loginPage.verifyHomePage();
  await addToCartPage.clearAllCartBeforeSearch();
});

Then(
  /^I should verify the product status is Instock and price in product detail page$/,
  async () => {
    await addToCartPage.verifyProductName();
    await addToCartPage.enterQty();
    await addToCartPage.verifyProductStatus();
    await addToCartPage.verifyPrice();
  }
);

Then(
  /^I should verify the product status is OutOfStock and price in product detail page$/,
  async () => {
    await addToCartPage.verifyProductName();
    await addToCartPage.verifyProductStatus();
    await addToCartPage.verifyPrice();
  }
);

Given(/^I am on the storeAdminPhp$/, async () => {
  await loginPage.verifyHomePage();
  await loginPage.enterLoginCredentials();
  await loginPage.clickLoginButton();
  await loginPage.verifyLogin();
  await loginPage.clickAdminButton();
  await loginPage.verifyAdminDashboard();
});

When(/^I click on Cart icon Button$/, async () => {
  await addToCartPage.viewCart();
});

When(
  /^I click on Cart icon Button and click Proceed to checkout$/,
  async () => {
    await addToCartPage.viewCart();
    await CheckoutPage.clickCheckout();
  }
);

When(/^I click on Cart icon Button and clear it and logout$/, async () => {
  await addToCartPage.viewCart();
  await addOnFeaturesPage.clearCartOnCartPage();
  await loginPage.clickLogout();
});

Then(/^I see onepage checkout screen$/, async () => {
  await addOnFeaturesPage.verifyPageLoading();
});

Then(/^I see "([^"]*)" message$/, async (msg) => {
  await addToCartPage.verifySettingsSaved(msg);
});

Then(
  /^I am On search listing page and I should verify Add to cart button is not shown$/,
  async () => {
    await addToCartPage.verifyAddToCartButton();
  }
);

Then(
  /^I should verify Add to cart button is not shown on product details page$/,
  async () => {
    await addToCartPage.verifyProductName();
    await addToCartPage.verifyAddToCartButton();
  }
);

When(
  /^I click one of the variant options and I click on Add to Cart button$/,
  async () => {
    await addToCartPage.clickVariantOptions();
    await addToCartPage.verifyProductStatus();
    await addToCartPage.verifyPrice();
    await addToCartPage.enterQty();
    await addToCartPage.clickAddToCart();
  }
);

When(
  /^I click "([^"]*)" variant options and I click on Add to Cart button$/,
  async (noOfVarOptions) => {
    await addToCartPage.clickTwoVariantOptions(noOfVarOptions);
    await addToCartPage.verifyProductStatus();
    await addToCartPage.verifyPrice();
    await addToCartPage.enterQty();
    await addToCartPage.clickAddToCart();
  }
);

Then(
  /^I should see order is allocated as below and additional qty shown as Backordered for the product "([^"]*)" Successfully$/,
  async (prodName, datatable) => {
    const data = datatable.raw();
    await addToCartPage.verifyWarehouseAllocation(prodName, data);
    await addToCartPage.verifyBackOrder(prodName);
    await addToCartPage.verifyBackorderTotals(prodName);
  }
);
Then(/^I should see error msg "([^"]*)"$/, async (errorMsg) => {
  await addToCartPage.VerifyPopUpMessage(errorMsg);
});

When(/^I click on the category "([^"]*)"$/, async (category) => {
  await addToCartPage.clickCategory(category);
});

Then(/^I should see all the products in "([^"]*)"$/, async (categoryName) => {
  await addToCartPage.verifyCategorypage(categoryName);
});

When(
  /^I click "([^"]*)" different UOMs below one by one verify price and stock and update qty as "([^"]*)" and click add to cart$/,
  async (noOfUOMs, quantity, datatable) => {
    const UOMs = datatable.raw();
    await addToCartPage.verifyAndAddUOMtoCart(noOfUOMs, UOMs, quantity);
  }
);

When(
  /^I click "([^"]*)" different UOMs below one by one and update qty as "([^"]*)" and click add to cart$/,
  async (noOfUOMs, quantity, datatable) => {
    const UOMs = datatable.raw();
    await addToCartPage.AddUOMtoCart(noOfUOMs, UOMs, quantity);
  }
);

Then(
  /^I should verify for below product - Cart Calculations are correct$/,
  async (datatable) => {
    const data = datatable.raw();
    await addToCartPage.verifyCartSummary(data);
  }
);

When(
  /^I can see cart page successfully tallying all product totals$/,
  { timeout: 2500 * 1000 },
  async () => {
    await addToCartPage.verifyCartSummary(addToCartValues.loadTestData);
  }
);

Then(
  /^I should verify for different UOMs of product "([^"]*)" - Cart Calculations are correct$/,
  async (prodName, datatable) => {
    const UOMsTable = datatable.raw();
    await addToCartPage.verifyCartSummary(UOMsTable, prodName);
  }
);

When(
  /^I verify state tax as '([^"]*)' percentage and county tax as '([^"]*)' percentage$/,
  async (stateTaxRt, countyTaxRt) => {
    await addToCartPage.verifyTax(Number(stateTaxRt), Number(countyTaxRt));
  }
);

Then(/^I clear the cart$/, async () => {
  await addOnFeaturesPage.clearCartOnCartPage();
});

When(
  /^I click add to cart button for the below products$/,
  async (datatable) => {
    const data = datatable.raw();
    await addToCartPage.addMultipleProductCart(data);
  }
);

When(
  /^I add "([^"]*)" listed items to cart$/,
  { timeout: 2500 * 1000 },
  async (noOfItems) => {
    await addToCartPage.addtoCartLoadTest(noOfItems);
  }
);

Then(/^I add sample comment against product$/, async () => {
  await addToCartPage.AddCommentToProduct();
});
