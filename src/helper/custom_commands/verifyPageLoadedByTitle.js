exports.command = function verifyPageLoadedByTitle(title) {
  this.waitUntilVisibleElement(title);
  this.getText(title, async (result) => {
    const PageTitle = result.value;
    await this.checkElementTextContains(title, PageTitle);
    await console.log(
      'Success ->',
      `${PageTitle} page has been loaded successfully`
    );
  });
};
