const { client } = require('nightwatch-api');
const { When, Then } = require('cucumber');

const adminSideMenu = client.page.adminSideMenu_po();

When(/^I click the Customers Menu link$/, async () => {
  await adminSideMenu.clickCustomerButton();
});

When(/^I click Manage Customers link$/, async () => {
  await adminSideMenu.clickManageCustomerButton();
});

When(/^I click on the System link from the admin side menu$/, async () => {
  await adminSideMenu.clickSystemButton();
});

When(/^I click on Site Settings Menu$/, async () => {
  await adminSideMenu.clickSiteSettingsMenu();
});

When(/^I click payment settings$/, async () => {
  await adminSideMenu.clickPaymentSettingsButton();
});

Then(/^I click payment method$/, async () => {
  await adminSideMenu.clickPaymentMethods();
});

When(/^I click on the Catalog link$/, async () => {
  await adminSideMenu.clickCatalogTab();
});

When(/^I click on the Products link$/, async () => {
  await adminSideMenu.clickProductsLink();
});

When(/^I click the Promotions link$/, async () => {
  await adminSideMenu.clickPromotions();
});

When(/^I click Public Promo link$/, async () => {
  await adminSideMenu.clickPublicPromo();
});

When(/^I click the Content Management link$/, async () => {
  await adminSideMenu.clickContentManagementTab();
});

When(/^I click the Slider Revolution link$/, async () => {
  await adminSideMenu.clickSliderRevolutionLink();
});

When(/^I click on the Shipping Setup link$/, async () => {
  await adminSideMenu.clickShippingSetup();
});

When(/^I click on the Item Settings under Shipping Setup Menu$/, async () => {
  await adminSideMenu.clickItemSettings();
});

When(/^I click on the Cartons link$/, async () => {
  await adminSideMenu.clickCartons();
});

When(/^I click on the Promo link$/, async () => {
  await adminSideMenu.clickPromo();
});

When(/^I click on the Categories link$/, async () => {
  await adminSideMenu.clickCategoryLink();
});

When(/^I click on the Product Variations link$/, async () => {
  await adminSideMenu.clickProductVariations();
});

When(/^I click on the Variant Products link$/, async () => {
  await adminSideMenu.clickVariantProduct();
});

When(/^I click on the Product Configurator link$/, async () => {
  await adminSideMenu.clickProductConfigurator();
});

When(/^I click on the Configurator Products link$/, async () => {
  await adminSideMenu.clickConfiguratorProducts();
});

When(/^I click on the Custom Pages link$/, async () => {
  await adminSideMenu.clickCustomPagesLink();
});

When(/^I click on the Product Settings link$/, async () => {
  await adminSideMenu.clickProductSettingsLink();
});

When(/^I click on the Custom Fields link$/, async () => {
  await adminSideMenu.clickCustomFields();
});

When(/^I click on the Default Pages link$/, async () => {
  await adminSideMenu.clickDefaultPagesLink();
});

When(/^I click on the Elasticsearch link$/, async () => {
  await adminSideMenu.clickElasticsearchLink();
});

When(/^I click on the Shipping Setup under System Menu$/, async () => {
  await adminSideMenu.clickSystemButton();
  await adminSideMenu.clickShippingSetup();
});

When(/^I click on the Integrated Service$/, async () => {
  await adminSideMenu.clickIntegratedServices();
});

When(/^I click on the Sage Integration link$/, async () => {
  await adminSideMenu.clickSageIntegrationLink();
});

When(/^I click on the Master Admin link$/, async () => {
  await adminSideMenu.clickMasterAdminLink();
});

When(/^I click on the Add On Features link$/, async () => {
  await adminSideMenu.clickAddOnFeaturesLink();
});

When(/^I click on Sage Accounts Menu$/, async () => {
  await adminSideMenu.clickSageAccountsMenu();
});

When(/^I click on Customer Listings Menu$/, async () => {
  await adminSideMenu.clickCustomerListingsMenu();
});

Then(
  /^I click on the Features link to see Site Features Settings Page$/,
  async () => {
    await adminSideMenu.clickFeaturesMenu();
    await adminSideMenu.verifyFeaturePage();
  }
);

When(/^I click on B2C Public settings$/, async () => {
  await adminSideMenu.clickB2CPublicDropDown();
});

When(/^I click on Product Filters$/, async () => {
  await adminSideMenu.clickProductFiltersMenu();
});

When(/^I click on the Carriers link$/, async () => {
  await adminSideMenu.clickCarriersLink();
});
