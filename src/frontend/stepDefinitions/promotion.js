const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');

const loginPage = client.page.login_po();
const promotionPage = client.page.promotion_po();
const adminSideMenu = client.page.adminSideMenu_po();
const addToCartPage = client.page.addToCart_po();

Then(/^I should navigated to Promotion code for promo page$/, async () => {
  await promotionPage.verifyPublicPromoPage();
});

Given(/^I am on the Promo listing page$/, async () => {
  // await loginPage.verifyHomePage();
  await loginPage.enterLoginCredentials();
  await loginPage.clickLoginButton();
  // await loginPage.verifyLogin();
  await loginPage.clickAdminButton();
  await loginPage.verifyAdminDashboard();
  await adminSideMenu.clickPromotions();
  await adminSideMenu.clickPublicPromo();
});

When(/^I click Create New Promo Code link$/, async () => {
  await promotionPage.clickNewPublicPromo();
});

When(/^I click scope for Dealer link$/, async () => {
  await promotionPage.clickScopeDealer();
});

When(
  /^I enter promo discount based on "([^"]*)" details and click Apply$/,
  async (promo, datatable) => {
    const data = datatable.raw();
    await promotionPage.enterPromotionDetails(promo, data);
    await promotionPage.clickApplyButton();
    // await promotionPage.clickConfirmButton();
  }
);

When(/^The promotion code is created successfully$/, async () => {
  await promotionPage.verifyAction();
  // await promotionPage.clickBackButton();
});

When(/^I delete the public promo which is created$/, async (datatable) => {
  const data = datatable.raw();
  await promotionPage.deletePublicPromo(data);
});

Then(/^The Promo code is deleted successfully$/, async () => {
  await promotionPage.verifyAction();
});

Then(
  /^I should navigated to Promotion code for dealer promo page$/,
  async () => {
    await promotionPage.verifyDealerPromoPage();
  }
);

Given(/^I am on the Dealer Promo listing page$/, async () => {
  await loginPage.verifyHomePage();
  await loginPage.enterLoginCredentials();
  await loginPage.clickLoginButton();
  await loginPage.verifyLogin();
  await loginPage.clickAdminButton();
  await loginPage.verifyAdminDashboard();
  await adminSideMenu.clickPromotions();
  await adminSideMenu.clickDealerPromo();
});

When(
  /^I click Create New Promo Code button on the dealer promo page$/,
  async () => {
    await promotionPage.clickNewDealerPromo();
  }
);

When(
  /^I enter dealer promotion details and click Apply button$/,
  async (datatable) => {
    const data = datatable.raw();
    await promotionPage.enterDealerPromo(data);
    await promotionPage.clickApplyButton();
    await promotionPage.clickConfirmButton();
  }
);

Then(/^The dealer promotion code is created successfully$/, async () => {
  await promotionPage.verifyAction();
  await promotionPage.clickBackButton();
});

When(/^I delete the dealer promo which is created$/, async (datatable) => {
  const data = datatable.raw();
  await promotionPage.deleteDealerPromotion(data);
});

Then(/^The dealer promo code is deleted successfully$/, async () => {
  await promotionPage.verifyAction();
});

Then(
  /^I enter the promotion code in the "([^"]*)" page$/,
  async (pgName, datatable) => {
    const data = datatable.raw();
    await promotionPage.enterPromotion(pgName, data);
  }
);

Then(
  /^I should see "([^"]*)" message in the "([^"]*)" page$/,
  async (message, pgName) => {
    await promotionPage.verifySuccessPromotion(pgName, message);
    await promotionPage.clickButtonOk();
  }
);

When(
  /^I verify the promotion discount applied to the product$/,
  async (datatable) => {
    const data = datatable.raw();
    await promotionPage.verifyPromotionDiscount(data);
  }
);

When(/^I delete the promotion code which is created$/, async (datatable) => {
  await loginPage.clickAdminButton();
  // await loginPage.verifyAdminDashboard();
  await adminSideMenu.clickPromotions();
  await adminSideMenu.clickPublicPromo();
  const data = datatable.raw();
  await promotionPage.deletePublicPromo(data);
});

When(
  /^I search for the promo code is already exists before creating new one$/,
  async (datatable) => {
    const data = datatable.raw();
    await promotionPage.checkPromoCodeExists(data);
  }
);

When(/^I remove the promotion from the cart page$/, async () => {
  await promotionPage.clickDeletePromoCart();
});

When(
  /^I remove the promotion from the cart page after checking free shipping$/,
  async () => {
    await addToCartPage.viewCart();
    await promotionPage.clickDeletePromoCart();
  }
);

Then(
  /^I should verify the "([^"]*)" in the shipping method page$/,
  async (code) => {
    await promotionPage.verifyFreeShippingPromoShippingPage(code);
  }
);

When(
  /^I enter promo discount based on "([^"]*)" details and apply Unlimited Usage$/,
  async (promo, datatable) => {
    const data = datatable.raw();
    await promotionPage.createPromoUnlimited(promo, data);
    await promotionPage.clickApplyButton();
  }
);
