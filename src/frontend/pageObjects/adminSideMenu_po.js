const elements = {
  systemTab: {
    selector: '//span[text()="System"]',
    locateStrategy: 'xpath',
  },
  SiteSettingsMenu: {
    selector:
      '//ul[@class="page-sidebar-menu"]//ul[@class="sub-menu"]//li/a[contains(.,"Site Settings")]',
    locateStrategy: 'xpath',
  },
  IntegratedServices: {
    selector: '//a[contains(text(),"Integrated Services")]',
    locateStrategy: 'xpath',
  },
  paymentSettings: {
    selector: '//span[text()="Payment Settings"]',
    locateStrategy: 'xpath',
  },
  shippingSetupLink: {
    selector: '//span[text()="Shipping Setup"]',
    locateStrategy: 'xpath',
  },
  cartons: {
    selector: '//span[text()="Shipping Setup"]//following::ul[1]/li[8]',
    locateStrategy: 'xpath',
  },
  paymentMethods: {
    selector: '//span[text()="Payment Settings"]//following::ul[1]/li[4]',
    locateStrategy: 'xpath',
  },
  customerLink: {
    selector: '//span[text()="Customers"]',
    locateStrategy: 'xpath',
  },
  manageCustomerLink: {
    selector: '//li[@class="open"]/ul/li[1]/a',
    locateStrategy: 'xpath',
  },
  modulesTab: {
    selector: '//span[text()="Modules"]',
    locateStrategy: 'xpath',
  },
  listingManagerTab: {
    selector: '//span[text()="Modules"]//following::ul[1]/li[17]',
    locateStrategy: 'xpath',
  },
  catalogTab: {
    selector: '//span[text()="Catalog"]',
    locateStrategy: 'xpath',
  },
  productsLink: {
    selector: '//span[text()="Catalog"]//following::ul[1]/li[1]',
    locateStrategy: 'xpath',
  },
  promotionLink: {
    selector: '//span[text()="Promotions"]',
    locateStrategy: 'xpath',
  },
  publicPromo: {
    selector: '//span[text()="Promotions"]//following::ul[1]/li[1]',
    locateStrategy: 'xpath',
  },
  contentManagementTab: {
    selector: '//span[text()="Content Management"]',
    locateStrategy: 'xpath',
  },
  sliderRevolutionLink: {
    selector:
      '//span[text()="Content Management"]//following::ul[1]/li/a[contains(.,"Slider Revolution")]',
    locateStrategy: 'xpath',
  },
  promo: {
    selector: '//span[text()="Promotions"]//following::ul[1]/li[1]',
    locateStrategy: 'xpath',
  },
  categoryLink: {
    selector:
      '//span[text()="Catalog"]//following::ul[1]/li[contains(.,"Categories")]/a',
    locateStrategy: 'xpath',
  },
  productVariationsTab: {
    selector: '//span[text()="Product Variations"]',
    locateStrategy: 'xpath',
  },
  variantProductsLink: {
    selector: '//span[text()="Product Variations"]//following::ul[1]/li[1]/a',
    locateStrategy: 'xpath',
  },
  productConfiguratorTab: {
    selector: '//span[text()="Product Configurator"]',
    locateStrategy: 'xpath',
  },
  configuratorProductLink: {
    selector: '//span[text()="Product Configurator"]//following::ul[1]/li[1]/a',
    locateStrategy: 'xpath',
  },
  customPagesLink: {
    selector: '//span[text()="Content Management"]//following::ul[1]/li[2]',
    locateStrategy: 'xpath',
  },
  productFilters: {
    selector:
      '//ul[@class="page-sidebar-menu"]//a[contains(.,"Product Filters")]',
    locateStrategy: 'xpath',
  },
  productSettings: {
    selector: '//span[text()="Product Settings"]',
    locateStrategy: 'xpath',
  },
  customFields: {
    selector: '//span[text()="Product Settings"]//following::ul[1]/li[1]',
    locateStrategy: 'xpath',
  },
  defaultPagesLink: {
    selector: '//span[text()="Content Management"]//following::ul[1]/li[1]',
    locateStrategy: 'xpath',
  },
  defaultPageLoaded: {
    selector: '//body//a[text()="Cart"]',
    locateStrategy: 'xpath',
  },
  elasticsearchLink: {
    selector: '//span[text()="Product Settings"]//following::ul[1]/li[2]',
    locateStrategy: 'xpath',
  },
  sageIntegrationLink: {
    selector: '//span[text()="Sage Integration"]',
    locateStrategy: 'xpath',
  },
  masterAdminLink: {
    selector: '//span[text()="Master Admin"]',
    locateStrategy: 'xpath',
  },
  addOnFeaturesLink: {
    selector: '//span[text()="Master Admin"]//following::li[2]',
    locateStrategy: 'xpath',
  },
  CustomerMenu: {
    selector:
      '//ul[@class="page-sidebar-menu"]//following::span[text()="Customers"]',
    locateStrategy: 'xpath',
  },
  CustomerSettingMenu: {
    selector:
      '//ul[@class="page-sidebar-menu"]//following::span[text()="Customer Settings"]',
    locateStrategy: 'xpath',
  },
  SageAccountsMenu: {
    selector: '//span[text() = "Sage Accounts"]',
    locateStrategy: 'xpath',
  },
  CustomerListingsMenu: {
    selector:
      '//span[text()="Sage Accounts"]//following::a[contains(text(),"Customer Listings")]',
    locateStrategy: 'xpath',
  },
  CustomShipToMenu: {
    selector: '//a[contains(@href,"Mcustomers_shipto_custom_fields")]',
    locateStrategy: 'xpath',
  },
  FeaturesMenu: {
    selector: '//span[text()="System"]//following::li[13]/a',
    locateStrategy: 'xpath',
  },
  title: {
    selector: '//h3[@class="page-title"]',
    locateStrategy: 'xpath',
  },
  B2CMenuDropDown: {
    selector: '//select[@id="scope"]/option[@value="public"]',
    locateStrategy: 'xpath',
  },
  carriersLink: {
    selector: '//ul[@class="sub-menu"]/li/a[contains(.,"Carriers")]',
    locateStrategy: 'xpath',
  },
  itemSettings: {
    selector: '//ul[@class="sub-menu"]/li/a[contains(.,"Item Settings")]',
    locateStrategy: 'xpath',
  },
};

const commands = [
  {
    async clickCustomerButton() {
      await this.clickVisibleElement('@customerLink');
    },

    async clickManageCustomerButton() {
      await this.waitUntilVisibleElement('@manageCustomerLink');
      await this.clickVisibleElement('@manageCustomerLink');
    },

    async clickSystemButton() {
      await this.clickVisibleElement('@systemTab');
      await this.api.pause(1000);
    },

    async clickSiteSettingsMenu() {
      await this.clickVisibleElement('@SiteSettingsMenu');
      await this.api.pause(2000);
    },

    async clickIntegratedServices() {
      await this.clickVisibleElement('@IntegratedServices');
      await this.api.pause(1000);
    },

    async clickPaymentSettingsButton() {
      await this.api.pause(1000);
      await this.clickVisibleElement('@paymentSettings');
    },
    async clickPaymentMethods() {
      await this.api.pause(1000);
      await this.clickVisibleElement('@paymentMethods');
    },

    async clickListingManagerTab() {
      await this.clickVisibleElement('@systemTab');
      await this.api.pause(2000);
      await this.clickVisibleElement('@modulesTab');
      await this.api.pause(2000);
      await this.clickVisibleElement('@listingManagerTab');
    },

    async clickCatalogTab() {
      await this.clickVisibleElement('@catalogTab');
      await this.api.pause(1000);
    },

    async clickProductsLink() {
      await this.waitUntilVisibleElement('@productsLink');
      await this.clickVisibleElement('@productsLink');
    },

    async clickPromotions() {
      await this.clickVisibleElement('@promotionLink');
      await this.api.pause(500);
    },

    async clickPublicPromo() {
      await this.clickVisibleElement('@publicPromo');
      await this.api.pause(500);
    },

    async clickContentManagementTab() {
      await this.clickVisibleElement('@contentManagementTab');
      await this.api.pause(1000);
    },

    async clickSliderRevolutionLink() {
      await this.clickVisibleElement('@sliderRevolutionLink');
    },
    async clickShippingSetup() {
      await this.clickVisibleElement('@shippingSetupLink');
      await this.api.pause(500);
    },
    async clickItemSettings() {
      await this.clickVisibleElement('@itemSettings');
      await this.api.pause(1000);
    },
    async clickCartons() {
      await this.clickVisibleElement('@cartons');
    },
    async clickPromo() {
      await this.clickVisibleElement('@promo');
    },
    async clickCategoryLink() {
      await this.clickVisibleElement('@categoryLink');
      await this.api.pause(5000);
    },
    async clickProductVariations() {
      await this.clickVisibleElement('@productVariationsTab');
    },
    async clickVariantProduct() {
      await this.clickVisibleElement('@variantProductsLink');
    },
    async clickProductConfigurator() {
      await this.clickVisibleElement('@productConfiguratorTab');
    },
    async clickConfiguratorProducts() {
      await this.clickVisibleElement('@configuratorProductLink');
    },
    async clickCustomPagesLink() {
      await this.clickVisibleElement('@customPagesLink');
    },
    async clickProductSettingsLink() {
      await this.clickVisibleElement('@productSettings');
    },
    async clickCustomFields() {
      await this.clickVisibleElement('@customFields');
    },
    async clickDefaultPagesLink() {
      await this.clickVisibleElement('@defaultPagesLink');
      await this.waitUntilVisibleElement('@defaultPageLoaded');
    },
    async clickElasticsearchLink() {
      await this.clickVisibleElement('@elasticsearchLink');
    },
    async clickSageIntegrationLink() {
      await this.clickVisibleElement('@sageIntegrationLink');
      await this.api.pause(2000);
    },
    async clickMasterAdminLink() {
      await this.clickVisibleElement('@masterAdminLink');
      await this.api.pause(2000);
    },
    async clickAddOnFeaturesLink() {
      await this.clickVisibleElement('@addOnFeaturesLink');
      await this.api.pause(2000);
    },
    async clickCustomersMenu() {
      await this.clickVisibleElement('@CustomerMenu');
      await this.api.pause(1000);
    },
    async clickCustomerSettingsMenu() {
      await this.clickVisibleElement('@CustomerSettingMenu');
      await this.api.pause(1000);
    },
    async clickCustomFieldsShipto() {
      await this.clickVisibleElement('@CustomShipToMenu');
      await this.api.pause(3000);
    },
    async clickSageAccountsMenu() {
      await this.clickVisibleElement('@SageAccountsMenu');
      await this.api.pause(1000);
    },
    async clickCustomerListingsMenu() {
      await this.clickVisibleElement('@CustomerListingsMenu');
      await this.api.pause(1000);
    },
    async clickFeaturesMenu() {
      await this.clickVisibleElement('@FeaturesMenu');
      await this.api.pause(2000);
    },
    async verifyFeaturePage() {
      await this.waitUntilVisibleElement('@title');
      await this.getText('@title', async (pageTitle) => {
        console.log(
          'Success ->',
          `${pageTitle.value} page has been loaded successfully`
        );
      });
    },
    async clickB2CPublicDropDown() {
      await this.waitUntilVisibleElement('@B2CMenuDropDown');
      await this.clickVisibleElement('@B2CMenuDropDown');
      await this.api.pause(2000);
    },
    async clickProductFiltersMenu() {
      await this.waitUntilVisibleElement('@productFilters');
      await this.clickVisibleElement('@productFilters');
      await this.api.pause(2000);
    },
    async clickCarriersLink() {
      await this.clickVisibleElement('@carriersLink');
      await this.api.pause(1000);
    },
  },
];

module.exports = {
  elements,
  commands,
};
