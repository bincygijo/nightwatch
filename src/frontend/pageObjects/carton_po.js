const { cartonDetails } = require('../../helper/constants/constants');

const elements = {
  addCarton: '#add-carton',
  cartonTable: '#cartonDatatable',
  saveCarton: '#save-carton',
  newRow: '.save-row',
  name: {
    selector: '//table[@id="cartonDatatable"]/tbody/tr[1]/td[1]/input',
    locateStrategy: 'xpath',
  },
  length: {
    selector: '//table[@id="cartonDatatable"]/tbody/tr[1]/td[2]/input',
    locateStrategy: 'xpath',
  },
  width: {
    selector: '//table[@id="cartonDatatable"]/tbody/tr[1]/td[3]/input',
    locateStrategy: 'xpath',
  },
  height: {
    selector: '//table[@id="cartonDatatable"]/tbody/tr[1]/td[4]/input',
    locateStrategy: 'xpath',
  },
  volume: {
    selector: '//table[@id="cartonDatatable"]/tbody/tr[1]/td[5]/input',
    locateStrategy: 'xpath',
  },
  cartonRow: {
    selector:
      '//table[@id="cartonDatatable"]/tbody/tr/td[text()="TestAutomation"]',
    locateStrategy: 'xpath',
  },
  delete: {
    selector:
      '//table[@id="cartonDatatable"]/tbody/tr/td[text()="TestAutomation"]/following::td[5]/a[2]',
    locateStrategy: 'xpath',
  },
  title: {
    selector: '//h3[@class="page-title"]',
    locateStrategy: 'xpath',
  },
  toaster: '.toast-title',
  toastMsg: '.toast-message',
};

const commands = [
  {
    async verifyCartonManagementPage(pageTitle) {
      await this.waitUntilVisibleElement('@title');
      await this.assert.containsText(
        '@title',
        pageTitle,
        `${pageTitle} is NOT loaded successfully`
      );
    },

    async clickAddCarton() {
      await this.waitUntilVisibleElement('@addCarton');
      await this.clickVisibleElement('@addCarton');
    },

    async verifyCartonRowCreated() {
      await this.waitUntilVisibleElement('@cartonTable');
      await this.waitUntilVisibleElement('@newRow');
    },

    async enterCartonDetails() {
      await this.waitUntilVisibleElement('@cartonTable');
      await this.setField('@name', cartonDetails.cartonName);
      await this.setField('@length', cartonDetails.cartonLength);
      await this.setField('@width', cartonDetails.cartonWidth);
      await this.setField('@height', cartonDetails.cartonHeight);
      await this.setField('@volume', cartonDetails.cartonVolume);
    },
    async clickSaveButton() {
      await this.waitUntilVisibleElement('@saveCarton');
      await this.clickVisibleElement('@saveCarton');
      await this.waitUntilVisibleElement('@toaster');
    },
    async verifyNewCartonCreated() {
      await this.waitUntilVisibleElement('@cartonRow');
      await console.log('Success-> New Carton is created successfully');
    },
    async deleteCartonCreated() {
      await this.waitUntilVisibleElement('@delete');
      await this.clickVisibleElement('@delete');
    },
    async verifyCartonDelete(SuccessMsg) {
      await this.waitUntilVisibleElement('@toastMsg');
      await this.assert.containsText(
        '@toastMsg',
        SuccessMsg,
        `${SuccessMsg} - is not shown as expected`
      );
    },
  },
];

module.exports = {
  elements,
  commands,
};
