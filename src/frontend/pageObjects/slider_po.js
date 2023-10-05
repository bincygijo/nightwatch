const elements = {
  title: '.view_title',
};
const commands = [
  {
    async verifySliderRevolutionPage() {
      await this.waitUntilVisibleElement('@title');
      await this.getText('@title', async (result) => {
        const PageTitle = result.value;
        this.checkElementTextContains('@title', PageTitle);
        console.log(
          'Success ->',
          `${PageTitle} page has been loaded successfully`
        );
      });
    },
  },
];

module.exports = {
  elements,
  commands,
};
