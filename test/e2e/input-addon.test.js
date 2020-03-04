
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

    it('Als gebruiker kan ik de tekst van een tooltip op een input-addon raadplegen', async () => {
        const tooltip = await vlInputAddonPage.getTooltipFromInputAddon();
        await assert.eventually.equal(tooltip.getText(), 'Euro');
    });

    it('als gebruiker zie ik een input addon', async () => {
        const inputAddonButton = await vlInputAddonPage.getInputAddonButton();
        await assert.eventually.isTrue(inputAddonButton.isDisplayed());
        await assert.eventually.isFalse(inputAddonButton.hasText());
        const inputAddonButtonIcon = await inputAddonButton.getIcon();
        await assert.eventually.isTrue(inputAddonButtonIcon.isDisplayed());
        await assert.eventually.equal(inputAddonButtonIcon.getType(), 'location');
    });
});
