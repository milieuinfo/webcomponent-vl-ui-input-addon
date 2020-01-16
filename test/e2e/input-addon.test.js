
const { assert, driver } = require('vl-ui-core').Test;
const VlInputAddonPage = require('./pages/vl-input-addon.page');

describe('vl-input-addon', async () => {
    const vlInputAddonPage = new VlInputAddonPage(driver);

    before((done) => {
        vlInputAddonPage.load().then(() => {
            done()
        });
    });

  after((done) => {
      if(driver) {
          driver.quit();
          done();
      }
  })
});
