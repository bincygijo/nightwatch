const { client } = require('nightwatch-api');
const { When, Then } = require('cucumber');

const CheckoutPage = client.page.checkout_po();
const customerPage = client.page.customer_po();

// Front end test case code below
When(/^I click on Proceed to checkout$/, async () => {
  await CheckoutPage.clickCheckout();
});

Then(/^One page checkout page is shown$/, async () => {
  await CheckoutPage.onePageCheckout();
});

When(
  /^I choose "([^"]*)" shipping address and click continue$/,
  async (address) => {
    await CheckoutPage.SelectShippingAddress(address);
  }
);

Then(
  /^"([^"]*)" Shipping has below methods and rates listed successfully$/,
  async (serviceName, datatable) => {
    await CheckoutPage.VerifyShippingMethod(serviceName, datatable);
  }
);

When(
  /^I choose "([^"]*)" shipping method and click on Continue button$/,
  async (serviceName) => {
    await CheckoutPage.SelectShippingMethod(serviceName);
  }
);

Then(
  /^I should see "([^"]*)" payment method is listed successfully$/,
  async (payment) => {
    await CheckoutPage.VerifyPaymentMethod(payment);
  }
);

When(
  /^I choose account payment method and click on Continue button$/,
  async () => {
    await CheckoutPage.SelectPaymentMethod('On Account');
  }
);

Then(/^Credit Card payment method is listed successfully$/, async () => {
  await CheckoutPage.VerifyPaymentMethod('Credit Card');
});

When(
  /^I choose Credit Card payment method filled in details and click on Confirm port button$/,
  async () => {
    await CheckoutPage.SelectPaymentMethod('Credit Card');
  }
);

When(/^I fill necessary details and place order successfully$/, async () => {
  await CheckoutPage.PlaceOrder();
});

Then(/^I should see order has been placed successfully$/, async () => {
  await CheckoutPage.verifyOrderCompletion();
});

Then(
  /^I should see order has been placed and verified successfully$/,
  async () => {
    await CheckoutPage.verifyOrderCompleted();
  }
);

When(/^I select Checkout as Guest and click continue button$/, async () => {
  await CheckoutPage.clickGuestChkout();
});

Then(/^I should see "([^"]*)" section$/, async (title) => {
  await CheckoutPage.VerifyBillingSection(title);
});

When(
  /^I enter below detail as billing address and click continue button$/,
  async (datatable) => {
    const data = datatable.raw();
    await customerPage.BillingAddress(data);
    await CheckoutPage.clickContinueButton();
  }
);

When(
  /^I click Register button on onepage checkout enter details as below and click submit button$/,
  async (datatable) => {
    const data = datatable.raw();
    await CheckoutPage.clickB2CRegisterOnePageChkout();
    await customerPage.RegisterUser('Public', data, 'ONE-PAGE CHKOUT');
  }
);

Then(/^I should see onepage for guest checkout$/, async () => {
  await CheckoutPage.onePageCheckout();
});

When(/^I click Paypal checkout button$/, async () => {
  await CheckoutPage.clickPaypalButton();
});

Then(/^I should navigate to paypal sandbox page$/, async () => {
  await CheckoutPage.verifyPaypalPageGuest();
});

When(/^I click on Log In button$/, async () => {
  await CheckoutPage.clickLogInButton();
});

When(/^I enter Email id and click Next button$/, async () => {
  await CheckoutPage.enterEmailPaypalGuest();
});

Then(
  /^I enter Email id and click Next button in the paypal sandbox page$/,
  async () => {
    await CheckoutPage.enterEmailPaypalB2C();
  }
);

When(/^I enter password and click Log In button$/, async () => {
  await CheckoutPage.enterPassword();
});

When(/^I click Continue button on the paypal detail page$/, async () => {
  await CheckoutPage.clickContinueBtnPaypal();
});

Then(/^I should navigate to review order page$/, async () => {
  await CheckoutPage.verifyReviewOrderPage();
});

When(/^I click on Place Order button in the review order page$/, async () => {
  await CheckoutPage.clickPlaceOrderButton();
});

When(/^I verify Order Summary$/, async () => {
  await CheckoutPage.VerifyOrderSummary();
});

When(/^I click on Continue button on onepage checkout page$/, async () => {
  await CheckoutPage.clickButtonContinue();
});

When(/^I select shipping method and click Continue button$/, async () => {
  await CheckoutPage.clickShippingButtonContinue();
});

When(/^I select "([^"]*)" payment method$/, async (payment) => {
  await CheckoutPage.selectPaymentMethodCheckout(payment);
});

When(
  /^I select "([^"]*)" payment method and click Continue button$/,
  async (payment) => {
    await CheckoutPage.selectPaymentMethodCheckout(payment);
    await CheckoutPage.clickConBtnB2C();
  }
);

When(
  /^I choose credit card type is "([^"]*)" and enter the card details$/,
  async (type, datatable) => {
    const data = datatable.raw();
    await CheckoutPage.SelectCreditCardType(type, data);
  }
);

When(/^I click Place Order button in the review order page$/, async () => {
  await CheckoutPage.clickButtonPlaceOrder();
});

When(/^I click Continue button on the one page$/, async () => {
  await CheckoutPage.clickConBtnGuest();
});

Then(/^I should see review order page$/, async () => {
  await CheckoutPage.verifyOrderReview();
});

When(/^I click Continue button$/, async () => {
  await CheckoutPage.clickEftPaymentContinueBtn();
});

When(
  /^I click on Continue button after selecting shipping address$/,
  async () => {
    await CheckoutPage.clickContinueBtnShipTo();
  }
);

When(/^I click Accept Terms and Conditions checkbox$/, async () => {
  await CheckoutPage.clickTermConditions();
});
