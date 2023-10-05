const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');

const loginPage = client.page.login_po();
const adminSideMenu = client.page.adminSideMenu_po();
const categoryPage = client.page.category_po();
const addToCartPage = client.page.addToCart_po();
const variantProductPage = client.page.variantProduct_po();

Then(/^I should navigated to Variant Products page$/, async () => {
  await variantProductPage.verifyVariantProductsPage();
});

Given(/^I am on the Variant Products page$/, async () => {
  // await loginPage.verifyHomePage();
  await loginPage.enterLoginCredentials();
  await loginPage.clickLoginButton();
  // await loginPage.verifyLogin();
  await loginPage.clickAdminButton();
  await loginPage.verifyAdminDashboard();
  await adminSideMenu.clickCatalogTab();
  await adminSideMenu.clickProductVariations();
  await adminSideMenu.clickVariantProduct();
  await variantProductPage.verifyVariantProductsPage();
});

When(
  /^I enter variant products details and click Save button$/,
  async (datatable) => {
    const data = datatable.raw();
    await variantProductPage.enterVariantDetails(data);
    await variantProductPage.clickSave();
  }
);

Then(/^I should see variant details saved successfully$/, async () => {
  await variantProductPage.verifyAction();
});

When(/^I click Variants tab on the variant product page$/, async () => {
  await variantProductPage.clickVariantTab();
});

Then(/^I should see variant product details page$/, async () => {
  await variantProductPage.verifyVariantProductsPage();
});

When(
  /^I select "([^"]*)" variants option and click Add Option button$/,
  async (option) => {
    await variantProductPage.addOptionToVariant(option);
    await variantProductPage.clickAddOptionButton();
  }
);

When(
  /^I search for a product code "([^"]*)" and click Link Item to Variant$/,
  async (pCode) => {
    await variantProductPage.searchProductVariant(pCode);
    await variantProductPage.clickLinkItemVariant();
  }
);

When(/^I click General Tab on the variant product detail page$/, async () => {
  await variantProductPage.clickGeneralTab();
});

When(
  /^I add Price Itemno "([^"]*)" on the General Settings page and click Apply button$/,
  async (product) => {
    await variantProductPage.addPriceItem(product);
    await variantProductPage.clickApply();
  }
);

Then(/^I should see details saved successfully$/, async () => {
  await variantProductPage.verifyAction();
});

When(
  /^I search for the variant is already exists before creating new one$/,
  async (datatable) => {
    const data = datatable.raw();
    await variantProductPage.checkVariantProductExists(data);
  }
);

When(
  /^I search for the product and click Link Item to Variant$/,
  async (data) => {
    await variantProductPage.AddProductsToVariant(data);
  }
);

When(
  /^I select Category "([^"]*)" and assign newly created variant product$/,
  async (catName, prodData) => {
    const productTable = prodData.raw();
    await adminSideMenu.clickCategoryLink();
    await categoryPage.findAndAssignProducts(catName, productTable);
  }
);

When(
  /^I click on variant swatches color "([^"]*)" and click on Add to Cart button$/,
  async (color) => {
    await variantProductPage.clickVariantSwatches(color);
    await addToCartPage.clickAddToCart();
  }
);
When(
  /^I select variant dropdown "([^"]*)" and click on Add to Cart button$/,
  async (dropdown) => {
    await variantProductPage.clickVariantDropdown(dropdown);
    await addToCartPage.clickAddToCart();
  }
);

When(
  /^I select variants option and click Add Option button$/,
  async (datatable) => {
    const data = datatable.raw();
    await variantProductPage.matrixOptionAddToVariant(data);
  }
);

When(
  /^I search for the product and click Link Item to Variant matrix$/,
  async (data) => {
    await variantProductPage.matrixProductsAddToVariant(data);
  }
);

When(
  /^I click on variant matrix "([^"]*)" and click on Add to Cart button$/,
  async (matrix) => {
    await variantProductPage.clickVariantMatrix(matrix);
    await addToCartPage.clickAddToCart();
  }
);
