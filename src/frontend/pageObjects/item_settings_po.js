const elements = {
  pageTitle: '.page-title',
  toasterMessage: '.toast-message',
  closeToastMessage: {
    selector:
      '//div[@id="toast-container"]//button[@class="toast-close-button"]',
    locateStrategy: 'xpath',
  },
  applyBtn: {
    selector: '//input[@value="Apply"]',
    locateStrategy: 'xpath',
  },
  successMsg: {
    selector: '//div[@class="success"]/p',
    locateStrategy: 'xpath',
  },
  homeLink: {
    selector: '//a[contains(.,"Home")]',
    locateStrategy: 'xpath',
  },
  itemDetailTextBox: {
    selector:
      '//div[@class="table-container"]//tr//input[@name="columns[0][search][value]"]',
    locateStrategy: 'xpath',
  },
  itemLength: {
    selector: '//tbody/tr/td[2]/input',
    locateStrategy: 'xpath',
  },
  itemWidth: {
    selector: '//tbody/tr/td[3]/input',
    locateStrategy: 'xpath',
  },
  itemHeight: {
    selector: '//tbody/tr/td[4]/input',
    locateStrategy: 'xpath',
  },
  itemWeight: {
    selector: '//tbody/tr/td[6]/input',
    locateStrategy: 'xpath',
  },
};

const commands = [
  {
    async updateItemSettings(dataTable) {
      const itemSettings = dataTable.raw();

      await this.api.pause(5000);
      await this.clickVisibleElement('@itemDetailTextBox');
      await this.clearField('@itemDetailTextBox');
      await this.setField('@itemDetailTextBox', itemSettings[1][0]);
      await this.api.pause(3000);

      await this.clickVisibleElement('@itemLength');
      await this.clearField('@itemLength');
      await this.setField('@itemLength', itemSettings[1][1]);
      await this.api.pause(500);

      await this.clickVisibleElement('@itemWidth');
      await this.clearField('@itemWidth');
      await this.setField('@itemWidth', itemSettings[1][2]);
      await this.api.pause(500);

      await this.clickVisibleElement('@itemHeight');
      await this.clearField('@itemHeight');
      await this.setField('@itemHeight', itemSettings[1][3]);
      await this.api.pause(500);

      await this.clickVisibleElement('@itemWeight');
      await this.clearField('@itemWeight');
      await this.setField('@itemWeight', itemSettings[1][4]);
      await this.api.pause(500);

      await this.clickVisibleElement('@applyBtn');
      await this.api.pause(1000);
    },
  },
];

module.exports = {
  elements,
  commands,
};
