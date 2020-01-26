
const { assert, driver } = require('vl-ui-core').Test;
const VlInputAddonPage = require('./pages/vl-input-addon.page');

describe('vl-input-addon', async () => {
    const vlInputAddonPage = new VlInputAddonPage(driver);

    before(() => {
        return vlInputAddonPage.load();
    });
});
