const { client } = require('nightwatch-api');
const { Then } = require('cucumber');

const sliderPage = client.page.slider_po();

Then(/^Slider Revolution page is loaded successfully$/, async () => {
  await sliderPage.verifySliderRevolutionPage();
});
