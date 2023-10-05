const { client } = require('nightwatch-api');
const { When, Then } = require('cucumber');

const categoryPage = client.page.category_po();
const loginPage = client.page.login_po();

When(
  /^I click on item assigned for the category "([^"]*)"$/,
  async (category) => {
    await categoryPage.clickCategoryItemPopup(category);
  }
);

Then(
  /^I should read details of all products assigned to that category in admin$/,
  async () => {
    await categoryPage.verifyCategoryCount();
    await categoryPage.clickCloseButton();
  }
);

Then(
  /^I see "([^"]*)" are listed as per "([^"]*)" sort order method$/,
  async (sortObject, sortMethod) => {
    await categoryPage.verifyCategoryOnFrontEnd(sortObject, sortMethod);
  }
);

When(/^I click on the sort by "([^"]*)" method$/, async (sortMethod) => {
  await categoryPage.changeSortMethod(sortMethod);
});
Then(/^I should be navigated to "([^"]*)" page$/, async (catPageTitle) => {
  await categoryPage.verifyMenuPage(catPageTitle);
});

When(/^I click on "([^"]*)" button$/, async (action) => {
  await categoryPage.clickButton('', action);
});

When(/^I enter Category title as "([^"]*)"$/, async (catName) => {
  await categoryPage.createNewCategory(catName);
});

When(
  /^I select Category "([^"]*)" and click "([^"]*)" button next to it$/,
  async (parentCat, action) => {
    await categoryPage.clickButton(parentCat, action);
  }
);

When(
  /^I search "([^"]*)" category and "([^"]*)" it if it exists$/,
  async (parentCat, action) => {
    await categoryPage.clickButton(parentCat, action);
  }
);

When(/^I click on "([^"]*)" tab$/, async (tabName) => {
  await categoryPage.clickTab(tabName);
});

Then(/^I see "([^"]*)" tab active$/, async (tabName) => {
  await categoryPage.verifyTab(tabName);
});

When(/^I update below Catalog-Category settings$/, async (dataTable) => {
  await categoryPage.updateCatalogSettings(dataTable);
});

Then(/^I verify below Catalog-Category settings$/, async (dataTable) => {
  await categoryPage.verifyCatalogSettings(dataTable);
  await categoryPage.throwError();
});

When(
  /^I select Category "([^"]*)" and assign below products$/,
  async (catName, prodData) => {
    const productTable = prodData.raw();
    await categoryPage.findAndAssignProducts(catName, productTable);
  }
);

When(/^I search and select "([^"]*)" category$/, async (catName) => {
  await categoryPage.searchNSelectCat(catName);
});

When(/^I click Delete button$/, async () => {
  await categoryPage.DeleteCategory();
});

When(
  /^I configure Mega Menu "([^"]*)" for below values$/,
  async (moduleName, dataTable) => {
    await categoryPage.ConfigureMegaMenu(moduleName, dataTable);
  }
);

Then(
  /^I verify "([^"]*)" Mega Menu "([^"]*)" for below values$/,
  async (catName, moduleName, dataTable) => {
    await categoryPage.VerifyMegaMenu(catName, moduleName, dataTable);
  }
);

When(/^I delete Mega Menu for '([^"]*)' category$/, async (catName) => {
  await categoryPage.DeleteMegaMenu(catName);
  await categoryPage.throwError();
});

When(/^I click Apply button on Category page$/, async () => {
  await categoryPage.ClickApplyButton();
});

When(/^I hover on the category "([^"]*)"$/, async (CatName) => {
  await categoryPage.HoverCategory(CatName);
});

Then(
  /^I see Category "([^"]*)" and child categories deleted successfully$/,
  async (catName) => {
    await categoryPage.VerifyDeleteCategory(
      `${catName}. category has been deleted`
    );
  }
);

Then(
  /^I see "([^"]*)" items successfully assigned to category "([^"]*)"$/,
  async (count, catName) => {
    await categoryPage.verifyItemsAssigned(catName, count);
  }
);

When(
  /^I select first un-used "([^"]*)" Filter and name it "([^"]*)" and click apply button$/,
  async (filtertype, filtername) => {
    await categoryPage.createCustomFilter(filtertype, filtername);
  }
);

When(/^I click on Manage Filter keys for "([^"]*)"$/, async (filterName) => {
  await categoryPage.clickManageKeys(filterName);
});

Then(/^I see page with heading "([^"]*)"$/, async (heading) => {
  await categoryPage.verifyHeading3(heading);
});

When(
  /^I enter below information for keys and click Add button$/,
  async (keysTable) => {
    await categoryPage.CreateFilterKeys(keysTable);
  }
);

When(
  /^I choose different products as below and assign keys under filter "([^"]*)"$/,
  { timeout: 300 * 1000 },
  async (filterName, productTable) => {
    await categoryPage.UpdateProductsWithFilterKeys(filterName, productTable);
  }
);

When(
  /^Below keys are shown successfully along with products under filter "([^"]*)"$/,
  async (filterName, productTable) => {
    await categoryPage.VerifyFilterProductsOnFrontEnd(filterName, productTable);
  }
);

When(/^I delete all filter keys$/, async () => {
  await categoryPage.deleteAllKeys();
});

When(/^I disable "([^"]*)" and click Apply button$/, async (filterName) => {
  await categoryPage.disableFilter(filterName);
});

When(/^I click on admin button$/, async () => {
  await loginPage.clickAdminButton();
});

Then(/^Category creation is confirmed with "([^"]*)" message$/, async (msg) => {
  await categoryPage.VerifyCreateCategory(msg);
});

Then(
  /^I find below products listed correctly for "([^"]*)"$/,
  async (catName, productTable) => {
    await categoryPage.VerifyCategoryListing(catName, productTable);
  }
);

When(
  /^I update Ordering & Display Settings as below$/,
  async (settingTable) => {
    await categoryPage.UpdateSiteSettings(settingTable);
  }
);

Then(
  /^I can see products are displayed as per site settings on each page of search results for each view type$/,
  { timeout: 240 * 1000 },
  async (settingTable) => {
    await categoryPage.VerifySiteSettings(settingTable);
  }
);

When(
  /^I update Catalog-Category Filter settings with below order$/,
  async (dataTable) => {
    await categoryPage.updateCatalogFilterSettings(dataTable);
  }
);

Then(
  /^I verify Catalog-Category Filter settings with below order$/,
  async (dataTable) => {
    await categoryPage.verifyCatalogFilterSettings(dataTable);
    await categoryPage.throwError();
  }
);
