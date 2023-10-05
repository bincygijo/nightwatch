const elements = {
  backButton: {
    selector: '//div[@class="pull-right"]/a[1]',
    locateStrategy: 'xpath',
  },
  searchPromo: {
    selector: '//table[@id="datatable"]/thead/tr[2]/td[1]/input',
    locateStrategy: 'xpath',
  },
  deleteButton: {
    selector: '//table[@id="datatable"]/tbody/tr[1]/td[11]/a[2]',
    locateStrategy: 'xpath',
  },
  dealerButton: {
    selector: '//a[text()="Create New Promo Code"]',
    locateStrategy: 'xpath',
  },
  scope: {
    selector: '//label[text()="Dealer"]',
    locateStrategy: 'xpath',
  },
  pageTitle: '.page-title',
  testURL: {
    selector: '//input[@name="ups_url_test"]',
    locateStrategy: 'xpath',
  },
  pURL: {
    selector: '//input[@name="ups_url"]',
    locateStrategy: 'xpath',
  },
  intType: {
    selector: '//div[@id="uniform-production"]',
    locateStrategy: 'xpath',
  },
  username: {
    selector: '//input[@name="ups_username"]',
    locateStrategy: 'xpath',
  },
  UPSPassword: {
    selector: '//input[@name="ups_password"]',
    locateStrategy: 'xpath',
  },
  FedExPassword: {
    selector: '//input[@name="fedex_password"]',
    locateStrategy: 'xpath',
  },
  UPSAccountNo: {
    selector: '//input[@name="ups_accountno"]',
    locateStrategy: 'xpath',
  },
  FedExAccountNo: {
    selector: '//input[@name="fedex_account"]',
    locateStrategy: 'xpath',
  },
  UPSAccessKey: {
    selector: '//input[@name="ups_accesskey"]',
    locateStrategy: 'xpath',
  },
  FedExKey: {
    selector: '//input[@name="fedex_key"]',
    locateStrategy: 'xpath',
  },
  FedExMeterNo: {
    selector: '//input[@name="fedex_meter"]',
    locateStrategy: 'xpath',
  },
  FedExPackaging: {
    selector: '//select[@name="fedex_package"]/option[@value="YOUR_PACKAGING"]',
    locateStrategy: 'xpath',
  },
  FedExNegRates: {
    selector:
      '//label[contains(text(),"Show Negotiated Rates")]//following::label[@class="bootstrap-switch-label"][1]',
    locateStrategy: 'xpath',
  },
  FedExStreetNo: {
    selector: '//input[@name="fedex_streetno"]',
    locateStrategy: 'xpath',
  },
  FedExStreet: {
    selector: '//input[@name="fedex_street"]',
    locateStrategy: 'xpath',
  },
  FedExCity: {
    selector: '//input[@name="fedex_city"]',
    locateStrategy: 'xpath',
  },
  FedExZipCode: {
    selector: '//input[@name="fedex_zip"]',
    locateStrategy: 'xpath',
  },
  UPSZipCode: {
    selector: '//input[@name="ups_zipcode"]',
    locateStrategy: 'xpath',
  },
  saveButton: {
    selector: '//input[@class="btn green"]',
    locateStrategy: 'xpath',
  },
  txtUPSShippingNextDay: '//label[contains(text(), "UPS Next Day Air®")]',
  txtUPSShipping2ndDay: '//label[contains(text(), "UPS Second Day Air®")]',
};

const commands = [
  {
    async clickScopeDealer() {
      await this.api.pause(2000);
      await this.waitUntilVisibleElement('@scope');
      await this.clickVisibleElement('@scope');
    },

    async EditButton(Carrier) {
      const editButton = {
        selector: `//table[@id="assigned-items-table"]//td[contains(text(), '${Carrier}')]//following::i[@class="fa fa-pencil fa-fw"][1]`,
        locateStrategy: 'xpath',
      };
      await this.clickVisibleElement(editButton);
      await this.api.pause(4000);
    },

    async showShippingModule() {
      await this.waitUntilVisibleElement('@pageTitle');
      await this.getText('@pageTitle', async (result) => {
        const text = result.value;
        this.checkElementTextContains('@pageTitle', text);
        console.log('Success ->', `${text} page has been loaded successfully`);
      });
    },

    async fillUpUPSServiceDetails(data) {
      const countryCodeConst = {
        selector: `//select[@class="form-control select2-nosearch select2-hidden-accessible"]/option[contains(text(),'${data[0][7]}')]`,
        locateStrategy: 'xpath',
      };

      const stateConst = {
        selector: `//select[@class="form-control select2-nosearch"]/option[contains(text(),'${data[0][8]}')]`,
        locateStrategy: 'xpath',
      };

      await this.clickVisibleElement('@testURL');
      await this.api.pause(100);
      await this.clearValue('@testURL');
      await this.setField('@testURL', data[0][0]);
      await this.api.pause(100);

      await this.clickVisibleElement('@pURL');
      await this.api.pause(100);
      await this.clearValue('@pURL');
      await this.setField('@pURL', data[0][9]);
      await this.api.pause(100);

      await this.clickVisibleElement('@intType');
      await this.api.pause(100);

      await this.clickVisibleElement('@username');
      await this.api.pause(100);
      await this.clearValue('@username');
      await this.setField('@username', data[0][2]);
      await this.api.pause(100);

      await this.clickVisibleElement('@UPSPassword');
      await this.api.pause(100);
      await this.clearValue('@UPSPassword');
      await this.setField('@UPSPassword', data[0][3]);
      await this.api.pause(100);

      await this.clickVisibleElement('@UPSAccountNo');
      await this.api.pause(100);
      await this.clearValue('@UPSAccountNo');
      await this.setField('@UPSAccountNo', data[0][4]);
      await this.api.pause(100);

      await this.clickVisibleElement('@UPSAccessKey');
      await this.api.pause(100);
      await this.clearValue('@UPSAccessKey');
      await this.setField('@UPSAccessKey', data[0][5]);
      await this.api.pause(100);

      await this.clickVisibleElement('@UPSZipCode');
      await this.api.pause(100);
      await this.clearValue('@UPSZipCode');
      await this.setField('@UPSZipCode', data[0][6]);
      await this.api.pause(100);

      await this.clickVisibleElement(countryCodeConst);
      await this.api.pause(100);

      await this.clickVisibleElement(stateConst);
      await this.api.pause(1000);
    },

    async fillUpFedExServiceDetails(data) {
      const FedExNegRatesBtn =
        '//input[@name="fedex_negotiatedrates"]/parent::div/parent::div[contains(@class,"bootstrap-switch-on")]';

      await this.clickVisibleElement('@FedExKey');
      await this.api.pause(100);
      await this.clearValue('@FedExKey');
      await this.setField('@FedExKey', data[0][0]);
      await this.api.pause(100);

      await this.clickVisibleElement('@FedExPassword');
      await this.api.pause(100);
      await this.clearValue('@FedExPassword');
      await this.setField('@FedExPassword', data[0][1]);
      await this.api.pause(100);

      await this.clickVisibleElement('@FedExAccountNo');
      await this.api.pause(100);
      await this.clearValue('@FedExAccountNo');
      await this.setField('@FedExAccountNo', data[0][2]);
      await this.api.pause(100);

      await this.clickVisibleElement('@FedExMeterNo');
      await this.api.pause(100);
      await this.clearValue('@FedExMeterNo');
      await this.setField('@FedExMeterNo', data[0][3]);
      await this.api.pause(100);

      await this.clickVisibleElement('@intType');
      await this.api.pause(100);

      await this.clickVisibleElement('@FedExPackaging');
      await this.api.pause(100);

      await this.api.element('xpath', FedExNegRatesBtn, (visible) => {
        if (visible.status !== -1) {
          console.log('Show Negotiated Rates is already ON');
        } else {
          this.clickVisibleElement('@FedExNegRates');
        }
      });
    },

    async fillSenderDetails(senderDetailsTable) {
      const FedExCountry = {
        selector: `//select[@id="fedex_country"]/option[contains(.,'${senderDetailsTable[0][0]}')]`,
        locateStrategy: 'xpath',
      };

      const FedExState = {
        selector: `//select[@id="state_region"]/option[contains(.,'${senderDetailsTable[0][4]}')]`,
        locateStrategy: 'xpath',
      };
      await this.clickVisibleElement(FedExCountry);
      await this.api.pause(100);

      await this.clickVisibleElement('@FedExStreetNo');
      await this.clearValue('@FedExStreetNo');
      await this.setField('@FedExStreetNo', senderDetailsTable[0][1]);
      await this.api.pause(100);

      await this.clickVisibleElement('@FedExStreet');
      await this.clearValue('@FedExStreet');
      await this.setField('@FedExStreet', senderDetailsTable[0][2]);
      await this.api.pause(100);

      await this.clickVisibleElement('@FedExCity');
      await this.clearValue('@FedExCity');
      await this.setField('@FedExCity', senderDetailsTable[0][3]);
      await this.api.pause(100);

      await this.clickVisibleElement(FedExState);
      await this.api.pause(100);

      await this.clickVisibleElement('@FedExZipCode');
      await this.clearValue('@FedExZipCode');
      await this.setField('@FedExZipCode', senderDetailsTable[0][5]);
      await this.api.pause(500);
    },

    async chooseShippingService(Service) {
      await this.api.execute('scrollTo(500,19)');

      for (let index = 0; index < Service[0].length; index += 1) {
        // eslint-disable-next-line no-await-in-loop
        await this.clickShippingService(Service[0][index]);
      }
    },

    async clickShippingService(serviceName) {
      let shippingServiceON = '';
      let shippingServiceOFF = '';
      shippingServiceOFF = `//div[@class="portlet-body form form-horizontal form-bordered"]//label[contains(.,"${serviceName}")]//following-sibling::div/div[contains(@class, "bootstrap-switch-off")]`;
      shippingServiceON = {
        selector: `//div[@class="portlet-body form form-horizontal form-bordered"]//label[contains(.,"${serviceName}")]//following::div[1]//label`,
        locateStrategy: 'xpath',
      };

      await this.api.element('xpath', shippingServiceOFF, (visible) => {
        if (visible.status !== -1) {
          console.log(serviceName, ' service is OFF');
          this.clickVisibleElement(shippingServiceON);
          this.api.pause(500);
        } else {
          console.log(serviceName, ' service is already ON');
        }
      });
    },
    async save() {
      await this.api.execute('scrollTo(0,100)');
      await this.clickVisibleElement('@saveButton');
      await this.api.pause(3000);
    },
  },
];

module.exports = {
  elements,
  commands,
};
