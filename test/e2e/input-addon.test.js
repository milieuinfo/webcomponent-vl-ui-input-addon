
const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlInputAddonPage = require('./pages/vl-input-addon.page');

describe('vl-input-addon', async () => {
    const vlInputAddonPage = new VlInputAddonPage(driver);

    before(() => {
        return vlInputAddonPage.load();
    });

    it('Als gebruiker kan ik de tekst zien van een input addon', async () => {
        const inputAddon = await vlInputAddonPage.getInputAddon();
    	await assert.eventually.equal(inputAddon.getText(), '€');
    });

    it('Als gebruiker kan ik een tooltip zien op een input-addon', async () => {
        const tooltip = await vlInputAddonPage.getTooltipFromInputAddon();
        await assert.eventually.equal(tooltip.getText(), 'Euro');
    });
});
