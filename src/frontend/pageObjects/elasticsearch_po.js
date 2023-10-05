const elements = {
  pageTitle: '.page-title',
  reIndexButton: '#reindexSubmit',
  toaster: '#toast-container',
  toasterMessage: '.toast-message',
  status: '#client_status',
};

const commands = [
  {
    async verifyElasticsearchManageModulePage() {
      await this.api.pause(5000);
      await this.waitUntilVisibleElement('@pageTitle');
      await this.getText('@pageTitle', async (result) => {
        const text = result.value;
        this.checkElementTextContains('@pageTitle', text);
        console.log('Success ->', `${text} page has been loaded successfully`);
      });
    },

    async clickReIndexButton() {
      await this.api.pause(7000);
      await this.waitUntilVisibleElement('@reIndexButton');
      await this.clickVisibleElement('@reIndexButton');
    },
    async verifyProgressPopup() {
      await this.waitUntilVisibleElement('@toaster');
      await this.checkElementTextContains(
        '@toasterMessage',
        'Job is already in progress'
      );
    },
    async verifyFinishStatus(result) {
      await this.api.pause(5000);
      await this.api.refresh();
      await this.checkElementTextContains('@status', result);
      await this.api.pause(5000);
    },
  },
];

module.exports = {
  elements,
  commands,
};
